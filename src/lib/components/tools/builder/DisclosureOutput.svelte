<script>
	import RemoveButton from './RemoveButton.svelte';

	let { store, evidenceTypes, certificationSchemes } = $props()

	const remove = (disclosure) => {
		store.update((disclosures) => disclosures.filter((item) => item !== disclosure))
	}

	const evidenceName = (evidence) => {
		return evidenceTypes.find((item) => item.slug === evidence).name
	}

  const getCertificationSchemeTitle = (id) => {
    return $certificationSchemes.find((cs) => (cs.id == id))?.title
  }
</script>

{#if $store.length > 0}
	<table class="w-full border-collapse mt-8">
		<thead>
			<tr class="bg-white text-black border-b">
				<th class="p-2 text-left">Document type</th>
				<th class="p-2 text-left">URL</th>
				<th class="p-2 text-left">Title</th>
				<th class="p-2 text-left">Description</th>
				<th class="p-2 text-left">Valid until</th>
				<th class="p-2 text-left">Certification schemes</th>
				<th class="p-2 w-12"></th>
			</tr>
		</thead>
		<tbody>
			{#each $store as disclosure (disclosure)}
				<tr class="odd:bg-green-50 even:bg-green-100">
					<td class="p-2">{evidenceName(disclosure.doctype)}</td>
					<td class="p-2 break-all"><a href={disclosure.url} target="_blank">{disclosure.url}</a></td>
					<td class="p-2">{disclosure.title || '-'}</td>
					<td class="p-2">{disclosure.description || '-'}</td>
					<td class="p-2">{disclosure.validUntil || '-'}</td>
					<td class="p-2">{disclosure.certificationSchemes?.map(getCertificationSchemeTitle)?.join(", ") || '-'}</td>
					<td class="p-2"><RemoveButton onRemove={() => remove(disclosure)} /></td>
				</tr>
			{/each}
			<tr>
				<td colspan="7" class="p-2 text-center"><a href="#output">View output</a></td>
			</tr>
		</tbody>
	</table>
{/if}
