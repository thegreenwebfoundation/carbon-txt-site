const fetchEvidenceTypes = async () => {
    const schema = await fetch('https://carbon-txt-api.greenweb.org/api/json_schema/')
    const json = await schema.json()

    return json.$defs.Disclosure.properties.doc_type.enum.map((type) => {
        let name = type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        if (name.startsWith('Csrd')) {
            name = name.replace('Csrd', 'CSRD')
        }
        return {
            // Make the name a human-readable string with spaces and capitalization
            name: name,
            slug: type
        }
    })
}

export default fetchEvidenceTypes