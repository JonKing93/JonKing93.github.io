# jonking93.github.io

This project implements my [personal website](https://jonking93.github.io/). The site is built using [astro](https://astro.build/) with the [astrofy theme](https://astrofy-template.netlify.app/).

Some key parts of the project include:

* `.github`: Defines the Github Actions job that builds and deploys the site
* `public`: Holds static assets, like the favicon, my profile picture, and a downloadable resume.
* `scripts`: Holds a Python script to help resume tabs look nicer in a web browser
* `src`: Holds most of the site's content
  * `components`: Defines certain repeating elements (like the sidebar and page footer)
  * `content`: Holds the pages that discuss my various projects
  * `pages`: Holds the landing page, project collection, and resume
