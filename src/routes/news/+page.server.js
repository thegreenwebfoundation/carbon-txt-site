import * as publicEnv from '$env/static/public'

const WP_BLOG_HOST = publicEnv['PUBLIC_WP_BLOG_HOST'] || 'www.thegreenwebfoundation.org'
const PER_PAGE = publicEnv['PUBLIC_WP_PER_PAGE'] || 10
const WP_CATEGORY_ID = publicEnv['PUBLIC_WP_CATEGORY_ID'] || 93

/** @type {import('./$types').PageLoad} */
export async function load() {
	const fetchUrl = `https://${WP_BLOG_HOST}/wp-json/wp/v2/posts?categories=${WP_CATEGORY_ID}&per_page=${PER_PAGE}`
	console.log(fetchUrl)
	const response = await fetch(fetchUrl)
	const json = await response.json()

	const posts = json.map((postJson) => {
		const title = postJson.title.rendered
		const link = postJson.link
		const time = Intl.DateTimeFormat(navigator.language, { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date(postJson.date))
		const excerptSource = postJson.excerpt.rendered
		const excerptDoc = new DOMParser().parseFromString(excerptSource, 'text/html')
		const excerptNode = excerptDoc.querySelector('p')
		const dateNode = excerptDoc.createElement('strong')
		dateNode.innerText = `${time}: `
		excerptNode.prepend(dateNode)
		excerptNode.classList.add('mt-0')
		const readMoreNode = excerptDoc.createElement('a')
		readMoreNode.href = link
		readMoreNode.target = '_blank'
		readMoreNode.innerText = '[read more]'
		excerptNode.append(' ')
		excerptNode.append(readMoreNode)
		const excerpt = excerptNode.outerHTML
		return { title, link, excerpt }
	})

	return {
		posts
	}
}
