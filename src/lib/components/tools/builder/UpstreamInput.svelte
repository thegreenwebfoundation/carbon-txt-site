<script>
	import slugify from '@sindresorhus/slugify';
	import FormField from './FormField.svelte';
  import { domainRegex } from "$lib/utils/constants";

	let { store } = $props()

	let newObject = $state({
		domain: '',
		service: ''
	})

	let error = $state({
		field: '',
		message: ''
	})

	const validate = () => {
		if (newObject.domain.length === 0) {
			error.field = 'domain'
			error.message = 'Please enter a domain'
			return false
		}

		if (!domainRegex.test(newObject.domain)) {
			error.field = 'domain'
			error.message = 'Please enter a valid domain. Do not include the protocol (i.e. "http:// or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).'
			return false
		}

		if (newObject.service.length === 0) {
			error.field = 'service'
			error.message = 'Please select a service'
			return false
		}

		error.field = ''
		error.message = ''
		return true
	}

	const add = () => {
		if (!validate()) return

		store.update((upstream) => {
			upstream.push({
				domain: newObject.domain,
				service: slugify(newObject.service)
			})
			return upstream
		})

		newObject = {
			domain: '',
			service: ''
		}
	}
</script>

<div class="upstream-input">
	<FormField
		name="domain"
		label="Domain"
		hint="The domain of the provider who's services you use."
		error={error.field === 'domain' ? error.message : ''}
	>
		<input type="text" name="domain" bind:value={newObject.domain} placeholder="example.com" />
    <small class="text-gray-600">
      Do not include the protocol (i.e. http:// or https://) or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).
    </small>
	</FormField>

	<FormField
		name="service"
		label="Service type"
		hint="A short name for the service provided."
		error={error.field === 'service' ? error.message : ''}
	>
		<input type="text" name="service" bind:value={newObject.service} placeholder="hosting-provider" />
	</FormField>

	<button onclick={add} class="btn mx-auto w-max min-w-[20ch] rounded-full">Add</button>
</div>

<style>
	.upstream-input {
		display: flex;
		flex-wrap: wrap;
		row-gap: 2rem;
		column-gap: 1rem;
	}

	.upstream-input :global(.form-group) {
		flex: 1 1 49%;
		margin: 0;
	}

	.upstream-input button {
		flex: 1 0 auto;
		width: 100%;
	}
</style>
