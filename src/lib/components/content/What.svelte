<script>
	export let short = false
</script>

<div class="grid gap-6">
	{#if short}
		<p class="prose text-inherit">
			carbon.txt makes sustainability data easier to discover and use on the web. Carbon.txt is a single place to look on any domain – /carbon.txt – for public, machine-readable, sustainability data
			relating to that company.
		</p>
	{:else}
		<p class="prose text-inherit">
			carbon.txt makes sustainability data easier to discover and use on the web. Carbon.txt is a single place to look on any domain – /carbon.txt – for public, machine-readable, sustainability data
			relating to that company.
		</p>
		<p class="prose text-inherit">
			It’s a web-first, connect not collect style approach, of most benefit to those interested in scraping the structured data companies have to publish according to national laws. Designed to be
			extended by default, we see carbon.txt becoming essential infrastructure for sustainability data services crunching available numbers and sharing the stories it can tell.
		</p>
	{/if}
</div>
