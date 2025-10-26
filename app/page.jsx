"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Menu, X, Award } from "lucide-react";
import { portfolioData } from "./data/constants";
import { useEffect, useState } from "react";
import { ProjectCard } from "./componants/ProjectCard";
import { ThreeBackground } from "./componants/ThreeBackground";

const ThemeStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Press+Start+2P&display=swap');
      
      body {
        font-family: 'Play', sans-serif;
      }

      .font-display {
        font-family: 'Press Start 2P', cursive;
      }
    `}
  </style>
);

// --- Reusable Components ---
const Section = ({ id, title, children, className = "" }) => (
  <motion.section
    id={id}
    className={`w-full max-w-5xl mx-auto py-16 md:py-24 px-6 md:px-8 ${className} relative`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-12 text-center relative tracking-wider">
      {title}
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-cyan-400/70 rounded-full"></span>
    </h2>
    {children}
  </motion.section>
);

const SkillBar = ({ name, icon: Icon }) => (
  <motion.div
    className="bg-gray-900 border border-cyan-700/30 p-4 rounded-lg flex items-center space-x-4 shadow-lg shadow-cyan-500/5 relative overflow-hidden group"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div
      className="absolute top-0 left-0 h-full bg-cyan-700/30 z-0"
      initial={{ width: "0%" }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
    />
    <div className="relative z-10 flex items-center space-x-4">
      <Icon className="w-8 h-8 text-cyan-300" />
      <span className="text-gray-200 font-medium">{name}</span>
    </div>
  </motion.div>
);

const TimelineCard = ({ role, company, duration, description }) => (
  <div className="relative pl-8 md:pl-12 py-4 border-l-2 border-cyan-700/50 group">
    <div className="absolute -left-2 top-4 w-4 h-4 bg-cyan-700/50 rounded-full border-4 border-gray-950 group-hover:bg-cyan-300 transition-colors duration-300"></div>
    <h3 className="text-xl font-semibold text-gray-100">{role}</h3>
    <p className="text-cyan-300 mb-1">
      {company} | {duration}
    </p>
    <p className="text-gray-400">{description}</p>
  </div>
);

const CertificationCard = ({ name, source }) => (
  <div className="bg-gray-900/50 border border-cyan-700/30 p-4 rounded-lg flex items-center space-x-4">
    <Award className="w-6 h-6 text-cyan-300 shrink-0" />
    <div>
      <p className="text-gray-200 font-medium">{name}</p>
      <p className="text-cyan-400 text-sm">{source}</p>
    </div>
  </div>
);

// --- Main App Component ---
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThreeLoaded, setIsThreeLoaded] = useState(false);

  // Effect to load the Three.js script
  useEffect(() => {
    // Check if script is already loaded
    if (window.THREE) {
      setIsThreeLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.async = true;
    script.onload = () => {
      setIsThreeLoaded(true);
    };
    script.onerror = () => {
      console.error("Failed to load Three.js script");
    };

    document.body.appendChild(script);

    // Cleanup script tag on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "About",
    "Skills",
    "Experience",
    "Education",
    "Projects",
    "Community",
    "Contact",
  ];

  const typingVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        ease: "easeInOut",
        duration: 2,
        delay: 0.5,
      },
    },
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 1],
      },
    },
  };

  return (
    <div className="bg-gray-950 text-gray-300 leading-relaxed selection:bg-cyan-300 selection:text-black relative overflow-x-hidden">
      <ThemeStyles />

      {/* Scanline Effect */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, #fff 2px)",
        }}
      ></div>

      {/* All content goes into a relative container to sit above the scanlines */}
      <div className="relative z-10">
        {/* Header */}
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled || isOpen
              ? "bg-gray-950/80 backdrop-blur-sm shadow-md border-b border-cyan-700/30"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex justify-between items-center h-20">
              <a
                href="#"
                className="text-2xl font-bold text-gray-100 tracking-wider font-display"
              >
                <span className="text-cyan-300">A</span>H.
              </a>
              <nav className="hidden md:flex flex-wrap gap-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 font-medium tracking-wide"
                  >
                    {link}
                  </a>
                ))}
              </nav>
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-100 z-50"
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-40 pt-20 md:hidden"
            >
              <nav className="flex flex-col items-center justify-center h-full space-y-8">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl text-gray-300 hover:text-cyan-300 transition-colors duration-300 tracking-wide"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          {/* Hero Section */}

          <section
            id="home"
            className="h-screen min-h-[700px] flex items-center justify-center bg-transparent px-6 md:px-8 relative"
          >
            {/* 3D Background Removed */}
            <ThreeBackground isLoaded={isThreeLoaded} />

            {/* Hero Text Content */}
            <div className="text-center relative z-10">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-100 font-display"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {portfolioData.name}
              </motion.h1>
              <motion.div
                className="mt-4 text-xl md:text-2xl text-gray-300 inline-block overflow-hidden whitespace-nowrap"
                variants={typingVariants}
                initial="hidden"
                animate="visible"
              >
                {portfolioData.title}
              </motion.div>
              <motion.span
                className="inline-block w-1 h-6 md:h-7 bg-cyan-300 ml-1"
                variants={cursorVariants}
                animate="blinking"
              />
              <motion.p
                className="max-w-2xl mx-auto mt-6 text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
              >
                I build elegant and efficient solutions for web and mobile.
              </motion.p>
              <motion.div
                className="mt-10 flex justify-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
              >
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Github size={32} />
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Linkedin size={32} />
                </a>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <Section id="about" title="About Me">
            <p className="max-w-3xl mx-auto text-center text-gray-400 text-lg">
              {portfolioData.about}
            </p>
          </Section>

          {/* Skills Section */}
          <Section id="skills" title="Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {portfolioData.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </Section>

          {/* Experience Section */}
          <Section id="experience" title="Experience">
            <div className="max-w-3xl mx-auto">
              {portfolioData.experience.map((exp, index) => (
                <TimelineCard key={index} {...exp} />
              ))}
            </div>
          </Section>

          {/* Education Section */}
          <Section id="education" title="Education">
            <div className="max-w-3xl mx-auto">
              {portfolioData.education.map((edu, index) => (
                <TimelineCard key={index} {...edu} />
              ))}
            </div>
          </Section>

          {/* Projects Section */}
          <Section id="projects" title="Projects">
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </Section>

          {/* Community Section */}
          <Section id="community" title="Community">
            <div className="max-w-3xl mx-auto">
              {portfolioData.community.map((comm, index) => (
                <TimelineCard key={index} {...comm} />
              ))}

              {/* Certifications Sub-Section */}
              <h3 className="text-2xl font-bold text-cyan-300 mt-16 mb-8 text-center">
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {portfolioData.certifications.map((cert) => (
                  <CertificationCard key={cert.name} {...cert} />
                ))}
              </div>
            </div>
          </Section>

          {/* Contact Section */}
          <Section id="contact" title="Get In Touch">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of an amazing team. Feel free to reach
                out to me.
              </p>
              <a
                href={`mailto:${portfolioData.email}`}
                className="inline-block bg-cyan-600/50 hover:bg-cyan-600/80 border border-cyan-500 text-cyan-200 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 tracking-wider"
              >
                Say Hello
              </a>
              <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-300" />
                  <span>{portfolioData.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-300" />
                  <span>{portfolioData.location}</span>
                </div>
              </div>
            </div>
          </Section>
        </main>

        {/* Footer */}
        <footer className="bg-transparent border-t border-cyan-700/30 py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights
              Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
