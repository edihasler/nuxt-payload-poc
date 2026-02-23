# nuxt-payload-poc

Proof-of-concept demonstrating a technique to keep server-only component data out of the nuxt-payload (NUXT_DATA).

## Problem

Nuxt does not provide a built-in fetch option or a way to mark a component as `server-only` such that its server-side data is omitted from the nuxt-payload. This can leak large data, increase payload size and be critical for SEO.

## Solution?

Key idea: mark data that should never be hydrated with a `hydrateNever` flag. Before sending the payload to the client, call the provided helper to remove full server-only data from the nuxt payload.

## Notes

- This is a proof-of-concept and assumes you control the payload shape and can mark server-only blocks with `hydrateNever`.

## Links

https://nuxt.com/docs/4.x/directory-structure/app/components#server-components
https://nuxt.com/docs/4.x/api/components/nuxt-island

https://github.com/nuxt/nuxt/issues/24175
https://github.com/nuxt/nuxt/issues/33019

https://github.com/TYPO3-Headless/nuxt-typo3/issues/353

https://github.com/vercel/next.js/issues/40143
