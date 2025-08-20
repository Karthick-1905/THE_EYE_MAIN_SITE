# THE EYE — Theme and Style Guide

This document describes the design tokens, typography, components, page shells, and CSS patterns used across the application, with examples for reuse and extension.

## Foundations

- Aesthetic: monochrome, terminal-inspired, glass-panel overlays, subtle noise/dither background.
- Layers/z-index:
  - Dither canvas is fixed behind everything.
  - Main content sits at z-index 10+.
  - Overlays (terminal) sit on top at z-index 10000.

### Global reset and stacking

Defined in `src/index.css`:
- Global reset on `*` and layout helpers for `#root`, `.app-content`, and `.content-section`.
- Prevent horizontal scroll on `body`.

Example structure:
```jsx
<div id="root">
  <div className="app-content">
    {/* All your page content here */}
  </div>
</div>
```

### Color tokens (grayscale) and surfaces

Primary tokens are defined in `src/css/DitherHome.css` under `:root`:
- `--bw-100: #ffffff` (white)
- `--bw-90: #e6e6e6`
- `--bw-70: #b3b3b3`
- `--bw-50: #808080`
- `--bw-30: #4d4d4d`
- `--bw-10: #0f0f0f` (near-black)
- `--panel: rgba(0,0,0,0.72)` (glass surface backdrop)

Note: Some feature CSS (e.g., `joinus.css`) includes backups for `--bw-*` but still expects `--panel`. Ensure at least one imported stylesheet defines `--panel` globally (e.g., by importing `DitherHome.css` or duplicating the `:root` block in a global CSS).

Override example (theme tint):
```css
:root {
  --bw-90: #f0f4f8;    /* slightly cooler light gray */
  --panel: rgba(6, 10, 16, 0.78); /* deeper bluish glass */
}
```

## Typography

Typography is centralized in `src/css/typography_system.css` and consumed via `src/components/TypographySystem.jsx`.

### Fonts

- Imports Google fonts:
  - Display: `VT323`
  - Body/Mono: `Share Tech Mono`

Variables:
- Families: `--font-display`, `--font-body`
- Sizes: display/headline/body/mono scales (lg/md/sm)
- Spacing and line-heights per scale

### CSS classes

- Display (uppercase with glitch wrapper):
  - `.eye-display-large` | `.eye-display-medium` | `.eye-display-small`
- Headline:
  - `.eye-headline-large` | `.eye-headline-medium` | `.eye-headline-small`
- Body:
  - `.eye-body-large` | `.eye-body-medium` | `.eye-body-small`
- Mono chips:
  - `.eye-mono-large` | `.eye-mono-medium` | `.eye-mono-small`
- Button/label text:
  - `.eye-button-text`, `.eye-label`
- Glitch effect helper:
  - `.eye-glitch-text` with `data-text` mirror

### React usage via TypographySystem

Use the wrapper components for consistency:
```jsx
import TypographySystem from "./components/TypographySystem";

<TypographySystem.DisplayLarge data-text="UNCOVER THE UNSEEN">
  UNCOVER THE UNSEEN
</TypographySystem.DisplayLarge>

<TypographySystem.HeadlineSmall>190</TypographySystem.HeadlineSmall>
<TypographySystem.BodyLarge>System online</TypographySystem.BodyLarge>
<TypographySystem.MonoMedium>MODE: <span>OBSERVE</span></TypographySystem.MonoMedium>
<TypographySystem.Button>JOIN</TypographySystem.Button>
<TypographySystem.Label>STATUS FEED</TypographySystem.Label>
```

Notes:
- Display components automatically include the glitch wrapper; set `data-text` for best effect.
- Mono components render inline code-style chips with subtle backgrounds.

## Buttons

Two main retro variants are used site-wide, with page-specific prefixes.

Base retro style (DitherHome):
- `.retro-button` + modifiers:
  - `.dh-primary`: solid white on dark, strong shadow
  - `.dh-secondary`: dark gradient, subtle border

Command Center variant:
- `.cc-retro-button` with `.cc-primary` / `.cc-secondary` modifiers (same visual language, scoped class names)

Usage examples:
```jsx
// Primary action (bright)
<Link to="/join" className="retro-button dh-primary">
  <TypographySystem.Button>JOIN THE COMMUNITY</TypographySystem.Button>
</Link>

// Secondary action (neutral)
<button className="retro-button dh-secondary">
  <TypographySystem.Button>EXPLORE EVENTS</TypographySystem.Button>
</button>
```

To theme buttons, adjust `--bw-*` or override the modifiers:
```css
.dh-primary { background: var(--bw-90); color: var(--bw-10); }
.dh-secondary { background: linear-gradient(180deg,#16202a,#0f141a); }
```

## Surfaces: Panels and Cards

- Panels (glass on dark):
  - `.dh-panel`, `.cc-panel` use `--panel` background, blur, 1px subtle border.
- Cards (Command Center):
  - `.cc-card` + `.cc-card-header` + `.cc-card-content`

Example:
```jsx
<div className="dh-panel">
  <div className="dh-panel-row">
    <div className="dh-panel-item">
      <TypographySystem.MonoMedium>SYSTEM: <span>ONLINE</span></TypographySystem.MonoMedium>
    </div>
  </div>
</div>
```

## Layout and Grid

Command Center grid:
- Container: `.cc-grid`
- Responsive spans (>=1024px): `.lg-col-span-4`, `.lg-col-span-8`, `.lg-col-span-12`

JoinUs grid:
- `.gate-columns` splits form and status into `1fr` and `360px`; stacks at `<900px`.

Example:
```jsx
<div className="cc-grid">
  <div className="cc-card lg-col-span-8">…</div>
  <div className="cc-card lg-col-span-4">…</div>
</div>
```

## Terminal Aesthetic

Styles in `src/css/Terminal.css`:
- Container: `.terminal-container` (panel surface, rounded, shadowed)
- Header: `.terminal-header` with circular close button accents
- Body: `.terminal-body` scrollable area, custom scrollbar
- Input: `.terminal-input` and `.prompt`

The interactive terminal is implemented by `src/components/Terminal.jsx` and embedded via `TerminalOverlay`.

Embed example:
```jsx
import TerminalOverlay from "./components/TerminalOverlay";

<TerminalOverlay open={showTerminal} onClose={() => setShowTerminal(false)} />
```

Overlay styles in `src/css/TerminalOverlay.css`:
- `.to-overlay`, `.to-backdrop` (blurred dim), `.to-panel` (centered panel)

## JoinUs — Access Gate

Styles in `src/css/joinus.css`:
- Page shell: `.joinus-page`
- Frame: `.gate-frame` (glass panel card)
- Header controls: `.gate-header`, `.gate-controls`, `.gate-mode`, `.gate-home`
- Form area: `.gate-credentials`, `.prompt-row`, `.prompt-label`, `.prompt-input`
- Alerts: `.joinus-alert.error` and `.joinus-alert.success`
- Actions: `.gate-actions` with `.retro-button dh-primary|dh-secondary`
- Status feed: `.gate-status`, `.gate-feed`, `.feed-line`, `.gate-signout`

Prompt field example:
```jsx
function PromptField({ label, id, type = "text", value, onChange, placeholder }) {
  return (
    <div className="prompt-row">
      <label htmlFor={id} className="prompt-label">
        <TypographySystem.MonoSmall>{label}</TypographySystem.MonoSmall>
      </label>
      <input id={id} className="prompt-input" type={type} name={id} value={value} onChange={onChange} placeholder={placeholder} required />
    </div>
  );
}
```

## Utilities and Accents

Command Center utilities (in `CommandCenter.css`):

Example:
```jsx
<div className="cc-agent-item">
  <div className="cc-agent-left">
    <div className="cc-dot cc-dot-active" />
    <TypographySystem.MonoSmall>G-078W</TypographySystem.MonoSmall>
  </div>
</div>
```

### Command Overlay (floating code rain)

Defined in `src/css/CommandOverlay.css`:
- Container: `.command-overlay` covers the screen but is pointer-events: none (non-blocking).
- Floating text: `.command-text` uses a monospace font, translucent cyan (`#00ffea53`), and `fadeInOut` animation.

Usage snippet:
```jsx
<div className="command-overlay">
  <div className="command-text" style={{ top: 80, left: 120 }}>
    sudo nmap -sC -sV 10.10.10.10
  </div>
  {/* more positioned items */}
 </div>
```

## Background — Dither Canvas

</div>
```

Use `.dither-home::before` and similar overlays to improve content contrast.

## Animations and Effects

- Glitch: `.eye-glitch-text::before/::after` with `@keyframes glitch-1` / `glitch-2`.
- Scanning lines: `@keyframes scan` (DitherHome) and `cc-scan` (Command Center).
- Terminal mount transition: `.terminal-enter` / `.terminal-enter-active`.
- Overlay blur via `backdrop-filter`.

### Lanyard (3D accent)

`src/components/Lanyard/Lanyard.css`:
- `.lanyard-wrapper` positions a full-viewport 3D scene container, centered, z-index 0. Typically rendered behind the gate in JoinUs.

Example (as used in `JoinUs.jsx` inside an ErrorBoundary):
```jsx
<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
```
## Theming and Extension

To introduce an accent color, add new tokens and apply to selective components:
```css
:root { --accent: #00d1b2; --accent-weak: rgba(0, 209, 178, 0.25); }
.dh-secondary { border-color: var(--accent-weak); }
.cc-dot-active { background: var(--accent); }
.eye-label { color: var(--bw-90); }
```

Swap fonts by overriding variables in `typography_system.css` (after import):
```css
:root {
  --font-display: 'IBM Plex Mono', monospace;
  --font-body: 'IBM Plex Mono', monospace;
}
```

## Accessibility Notes

- High contrast via grayscale tokens; verify contrast when customizing.
- Landmarks/labels: pages use `role="main"`, overlays `role="dialog"`, feeds `aria-live="polite"`.
- Inputs use associated `<label htmlFor>` in JoinUs.

## Quick Checklist for New UI

- Use TypographySystem components for all text.
- Wrap actions in `.retro-button` with primary/secondary modifiers.
- Place content inside panel/card shells for consistency.
- Use tokens from `:root` for any new colors.
- Keep the Dither canvas behind content; add gradient overlays for readability.

---
If you need a ready-to-use component skeleton following the theme:
```jsx
export function ThemedCard({ title, children, footer }) {
  return (
    <div className="cc-card">
      <div className="cc-card-header">
        <TypographySystem.Label>{title}</TypographySystem.Label>
      </div>
      <div className="cc-card-content">
        {children}
        {footer && <div style={{ marginTop: 12 }}>{footer}</div>}
      </div>
    </div>
  );
}
```
