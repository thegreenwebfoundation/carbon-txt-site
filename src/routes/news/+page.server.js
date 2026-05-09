const WP_BLOG_HOST = 'www.thegreenwebfoundation.org'
const PER_PAGE = 10
const WP_CATEGORY_ID = 93
const fetchUrl = `http://${WP_BLOG_HOST}/wp-json/wp/v2/posts?categories=${WP_CATEGORY_ID}&per_page=${PER_PAGE}`

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, setHeaders }) {
	const response = await fetch(fetchUrl)
	const json = await response.json()

	const posts = json.map((postJson) => {
		const title = postJson.title.rendered
		const link = postJson.link
		const time = postJson.date
		const excerpt = postJson.excerpt.rendered

		return { title, link, time, excerpt }
	})

	// Cache for 24 hours
	setHeaders({
		'cache-control': 'public, max-age=86400'
	})

	return {
		posts
	}
}
