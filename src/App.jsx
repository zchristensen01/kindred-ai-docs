import React from 'react';
import StripeStyleDocs from './components/StripeStyleDocs.jsx';

// main React component that loads the entire application
// renders StripeStyleDocs.js, which contains all the API documentation

function App() {
  return (
    <div className="App">
      <StripeStyleDocs />
    </div>
  );
}

export default App;
