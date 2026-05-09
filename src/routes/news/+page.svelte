<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import * as publicEnv from '$env/static/public'

	const WP_BLOG_HOST = 'www.thegreenwebfoundation.org'

	/** @type {import('./$types').PageProps} */
	let { data } = $props()

	const posts = data?.posts || []
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 border-b-2 last:border-0 border-neutral-200">
	<div class="w-100 mb-[5rem] pt-[2.5rem]">
		<Heading level={1}>News</Heading>
		<p class="prose mt-4 mb-8">Read the latest news about the carbon.txt project from the <a href="https://{WP_BLOG_HOST}/news/" target="_blank">Green Web Foundation blog</a>.</p>
		<div class="prose" id="loading-spinner-container">
			<img src="/loading.gif" alt="Loading..." class="mx-auto my-8 py-8" height="75" width="75" />
		</div>
		{#if posts && posts.length > 0}
			<ul class="prose ml-0">
				{#each $posts as post}
					<li class="pt-3 pb-5 pl-0">
						<Heading level={3} class="pb-1 pt-1 mt-1 mb-0"><a href={post.link} class="no-underline hover:underline" target="_blank">{@html post.title}</a></Heading>
						<div class="excerpt">{@html post.excerpt}</div>
					</li>
				{/each}
			</ul>
		{/if}
		<div class="prose more-link text-right mt-8 pt-8">
			<p><a href="https://{WP_BLOG_HOST}/categories/carbon-txt/" target="_blank">Read older posts on the blog</a> »</p>
		</div>
	</div>
</section>
