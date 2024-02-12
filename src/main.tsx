import React from "react";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThirdwebProvider
    activeChain="polygon"
    clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </ThirdwebProvider>,
);
