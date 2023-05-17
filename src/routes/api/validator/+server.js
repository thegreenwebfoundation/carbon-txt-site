import { error } from '@sveltejs/kit';

/** @type {import('../../tools/validator/$types').RequestHandler} */
export async function GET({ url, platform }) {
    const toml = `[upstream]
    providers = [
        { domain='aws.amazon.com', service = 'infrastructure' },
        { domain='services.global.ntt', service = 'infrastructure' }
    ]
    [org]
    credentials = [
        { domain = 'imageengine.io', aliases = ['imgeng.in'], doctype = 'sustainability-page', url = "https://imageengine.io/imageengine-sustainability-policy/" },
        { domain = 'imageengine.io', aliases = ['imgeng.in'], doctype = 'web page', url = "https://github.com/imgeng/sustainability"},
    ]`

    await platform.env.TEST_KV.put('test.toml', toml);

    return new Response(String(toml));
}