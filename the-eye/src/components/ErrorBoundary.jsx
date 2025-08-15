import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can log to an error reporting service here
    // console.error('Terminal crashed:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" style={{
          width: '100%',
          padding: 12,
          borderRadius: 8,
          background: 'rgba(120,0,0,0.3)',
          border: '1px solid rgba(255,0,0,0.4)',
          color: '#fee',
        }}>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Terminal failed to load.</div>
          <div style={{ fontSize: 12, opacity: 0.8 }}>Check the console for details.</div>
        </div>
      );
    }
    return this.props.children;
  }
}
