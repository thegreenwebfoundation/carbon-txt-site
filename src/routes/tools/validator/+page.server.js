import { load } from 'js-toml'
import * as publicEnv from "$env/static/public";

const apiBase = publicEnv["PUBLIC_API_BASE_URL"] || "https://carbon-txt-api.greenweb.org";

/** @satisfies {import('./$types').Actions} */
export const actions = {
	validate: async ({request}) => {
    const data = await request.formData();
		const text_contents = data.get('carbon-txt-validator');
    const url = data.get('url')
    let domain = data.get('domain')


    let apiRoute = `${apiBase}/api/validate/file/`
    if (url) {
      apiRoute = `${apiBase}/api/validate/url/`
    } else if (domain) {
      if (domain.toString().startsWith('https://') || domain.toString().startsWith('http://')) {
        domain = domain?.toString().replace('https://', '').replace('http://', '')
      }
      apiRoute = `${apiBase}/api/validate/domain/`
    }

    let bodyData = JSON.stringify({text_contents})

    if (url) {
      bodyData = JSON.stringify({url})
    } else if (domain) {
      bodyData = JSON.stringify({domain})
    }

    const response = await fetch(apiRoute, {
      method: 'POST',
      body: bodyData,
    })


    if (response.ok && text_contents) {
      let errorLines = []
      const json = await response.json();
      if (!json.success) {
          const lines = text_contents.split('\n')
          let parsedToml = {}
          try {
            parsedToml = await load(text_contents)
          } catch (e) {
            return {
              text_contents,
              response: {
                ...json,
              }
            }
          }

         await json.errors.map((error) => {
              const [section, property, arrayIndex, ...rest] = error.loc
              const field = rest.length > 1 ? rest[1] : rest[0]

              // Navigate through the TOML structure to find the problematic value
              try {
                const sectionObj = parsedToml[section]
                if (!sectionObj) return -1

                const propertyArray = sectionObj[property]
                if (!propertyArray || !Array.isArray(propertyArray)) return -1

                const arrayItem = propertyArray[arrayIndex]
                if (!arrayItem) return -1

                const problemValue = arrayItem[field]

                // Find the line that contains this exact value in the correct section
                let inCorrectSection = false
                for (let i = 0; i < lines.length; i++) {
                  if (errorLines.includes(i)) {
                    continue
                  }
                  const line = lines[i]

                  // Check if we're in the correct section
                  if (line.trim() === `[${section}]`) {
                    inCorrectSection = true
                    continue
                  }

                  if (line.trim().startsWith('#')) {
                    continue
                  }

                  // If we hit another section, stop looking
                  if (line.trim().startsWith('[') && inCorrectSection) {
                    break
                  }

                  if (line.trim().split('=')[0].startsWith(property)) {
                    continue
                  }

                  if (error.type === 'missing') {
                    // Check the section we are in
                    if (section === 'upstream') {
                      // Upstream providers should have a domain and service-type key.
                      const missingKey = field
                      if (missingKey === 'domain') {
                        if (!line.includes('domain')) {
                          error.line = i + 1
                          errorLines.push(i)
                          return i
                        }
                      } else {
                        if (!line.includes('service-type')) {
                          error.line = i + 1
                          errorLines.push(i)
                          return i
                        }
                      }
                    }

                    if (section === 'org') {
                      // Orgs should have a domain, url, and doc_type key.
                      const missingKey = field
                      if (missingKey === 'domain') {
                        if (!line.includes('domain')) {
                          error.line = i + 1
                          errorLines.push(i)
                          return i
                        }
                      } else if (missingKey === 'url') {
                        if (!line.includes('url')) {
                          error.line = i + 1
                          errorLines.push(i)
                          return i
                        }
                      } else {
                        if (!line.includes('doc_type')) {
                          error.line = i + 1
                          errorLines.push(i)
                          return i
                        }
                      }
                    }
                  }

                  // Only look for the value if we're in the correct section
                  if (inCorrectSection && line.includes(`${field}`) && line.includes(`${problemValue}`)) {
                    error.line = i + 1
                    errorLines.push(i)
                    return i
                  }
                }
              } catch (e) {
                return -1
              }
              return -1
            })
            .filter((line) => line > 0)
      }

      return {
          text_contents,
          response: {
            ...json,
            errorLines
          }
      };
    } else if (response.ok && url) {
      const json = await response.json();
      return {
          url,
          response: {
            ...json
          }
    }} else if (response.ok && domain) {
      const json = await response.json();
      return {
          domain,
          response: {
            ...json
          }
    }
  } else {
      console.error('Failed to fetch data from the API');
      return {
          text_contents,
          url,
          response: {
            error: response.statusText
          }
      };
    }
	}
};
