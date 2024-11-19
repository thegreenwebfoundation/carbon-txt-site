<script>
	import { enhance } from '$app/forms'
	import { stringify } from 'postcss'

	let { textInput, url } = $props()
	let validUrl = $derived(textInput.match(/https?:\/\/[a-z0-9-]+(\.[a-z0-9-]+)+([/?].*)?\/carbon\.txt/))
</script>

<form class="validator-holder relative" method="POST" action="/tools/validator?/validate" use:enhance>
	<label for="url"
		>Carbon.txt URL: <input name="url" bind:value={url} type="url" pattern="https?:\/\/[a-z0-9-]+(\.[a-z0-9-]+)+([/?].*)?\/carbon\.txt" />
		{#if url.length > 0 && validUrl === null}
			<p class="text-purple-500">Please enter a valid URL that ends with /carbon.txt</p>
		{/if}
	</label>
	<span class="divider">
		<span>OR</span>
		<hr />
	</span>
	<label for="carbon-txt-validator">Carbon.txt content<textarea name="carbon-txt-validator" bind:value={textInput} rows="15" /></label>
	{#if url.length > 0 && textInput.length > 0}
		<div class="prose mb-4 alert alert-error">
			<p>Please either a URL or text content, not both.</p>
		</div>
	{:else}
		<button type="submit" class="btn btn-white w-[100%]">Submit</button>
	{/if}
</form>

<style>
	/* Write CCS that puts the "OR" span in the middle of the HR, and adds margin to the divider */
	.divider {
		margin-block: 1.25rem;
		text-align: center;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
	}

	.divider span {
		background-color: white;
		padding: 0 1rem;
		position: relative;
		grid-column: 2;
		grid-row: 1;
	}

	.divider hr {
		border: none;
		border-top: 1px solid #e5e7eb;
		grid-column: -1/1;
		grid-row: 1;
	}

	label {
		font-size: 1.25rem;
	}

	label > p {
		margin-top: 0.5rem;
		font-size: 1rem;
	}

	label > *:first-child {
		margin-top: 0.75rem;
	}
</style>
