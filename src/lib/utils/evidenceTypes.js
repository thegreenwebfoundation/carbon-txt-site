import * as publicEnv from '$env/static/public'

const apiBase = publicEnv['PUBLIC_API_BASE_URL'] || 'https://carbon-txt-api.greenweb.org'

const fetchEvidenceTypes = async (fetch, apiKey) => {
	const schema = await fetch(`${apiBase}/api/json_schema/`, {
		headers: {
			'X-Api-Key': apiKey
		}
	})
	const json = await schema.json()

	return json.$defs.Disclosure.properties.doc_type.enum.map((type) => {
		let name = type.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
		if (name.startsWith('Csrd')) {
			name = name.replace('Csrd', 'CSRD')
		}
		if (name.startsWith('Ai')) {
			name = name.replace('Ai', 'AI')
		}
		return {
			// Make the name a human-readable string with spaces and capitalization
			name: name,
			slug: type
		}
	})
}

export default fetchEvidenceTypes
