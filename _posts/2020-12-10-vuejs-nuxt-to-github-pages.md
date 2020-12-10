---
layout: post
title: VueJS-Nuxt to Github Pages
date: 2020-12-10
tags: vuejs nuxt 'github pages' github static web
---

### VueJS/Nuxt to GitHub pages.

1. On GitHub, navigate to your site's repository and open up Settings.
2. Enable Github Pages and set it to use the /docs subdirectory -- this will make a CNAME file
3. Set up a custom (sub)domain
    - Open up DNS provider and make this record: 
    - `sub.domain.tld CNAME username.github.io`
    - Note: it can take 48 hours for this change to propagate
4. Once the DNS is set up you can enforce HTTPS in Github settings
5. Fetch/Pull the CNAME file into local repository
6. Use `npm run generate` to generate the static website
7. Copy the contents of the dist/ folder to docs/
8. Push it up!


#### Sources:
1. [custom domain github pages instructions](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)
