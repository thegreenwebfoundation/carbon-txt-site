export const digitalServiceToml = `[org]
# Optional.
# An array of documents that point to evidence of green claims made by mycompany.com.
credentials = [
	{ doctype = "webpage", url = "https://mycompany.com/sustainability", domain = "mycompany.com" },
	{ doctype = "annual-report", url = "https://mycompany.com/carbon-emissions-2022.pdf", domain = "mycompany.com" }
]
	
[upstream]	
# An array of providers mycompany.com is using to deliver our service
services = [
	{ domain = "cloud.google.com", service-type = "shared-hosting" },
	{ domain = "aws.amazon.com", service-type = "cdn" }
]`