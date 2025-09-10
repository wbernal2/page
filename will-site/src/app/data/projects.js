// src/app/data/projects.js
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    category: "web",
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://your-ecommerce-demo.com",
    image: "/placeholder-project1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    category: "web",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://your-taskapp-demo.com",
    image: "/placeholder-project2.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Mobile Weather App",
    description: "Cross-platform mobile application providing weather forecasts with beautiful animations and location-based services.",
    technologies: ["React Native", "TypeScript", "OpenWeather API", "Expo"],
    category: "mobile",
    github: "https://github.com/yourusername/weather-app",
    demo: null,
    image: "/placeholder-project3.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Machine Learning Model",
    description: "Predictive model for stock price analysis using historical data and technical indicators with 85% accuracy.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Jupyter"],
    category: "ml",
    github: "https://github.com/yourusername/ml-stock-prediction",
    demo: null,
    image: "/placeholder-project4.jpg",
    featured: false
  }
];

export const schoolWork = [
  {
    id: 1,
    title: "Database Management System",
    description: "Designed and implemented a relational database for a university library system with complex queries and stored procedures.",
    course: "CS 340 - Database Systems",
    semester: "Fall 2024",
    technologies: ["MySQL", "PHP", "HTML/CSS"],
    grade: "A",
    github: "https://github.com/yourusername/library-db-system"
  },
  {
    id: 2,
    title: "Operating System Simulator",
    description: "Built a process scheduler simulator implementing various scheduling algorithms including FIFO, SJF, and Round Robin.",
    course: "CS 344 - Operating Systems",
    semester: "Spring 2024",
    technologies: ["C", "Linux", "Make"],
    grade: "A-",
    github: "https://github.com/yourusername/os-simulator"
  },
  {
    id: 3,
    title: "Computer Graphics Renderer",
    description: "3D graphics renderer with ray tracing capabilities, lighting models, and texture mapping from scratch.",
    course: "CS 457 - Computer Graphics",
    semester: "Fall 2023",
    technologies: ["C++", "OpenGL", "GLSL"],
    grade: "A",
    github: "https://github.com/yourusername/3d-renderer"
  },
  {
    id: 4,
    title: "Network Protocol Implementation",
    description: "Implemented TCP-like reliable data transfer protocol with sliding window and error detection mechanisms.",
    course: "CS 372 - Computer Networks",
    semester: "Spring 2023",
    technologies: ["Python", "Socket Programming", "Wireshark"],
    grade: "A",
    github: "https://github.com/yourusername/network-protocol"
  }
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 90, category: "Programming" },
    { name: "Python", level: 85, category: "Programming" },
    { name: "TypeScript", level: 80, category: "Programming" },
    { name: "Java", level: 75, category: "Programming" },
    { name: "C++", level: 70, category: "Programming" },
    { name: "SQL", level: 80, category: "Database" },
    { name: "HTML/CSS", level: 95, category: "Web" }
  ],
  frameworks: [
    { name: "React", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Express", level: 75, category: "Backend" },
    { name: "React Native", level: 70, category: "Mobile" },
    { name: "TensorFlow", level: 65, category: "ML" }
  ],
  tools: [
    { name: "Git", level: 90, category: "Version Control" },
    { name: "Docker", level: 75, category: "DevOps" },
    { name: "AWS", level: 70, category: "Cloud" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "PostgreSQL", level: 75, category: "Database" },
    { name: "Figma", level: 85, category: "Design" }
  ]
};
