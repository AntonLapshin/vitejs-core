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
      exposes: {
        './Api': './src/utils/api.ts',
      },
      remotes: {
        mfe1: 'http://localhost:4174/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
