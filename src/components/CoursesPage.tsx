import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, BookOpen, Clock, Users, CheckCircle, ArrowRight, Play, Award, Sparkles, Check } from "lucide-react";

interface CoursesPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoursesPage({ isOpen, onClose }: CoursesPageProps) {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [enrollName, setEnrollName] = useState("");
  const [enrollEmail, setEnrollEmail] = useState("");
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  const courses = [
    {
      id: "emotional-sovereignty",
      title: "Emotional Sovereignty & Self-Mastery",
      duration: "6 Weeks",
      lessons: "18 Video Lessons",
      students: "140+ Tribal Members",
      tagline: "Reclaim your personal authority, understand emotional patterns, and heal old wounds.",
      description: "A deep, interactive program designed to guide you through emotional awareness, processing core blockages, and setting compassionate boundaries. This is Sabrina's flagship program for establishing absolute emotional sovereignty.",
      curriculum: [
        "Week 1: Mapping the Inner Landscape (Self-Observation)",
        "Week 2: Understanding Emotional Triggers & Root Patterns",
        "Week 3: The Art of Somatic Release & Deep Grounding",
        "Week 4: Setting Boundaries with Unconditional Love",
        "Week 5: Integrating Mind, Senses, Emotions, and Soul",
        "Week 6: Stepping into Sovereign Freedom & Daily Clarity"
      ],
      price: "$197",
      features: [
        "18 Video Lessons & Somatic Practices",
        "6 Immersive Downloadable Workbooks",
        "3 Audio Healing Soundscapes",
        "Lifetime Access & Community Forum",
        "Monthly Live Q&A with Sabrina"
      ],
      icon: <Award className="w-6 h-6 text-[#7B9E87]" />
    },
    {
      id: "spiritual-awakening",
      title: "Spiritual Awakening & Daily Alignment",
      duration: "4 Weeks",
      lessons: "12 Video Lessons",
      students: "220+ Awakened Souls",
      tagline: "Connect with your inner wisdom, clear mental fog, and establish daily sacred habits.",
      description: "A beautifully structured path to cultivating daily alignment. We focus on daily practices—integrating the physical, emotional, and spiritual senses—to make room for clarity, gratitude, and genuine spiritual awakening.",
      curriculum: [
        "Week 1: Creating Your Sanctuary (Physical & Mental space)",
        "Week 2: Awakening the Intuitive Voice & Inner Guidance",
        "Week 3: Daily Rituals of Breath, Movement, & Stillness",
        "Week 4: Sustaining Flow State in a Busy World"
      ],
      price: "$129",
      features: [
        "12 Video Tutorials & Guided Rituals",
        "4 Daily Journaling & Intentions Calendars",
        "Guided Breathwork MP3 collection",
        "Lifetime Access to Course Portal",
        "Digital Certificate of Completion"
      ],
      icon: <Sparkles className="w-6 h-6 text-[#C9A66B]" />
    },
    {
      id: "sovereignty-intensive",
      title: "The Sacred Tribe Mastery Intensive",
      duration: "8 Weeks",
      lessons: "24 Deep Modules",
      students: "85+ Advanced Students",
      tagline: "Our masterclass in advanced energetic healing, soul-alignment, and master-level personal sovereignty.",
      description: "Designed for those ready to commit to ultimate self-realization. We cover the high-end wellness blueprint, integrating professional spiritual practices, resolving generational blockages, and standing as a leader of healing in your own community.",
      curriculum: [
        "Week 1-2: Energetic Hygiene & Advanced Chakra Clearing",
        "Week 3-4: Resolving Transgenerational & Karmic Loops",
        "Week 5-6: Soul Purpose Recovery & Core Values Realignment",
        "Week 7-8: Establishing Your Healing Space & Guiding Others"
      ],
      price: "$299",
      features: [
        "24 Advanced Video & Somatic Audio Guides",
        "8 Immersive Workbooks & Soul Charts",
        "1-on-1 Midpoint Progress Email Review with Sabrina",
        "Private VIP Slack Group for Cohort Members",
        "Certificate of Master Spiritual Practitioner"
      ],
      icon: <BookOpen className="w-6 h-6 text-[#7B9E87]" />
    }
  ];

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enrollName && enrollEmail) {
      setEnrollSuccess(true);
      setTimeout(() => {
        setEnrollSuccess(false);
        setEnrollName("");
        setEnrollEmail("");
        setSelectedCourse(null);
      }, 3500);
    }
  };

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
            id="courses-page-modal"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 md:px-10 py-6 border-b border-[#E8DCC6] bg-white">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#7B9E87]" />
                  <span className="text-[10px] font-mono text-[#7B9E87] tracking-[0.2em] uppercase font-bold">
                    Online Learning Center
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-[#333333]">
                  Immersive <span className="font-serif italic font-normal text-[#7B9E87]">Online Courses</span>
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#FAF9F6] text-[#333333]/60 hover:text-[#333333] rounded-full border border-transparent hover:border-[#E8DCC6] transition-all"
                aria-label="Close Learning Center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Split */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10">
              <div className="max-w-2xl text-left space-y-3">
                <p className="text-sm text-[#555555] leading-relaxed font-light">
                  Welcome to our digital portal of spiritual and emotional mastery. Sabrina has distilled years of 1-on-1 healing wisdom, somatic therapy, and meditative expertise into self-paced, beautifully structured courses. Walk your path in complete comfort, at your own pace, supported by our private tribe.
                </p>
              </div>

              {/* Course Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl p-6 border border-[#E8DCC6] hover:border-[#7B9E87] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                    id={`course-grid-${course.id}`}
                  >
                    <div className="space-y-4">
                      {/* Course Header */}
                      <div className="flex justify-between items-start">
                        <div className="bg-[#E8DCC6]/20 p-2.5 rounded-xl">
                          {course.icon}
                        </div>
                        <span className="text-xs font-mono font-bold text-[#C9A66B]">
                          {course.price}
                        </span>
                      </div>

                      {/* Title & Info */}
                      <div className="space-y-1.5">
                        <h4 className="font-serif text-lg font-bold text-[#333333] leading-tight group-hover:text-[#7B9E87] transition-colors">
                          {course.title}
                        </h4>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-mono text-[#555555]/70">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#7B9E87]" /> {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3 text-[#C9A66B]" /> {course.lessons}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#555555]/85 leading-relaxed font-light">
                        {course.tagline}
                      </p>
                    </div>

                    {/* Button */}
                    <div className="pt-6">
                      <button
                        onClick={() => setSelectedCourse(course.id)}
                        className="w-full bg-[#FAF9F6] hover:bg-[#7B9E87] hover:text-white text-[#333333] text-xs font-semibold uppercase tracking-wider py-3 rounded-xl border border-[#E8DCC6] hover:border-[#7B9E87] transition-all flex items-center justify-center gap-2"
                      >
                        <span>Explore Syllabus</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footnote bar */}
            <div className="bg-[#E8DCC6]/10 px-10 py-5 border-t border-[#E8DCC6] text-center">
              <p className="text-xs text-[#555555] italic">
                Need guidance choosing the right path? Chat with our friendly AI Tribe Companion or schedule a free 10-minute clarity call.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Course Detail Overlay */}
      {selectedCourse && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#333333]/85 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
          onClick={() => setSelectedCourse(null)}
        >
          {/* Syllabus Details Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            className="bg-[#FAF9F6] w-full max-w-3xl h-[85vh] md:h-[75vh] rounded-[24px] border border-[#E8DCC6] shadow-2xl overflow-hidden flex flex-col text-left"
            onClick={(e) => e.stopPropagation()}
            id="syllabus-detail-modal"
          >
            {/* Detail Header */}
            <div className="flex justify-between items-center px-8 py-5 border-b border-[#E8DCC6] bg-white">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#7B9E87]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7B9E87]">
                  Detailed Syllabus & Features
                </span>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-2 hover:bg-[#FAF9F6] text-[#333333]/60 hover:text-[#333333] rounded-full border border-transparent hover:border-[#E8DCC6] transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Detail Contents */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {(() => {
                const course = courses.find((c) => c.id === selectedCourse);
                if (!course) return null;

                return (
                  <div className="space-y-8">
                    {/* Course Title and Tagline */}
                    <div className="space-y-2">
                      <h4 className="font-serif text-2xl font-light text-[#333333] leading-tight">
                        {course.title}
                      </h4>
                      <p className="text-sm font-serif italic text-[#7B9E87]">
                        {course.tagline}
                      </p>
                      <p className="text-xs text-[#555555] leading-relaxed font-light">
                        {course.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#E8DCC6]">
                      {/* Curriculum Timeline */}
                      <div className="space-y-4">
                        <h5 className="font-serif text-sm font-bold text-[#333333] uppercase tracking-wider">
                          Curriculum Outline
                        </h5>
                        <div className="space-y-3">
                          {course.curriculum.map((week, idx) => (
                            <div key={idx} className="flex gap-3 text-xs text-[#333333]">
                              <span className="font-mono font-bold text-[#C9A66B] flex-shrink-0">
                                [0{idx + 1}]
                              </span>
                              <span className="font-light">{week}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features & Enrollment Form */}
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h5 className="font-serif text-sm font-bold text-[#333333] uppercase tracking-wider">
                            What is Included
                          </h5>
                          <ul className="space-y-2">
                            {course.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs text-[#555555]">
                                <Check className="w-3.5 h-3.5 text-[#7B9E87] flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Sign-up form */}
                        <div className="bg-white p-5 rounded-2xl border border-[#E8DCC6] space-y-4 shadow-sm">
                          <div className="flex justify-between items-center border-b border-[#E8DCC6] pb-2.5">
                            <span className="text-xs font-serif font-bold text-[#333333]">Enroll with Lifetime Access</span>
                            <span className="font-mono text-sm font-bold text-[#7B9E87]">{course.price}</span>
                          </div>

                          {enrollSuccess ? (
                            <div className="py-4 text-center space-y-2">
                              <div className="w-10 h-10 bg-[#7B9E87]/10 text-[#7B9E87] rounded-full flex items-center justify-center mx-auto">
                                <Check className="w-5 h-5" />
                              </div>
                              <p className="text-xs font-bold text-[#333333]">Congratulations!</p>
                              <p className="text-[10px] text-[#555555]">You've registered successfully. Check your email for login details.</p>
                            </div>
                          ) : (
                            <form onSubmit={handleEnrollSubmit} className="space-y-3 text-xs">
                              <div>
                                <label className="block text-[10px] uppercase font-bold text-[#333333]/50 mb-1">Your Name</label>
                                <input
                                  type="text"
                                  required
                                  value={enrollName}
                                  onChange={(e) => setEnrollName(e.target.value)}
                                  placeholder="Evelyn Ross"
                                  className="w-full p-2 bg-[#FAF9F6] border border-[#E8DCC6] rounded-lg focus:outline-none focus:border-[#7B9E87]"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] uppercase font-bold text-[#333333]/50 mb-1">Email Address</label>
                                <input
                                  type="email"
                                  required
                                  value={enrollEmail}
                                  onChange={(e) => setEnrollEmail(e.target.value)}
                                  placeholder="evelyn@example.com"
                                  className="w-full p-2 bg-[#FAF9F6] border border-[#E8DCC6] rounded-lg focus:outline-none focus:border-[#7B9E87]"
                                />
                              </div>
                              <button
                                type="submit"
                                className="w-full bg-[#7B9E87] text-white py-2.5 rounded-lg font-bold uppercase text-[10px] tracking-wider hover:bg-[#688a73] transition-colors"
                              >
                                Process Secure Registration
                              </button>
                            </form>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
