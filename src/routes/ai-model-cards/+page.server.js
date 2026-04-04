import hfModels from '$lib/utils/hf-tag-carbon-models.json' with { type: 'json' }

const groupByTrainingType = (models) => {
	const result = {}
	for (const model of models) {
		const training_type = model?.carbon_data['ai-model-card_greenweb']?.find((item) => item.short_code === 'training_type') ?? null
		if (training_type) {
			const type = training_type.value
			if (!result[type]) {
				result[type] = []
			}
			result[type].push(model)
		}
	}
	return result
}

const sumLocation = (models) => {
	let count = 0
	for (const model of models) {
		const geographical_location = model?.carbon_data['ai-model-card_greenweb']?.find((item) => item.short_code === 'geographical_location') ?? null
		if (geographical_location) {
			count++
		}
	}
	return count
}

const sumHardwareUsed = (models) => {
	let count = 0
	for (const model of models) {
		const data = model?.carbon_data['ai-model-card_greenweb']
		const hardware_used = data?.find((item) => item.short_code === 'hardware_used') ?? null
		if (hardware_used) {
			count++
		}
	}
	return count
}

const sumErrors = () => {
	let errors = 0
	for (const model of hfModels.models) {
		const data = model?.carbon_data['ai-model-card_greenweb']
		const emissions = data?.find((item) => item.short_code === 'emissions') ?? null
		const source = data?.find((item) => item.short_code === 'source') ?? null
		const training_type = data?.find((item) => item.short_code === 'training_type') ?? null
		const geographical_location = data?.find((item) => item.short_code === 'geographical_location') ?? null
		const hardware_used = data?.find((item) => item.short_code === 'hardware_used') ?? null

		if (!emissions || (!emissions && !source && !training_type && !geographical_location && !hardware_used)) {
			errors++
		}
	}
	return errors
}

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		timestamp: hfModels.timestamp,
		totalCount: hfModels.models.length,
		totalErrors: sumErrors(),
		trainingCount: {
			'pre-training': groupByTrainingType(hfModels.models)['pre-training'].length ?? 0,
			'fine-tuning': groupByTrainingType(hfModels.models)['fine-tuning'].length ?? 0
		},
		locationCount: sumLocation(hfModels.models),
		hardwareCount: sumHardwareUsed(hfModels.models)
	}
}
