import { PROFILE, PROJECTS, EXPERIENCE, EDUCATION, SKILL_GROUPS } from './data.js';

export const UI = {
  en: {
    nav: { work: 'Work', sims: 'Sims', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
    hero: { badge: 'PORTFOLIO · ROBOTICS ENGINEER', id: 'REDA-2026 / BUILDER · ROBOTICS + AI', loading: 'loading webgl…' },
    sims: {
      num: '§ 02', title: 'Interactive sims.', kicker: 'Three.js · WebGL',
      desc: 'Demos mirroring real robotics components: planning, navigation, manipulation, and perception.',
      init: 'initializing...',
      astar: { title: 'A* Grid Planner', kicker: '§ planning', subtitle: 'Global path planning on occupancy grids.', btnRandom: 'Randomize', btnClear: 'Clear', legend: { start: 'start', goal: 'goal', visited: 'visited', frontier: 'frontier', obstacle: 'obstacle' } },
      quad: { title: 'UAV Navigation', kicker: '§ navigation', subtitle: 'Reactive obstacle avoidance.', btnNew: 'New world', legend: { goal: 'goal', obstacle: 'obstacle', trail: 'trail' } },
      manip: { title: 'Pick-and-Place', kicker: '§ manipulation', subtitle: 'Autonomous manipulation cycle.', btnNew: 'New pose', legend: { payload: 'payload', dropzone: 'dropzone', gripper: 'gripper' } },
      slam: { title: '2D Perception', kicker: '§ perception', subtitle: 'LiDAR mapping & localization.', btnNew: 'New world', btnReset: 'Reset', legend: { robot: 'robot', lidar: 'LiDAR', particles: 'particles', occupied: 'occ', free: 'free', ekf2s: 'EKF', ekfest: 'est' }, ekf: { predict: 'PREDICT', update: 'UPDATE' } },
    },
    projects: { num: '§ 01', title: 'Selected Projects.', kicker: 'Visionary Engineering', role: 'Role', stack: 'Stack', highlights: 'Highlights' },
    experience: { num: '§ 03', title: 'Experience.', kicker: 'Industry & Research', eduNum: '§ 04', eduTitle: 'Education.' },
    skills: { num: '§ 05', title: 'Technical Skills.', kicker: 'Systems & Software' },
    about: {
      num: '§ 06', title: 'The Vision.', kicker: 'Robotics Engineer',
      para: "I build autonomous systems that bridge the gap between AI and hardware. My goal is to create machines that solve real-world problems through innovation and solid engineering.",
      marks: ['Robotics Engineer', 'Builder mindset', 'Hardware/Software integration', 'Autonomous systems specialist'],
    },
    contact: { num: '§ 07', title: "Let's talk.", kicker: 'Open to opportunities', email: 'Email', linkedin: 'LinkedIn', phone: 'Phone', print: 'Print CV' },
    footer: 'Reda OULD OULHADJ · 2026 · Built with React & Three.js',
  },
  fr: {
    nav: { work: 'Projets', sims: 'Simus', experience: 'Expérience', skills: 'Compétences', contact: 'Contact' },
    hero: { badge: 'PORTFOLIO · INGÉNIEUR ROBOTIQUE', id: 'REDA-2026 / CONSTRUCTEUR · ROBOTIQUE + IA', loading: 'chargement…' },
    sims: {
      num: '§ 02', title: 'Simulations interactives.', kicker: 'Three.js · WebGL',
      desc: 'Démos reflétant des composants réels : planification, navigation, manipulation et perception.',
      init: 'initialisation...',
      astar: { title: 'Planificateur A*', kicker: '§ planification', subtitle: 'Planification de chemin globale.', btnRandom: 'Aléatoire', btnClear: 'Effacer', legend: { start: 'départ', goal: 'arrivée', visited: 'visité', frontier: 'frontière', obstacle: 'obstacle' } },
      quad: { title: 'Navigation Drone', kicker: '§ navigation', subtitle: 'Évitement d\'obstacles réactif.', btnNew: 'Nouveau', legend: { goal: 'objectif', obstacle: 'obstacle', trail: 'trace' } },
      manip: { title: 'Saisie-Dépose', kicker: '§ manipulation', subtitle: 'Cycle de manipulation autonome.', btnNew: 'Nouvelle pose', legend: { payload: 'objet', dropzone: 'zone', gripper: 'pince' } },
      slam: { title: 'Perception 2D', kicker: '§ perception', subtitle: 'Cartographie & Localisation LiDAR.', btnNew: 'Nouveau', btnReset: 'Reset', legend: { robot: 'robot', lidar: 'LiDAR', particles: 'particules', occupied: 'occ', free: 'libre', ekf2s: 'EKF', ekfest: 'est' }, ekf: { predict: 'PRÉDIRE', update: 'MAJ' } },
    },
    projects: { num: '§ 01', title: 'Projets Sélectionnés.', kicker: 'Ingénierie Visionnaire', role: 'Rôle', stack: 'Stack', highlights: 'Points clés' },
    experience: { num: '§ 03', title: 'Expérience.', kicker: 'Industrie & Recherche', eduNum: '§ 04', eduTitle: 'Formation.' },
    skills: { num: '§ 05', title: 'Compétences.', kicker: 'Systèmes & Logiciels' },
    about: {
      num: '§ 06', title: 'La Vision.', kicker: 'Ingénieur Robotique',
      para: "Je construis des systèmes autonomes qui relient l'IA au matériel réel. Mon but est de créer des machines qui résolvent des problèmes concrets par l'innovation.",
      marks: ['Ingénieur Robotique', 'Esprit constructeur', 'Intégration Hardware/Software', 'Spécialiste systèmes autonomes'],
    },
    contact: { num: '§ 07', title: "Contact.", kicker: 'Ouvert aux opportunités', email: 'Email', linkedin: 'LinkedIn', phone: 'Téléphone', print: 'Imprimer CV' },
    footer: 'Reda OULD OULHADJ · 2026 · Construit avec React & Three.js',
  }
};

export const DATA = {
  en: { PROFILE, PROJECTS, EXPERIENCE, EDUCATION, SKILL_GROUPS },
  fr: { PROFILE, PROJECTS, EXPERIENCE, EDUCATION, SKILL_GROUPS }
};
