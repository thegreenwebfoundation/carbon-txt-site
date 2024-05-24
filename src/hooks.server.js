import {  sequence,} from "@sveltejs/kit/hooks";
import * as Sentry from "@sentry/sveltekit";

Sentry.init({
    dsn: "https://10b7b3fe441fe715d60351db7226816d@o4507311333376000.ingest.de.sentry.io/4507311336652880",
    tracesSampleRate: 1
})

export const handleError = Sentry.handleErrorWithSentry();

export const handle = sequence(
  Sentry.sentryHandle()
);