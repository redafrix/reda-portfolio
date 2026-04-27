// 🚀 THE TRUTH - COMPREHENSIVE BILINGUAL PORTFOLIO DATA

// --- ENGLISH DATA ---
export const PROFILE_EN = {
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

export const PROJECTS_EN = [
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
    highlights: ["200+ robots in parallel at >500 FPS", "Soft Actor-Critic policies", "Custom environments for policy transfer"],
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

export const EXPERIENCE_EN = [
  { date: "2026", title: "Research Intern — AI & Deep Learning", org: "Institut Pascal (UCA)", points: ["Active contact-based exploration using SAC and VLA models", "Multimodal sensor fusion (Tactile, Thermal, Vision)", "Benchmarking language-guided RL frameworks (LeRobot)"] },
  { date: "2025", title: "Robotics Engineer Intern", org: "Axter Automation", points: ["Optimized industrial AGV navigation stacks under ROS", "Transitioned systems to high-precision reflector navigation", "Debugged Floor-PC/Robot comms and tuned motor controllers"] },
  { date: "2024", title: "Industrial Reverse Engineering", org: "LD Azouaou Mahindra", points: ["3D modeling and reverse engineering of heavy industrial elevators", "Optimized mechanical footprint and manufacturing processes"] },
  { date: "2023", title: "Maintenance Internship", org: "SOBCO Palmary", points: ["Preventive maintenance on automated food production lines", "Diagnostics and reliability improvements for industrial hardware"] }
];

export const EDUCATION_EN = [
  { date: "2025–26", title: "M2 Artificial Perception & Robotics", org: "UCA", note: "Rank 3/16 · GPA 15.30/20" },
  { date: "2024–25", title: "M1 Automation & Robotics", org: "UCA", note: "Rank 2/42 · GPA 15.97/20" },
  { date: "2020–24", title: "Engineering Degree — Mechatronics", org: "ENSTA / ENST", note: "Valedictorian · National Exam 22nd" },
];

export const SKILL_GROUPS_EN = [
  { title: "Robotics & AI", items: ["ROS2", "Nav2", "MoveIt", "Isaac Sim", "Genesis", "SAC/PPO", "VLA", "PyTorch"] },
  { title: "Software", items: ["Python", "C++", "Linux", "Git", "Docker", "OpenCV", "YOLO"] },
  { title: "Engineering", items: ["SolidWorks", "Catia", "3D Printing", "Machining", "PLC"] },
  { title: "Languages", items: ["French (C2)", "English (Fluent)", "Arabic", "Kabyle"] },
];

// --- FRENCH DATA ---
export const PROFILE_FR = {
  ...PROFILE_EN,
  role: "Ingénieur Robotique",
  tagline: "Concevoir des systèmes autonomes qui voient, apprennent et agissent. Je fais le pont entre l'IA et le matériel réel.",
  status: "M2 Perception Artificielle & Robotique · UCA · 2026",
  stats: [
    { v: "22e", l: "Concours National" },
    { v: "2/42", l: "Rang M1" },
    { v: "3/16", l: "Rang M2 S3" },
    { v: ">500 FPS", l: "Vitesse Sim RL" },
    { v: "C2", l: "Niveau Français" },
  ],
};

export const PROJECTS_FR = [
  {
    id: "vla-manipulation", num: "01", year: "2025-26",
    title: "Manipulation Mobile avec VLA",
    tags: ["VLA", "Cobot FR3", "ROS2"],
    blurb: "Manipulation mobile de bout en bout pour l'assistance technique. Suivi humain et perception active pour tâches complexes guidées par le langage.",
    role: "Développeur Principal",
    stack: "ROS2 · Isaac Sim · Nav2 · MoveIt · YOLO-Pose · SmolVLA · LeRobot",
    highlights: ["Cobot FR3 sur base mobile", "Fine-tuning de modèles SmolVLA", "Évaluation de rollouts en boucle fermée dans Isaac Sim"],
    videos: [{ src: "assets/videos/m2_smolvla_isaacsim.mp4", label: "Démo SmolVLA" }],
    kind: "research",
  },
  {
    id: "rl-navigation", num: "02", year: "2025",
    title: "Navigation Autonome via Deep RL",
    tags: ["Deep RL", "Genesis", "PyTorch"],
    blurb: "Entraînement vectorisé haute vitesse d'agents autonomes. Focus sur le transfert sécurisé de politiques de la simulation vers le matériel réel.",
    role: "Chercheur",
    stack: "Genesis Engine · PyTorch · SAC · PPO · Accélération GPU",
    highlights: ["200+ robots en parallèle à >500 FPS", "Politiques SAC pour évitement d'obstacles", "Environnements personnalisés pour transfert fiable"],
    videos: [],
    kind: "ai",
  },
  {
    id: "rc-race-car", num: "03", year: "2023",
    title: "RC Race Car — 50 km/h",
    tags: ["Mécatronique", "Impression 3D"],
    blurb: "Ingénierie RC haute performance. Conception d'un châssis personnalisé robuste avec motorisation brushless et contrôle de précision.",
    role: "Concepteur & Maker",
    stack: "SolidWorks · Moteurs Brushless · ESC · Impression 3D",
    highlights: ["Composants structurels résistants aux chocs", "Motorisation brushless haute puissance", "Répartition des masses optimisée"],
    videos: [],
    kind: "maker",
  },
  {
    id: "bionic-hand", num: "04", year: "2023",
    title: "Main Bionique Bio-mimétique",
    tags: ["Bio-Robotique", "Arduino", "CAO"],
    blurb: "Reproduction de la biomécanique humaine. Bras à 5 moteurs actionné par câbles reproduisant avec fluidité les gestes de la main.",
    role: "Ingénieur",
    stack: "SolidWorks · Arduino · Impression 3D · Transmission par Câbles",
    highlights: ["Contrôle indépendant des doigts", "Mouvements réalistes de la main", "Logique de contrôle temps réel sous Arduino"],
    videos: [],
    kind: "maker",
  }
];

export const EXPERIENCE_FR = [
  { date: "2026", title: "Stage de Recherche — IA & Deep Learning", org: "Institut Pascal (UCA)", points: ["Exploration active par le contact via modèles SAC et VLA", "Fusion sensorielle multimodale (Tactile, Thermique, Vision)", "Benchmark de frameworks RL guidés par le langage (LeRobot)"] },
  { date: "2025", title: "Stage Ingénieur Robotique", org: "Axter Automation", points: ["Optimisation de stacks de navigation AGV sous ROS", "Transition vers une navigation par réflecteurs haute précision", "Debug comms Sol-PC/Robot et tuning variateurs moteurs"] },
  { date: "2024", title: "Rétroconception Industrielle", org: "LD Azouaou Mahindra", points: ["Modélisation 3D et rétroconception d'élévateurs industriels", "Optimisation de l'encombrement et des processus de fabrication"] },
  { date: "2023", title: "Stage Maintenance", org: "SOBCO Palmary", points: ["Maintenance préventive sur lignes de production automatisées", "Diagnostics et amélioration de la fiabilité matérielle"] }
];

export const EDUCATION_FR = [
  { date: "2025–26", title: "M2 Perception Artificielle & Robotique", org: "UCA", note: "Rang 3/16 · Moyenne 15.30/20" },
  { date: "2024–25", title: "M1 Automatique & Robotique", org: "UCA", note: "Rang 2/42 · Moyenne 15.97/20" },
  { date: "2020–24", title: "Diplôme d'Ingénieur — Mécatronique", org: "ENSTA / ENST", note: "Major de Promotion · Concours National 22e" },
];

export const SKILL_GROUPS_FR = [
  { title: "Robotique & IA", items: ["ROS2", "Nav2", "MoveIt", "Isaac Sim", "Genesis", "SAC/PPO", "VLA", "PyTorch"] },
  { title: "Logiciel", items: ["Python", "C++", "Linux", "Git", "Docker", "OpenCV", "YOLO"] },
  { title: "Ingénierie", items: ["SolidWorks", "Catia", "Impression 3D", "Usinage", "PLC"] },
  { title: "Langues", items: ["Français (C2)", "Anglais (Courant)", "Arabe", "Kabyle"] },
];
