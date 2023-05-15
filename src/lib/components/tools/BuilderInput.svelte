<script>
	export let store
	import services from '$lib/utils/upstreamServices'

	let newUpstream = {
		domain: '',
		service: ''
	}

	const addUpstream = () => {
		store.update((upstream) => {
			upstream.push(newUpstream)
			return upstream
		})
		newUpstream = {
			domain: '',
			service: ''
		}
	}
</script>

<!-- A text input with validation to check that it is a domain -->
<input type="text" name="domain" bind:value={newUpstream.domain} />
<!-- A select listing some online services -->
<select name="service" bind:value={newUpstream.service}>
	{#each services as service}
		<option value={service.slug}>{service.name}</option>
	{/each}
</select>

<button on:click={addUpstream}>Add</button>
