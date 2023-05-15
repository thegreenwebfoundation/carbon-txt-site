<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
	import BuilderInput from '$lib/components/tools/BuilderInput.svelte'
	import BuilderOutput from '$lib/components/tools/BuilderOutput.svelte'

	import { builderUpstream, builderOrg } from '$lib/store'
	import services from '$lib/utils/upstreamServices'

	$: console.log(outputCode)

	$: outputCode = `[upstream]
providers = [
	${$builderUpstream.map((provider) => `{ domain='${provider.domain}', service='${provider.service}' }`).join(',\n    ')}
]

[org]
credentials = [
    # Optional.
    # An array of documents that point to evidence of green claims made by my-org.com.
    { domain='my-org.com', doctype = 'sustainability-page', url = 'https://my-org.com/our-climate-record'}
]`
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<Heading level={1}>Builder</Heading>
	<p>Use this builder to create a carbon.txt file for your organisation.</p>

	<div class="min-h-[80vh] mt-[3rem] lg:grid lg:grid-cols-2 lg:items-start">
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
				<BuilderInput store={builderOrg} />
				<p>Can't find a service you need in the list? <a href="https://github.com/thegreenwebfoundation/carbon.txt/issues/16">Let us know</a>.</p>

				<BuilderOutput store={builderOrg} />
			</div>
		</div>
		<div class="p-8 max-w-100">
			<!-- TODO: Make the hightlighted and dynamic -->
			<Code lang="toml" code={outputCode} />
		</div>
	</div>
</section>
