import { error } from '@sveltejs/kit';

/** @type {import('../../../tools/validator/$types').RequestHandler} */
export async function POST({ url, platform, request }) {
    // This function will be sent a POST request with a body that contains a valid TOML string.
    // It will then save the TOML string to KV with a unique ID and a cache TTL of 10 minutes.
    // It will then return the ID to the client.

    // Get the TOML from the body
    const toml = await request.json();
    // Generate a unique ID
    const id = crypto.randomUUID()
    // Save the TOML to KV
    await platform.env.TEST_KV.put(id, toml, { expirationTtl: 600 });

    // Set a header to accept all CORS requests
    const headers = {
        'Access-Control-Allow-Origin': '*'
    };

    // Return the ID to the client
    return new Response(id, { headers });
}