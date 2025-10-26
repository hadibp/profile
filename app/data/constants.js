import {  Github, Code, Server, Database, BrainCircuit, Layers, Lightbulb, Cog, Cloud, MoveVertical, DatabaseZap } from 'lucide-react';

// --- Data based on your resume ---
export const portfolioData = {
  name: "Abdul Hadi B.P",
  title: "Senior Software Engineer",
  location: "Malappuram, Kerala, India",
  email: "abdulhadibp@gmail.com",
  phone: "+91 7034037653",
  socials: {
    github: "https://github.com/your-github-profile", // Replace with your actual GitHub URL
    linkedin: "https://linkedin.com/in/your-linkedin-profile", // Replace with your actual LinkedIn URL
  },
  about: "A passionate Senior Software Engineer with a strong background in building scalable web and mobile applications. Experienced in leading front-end architecture, mentoring developers, and collaborating with cross-functional teams to deliver high-quality products. Proficient in Next.js, React, Flutter, and modern web technologies, with a keen eye for UI/UX design and performance.",
  skills: [
    { name: "React / Next.js", icon: Code },
    { name: "Flutter", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "Dart", icon: Code },
    { name: "Node.js / Express", icon: Server },
    { name: "HTML", icon: Code },
    { name: "CSS / Tailwind", icon: Layers },
    { name: "Riverpod / Bloc", icon: MoveVertical },
    { name: "AWS", icon: Cloud },
    { name: "Firebase", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Redis", icon: DatabaseZap },
    { name: "Git & GitHub", icon: Github },
    { name: "Jira", icon: Cog },
    { name: "Figma", icon: BrainCircuit },
    { name: "Agile Workflow", icon: Lightbulb },
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Riskcovry",
      duration: "Jul 2025 - Present",
      description: "Leading front-end architecture redesign, mentoring junior developers, and driving the development of scalable web applications using Next.js. Setting UI development best practices and collaborating with cross-functional teams."
    },
    {
      role: "Software Engineer (Contract)",
      company: "Riskcovry",
      duration: "Apr 2024 - Jun 2025",
      description: "Contributed to a digital insurance platform, engineering responsive UI components for web and mobile. Transitioned to a full-time role based on strong performance and contributions."
    },
    {
      role: "Flutter Developer",
      company: "Fortlogic",
      duration: "Oct 2022 - Apr 2024",
      description: "Built and maintained mobile applications using Flutter. Translated UI/UX designs into functional and intuitive interfaces, diagnosing and fixing performance bugs across Android and iOS."
    },
     {
      role: "Co-founder & Flutter Developer",
      company: "Fugipie Technologies",
      duration: "May 2022 - Oct 2022",
      description: "Co-founded a software services company, delivering mobile and web solutions. Developed mobile apps with Flutter and Dart, designed UI/UX in Figma, and built web frontends with React.js/Next.js."
    },
  ],
  education: [
     {
      role: "Master of Computer Applications (MCA)",
      company: "Vellore Institute of Technology (VIT)",
      duration: "Jul 2025 - Present",
      description: "Pursuing an online MCA with a specialization in Cybersecurity."
    },
     {
      role: "BSc. Computer Science",
      company: "Safi Institute Of Advanced Studies",
      duration: "Jul 2019 - Apr 2022",
      description: "Completed undergraduate studies in Computer Science."
    },
    {
      role: "Computer Science Higher Secondary",
      company: "Rahmaniya HSS Kozhikode",
      duration: "Mar 2017 - Jun 2019",
      description: "Focused on Computer Science for higher secondary education."
    },
  ],
  community: [
    {
      role: "Co-founder & Convener",
      company: "Techsias Community",
      duration: "May 2020 - Apr 2022",
      description: "Led student tech community, organized workshops, coding events, and collaborative learning sessions. Mentored peers and contributed to the community's web development."
    },
    {
      role: "Member & Contributor",
      company: "Hackclub",
      duration: "Community Member",
      description: "Actively participated in Hackclub events, contributing to open-source projects and collaborative coding sessions. Engaged with a global community of student makers."
    },
    {
      role: "Volunteer & Mentor",
      company: "Tinkerhub",
      duration: "Community Member",
      description: "Contributed to Tinkerhub's mission of promoting technology literacy. Mentored peers and assisted in organizing workshops and tech talks."
    },
  ],
  projects: [
    {
      title: "Saj Resort Static Website",
      description: "A modern, responsive website for a luxury resort, focusing on performance and clean visual hierarchy.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#", // Replace with actual project link
    },
    {
      title: "Misty Peak - Resort Management",
      description: "A complete resort management system covering booking, inventory, and staff operations for web and mobile.",
      technologies: ["Flutter", "Next.js", "Node.js", "MongoDB"],
      link: "#", // Replace with actual project link
    },
    {
      title: "Fugipie Inventory",
      description: "A mobile app for inventory management targeted at mobile store owners, built with a focus on a responsive UI.",
      technologies: ["Flutter", "Dart", "Firebase"],
      link: "#", // Replace with actual project link
    },
    {
      title: "Netflix Clone (Mini Project)",
      description: "A learning project to explore React basics, API integration (TMDB), and Firebase authentication.",
      technologies: ["React.js", "Firebase", "TMDB API"],
      link: "#", // Replace with actual project link
    },
  ],
  certifications: [
    { name: "Programming for Everybody (Getting Started with Python)", source: "Coursera" },
    { name: "Chatbot with Rasa and Python", source: "Coursera" },
    { name: "IT Security: Defense against the digital dark arts", source: "Coursera" },
  ],
};