import fetchEvidenceTypes from '$lib/utils/evidenceTypes'

export const syntaxVersions = [
	{
		name: '0.1',
		current: false,
		validFrom: '2021-01-01',
		validTo: '2025-01-22',
		language: 'TOML',
		syntax: [
			{
				name: 'upstream',
				required: true,
				type: '[table]',
				longTitle: 'Upstream providers',
				description: 'Information linking your organisation to upstream providers used to deliver your services.',
				properties: [
					{
						name: 'providers',
						parent: 'upstream',
						required: true,
						type: '[[array]]',
						longTitle: 'Providers',
						description: 'Information linking your organisation to upstream providers used to deliver your services.',
						properties: [
							{
								name: 'domain',
								required: true,
								parent: 'providers',
								longTitle: 'Domain',
								description:
									'The domain of the organisation providing the upstream service. This can include any subdomains (e.g. "www."), but should not include the protocol (i.e. "http://" or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).',
								type: 'string'
							},
							{
								name: 'service',
								required: true,
								parent: 'providers',
								longTitle: 'Service',
								description: 'A slug representing the service provided by the upstream provider.',
								type: 'string'
							}
						]
					}
				],
				example: `[upstream]
providers = [
    { domain = "cloud.google.com", service = "shared-hosting" },
    { domain = "aws.amazon.com", service = "cdn" }
]`
			},
			{
				name: 'org',
				required: false,
				type: '[table]',
				longTitle: 'Organisation credentials',
				description: 'Links to documents that show your organisations sustainability credentials.',
				properties: [
					{
						name: 'credentials',
						parent: 'org',
						required: false,
						type: '[[array]]',
						longTitle: 'Credentials',
						description: 'Links to documents that show your organisations sustainability credentials.',
						properties: [
							{
								name: 'domain',
								required: false,
								parent: 'credentials',
								longTitle: 'Domain',
								description:
									'The domain of your organisation. This can include any subdomains (e.g. "www."), but should not include the protocol (i.e. "http://" or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).',
								type: 'string'
							},
							{
								name: 'doctype',
								required: false,
								parent: 'credentials',
								longTitle: 'Document type',
								description: 'A slugified string representing the type of document you are linking to.  Accepted values are: "webpage", "annual-report", "sustainability-page", "certificate", "other"',
								type: 'string'
							},
							{
								name: 'url',
								required: false,
								parent: 'credentials',
								longTitle: 'URL',
								description: 'The URL of the document you are linking to beginning with "http://" or "https://.',
								type: 'url'
							}
						]
					}
				],
				example: `[org]
credentials = [
    { domain = "mycompany.com", doctype = "webpage", url = "https://mycompany.com/sustainability" },
    { domain = "mycompany.com", doctype = "annual-report", url = "https://mycompany.com/carbon-emissions-2022.pdf" }
]`
			}
		],
		example: `[upstream]
providers = [
    { domain = "cloud.google.com", service = "shared-hosting" },
    { domain = "aws.amazon.com", service = "cdn" }
]

[org]
credentials = [
    { domain = "mycompany.com", doctype = "webpage", url = "https://mycompany.com/sustainability" },
    { domain = "mycompany.com", doctype = "annual-report", url = "https://mycompany.com/carbon-emissions-2022.pdf" }
]`
	},
	{
		name: '0.2',
		current: false,
		validFrom: '2025-01-23',
		validTo: '2025-11-24',
		language: 'TOML',
		syntax: [
      {
        name: 'version',
        longTitle: "Version",
        required: false,
        description: "carbon.txt syntax version, e.g. \"0.2\" - version 0.2 is assumed by default if omitted.",
        type: "string",
        example: `version = "0.2"`
      },
			{
				name: 'org',
				required: true,
				longTitle: 'Organisation disclosures',
				// description: 'Links to documents that show your organisations sustainability disclosures.',
				type: '[table]',
				properties: [
					{
						name: 'disclosures',
						parent: 'org',
						required: false,
						longTitle: 'disclosures',
						description: 'Links to documents that show your organisations sustainability data disclosures.',
						type: '[[array]]',
						properties: [
							{
								name: 'doc_type',
								required: true,
								parent: 'disclosures',
								longTitle: 'Document type',
								description:
									'A slugified string representing the type of document you are linking to. Accepted values are: "web-page", "annual-report", "sustainability-page", "certificate", "csrd-report", "other"',
								type: 'string'
							},
							{
								name: 'url',
								required: true,
								parent: 'disclosures',
								longTitle: 'URL',
								description: 'The URL of the document you are linking to beginning with "http://" or "https://.',
								type: 'url'
							},
							{
								name: 'domain',
								required: false,
								parent: 'disclosures',
								longTitle: 'Domain',
								description:
									'The domain for which the disclosure applies. This can include any subdomains (e.g. "www."), but should not include the protocol (i.e. "http://" or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).',
								type: 'string'
							}
						]
					}
				],
				example: `[org]
disclosures = [
	{ doc_type = "web-page", url = "https://mycompany.com/sustainability" },
	{ doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2022.pdf", domain = "mycompany.com" }
]`
			},
			{
				name: 'upstream',
				required: true,
				type: '[table]',
				longTitle: 'Upstream services',
				// description: 'Information linking your organisation to upstream providers used to deliver your services.',
				properties: [
					{
						name: 'services',
						parent: 'upstream',
						required: false,
						longTitle: 'Services',
						description: 'Information linking your organisation to upstream providers you use.',
						type: '[[array]]',
						properties: [
							{
								name: 'domain',
								required: false,
								parent: 'services',
								longTitle: 'Domain',
								description:
									'The domain of the organisation providing the upstream service. This can include any subdomains (e.g. "www."), but should not include the protocol (i.e. "http://" or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).',
								type: 'string'
							},
							{
								name: 'service_type',
								required: false,
								parent: 'services',
								longTitle: 'Service type',
								description: 'A slug representing the service provided by the upstream provider.',
								type: 'string or ["array of strings"]'
							}
						]
					}
				],
				example: `[upstream]
services = [
    { domain = "cloud.google.com", service_type = "shared-hosting" },
    { domain = "aws.amazon.com", service_type = "cdn" }
]`
			}
		],
		example: `[org]
disclosures = [
	{ doc_type = "web-page", url = "https://mycompany.com/sustainability", domain = "mycompany.com" },
	{ doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2022.pdf", domain = "mycompany.com" }
]

[upstream]
services = [
	{ domain = "cloud.google.com", service_type = "shared-hosting" },
	{ domain = "aws.amazon.com", service_type = "cdn" }
]`
	},
	{
		name: '0.3',
		current: true,
		validFrom: '2025-11-24',
		validTo: '-',
		language: 'TOML',
		syntax: [
      {
        name: 'version',
        required: true,
        description: "carbon.txt syntax version, e.g. \"0.3\", required from version 0.3 onwards.",
        longTitle: "Version",
        type: "string",
        example: `version = "0.3"`
      },
      {
        name: 'last_updated',
        required: false,
        longTitle: "Last updated",
        description: "The date this file was last updated, as a string in ISO8601 format, e.g \"2025-11-22\".",
        type: "string",
        example: `last_updated = "2025-11-22"`
      },
			{
				name: 'org',
				required: true,
				longTitle: 'Organisation disclosures',
				// description: 'Links to documents that show your organisations sustainability disclosures.',
				type: '[table]',
				properties: [
					{
						name: 'disclosures',
						parent: 'org',
						required: false,
						longTitle: 'disclosures',
						description: 'Links to documents that show your organisations sustainability data disclosures.',
						type: '[[array]]',
						properties: [
							{
								name: 'doc_type',
								required: true,
								parent: 'disclosures',
								longTitle: 'Document type',
								description:
									'A slugified string representing the type of document you are linking to. Accepted values are: "web-page", "annual-report", "sustainability-page", "certificate", "csrd-report", "other"',
								type: 'string'
							},
							{
								name: 'url',
								required: true,
								parent: 'disclosures',
								longTitle: 'URL',
								description: 'The URL of the document you are linking to beginning with "http://" or "https://.',
								type: 'url'
							},
              {
                name: 'valid_until',
                required: false,
                parent: "disclosure",
                longTitle: "Valid until",
                description: "The last date that this disclosure is valid for, if it is time-limited (for example, an annual report or renewable energy certificate), as a string in ISO8601 format, e.g \"2025-11-22\".",
                type: "date"
              },
							{
								name: 'domain',
								required: false,
								parent: 'disclosures',
								longTitle: 'Domain',
								description:
									'The domain for which the disclosure applies, if this carbon.txt is to be used across multiple domains. This can include any subdomains (e.g. "www."), but should not include the protocol (i.e. "http://" or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).',
								type: 'string'
							}
						]
					}
				],
				example: `[org]
disclosures = [
	{ doc_type = "web-page", url = "https://mycompany.com/sustainability", domain = "mycompany.com" },
	{ doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2022.pdf", valid_until = "2022-12-31" }
]`
			},
			{
				name: 'upstream',
				required: false,
				type: '[table]',
				longTitle: 'Upstream services',
				// description: 'Information linking your organisation to upstream providers used to deliver your services.',
				properties: [
					{
						name: 'services',
						parent: 'upstream',
						required: false,
						longTitle: 'Services',
						description: 'Information linking your organisation to upstream providers you use.',
						type: '[[array]]',
						properties: [
							{
								name: 'domain',
								required: false,
								parent: 'services',
								longTitle: 'Domain',
								description:
									'The domain of the organisation providing the upstream service. This can include any subdomains (e.g. "www."), but should not include the protocol (i.e. "http://" or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).',
								type: 'string'
							},
							{
								name: 'service_type',
								required: false,
								parent: 'services',
								longTitle: 'Service type',
								description: 'A slug representing the service provided by the upstream provider.',
								type: 'string or ["array of strings"]'
							}
						]
					}
				],
				example: `[upstream]
services = [
    { domain = "cloud.google.com", service_type = "shared-hosting" },
    { domain = "aws.amazon.com", service_type = "cdn" }
]`
			}
		],
		example: `[org]
disclosures = [
	{ doc_type = "web-page", url = "https://mycompany.com/sustainability", domain = "mycompany.com" },
	{ doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2022.pdf", domain = "mycompany.com" }
]

[upstream]
services = [
	{ domain = "cloud.google.com", service_type = "shared-hosting" },
	{ domain = "aws.amazon.com" }
]`
	}
]
