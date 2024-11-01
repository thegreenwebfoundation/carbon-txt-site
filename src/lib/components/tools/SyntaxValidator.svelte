<script>
	import upstreamServices from '$lib/utils/upstreamServices.js'
	import evidenceTypes from '$lib/utils/evidenceTypes.js'

	// NOTE: All of this code is moving to our backend API, so will be removed later.
	// const serviceSlugs = upstreamServices.map((service) => service.slug)
	// const evidenceSlugs = evidenceTypes.map((evidence) => evidence.slug)

	// import { load } from 'js-toml'

	// let tomlError = ''
	// let tomlSuccess = false
	// let showMessage = false
	let textInput = ''

	// async function parseToml(toml) {
	// 	// Check that there is an upstream section
	// 	if (!toml.upstream) {
	// 		return {
	// 			status: 'error',
	// 			message: 'No upstream section found'
	// 		}
	// 	}

	// 	// Check that upstream.providers exists
	// 	if (!toml.upstream.providers) {
	// 		return {
	// 			status: 'error',
	// 			message: 'No upstream providers found'
	// 		}
	// 	}

	// 	// Check that upstream.providers is an array
	// 	if (!Array.isArray(toml.upstream.providers)) {
	// 		return {
	// 			status: 'error',
	// 			message: 'Upstream providers is not an array'
	// 		}
	// 	}

	// 	// Check that each provider has both a domain and a service
	// 	for (let provider of toml.upstream.providers) {
	// 		if (!provider.domain) {
	// 			return {
	// 				status: 'error',
	// 				message: 'One of the upstream providers is missing a domain'
	// 			}
	// 		}
	// 		if (!provider.service) {
	// 			return {
	// 				status: 'error',
	// 				message: 'One of the upstream providers is missing a service'
	// 			}
	// 		}

	// 		// Check that the service is a valid service
	// 		if (!serviceSlugs.includes(provider.service)) {
	// 			return {
	// 				status: 'error',
	// 				message: 'One of the upstream providers has an invalid service'
	// 			}
	// 		}
	// 	}

	// 	// Check if there is an org section
	// 	// Since the org is optional, we won't return an error if it is missing.
	// 	if (toml.org) {
	// 		// Check that org.credentials exists
	// 		if (!toml.org.credentials) {
	// 			return {
	// 				status: 'error',
	// 				message: 'No org credentials found'
	// 			}
	// 		}

	// 		// Check that org.credentials is an array
	// 		if (!Array.isArray(toml.org.credentials)) {
	// 			return {
	// 				status: 'error',
	// 				message: 'Org credentials is not an array'
	// 			}
	// 		}

	// 		// Check that each credential has a domain, doctype and url
	// 		for (let credential of toml.org.credentials) {
	// 			if (!credential.domain) {
	// 				return {
	// 					status: 'error',
	// 					message: 'One of the org credentials is missing a domain'
	// 				}
	// 			}
	// 			if (!credential.doctype) {
	// 				return {
	// 					status: 'error',
	// 					message: 'One of the org credentials is missing a doctype'
	// 				}
	// 			}

	// 			// Check that the doctype is a valid doctype
	// 			if (!evidenceSlugs.includes(credential.doctype)) {
	// 				return {
	// 					status: 'error',
	// 					message: 'One of the org credentials has an invalid doctype'
	// 				}
	// 			}

	// 			if (!credential.url) {
	// 				return {
	// 					status: 'error',
	// 					message: 'One of the org credentials is missing a url'
	// 				}
	// 			}
	// 		}
	// 	}

	// 	// Check that upstream.providers only has keys of domain & service
	// 	for (let provider of toml.upstream.providers) {
	// 		for (let key of Object.keys(provider)) {
	// 			if (key !== 'domain' && key !== 'service') {
	// 				return {
	// 					status: 'error',
	// 					message: 'One of the upstream providers has an invalid key'
	// 				}
	// 			}
	// 		}
	// 	}

	// 	// Check that org.credentials only has keys of domain, doctype & url

	// 	return
	// }

	// async function validateToml() {
	// 	tomlError = ''
	// 	showMessage = false
	// 	try {
	// 		let parsed = load(textInput)
	// 		const parsedToml = await parseToml(parsed)
	// 		tomlError = parsedToml?.message ? parsedToml.message : ''

	// 		if (!parsedToml?.message) {
	// 			tomlSuccess = true
	// 		}
	// 	} catch (error) {
	// 		console.log(error)
	// 		tomlError = error.message
	// 	}
	// }

	// function dismissMessage() {
	// 	showMessage = !showMessage
	// }
</script>

<div class="validator-holder relative">
	<textarea name="carbon-txt" bind:value={textInput} rows="15" />
	<button type="submit" class="btn btn-white w-[100%]">Submit</button>
</div>
