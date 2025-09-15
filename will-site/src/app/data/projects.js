// src/app/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Spotify Rooms",
    description: "A collaborative music streaming application that allows friends to create shared listening rooms, add songs to queues, and discover music together in real-time.",
    background: "Inspired by the social aspect of music and wanting to recreate the experience of listening to music with friends, I built Spotify Rooms to bridge the gap between individual music streaming and shared musical experiences. The app enables users to create virtual rooms where friends can join, contribute to playlists, and enjoy synchronized music playback.",
    whatIDid: [
      "Integrated Spotify Web API for music streaming and playlist management",
      "Built real-time synchronization using WebSocket connections",
      "Designed an intuitive room-based user interface with React",
      "Implemented user authentication through Spotify OAuth",
      "Created collaborative queue management with voting systems",
      "Added real-time chat functionality for room participants",
      "Developed responsive design for seamless mobile and desktop experience"
    ],
    technologies: ["React", "Node.js", "Spotify API", "WebSocket", "Express"],
    category: "web",
    github: "https://github.com/William7786/spotify-rooms",
    demo: "https://spotify-rooms-demo.com",
    image: "/projects/spotify-rooms/SR_Home.png",
    images: [
      "/projects/spotify-rooms/SR_Home.png",
      "/projects/spotify-rooms/SR_Create.png",
      "/projects/spotify-rooms/SR_Connecting.png",
      "/projects/spotify-rooms/SR_Room.png"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Card Game App",
    description: "A full-stack card-games platform (Solitaire & War) with secure user accounts, a live leaderboard, and a REST API. The backend is ASP.NET Core/C# with SQL Server (Azure) and the frontend is React.",
    background: "I focused on building a comprehensive full-stack web application that demonstrates clean domain logic for game rules, robust data access patterns, and defensive security practices. The goal was to create a platform that showcases proper separation of concerns across Controllers → Accessors → Engine layers while implementing secure authentication and REST API design.",
    whatIDid: [
      "Implemented user authentication and parameterized SQL queries to mitigate SQL injection",
      "Built HTTP REST API using ASP.NET Core controllers for Auth and Leaderboard with JSON endpoints consumed by React client",
      "Designed data layer with SQL Server, thin Accessor classes (UserAccessor, GameAccessor, LeaderboardAccessor), and EF Core AppDBContext",
      "Created comprehensive xUnit unit tests for deck/pile behavior and game rules (52 vs 54 cards with jokers, face-up state, legal moves)",
      "Developed C# domain classes (Deck, Pile, SolitaireRules, WarRules) separating game logic from I/O for easier testing and reuse",
      "Built leaderboard system that aggregates wins per user/game and returns Top 5 via API endpoint",
      "Created React frontend with Router for Register, Login, Home, Solitaire, War, and Waiting Room pages"
    ],
    technologies: ["ASP.NET Core", "C#", "React", "SQL Server", "Azure", "EF Core", "xUnit"],
    category: "web",
    github: "https://github.com/William7786/card-game",
    demo: "https://card-game-demo.com",
    image: "/projects/card-game/CA_Home.png",
    images: [
      "/projects/card-game/CA_Home.png",
      "/projects/card-game/CA_Database.png",
      "/projects/card-game/CA_Register.png",
      "/projects/card-game/CA_Solitaire.png",
      "/projects/card-game/CA_War.png"
    ],
    featured: true
  },
  {
    id: 3,
    title: "Schedule Locally",
    description: "A true end-to-end dockerized booking platform: Next.js (React) frontend + ASP.NET Core (C#) REST API + SQL Server database—wired together, tested, and shipped with Docker for one-command local runs.",
    background: "Built as a comprehensive full-stack application demonstrating modern development practices with containerized architecture. The platform showcases end-to-end flows from UI to API to database, emphasizing Docker orchestration, security best practices, and dev/prod parity for reliable deployment across different environments.",
    whatIDid: [
      "Developed Next.js 15 frontend with auth UI (NextAuth Credentials), calendar views (FullCalendar), forms, and fetch helpers",
      "Built ASP.NET Core REST API with controllers for auth, shops, and schedules, plus input validation and clear HTTP status codes",
      "Implemented SQL Server database via EF Core with User, Shop, and Availability entities, migrations, and parameterized queries",
      "Created end-to-end flows: sign up → sign in → view shop availability → create bookings → calendar updates",
      "Containerized all services (API, database, web app) with Docker running in isolated containers on shared network",
      "Orchestrated with Docker Compose for configured ports, environment variables, and service dependencies",
      "Implemented security with credential-based authentication and injection defense through EF Core parameterized access",
      "Added unit tests covering core scheduling and domain logic to prevent regressions"
    ],
    technologies: ["Next.js", "ASP.NET Core", "C#", "SQL Server", "EF Core", "Docker", "NextAuth"],
    category: "web",
    github: "https://github.com/William7786/schedule-locally",
    demo: "https://schedule-locally-demo.com",
    image: "/projects/schedule-locally/SL_Calendar.webp",
    images: [
      "/projects/schedule-locally/SL_Home.png",
      "/projects/schedule-locally/SL_Calendar.webp"
    ],
    featured: false
  },
  {
    id: 4,
    title: "MDR — Macrodata Refinement",
    description: "A retro-futuristic, Severance-inspired interface built to level up my vanilla JS + React skills. The app renders an endless grid of digits, lets you mark sparse 'feeling' numbers, and triggers playful group animations that fly into bins.",
    background: "Built as a front-end first project to practice performance-focused JavaScript and React fundamentals. This Severance-inspired interface demonstrates pure UI architecture with React components, custom hooks for state management, and smooth animations—all without requiring a backend. The project focuses on infinite scrolling, performant rendering, and polished micro-interactions.",
    whatIDid: [
      "Built pure UI/JS architecture with React components and custom hooks managing state, interactions, and derived data",
      "Implemented infinite grid with continuous scrolling in all directions using memoized computations and selective re-rendering",
      "Created fly-to-bin animations using CSS variables (--bin-x/--bin-y) with hardware-accelerated transforms and motion-safe fallbacks",
      "Developed micro-interactions including hover grow effects, subtle shake animations, and angled stamps for visual texture",
      "Applied accessibility best practices with high-contrast overlays, focus styles, semantic buttons, and keyboard-friendly targets",
      "Practiced advanced JavaScript including state modeling with immutability, refs with layout math using getBoundingClientRect",
      "Optimized performance with useMemo, useCallback, batched updates, and proportional render work",
      "Implemented event handling with click/keyboard support, debounced updates, and managed event propagation"
    ],
    technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "CSS Animations"],
    category: "web",
    github: "https://github.com/William7786/severance-mdr-game",
    demo: "https://severance-mdr-game-demo.com",
    image: "/projects/severance-mdr-game/MDR_Number.png",
    images: [
      "/projects/severance-mdr-game/MDR_Title.jpg",
      "/projects/severance-mdr-game/MDR_S1.avif",
      "/projects/severance-mdr-game/MDR_Number.png",
      "/projects/severance-mdr-game/MDR_drag.png"
    ],
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
