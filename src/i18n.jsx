// Bilingual content — English & French for Reda OULD OULHADJ

import React from 'react';
import { PROJECTS as BASE_PROJECTS } from './data.js';

export const UI = {
  en: {
    nav: {
      work: 'Work',
      sims: 'Sims',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      badge: 'PORTFOLIO · BUILT IN WEBGL',
      id: 'ROO-2026 / RESEARCH|DEVELOPMENT-ORIENTED · ROBOTICS + AI',
      loading: 'loading webgl…',
    },
    sims: {
      num: '§ 02',
      title: 'Interactive sims, live in the page.',
      kicker: 'Three.js · WebGL',
      desc: 'Four self-contained robotics demos. Click, drag, scroll. Each one mirrors a real component of the project work below — global planning, reactive 6DOF navigation, manipulation with inverse kinematics, and probabilistic mapping & localization with an EKF overlay.',
      init: 'initializing scene…',
      astar: {
        title: 'A* // grid planner',
        kicker: '§ planning',
        subtitle: <>click to toggle obstacles · drag <b>start</b> or <b>goal</b></>,
        caption: '8-connected grid with Manhattan-diagonal heuristic, visited cells in moss, frontier in yellow, replan on any edit.',
        btnRandom: 'Randomize',
        btnClear: 'Clear',
        legend: { start: 'start', goal: 'goal', visited: 'visited', frontier: 'frontier', obstacle: 'obstacle' },
      },
      quad: {
        title: '6DOF quad nav // potential field',
        kicker: '§ navigation',
        subtitle: <>drag the <b>red goal</b> · scroll to change altitude</>,
        caption: 'Reactive goal-seeking with obstacle repulsion in XY, altitude hold in Z, bank from lateral accel.',
        btnNew: 'New world',
        legend: { goal: 'goal', obstacle: 'obstacle', trail: 'trail' },
      },
      manip: {
        title: 'Isometric manipulator // pick-and-place',
        kicker: '§ manipulation',
        subtitle: <>autonomous cycle: approach · grasp · lift · transit · place</>,
        caption: '6-DOF arm. Reachable pick/place poses sampled via FK — no IK, no unreachable targets.',
        btnNew: 'New pick · place',
        legend: { payload: 'payload', dropzone: 'drop zone', gripper: 'gripper' },
      },
      slam: {
        title: '2D SLAM // occupancy grid + PF + EKF',
        kicker: '§ perception',
        subtitle: <>diff-drive robot · 120-beam LiDAR · live <b>log-odds</b> map, particle filter, covariance ellipse</>,
        caption: 'Robot patrols a procedural room. LiDAR → log-odds occupancy grid with estimated-pose insertion; 180-particle MCL with scan-matching likelihood; 3-state EKF fuses the PF mean to drive the covariance ellipse. Particle weighting uses the ground-truth map — a 2D mapping demo with truth-assisted localization, not full SLAM.',
        btnNew: 'New world',
        btnReset: 'Reset belief',
        legend: { robot: 'robot', lidar: 'LiDAR hits', particles: 'particles', occupied: 'occupied', free: 'free', ekf2s: 'EKF 2σ', ekfest: 'estimation EKF ⊕' },
        ekf: { predict: 'EKF · PREDICT', update: 'UPDATE' },
      },
    },
    projects: {
      num: '§ 01',
      title: 'Selected work.',
      kicker: '2022 → 2026 · thirteen entries',
      role: 'Role',
      stack: 'Stack',
      reports: 'Reports',
      highlights: 'Highlights',
      demoVideos: 'Demo videos',
    },
    experience: {
      num: '§ 03',
      title: 'Research & industry.',
      kicker: 'labs · production · field',
      eduNum: '§ 04',
      eduTitle: 'Education.',
    },
    skills: {
      num: '§ 05',
      title: 'Technical inventory.',
      kicker: 'five layers · one profile',
    },
    about: {
      num: '§ 06',
      title: 'What drives the profile.',
      kicker: 'one paragraph, honestly',
      para: (
        <>
          Bridging the gap between{' '}
          <em style={{ color: 'var(--forest)' }}>
            classical robotics and AI
          </em>{' '}
          — building systems where perception, navigation, and manipulation must work together under real constraints.
        </>
      ),
      marks: [
        'mechatronics foundation',
        'robotics & automation specialization',
        'perception & AI for robotics',
        'reinforcement & imitation learning',
        'industrial AGV navigation',
      ],
    },
    contact: {
      num: '§ 07',
      title: "Let's talk robots.",
      kicker: 'targeting France · open to relocation',
      bestFits: (
        <>
          Best fits:{' '}
          <b style={{ color: 'var(--ink)' }}>robotics software engineer</b> ·{' '}
          <b style={{ color: 'var(--ink)' }}>perception / AI for robotics</b> ·{' '}
          <b style={{ color: 'var(--ink)' }}>control, planning, autonomy</b> ·{' '}
          <b style={{ color: 'var(--ink)' }}>autonomous navigation engineer</b> ·{' '}
          <b style={{ color: 'var(--ink)' }}>research engineer</b>.
        </>
      ),
      email: 'Email',
      linkedin: 'LinkedIn',
      phone: 'Phone',
      print: 'Print / PDF',
    },
    footer: 'Reda OULD OULHADJ · 2026 · Built in HTML, Three.js & React.',
  },

  fr: {
    nav: {
      work: "Projets",
      sims: "Simulations",
      experience: "Expérience",
      skills: "Compétences",
      contact: "Contact",
    },
    hero: {
      badge: "PORTFOLIO · CONSTRUIT EN WEBGL",
      id: "ROO-2026 / ORIENTÉ RECHERCHE|DÉVELOPPEMENT · ROBOTIQUE + IA",
      loading: "chargement webgl…",
    },
    sims: {
      num: "§ 02",
      title: "Simulations interactives, en direct.",
      kicker: "Three.js · WebGL",
      desc: "Quatre démos robotiques autonomes. Cliquez, faites glisser, défilez. Chacune reflète un composant réel des projets ci-dessous — planification globale, navigation 6DDL réactive, manipulation par cinématique directe, et cartographie & localisation probabilistes avec overlay EKF.",
      init: "initialisation…",
      astar: {
        title: "A* // planificateur grille",
        kicker: "§ planification",
        subtitle: <>cliquer pour basculer obstacles · déplacer <b>départ</b> ou <b>arrivée</b></>,
        caption: "Grille 8-connexe avec heuristique Manhattan-diagonale, cellules visitées en vert, frontière en jaune, replanification à chaque modification.",
        btnRandom: "Aléatoire",
        btnClear: "Effacer",
        legend: { start: "départ", goal: "arrivée", visited: "visité", frontier: "frontière", obstacle: "obstacle" },
      },
      quad: {
        title: "Nav quad 6DDL // champ potentiel",
        kicker: "§ navigation",
        subtitle: <>déplacer l&apos;<b>objectif rouge</b> · défilement pour l&apos;altitude</>,
        caption: "Recherche d'objectif réactive avec répulsion d'obstacles en XY, maintien d'altitude en Z, inclinaison par accélération latérale.",
        btnNew: "Nouveau monde",
        legend: { goal: "objectif", obstacle: "obstacle", trail: "trajectoire" },
      },
      manip: {
        title: "Manipulateur isométrique // saisie-dépose",
        kicker: "§ manipulation",
        subtitle: <>cycle autonome : approche · saisie · levée · transit · dépose</>,
        caption: "Bras 6-DDL. Poses de saisie/dépose atteignables calculées par cinématique directe — sans cinématique inverse, sans cibles inaccessibles.",
        btnNew: "Nouvelle saisie · dépose",
        legend: { payload: "charge utile", dropzone: "zone de dépose", gripper: "pince" },
      },
      slam: {
        title: "SLAM 2D // grille occupancy + PF + EKF",
        kicker: "§ perception",
        subtitle: <>robot diff-drive · LiDAR 120 faisceaux · carte <b>log-odds</b> live, filtre particulaire, ellipse de covariance</>,
        caption: "Le robot patrouille une salle procédurale. LiDAR → grille d'occupation log-odds avec insertion par pose estimée ; MCL à 180 particules avec vraisemblance scan-matching ; EKF 3-état fusionne la moyenne PF pour piloter l'ellipse de covariance. La pondération des particules utilise la carte de vérité terrain — démo de cartographie 2D avec localisation assistée, pas un SLAM complet.",
        btnNew: "Nouveau monde",
        btnReset: "Réinitialiser",
        legend: { robot: "robot", lidar: "impacts LiDAR", particles: "particules", occupied: "occupé", free: "libre", ekf2s: "EKF 2σ", ekfest: "estimation EKF ⊕" },
        ekf: { predict: "EKF · PRÉDICTION", update: "MISE À JOUR" },
      },
    },
    projects: {
      num: "§ 01",
      title: "Travaux sélectionnés.",
      kicker: "2022 → 2026 · treize entrées",
      role: "Rôle",
      stack: "Stack",
      reports: "Rapports",
      highlights: "Points clés",
      demoVideos: "Vidéos démo",
    },
    experience: {
      num: "§ 03",
      title: "Recherche & industrie.",
      kicker: "laboratoires · production · terrain",
      eduNum: "§ 04",
      eduTitle: "Formation.",
    },
    skills: {
      num: "§ 05",
      title: "Inventaire technique.",
      kicker: "cinq couches · un profil",
    },
    about: {
      num: "§ 06",
      title: "Ce qui motive le profil.",
      kicker: "un paragraphe, honnêtement",
      para: (
        <>
          Faire le pont entre la{' '}
          <em style={{ color: 'var(--forest)' }}>
            robotique classique et l&apos;IA
          </em>{' '}
          — concevoir des systèmes où perception, navigation et manipulation fonctionnent ensemble sous contraintes réelles.
        </>
      ),
      marks: [
        "fondation mécatronique",
        "spécialisation robotique & automatique",
        "perception & IA pour la robotique",
        "reinforcement & imitation learning",
        "navigation AGV industrielle",
      ],
    },
    contact: {
      num: "§ 07",
      title: "Parlons robots.",
      kicker: "ciblant la France · ouvert à la relocalisation",
      bestFits: (
        <>
          Postes visés :{' '}
          <b style={{ color: 'var(--ink)' }}>ingénieur logiciel robotique</b> ·{' '}
          <b style={{ color: 'var(--ink)' }}>perception / IA pour la robotique</b> ·{' '}
          <b style={{ color: 'var(--ink)' }}>contrôle, planification, autonomie</b> ·{' '}
          <b style={{ color: 'var(--ink)' }}>ingénieur navigation autonome</b> ·{' '}
          <b style={{ color: 'var(--ink)' }}>ingénieur de recherche</b>.
        </>
      ),
      email: "E-mail",
      linkedin: "LinkedIn",
      phone: "Téléphone",
      print: "Imprimer / PDF",
    },
    footer: "Reda OULD OULHADJ · 2026 · Construit en HTML, Three.js & React.",
  },
};

// ── Bilingual data ────────────────────────────────────────────────────────────

const PROFILE_EN = {
  name: "Reda OULD OULHADJ",
  role: "Robotics & AI Engineer",
  tagline: "Bridging the gap between classical robotics and AI — perception, navigation, and manipulation under real constraints.",
  location: "Clermont-Ferrand, France",
  email: "redaouldoulhadj@gmail.com",
  phone: "+33 7 45 52 17 25",
  linkedin: "linkedin.com/in/reda-ould-oulhadj",
  status: "M2 Perception Artificielle et Robotique · Université Clermont Auvergne · Graduating 2026",
  stats: [
    { v: "2/42", l: "M1 Rank" },
    { v: "15.97", l: "M1 Avg /20" },
    { v: "C2", l: "French (TCF)" },
    { v: "Fluent", l: "English" },
    { v: "22nd", l: "National Concours" },
    { v: "10+", l: "Robot Comps" },
  ],
};

const PROFILE_FR = {
  ...PROFILE_EN,
  role: "Ingénieur Robotique & IA",
  tagline: "Faire le pont entre la robotique classique et l'IA — perception, navigation et manipulation sous contraintes réelles.",
  status: "M2 Perception Artificielle et Robotique · Université Clermont Auvergne · Diplôme 2026",
  stats: [
    { v: "2/42", l: "Rang M1" },
    { v: "15,97", l: "Moy M1 /20" },
    { v: "C2", l: "Français (TCF)" },
    { v: "Fluent", l: "Anglais" },
    { v: "22e", l: "Concours National" },
    { v: "10+", l: "Compétitions" },
  ],
};

const PROJECT_TRANSLATIONS = {
  en: {
    "mobile-manip": {
      title: "Mobile Manipulation for Technician Assistance",
      blurb: "A mobile robot (FR3 + base) that follows a technician (YOLO-Pose + Kalman), localizes tools via RGB-D, and executes manipulation tasks via VLA models (TinyVLA/SmolVLA) trained on LeRobot/HDF5 data.",
      role: "End-to-end integration · perception · manipulation · data pipeline",
    },
    "rl-nav": {
      title: "Autonomous Navigation via Reinforcement Learning",
      blurb: "End-to-end RL navigation in Genesis Engine. Vectorized simulation with 200+ robots, Soft Actor-Critic (SAC) for obstacle avoidance and goal reaching with GPU acceleration.",
      role: "RL environment design · training pipeline · reward shaping",
    },
    "imitation-manip": {
      title: "Imitation Learning for Pick-and-Place",
      blurb: "Learning-from-demonstration for a manipulator arm. Fine-tuning SmolVLA models on expert data collected in simulation for stable pick-and-place trajectories.",
      role: "Data collection · model fine-tuning · rollout validation",
    },
    "pointnet": {
      title: "PointNet — 3D Point Cloud Classification",
      blurb: "PointMLP, vanilla PointNet, and PointNet with input T-Net compared on ModelNet40. Explored permutation invariance, symmetric pooling, augmentations.",
      role: "Training experiments · ablations · analysis",
    },
    "ur3e": {
      title: "UR3e Pick-and-Place — ROS2 + MoveIt",
      blurb: "Industrial arm programming: Polyscope pick-and-place, contact sensing, ROS2 + UR driver + MoveIt trajectory planning. Work-frame / TCP understanding in practice.",
      role: "Lab project — manipulator integration",
    },
    "maze": {
      title: "Maze Solver — Webots + Real Robot",
      blurb: "Unknown-maze explorer. Two-pass: DFS until goal, then direct replay of simplified shortest path. Binary thresholding + image moments + PID steering.",
      role: "Sim-first, then hardware — competition build",
    },
    "africa-cup": {
      title: "League of Robotics Africa — Competition",
      blurb: "Team of 5. Two robots: (1) teleop miniature mobile manipulator for 1v1, (2) autonomous loading/unloading robot with visual-servoing line following on Pi 4 + HD camera.",
      role: "Robotics maker · embedded · vision",
    },
    "rc-car": {
      title: "RC Race Car — High Performance Build",
      blurb: "Custom-built 1:8 scale racing chassis designed for speed (50km/h) and impact resistance. Integrated high-torque brushless power system and custom steering geometry.",
      role: "Chassis design · power electronics · assembly",
    },
    "bionic-arm": {
      title: "Bionic Arm — 3D Printed Prototype",
      blurb: "A human-scale 5-fingered robotic hand featuring a tendon-driven mechanism and 3D-printed ligaments for biomimetic movement.",
      role: "CAD modeling · assembly · calibration",
    },
    "storage-system": {
      title: "Autonomous Storage System (Miniature)",
      blurb: "A miniature automated storage and retrieval system (AS/RS) implementing grid-based task scheduling and shelf-alignment logic.",
      role: "Firmware development · logic optimization · sensors",
    },
    "limo": {
      title: "Robot LIMO — ROS2 Navigation",
      blurb: "Navigation stack implementation for the LIMO mobile base. Focused on LiDAR-based mapping, path planning, and joystick-teleop/autonomy bridging.",
      role: "ROS2 development · navigation tuning",
    },
    "dev-tools": {
      title: "Software Automation & AI Extensions",
      blurb: "A suite of developer tools for browser automation and document management. Includes a Playwright-based AI agent for web tasks and a postulation management engine.",
      role: "Tool building · automation architecture",
    },
    "teleop-manip": {
      title: "Teleoperated Mobile Manipulator",
      blurb: "A custom-built mobile base equipped with a 4-DOF manipulator arm. Features remote control via a dedicated mobile app and integrated simulation-to-reality control logic.",
      role: "System architect · mechatronics integration · app development",
    },
  },
  fr: {
    "mobile-manip": {
      title: "Manipulation Mobile pour Assistance Technicien",
      blurb: "Robot mobile (FR3 + base) suivant un technicien (YOLO-Pose + Kalman), localisant les outils par RGB-D, et exécutant des tâches via modèles VLA (TinyVLA/SmolVLA) entraînés sur LeRobot.",
      role: "Intégration complète · perception · manipulation · pipeline de données",
    },
    "rl-nav": {
      title: "Navigation Autonome par Reinforcement Learning",
      blurb: "Navigation RL de bout en bout sous Genesis Engine. Simulation vectorisée (200+ robots), Soft Actor-Critic (SAC) pour l'évitement d'obstacles et ralliement de cible avec accélération GPU.",
      role: "Design env. RL · pipeline d'entraînement · reward shaping",
    },
    "imitation-manip": {
      title: "Apprentissage par Imitation pour Saisie-Dépose",
      blurb: "Apprentissage par démonstration pour bras manipulateur. Fine-tuning de modèles SmolVLA sur données expertes en simulation pour des trajectoires de pick-and-place stables.",
      role: "Collecte de données · fine-tuning · validation de rollout",
    },
    "pointnet": {
      title: "PointNet — Classification de Nuages de Points 3D",
      blurb: "Comparaison de PointMLP, PointNet et PointNet avec T-Net sur ModelNet40. Étude de l'invariance par permutation, pooling symétrique et augmentations de données.",
      role: "Expériences d'entraînement · ablations · analyse",
    },
    "ur3e": {
      title: "Pick-and-Place UR3e — ROS2 + MoveIt",
      blurb: "Programmation de bras industriel : Polyscope pick-and-place, détection de contact, ROS2 + driver UR + planification MoveIt. Pratique du Work-frame / TCP.",
      role: "Projet labo — intégration manipulateur",
    },
    "maze": {
      title: "Maze Solver — Webots + Robot Réel",
      blurb: "Explorateur de labyrinthe inconnu. Deux passes : DFS jusqu'à l'objectif, puis rejeu simplifié du chemin court. Thresholding binaire + moments OpenCV + PID.",
      role: "Simulation puis hardware — build compétition",
    },
    "africa-cup": {
      title: "League of Robotics Africa — Compétition",
      blurb: "Équipe de 5. Deux robots : (1) manipulateur mobile miniature téléopéré, (2) robot de chargement autonome avec suivi de ligne via OpenCV sur Pi 4.",
      role: "Robotics maker · échantillon vision",
    },
    "rc-car": {
      title: "RC Race Car — Conception Haute Performance",
      blurb: "Châssis de course 1:8 personnalisé conçu pour la vitesse (50 km/h) et la résistance aux chocs. Système de propulsion brushless et géométrie de direction sur mesure.",
      role: "Design châssis · électronique de puissance · assemblage",
    },
    "bionic-arm": {
      title: "Bras Bionique — Prototype Imprimé en 3D",
      blurb: "Main robotique à 5 doigts à échelle humaine dotée d'un mécanisme à câbles et de ligaments imprimés en 3D pour un mouvement biomimétique.",
      role: "Modélisation CAO · assemblage · calibration",
    },
    "storage-system": {
      title: "Système de Stockage Autonome (Miniature)",
      blurb: "Système automatisé de stockage et de récupération (AS/RS) miniature impliquant une planification de tâches sur grille et une logique d'alignement.",
      role: "Développement firmware · optimisation logique · capteurs",
    },
    "limo": {
      title: "Robot LIMO — Navigation ROS2",
      blurb: "Implémentation d'une stack de navigation pour la base mobile LIMO. Cartographie LiDAR, planification de trajectoire et pont téléopération/autonomie.",
      role: "Développement ROS2 · réglage navigation",
    },
    "dev-tools": {
      title: "Outils d'Automatisation & Extensions IA",
      blurb: "Suite d'outils pour l'automatisation de navigateur et la gestion documentaire. Inclut un agent IA Playwright et un moteur de gestion de candidatures.",
      role: "Construction d'outils · architecture d'automatisation",
    },
    "teleop-manip": {
      title: "Manipulateur Mobile Téléopéré",
      blurb: "Base mobile personnalisée équipée d'un bras manipulateur à 4 DDL. Contrôle à distance via une application mobile dédiée et logique de contrôle intégrée.",
      role: "Architecte système · intégration mécatronique · développement d'app",
    },
  }
};

const PROJECTS_EN = BASE_PROJECTS.map(p => ({ ...p, ...PROJECT_TRANSLATIONS.en[p.id] }));
const PROJECTS_FR = BASE_PROJECTS.map(p => ({ ...p, ...PROJECT_TRANSLATIONS.fr[p.id] }));

const EXPERIENCE_EN = [
  {
    id: "research-2026",
    date: "Mar → Sep 2026",
    title: "Research Internship — RL for Active Exploration",
    org: "Institut Pascal · UCA · Aubière",
    points: [
      "Reinforcement Learning for active contact-based exploration of unseen objects",
      "Vision-Language-Action modeling & multimodal fusion (Tactile, Thermal, Ultrasonic)",
      "Designing continuous observation & action spaces for robotic control",
      "SOTA RL frameworks implementation for language-guided exploration",
    ],
  },
  {
    id: "axter-2025",
    date: "Apr → Sep 2025",
    title: "Robotics Engineer Intern — Axter Automation",
    org: "Axter Automation · Vaucresson, France",
    points: [
      "Optimized navigation stacks for AGVs (SLAM and Reflector-based)",
      "Integrated advanced sensors: LiDAR R2000, MultiScan, TIM320",
      "C++ / ROS software development for industrial mobile robotics",
      "Field testing and automated charging system improvements",
    ],
  },
  {
    id: "azouaou-2024",
    date: "2024",
    title: "Industrial Internship — LD Azouaou Mahindra",
    org: "Agricultural / lifting machinery · Algeria",
    points: [
      "Reverse engineering of industrial elevators using SolidWorks",
      "3D modeling of complex structural and mechanical components",
      "Optimizing design for performance, cost, and energy efficiency",
    ],
  },
  {
    id: "beta-2023",
    date: "2023",
    title: "Industrial Internship — BETA Makina",
    org: "Industrial Machine Design · Algeria",
    points: [
      "Mechanical design and prototype development",
      "Machining on lathe and milling machines",
      "Manufacturing process optimization",
    ],
  },
  {
    id: "sobco-2023",
    date: "2023",
    title: "Maintenance Internship — SOBCO Palmary",
    org: "Food Industry Production · Algeria",
    points: [
      "Immersion in automated production lines (Chocolate & Biscuits)",
      "Maintenance department operations and troubleshooting",
    ],
  },
];

const EXPERIENCE_FR = [
  {
    id: "research-2026",
    date: "Mar → Sep 2026",
    title: "Stage Recherche — RL pour l'Exploration Active",
    org: "Institut Pascal · UCA · Aubière",
    points: [
      "Reinforcement Learning pour l'exploration active d'objets non vus par contact",
      "Modélisation Vision-Language-Action & fusion multimodale (Tactile, Thermique, US)",
      "Conception d'espaces d'observation et d'action continus pour le contrôle",
      "Implémentation de frameworks RL SOTA pour l'exploration guidée par le langage",
    ],
  },
  {
    id: "axter-2025",
    date: "Avr → Sep 2025",
    title: "Stage Ingénieur Robotique — Axter Automation",
    org: "Axter Automation · Vaucresson, France",
    points: [
      "Optimisation de la navigation AGV (SLAM et navigation par réflecteurs)",
      "Intégration de capteurs avancés : LiDAR R2000, MultiScan, TIM320",
      "Développement C++ / ROS pour la robotique mobile industrielle",
      "Tests sur le terrain et amélioration des systèmes de charge automatique",
    ],
  },
  {
    id: "azouaou-2024",
    date: "2024",
    title: "Stage de Rétro-conception — LD Azouaou Mahindra",
    org: "Machines agricoles / levage · Algérie",
    points: [
      "Rétro-conception d'élévateurs industriels via SolidWorks",
      "Modélisation 3D de composants structurels et mécaniques complexes",
      "Optimisation du design pour la performance et l'efficacité énergétique",
    ],
  },
  {
    id: "beta-2023",
    date: "2023",
    title: "Stage Conception Mécanique — BETA Makina",
    org: "Conception de machines industrielles · Algérie",
    points: [
      "Conception mécanique et développement de prototypes",
      "Usinage sur tour et fraiseuse",
      "Optimisation des processus de fabrication",
    ],
  },
  {
    id: "sobco-2023",
    date: "2023",
    title: "Stage Maintenance — SOBCO Palmary",
    org: "Industrie Agroalimentaire · Algérie",
    points: [
      "Immersion dans les lignes de production automatisées",
      "Opérations du département maintenance et dépannage",
    ],
  },
];

const EDUCATION_EN = [
  { date: "2025–26", title: "M2 Perception Artificielle et Robotique", org: "Université Clermont Auvergne", note: "S3: 15.30/20 · Rank 3/16" },
  { date: "2024–25", title: "M1 Automatique Robotique", org: "Université Clermont Auvergne", note: "15.97/20 · Rank 2/42 · Honors: Bien" },
  { date: "2020–24", title: "Engineering Cycle — Mechatronics", org: "ENSTA / ENST Algeria", note: "Major of Promotion (2x) · National Concours 22nd/2000+" },
  { date: "2020", title: "Baccalaureat — Math Technique", org: "Lycee Issiakhem", note: "Honors: Très Bien · 16.15/20" },
];

const EDUCATION_FR = [
  { date: "2025–26", title: "M2 Perception Artificielle et Robotique", org: "Université Clermont Auvergne", note: "S3 : 15,30/20 · Rang 3/16" },
  { date: "2024–25", title: "M1 Automatique Robotique", org: "Université Clermont Auvergne", note: "15,97/20 · Rang 2/42 · Mention Bien" },
  { date: "2020–24", title: "Cycle Ingénieur — Mécatronique", org: "ENSTA / ENST Algérie", note: "Major de Promotion (2x) · Concours National 22e/2000+" },
  { date: "2020", title: "Baccalauréat — Math Technique", org: "Lycée Issiakhem", note: "Mention Très Bien · 16,15/20" },
];

const SKILL_GROUPS_EN = [
  {
    title: "Robotics & Middleware",
    items: ["ROS", "ROS2", "Nav2", "MoveIt", "PX4", "Gazebo", "Isaac Sim", "Genesis", "Webots", "URDF/Xacro"],
  },
  {
    title: "AI & Computer Vision",
    items: ["PyTorch", "OpenCV", "Stable-Baselines3 (RL)", "YOLO", "PointNet", "SmolVLA", "Multimodal Fusion", "3D Vision"],
  },
  {
    title: "Control & Optimization",
    items: ["MPC", "PID", "SAC / PPO (RL)", "Kalman Filters", "Geometric Control", "Path Planning", "IK"],
  },
  {
    title: "Programming & Infrastructure",
    items: ["Python", "C/C++", "Linux (Ubuntu)", "Git", "Docker", "HDF5", "Playwright"],
  },
  {
    title: "CAD & Fabrication",
    items: ["SolidWorks", "Catia", "AutoCAD", "PCB Design", "3D Printing", "Machining"],
  },
];

const SKILL_GROUPS_FR = [
  {
    title: "Robotique & Middleware",
    items: ["ROS", "ROS2", "Nav2", "MoveIt", "PX4", "Gazebo", "Isaac Sim", "Genesis", "Webots", "URDF/Xacro"],
  },
  {
    title: "IA & Vision par Ordinateur",
    items: ["PyTorch", "OpenCV", "Stable-Baselines3 (RL)", "YOLO", "PointNet", "SmolVLA", "Fusion Multimodale", "Vision 3D"],
  },
  {
    title: "Contrôle & Optimisation",
    items: ["MPC", "PID", "SAC / PPO (RL)", "Filtres de Kalman", "Contrôle Géométrique", "Planification", "IK"],
  },
  {
    title: "Programmation & Infra",
    items: ["Python", "C/C++", "Linux (Ubuntu)", "Git", "Docker", "HDF5", "Playwright"],
  },
  {
    title: "CAO & Fabrication",
    items: ["SolidWorks", "Catia", "AutoCAD", "Design de PCB", "Impression 3D", "Usinage"],
  },
];

export const DATA = {
  en: {
    PROFILE: PROFILE_EN,
    PROJECTS: PROJECTS_EN,
    EXPERIENCE: EXPERIENCE_EN,
    EDUCATION: EDUCATION_EN,
    SKILL_GROUPS: SKILL_GROUPS_EN,
  },
  fr: {
    PROFILE: PROFILE_FR,
    PROJECTS: PROJECTS_FR,
    EXPERIENCE: EXPERIENCE_FR,
    EDUCATION: EDUCATION_FR,
    SKILL_GROUPS: SKILL_GROUPS_FR,
  },
};
