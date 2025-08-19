import '../css/typography_system.css';

const TypographySystem = {
  DisplayLarge: ({ children, className = '', ...props }) => (
    <h1 className={`eye-display-large ${className}`} {...props}>
      <span className="eye-glitch-text">{children}</span>
    </h1>
  ),
  
  DisplayMedium: ({ children, className = '', ...props }) => (
    <h2 className={`eye-display-medium ${className}`} {...props}>
      <span className="eye-glitch-text">{children}</span>
    </h2>
  ),

  DisplaySmall: ({ children, className = '', ...props }) => (
    <h3 className={`eye-display-small ${className}`} {...props}>
      <span className="eye-glitch-text">{children}</span>
    </h3>
  ),

  HeadlineLarge: ({ children, className = '', ...props }) => (
    <h2 className={`eye-headline-large ${className}`} {...props}>{children}</h2>
  ),

  HeadlineMedium: ({ children, className = '', ...props }) => (
    <h3 className={`eye-headline-medium ${className}`} {...props}>{children}</h3>
  ),

  HeadlineSmall: ({ children, className = '', ...props }) => (
    <h4 className={`eye-headline-small ${className}`} {...props}>{children}</h4>
  ),

  BodyLarge: ({ children, className = '', ...props }) => (
    <p className={`eye-body-large ${className}`} {...props}>{children}</p>
  ),

  BodyMedium: ({ children, className = '', ...props }) => (
    <p className={`eye-body-medium ${className}`} {...props}>{children}</p>
  ),

  BodySmall: ({ children, className = '', ...props }) => (
    <p className={`eye-body-small ${className}`} {...props}>{children}</p>
  ),

  MonoLarge: ({ children, className = '', ...props }) => (
    <code className={`eye-mono-large ${className}`} {...props}>{children}</code>
  ),

  MonoMedium: ({ children, className = '', ...props }) => (
    <code className={`eye-mono-medium ${className}`} {...props}>{children}</code>
  ),

  MonoSmall: ({ children, className = '', ...props }) => (
    <code className={`eye-mono-small ${className}`} {...props}>{children}</code>
  ),

  Button: ({ children, className = '', ...props }) => (
    <span className={`eye-button-text ${className}`} {...props}>{children}</span>
  ),

  Label: ({ children, className = '', ...props }) => (
    <span className={`eye-label ${className}`} {...props}>{children}</span>
  )
};

export default TypographySystem;
