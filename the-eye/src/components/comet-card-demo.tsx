import { CometCard } from "@/components/ui/comet-card";

export default function CometCardDemo() {
  return (
    <CometCard>
      <button
        type="button"
        aria-label="View invite F7RA"
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
              src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <div>Comet Invitation</div>
          <div style={{ color: '#d1d5db', opacity: 0.5 }}>#F7RA</div>
        </div>
      </button>
    </CometCard>
  );
}
