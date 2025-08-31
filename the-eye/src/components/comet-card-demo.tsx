import { CometCard } from "@/components/ui/comet-card";

import cyberchxse from "@/assets/cyberchxse.jpg";

export default function CometCardDemo() {
  return (
    
    <CometCard>
      <button
        type="button"
        aria-label="Open Cyber Chxse invitation"
  onClick={() => window.open('https://cyber-chaxe.vercel.app', '_blank', 'noopener,noreferrer')}
        style={{
          // Size and layout (replace Tailwind utilities for this project)
          width: 320,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          margin: '20px 0',
          border: 0,
          borderRadius: 16,
          background: '#1F2121',
          padding: 16,
          cursor: 'pointer',
          // 3D effect compatibility with CometCard
          transformStyle: 'preserve-3d',
          transform: 'none',
          opacity: 1,
        }}
      >
        <div style={{ flex: 1, margin: '0 8px' }}>
          <div
            style={{
              position: 'relative',
              marginTop: 8,
              width: '100%',
              aspectRatio: '3 / 4',
              borderRadius: 16,
              overflow: 'hidden',
            }}
          >
            <img
              loading="lazy"
              alt="Invite background"
              src={cyberchxse}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                background: '#000',
                filter: 'contrast(0.75)',
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 6px 0px',
                opacity: 1,
              }}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 16,
            color: '#fff',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            fontSize: 12,
          }}
        >
          <div style={{ fontWeight: 600 }}>Cyber Chxse Invitation</div>
          <div
            style={{ color: '#d1d5db', opacity: 0.7 }}
          >
            Join US
          </div>
        </div>
      </button>
    </CometCard>
  );
}
