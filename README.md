# jonking93.github.io

This project implements my [personal website](https://jonking93.github.io/). The site is built using [astro](https://astro.build/) with the [astrofy theme](https://astrofy-template.netlify.app/).

## Contents

An overview of key parts of the repository.

* `.github`: Defines the Github actions job that builds and deploys the site
* `public`: Holds static assets, like images and downloadable pdfs
* `scripts`: Holds a Python script to clean up resume metadata, as well as snippets used to generate mermaid flowcharts
* `src`: Implements the site

Within `src`, key components include:

* `components`: Reusable blocks used throughout the site. The `SideBarMenu` is the most important, and is used to determine the links on the navigation sidebar.
* `content`: Holds dynamically generated project pages, written in markdown. Also holds `config.ts`, the schema for the dynamic pages. Critically, `config.ts` needs to be edited when adding new frontmatter links.
* `pages`: Holds standalone webpages, such as the index, contact, and project overview pages. Also, folders contain `[slug].astro` files, which control how dynamically generated pages are actually rendered.
