<script>
	// NOTE: There is currently no waay to test this validator locally as it relies on Cloudflare Workers KV.

	// Components
	import Heading from '$lib/components/Heading.svelte'
	import SyntaxValidator from '$lib/components/tools/SyntaxValidator.svelte'
	import SyntaxValidatorSuccess from '$lib/components/tools/SyntaxValidatorSuccess.svelte'
	import SyntaxValidatorError from '$lib/components/tools/SyntaxValidatorError.svelte'
	import ToolsNav from '$lib/components/ToolsNav.svelte'
	import { onMount } from 'svelte'

	/** @type {{ data: import('./$types').PageData, form: import('./$types').ActionData }} */
	let { data, form } = $props()

	console.log('form', form)

	let url = ''
	let searchParams = new URLSearchParams(data.url.search)
	if (searchParams) {
		url = searchParams.get('url')
	}
</script>

<ToolsNav currentView="validator" />

<section class="w-100" id="intro">
	<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 pb-[5rem] lg:grid lg:grid-cols-2 lg:items-center">
		<div class="prose md:w-[80%]">
			<Heading level={1}>Validator</Heading>
			<p>Use this validator to check that the contents of a carbon.txt file is syntactically valid.</p>
		</div>
		<SyntaxValidator textInput={form?.text_contents || ''} url={form?.url || url || ''} />
	</div>
</section>

{#if form?.response.success}
	<SyntaxValidatorSuccess text_contents={form?.text_contents} />
{:else if form?.response.errors}
	<SyntaxValidatorError text_contents={form?.text_contents} errors={form?.response.errors} errorLines={form?.response.errorLines} />
{:else if form?.response.error}
	<section class="w-100" id="result">
		<div class="prose md:w-[80%] mb-4 alert alert-error">
			<h1 class="text-3xl font-bold mb-4">Error</h1>
			<p>Unable to validate the provided content. Please submit a valid TOML carbon.txt syntax for validation.</p>
			<p>For help creating a carbon.txt file, please use our <a href="/tools/builder">Builder</a>.</p>
		</div>
	</section>
{/if}

<ToolsNav currentView="validator" />
