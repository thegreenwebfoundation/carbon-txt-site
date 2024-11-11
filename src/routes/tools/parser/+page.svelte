<script>
	// NOTE: There is currently no way to test this validator locally as it relies on Cloudflare Workers KV.

	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Parser from '$lib/components/tools/Parser.svelte'
	import ToolsNav from '$lib/components/ToolsNav.svelte'

	/** @type {{ data: import('./$types').PageData, form: import('./$types').ActionData }} */
	let { data, form } = $props()
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

{#if form?.response.success}
	<section class="w-100" id="result">
		<div class="prose md:w-[80%] mb-4">
			<h1 class="text-3xl font-bold mb-4">Success</h1>
			<p>The provided carbon.txt file is valid.</p>
		</div>
	</section>
{:else if form?.response.errors}
	<section class="w-100" id="result">
		<div class="prose md:w-[80%] mb-4">
			<h1 class="text-3xl font-bold mb-4">Errors</h1>
			<p>The provided carbon.txt file contains errors.</p>
			<p>Use our <a href="/tools/validator">Validator tool</a> to check the content of the file and identify the errors.</p>
			<p>For help creating a carbon.txt file, please use our <a href="/tools/builder">Builder</a>.</p>
		</div>
	</section>
{:else if form?.response.error}
	<section class="w-100" id="result">
		<div class="prose md:w-[80%] mb-4">
			<h1 class="text-3xl font-bold mb-4">Error</h1>
			<p>Unable to check the provided file. Please submit a valid TOML carbon.txt file for checking.</p>
			<p>For help creating a carbon.txt file, please use our <a href="/tools/builder">Builder</a>.</p>
		</div>
	</section>
{/if}

<ToolsNav currentView="parser" />
