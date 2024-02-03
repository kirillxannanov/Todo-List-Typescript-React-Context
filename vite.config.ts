import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/Todo-List-Typescript-React-Context',
	plugins: [react()],
})
