<script>
	import { enhance } from '$app/forms'

	let { textInput } = $props()
	// Validate that the text input is a valid URL and ends with /carbon.txt
	let validUrl = $derived(textInput.match(/https?:\/\/[a-z0-9-]+(\.[a-z0-9-]+)+([/?].*)?\/carbon\.txt/))
</script>

<form class="validator-holder relative" method="POST" action="/tools/checker?/check" use:enhance>
	<!-- A text input that takes a valid website domain -->
	<label for="domain">Carbon.txt File URL</label>
	<input
		type="url"
		id="carbon-txt-url"
		name="carbon-txt-url"
		placeholder="https://example.com/carbon.txt"
		required
		bind:value={textInput}
		pattern="https?:\/\/[a-z0-9-]+(\.[a-z0-9-]+)+([/?].*)?\/carbon\.txt"
	/>
	{#if textInput.length > 0 && validUrl === null}
		<p class="text-purple-500">Please enter a valid URL that ends with /carbon.txt</p>
	{/if}
	<!-- A submit button that sends the domain to the parser -->
	<button type="submit" class="btn btn-white w-[100%]">Fetch file and check</button>
</form>

<style>
	form {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}
</style>
