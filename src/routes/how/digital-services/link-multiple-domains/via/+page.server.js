import domainHash from '$lib/utils/actions/domainHash';

/** @type {import('@sveltejs/kit').Load} */
export async function load({ fetch, session }) {
}


/** @type {import('./$types').Actions} */
export const actions = {
	domainHash,
};