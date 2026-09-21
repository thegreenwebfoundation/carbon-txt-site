<script>
	import RemoveButton from './RemoveButton.svelte';

	let { store } = $props()

	const remove = (provider) => {
		store.update((upstream) => upstream.filter((item) => item !== provider))
	}
</script>

{#if $store.length > 0}
	<table class="w-full border-collapse">
		<thead>
			<tr class="bg-green-600 text-white">
				<th class="p-2 text-left">Domain</th>
				<th class="p-2 text-left">Service type</th>
				<th class="p-2 w-12"></th>
			</tr>
		</thead>
		<tbody>
			{#each $store as provider (provider)}
				<tr class="odd:bg-green-50 even:bg-green-100">
					<td class="p-2">{provider.domain}</td>
					<td class="p-2">{provider.service}</td>
					<td class="p-2"><RemoveButton onRemove={() => remove(provider)} /></td>
				</tr>
			{/each}
			<tr>
				<td colspan="3" class="p-2 text-center"><a href="#output">View output</a></td>
			</tr>
		</tbody>
	</table>
{/if}
