import { properties } from "svelte-highlight/languages";

export const syntaxVersions = [
    {
        name: '0.1',
        current: false,
        validFrom: '2021-01-01',
        validTo: '2025-01-22',
        syntax: [
            {
                name: 'upstream',
                required: true,
                longTitle: 'Upstream providers',
                description: 'Information linking your organisation to upstream providers used to deliver your services.',
                properties: [
                    {
                        name: 'providers',
                        parent: 'upstream',
                        required: true,
                        longTitle: 'Providers',
                        description: 'Information linking your organisation to upstream providers used to deliver your services.',
                        type: 'array',
                        properties: [
                            {
                                name: 'domain',
                                required: true,
                                parent: 'providers',
                                longTitle: 'Domain',
                                description: 'The domain of the organisation providing the upstream service.',
                                type: 'string',
                            },
                            {
                                name: 'service',
                                required: true,
                                parent: 'providers',
                                longTitle: 'Service',
                                description: 'A slug representing the service provided by the upstream provider.',
                                type: 'string',
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
                    longTitle: 'Organisation credentials',
                    description: 'Links to documents that show your organisations sustainability credentials.',
                    properties: [
                        {
                            name: 'credentials',
                            parent: 'org',
                            required: false,
                            longTitle: 'Credentials',
                            description: 'Links to documents that show your organisations sustainability credentials.',
                            type: 'array',
                            properties: [
                                {
                                    name: 'domain',
                                    required: false,
                                    parent: 'credentials',
                                    longTitle: 'Domain',
                                    description: 'The domain of your organisation.',
                                    type: 'string',
                                },
                                {
                                    name: 'doctype',
                                    required: false,
                                    parent: 'credentials',
                                    longTitle: 'Document type',
                                    description: 'A slugified string representing the type of document you are linking to.',
                                    type: 'string',
                                },
                                {
                                    name: 'url',
                                    required: false,
                                    parent: 'credentials',
                                    longTitle: 'URL',
                                    description: 'The URL of the document you are linking to.',
                                    type: 'url',
                                }
                            ]
                        }
                    ],
                    example: `[org]
credentials = [
    { domain = "mycompany.com", doctype = "webpage", url = "https://mycompany.com/sustainability" },
    { domain = "mycompany.com", doctype = "annual-report", url = "https://mycompany.com/carbon-emissions-2022.pdf" }
]`,
                },
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
    // {
    //     name: '0.2',
    //     current: true,
    // }
]