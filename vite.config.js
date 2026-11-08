import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' permite que el sitio funcione en GitHub Pages (en cualquier subcarpeta)
export default defineConfig({
  plugins: [react()],
  base: './',
});
