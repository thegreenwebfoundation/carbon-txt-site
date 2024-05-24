<script>
	import '../app.postcss'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'

	import * as Sentry from '@sentry/browser'

	Sentry.init({
		dsn: 'https://10b7b3fe441fe715d60351db7226816d@o4507311333376000.ingest.de.sentry.io/4507311336652880',

		// Alternatively, use `process.env.npm_package_version` for a dynamic release version
		// if your build tool supports it.
		release: 'carbontxt@2.3.12',
		integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],

		// Set tracesSampleRate to 1.0 to capture 100%
		// of transactions for performance monitoring.
		// We recommend adjusting this value in production
		tracesSampleRate: 1.0,

		// Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
		// tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],

		// Capture Replay for 10% of all sessions,
		// plus for 100% of sessions with an error
		replaysSessionSampleRate: 0.1,
		replaysOnErrorSampleRate: 1.0
	})
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
