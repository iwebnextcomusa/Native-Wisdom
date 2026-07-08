import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, FileText, Download, Play, Pause, Compass, Heart, Sparkles, Clock, BookOpen, Volume2, Calendar, ChevronRight, Check } from "lucide-react";

interface ResourcesPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResourcesPage({ isOpen, onClose }: ResourcesPageProps) {
  // Download states
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);

  // Audio state
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [audioProgress, setAudioProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  // Blog states
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const freePdfs = [
    {
      id: "alignment-checklist",
      title: "The Daily Alignment Checklist",
      description: "A simple, highly effective morning ritual designed to establish absolute grounding, intention setting, and energetic hygiene.",
      pages: "4 Pages (PDF)",
      size: "1.2 MB",
      icon: <Compass className="w-5 h-5 text-[#7B9E87]" />
    },
    {
      id: "integration-workbook",
      title: "Emotional Integration Workbook",
      description: "Journaling templates and self-observation exercises designed to help you process, integrate, and release heavy emotional patterns.",
      pages: "12 Pages (PDF)",
      size: "3.4 MB",
      icon: <Heart className="w-5 h-5 text-[#C9A66B]" />
    },
    {
      id: "breathwork-guide",
      title: "The Sanctuary Breathwork Cycle",
      description: "A beautiful visual step-by-step guide to diaphragmatic breathing cycles for stress release and sensory alignment.",
      pages: "6 Pages (PDF)",
      size: "1.8 MB",
      icon: <Sparkles className="w-5 h-5 text-[#7B9E87]" />
    }
  ];

  const audioTracks = [
    {
      id: "morning-centering",
      title: "Morning Centering Breathwork Meditation",
      description: "5 minutes of ambient, atmospheric guidance to connect with your breath, calm your nervous system, and set intentions.",
      duration: "05:00"
    },
    {
      id: "deep-release",
      title: "Ambient Release & Grounding Soundscape",
      description: "10 minutes of gentle musical drones and soothing nature frequencies coupled with soft mindfulness whispers from Sabrina.",
      duration: "10:00"
    }
  ];

  const blogPosts = [
    {
      id: "blog-slowing-down",
      title: "Creating a Sanctuary of Peace in a Fast-Paced World",
      date: "June 24, 2026",
      readTime: "5 Min Read",
      excerpt: "Your external environment directly reflects your internal state. Here are three practical ways to slow down, take a deep breath, and create a sensory sanctuary of peace right inside your home.",
      content: `The modern world operates at a relentless speed, continually pulling our attention outward. We are flooded with notifications, deadlines, and social expectations, leaving our minds overstimulated and our spirits exhausted. But what if the antidote isn't escaping to an island, but carving out a sanctuary within our daily lives?

Spiritual and emotional alignment begins with slowing down. When we intentionally slow our pace, we trigger our parasympathetic nervous system, allowing our mind and emotions to integrate rather than react.

Here are three simple, grounded practices to establish your physical and mental sanctuary today:

1. Dedicate a Sacred Corner
You do not need a whole room; a single corner, a comfortable cushion, or a windowsill can become your sanctuary. Place items here that speak to your heart—perhaps a warm stone, a simple candle, or a feather. This becomes your sensory trigger for silence.

2. The Morning Intention Breathe
Before picking up your phone or looking at email, sit on your cushion. Take three slow, diaphragmatic breaths, breathing in through the nose and releasing with an open mouth. State one humble intention for the day, such as "I move with ease and grace today."

3. Establish Digital Boundaries
Define a hard limit—such as no screens within the first 30 minutes of waking and the last 60 minutes before sleeping. Let the space be filled with soft light, warm tea, and reflection instead.

By slowing down and creating these physical boundaries, you give your soul room to speak and your emotions the grace to settle. Welcome home to yourself.`
    },
    {
      id: "blog-emotional-language",
      title: "The Subtle Language of Emotional Patterns",
      date: "May 18, 2026",
      readTime: "7 Min Read",
      excerpt: "Our deep-seated blockages and patterns are not enemies to be destroyed. They are messengers trying to reveal what parts of us are calling for deep, compassionate healing.",
      content: `For years, we are taught to push away uncomfortable feelings. We label anxiety, sadness, and anger as negative and look for immediate distractions or substances to numb them. But in doing so, we ignore the precise signals our body is sending us.

In Sabrina’s healing practice, we believe that emotional patterns are a beautiful, subtle language. Your blockages are not design flaws; they are messengers attempting to protect you or guide your focus back to a deep wound that desires alignment.

Understanding the Message of Your Discomfort:

- Tightness in the Chest or Throat: This often speaks of unspoken truths or withheld boundaries. It is the voice asking, "When will you speak up for your heart?"
- A Persistent Knot in the Stomach: This frequently relates to a lack of sovereignty or fear of losing control. It asks, "Who are you carrying that does not belong to you?"
- Emotional Numbness or Apathy: This is a protective shield we construct when we have been overwhelmed. It is the body saying, "I need absolute safety before I can feel again."

To heal is not to force these feelings to disappear. Rather, it is to pull up a chair, sit with them, and ask with complete curiosity and compassion: "What are you trying to reveal to me? What do you need right now?"

When we meet our blockages with unconditional warmth rather than resistance, the hard shell begins to melt. We step into true emotional sovereignty.`
    },
    {
      id: "blog-tribe-healing",
      title: "Why True Healing Demands a Supportive Tribe",
      date: "April 12, 2026",
      readTime: "6 Min Read",
      excerpt: "Personal development is a solo walk, but healing is a tribal experience. Discover why connecting with an authentic, compassionate community accelerates emotional alignment.",
      content: `There is a common modern myth that we must heal entirely on our own before we are fit to join community. We lock ourselves away with self-help books, waiting for the day we are 'perfectly aligned' before stepping into the light.

But human beings are neurobiologically wired for connection. We cannot heal relational wounds in complete isolation.

The power of a supportive tribe lies in co-regulation. When we are around grounded, compassionate individuals, our nervous systems recognize their safety. We subconsciously synchronize, allowing deep-seated guards to drop safely.

Key benefits of healing within a sacred tribe:

1. Witnessing and Being Witnessed
To speak your struggles aloud and receive nods of empathy rather than judgment is a profound medicine. It erases the heavy burden of shame, reminding you that your struggles are part of the shared human tapestry.

2. Diverse Mirroring
Every member of our tribe is a reflection. When you witness another member's breakthrough, it lights a path for your own. Their courage becomes your permission.

3. Sustained Sovereignty
When you stumble on your journey, a tribe is there to hold space for you without trying to fix you. They remind you of your power when you temporarily forget it.

Whether through our Loxahatchee sanctuary circles or our online course forums, Sabrina welcomes you to step out of the cold cave of isolation and into the warm light of our tribe. You do not have to carry the load alone.`
    }
  ];

  // Simulated Download Handler
  const handleDownload = (id: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadedIds((prev) => [...prev, id]);
    }, 2000);
  };

  // Simulated Audio Handler
  const handleAudioPlay = (id: string) => {
    if (isPlaying === id) {
      setIsPlaying(null);
      if (progressInterval.current) clearInterval(progressInterval.current);
    } else {
      setIsPlaying(id);
      setAudioProgress(0);
      if (progressInterval.current) clearInterval(progressInterval.current);
      progressInterval.current = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(null);
            if (progressInterval.current) clearInterval(progressInterval.current);
            return 0;
          }
          return prev + 1;
        });
      }, 300); // 30 seconds total simulated playback loop
    }
  };

  useEffect(() => {
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#333333]/60 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
          onClick={onClose}
        >
          {/* Main Modal Card */}
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="bg-[#FAF9F6] w-full max-w-5xl h-[85vh] md:h-[80vh] rounded-[32px] border border-[#E8DCC6] shadow-2xl overflow-hidden flex flex-col text-left"
            onClick={(e) => e.stopPropagation()}
            id="resources-page-modal"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 md:px-10 py-6 border-b border-[#E8DCC6] bg-white">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#7B9E87]" />
                  <span className="text-[10px] font-mono text-[#7B9E87] tracking-[0.2em] uppercase font-bold">
                    Sacred Growth Library
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-[#333333]">
                  Sovereign <span className="font-serif italic font-normal text-[#7B9E87]">Growth Resources</span>
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#FAF9F6] text-[#333333]/60 hover:text-[#333333] rounded-full border border-transparent hover:border-[#E8DCC6] transition-all"
                aria-label="Close Library"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Workspace */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12">
              {/* Introduction */}
              <div className="max-w-2xl space-y-3 text-left">
                <p className="text-sm text-[#555555] leading-relaxed font-light">
                  A comprehensive, expanding sanctuary of wisdom. Explore downloadable workbooks, guided meditative audio soundscapes, and deep written articles carefully written by Sabrina. These tools are designed to sustain your daily emotional alignment and spiritual integration.
                </p>
              </div>

              {/* Grid Layout: Downloads and Audio */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: PDFs (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-2 border-b border-[#E8DCC6] pb-3">
                    <FileText className="w-4 h-4 text-[#7B9E87]" />
                    <h4 className="font-serif text-lg font-semibold text-[#333333]">
                      Free Workbooks & Guides
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {freePdfs.map((pdf) => {
                      const isDownloading = downloadingId === pdf.id;
                      const isDownloaded = downloadedIds.includes(pdf.id);

                      return (
                        <div
                          key={pdf.id}
                          className="bg-white rounded-2xl p-5 border border-[#E8DCC6] flex items-center justify-between gap-6 hover:shadow-md transition-all group"
                          id={`pdf-row-${pdf.id}`}
                        >
                          <div className="flex items-start gap-4">
                            <div className="bg-[#FAF9F6] p-3 rounded-xl border border-[#E8DCC6]/60 text-[#7B9E87] group-hover:bg-[#7B9E87] group-hover:text-white transition-colors duration-300">
                              {pdf.icon}
                            </div>
                            <div className="space-y-1">
                              <h5 className="font-serif text-sm font-bold text-[#333333] leading-tight">
                                {pdf.title}
                              </h5>
                              <p className="text-[11px] text-[#555555]/85 leading-relaxed font-light max-w-md">
                                {pdf.description}
                              </p>
                              <div className="flex gap-3 text-[10px] font-mono text-[#555555]/50">
                                <span>{pdf.pages}</span>
                                <span>•</span>
                                <span>{pdf.size}</span>
                              </div>
                            </div>
                          </div>

                          {/* Download Button */}
                          <button
                            onClick={() => handleDownload(pdf.id)}
                            disabled={isDownloading || isDownloaded}
                            className={`p-3 rounded-xl border transition-all ${
                              isDownloaded
                                ? "bg-[#7B9E87]/10 border-[#7B9E87] text-[#7B9E87]"
                                : isDownloading
                                ? "bg-[#FAF9F6] border-[#E8DCC6] text-[#C9A66B] animate-pulse"
                                : "bg-[#FAF9F6] hover:bg-[#7B9E87] border-[#E8DCC6] hover:border-[#7B9E87] text-[#333333] hover:text-white"
                            }`}
                          >
                            {isDownloaded ? (
                              <Check className="w-4 h-4" />
                            ) : isDownloading ? (
                              <span className="text-[10px] font-mono font-bold">...</span>
                            ) : (
                              <Download className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Audios (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-2 border-b border-[#E8DCC6] pb-3">
                    <Volume2 className="w-4 h-4 text-[#C9A66B]" />
                    <h4 className="font-serif text-lg font-semibold text-[#333333]">
                      Guided Sound Centering
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {audioTracks.map((track) => {
                      const isTrackPlaying = isPlaying === track.id;

                      return (
                        <div
                          key={track.id}
                          className="bg-white rounded-2xl p-5 border border-[#E8DCC6] space-y-4 hover:shadow-sm transition-all"
                          id={`audio-card-${track.id}`}
                        >
                          <div className="flex justify-between items-start">
                            <div className="space-y-1 max-w-[80%]">
                              <h5 className="font-serif text-xs font-bold text-[#333333] leading-tight">
                                {track.title}
                              </h5>
                              <p className="text-[10px] text-[#555555]/80 leading-relaxed font-light">
                                {track.description}
                              </p>
                            </div>

                            <button
                              onClick={() => handleAudioPlay(track.id)}
                              className={`p-2.5 rounded-full border transition-all ${
                                isTrackPlaying
                                  ? "bg-[#7B9E87] text-white border-[#7B9E87]"
                                  : "bg-[#FAF9F6] hover:bg-[#C9A66B] border-[#E8DCC6] hover:border-[#C9A66B] text-[#333333] hover:text-white"
                              }`}
                            >
                              {isTrackPlaying ? (
                                <Pause className="w-3.5 h-3.5" />
                              ) : (
                                <Play className="w-3.5 h-3.5 fill-current" />
                              )}
                            </button>
                          </div>

                          {/* Mini Progress Bar if Playing */}
                          {isTrackPlaying && (
                            <div className="space-y-1">
                              <div className="w-full h-1 bg-[#E8DCC6] rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-[#7B9E87] transition-all duration-300"
                                  style={{ width: `${audioProgress}%` }}
                                ></div>
                              </div>
                              <div className="flex justify-between text-[8px] font-mono text-[#555555]/50">
                                <span>Simulated Playing...</span>
                                <span>{track.duration}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Wisdom Blog Section */}
              <div className="space-y-6 pt-6 border-t border-[#E8DCC6]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#7B9E87]" />
                  <h4 className="font-serif text-lg font-semibold text-[#333333]">
                    Tribe Wisdom Blog & Articles
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white rounded-2xl p-6 border border-[#E8DCC6] flex flex-col justify-between hover:border-[#7B9E87] hover:shadow-lg transition-all duration-300 group text-left"
                      id={`blog-grid-${post.id}`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-[#555555]/50">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#C9A66B]" /> {post.date}
                          </span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h5 className="font-serif text-sm font-bold text-[#333333] leading-tight group-hover:text-[#7B9E87] transition-colors">
                          {post.title}
                        </h5>

                        <p className="text-xs text-[#555555]/85 leading-relaxed font-light line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-5 border-t border-[#E8DCC6]/40 mt-5">
                        <button
                          onClick={() => setSelectedPost(post.id)}
                          className="text-[#7B9E87] group-hover:text-[#C9A66B] text-[10px] font-mono uppercase font-bold tracking-wider flex items-center gap-1"
                        >
                          <span>Read Full Article</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footnote */}
            <div className="bg-[#E8DCC6]/10 px-10 py-5 border-t border-[#E8DCC6] text-center">
              <p className="text-xs text-[#555555] italic">
                Our resources are continuously updated. Join our mailing tribe below or speak to our friendly AI bot to receive notifications.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Blog Post Detail Overlay */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#333333]/85 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
          onClick={() => setSelectedPost(null)}
        >
          {/* Article Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            className="bg-[#FAF9F6] w-full max-w-2xl h-[80vh] md:h-[70vh] rounded-[24px] border border-[#E8DCC6] shadow-2xl overflow-hidden flex flex-col text-left"
            onClick={(e) => e.stopPropagation()}
            id="blog-detail-modal"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-5 border-b border-[#E8DCC6] bg-white">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#7B9E87]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7B9E87]">
                  Tribe Wisdom Library
                </span>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 hover:bg-[#FAF9F6] text-[#333333]/60 hover:text-[#333333] rounded-full border border-transparent hover:border-[#E8DCC6] transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {(() => {
                const post = blogPosts.find((p) => p.id === selectedPost);
                if (!post) return null;

                return (
                  <article className="space-y-6">
                    <div className="space-y-2 border-b border-[#E8DCC6] pb-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#555555]/60">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h4 className="font-serif text-2xl font-light text-[#333333] leading-tight">
                        {post.title}
                      </h4>
                    </div>

                    <div className="text-sm text-[#333333]/90 leading-relaxed font-light whitespace-pre-wrap space-y-4">
                      {post.content}
                    </div>
                  </article>
                );
              })()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
