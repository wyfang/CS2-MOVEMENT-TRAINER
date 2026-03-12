import { defineConfig } from 'vite';
export default defineConfig({
  base: process.env.VITE_BASE || '/counterstrafe-minigame/',
  server: {
    port: 5173,
    open: true
  },
  build: {
    target: 'esnext'
  }
});
