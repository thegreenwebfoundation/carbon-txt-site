import { sentryVitePlugin } from "@sentry/vite-plugin";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit(), sentryVitePlugin({
        org: "fershad-digital",
        project: "carbontxt"
    }), sentryVitePlugin({
        org: "fershad-digital",
        project: "carbontxt"
    })],

    build: {
        sourcemap: true
    }
});