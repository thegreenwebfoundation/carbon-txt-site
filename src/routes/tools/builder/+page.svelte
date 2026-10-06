<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
	import CertificationSchemeInput from '$lib/components/tools/builder/CertificationSchemeInput.svelte'
	import CertificationSchemeOutput from '$lib/components/tools/builder/CertificationSchemeOutput.svelte'
	import DisclosureInput from '$lib/components/tools/builder/DisclosureInput.svelte'
	import DisclosureOutput from '$lib/components/tools/builder/DisclosureOutput.svelte'
	import UpstreamInput from '$lib/components/tools/builder/UpstreamInput.svelte'
	import UpstreamOutput from '$lib/components/tools/builder/UpstreamOutput.svelte'
	import copy from 'clipboard-copy'
	import ToolsNav from '$lib/components/ToolsNav.svelte'

	import { builderUpstream, builderDisclosures, builderCertificationSchemes } from '$lib/store'

	/** @type {import('./$types').PageProps} */
	let { data } = $props()

	const evidenceTypes = data?.evidenceTypes || []

	let copyText = 'Copy output'

	let escapeQuotes = (str) => {
		return str.replace(/(?<!\\)"/g, '\\"')
	}

	const mapUpstream = () => $builderUpstream.map((provider) => `{ domain="${provider.domain}", service_type="${provider.service}" }`).join(',\n    ')
	const mapDisclosures = () =>
		$builderDisclosures
			.map((credential) => {
				var content = `doc_type="${credential.doctype}", url="${escapeQuotes(credential.url)}"`

				if (credential.domain.length > 0) {
					content += `, domain="${credential.domain}"`
				}

				if (credential.validUntil.length > 0) {
					content += `, valid_until=${credential.validUntil}`
				}

				if (credential.title.length > 0) {
					content += `, title="${escapeQuotes(credential.title)}"`
				}

        if (credential.description.length > 0) {
					content += `, description="${escapeQuotes(credential.description)}"`
				}

        if (credential.certificationSchemes?.length > 0) {
					content += `, certification_schemes=[${credential.certificationSchemes.map(cs => `"${cs}"`).join(",")}]`
				}

				return `{ ${content} },`
			})
			.join('\n    ')

  const mapCertificationSchemes = () => {
    return $builderCertificationSchemes.map((scheme) => {
      var content = `id="${scheme.id}", url="${escapeQuotes(scheme.url)}"`

      if (scheme.title.length > 0) {
        content += `, title="${escapeQuotes(scheme.title)}"`
      }

      if (scheme.description.length > 0) {
        content += `, description="${escapeQuotes(scheme.description)}"`
      }

      return `{ ${content} },`
    }).join("\n  ")
  }

	const carbonTxtSyntaxVersion = '0.6'
	const todaysDate = new Date().toISOString().split('T')[0]

	let outputCode = $derived.by(
		() => {
      let certificationSchemesContent = $builderCertificationSchemes.length > 0 ? `\n    ${mapCertificationSchemes()}\n` : ' ';
      let disclosuresContent = $builderDisclosures.length > 0 ? `\n    ${mapDisclosures()}\n` : ' ';
      let upstreamsContent = $builderUpstream.length > 0 ? `\n    ${mapUpstream()}\n` : ' ';
      return `version="${carbonTxtSyntaxVersion}"
last_updated=${todaysDate}

[org]
certification_schemes = [${certificationSchemesContent}]

disclosures = [${disclosuresContent}]

[upstream]
services = [${upstreamsContent}]`
    })

	const resetBuilder = () => {
		builderUpstream.set([])
		builderDisclosures.set([])
    builderCertificationSchemes.set([])
	}

	const downloadFile = () => {
		const file = new Blob([outputCode], { type: 'text/plain' })
		const a = document.createElement('a')
		const url = URL.createObjectURL(file)
		a.href = url
		a.download = 'carbon.txt'
		document.body.appendChild(a)
		a.click()
		setTimeout(() => {
			document.body.removeChild(a)
			window.URL.revokeObjectURL(url)
		}, 0)
	}
</script>

<ToolsNav currentView="builder" />

<section class="w-100" id="intro">
	<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 pb-[5rem] lg:grid lg:grid-cols-1 lg:items-start">
		<div>
			<div class="mb-16">
				<div class="prose">
					<Heading level={1} class="mb-4">Builder</Heading>
					<p>Use this builder to create a carbon.txt file for your organisation.
						<br />The builder uses <b>the latest version (v{carbonTxtSyntaxVersion})</b> of the carbon.txt syntax.
						<a href="/syntax">Learn more</a>.
					</p>
				</div>
			</div>

			<div class="max-w-100" id="output">
        <Heading level={2} class="">Your carbon.txt file</Heading>
        <p>Use the form below to enter your data, and the code here will update automatically. When you're done you can download or copy the completed carbon.txt file.</p>
				<Code lang="toml" code={outputCode} />
				<div class="mx-auto flex justify-center items-center flex-wrap mb-16">
					<button class="btn mx-auto min-w-[20ch] block mx-auto" on:click={downloadFile}>Download file</button>
					<button
						class="btn mx-auto min-w-[20ch] block mx-auto btn-white"
						on:click={() => {
							const copySuccess = copy(outputCode)
							// Check if promise resolves to true
							if (copySuccess) {
								copyText = '🎉 Copied!'
								setTimeout(() => {
									copyText = 'Copy to clipboard'
								}, 2000)
							}
						}}>{copyText}</button
					>
					<button class="btn mx-auto min-w-[20ch] block mx-auto btn-black" on:click={resetBuilder}>Clear</button>
				</div>
				<div class="py-8">
					<div>
						<strong class="uppercase text-sm">Optional</strong>
						<Heading level={2}>Step 1: Certification schemes</Heading>
						<p class="mb-5">If you are certified by any <a href="/faq#certification-schemes" target="_blank">third party certification schemes</a>, for instance Blauer Engel, B-Corp, or TCO Certified Cloud, list them here.</p>
            <p class="mb-10">If you have no third party certifications, you can continue straight on to Step 2. </p>
						<CertificationSchemeInput store={builderCertificationSchemes} />
						<CertificationSchemeOutput store={builderCertificationSchemes} />
					</div>
					<hr />
					<div>
						<strong class="uppercase text-sm">Required</strong>
						<Heading level={2}>Step 2: Organisational disclosures</Heading>
						<p class="mb-10">List the documents that show evidence of your green claims, such as CSRD, EED, ESG and/or other sustainability reporting.</p>
						<DisclosureInput store={builderDisclosures} certificationSchemes={builderCertificationSchemes} {evidenceTypes} />
						<DisclosureOutput store={builderDisclosures} {evidenceTypes} certificationSchemes={builderCertificationSchemes} />
					</div>
					<hr />
					<div class="mb-[3rem]">
						<strong class="uppercase text-sm">Optional</strong>
						<Heading level={2}>Step 3: Upstream services</Heading>
						<p class="mb-10">List the services providers you use to deliver your service.</p>
						<UpstreamInput store={builderUpstream} />
						<UpstreamOutput store={builderUpstream} />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	hr {
		margin-block: 2rem;
	}
</style>
