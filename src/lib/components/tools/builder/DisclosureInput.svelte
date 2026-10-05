<script>
	import FormField from './FormField.svelte';
	import MultiSelect from 'svelte-multiselect';
  import {urlRegex, domainRegex, dateRegex} from "$lib/utils/constants";


	let { evidenceTypes, store, certificationSchemes } = $props()

	let newObject = $state({
		doctype: '',
		url: '',
		domain: '',
		validUntil: '',
		title: '',
		description: '',
		certificationSchemes: []
	})

	let error = $state({
		field: '',
		message: ''
	})

	let certificationSchemesOptions = $derived.by(() => {
    return $certificationSchemes.map((s) => ({ "label": s.id, "value": s.id }))
  });

  let hasCertificationSchemes = $derived.by(() => {
    return $certificationSchemes.length > 0
  });

	const validate = () => {
		if (newObject.doctype.length === 0) {
			error.field = 'doctype'
			error.message = 'Please select a document type'
			return false
		}

		if (newObject.url.length === 0) {
			error.field = 'url'
			error.message = 'Please enter a URL'
			return false
		}

		if (!urlRegex.test(newObject.url)) {
			error.field = 'url'
			error.message = 'Please enter a valid URL beginning with "http://" or "https://"'
			return false
		}

		if (newObject.domain.length > 0 && !domainRegex.test(newObject.domain)) {
			error.field = 'domain'
			error.message = 'Please enter a valid domain. Do not include the protocol (i.e. "http://" or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).'
			return false
		}

		if (newObject.validUntil.length > 0 && (!dateRegex.test(newObject.validUntil) || isNaN(Date.parse(newObject.validUntil)))) {
			error.field = 'validUntil'
			error.message = 'Please enter a valid date, in the format YYYY-MM-DD'
			return false
		}

		error.field = ''
		error.message = ''
		return true
	}

	const reset = () => {
		newObject = {
			doctype: '',
			url: '',
			domain: '',
			validUntil: '',
			title: '',
			description: '',
			certificationSchemes: []
		}
	}

	const add = () => {
		if (!validate()) return

		store.update((disclosure) => {
			disclosure.push({
				...newObject,
				certificationSchemes: newObject.certificationSchemes.map((s) => s.value)
			})
			return disclosure
		})

		reset()
	}
</script>

<div class="disclosure-input">

	<FormField
		name="url"
		label="URL"
		hint="The publicly accessible URL for the document."
		error={error.field === 'url' ? error.message : ''}
    wide={!hasCertificationSchemes}
	>
		<input type="text" name="url" bind:value={newObject.url} placeholder="https://example.com/our-sustainability-page" />
	</FormField>

  <FormField
		name="doctype"
		label="Document type"
		hint="The type of document that is being linked to - <a href='http://localhost:5173/faq#document-types' target=_'blank'>see our FAQ</a> for a more detailed explanation of each option."
		error={error.field === 'doctype' ? error.message : ''}
	>
		<select name="doctype" bind:value={newObject.doctype}>
			{#each evidenceTypes as doctype (doctype.slug)}
				<option value={doctype.slug}>{doctype.name}</option>
			{/each}
		</select>
	</FormField>

	<FormField
		name="valid_until"
		label="Valid until (Optional)"
		hint="The last date that this disclosure is valid for, if it is time-limited."
		error={error.field === 'validUntil' ? error.message : ''}
	>
		<input type="date" name="valid_until" bind:value={newObject.validUntil} />
	</FormField>

  {#if hasCertificationSchemes}
    <FormField
      name="certification_schemes"
      label="Certification schemes (Optional)"
      hint="If you have listed any certification schemes, indicate here which schemes this disclosure relates to (if any)."
    >
      <MultiSelect
        name="certification_schemes"
        bind:selected={newObject.certificationSchemes}
        options={certificationSchemesOptions}
        keepSelectedInDropdown="checkboxes"
        outerDivClass="w-full bg-green-50 border-0 border-b-2 border-black line-height-[1.5] rounded-none px-[0.75rem] py-[0.25rem] min-h-[2.6rem]"
        inputClass="bg-transparent"
        ulOptionsClass="border-black rounded-none border-0 border-b-2 bg-green-50"
        liSelectedClass="text-sm py-[0.30rem]"
        allowEmpty={true}
      />
    </FormField>
  {/if}

	<FormField
		name="disclosure_title"
		label="Title (Optional)"
		hint="A meaningful title describing the disclosure."
		wide
	>
		<input type="text" name="disclosure_title" bind:value={newObject.title} placeholder="" />
	</FormField>

	<FormField
		name="disclosure_description"
		label="Description (Optional)"
		hint="Optionally, a brief description or summary of the disclosure - the key claims it makes about your organisation's sustainability policy or climate impact."
		wide
	>
		<input type="text" name="disclosure_description" bind:value={newObject.description} placeholder="" />
	</FormField>

	<button onclick={add} class="btn mx-auto w-max min-w-[20ch] rounded-full">Add</button>
</div>

<style>
	.disclosure-input {
		display: flex;
		flex-wrap: wrap;
		row-gap: 2rem;
		column-gap: 1rem;
	}

	.disclosure-input :global(.form-group) {
		flex: 1 1 49%;
    justify-content: space-between;
		margin: 0;
	}

	.disclosure-input :global(.form-group.wide) {
		width: 100%;
	}

	.disclosure-input button {
		flex: 1 0 auto;
		width: 100%;
	}
</style>
