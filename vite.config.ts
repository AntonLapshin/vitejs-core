import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'core',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './Auth': './src/utils/auth.ts',
      },
      shared: ['react'],
    }),
  ],
});
