<script>
	export let store
	export let type = 'upstream'
	import services from '$lib/utils/upstreamServices'
	import fetchEvidenceTypes from '$lib/utils/evidenceTypes'
	import { onMount } from 'svelte'

	let evidenceTypes = []
	onMount(async () => {
		evidenceTypes = await fetchEvidenceTypes()
	})

	let newObject = {
		domain: '',
		service: ''
	}

	if (type === 'org') {
		newObject = {
			domain: '',
			doctype: '',
			url: ''
		}
	}

	const error = {
		field: '',
		message: ''
	}

	const validateUpstreamInput = () => {
		if (newObject.domain.length === 0) {
			error.field = 'upstream-domain'
			error.message = 'Please enter a domain'
			return
		}

		// Check the domain is valid
		const domainRegex = new RegExp(/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/)
		if (!domainRegex.test(newObject.domain)) {
			error.field = 'upstream-domain'
			error.message = 'Please enter a valid domain'
			return
		}

		if (newObject.service.length === 0) {
			error.field = 'upstream-service'
			error.message = 'Please select a service'
			return
		}

		error.field = ''
		error.message = ''
		return
	}

	const validateOrgInput = () => {
		if (newObject.domain.length === 0) {
			error.field = 'org-domain'
			error.message = 'Please enter a domain'
			return
		}

		// Check the domain is valid
		const domainRegex = new RegExp(/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/)
		if (!domainRegex.test(newObject.domain)) {
			error.field = 'org-domain'
			error.message = 'Please enter a valid domain'
			return
		}

		if (newObject.doctype.length === 0) {
			error.field = 'org-doctype'
			error.message = 'Please select a document type'
			return
		}

		if (newObject.url.length === 0) {
			error.field = 'org-url'
			error.message = 'Please enter a URL'
			return
		}

		// Check the URL is valid using a regex that must start with http:// or https://
		const urlRegex = new RegExp(/^(http:\/\/|https:\/\/)(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)

		if (!urlRegex.test(newObject.url)) {
			error.field = 'org-url'
			error.message = 'Please enter a valid URL'
			return
		}

		error.field = ''
		error.message = ''
		return
	}

	const add = () => {
		if (type === 'org') {
			validateOrgInput()
			if (error.field.length > 0) {
				return
			}
			store.update((org) => {
				org.push(newObject)
				return org
			})
			newObject = {
				domain: '',
				doctype: '',
				url: ''
			}
			return
		}

		validateUpstreamInput()
		if (error.field.length > 0) {
			return
		}

		store.update((upstream) => {
			upstream.push(newObject)
			return upstream
		})
		newObject = {
			domain: '',
			service: ''
		}
	}
</script>

{#if type === 'upstream'}
	<!-- A text input with validation to check that it is a domain -->
	<!-- A label for the domain & services inputs -->
	<div class="upstream-input">
		<div class="form-group">
			<label for="domain">Domain</label>
			<input type="text" name="domain" bind:value={newObject.domain} placeholder="example.com" />
			{#if error.field === 'upstream-domain'}
				<div class="p-2 border rounded alert__error mt-1"><small>{error.message}</small></div>
			{/if}
		</div>
		<!-- A select listing some online services -->
		<div class="form-group">
			<label for="service">Service</label>
			<select name="service" bind:value={newObject.service}>
				{#each services as service}
					<option value={service.slug}>{service.name}</option>
				{/each}
			</select>
			{#if error.field === 'upstream-service'}
				<div class="p-2 border rounded alert__error mt-1"><small>{error.message}</small></div>
			{/if}
		</div>
		<button on:click={add} class="btn mx-auto w-max min-w-[20ch] rounded-full">Add</button>
	</div>
{:else if type === 'org'}
	<div class="org-input">
		<!-- A text input with validation to check that it is a domain -->
		<!-- A select listing some online services -->
		<div class="form-group">
			<label for="doctype">Document type</label>
			<select name="doctype" bind:value={newObject.doctype}>
				{#each evidenceTypes as doctype}
					<option value={doctype.slug}>{doctype.name}</option>
				{/each}
			</select>
			{#if error.field === 'org-doctype'}
				<div class="p-2 border rounded alert__error mt-1"><small>{error.message}</small></div>
			{/if}
		</div>
		<!-- A text input with validation to check that it is a URL -->
		<div class="form-group">
			<label for="url">URL</label>
			<input type="text" name="url" bind:value={newObject.url} placeholder="https://example.com/our-sustainability-page" />
			{#if error.field === 'org-url'}
				<div class="p-2 border rounded alert__error mt-1"><small>{error.message}</small></div>
			{/if}
		</div>
		<div class="form-group">
			<label for="domain">Domain</label>
			<input type="text" name="domain" bind:value={newObject.domain} placeholder="example.com" />
			{#if error.field === 'org-domain'}
				<div class="p-2 border rounded alert__error mt-1"><small>{error.message}</small></div>
			{/if}
		</div>
		<button on:click={add} class="btn mx-auto w-max min-w-[20ch] rounded-full">Add</button>
	</div>
{/if}

<style>
	.form-group {
		display: flex;
		flex-direction: column;
	}

	.upstream-input,
	.org-input {
		display: flex;
		flex-wrap: wrap;
		row-gap: 0.5rem;
	}

	.upstream-input .form-group,
	.org-input .form-group {
		flex: 1 0 auto;
		margin-right: 1rem;
	}

	.org-input > .form-group:has(input[name='url']) {
		flex: 1 0 auto;
	}

	.upstream-input button {
		flex: 1 0 auto;
		width: 100%;
	}

	.org-input button {
		flex: 1 0 auto;
		width: 100%;
	}
</style>
