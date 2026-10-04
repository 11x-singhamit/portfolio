import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vendor-independent static build.
// No serverless functions, no platform adapters.
// `npm run build` emits a plain dist/ directory deployable anywhere.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    minify: 'esbuild',
    target: 'es2020',
  },
  server: {
    port: 5173,
    strictPort: false,
  },
  preview: {
    port: 4173,
  },
});
