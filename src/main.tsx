import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';      // Import Provider
import { store } from './store';             // Import your Redux store
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Wrap Provider here and give store */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
