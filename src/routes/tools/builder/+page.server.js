import fetchEvidenceTypes from '$lib/utils/evidenceTypes'
import * as privateEnv from '$env/static/private'
const apiKey = privateEnv['GWF_API_KEY']

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, setHeaders }) {
	const evidenceTypes = await fetchEvidenceTypes(fetch, apiKey)
	// Cache for 24 hours
	setHeaders({
		'cache-control': 'public, max-age=86400'
	})

	return {
		evidenceTypes
	}
}
