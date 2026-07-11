import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy load Gemini AI to prevent crash if key is missing on startup
let aiClient: GoogleGenAI | null = null;

function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("Warning: GEMINI_API_KEY is not set. Chatbot will run in demo/offline fallback mode.");
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Chatbot API Endpoint
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages array is required." });
  }

  const ai = getGeminiClient();
  if (!ai) {
    // Fallback Mock responses for offline/demo mode if key is missing
    const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
    let reply = "Hello! I am Sabrina's wellness assistant. I can help you learn more about healing sessions, online courses, or resources for personal growth. Please note that my live AI integration is currently offline (API key not configured), but I'm happy to help you with anything else!";
    
    if (lastUserMessage.includes("book") || lastUserMessage.includes("session") || lastUserMessage.includes("schedule")) {
      reply = "To book a 1-on-1 transformational healing session with Sabrina White Horse, you can click the 'Book a Healing Session' button, scroll down to the contact section to submit the booking form, or call directly at 561-801-0150.";
    } else if (lastUserMessage.includes("course") || lastUserMessage.includes("learn")) {
      reply = "Sabrina offers deep, self-paced courses for emotional and spiritual mastery. You can find them under the 'Online Courses' card in our Services section, or scroll down to the Journey section to see how our tribe thrives together!";
    } else if (lastUserMessage.includes("contact") || lastUserMessage.includes("where") || lastUserMessage.includes("location")) {
      reply = "Sabrina is located in Loxahatchee, Florida. You can reach out via email at sbarnettloves@gmail.com or by calling 561-801-0150. You can also fill out the contact form below!";
    } else if (lastUserMessage.includes("price") || lastUserMessage.includes("cost")) {
      reply = "We offer tailored transformational plans. For specific session pricing and customized packages, please complete our contact form with your goals, and Sabrina will connect with you to discuss the options.";
    } else if (lastUserMessage.includes("product") || lastUserMessage.includes("sacred earth") || lastUserMessage.includes("detergent") || lastUserMessage.includes("shampoo") || lastUserMessage.includes("wash") || lastUserMessage.includes("affiliate")) {
      reply = "Sabrina has partnered with Sacred Earth to offer 100% organic, natural, chemical-free home and personal care products! These include natural liquid detergent, dish wash, floor wash, and personal care products like face wash, hand wash, and Ayurvedic hair cleanser. Scroll down to the 'Sacred Earth Organic Sanctuary' section (formerly Testimonials) on the main page to explore them or find your perfect fit using our interactive Wellness Matcher quiz!";
    }
    
    return res.json({ text: reply });
  }

  try {
    // Format conversation history for Gemini
    // Gemini 2/3 uses simple structure. Let's make a system instruction that embodies Sabrina's brand.
    const systemInstruction = `
      You are the calming, wise, and compassionate virtual assistant for Sabrina White Horse (sabrinawhitehorse.com), a transformational healing and personal growth therapist based in Loxahatchee, Florida.
      Your tone must be warm, peaceful, grounded, professional, and nature-inspired. Avoid sounding overly mystical, sci-fi, or dramatic.
      Answer questions about Sabrina's services:
      - Transformational Healing Sessions (1-on-1, focused on emotional balance, personal growth, spiritual/emotional mastery, and unlocking potential).
      - Online Courses (deep self-paced courses for emotional awareness and spiritual development).
      - Personal Growth Resources (downloadable guides, educational articles, and videos).
      - Sacred Earth Partnership: Sabrina partners with Sacred Earth (www.sacredearth.in) to offer organic, 100% natural, chemical-free home care (Liquid Detergent, Dish Wash, Floor Wash) and personal care (Hand Wash, Face Wash, Ayurvedic Hair Cleanser / Shampoo) products. They are powered by natural cleaning agents like Soapnuts (Reetha) and pure essential oils. Encourage users to check out the "Sacred Earth Organic Sanctuary" section and use the interactive Wellness Matcher quiz to find their perfect product.
      - Sabrina Barnett's contact info: Phone: 561-801-0150, Email: sbarnettloves@gmail.com, Location: Loxahatchee, Florida.
      Encourage visitors to schedule sessions and explore courses. Be helpful, gentle, and positive. Keep answers concise, highly readable, and formatted beautifully using spacing or short paragraphs.
    `;

    // Map conversation messages to prompt format
    const contents = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (err: any) {
    console.error("Gemini API Error:", err);
    res.status(500).json({ error: "Something went wrong during your session. Please try again." });
  }
});

// Setup Vite or Static assets depending on environment
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

startServer();
