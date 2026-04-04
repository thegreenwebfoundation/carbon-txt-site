import { listModels } from '@huggingface/hub'
import { writeFile } from 'node:fs/promises'

const apiLookup = async (carbontxt = '') => {
	const validatorUrl = 'https://carbon-txt-api.greenweb.org/api/validate/file/'

	const text_contents = carbontxt
	const bodyData = JSON.stringify({ text_contents })

	try {
		const req = await fetch(validatorUrl, {
			method: 'POST',
			body: bodyData
		})

		const res = await req.json()
		return res
	} catch (error) {
		return { success: false, errors: [error.message] }
	}
}

const generateCarbonTxt = async (model = '') => {
	return `version="0.5"

 [org]
 disclosures = [
   { doc_type = 'ai-model-card', url = 'https://huggingface.co/${model}/raw/main/README.md' }
 ]`
}

const getModels = async () => {
	const models = []
	for await (const model of listModels({ search: { tags: ['co2_eq_emissions'] } })) {
		const carbontxt = await generateCarbonTxt(model.name)
		const results = await apiLookup(carbontxt)
		const carbon_data = results.document_data['ai-model-card_greenweb']
		models.push({ ...model, carbon_data })
	}

	const timestamp = new Date().toISOString().slice(0, 10)
	const outputFile = `hf-tag-carbon-models.json`
	const payload = {
		timestamp,
		models
	}

	await writeFile(outputFile, JSON.stringify(payload, null, 2), 'utf8')
	console.log(`Results for ${models.length} model written to ${outputFile}`)
}

getModels()
