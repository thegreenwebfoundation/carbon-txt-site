<script>
	import { goto } from '$app/navigation'
	// NOTE: There is currently no way to test this validator locally as it relies on Cloudflare Workers KV.

	// Components
	import Heading from '$lib/components/Heading.svelte'
	import SyntaxValidator from '$lib/components/tools/SyntaxValidator.svelte'
	import SyntaxValidatorSuccess from '$lib/components/tools/SyntaxValidatorSuccess.svelte'
	import SyntaxValidatorError from '$lib/components/tools/SyntaxValidatorError.svelte'
	import ToolsNav from '$lib/components/ToolsNav.svelte'

	/** @type {{ data: import('./$types').PageData, form: import('./$types').ActionData }} */
	let { data, form } = $props()
</script>

<ToolsNav currentView="validator" />

<section class="w-100" id="intro">
	<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 pb-[5rem] lg:grid lg:grid-cols-2 lg:items-center">
		<div class="prose md:w-[80%]">
			<Heading level={1}>Validator</Heading>
			<p>Use this validator to check that a carbon.txt file you have created is syntactically valid.</p>
		</div>
		<SyntaxValidator />
	</div>
</section>

{#if form?.response.success}
	<SyntaxValidatorSuccess text_contents={form?.text_contents} />
{:else if form?.response.errors}
	<SyntaxValidatorError text_contents={form?.text_contents} errors={form?.response.errors} />
{/if}

<ToolsNav currentView="validator" />
