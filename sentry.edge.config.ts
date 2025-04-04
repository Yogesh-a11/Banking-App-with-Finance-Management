// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b2074cfc8952fc7c9a593bf0060e864e@o4509094579404800.ingest.us.sentry.io/4509094582026240",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
