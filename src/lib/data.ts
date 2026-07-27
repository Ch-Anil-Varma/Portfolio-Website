export const profile = {
  name: "Anil Varma Chitturi",
  shortName: "Anil Varma",
  headline: "AI & Robotics Enthusiast in the making",
  taglines: [
    "Building AI solutions for real-world problems.",
    "Training models. Teaching machines to see.",
    "Developing Robotics & Embedded Systems."
  ],
  location: "Kakinada, Andhra Pradesh, India",
  email: "anilvarmachitturi29@gmail.com",
  phone: "+91 95531 29929",
  linkedin: "https://www.linkedin.com/in/anil-varma-chitturi",
  github: "https://github.com/Ch-Anil-Varma",
  status: "Open to internships & collaborations",
  summary:
    "Motivated and passionate Artificial Intelligence and Robotics undergraduate with hands-on experience in automation tools, data analysis, web development, and team project management. Eager to apply technical and problem-solving skills in a dynamic environment to contribute to innovation and continuous learning.",
  aboutParagraphs: [
    "I'm an undergraduate at Aditya Degree College, Kakinada, reading for a BSc in Artificial Intelligence and Robotics, and I build things that remove repetitive work from other people's days — from a bot that emails university results the moment they're published, to a smart billboard tool built for the Government of Andhra Pradesh.",
    "My path into this field started with curiosity about how machines could make decisions, and it turned into a habit of shipping small, working tools rather than just studying theory. I've placed first among 90 teams automating result extraction, and I compete in robotics events for the same reason I code late at night — I like watching a system go from idea to something that actually runs.",
    "Right now I split my time between coursework in AI and robotics, personal projects in automation and generative AI, and looking for opportunities — internships, research, or teams — where I can learn fast, contribute early, and keep building things that are useful to real people.",
  ],
  resumeFile: "/Anil_Varma_Chitturi_Resume.pdf",
  photo: "/images/profile.jpeg",
};

export const socials = [
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: "phone" },
] as const;

export type SkillCategory = {
  category: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
    {
    category: "Robotics",
    icon: "bot",
    skills: ["Robotics Fundamentals","ROS2","Arduino, ESP32 & Raspberry Pi Based Projects"],
  },
  {
    category: "AI & Machine Learning",
    icon: "brain-circuit",
    skills: ["Machine Learning Foundations", "Model Training", "Prompt Engineering", "Applied AI Chatbots"],
  },
  {
    category: "Data Analysis",
    icon: "bar-chart-3",
    skills: ["Pandas", "NumPy", "Matplotlib","Seaborn", "Scikit-learn"],
  },

  {
    category: "Web & Bot Development",
    icon: "code-2",
    skills: ["Web Development with React & Next.js","TypeScript","DiscordBots" ],
  },
  {
    category: "Tools & Platforms",
    icon: "wrench",
    skills: ["Automation Anywhere", "UIPath", "MS Office,", "Git & GitHub","Linux"],
  },
  {
    category: "Soft Skills",
    icon: "users",
    skills: ["Communication", "Quick Learning", "Team Building", "Multitasking", "Project Ownership"],
  },
];

export type ExperienceItem = {
  organization: string;
  role: string;
  duration: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    organization: "Government of Andhra Pradesh",
    role: "Developer — Smart Billboard Management Tool",
    duration: "In progress",
    points: [
      "Building a smart billboard management system intended for use by a state government body.",
      "Owning the tool end-to-end, from requirements to a working, deployable build.",
    ],
  },
  {
    organization: "Automation Anywhere Team Project",
    role: "Lead Developer — Result Extraction Bot",
    duration: "Competition win",
    points: [
      "Built a bot that extracts student results from university websites automatically.",
      "Stored results in Excel with built-in CGPA formulas and performance analysis, then emailed them directly to students.",
      "Reduced server load and staff workload by replacing a manual, repetitive process.",
      "Secured 1st prize over 90 competing teams.",
    ],
  },
  {
    organization: "Robo Fest 2k25, Aditya Degree Colleges",
    role: "Competitor — Singles Category",
    duration: "2025",
    points: [
      "Competed against entrants from across all Aditya Degree colleges.",
      "Placed 2nd in the singles category.",
    ],
  },
];

export type Project = {
  title: string;
  status: string;
  description: string;
  features: string[];
  challenge: string;
  solution: string;
  tech: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Smart Billboard Management Tool",
    status: "Government of AP · In progress",
    description:
      "A management system for digital billboards, built for use by the Government of Andhra Pradesh to plan, monitor, and control billboard content and placement.",
    features: [
      "Centralized control over billboard content and scheduling",
      "Built with government-scale reliability in mind",
      "Designed for non-technical staff to operate day to day",
    ],
    challenge:
      "Translating a public-sector requirement into a tool that is simple enough for daily operational staff to use without training.",
    solution:
      "Focused on a clear, minimal workflow and iterated the interface directly against operator feedback rather than adding features speculatively.",
    tech: ["Automation", "Web Development", "Systems Design"],
    tags: ["Automation", "Web", "Government"],
  },
  {
    title: "Result Extraction & Performance Bot",
    status: "1st Prize · 90+ teams",
    description:
      "An Automation Anywhere bot that pulls student results directly from university result portals, compiles them into Excel with CGPA formulas, and emails each student their performance analysis automatically.",
    features: [
      "Automated scraping of results from university websites",
      "Excel output with built-in CGPA calculation formulas",
      "Automatic, personalized email delivery to each student",
      "Cut server load and manual staff effort during result season",
    ],
    challenge:
      "University result portals were not built for automated access, and result days brought heavy server load that could break a naive bot.",
    solution:
      "Designed the extraction flow to be resilient and staggered, and layered in CGPA and performance-analysis formulas so the output was immediately useful, not just raw data.",
    tech: ["Automation Anywhere", "RPA", "Excel Automation", "Email Automation"],
    tags: ["Automation", "RPA", "Data"],
  },
  {
    title: "AI Chatbot UI (Gemini API)",
    status: "Personal project",
    description:
      "A chatbot interface capable of answering open-ended questions, built on top of Google's Gemini API to explore practical generative AI product design.",
    features: [
      "Conversational interface for general Q&A",
      "Integrated directly with the Gemini API",
      "Built as a hands-on exploration of applied generative AI",
    ],
    challenge:
      "Learning to design a chat UI and manage API-driven responses with no prior production experience in generative AI tooling.",
    solution:
      "Started from a minimal working prompt-response loop and layered in UI and reliability improvements iteratively.",
    tech: ["Gemini API", "JavaScript", "UI Design"],
    tags: ["AI", "Chatbot", "Web"],
  },
];

export const projectFilters = ["All", "Automation", "AI", "Web", "RPA", "Data", "Government", "Chatbot"];

export type EducationItem = {
  institution: string;
  degree: string;
  detail: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    institution: "Aditya Degree College, Kakinada",
    degree: "BSc — Artificial Intelligence and Robotics",
    detail: "CGPA: 8.9",
    period: "Expected 2027",
  },
  {
    institution: "Narayana Junior College, Ramachandrapuram",
    degree: "Intermediate (Class XII)",
    detail: "83.8% marks",
    period: "2024",
  },
  {
    institution: "ZPP High School, K. Gangavaram",
    degree: "SSC (Class X)",
    detail: "74.8% marks",
    period: "2022",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export const certifications: Certification[] = [
  {
    name: "Object-Oriented Software Engineering",
    issuer: "Coursera",
    date: "Completed",
  },
];

export type Achievement = {
  title: string;
  description: string;
  category: string;
};

export const achievements: Achievement[] = [
  {
    title: "1st Prize — Result Extraction Automation",
    description:
      "Won 1st place over 90 teams for building an Automation Anywhere bot that extracts and emails university results with performance analysis.",
    category: "Hackathon",
  },
  {
    title: "2nd Prize — Robo Fest 2k25",
    description:
      "Placed 2nd in the singles category across all Aditya Degree colleges in a competitive robotics event.",
    category: "Robotics Competition",
  },
  {
    title: "Government Project Contributor",
    description:
      "Selected to build a smart billboard management tool for the Government of Andhra Pradesh.",
    category: "Public Sector",
  },
];

export const languages = ["Telugu (Native)", "English"];
export const hobbies = [
  "Exploring AI & Robotics innovations",
  "Building tech projects and gadgets",
  "Travelling and discovering new cultures",
  "Outdoor sports",
];

export const testimonials = [
  {
    quote:
      "Anil has a habit of turning an assignment into something bigger than what was asked — the results bot is still saving our team hours every semester.",
    name: "Faculty Mentor",
    role: "Aditya Degree College, Kakinada",
  },
  {
    quote:
      "He's the person on the team who wants to see the thing actually run, not just work on slides. That mindset is what got us first place.",
    name: "Teammate",
    role: "Automation Anywhere Project",
  },
  {
    quote:
      "Calm under pressure at Robo Fest and quick to debug on the spot — the kind of competitor you want next to you, not against you.",
    name: "Fellow Competitor",
    role: "Robo Fest 2k25",
  },
];

export const blogPlaceholders = [
  {
    title: "What building a government automation tool taught me about real users",
    excerpt: "Notes on shipping software for people who did not ask for more software.",
    date: "Coming soon",
  },
  {
    title: "Automating a university's result day, end to end",
    excerpt: "How a bot, an Excel sheet, and some CGPA formulas replaced a week of manual work.",
    date: "Coming soon",
  },
  {
    title: "Getting started with the Gemini API as a student",
    excerpt: "A practical walkthrough of building a first chatbot without a production background.",
    date: "Coming soon",
  },
];
