<script>
	import { enhance } from '$app/forms'
	import { onMount } from 'svelte'
	let validating = $state(false)

	let { textInput, url, data, domain } = $props()

	// This code is used to trigger a verification lookup automatically if a url is provided when the page loads.
	onMount(() => {
		// Set the URL input value if it exists
		let searchParams = new URLSearchParams(data.url.search)
		const autoTrigger = searchParams.get('auto') || null

		if (url && autoTrigger === 'true') {
			document.getElementById('input-url').value = url
			document.getElementById('validator-form').submit()
			validating = true
		}
	})
</script>

<form
	id="validator-form"
	class="validator-holder relative"
	method="POST"
	action="/tools/validator?/validate"
	use:enhance={() => {
		validating = true

		return async ({ update }) => {
			await update()
			validating = false
		}
	}}
>
	<label class="flex flex-col gap-1" for="url"
		>Website domain:
		<small class="text-xs mb-3">Enter a website domain to check if it has a valid carbon.txt file.</small>
		<input id="input-domain" name="domain" bind:value={domain} type="text" />
	</label>
	<span class="divider">
		<span>OR</span>
		<hr />
	</span>
	<label class="flex flex-col gap-1" for="url"
		>Carbon.txt file URL:
		<small class="text-xs mb-3">Enter the URL of a public carbon.txt file.</small>
		<input id="input-url" name="url" bind:value={url} type="url" pattern="https?:\/\/[a-z0-9-]+(\.[a-z0-9-]+)+([/?].*)" />
	</label>
	<span class="divider">
		<span>OR</span>
		<hr />
	</span>
	<label for="carbon-txt-validator" class="flex flex-col gap-1"
		>Carbon.txt content
		<small class="text-xs mb-3">Paste the contents of a carbon.txt file in the textarea below.</small>
		<textarea name="carbon-txt-validator" bind:value={textInput} rows="8" /></label
	>
	{#if url.length > 0 && textInput.length > 0}
		<div class="prose mb-4 alert alert-error">
			<p>Please either a URL or text content, not both.</p>
		</div>
	{:else}
		<span aria-live="assertive" data-checking={validating}>
			{#if validating}
				<div class="checker">
					<span></span>
					<p>
						Validating carbon.txt syntax {#if url}
							for <br /><b>{url}</b>{/if}
					</p>
				</div>
			{:else}
				<button type="submit" class="btn btn-green w-[100%]">Validate syntax & check contents</button>
			{/if}
		</span>
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

	label > *:is(input):first-child {
		margin-top: 0.75rem;
	}

	.checker {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.25rem;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background: #fff;
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
