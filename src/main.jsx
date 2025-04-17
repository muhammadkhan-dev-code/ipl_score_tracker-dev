
import {React, StrictMode }from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the main App component
import './index.css'; // Optional: Import your global styles if you have any


const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root DOM element

root.render(
  <StrictMode>
  <App />
</StrictMode>
);
