import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThirdwebProvider } from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThirdwebProvider
    activeChain="polygon"
    clientId="315d0c4add7d6d75bfbd0354ebcfd132">
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </ThirdwebProvider>,
);
