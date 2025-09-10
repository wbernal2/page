// src/app/data/projects.js
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    background: "This project was born out of a desire to understand the complete lifecycle of an e-commerce application. I wanted to create a platform that could handle real-world scenarios including inventory management, user authentication, payment processing, and order tracking. The goal was to build something that could actually be used by a small business.",
    whatIDid: [
      "Designed and implemented a responsive front-end using React and modern CSS",
      "Built a robust REST API using Node.js and Express.js",
      "Integrated MongoDB for efficient data storage and retrieval",
      "Implemented secure user authentication using JWT tokens",
      "Integrated Stripe API for secure payment processing",
      "Created an admin dashboard for inventory and order management",
      "Deployed the application using Docker and AWS EC2"
    ],
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
    background: "Working on group projects in college, I noticed how difficult it was to keep track of everyone's tasks and deadlines. This inspired me to create a comprehensive task management solution that would facilitate better team collaboration and project organization.",
    whatIDid: [
      "Developed a modern UI with Next.js and TypeScript for type safety",
      "Implemented real-time collaboration using Socket.io",
      "Created drag-and-drop functionality for intuitive task management",
      "Built a PostgreSQL database schema with Prisma ORM",
      "Added user authentication and team management features",
      "Implemented email notifications for task assignments and deadlines",
      "Created responsive design for mobile and desktop use"
    ],
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
    background: "As someone who enjoys outdoor activities, I wanted to create a weather app that not only provided accurate forecasts but also had a beautiful, intuitive interface. The goal was to make checking the weather a delightful experience rather than a mundane task.",
    whatIDid: [
      "Built cross-platform mobile app using React Native and Expo",
      "Integrated OpenWeather API for accurate weather data",
      "Implemented location services for automatic weather updates",
      "Created smooth animations and transitions for better UX",
      "Added weather alerts and notifications",
      "Designed custom weather icons and animations",
      "Optimized app performance for smooth operation on both iOS and Android"
    ],
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
    background: "Fascinated by the intersection of finance and technology, I decided to explore how machine learning could be applied to financial markets. This project was an opportunity to dive deep into data science and understand the complexities of financial prediction.",
    whatIDid: [
      "Collected and preprocessed large datasets of historical stock data",
      "Performed exploratory data analysis to identify key patterns",
      "Engineered features using technical indicators and market sentiment",
      "Implemented and compared multiple ML algorithms (LSTM, Random Forest, SVM)",
      "Optimized model performance using cross-validation and hyperparameter tuning",
      "Created visualization tools for model predictions and performance metrics",
      "Documented findings and limitations in a comprehensive report"
    ],
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
