import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Example: Log the API URL from the environment variable
console.log('API URL:', import.meta.env.VITE_API_URL);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
