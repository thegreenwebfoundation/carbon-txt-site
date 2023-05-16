import { error } from '@sveltejs/kit';

/** @type {import('../../tools/validator/$types').RequestHandler} */
export function GET({ url }) {
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

    return new Response(String(toml));
}