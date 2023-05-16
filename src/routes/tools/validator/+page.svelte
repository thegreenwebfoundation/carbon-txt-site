<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'

	import { load } from 'js-toml'

	let tomlError = ''
	$: try {
		let parsed = load(textInput)
		tomlError = ''
		console.log(parsed)
	} catch (error) {
		// Find offset: nnn in the error, where nnn is a number. Return that number.
		let offset = error.message.match(/offset: (\d+)/)[1]
		// Get the 5 characters around the offset
		tomlError = textInput.slice(offset - 5, textInput.length - offset + 5)
		// Highlight the position of the error in the tomlError string by positioning an arrow below the offset
		tomlError = tomlError + '<br />' + '&nbsp;'.repeat(5) + '^'
		console.log(error)
	}

	import { enhance } from '$app/forms'
	export let form

	let checkedUrl = form?.url
	$: textInput = ''
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<Heading level={1}>Validator</Heading>
	<p>Use this validator too to check what is returned when your carbon.txt file is parsed.</p>
	<div class="lg:grid lg:grid-cols-2 lg:items-center">
		<textarea name="carbon-txt" bind:value={textInput} />
		{#if tomlError.length > 0}
			<div class="alert__error">
				<p>There is an error in your carbon.txt syntax:</p>
				<p>{@html tomlError}</p>
			</div>
		{:else}
			<!-- else content here -->
			<div class="max-w-100">
				<div class="alert__success">
					<p>There are no errors in your carbon.txt syntax.</p>
				</div>
				<Code code={textInput} lang="toml" />
			</div>
		{/if}
	</div>
	<form class="form mt-[5rem]" use:enhance method="POST" action="?/registerFile	">
		<div class="flex flex-col gap-1">
			<label for="carbon-txt-url">Your carbon.txt URL</label>
			<!-- URL input with validation that the URL ends with carbon.txt -->
			<div class="flex gap-3 flex-wrap">
				<input class="form-input flex-none lg:max-w-[80%]" type="url" id="carbon-txt-url" name="carbon-txt-url" required bind:value={checkedUrl} />
				<button type="submit" class="btn" on:click|once>Submit</button>
			</div>
		</div>
	</form>
</section>

<!-- {#if form?.status === 'ok'}
	<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
		<Heading level={2}>Parsed results</Heading>

		<Heading level={3}>Upstream</Heading>
		<p>The information that is able to be gathered from the upstream providers in the carbon.txt.</p>

		<ul class="mt-[1rem] divide-y">
			<li class="grid grid-cols-3 gap-2 items-center p-2 bg-green-600 text-white">
				<div class="domain">Provider name</div>
				<div class="service">Verified green provider</div>
				<div class="evidence">Supporting documentation</div>
			</li>
			{#each upstreamResults as upstream}
				<li class="grid grid-cols-3 gap-2 items-center p-2 bg-green-600 text-white">
					<div class="domain">{upstream.name || upstream.domaina}</div>
					<div class="service">Verified green provider</div>
					<div class="evidence">Supporting documentation</div>
				</li>
			{/each}
		</ul>
	</section>
{/if} -->

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	{#if form?.status === 'ok'}
		<Heading level={2}>Raw output</Heading>
		<Code code={JSON.stringify(form?.data, null, 2)} lang="json" />
	{:else if form?.status === 'error'}
		<div class="alert__error">
			<p>Something went wrong. Please try again with a valid carbon.txt URL.</p>
		</div>
	{/if}
</section>
