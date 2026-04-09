<script>
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'

	import Grid from 'gridjs-svelte'
	import { html } from 'gridjs'
	import MultiSelect from 'svelte-multiselect'
	import 'gridjs/dist/theme/mermaid.css'

	/** @type {import('./$types').PageProps} */
	let { data } = $props()

	const filters = [
		{ label: 'Exclude invalid data', value: 'excludeErrors' },
		{ label: 'Pre-training', value: 'pretraining', group: 'Training type' },
		{ label: 'Fine-tuning', value: 'finetuning', group: 'Training type' },
		{ label: 'Has location data', value: 'hasLocationData' },
		{ label: 'Has hardware data', value: 'hasHardwareData' }
	]
	let selected = $state([])

	const slugify = (str) => str.replace(/\//g, '-')

	const columns = [
		{ id: 'name', name: 'Model name', formatter: (cell) => html(`<a href="/ai-model-cards/${slugify(cell)}">${cell}</a>`) },
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
	const columnIds = columns.map((column) => column.id)
	let excludeErrors = $derived(selected.some((filter) => filter.value === 'excludeErrors'))
	let pretraining = $derived(selected.some((filter) => filter.value === 'pretraining'))
	let fineTuning = $derived(selected.some((filter) => filter.value === 'finetuning'))
	let hasLocationData = $derived(selected.some((filter) => filter.value === 'hasLocationData'))
	let hasHardwareData = $derived(selected.some((filter) => filter.value === 'hasHardwareData'))
	const buildUrl = (prev, params) => {
		const url = new URL(prev, 'http://gridjs')

		// console.log('page', params.page);

		Object.entries(params).forEach(([key, value]) => {
			if (value == null || value === '') {
				url.searchParams.delete(key)
			} else {
				url.searchParams.set(key, String(value))
			}
		})

		return `${url.pathname}${url.search}`
	}

	let baseUrl = $derived(
		`/ai-model-cards/data?excludeErrors=${excludeErrors}&pretraining=${pretraining}&fineTuning=${fineTuning}&hasLocationData=${hasLocationData}&hasHardwareData=${hasHardwareData}`
	)

	let gridServer = $derived({
		url: baseUrl,
		then: (response) => response.data,
		total: (response) => response.total
	})

	const pagination = {
		limit: 50,
		server: {
			url: (prev, page, limit) => buildUrl(prev, { page, limit })
		}
	}

	const sort = {
		server: {
			url: (prev, columns) => {
				if (!columns.length) return prev
				const { index, direction } = columns[0]
				const sortId = columnIds[index]
				if (!sortId) return prev
				const directionValue = direction === 1 || direction === 'asc' ? 'asc' : 'desc'
				return buildUrl(prev, { sort: sortId, direction: directionValue })
			}
		}
	}

	const search = {
		server: {
			url: (prev, keyword) => buildUrl(prev, { q: keyword, page: 0 })
		}
	}
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[3rem]">
		<Heading level={1}>AI Model Sustainability Directory</Heading>
		<p class="prose mb-[3rem]">
			Using the carbon.txt syntax and validator, we have extracted the sustainability data from over 2500 AI model cards from Hugging Face that are listed with <code>co2_eq_emissions</code> metadata.
		</p>
	</div>
	<div id="results" class="w-100 mb-[3rem]">
		<div class="table-wrapper">
			<div class="filter-wrapper mb-[1rem]">
				<Heading level={3}>Results</Heading>
				<p class="prose mb-[1rem]">Data updated on {data.timestamp}</p>
				<div class="filters">
					<Heading level={4}>Filters</Heading>
					<MultiSelect bind:selected options={filters} keepSelectedInDropdown="checkboxes" />
				</div>
			</div>
			{#key baseUrl}
				<Grid {columns} server={gridServer} {pagination} {sort} {search} fixedHeader={true} height="600px" />
			{/key}
		</div>
	</div>
</section>

<!-- <section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[3rem]">
		<Heading level={2}>Findings</Heading>
		<ul class="prose">
			<li>{data.totalCount} models have <code>co2_eq_emissions</code> metadata.</li>
			<li>{data.totalErrors} of these models have missing or incorrectly formatted data.</li>
			<li>{data.trainingCount['pre-training']} models are marked as pre-training models</li>
			<li>{data.trainingCount['fine-tuning']} models are marked as fine-tuning models.</li>
			<li>{data.locationCount} models declared a training location.</li>
			<li>{data.hardwareCount} models specified the hardware used.</li>
		</ul>
	</div>
</section> -->

<style>
	.filter-wrapper {
		--sms-padding: 0.5rem;
	}

	ul {
		list-style-type: disc;
	}

	ul li,
	ol li {
		margin-left: 1.5rem;
		margin-block-start: 0.5rem;
	}

	ol ul {
		list-style-type: none;
	}

	ol ul li {
		margin: 0;
	}

	td.gridjs-td {
		text-wrap: initial;
		overflow-x: auto;
		/* max-width: fit-content; */
		/* max-inline-size: fit-content; */
		white-space: nowrap;
		padding: 0.5rem 1rem !important;
	}

	td[data-column-id='serviceCategory'] {
		text-transform: capitalize;
	}

	th.gridjs-th .gridjs-th-content {
		text-overflow: clip !important;
	}

	.table-wrapper {
		max-width: 100%;
		overflow-x: auto;
	}

	:global(tr:has([data-cell-content='error']) td:not([data-cell-content='error']):not([data-column-id='name'])) {
		display: none;
		width: 0;
	}

	.filters {
		display: grid;
		grid-template-columns: 10ch 1fr;
		align-items: center;
	}

	:global(.filters > *:first-child) {
		padding-bottom: 0;
	}
</style>
