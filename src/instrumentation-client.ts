// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b2074cfc8952fc7c9a593bf0060e864e@o4509094579404800.ingest.us.sentry.io/4509094582026240",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});