<script>
	// Components
	import Code from '$lib/components/Code.svelte'
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'
	import What from '$lib/components/content/What.svelte'
	import Goals from '$lib/components/content/Features.svelte'
	import Why from '$lib/components/content/Why.svelte'
	import Callout from '$lib/components/Callout.svelte'
	import TGWF_Bolt from '$lib/svg/tgwf_logo_bolt.svelte'
	import Pilot from '$lib/components/Pilot.svelte'

	import { syntaxVersions } from '$lib/utils/syntax.js'

	let currentSyntax = syntaxVersions.filter((version) => version.current)[0] || syntaxVersions[0]
	let selectedSyntax = currentSyntax.name
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[1rem] pt-[2.5rem]">
		<Heading level={1}>Carbon.txt syntax</Heading>
		<div class="flex flex-auto gap-10 items-center" aria-live="polite">This page specifies the current v{currentSyntax.name} syntax for carbon.txt files.</div>

		<div class="mt-8">
			Viewing syntax for <select bind:value={selectedSyntax} class="my-2" on:change={() => (currentSyntax = syntaxVersions.filter((version) => version.name === selectedSyntax)[0])}>
				{#each syntaxVersions as version}
					<option value={version.name}>{version.name}</option>
				{/each}
			</select>
		</div>
	</div>
	{#if !currentSyntax.current}
		<div class="border-2 border-dark-gray alert__warning text-center p-4" aria-live="polite">
			<p class="text-sm sm:text-base">You are viewing content for an older version of the carbon.txt syntax.</p>
		</div>
	{/if}
</section>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4" aria-live="polite">
	<Heading level={2}>Carbon.txt v{currentSyntax.name}</Heading>
	<div class="relative overflow-x-auto mb-4">
		<table class="w-full">
			<thead>
				<tr>
					<th>Latest version</th>
					<th>Language</th>
					<th>Valid from</th>
					<th>Valid to</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{currentSyntax.current}</td>
					<td>{currentSyntax.language}</td>
					<td>{currentSyntax.validFrom}</td>
					<td>{currentSyntax.validTo}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="w-100 mb-[5rem] grid grid-cols-1 gap-10"></div>
</section>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4" aria-live="polite">
	<div class="w-100 mb-[5rem] grid grid-cols-1 gap-10">
		<Heading level={2}>Syntax</Heading>

		{#each currentSyntax.syntax as block}
			<div class="relative overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr>
							<th>Property</th>
							<th>Parent</th>
							<th>Type</th>
							<th>Required</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{block.name}</td>
							<td></td>
							<td>{block.type}</td>
							<td>{block.required}</td>
							<td class="prose text-wrap max-w-prose">{block.description}</td>
						</tr>
						{#if block.properties}
							{#each block.properties as property}
								<tr>
									<td>↳ {property.name}</td>
									<td>{property.parent}</td>
									<td>{property.type}</td>
									<td>{property.required}</td>
									<td class="prose text-wrap max-w-prose">{property.description}</td>
								</tr>
								{#if property.properties}
									{#each property.properties as subProperty}
										<tr>
											<td>&nbsp; &nbsp;↳ {subProperty.name}</td>
											<td>{subProperty.parent}</td>
											<td>{subProperty.type}</td>
											<td>{subProperty.required}</td>
											<td class="prose text-wrap max-w-prose">{subProperty.description}</td>
										</tr>
									{/each}
								{/if}
							{/each}
						{/if}
						{#if block.example}
							<tr>
								<td colspan="5">
									<Code code={block.example} />
								</td>
							</tr>
						{/if}
					</tbody>
				</table>
			</div>
		{/each}
	</div>
</section>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[5rem] grid grid-cols-1 gap-10">
		<Heading level={2}>Code sample</Heading>
		<Code code={syntaxVersions.filter((version) => version.name === currentSyntax.name)[0]?.example} />
	</div>
</section>

<style>
	select {
		display: inline-block;
		width: max-content;
	}

	table {
		border-radius: 5px;
	}

	thead > tr + tr {
		@apply bg-purple-100;
		/* @apply border-b border-purple-400; */
	}

	thead {
		font-weight: bold;
		text-align: left;
	}

	thead > tr:first-of-type {
		@apply bg-purple-800;
		@apply text-white;
	}

	th,
	td {
		@apply px-4 py-4;
		@apply border-b border-purple-400;
	}
</style>
