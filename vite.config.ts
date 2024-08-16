import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
  base: "/",
  plugins: [react()],
  preview: { 
    port: 8080,
    strictPort: true,
  },
  server: {
    port: parseInt(env.PORT),
    host: true,
    origin: "http://0.0.0.0:8080",
  },
}
})
