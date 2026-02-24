import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
    base: './', // Esto asegura que los recursos se carguen de manera relativa
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                programs: resolve(__dirname, 'programs.html'),
                donate: resolve(__dirname, 'donate.html')
            }
        }
    }
});
