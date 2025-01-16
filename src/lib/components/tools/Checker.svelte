<script>
	import { enhance } from '$app/forms'
	let checkingFile = $state(false)

	let { textInput } = $props()
</script>

<form
	class="validator-holder relative"
	method="POST"
	action="/tools/checker?/check"
	use:enhance={() => {
		checkingFile = true

		return async ({ update }) => {
			await update()
			checkingFile = false
		}
	}}
>
	<!-- A text input that takes a valid website domain -->
	<label for="domain">Carbon.txt File URL</label>
	<input type="url" id="carbon-txt-url" name="carbon-txt-url" placeholder="https://example.com/carbon.txt" required bind:value={textInput} pattern="https?:\/\/[a-z0-9-]+(\.[a-z0-9-]+)+([/?].*)" />
	<span aria-live="assertive" data-checking={checkingFile}>
		{#if checkingFile}
			<div class="checker">
				<span></span>
				<p>Checking carbon.txt file ....</p>
			</div>
		{:else}
			<button type="submit" class="btn btn-white w-[100%]">Fetch file and check</button>
		{/if}
	</span>
</form>

<style>
	form {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}

	.checker {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.25rem;
	}

	.checker span {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		border: 2px solid #333;
		border-top-color: transparent;
		border-right-color: transparent;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
