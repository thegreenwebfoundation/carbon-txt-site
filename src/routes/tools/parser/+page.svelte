<script>
	// NOTE: There is currently no way to test this validator locally as it relies on Cloudflare Workers KV.

	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Parser from '$lib/components/tools/Parser.svelte';
	import ToolsNav from '$lib/components/ToolsNav.svelte';
</script>

<ToolsNav currentView="parser"/>

<section class="w-100" id="intro">
	<div class="relative block">
		<div class="absolute -z-50 right-0 w-1/2 -top-24 bg-no-repeat bg-right bg-[length:100%_100%] bg-gradient-to-l from-green-500 hidden md:block" style="height: calc(100% + 100px);" />
		<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 pb-[5rem] min-h-[80vh] lg:grid lg:grid-cols-2 lg:items-center">
			<div class="mb-10 prose md:w-[80%]">
				<Heading level={1}>Parser</Heading>
				<p>Use this parser to check the content of a carbon.txt file for a domain.</p>
			</div>
			<Parser />
		</div>
	</div>
</section>

<ToolsNav currentView="parser"/>