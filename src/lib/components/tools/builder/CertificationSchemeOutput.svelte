<script>
	import RemoveButton from './RemoveButton.svelte';

	let { store, evidenceTypes } = $props()

	const remove = (scheme) => {
		store.update((schemes) => schemes.filter((item) => item !== scheme))
	}

</script>

{#if $store.length > 0}
	<table class="w-full border-collapse mt-8">
		<thead>
			<tr class="bg-green-600 text-white">
				<th class="p-2 text-left">URL</th>
				<th class="p-2 text-left">Title</th>
				<th class="p-2 text-left">Description</th>
				<th class="p-2 w-12"></th>
			</tr>
		</thead>
		<tbody>
			{#each $store as scheme (scheme)}
				<tr class="odd:bg-green-50 even:bg-green-100">
					<td class="p-2 break-all"><a href={scheme.url} target="_blank">{scheme.url}</a></td>
					<td class="p-2">{scheme.title || '-'}</td>
					<td class="p-2">{scheme.description || '-'}</td>
					<td class="p-2"><RemoveButton onRemove={() => remove(scheme)} /></td>
				</tr>
			{/each}
			<tr>
				<td colspan="5" class="p-2 text-center"><a href="#output">View output</a></td>
			</tr>
		</tbody>
	</table>
{/if}
