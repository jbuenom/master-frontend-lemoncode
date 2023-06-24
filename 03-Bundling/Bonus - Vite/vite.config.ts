import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [checker({ typescript: true }), react(),legacy({
    targets: ['defaults', 'IE 11'],
  })],
});