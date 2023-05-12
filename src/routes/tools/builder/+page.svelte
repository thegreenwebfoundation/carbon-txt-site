<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'

	import { builderUpstream } from '$lib/store'
	import services from '$lib/utils/upstreamServices'

	let newUpstream = {
		domain: '',
		service: ''
	}

	const addUpstream = () => {
		builderUpstream.update((upstream) => {
			upstream.push(newUpstream)
			return upstream
		})
		newUpstream = {
			domain: '',
			service: ''
		}
	}

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
				<!-- A text input with validation to check that it is a domain -->
				<input type="text" name="domain" bind:value={newUpstream.domain} />
				<!-- A select listing some online services -->
				<select name="service" bind:value={newUpstream.service}>
					{#each services as service}
						<option value={service.slug}>{service.name}</option>
					{/each}
				</select>
				<p>Can't find a service you need in the list? <a href="https://github.com/thegreenwebfoundation/carbon.txt/issues/16">Let us know</a>.</p>
				<!-- A button to add the domain to the list -->
				<button on:click={addUpstream}>Add</button>
			</div>
			<div class="mb-[3rem]">
				<Heading level={2}>Organisation</Heading>
				<p class="mb-10">List the documents that show evidence of your green claims</p>
				<p>TBD</p>
			</div>
		</div>
		<div class="p-8 max-w-100">
			<!-- TODO: Make the hightlighted and dynamic -->
			<pre lang="toml"><code>{outputCode}</code></pre>
		</div>
	</div>
</section>
