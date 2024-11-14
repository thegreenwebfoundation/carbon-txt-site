const fetchEvidenceTypes = async () => {
    console.log('Fetching evidence types')
    const schema = await fetch('https://carbon-txt-api.greenweb.org/api/json_schema/')
    const json = await schema.json()

    console.log(json)

    return json.$defs.Credential.properties.doctype.enum.map((type) => {
        return {
            // Make the name a human-readable string with spaces and capitalization
            name: type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            slug: type
        }
    })
}

export default fetchEvidenceTypes