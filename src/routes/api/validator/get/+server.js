import { error } from '@sveltejs/kit';

export async function GET({ url, platform }) {
    // This function will be sent a GET request with a query string that is a unique ID.
    // It will then fetch the TOML string from KV and return it to the client.

    const id = url.searchParams.get('id');

    if (!id) {
        return error(400, 'Missing ID');
    }

    const toml = await platform.env.TEST_KV.get(id);

    if (!toml) {
        return error(404, 'Not found');
    }

    return new Response(String(toml));
}