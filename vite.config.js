import { sentrySvelteKit } from '@sentry/sveltekit'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		// sentrySvelteKit({
		// 	sourceMapsUploadOptions: {
		// 		org: 'greenweb',
		// 		project: 'carbon-txt-website'
		// 	}
		// }),
		sveltekit()
	],
	build: {
		sourcemap: true,
	},
  server: {
    proxy: {
      "/api": "http://localhost:8000"
    }
  }
})
