## THE EYE

Immersive, retro-futuristic cybersecurity club site built with React, Vite, Three.js, and Tailwind.

### Quick Commands

```cmd
npm run dev
npm run build
npm run preview
```

Docker

```cmd
docker build -t the-eye .
docker run -d --name the-eye -p 4173:4173 the-eye
```

### Theme update (2025-08-31)
- Removed all orange accent usage across UI.
- Replaced with white accents and bold emphasis per `theme.md`.
- When adding new highlights, use grayscale tokens (e.g., `var(--bw-100)`) and font-weight for emphasis.