// src/Theme.jsx
export const lightTheme = {
    primary: '#4a6fa5',
    secondary: '#e78188',
    background: '#f9fafb',
    sidebar: '#ffffff',
    text: '#1f2937',
    textSecondary: '#4b5563',
    border: '#e5e7eb',
    codeBackground: '#f3f4f6',
    codeText: '#111827',
    activeNav: '#e3f0ff',
    activeNavText: '#4a6fa5',
    hoverNav: '#f3f4f6'
  };
  
  export const darkTheme = {
    primary: '#4a6fa5',
    secondary: '#e78188',
    background: '#111827',
    sidebar: '#1f2937',
    text: '#f3f4f6',
    textSecondary: '#9ca3af',
    border: '#374151',
    codeBackground: '#374151',
    codeText: '#f3f4f6',
    activeNav: '#172554',
    activeNavText: '#93c5fd',
    hoverNav: '#374151'
  };
  
  export const applyTheme = (darkMode) => {
    const theme = darkMode ? darkTheme : lightTheme;
    const root = document.documentElement;
    
    Object.entries(theme).forEach(([property, value]) => {
      root.style.setProperty(`--${property}`, value);
    });
  };