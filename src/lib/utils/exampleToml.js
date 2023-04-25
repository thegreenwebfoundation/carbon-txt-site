export const digitalServiceToml = `[upstream]	
# An array of providers mycompany.com is using to deliver our service
providers = [
	{ domain = "cloud.google.com", service = "infrastructure" },
	{ domain = "aws.amazon.com", service = "infrastructure" }
]

[org]
# Optional.
# An array of documents that point to evidence of green claims made by mycompany.com.
credentials = [
	{ domain = "mycompany.com", doctype = "sustainability-page", url = "https://mycompany.com/sustainability" },
	{ domain = "mycompany.com", doctype = "sustainability-report", url = "https://mycompany.com/carbon-emissions-2022.pdf" }
]`

export const websiteToml = `[upstream]	
providers = [
	{ domain = "cloudflare.com", service = "hosting" },
    { domain = "usefathom.com", service = "analytics" },
    { domain = "cloudinary.com", service = "media" }
]

[org]
credentials = [
	{ domain = "mywebsite.com", doctype = "webpage", url = "https://mywebsite.com/climate/"}
]`