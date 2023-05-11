<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'

	import { enhance } from '$app/forms'
	export let form
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<Heading level={1}>Validator</Heading>
	<p>Use this validator too to check what is returned when your carbon.txt file is parsed.</p>
	<form class="form mt-[5rem]" use:enhance method="POST" action="?/registerFile	">
		<div class="flex flex-col gap-1">
			<label for="carbon-txt-url">Your carbon.txt URL</label>
			<!-- URL input with validation that the URL ends with carbon.txt -->
			<input class="form-input" type="url" id="carbon-txt-url" name="carbon-txt-url" required pattern=".*carbon\.txt$" />
		</div>
		<button type="submit" class="btn" on:click|once>Submit</button>
	</form>

	{#if form?.status === 'ok'}
		<pre>
            <code>
                {JSON.stringify(form?.data, null, 2)}
            </code>
        </pre>
	{:else if form?.status === 'error'}
		<div class="alert__error">
			<p>Something went wrong. Please try again with a valid carbon.txt URL.</p>
		</div>
	{/if}
</section>
