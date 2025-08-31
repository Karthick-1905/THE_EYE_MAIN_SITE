import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toTimeString().split(' ')[0];
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">THE_EYE</span>
                {/* <span className="logo-cursor">_</span> */}
              </div>
              <p className="footer-tagline">VISIO PROTECTORIS</p>
              <p className="footer-description">
                Cybersecurity excellence through knowledge, practice, and community.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-heading">
                <span className="heading-bracket">[</span>
                EXPLORE
                <span className="heading-bracket">]</span>
              </h4>
              <ul className="footer-links">
                <li><Link to="/events">// Events</Link></li>
                <li><Link to="/verticals">// Verticals</Link></li>
                <li><Link to="/command-center">// Command Center</Link></li>
                <li><Link to="/join">// Join Us</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-section">
              <h4 className="footer-heading">
                <span className="heading-bracket">[</span>
                RESOURCES
                <span className="heading-bracket">]</span>
              </h4>
              <ul className="footer-links">
                <li><a href="#writeups">// Writeups</a></li>
                <li><a href="#tools">// Tools</a></li>
                <li><a href="#ctf">// CTF Archive</a></li>
                <li><a href="#docs">// Documentation</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="footer-section">
              <h4 className="footer-heading">
                <span className="heading-bracket">[</span>
                CONNECT
                <span className="heading-bracket">]</span>
              </h4>
              <ul className="footer-links">
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">// GitHub</a></li>
                <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">// Discord</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">// Twitter</a></li>
                <li><a href="mailto:contact@theeye.com">// Email</a></li>
              </ul>
            </div>

            {/* System Status */}
            <div className="footer-section">
              <h4 className="footer-heading">
                <span className="heading-bracket">[</span>
                SYSTEM
                <span className="heading-bracket">]</span>
              </h4>
              <div className="system-status">
                <div className="status-item">
                  <span className="status-label">STATUS:</span>
                  <span className="status-value online">ONLINE</span>
                </div>
                <div className="status-item">
                  <span className="status-label">TIME:</span>
                  <span className="status-value">{formatTime(time)}</span>
                </div>
                <div className="status-item">
                  <span className="status-label">DATE:</span>
                  <span className="status-value">{formatDate(time)}</span>
                </div>
                <div className="status-item">
                  <span className="status-label">MODE:</span>
                  <span className="status-value">SECURE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Line */}
        <div className="footer-terminal">
          <span className="terminal-prompt">$</span>
          <span className="terminal-text">sudo ./protect --mode=active --target=all</span>
          <span className="terminal-cursor">█</span>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-left">
              <span className="copyright">© 2025 THE EYE</span>
              <span className="separator">|</span>
              <Link to="/privacy" className="footer-link">Privacy</Link>
              <span className="separator">|</span>
              <Link to="/terms" className="footer-link">Terms</Link>
              <span className="separator">|</span>
              <Link to="/sitemap" className="footer-link">Sitemap</Link>
            </div>
            
            <div className="footer-center">
              <div className="scan-line"></div>
            </div>

            <div className="footer-right">
              <span className="security-level">
                SECURITY_LEVEL: <span className="level-max">MAXIMUM</span>
              </span>
            </div>
          </div>
        </div>

        {/* ASCII Art Border */}
        <div className="footer-ascii">
          ═══════════════════════════════════════════════════════════════════════════════
        </div>
      </div>
    </footer>
  );
};

export default Footer;
