<script>
	import { enhance } from '$app/forms'

	let { textInput } = $props()
</script>

<form class="validator-holder relative" method="POST" action="/tools/checker?/check" use:enhance>
	<!-- A text input that takes a valid website domain -->
	<label for="domain">Carbon.txt File URL</label>
	<input type="url" id="carbon-txt-url" name="carbon-txt-url" placeholder="https://example.com/carbon.txt" required bind:value={textInput} pattern="https?:\/\/[a-z0-9-]+(\.[a-z0-9-]+)+([/?].*)" />
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
