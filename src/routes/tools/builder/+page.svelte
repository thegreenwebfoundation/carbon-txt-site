<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Code from '$lib/components/Code.svelte'
	import BuilderInput from '$lib/components/tools/BuilderInput.svelte'
	import BuilderOutput from '$lib/components/tools/BuilderOutput.svelte'
	import copy from 'clipboard-copy'
	import Callout from '$lib/components/Callout.svelte'
	import ToolsNav from '$lib/components/ToolsNav.svelte'

	import { builderUpstream, builderOrg } from '$lib/store'
	import services from '$lib/utils/upstreamServices'

	let copyText = 'Copy'

	const mapUpstream = () => $builderUpstream.map((provider) => `{ domain='${provider.domain}', service_type='${provider.service}' }`).join(',\n    ')
	const mapOrg = () => $builderOrg.map((credential) => `{ doc_type='${credential.doctype}', url='${credential.url}', domain='${credential.domain}' }`).join(',\n    ')

	$: outputCode = `[org]
disclosures = [${$builderOrg.length > 0 ? '\n\t' + mapOrg() + '\n' : ' '}]

[upstream]
services = [${$builderUpstream.length > 0 ? '\n\t' + mapUpstream() + '\n' : ' '}]`

	const resetBuilder = () => {
		builderUpstream.set([])
		builderOrg.set([])
	}
</script>

<ToolsNav currentView="builder" />

<section class="w-100" id="intro">
	<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 pb-[5rem] lg:grid lg:grid-cols-2 lg:items-start">
		<div>
			<div class="prose md:w-[80%] mb-[3rem]">
				<Heading level={1}>Builder</Heading>
				<p>Use this builder to create a carbon.txt file for your organisation.</p>
			</div>
			<div class="py-8">
				<div>
					<Heading level={2}>Required</Heading>
					<Heading level={3}>Organisational disclosures</Heading>
					<p class="mb-10">List the documents that show evidence of your green claims, such as CSRD, EED, ESG and/or other sustainability reporting.</p>
					<BuilderInput store={builderOrg} type="org" />
					<BuilderOutput store={builderOrg} />
				</div>
				<hr />
				<div class="mb-[3rem]">
					<Heading level={2}>Optional</Heading>
					<Heading level={3}>Upstream services</Heading>
					<p class="mb-10">List the services providers you use to deliver your service.</p>
					<BuilderInput store={builderUpstream} />
					<BuilderOutput store={builderUpstream} />
				</div>
			</div>
		</div>
		<div class="max-w-100 sticky top-0">
			<Code lang="toml" code={outputCode} />
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
			<button class="btn mx-auto min-w-[20ch] block mx-auto btn-black" on:click={resetBuilder()}>Clear</button>
		</div>
	</div>
</section>

<ToolsNav currentView="builder" />

<style>
	hr {
		margin-block: 2rem;
	}
</style>
