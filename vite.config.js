import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react({
        babel: {
          presets: ["@babel/preset-react"]
        }
      })],
      base: '/bolt-diy-faq/',
    });
