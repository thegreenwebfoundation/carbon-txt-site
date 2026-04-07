<script>
	import Heading from '$lib/components/Heading.svelte'
	import Grid from 'gridjs-svelte'
	import Faq from '$lib/components/Faq.svelte'
	import 'gridjs/dist/theme/mermaid.css'
	import Code from '$lib/components/Code.svelte'
	import copy from 'clipboard-copy'
	let copyText = 'Copy output'

	/** @type {import('./$types').PageProps} */
	let { data } = $props()

	const columns = [
		{
			id: 'emissions',
			name: 'Emissions',
			sort: true,
			attributes: (cell, row, column) => {
				if (cell === 'Missing or incorrectly formatted data') {
					return {
						'data-cell-content': 'error',
						colspan: '6'
					}
				}
			}
		},
		{ id: 'emissions_unit', name: 'Unit' },
		{ id: 'training_type', name: 'Training type', sort: true },
		{ id: 'geographical_location', name: 'Location', sort: true },
		{ id: 'hardware_used', name: 'Hardware', sort: true },
		{ id: 'source', name: 'Source' }
	]

	const emissions = data?.model.carbon_data['ai-model-card_greenweb'].find((item) => item.short_code === 'emissions') ?? null
	const emissions_unit = data?.model.carbon_data['ai-model-card_greenweb'].find((item) => item.short_code === 'emissions_unit') ?? null
	const source = data?.model.carbon_data['ai-model-card_greenweb'].find((item) => item.short_code === 'source') ?? null
	const training_type = data?.model.carbon_data['ai-model-card_greenweb'].find((item) => item.short_code === 'training_type') ?? null
	const geographical_location = data?.model.carbon_data['ai-model-card_greenweb'].find((item) => item.short_code === 'geographical_location') ?? null
	const hardware_used = data?.model.carbon_data['ai-model-card_greenweb'].find((item) => item.short_code === 'hardware_used') ?? null

	const co2_eq_emissions = [
		{
			emissions: emissions?.value ?? 'Missing or incorrectly formatted data',
			emissions_unit: emissions?.unit ?? '-',
			training_type: training_type?.value ?? '-',
			geographical_location: geographical_location?.value ?? '-',
			hardware_used: hardware_used?.value ?? '-',
			source: source?.value ?? '-'
		}
	]

	const carbonTxtSyntaxVersion = '0.5'
	const todaysDate = new Date().toISOString().split('T')[0]

	const ownExample = `version="${carbonTxtSyntaxVersion}"
last_updated=${todaysDate}

[org]
disclosures = [
  { doc_type = 'ai-model-card', url = 'https://huggingface.co/${data.model.name}/raw/main/README.md', title = "${data.model.name} model card" }
]`

	const useExample = `version="${carbonTxtSyntaxVersion}"
last_updated=${todaysDate}

[upstream]
services = [
   { domain = 'www.huggingface.co', service_type = 'ai-model', model_card = 'https://huggingface.co/${data.model.name}/raw/main/README.md' },
]`

	const downloadFile = (code = '') => {
		const file = new Blob([code], { type: 'text/plain' })
		const a = document.createElement('a')
		const url = URL.createObjectURL(file)
		a.href = url
		a.download = 'carbon.txt'
		document.body.appendChild(a)
		a.click()
		setTimeout(() => {
			document.body.removeChild(a)
			window.URL.revokeObjectURL(url)
		}, 0)
	}
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[3rem]">
		<p class="prose mb-[3rem]"><a href="/ai-model-cards"> &larr; Back to model cards</a></p>
		<Heading level={1}>{data.model.name}</Heading>
		<p class="prose mb-[1rem]">This page contains sustainability information extracted from the model card for <code>{data.model.name}</code>.</p>
		<p class="prose mb-[3rem]">
			View model card on <a href="https://huggingface.co/{data.model.name}" target="_blank">Hugging Face</a> |
			<a href="https://huggingface.co/{data.model.name}/raw/main/README.md" target="_blank">Raw</a>
		</p>
		<Heading level={2}>Sustainability data</Heading>
		<Grid {columns} data={co2_eq_emissions} />
	</div>
</section>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<Heading level={2}>Reference this model in carbon.txt</Heading>
	<p class="prose mb-[1rem]">Carbon.txt provides a single, dependable endpoint to disclose the sustainability data for the AI models your organisation trains and uses.</p>
	<div class="w-100 mb-[3rem]">
		<Faq id="use" open="true">
			<span slot="question"><Heading level={3}>Use this model?</Heading></span>
			<div class="" slot="answer">
				<p class="prose mb-[1rem]">Publish this information in a carbon.txt file for your organisation using the code below.</p>
				<Code lang="toml" code={useExample} />
				<div class="mx-auto flex justify-center items-center flex-wrap">
					<button class="btn mx-auto min-w-[20ch] block" on:click={() => downloadFile(useExample)}>Download file</button>
					<button
						class="btn mx-auto min-w-[20ch] block btn-white"
						on:click={() => {
							const copySuccess = copy(useExample)
							// Check if promise resolves to true
							if (copySuccess) {
								copyText = '🎉 Copied!'
								setTimeout(() => {
									copyText = 'Copy to clipboard'
								}, 2000)
							}
						}}>{copyText}</button
					>
					<a href="/quickstart" class="btn mx-auto min-w-[20ch] bg-blue-400 text-white hover:bg-blue-200 hover:text-black text-center">carbon.txt guide</a>
				</div>
			</div></Faq
		>
		<Faq id="own">
			<span slot="question"><Heading level={3}>Own this model?</Heading></span>
			<div class="" slot="answer">
				<p class="prose mb-[1rem]">Publish this information in a carbon.txt file for your organisation using the code below.</p>
				<Code lang="toml" code={ownExample} />
				<div class="mx-auto flex justify-center items-center flex-wrap">
					<button class="btn mx-auto min-w-[20ch] block" on:click={() => downloadFile(ownExample)}>Download file</button>
					<button
						class="btn mx-auto min-w-[20ch] block btn-white"
						on:click={() => {
							const copySuccess = copy(ownExample)
							// Check if promise resolves to true
							if (copySuccess) {
								copyText = '🎉 Copied!'
								setTimeout(() => {
									copyText = 'Copy to clipboard'
								}, 2000)
							}
						}}>{copyText}</button
					>
					<a href="/quickstart" class="btn mx-auto min-w-[20ch] bg-blue-400 text-white hover:bg-blue-200 hover:text-black text-center">carbon.txt guide</a>
				</div>
			</div>
		</Faq>
	</div>
</section>

{#if co2_eq_emissions[0].emissions === 'Missing or incorrectly formatted data'}
	<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
		<Heading level={2}>FAQ</Heading>
		<div class="w-100 mb-[3rem]">
			<Faq id="why-error" open="true">
				<span slot="question"><Heading level={3}>Why am I seeing a missing or incorrectly formatted data error?</Heading></span>
				<div class="" slot="answer">
					<p class="prose mb-[1rem]">
						Our carbon.txt AI model card parser looks for structured frontmatter in a markdown file which adhere's to the specification outlined in Hugging Face's documentation for <i
							><a href="https://huggingface.co/docs/hub/model-cards-co2#carbon-footprint-metadata">"Displaying carbon emissions for your model</a></i
						>. If we are unable to find data in the <code>co2_eq_emissions.emissions</code> field, we display a "Missing or incorrectly formatted data" error for a given model. You can verify this by
						checking the <a href="https://huggingface.co/{data.model.name}/raw/main/README.md" target="_blank">raw model card</a> content.
					</p>
				</div></Faq
			>
		</div>
	</section>
{/if}
