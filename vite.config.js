import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On GitHub Actions this resolves to /repository-name/. Locally it remains /.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS && repository ? `/${repository}/` : '/',
})
