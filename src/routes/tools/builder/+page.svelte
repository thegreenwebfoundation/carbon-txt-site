<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Code from '$lib/components/Code.svelte'
	import BuilderInput from '$lib/components/tools/BuilderInput.svelte'
	import BuilderOutput from '$lib/components/tools/BuilderOutput.svelte'
	import copy from 'clipboard-copy'
	import Callout from '$lib/components/Callout.svelte'

	import { builderUpstream, builderOrg } from '$lib/store'
	import services from '$lib/utils/upstreamServices'

	let copyText = 'Copy'

	const mapUpstream = () => $builderUpstream.map((provider) => `{ domain='${provider.domain}', service='${provider.service}' }`).join(',\n    ')
	const mapOrg = () => $builderOrg.map((credential) => `{ domain='${credential.domain}', doctype='${credential.doctype}', url='${credential.url}' }`).join(',\n    ')

	$: outputCode = `[upstream]
providers = [${$builderUpstream.length > 0 ? '\n\t' + mapUpstream() + '\n' : ' '}]

[org]
credentials = [${$builderOrg.length > 0 ? '\n\t' + mapOrg() + '\n' : ' '}]`
</script>

<section class="w-100" id="intro">
	<div class="relative block">
		<div class="absolute -z-50 right-0 w-1/2 -top-24 bg-no-repeat bg-right bg-[length:100%_100%] bg-gradient-to-l from-green-500 hidden md:block" style="height: calc(100% + 100px);" />
		<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 pb-[5rem] lg:grid lg:grid-cols-2 lg:items-start">
			<div class="mb-10">
				<div class="prose md:w-[80%] mb-[3rem]">
					<Heading level={1}>Builder</Heading>
					<p>Use this builder to create a carbon.txt file for your organisation.</p>
				</div>
				<div class="py-8">
					<div class="mb-[3rem]">
						<Heading level={2}>Upstream providers</Heading>
						<p class="mb-10">List the providers you use to deliver your service</p>
						<BuilderInput store={builderUpstream} />
						<p>Can't find a service you need in the list? <a href="https://github.com/thegreenwebfoundation/carbon.txt/issues/16">Let us know</a>.</p>
						<BuilderOutput store={builderUpstream} />
					</div>
					<div class="mb-[3rem]">
						<Heading level={2}>Organisation</Heading>
						<p class="mb-10">List the documents that show evidence of your green claims</p>
						<BuilderInput store={builderOrg} type="org" />
						<BuilderOutput store={builderOrg} />
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
			</div>
		</div>
	</div>
</section>

<section id="cta" class="w-100 bg-neutral-900">
	<div class="container mx-auto p-6 md:pb-[4rem] md:pt-[4rem] px-2 sm:px-4 text-white text-center flex flex-col justify-center gap-3">
		<Heading level={2}>What is carbon.txt?</Heading>
		<p>If carbon.txt you're new to carbon.txt we recommend reading about it first.</p>
		<div class="w-max mt-[2rem] mx-auto">
			<Button link="/about">What is carbon.txt?</Button>
		</div>
	</div>
</section>
