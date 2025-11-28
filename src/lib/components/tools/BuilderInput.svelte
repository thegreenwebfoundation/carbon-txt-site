<script>
	export let store
	export let type = 'upstream'
	import fetchEvidenceTypes from '$lib/utils/evidenceTypes'
	import { onMount } from 'svelte'
	import slugify from '@sindresorhus/slugify'

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
			doctype: '',
			url: '',
			domain: '',
			validUntil: '',
			title: ''
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
			error.message = 'Please enter a valid domain. Do not include the protocol (i.e. "http:// or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).'
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
		const urlRegex = new RegExp(/^(http:\/\/|https:\/\/)(www\.)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)

		if (!urlRegex.test(newObject.url)) {
			error.field = 'org-url'
			error.message = 'Please enter a valid URL beginning with "http://" or "https://'
			return
		}

		// Check the domain is valid if present
		const domainRegex = new RegExp(/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/)
		if (newObject.domain.length > 0 && !domainRegex.test(newObject.domain)) {
			error.field = 'org-domain'
			error.message = 'Please enter a valid domain. Do not include the protocol (i.e. "http://" or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).'
			return
		}

		// Check the valid until is valid if present
		const dateRegex = new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
		if (newObject.validUntil.length > 0 && (!dateRegex.test(newObject.validUntil) || isNaN(Date.parse(newObject.validUntil)))) {
			error.field = 'org-valid-until'
			error.message = 'Please enter a valid date, in the format YYYY-MM-DD'
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
				doctype: '',
				url: '',
				domain: '',
				validUntil: '',
				title: ''
			}
			return
		}

		validateUpstreamInput()
		if (error.field.length > 0) {
			return
		}

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

{#if type === 'upstream'}
	<!-- A text input with validation to check that it is a domain -->
	<!-- A label for the domain & services inputs -->
	<div class="upstream-input">
		<div class="form-group">
			<span>
				<label for="domain">Domain</label>
				<small>The domain of the provider who's services you use.</small>
			</span>
			<input type="text" name="domain" bind:value={newObject.domain} placeholder="example.com" />
			{#if error.field === 'upstream-domain'}
				<div class="p-2 border rounded alert__error mt-1"><small>{error.message}</small></div>
			{/if}
			<small class="text-gray-600"> Do not include the protocol (i.e. http:// or https://) or any content paths (e.g "/news/", "/about", "news-update-2025" etc.). </small>
		</div>
		<!-- A select listing some online services -->
		<div class="form-group">
			<span>
				<label for="service">Service type</label>
				<small>A short name for the service provided.</small>
			</span>
			<input type="text" name="service" bind:value={newObject.service} placeholder="hosting-provider" />
			<!-- <select name="service" bind:value={newObject.service}>
				{#each services as service}
					<option value={service.slug}>{service.name}</option>
				{/each}
			</select> -->
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
			<span>
				<label for="doctype">Document type</label>
				<small>The type of document that is being linked to.</small>
			</span>
			<select name="doctype" bind:value={newObject.doctype}>
				{#each evidenceTypes as doctype (doctype.slug)}
					<option value={doctype.slug}>{doctype.name}</option>
				{/each}
			</select>
			{#if error.field === 'org-doctype'}
				<div class="p-2 border rounded alert__error mt-1"><small>{error.message}</small></div>
			{/if}
		</div>
		<div class="form-group">
			<span>
				<label for="valid_until">Valid until (Optional)</label>
				<small>The last date that this disclosure is valid for, if it is time-limited.</small>
			</span>
			<input type="date" name="valid_until" bind:value={newObject.validUntil} />
			{#if error.field === 'org-valid-until'}
				<div class="p-2 border rounded alert__error mt-1"><small>{error.message}</small></div>
			{/if}
		</div>
		<!-- A text input with validation to check that it is a URL -->
		<div class="form-group">
			<span>
				<label for="url">URL</label>
				<small>The publicly accessible URL for the document.</small>
			</span>
			<input type="text" name="url" bind:value={newObject.url} placeholder="https://example.com/our-sustainability-page" />
			{#if error.field === 'org-url'}
				<div class="p-2 border rounded alert__error mt-1"><small>{error.message}</small></div>
			{/if}
		</div>
		<div class="form-group">
			<span>
				<label for="disclosure_title">Title</label>
				<small>A meaningful title describing the disclosure.</small>
			</span>
			<input type="text" name="disclosure_title" bind:value={newObject.title} placeholder="" />
		</div>
		<button on:click={add} class="btn mx-auto w-max min-w-[20ch] rounded-full">Add</button>
	</div>
{/if}

<style>
	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.form-group small {
		display: block;
	}

	.upstream-input,
	.org-input {
		display: flex;
		flex-wrap: wrap;
		row-gap: 2rem;
		column-gap: 1rem;
	}

	.upstream-input .form-group,
	.org-input .form-group {
		flex: 1 1 auto;
		margin: 0;
	}

	.org-input .form-group {
		width: 49%;
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
