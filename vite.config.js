import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: './', // Esto asegura que los recursos se carguen de manera relativa
    plugins: [
        tailwindcss(),
    ],
});
