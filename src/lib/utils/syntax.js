const todaysDate = new Date().toISOString().split('T')[0]

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
				longTitle: 'Version',
				required: false,
				description: 'carbon.txt syntax version, e.g. "0.2" - version 0.2 is assumed by default if omitted.',
				type: 'string',
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
		current: false,
		validFrom: '2025-11-24',
		validTo: '2025-12-01',
		language: 'TOML',
		syntax: [
			{
				name: 'version',
				required: true,
				description: 'carbon.txt syntax version, e.g. "0.3", required from version 0.3 onwards.',
				longTitle: 'Version',
				type: 'string',
				example: `version = "0.3"`
			},
			{
				name: 'last_updated',
				required: false,
				longTitle: 'Last updated',
				description: `The date this file was last updated, either as a TOML native date (e.g. ${todaysDate}), or a string in RFC 3339 format (e.g. "${todaysDate}").`,
				type: 'date',
				example: `last_updated = ${todaysDate}`
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
						required: true,
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
								parent: 'disclosure',
								longTitle: 'Valid until',
								description: `The last date that this disclosure is valid for, if it is time-limited (for example, an annual report or renewable energy certificate), either as a TOML native date (e.g. ${todaysDate}), or a string in RFC 3339 format (e.g. "${todaysDate}").`,
								type: 'date'
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
	{ doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2025.pdf", valid_until = 2025-12-31 }
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
		example: `version="0.3"
last_updated=${todaysDate}

[org]
disclosures = [
    { doc_type = "web-page", url = "https://mycompany.com/sustainability", domain = "mycompany.com" },
    { doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2025.pdf", valid_until = 2025-12-31 }
]

[upstream]
services = [
	{ domain = "cloud.google.com", service_type = "shared-hosting" },
	{ domain = "aws.amazon.com" }
]`
	},
	{
		name: '0.4',
		current: false,
		validFrom: '2025-12-02',
		validTo: '-',
		language: 'TOML',
		syntax: [
			{
				name: 'version',
				required: true,
				description: 'carbon.txt syntax version, e.g. "0.4", required from version 0.3 onwards.',
				longTitle: 'Version',
				type: 'string',
				example: `version = "0.4"`
			},
			{
				name: 'last_updated',
				required: false,
				longTitle: 'Last updated',
				description: `The date this file was last updated, either as a TOML native date (e.g. ${todaysDate}), or a string in RFC 3339 format (e.g. "${todaysDate}").`,
				type: 'date',
				example: `last_updated = ${todaysDate}`
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
						required: true,
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
								parent: 'disclosure',
								longTitle: 'Valid until',
								description: `The last date that this disclosure is valid for, if it is time-limited (for example, an annual report or renewable energy certificate), either as a TOML native date (e.g. ${todaysDate}), or a string in RFC 3339 format (e.g. "${todaysDate}").`,
								type: 'date'
							},
							{
								name: 'domain',
								required: false,
								parent: 'disclosures',
								longTitle: 'Domain',
								description:
									'The domain for which the disclosure applies, if this carbon.txt is to be used across multiple domains. This can include any subdomains (e.g. "www."), but should not include the protocol (i.e. "http://" or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).',
								type: 'string'
							},
							{
								name: 'title',
								required: false,
								parent: 'disclosures',
								longTitle: 'Title',
								description: 'A meaningful title describing the disclosure.',
								type: 'string'
							}
						]
					}
				],
				example: `[org]
disclosures = [
	{ doc_type = "web-page", url = "https://mycompany.com/sustainability", domain = "mycompany.com" },
	{ doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2025.pdf", valid_until = 2025-12-31, title = "Emissions Report 2025" }
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
		example: `version="0.4"
last_updated=${todaysDate}

[org]
disclosures = [
    { doc_type = "web-page", url = "https://mycompany.com/sustainability", domain = "mycompany.com" },
    { doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2025.pdf", valid_until = 2025-12-31, title = "Emissions Report 2025" }
]

[upstream]
services = [
	{ domain = "cloud.google.com", service_type = "shared-hosting" },
	{ domain = "aws.amazon.com" }
]`
	},
	{
		name: '0.5',
		current: false,
		validFrom: '2026-03-10',
		validTo: '-',
		language: 'TOML',
		syntax: [
			{
				name: 'version',
				required: true,
				description: 'carbon.txt syntax version, e.g. "0.5", required from version 0.3 onwards.',
				longTitle: 'Version',
				type: 'string',
				example: `version = "0.5"`
			},
			{
				name: 'last_updated',
				required: false,
				longTitle: 'Last updated',
				description: `The date this file was last updated, either as a TOML native date (e.g. ${todaysDate}), or a string in RFC 3339 format (e.g. "${todaysDate}").`,
				type: 'date',
				example: `last_updated = ${todaysDate}`
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
						required: true,
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
									'A slugified string representing the type of document you are linking to. Accepted values are: "web-page", "annual-report", "sustainability-page", "certificate", "csrd-report", "ai-model-card", "other"',
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
								parent: 'disclosure',
								longTitle: 'Valid until',
								description: `The last date that this disclosure is valid for, if it is time-limited (for example, an annual report or renewable energy certificate), either as a TOML native date (e.g. ${todaysDate}), or a string in RFC 3339 format (e.g. "${todaysDate}").`,
								type: 'date'
							},
							{
								name: 'domain',
								required: false,
								parent: 'disclosures',
								longTitle: 'Domain',
								description:
									'The domain for which the disclosure applies, if this carbon.txt is to be used across multiple domains. This can include any subdomains (e.g. "www."), but should not include the protocol (i.e. "http://" or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).',
								type: 'string'
							},
							{
								name: 'title',
								required: false,
								parent: 'disclosures',
								longTitle: 'Title',
								description: 'A meaningful title describing the disclosure.',
								type: 'string'
							}
						]
					}
				],
				example: `[org]
disclosures = [
	{ doc_type = "web-page", url = "https://mycompany.com/sustainability", domain = "mycompany.com" },
	{ doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2025.pdf", valid_until = 2025-12-31, title = "Emissions Report 2025" },
	{ doc_type = "ai-model-card", url = "https://huggingface.co/mycompany/my-ai-model/raw/main/README.md", title = "AI model card for model used on this site" }
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
		example: `version="0.4"
last_updated=${todaysDate}

[org]
disclosures = [
    { doc_type = "web-page", url = "https://mycompany.com/sustainability", domain = "mycompany.com" },
    { doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2025.pdf", valid_until = 2025-12-31, title = "Emissions Report 2025" },
	{ doc_type = "ai-model-card", url = "https://huggingface.co/mycompany/my-ai-model/raw/main/README.md", title = "AI model card for model used on this site" }
]

[upstream]
services = [
	{ domain = "cloud.google.com", service_type = "shared-hosting" },
	{ domain = "aws.amazon.com" }
]`
	},
	{
		name: '0.6',
		current: true,
		validFrom: '2026-09-28',
		validTo: '-',
		language: 'TOML',
		syntax: [
			{
				name: 'version',
				required: true,
				description: 'carbon.txt syntax version, e.g. "0.6", required from version 0.3 onwards.',
				longTitle: 'Version',
				type: 'string',
				example: `version = "0.6"`
			},
			{
				name: 'last_updated',
				required: false,
				longTitle: 'Last updated',
				description: `The date this file was last updated, either as a TOML native date (e.g. ${todaysDate}), or a string in RFC 3339 format (e.g. "${todaysDate}").`,
				type: 'date',
				example: `last_updated = ${todaysDate}`
			},
			{
				name: 'org',
				required: true,
				longTitle: 'Organisation disclosures',
				// description: 'Links to documents that show your organisations sustainability disclosures.',
				type: '[table]',
				properties: [
					{
						name: 'certification_schemes',
						parent: 'org',
						required: false,
						longTitle: 'Certification schemes',
						description: 'Links to certification schemes (such as voluntary standards or ecolabels) which your organization adheres to',
						type: '[[array]]',
						properties: [
							{
								name: 'id',
								required: true,
								parent: 'certification_schemes',
								longTitle: 'Id',
								description:
									'A unique ID, used to refer to this certification scheme elsewhere in this carbon.txt. This can be anything you like, as long as it is made up of alphanumeric characters (0-9, a-z, A-Z), hyphens (-) and underscores (_), and it is not already used in this file to refer to another certficiation scheme.',
								type: 'string'
							},
							{
								name: 'url',
								required: true,
								parent: 'certification_schemes',
								longTitle: 'URL',
								description: 'The URL of the document you are linking to beginning with "http://" or "https://.',
								type: 'url'
							},
							{
								name: 'title',
								required: false,
								parent: 'certification_schemes',
								longTitle: 'Title',
								description: 'A meaningful title describing the certification scheme. - for instance "B-corporation", "Blauer Engel", or "SCI for Web"',
								type: 'string'
							},
							{
								name: 'description',
								required: false,
								parent: 'certification_schemes',
								longTitle: 'Desciption',
								description: 'Any additional information which might be useful to understanding this certification - a brief description of the commitments it represents, or the guarantees it makes.',
								type: 'string'
							}
						]
					},
				],
				example: `[org]

certification_schemes = [
	{ id = "blauer-engel",
    url = "https://www.blauer-engel.de/en/productworld/software",
    title = "Blauer Engel Resource and Energy-Efficient Software Products",
    description = "The aim of the environmental label for resource and energy-efficient software products is to reduce the total energy consumed by information and communication technology and improve resource efficiency."
  },
]`
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
						required: true,
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
									'A slugified string representing the type of document you are linking to. Accepted values are: "web-page", "annual-report", "sustainability-page", "certificate", "csrd-report", "ai-model-card", "measurement-data", "other"',
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
								name: 'title',
								required: false,
								parent: 'disclosures',
								longTitle: 'Title',
								description: 'A meaningful title describing the disclosure - for instance "Corporate sustainability report 2026", or "Renewable Energy Certificates covering our energy usage in Q3 2026.".',
								type: 'string'
							},
							{
								name: 'description',
								required: false,
								parent: 'disclosures',
								longTitle: 'Desciption',
								description: 'A brief summary of the disclosure, or any additional information needed to understand it.',
								type: 'string'
							},
							{
								name: 'valid_until',
								required: false,
								parent: 'disclosures',
								longTitle: 'Valid until',
								description: `The last date that this disclosure is valid for, if it is time-limited (for example, an annual report or renewable energy certificate), either as a TOML native date (e.g. ${todaysDate}), or a string in RFC 3339 format (e.g. "${todaysDate}").`,
								type: 'date'
							},
							{
								name: 'domain',
								required: false,
								parent: 'disclosures',
								longTitle: 'Domain',
								description:
									'The domain for which the disclosure applies, if this carbon.txt is to be used across multiple domains. This can include any subdomains (e.g. "www."), but should not include the protocol (i.e. "http://" or "https://") or any content paths (e.g "/news/", "/about", "news-update-2025" etc.).',
								type: 'string'
							},
							{
								name: 'certification_schemes',
								required: false,
								parent: 'disclosures',
								longTitle: 'Certification schemes',
								description:
									'Any certification schemes to which this disclosure relates, Refers to one or more entries in the certification_schemes block of the carbon.txt file, by their ID.',
								type: '[string]'
							}
						]
					}
				],
				example: `[org]

disclosures = [
	{ doc_type = "web-page", url = "https://mycompany.com/sustainability", domain = "mycompany.com", certification_schemes=["blauer-engel"], description="This company's sustainability policy." },
	{ doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2025.pdf", valid_until = 2025-12-31, title = "Emissions Report 2025" },
	{ doc_type = "measurement-data", url = "https://mycompany.com/dist.json", title = "Quarterly emissions figures", descriptions = "Estimated carbon impact data for this company's digital operations, in DIST format" }
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
		example: `version="0.6"
last_updated=${todaysDate}

[org]
certification_schemes = [
	{ id = "blauer-engel",
    url = "https://www.blauer-engel.de/en/productworld/software",
    title = "Blauer Engel Resource and Energy-Efficient Software Products",
    description = "The aim of the environmental label for resource and energy-efficient software products is to reduce the total energy consumed by information and communication technology and improve resource efficiency."
  },
]

disclosures = [
	{ doc_type = "web-page", url = "https://mycompany.com/sustainability", domain = "mycompany.com", certification_schemes=["blauer-engel"], description="This company's sustainability policy." },
	{ doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2025.pdf", valid_until = 2025-12-31, title = "Emissions Report 2025" },
	{ doc_type = "measurement-data", url = "https://mycompany.com/dist.json", title = "Quarterly emissions figures", descriptions = "Estimated carbon impact data for this company's digital operations, in DIST format" }
]

[upstream]
services = [
	{ domain = "cloud.google.com", service_type = "shared-hosting" },
	{ domain = "aws.amazon.com" }
]`
	}
]
