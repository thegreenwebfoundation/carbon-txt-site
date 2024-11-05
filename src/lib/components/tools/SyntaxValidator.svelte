<script>
	import { enhance } from '$app/forms'

	let textInput = ''
</script>

<form class="validator-holder relative" method="POST" action="/tools/validator?/validate" use:enhance>
	<textarea name="carbon-txt" bind:value={textInput} rows="15" />
	<button type="submit" class="btn btn-white w-[100%]">Submit</button>
</form>
