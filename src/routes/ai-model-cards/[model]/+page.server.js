import hfModels from '$lib/utils/hf-tag-carbon-models.json' with { type: 'json' }

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const slugify = (str) => str.replace(/\//g, '-')
	return {
		model: hfModels.models.find((model) => slugify(model.name) === params.model)
	}
}
