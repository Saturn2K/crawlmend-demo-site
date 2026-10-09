# crawlmend-demo-site

A small, fictional Next.js site ("Example Studio") used to demonstrate [Crawlmend](https://crawlmend.com): an AI SEO agent that crawls a site and opens reviewable GitHub pull requests for the fixes.

**This is a demo, not a real business.** The site is deliberately imperfect so there is something real to fix:

- `/services/web-design` has a title that is too short.
- `/contact` has a title that is far too long and a meta description that is too short.

Every page inherits a site-wide description from `app/layout.tsx`.

The pull requests in this repository were opened by Crawlmend. See the example walkthrough at <https://crawlmend.com/examples>.

## Run it

```bash
npm install
npm run dev
```
