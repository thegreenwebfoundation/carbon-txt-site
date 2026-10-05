<script>
  import { get } from 'svelte/store';
	import FormField from './FormField.svelte';
  import { urlRegex, idRegex } from '$lib/utils/constants';

	let { store } = $props()

	let newObject = $state({
      "id": "",
      "url": "",
      "title": "",
      "description": ""
	})

	let error = $state({
		field: '',
		message: ''
	})

  let certificationSchemesEnabled = $state(false);

	const validate = () => {
		if (newObject.id.length === 0) {
			error.field = 'id'
			error.message = 'Please give this certification scheme a unique ID'
			return false
		}

    if (!idRegex.test(newObject.id)) {
			error.field = 'id'
			error.message = 'Please only use letters, numbers, hyphens and underscores in your ID'
			return false
		}

    const isDuplicate = get(store).some((scheme) => scheme.id === newObject.id)
    if (isDuplicate) {
      error.field = 'id'
      error.message = 'This ID is already in use. Please choose a unique ID.'
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

    error.field = ''
		error.message = ''
		return true
	}

	const add = () => {
		if (!validate()) return

		store.update((schemes) => {
			schemes.push(newObject)
			return schemes
		})

		newObject = {
      "id": "",
      "url": "",
      "title": "",
      "description": ""
		}
	}
</script>

<div class="certification-scheme-input">
    <FormField
      name="certificationSchemesEnabled"
      label="Do you have third party certifications you’d like to include in your carbon.txt file?"
      hint="E.g.: ecolabels, or membership of organizations like B-corp"
      wide
    >
      <select name="certificationSchemesEnabled" bind:value={certificationSchemesEnabled}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
      </select>
    </FormField>
  {#if certificationSchemesEnabled }
    <FormField
      name="url"
      label="URL"
      hint="The publicly accessible URL for the certifying organization."
      error={error.field === 'url' ? error.message : ''}
    >
      <input type="text" name="url" bind:value={newObject.url} placeholder="https://example.com/" />
    </FormField>

    <FormField
      name="id"
      label="ID"
      hint="A short, unique identifier (without spaces) for this certification scheme, so we can refer to it elsewhere in the file, <br />e.g. :'blauer-engel' or 'b-corp'."
      error={error.field === 'id' ? error.message : ''}
    >
      <input type="text" name="id" bind:value={newObject.id} placeholder="a-certification-scheme" />
    </FormField>

    <FormField
      name="title"
      label="Title (Optional)"
      hint="A meaningful title describing the certification scheme."
      wide
    >
      <input type="text" name="title" bind:value={newObject.title} placeholder="" />
    </FormField>

    <FormField
      name="description"
      label="Description (Optional)"
      hint="Optionally, a brief summary of what this certification scheme means in practice: what particular carbon reduction measures you are committed to, and how they are verified."
      wide
    >
      <input type="text" name="description" bind:value={newObject.description} placeholder="" />
    </FormField>
    <button onclick={add} class="btn mx-auto w-max min-w-[20ch] rounded-full">Add</button>
  {/if}
</div>

<style>
	.certification-scheme-input {
		display: flex;
		flex-wrap: wrap;
		row-gap: 2rem;
		column-gap: 1rem;
	}

	.certification-scheme-input :global(.form-group) {
		flex: 1 1 49%;
    justify-content: space-between;
		margin: 0;
	}

  .certification-scheme-input :global(.form-group.wide) {
		flex: 1 0 auto;
  }

	.certification-scheme-input button {
		flex: 1 0 auto;
		width: 100%;
	}
</style>
