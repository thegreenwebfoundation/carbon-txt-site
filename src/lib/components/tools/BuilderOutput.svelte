<script>
	export let store

	const removeUpstream = (provider) => {
		store.update((upstream) => upstream.filter((item) => item !== provider))
	}
</script>

<ul>
	{#each $store as provider}
		<li>
			<span>{provider.domain}</span> - <span>{provider.service}</span> <button on:click={removeUpstream(provider)}>Remove</button>
		</li>
	{/each}
</ul>
