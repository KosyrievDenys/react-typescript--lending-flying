import React from 'react';

//libs
import ReactDOM from 'react-dom/client';

//components
import { App } from './App';

//assets
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
