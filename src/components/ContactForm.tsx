import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending form securely
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1200);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-grid-container">
      {/* 1. Contact Info & Google Maps Mockup */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
        <div className="space-y-6">
          <div>
            <span className="text-xs font-mono text-sage tracking-widest uppercase font-semibold block mb-1">Florida Sanctuary</span>
            <h3 className="font-serif text-3xl text-charcoal font-semibold">Connect with Sabrina</h3>
            <p className="text-sm text-charcoal/70 leading-relaxed mt-2">
              Whether you are ready to book your first transformational healing session, seek information about deep spiritual courses, or simply have a question, Sabrina is here to walk beside you.
            </p>
          </div>

          <div className="space-y-4" id="contact-info-list">
            <div className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-sand/30 hover:border-sage/40 transition-colors">
              <div className="bg-sage/10 p-3 rounded-lg text-sage">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-charcoal/50 font-medium uppercase tracking-wider">Location</p>
                <p className="text-sm font-semibold text-charcoal">Loxahatchee, FL</p>
              </div>
            </div>

            <a
              href="tel:561-801-0150"
              className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-sand/30 hover:border-sage/40 transition-colors group"
            >
              <div className="bg-sage/10 p-3 rounded-lg text-sage group-hover:bg-sage group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-charcoal/50 font-medium uppercase tracking-wider">Phone</p>
                <p className="text-sm font-semibold text-charcoal group-hover:text-sage transition-colors">561-801-0150</p>
              </div>
            </a>

            <a
              href="mailto:sbarnettloves@gmail.com"
              className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-sand/30 hover:border-sage/40 transition-colors group"
            >
              <div className="bg-sage/10 p-3 rounded-lg text-sage group-hover:bg-sage group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-charcoal/50 font-medium uppercase tracking-wider">Email</p>
                <p className="text-sm font-semibold text-charcoal group-hover:text-sage transition-colors break-all">sbarnettloves@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* Beautiful Google Maps Placeholder (styled local map) */}
        <div className="relative h-64 bg-sand/20 rounded-2xl border border-sand/50 overflow-hidden shadow-sm" id="google-maps-placeholder">
          {/* Faux Satellite Map Graphic */}
          <div className="absolute inset-0 bg-[#e5e3df] opacity-90 mix-blend-multiply flex flex-col justify-between p-6">
            <div className="w-full flex justify-between items-start pointer-events-none">
              <span className="bg-white/80 backdrop-blur-md text-[10px] text-charcoal/70 font-mono px-2 py-1 rounded shadow-sm border border-sand/30">
                LOXAHATCHEE, FL 33470
              </span>
              <span className="bg-sage text-white text-[10px] font-mono px-2 py-1 rounded shadow-sm">
                Florida Sanctuary
              </span>
            </div>
            
            {/* Center Pin Indicator */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="relative flex h-16 w-16 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-25"></span>
                <div className="relative bg-white p-3 rounded-full shadow-lg border border-sand">
                  <MapPin className="w-6 h-6 text-sage fill-sage/20 animate-bounce" />
                </div>
              </div>
              <p className="font-serif text-sm font-semibold text-charcoal mt-2 drop-shadow-sm bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-sand/30">
                Sabrina Whitehorse
              </p>
            </div>

            <div className="text-left">
              <p className="text-[10px] text-charcoal/50 font-mono">Map coordinates: 26.7728° N, 80.2642° W</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Professional Booking/Contact Form */}
      <div className="lg:col-span-7 bg-white rounded-2xl p-8 md:p-10 border border-sand/40 shadow-sm relative overflow-hidden flex flex-col justify-center">
        {/* Decorative elements */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-sand/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-sage/50 rounded-full blur-2xl opacity-20 pointer-events-none"></div>

        {submitted ? (
          <div className="text-center py-12 space-y-6" id="form-success-container">
            <div className="inline-flex bg-sage/10 p-4 rounded-full text-sage">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-2xl text-charcoal font-semibold">Thank You!</h4>
              <p className="text-sm text-charcoal/70 max-w-md mx-auto">
                Your healing session request has been securely sent. Sabrina will connect with you shortly at your preferred email or phone number to coordinate details.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-sage hover:bg-[#6a8b75] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-xl shadow-sm transition-all active:scale-95 mt-4"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10" id="sabrina-contact-form">
            <div className="space-y-2">
              <h4 className="font-serif text-xl font-semibold text-charcoal">Request a Healing Plan</h4>
              <p className="text-xs text-charcoal/60">
                Please complete the form below. All shared information is treated with absolute confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-charcoal/80 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-[#FAF9F6] border border-sand/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-sage focus:border-sage text-charcoal"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-charcoal/80 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-[#FAF9F6] border border-sand/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-sage focus:border-sage text-charcoal"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-xs font-semibold text-charcoal/80 uppercase tracking-wider">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="561-000-0000"
                className="w-full bg-[#FAF9F6] border border-sand/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-sage focus:border-sage text-charcoal"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-charcoal/80 uppercase tracking-wider">
                How can Sabrina assist you?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your intentions, physical/emotional goals, or any questions you have here..."
                className="w-full bg-[#FAF9F6] border border-sand/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-sage focus:border-sage text-charcoal resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sage hover:bg-[#6a8b75] text-white py-4 rounded-xl shadow-md transition-all duration-300 font-semibold tracking-wide flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              id="btn-submit-contact-form"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Send Booking Request</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
