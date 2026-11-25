<script>
	import { page } from '$app/stores'

	export let title = "Digital sustainability matters"
	export let description = 'A single, discoverable location on any web domain for public, machine-readable sustainability data about that company.'
  export let image = "/carbon_txt_opengraph.png"
  export let imageWidth = "1200"
  export let imageHeight = "627"

	const siteName = 'carbon.txt'

	$: fullTitle = [siteName, title].join(" — ")
	$: url = $page.url.href
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image:width" content={imageWidth} />
	<meta property="og:image:height" content={imageHeight} />
</svelte:head>
