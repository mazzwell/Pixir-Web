import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { ThirdwebProvider } from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThirdwebProvider
    activeChain="polygon"
    clientId="315d0c4add7d6d75bfbd0354ebcfd132"
  >
    <Auth0Provider
      domain="dev-ni0tnt8gtmmovqle.us.auth0.com"
      clientId="pcUaGmxK3eDV4dSAKPmNj3JsDG6Tdc2K"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Auth0Provider>
  </ThirdwebProvider>,
);
