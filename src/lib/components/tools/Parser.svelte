<script>
	import { enhance } from '$app/forms'

	let textInput = ''
	// Validate that the input is a valid domain format
	$: domain = textInput.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)?/g)
</script>

<form class="validator-holder relative" method="POST" action="/tools/parser?/" use:enhance>
	<!-- A text input that takes a valid website domain -->
	<label for="domain">Domain</label>
	<input type="text" id="domain" name="domain" placeholder="example.com" required bind:value={textInput} />
	<!-- A submit button that sends the domain to the parser -->
	<button type="submit" class="btn btn-white w-[100%]">Parse</button>
</form>

<style>
	form {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}
</style>
