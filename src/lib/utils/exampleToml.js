export const digitalServiceToml = `[upstream]	
# An array of providers mycompany.com is using to deliver our service
providers = [
	{ domain = "cloud.google.com", service = "shared-hosting" },
	{ domain = "aws.amazon.com", service = "cdn" }
]

[org]
# Optional.
# An array of documents that point to evidence of green claims made by mycompany.com.
credentials = [
	{ domain = "mycompany.com", doctype = "webpage", url = "https://mycompany.com/sustainability" },
	{ domain = "mycompany.com", doctype = "annual-report", url = "https://mycompany.com/carbon-emissions-2022.pdf" }
]`