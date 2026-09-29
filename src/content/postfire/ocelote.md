---
title: "Production Pipeline"
description: "The USGS's in-house pipeline for producing and publishing postfire debris flow hazard assessments."
gitlab: "https://code.usgs.gov/ghsc/lhp/ocelote"
docs: "https://ghsc.code-pages.usgs.gov/lhp/ocelote/user-guide/overview.html"
heroImage: "/postfire/ocelote.png"
---

I designed and wrote the pipeline that the USGS uses to produce and implement hazard assessments. The open-source [ocelote codebase](https://code.usgs.gov/ghsc/lhp/ocelote) implements this pipeline. Given a ground assessment of a recently burned area, the package acquires relevant geophysical data, and uses these assets to implement a hazard assessment in strict compliance with the [PWFDF data specification](https://ghsc.code-pages.usgs.gov/lhp/ocelote/data-spec/archive/index.html). Critically, the pipeline allows hazard assessment personnel to implement quality control measures, while ensuring that these measures are documented and schema-compliant.

The package also automates the distribution of new hazard assessments to USGS assets. These include an internal S3 bucket used to deploy the [PWFDF web map](https://apps.usgs.gov/landslides/pwfdf/), the public [data archive](https://www.sciencebase.gov/catalog/item/6818f950d4be0208bc3e0165), and other endpoints in collaboration with the National Weather Service (NWS).
