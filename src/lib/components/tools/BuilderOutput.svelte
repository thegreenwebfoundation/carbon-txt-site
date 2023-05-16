<script>
	import upstreamServices from '$lib/utils/upstreamServices'
	import evidenceTypes from '$lib/utils/evidenceTypes'

	export let store

	const removeUpstream = (provider) => {
		store.update((upstream) => upstream.filter((item) => item !== provider))
	}

	const serviceName = (service) => {
		return upstreamServices.find((item) => item.slug === service).name
	}

	const evidenceName = (evidence) => {
		return evidenceTypes.find((item) => item.slug === evidence).name
	}
</script>

<ul class="mt-[1rem] divide-y">
	{#each $store as provider, index}
		<!-- Check how many keys the provider has -->
		{#if Object.keys(provider).length === 2}
			{#if index === 0}
				<li class="grid grid-cols-3 gap-2 items-center p-2 bg-green-600 text-white">
					<span class="domain">Domain</span>
					<span class="service">Service</span>
				</li>
			{/if}
			<li class="grid grid-cols-3 gap-2 items-center p-2 odd:bg-green-100 even:bg-gray-100">
				<div class="domain">{provider.domain}</div>
				<div class="service">{serviceName(provider.service)}</div>
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
			</li>
		{:else if Object.keys(provider).length === 3}
			<li class="grid grid-cols-4 gap-2 items-center p-2 odd:bg-green-100 even:bg-gray-100">
				<div class="domain"><span>{provider.domain}</span></div>
				<div class="doctype"><span>{evidenceName(provider.doctype)}</span></div>
				<div class="url"><span>{provider.url}</span></div>
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
			</li>
		{/if}
	{/each}
</ul>

<style>
	li.grid.grid-cols-3 {
		grid-template-columns: 1fr 1fr auto;
	}

	li.grid.grid-cols-4 {
		grid-template-columns: 1fr 1fr 1fr auto;
	}

	.url,
	.domain,
	.service {
		overflow-x: auto;
		width: 100%;
	}

	.url span,
	.domain span,
	.service span {
		width: max-content;
		display: block;
	}
</style>
