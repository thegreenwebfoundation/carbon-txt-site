import { error } from '@sveltejs/kit';

/** @type {import('../../tools/validator/$types').RequestHandler} */
export async function POST({ url, platform, request }) {
    // This function will be sent a POST request with a body that contains a valid TOML string.
    // It will then save the TOML string to KV with a unique ID and a cache TTL of 10 minutes.
    // It will then return the ID to the client.

    // Get the TOML from the body
    const toml = await request.text();
    // Generate a unique ID
    const id = crypto.randomUUID()
    // Save the TOML to KV
    await platform.env.TEST_KV.put(id, toml, { expirationTtl: 600 });

    return new Response(String(id));
}

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