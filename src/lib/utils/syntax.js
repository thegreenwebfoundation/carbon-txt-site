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
						type: 'array',
						properties: [
							{
								name: 'domain',
								required: true,
								parent: 'providers',
								longTitle: 'Domain',
								description:
									'The domain of the organisation providing the upstream service. This can include any subdomains (e.g. "www."), but should not include the protocol (i.e. "http://" or "https://").',
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
						type: 'array',
						properties: [
							{
								name: 'domain',
								required: false,
								parent: 'credentials',
								longTitle: 'Domain',
								description: 'The domain of your organisation. This can include any subdomains (e.g. "www."), but should not include the protocol (i.e. "http://" or "https://").',
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
								description: 'The URL of the document you are linking to.',
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
		current: true,
		validFrom: '2025-01-23',
		validTo: '-',
		language: 'TOML',
		syntax: [
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
								description: 'The URL of the document you are linking to.',
								type: 'url'
							},
							{
								name: 'domain',
								required: false,
								parent: 'disclosures',
								longTitle: 'Domain',
								description: 'The domain for which the disclosure applies.',
								type: 'string'
							}
						]
					}
				],
				example: `[org]
disclosures = [
	{ doc_type = "web-page", url = "https://mycompany.com/sustainability", domain = "mycompany.com" },
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
								description: 'The domain of the organisation providing the upstream service.',
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
	}
]
