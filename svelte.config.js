import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-cloudflare'

export default {
	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		}),
		csrf: {
			checkOrigin: false
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
}
