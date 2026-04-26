// 🚀 THE TRUTH - COMPREHENSIVE PORTFOLIO DATA
export const PROFILE = {
  name: "Reda OULD OULHADJ",
  role: "Robotics Engineer",
  tagline: "Building autonomous systems that see, learn, and act. I bridge the gap between AI and real-world hardware.",
  location: "Clermont-Ferrand, France",
  email: "redaouldoulhadj@gmail.com",
  phone: "+33 7 45 52 17 25",
  linkedin: "linkedin.com/in/reda-ould-oulhadj",
  status: "M2 Artificial Perception & Robotics · UCA · 2026",
  stats: [
    { v: "22nd", l: "National Rank" },
    { v: "2/42", l: "M1 Rank" },
    { v: "3/16", l: "M2 S3 Rank" },
    { v: ">500 FPS", l: "RL Sim Speed" },
    { v: "C2", l: "French Level" },
  ],
};

export const PROJECTS = [
  {
    id: "vla-manipulation", num: "01", year: "2025-26",
    title: "Mobile Manipulation with VLA",
    tags: ["VLA", "FR3 Cobot", "ROS2"],
    blurb: "End-to-end mobile manipulation for technician assistance. Human tracking with active perception to solve pick-and-place tasks.",
    role: "Lead Developer",
    stack: "ROS2 · Isaac Sim · Nav2 · MoveIt · YOLO-Pose · SmolVLA · LeRobot",
    highlights: ["FR3 Cobot on mobile base", "Fine-tuned SmolVLA models", "Closed-loop rollout evaluation in Isaac Sim"],
    videos: [{ src: "assets/videos/m2_smolvla_isaacsim.mp4", label: "SmolVLA rollout" }],
    kind: "research",
  },
  {
    id: "rl-navigation", num: "02", year: "2025",
    title: "Autonomous Navigation via Deep RL",
    tags: ["Deep RL", "Genesis", "PyTorch"],
    blurb: "High-speed vectorized training of autonomous agents. Focused on safe policy transfer from simulation to real-world hardware.",
    role: "Researcher",
    stack: "Genesis Engine · PyTorch · SAC · PPO · GPU Acceleration",
    highlights: ["Simulated 200+ robots in parallel at >500 FPS", "Soft Actor-Critic (SAC) policies", "Custom environments for policy transfer"],
    videos: [],
    kind: "ai",
  },
  {
    id: "rc-race-car", num: "03", year: "2023",
    title: "RC Race Car — 50 km/h",
    tags: ["Mechatronics", "3D Printing"],
    blurb: "High-performance RC engineering. Designed and built a robust custom chassis with brushless power and precision control.",
    role: "Designer & Maker",
    stack: "SolidWorks · Brushless Motors · ESC · 3D Printing",
    highlights: ["Impact-resistant 3D components", "Brushless powertrain", "Optimized mass distribution"],
    videos: [],
    kind: "maker",
  },
  {
    id: "bionic-hand", num: "04", year: "2023",
    title: "Bio-mimetic Bionic Hand",
    tags: ["Bio-Robotics", "Arduino", "CAD"],
    blurb: "Reproducing human biomechanics through mechatronics. Cable-driven 5-motor arm mimicking fluid gestures.",
    role: "Engineer",
    stack: "SolidWorks · Arduino · 3D Printing · Cable Transmission",
    highlights: ["Independent finger control", "Realistic hand movement", "Real-time control logic"],
    videos: [],
    kind: "maker",
  }
];

export const EXPERIENCE = [
  {
    date: "2026",
    title: "Research Intern — AI & Deep Learning",
    org: "Institut Pascal (UCA)",
    points: [
      "Active contact-based exploration using SAC and VLA models.",
      "Multimodal sensor fusion (Tactile, Thermal, Vision).",
      "Benchmarking language-guided RL frameworks (LeRobot)."
    ],
  },
  {
    date: "2025",
    title: "Robotics Engineer Intern",
    org: "Axter Automation",
    points: [
      "Optimized industrial AGV navigation stacks under ROS.",
      "Transitioned systems to high-precision reflector navigation.",
      "Debugged Floor-PC/Robot comms and tuned motor controllers."
    ],
  },
  {
    date: "2024",
    title: "Industrial Reverse Engineering",
    org: "LD Azouaou Mahindra",
    points: [
      "Full 3D modeling and reverse engineering of heavy industrial elevators.",
      "Optimized mechanical footprint and manufacturing processes."
    ],
  },
  {
    date: "2023",
    title: "Maintenance Internship",
    org: "SOBCO Palmary",
    points: [
      "Preventive maintenance on automated food production lines.",
      "Diagnostics and reliability improvements for industrial hardware."
    ],
  }
];

export const EDUCATION = [
  { date: "2025–26", title: "M2 Artificial Perception & Robotics", org: "UCA", note: "Rank 3/16 · GPA 15.30/20" },
  { date: "2024–25", title: "M1 Automation & Robotics", org: "UCA", note: "Rank 2/42 · GPA 15.97/20" },
  { date: "2020–24", title: "Engineering Degree — Mechatronics", org: "ENSTA / ENST", note: "Valedictorian · National Exam 22nd" },
];

export const SKILL_GROUPS = [
  { title: "Robotics & AI", items: ["ROS2", "Nav2", "MoveIt", "Isaac Sim", "Genesis", "SAC/PPO", "VLA", "PyTorch"] },
  { title: "Software", items: ["Python", "C++", "Linux", "Git", "Docker", "OpenCV", "YOLO"] },
  { title: "Engineering", items: ["SolidWorks", "Catia", "3D Printing", "Machining", "PLC"] },
  { title: "Languages", items: ["French (C2)", "English (Fluent)", "Arabic", "Kabyle"] },
];
