import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  plugins: [react()],
  // Add other Vite configuration settings here
  // You can use process.env here for server-side configurations
  server: {
    // Example of using an environment variable for server configuration
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  },
  // Example of defining global constants based on environment variables
  define: {
    'process.env.CUSTOM_VARIABLE': JSON.stringify(process.env.CUSTOM_VARIABLE),
  },
});
