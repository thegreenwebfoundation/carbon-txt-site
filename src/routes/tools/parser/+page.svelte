<script>
	// NOTE: There is currently no way to test this validator locally as it relies on Cloudflare Workers KV.

	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Parser from '$lib/components/tools/Parser.svelte'
	import ToolsNav from '$lib/components/ToolsNav.svelte'
</script>

<ToolsNav currentView="parser" />

<section class="w-100" id="intro">
	<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 pb-[5rem] lg:grid lg:grid-cols-2 lg:items-center">
		<div class="prose md:w-[80%] mb-4">
			<Heading level={1}>Parser</Heading>
			<p>Use this parser to check the content of a carbon.txt file for a domain.</p>
		</div>
		<Parser />
	</div>
</section>

<ToolsNav currentView="parser" />
