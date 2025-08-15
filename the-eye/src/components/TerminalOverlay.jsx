import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Terminal from './Terminal';
import ErrorBoundary from './ErrorBoundary';
import './TerminalOverlay.css';

export default function TerminalOverlay({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const overlay = (
    <div className="to-overlay" role="dialog" aria-modal="true" aria-label="Terminal">
      <div className="to-backdrop" onClick={onClose} />
      <div className="to-panel" onClick={(e) => e.stopPropagation()}>
        <ErrorBoundary>
          <Terminal id="embedded-terminal" onClose={onClose} />
        </ErrorBoundary>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
