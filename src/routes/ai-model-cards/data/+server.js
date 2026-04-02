import hfModels from '$lib/utils/hf-tag-carbon-models.json' with { type: 'json' }

const MAX_LIMIT = 100
const DEFAULT_LIMIT = 50

const buildDataset = () => {
	return hfModels.models.map((model) => {
		const data = model?.carbon_data['ai-model-card_greenweb']
		const name = model.name
		const emissions = data?.find((item) => item.short_code === 'emissions') ?? null
		const source = data?.find((item) => item.short_code === 'source') ?? null
		const training_type = data?.find((item) => item.short_code === 'training_type') ?? null
		const geographical_location = data?.find((item) => item.short_code === 'geographical_location') ?? null
		const hardware_used = data?.find((item) => item.short_code === 'hardware_used') ?? null

		return {
			name: name ?? null,
			emissions: emissions?.value ?? null,
			emissions_unit: emissions?.unit ?? null,
			training_type: training_type?.value ?? null,
			geographical_location: geographical_location?.value ?? null,
			hardware_used: hardware_used?.value ?? null,
			source: source?.value ?? null
		}
	})
}

const SORT_FIELDS = new Set(['emissions', 'training_type', 'geographical_location', 'hardware_used'])

const compareValues = (a, b, direction) => {
	if (a == null && b == null) return 0
	if (a == null) return 1
	if (b == null) return -1

	if (typeof a === 'string' && typeof b === 'string') {
		return direction === 'desc' ? b.localeCompare(a) : a.localeCompare(b)
	}

	return direction === 'desc' ? b - a : a - b
}

/** @type {import('./$types').RequestHandler} */
export function GET({ url, setHeaders }) {
	const page = Math.max(parseInt(url.searchParams.get('page') || '0', 10), 0)
	// console.log('page', page);
	const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit') || `${DEFAULT_LIMIT}`, 10), 1), MAX_LIMIT)

	const sort = url.searchParams.get('sort')
	const direction = url.searchParams.get('direction') === 'desc' ? 'desc' : 'asc'
	const q = (url.searchParams.get('q') || '').trim().toLowerCase()
	const excludeErrors = url.searchParams.get('excludeErrors') === 'true'
	const pretraining = url.searchParams.get('pretraining') === 'true'
	const fineTuning = url.searchParams.get('fineTuning') === 'true'
	const hasLocationData = url.searchParams.get('hasLocationData') === 'true'
	const hasHardwareData = url.searchParams.get('hasHardwareData') === 'true'

	let data = buildDataset()

	if (q) {
		data = data.filter((row) => row.name.toLowerCase().includes(q))
	}

	if (excludeErrors) {
		data = data.filter((row) => !(!row.emissions || (!row.emissions && !row.training_type && !row.geographical_location && !row.hardware_used && !row.source)))
	}

	if (pretraining) {
		data = data.filter((row) => row.training_type === 'pre-training')
	}

	if (fineTuning) {
		data = data.filter((row) => row.training_type === 'fine-tuning')
	}

	if (hasLocationData) {
		data = data.filter((row) => typeof row.geographical_location === 'string')
	}

	if (hasHardwareData) {
		data = data.filter((row) => typeof row.hardware_used === 'string')
	}

	if (sort && SORT_FIELDS.has(sort)) {
		data.sort((a, b) => compareValues(a[sort], b[sort], direction))
	}

	const total = data.length
	const start = page * limit
	const end = start + limit
	const pageData = data.slice(start, end).map((row) => {
		if (!row.emissions || (!row.emissions && !row.training_type && !row.geographical_location && !row.hardware_used && !row.source)) {
			return {
				name: row.name,
				emissions: 'Missing or incorrectly formatted data',
				emissions_unit: null,
				training_type: null,
				geographical_location: null,
				hardware_used: null,
				source: null
			}
		}

		return {
			name: row.name,
			emissions: row.emissions ?? '-',
			emissions_unit: row.emissions_unit ?? '-',
			training_type: row.training_type ?? '-',
			geographical_location: row.geographical_location ?? '-',
			hardware_used: row.hardware_used ?? '-',
			source: row.source ?? '-'
		}
	})

	setHeaders({
		'cache-control': 'public, max-age=300, s-maxage=3600'
	})

	return new Response(
		JSON.stringify({
			data: pageData,
			total,
			page,
			limit
		}),
		{
			headers: {
				'content-type': 'application/json'
			}
		}
	)
}
