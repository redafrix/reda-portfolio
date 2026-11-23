# Reda Ould Oulhadj — Robotics & AI portfolio

**Live site: https://redafrix.github.io/reda-portfolio/**

My portfolio as a robotics & AI engineer (M2 Perception Artificielle et Robotique, Université Clermont Auvergne):
projects, experience, education and skills, in English and French, with project videos and reports.

It includes three small robotics simulations that run in the browser (Three.js / WebGL):

- **A\* grid planner** — finds the shortest path through a random obstacle grid, step by step.
- **Potential-field quadrotor** — a drone pulled to the goal and pushed away from obstacles.
- **4-DOF arm inverse kinematics** — the arm follows your mouse pointer.

## Stack

Vite 5 · React 18 · Three.js 0.160 · plain CSS. No backend: the build is a static site.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static site in dist/
npm run preview    # serve dist/ on :4173
```

## Deployment

Every push to `master` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`).

## Where things are

```
src/
├── data.js        # all the content: profile, projects, experience, education, skills
├── i18n.jsx       # English / French text
├── LangContext.jsx
├── App.jsx        # page sections (hero, projects, simulations, experience, skills, contact)
├── sims.js        # the three WebGL simulations
└── styles.css
public/assets/
├── reports/       # project reports (PDF)
└── videos/        # project videos (MP4)
```

To change the content, edit `src/data.js` (and `src/i18n.jsx` for interface text).

## Credits

The layout started from an open portfolio template and was rewritten with my own content, projects and media.
© 2026 Reda Ould Oulhadj.
