<script>
	import { load } from 'js-toml'
	import Code from '$lib/components/Code.svelte'

	let { text_contents, errors } = $props()

	let showLines = true
	const getErrorLines = () => {
		const lines = text_contents.split('\n')
		let parsedToml = {}
		try {
			parsedToml = load(text_contents)
		} catch (e) {
			return []
		}

		return errors
			.map((error) => {
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
						const line = lines[i]

						// TODO: This doesn't work yet!
						// if (error.type === 'too_short') {
						// 	console.log('too short!!')
						// 	if (error.loc.filter((l) => l !== undefined).length === 2) {
						// 		if (line.includes(property)) {
						// 			return i
						// 		}
						// 	}
						// } else if (error.type === 'missing' && error.loc.length === 1) {
						// 	if (line.includes(section)) {
						// 		return i
						// 	}
						// }

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
								// Upstream providers should have a domain and service key.
								const missingKey = field
								if (missingKey === 'domain') {
									if (!line.includes('domain')) {
										error.line = i + 1
										return i
									}
								} else {
									if (!line.includes('service')) {
										error.line = i + 1
										return i
									}
								}
							}

							if (section === 'org') {
								// Orgs should have a domain, url, and doctype key.
								const missingKey = field
								if (missingKey === 'domain') {
									if (!line.includes('domain')) {
										error.line = i + 1
										return i
									}
								} else if (missingKey === 'url') {
									if (!line.includes('url')) {
										error.line = i + 1
										return i
									}
								} else {
									if (!line.includes('doctype')) {
										error.line = i + 1
										return i
									}
								}
							}
						}

						// Only look for the value if we're in the correct section
						if (inCorrectSection && line.includes(`${field}`) && line.includes(`${problemValue}`)) {
							error.line = i + 1
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
	/* Find the lines that have errors by searching through the text contents

	*/
	const highlightedLines = getErrorLines()
</script>

<section class="w-100" id="result">
	<div class="prose md:w-[80%] mb-4">
		<h1 class="text-3xl font-bold mb-4">Syntax Error!</h1>
		<p>Your carbon.txt file has {errors?.length > 1 ? 'syntax errors' : 'a syntax error'}.</p>
	</div>

	{#if errors.length > 0}
		<table class="table-auto w-full mb-6">
			<thead>
				<tr>
					<th>Error Type</th>
					<th>Location</th>
					<th>Error Message</th>
				</tr>
			</thead>
			<tbody>
				{#each errors as error}
					<tr>
						<td>{error.type}</td>
						{#if error.line}
							<!-- content here -->
							<td>(Line: {error.line}) {error.loc.join(' > ')}</td>
						{:else}
							<!-- else content here -->
							<td>{error.loc.join(' > ')}</td>
						{/if}
						<td>{error.msg}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
	<Code lang="toml" code={text_contents} {showLines} {highlightedLines} />
</section>

<style>
	table {
		border-radius: 5px;
	}

	thead {
		@apply bg-purple-100;
		/* @apply border-b border-purple-400; */
	}

	th,
	td {
		@apply px-4 py-4;
		@apply border-b border-purple-400;
	}
</style>
