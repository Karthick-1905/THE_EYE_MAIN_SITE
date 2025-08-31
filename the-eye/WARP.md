# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

THE EYE is a cybersecurity club website built with React, Vite, and Three.js. The site features an immersive, retro-futuristic design with advanced 3D graphics, custom shaders, and interactive components. The project emphasizes visual effects, terminal-style interfaces, and cybersecurity theming.

## Common Development Commands

### Development & Building
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Docker Commands
```bash
# Build Docker image
docker build -t the-eye .

# Run container (production preview)
docker run -d --name the-eye -p 4173:4173 the-eye

# Development with Docker Compose
docker-compose -f docker-compose.dev.yml up
```

### Testing Individual Components
Since this is a visual-heavy project, testing is primarily done through the development server:
```bash
# Run dev server and navigate to specific routes
npm run dev
# Then visit:
# http://localhost:5173/ (main page)
# http://localhost:5173/join
# http://localhost:5173/projects-and-research
# http://localhost:5173/events-resources
# http://localhost:5173/events-management
# http://localhost:5173/design-and-publicity
```

## Architecture Overview

### Core Technologies
- **React 19** with functional components and hooks
- **Vite** for build tooling and dev server
- **Three.js + React Three Fiber** for 3D graphics and WebGL shaders
- **Tailwind CSS v4** with custom CSS for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **shadcn/ui** components (customized)

### Key Architectural Patterns

#### 3D Graphics Pipeline
The application uses a sophisticated 3D rendering system:
- **Dither Component**: Core background effect using custom WebGL shaders for retro dithering
- **Globe Component**: Interactive 3D globe with country data and arc animations
- **Lanyard Component**: Physics-based 3D lanyard with realistic rope simulation using Rapier
- **Post-processing effects**: Custom RetroEffect for dithering filter

#### Component Structure
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components (Card, Globe, etc.)
│   ├── Dither.jsx       # Main background shader effect
│   ├── Terminal*.jsx    # Terminal-style interfaces
│   ├── TypographySystem.jsx # Custom typography components
│   └── Lanyard/         # 3D physics lanyard component
├── pages/               # Page components (routes)
├── css/                 # Component-specific CSS files
├── assets/              # Static assets (images, fonts, 3D models)
├── data/                # JSON data files (globe.json)
└── lib/                 # Utilities (utils.ts)
```

#### Styling System
- **Typography System**: Custom typography components with cyberpunk styling and glitch effects
- **CSS Architecture**: Component-scoped CSS files with retro/terminal aesthetics
- **Tailwind Integration**: Utility classes combined with custom CSS for complex effects
- **Theme**: Dark mode with green/orange accents, monospace fonts, dithered backgrounds

### State Management
- Uses React hooks (useState, useRef, useEffect) for local component state
- No global state management library - state is kept close to components
- Three.js state managed through React Three Fiber hooks (useFrame, useThree)

### Performance Considerations
- **Shader Optimization**: Custom WebGL shaders for background effects
- **Asset Loading**: GLB models and textures loaded asynchronously with fallbacks
- **3D Scene Management**: Efficient use of Three.js object pooling and cleanup
- **Image Optimization**: Assets include proper extensions and are referenced via import.meta.url

## Development Guidelines

### Working with 3D Components
- **Dither Background**: Main visual effect - modify waveVertexShader and waveFragmentShader for different patterns
- **Physics Components**: Use Rapier physics engine for realistic 3D interactions
- **Performance**: Always clean up Three.js objects, intervals, and event listeners in useEffect cleanup

### Shader Development
The project uses custom GLSL shaders extensively:
- **Wave Generation**: Perlin noise-based patterns in waveFragmentShader
- **Dithering**: Bayer matrix dithering in ditherFragmentShader  
- **Mouse Interaction**: Real-time mouse position integration in shaders

### Component Development Patterns
- **Error Boundaries**: Wrap 3D components in ErrorBoundary components
- **Responsive Design**: Components adapt to screen size (isSmall state pattern)
- **Accessibility**: ARIA labels and semantic HTML structure maintained
- **Typography**: Use TypographySystem components for consistent text styling

### Asset Management
- **3D Models**: GLB files in component directories (e.g., Lanyard/card.glb)
- **Textures**: PNG/JPG textures loaded via useTexture hook
- **Fonts**: Custom fonts (qbfont.ttf) for cyberpunk aesthetic
- **Asset URLs**: Use import.meta.url for robust asset loading

### Route Structure
- **Main Page**: Combined DitherHome + CommandCenter + Verticals
- **Individual Pages**: Separate routes for each vertical/section
- **Terminal Overlay**: Global terminal accessible via Ctrl+` shortcut

### Deployment
- **Vercel**: Configured for SPA deployment with proper rewrites
- **Docker**: Production-ready container setup
- **Assets**: Static assets cached with long-term headers

## Key Files to Understand

### Core Components
- `src/components/Dither.jsx` - Main background shader system
- `src/App.jsx` - Router configuration and app structure  
- `src/pages/DitherHome.jsx` - Main landing page
- `src/components/TypographySystem.jsx` - Typography system

### Configuration
- `vite.config.js` - Build configuration with alias setup
- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration (JSX allowed)

### Styling
- `src/index.css` - Global styles and Tailwind imports
- `src/css/` - Component-specific stylesheets with retro effects

Understanding the shader code in Dither.jsx is crucial for modifying the visual effects. The component uses a two-stage rendering pipeline: wave generation → dithering post-process.

The terminal-style aesthetic is achieved through custom CSS, monospace fonts, and careful color choices. All interactive elements maintain the cyberpunk theme while remaining accessible.
