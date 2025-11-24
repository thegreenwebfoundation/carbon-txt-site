const carbonTxtSyntaxVersion = '0.3'
const todaysDate = new Date().toISOString().split('T')[0]

export const digitalServiceToml = `version="${carbonTxtSyntaxVersion}"
last_updated="${todaysDate}"

[org]
disclosures = [
	{ doc_type = "web-page", url = "https://mycompany.com/sustainability", domain = "mycompany.com" },
	{ doc_type = "annual-report", url = "https://mycompany.com/carbon-emissions-2022.pdf", domain = "mycompany.com" }
]

[upstream]
services = [
	{ domain = "cloud.google.com", service_type = "shared-hosting" },
	{ domain = "aws.amazon.com", service_type = "cdn" }
]`
