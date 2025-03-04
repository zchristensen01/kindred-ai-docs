import React from 'react';
import StripeStyleDocs from './components/StripeStyleDocs.jsx';
import { ThemeProvider } from './ThemeContext';

// main React component that loads the entire application
// renders StripeStyleDocs.js, which contains all the API documentation

function App() {
  return (
    <ThemeProvider>
      <StripeStyleDocs />
    </ThemeProvider>
  );
}

export default App;
