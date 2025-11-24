<script>
	import fetchEvidenceTypes from '$lib/utils/evidenceTypes'
	import { evidenceTypes } from '$lib/store'
	import { onMount } from 'svelte'

	onMount(async () => {
		if ($evidenceTypes.length === 0) {
			$evidenceTypes = await fetchEvidenceTypes()
		}
	})

	let { store } = $props()

	console.log($store)

	const removeUpstream = (provider) => {
		store.update((upstream) => upstream.filter((item) => item !== provider))
	}

	const evidenceName = (evidence) => {
		return $evidenceTypes.find((item) => item.slug === evidence).name
	}
</script>

<div class="mt-[1rem] overflow-x-auto">
	<table class="w-full border-collapse">
		{#if $store.length > 0}
			{#if Object.keys($store[0]).length === 2}
				<thead>
					<tr class="bg-green-600 text-white">
						<th class="p-2 text-left">Domain</th>
						<th class="p-2 text-left">Service type</th>
						<th class="p-2 w-12"></th>
					</tr>
				</thead>
				<tbody>
					{#each $store as provider}
						<tr class="odd:bg-green-50 even:bg-green-100">
							<td class="p-2">{provider.domain}</td>
							<td class="p-2">{provider.service}</td>
							<td class="p-2">
								<button on:click={() => removeUpstream(provider)} aria-label="Remove"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										class="stroke-red-700"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M18 6l-12 12" />
										<path d="M6 6l12 12" />
									</svg></button
								>
							</td>
						</tr>
					{/each}
					{#if $store.length > 0}
						<tr>
							<td colspan="3" class="p-2 text-center"><a href="#output">View output</a></td>
						</tr>
					{/if}
				</tbody>
			{:else}
				<thead>
					<tr class="bg-green-600 text-white">
						<th class="p-2 text-left">Document type</th>
						<th class="p-2 text-left">URL</th>
						<th class="p-2 text-left">Valid until</th>
						<th class="p-2 w-12"></th>
					</tr>
				</thead>
				<tbody>
					{#each $store as provider}
						<tr class="odd:bg-green-50 even:bg-green-100">
							<td class="p-2">{evidenceName(provider.doctype)}</td>
							<td class="p-2">{provider.url}</td>
							<td class="p-2">{provider.validUntil || '-'}</td>
							<td class="p-2">
								<button on:click={() => removeUpstream(provider)} aria-label="Remove"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										class="stroke-red-700"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M18 6l-12 12" />
										<path d="M6 6l12 12" />
									</svg></button
								>
							</td>
						</tr>
					{/each}
					{#if $store.length > 0}
						<tr>
							<td colspan="3" class="p-2 text-center"><a href="#output">View output</a></td>
						</tr>
					{/if}
				</tbody>
			{/if}
		{/if}
	</table>
</div>

<style>
	td {
		overflow-x: auto;
		white-space: nowrap;
	}
</style>
