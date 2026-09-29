---
title: Hazard Modeling Toolkit
description: "Open-source software tools to analyze, model, and map postfire debris flow hazards."
gitlab: "https://code.usgs.gov/ghsc/lhp/pfdf"
docs: "https://ghsc.code-pages.usgs.gov/lhp/pfdf/"
heroImage: "/postfire/pfdf-cropped.png"
---

I'm the author of [pfdf](https://ghsc.code-pages.usgs.gov/lhp/pfdf/) and [wildcat](https://ghsc.code-pages.usgs.gov/lhp/wildcat/) - these open-source, scientific software packages are the numerical engines underpinning the [PWFDF Collection](pwfdf).

* [wildcat](https://ghsc.code-pages.usgs.gov/lhp/wildcat/) (**Practitioner CLI**): A command-line toolkit built for practitioners who need to rapidly assess and communicate debris-flow hazards to stakeholders.

* [pfdf](https://ghsc.code-pages.usgs.gov/lhp/pfdf/) (**Core Numerical Library**): A numerical Python library for postfire debris-flow hazard analysis. Features high-performance routines to analyze watersheds, delineate and characterize stream segment networks, apply hazard models (likelihood, sediment volume, rainfall thresholds), download common datasets, and export results to common GIS formats.

Both packages are optimized for speed and memory use. Critically, pfdf and wildcat are geographically agnostic, allowing users to leverage the datasets and assessment styles most appropriate for their areas of interest. Outside of the USGS, the packages have been used to implement several recent studies, including a [statewide prefire assessment for California](https://doi.org/10.1071/WF24225) by the California Geological Survey.

