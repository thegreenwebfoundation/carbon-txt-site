import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		sourcemap: true
	},
	server: {
		proxy: {
			'/api': 'http://localhost:8000'
		}
	}
})
