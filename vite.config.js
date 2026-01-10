import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: './', // Relative base for maximum compatibility
    server: {
        port: 3000,
        open: true
    }
})
