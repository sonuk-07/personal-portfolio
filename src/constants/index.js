import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate frontend developer with expertise in building responsive and user-friendly web applications. I specialize in modern technologies like React.js, Tailwind CSS, and JavaScript. My goal is to leverage my skills to create seamless user experiences and contribute to innovative projects.`;

export const ABOUT_TEXT = `I am a dedicated frontend developer with a strong foundation in JavaScript, React.js, HTML, CSS, and UI/UX principles. My experience includes building responsive and accessible web applications using Tailwind CSS and Material UI. I am always eager to learn new technologies and optimize frontend performance. I enjoy problem-solving, collaborating with teams, and crafting visually appealing interfaces that enhance user engagement.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Frontend Developer (Freelance)",
    company: "Self-Employed",
    description: `Designed and developed responsive web applications for clients using React.js and Tailwind CSS. Improved user experience by implementing interactive UI elements and animations.`,
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Figma"],
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer Intern",
    company: "Tech Startup (Remote)",
    description: `Worked on an E-learning platform, optimizing page load speed and implementing API integrations. Contributed to UI/UX improvements and component-based design.`,
    technologies: ["React.js", "Redux", "Material UI", "REST APIs"],
  },
  {
    year: "2023",
    role: "Academic Project",
    company: "Sunway College",
    description: `Developed a fully responsive E-commerce website as part of coursework, implementing state management and dynamic filtering features.`,
    technologies: ["React.js", "Tailwind CSS", "Vite", "Firebase"],
  },
];


export const PROJECTS = [
  {
    title: "E-Learning Platform",
    image: project1,
    description:
      "An interactive online education platform with real-time content updates, user authentication, and optimized performance.",
    technologies: ["React.js", "Tailwind CSS", "Django REST Framework"]
  },
  {
    title: "Job Portal Web Application",
    image: project2,
    description:
      "A job listing platform with dynamic filtering, search functionality, and responsive UI for seamless user experience.",
    technologies: ["React.js", "Redux", "Material UI"]
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio showcasing projects, skills, and achievements, deployed with Vercel and optimized for performance.",
    technologies: ["React.js", "Tailwind CSS", "Vercel"]
  }
];

export const CONTACT = {
  address: "Kalanki, Kathmandu, Nepal",
  phoneNo: "+977 9816313179",
  email: "skjais04@gmail.com"
};
