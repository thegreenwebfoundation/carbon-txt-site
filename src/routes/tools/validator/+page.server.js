import registerFile from '$lib/utils/actions/registerFile';

/** @type {import('@sveltejs/kit').Load} */
export async function load({ fetch, session }) {
}


/** @type {import('./$types').Actions} */
export const actions = {
	registerFile,
};