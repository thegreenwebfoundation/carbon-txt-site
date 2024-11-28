// import { handleErrorWithSentry, replayIntegration } from '@sentry/sveltekit'
// import * as Sentry from '@sentry/sveltekit'

// Sentry.init({
// 	dsn: 'https://20e7e3765f80353955f534845b78b637@o4507248988651520.ingest.de.sentry.io/4508296616214608',

// 	tracesSampleRate: 1.0,

// 	// This sets the sample rate to be 10%. You may want this to be 100% while
// 	// in development and sample at a lower rate in production
// 	replaysSessionSampleRate: 0.1,

// 	// If the entire session is not sampled, use the below sample rate to sample
// 	// sessions when an error occurs.
// 	replaysOnErrorSampleRate: 1.0,

// 	// If you don't want to use Session Replay, just remove the line below:
// 	integrations: [replayIntegration()],

// 	environment: import.meta.env.MODE,
// })

// // If you have a custom error handler, pass it to `handleErrorWithSentry`
// export const handleError = handleErrorWithSentry()
