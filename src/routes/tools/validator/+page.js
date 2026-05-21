/** @type {import('./$types').PageLoad} */
export async function load({ url, data }) {
	return {
		url,
    ...data
	}
}
