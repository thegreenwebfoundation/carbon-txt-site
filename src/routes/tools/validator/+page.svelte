<script>
	// NOTE: There is currently no way to test this validator locally as it relies on Cloudflare Workers KV.

	// Components
	import Heading from '$lib/components/Heading.svelte'
	import SyntaxValidator from '$lib/components/tools/SyntaxValidator.svelte'
	import Button from '$lib/components/Button.svelte'
	import ToolsNav from '$lib/components/ToolsNav.svelte';
</script>

<ToolsNav currentView="validator"/>

<section class="w-100" id="intro">
	<div class="relative block">
		<div class="absolute -z-50 right-0 w-1/2 -top-24 bg-no-repeat bg-right bg-[length:100%_100%] bg-gradient-to-l from-green-500 hidden md:block" style="height: calc(100% + 100px);" />
		<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 pb-[5rem] min-h-[80vh] lg:grid lg:grid-cols-2 lg:items-center">
			<div class="mb-10 prose md:w-[80%]">
				<Heading level={1}>Validator</Heading>
				<p>Use this validator to check that a carbon.txt file you have created is syntactically valid.</p>
				<SyntaxValidator />
			</div>
		</div>
	</div>
</section>

<ToolsNav currentView="validator"/>
