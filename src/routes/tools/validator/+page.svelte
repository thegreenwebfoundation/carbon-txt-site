<script>
	// NOTE: There is currently no way to test this validator locally as it relies on Cloudflare Workers KV.

	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
	import TWGF_Tree from '$lib/svg/tgwf_logo_tree.svelte'
	import TGWF_Question from '$lib/svg/tgwf_logo_question.svelte'
	import upstreamServices from '$lib/utils/upstreamServices.js'
	import evidenceTypes from '$lib/utils/evidenceTypes.js'
	import Button from '$lib/components/Button.svelte'
	import Callout from '$lib/components/Callout.svelte'

	const serviceSlugs = upstreamServices.map((service) => service.slug)
	const evidenceSlugs = evidenceTypes.map((evidence) => evidence.slug)

	import { load } from 'js-toml'

	let tomlError = ''
	let tomlSuccess = false
	let showMessage = false

	// This code is for later, when we actually parse toml files & return the data
	async function storeToml() {
		const toml = textInput

		const headers = {
			'Content-Type': 'application/text'
		}

		const response = await fetch('/api/validator/post', {
			method: 'POST',
			headers,
			body: toml
		})

		if (response.ok) {
			const data = await response.text()
			console.log(data)

			let url = 'https://carbon-txt-site.pages.dev/api/validator/get?id=' + data
			checkedUrl = url

			const form = document.getElementById('validateFile')
			// form.submit()
		} else {
			console.log('Error')
		}
	}

	async function parseToml(toml) {
		// Check that there is an upstream section
		if (!toml.upstream) {
			return {
				status: 'error',
				message: 'No upstream section found'
			}
		}

		// Check that upstream.providers exists
		if (!toml.upstream.providers) {
			return {
				status: 'error',
				message: 'No upstream providers found'
			}
		}

		// Check that upstream.providers is an array
		if (!Array.isArray(toml.upstream.providers)) {
			return {
				status: 'error',
				message: 'Upstream providers is not an array'
			}
		}

		// Check that each provider has both a domain and a service
		for (let provider of toml.upstream.providers) {
			if (!provider.domain) {
				return {
					status: 'error',
					message: 'One of the upstream providers is missing a domain'
				}
			}
			if (!provider.service) {
				return {
					status: 'error',
					message: 'One of the upstream providers is missing a service'
				}
			}

			// Check that the service is a valid service
			if (!serviceSlugs.includes(provider.service)) {
				return {
					status: 'error',
					message: 'One of the upstream providers has an invalid service'
				}
			}
		}

		// Check if there is an org section
		// Since the org is optional, we won't return an error if it is missing.
		if (toml.org) {
			// Check that org.credentials exists
			if (!toml.org.credentials) {
				return {
					status: 'error',
					message: 'No org credentials found'
				}
			}

			// Check that org.credentials is an array
			if (!Array.isArray(toml.org.credentials)) {
				return {
					status: 'error',
					message: 'Org credentials is not an array'
				}
			}

			// Check that each credential has a domain, doctype and url
			for (let credential of toml.org.credentials) {
				if (!credential.domain) {
					return {
						status: 'error',
						message: 'One of the org credentials is missing a domain'
					}
				}
				if (!credential.doctype) {
					return {
						status: 'error',
						message: 'One of the org credentials is missing a doctype'
					}
				}

				// Check that the doctype is a valid doctype
				if (!evidenceSlugs.includes(credential.doctype)) {
					return {
						status: 'error',
						message: 'One of the org credentials has an invalid doctype'
					}
				}

				if (!credential.url) {
					return {
						status: 'error',
						message: 'One of the org credentials is missing a url'
					}
				}
			}
		}

		// Check that upstream.providers only has keys of domain & service
		for (let provider of toml.upstream.providers) {
			for (let key of Object.keys(provider)) {
				if (key !== 'domain' && key !== 'service') {
					return {
						status: 'error',
						message: 'One of the upstream providers has an invalid key'
					}
				}
			}
		}

		// Check that org.credentials only has keys of domain, doctype & url

		return
	}

	async function validateToml() {
		tomlError = ''
		showMessage = false
		try {
			let parsed = load(textInput)
			const parsedToml = await parseToml(parsed)
			tomlError = parsedToml?.message ? parsedToml.message : ''

			if (!parsedToml?.message) {
				tomlSuccess = true
			}
		} catch (error) {
			console.log(error)
			tomlError = error.message
		}
	}

	// import { enhance } from '$app/forms'
	export let form

	$: upstream = form?.data?.upstream ? Object.entries(form?.data?.upstream).map(([key, value]) => ({ key, value })) : null
	$: org = form?.data?.org
	$: notRegisteredProviders = form?.data?.not_registered.providers ? Object.entries(form?.data?.not_registered.providers).map(([key, value]) => ({ key, value })) : null

	let checkedUrl = form?.url
	let textInput = ''

	const dismissMessage = () => {
		return (showMessage = !showMessage)
	}

	$: console.log(showMessage)
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="lg:grid lg:grid-cols-2 lg:items-center gap-10 mb-10">
		<div class="mb-10">
			<Heading level={1}>Validator</Heading>
			<p>Use this validator to check what is returned when your carbon.txt file is parsed.</p>
		</div>

		<Callout>
			<p class="text-2xl">What is carbon.txt?</p>
			<p>If carbon.txt you're wondering what carbon.txt actually is we recommend reading about it first.</p>
			<div class="w-max mx-auto mt-[2rem]">
				<Button link="/about">What is carbon.txt?</Button>
			</div>
		</Callout>
	</div>
	<div class="validator-holder relative">
		<textarea name="carbon-txt" bind:value={textInput} rows="15	" class={tomlError.length > 0 ? 'bg-red-100' : ''} />
		<button type="submit" class="btn btn-white w-[100%]" on:click={validateToml}>Submit</button>
		<div class="validator-message absolute top-3 right-2 {showMessage ? 'hidden' : ''}">
			{#if tomlError.length > 0}
				<div class="alert__error">
					<p>There is an error in your carbon.txt syntax:</p>
					<p>{@html tomlError}</p>
					<button class="ml-auto text-sm mt-2 text-gray-700 flex flex-row align-center gap-1" on:click={dismissMessage}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class="inline h-[2ch]"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M18 6l-12 12" />
							<path d="M6 6l12 12" />
						</svg> Dismiss</button
					>
				</div>
			{:else if tomlSuccess}
				<div class="alert__success">
					<p>The carbon.txt syntax you have entered appears to be valid!</p>
					<button class="ml-auto text-sm mt-2 text-gray-700 flex flex-row align-center gap-1" on:click={dismissMessage}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class="inline h-[2ch]"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M18 6l-12 12" />
							<path d="M6 6l12 12" />
						</svg> Dismiss</button
					>
				</div>
			{/if}
		</div>
	</div>
	<!-- <form id="validateFile" class="form mt-[5rem]" use:enhance method="POST" action="?/registerFile	">
		<div class="flex flex-col gap-1">
			<label for="carbon-txt-url">Your carbon.txt URL</label>
			<div class="flex gap-3 flex-wrap">
				<input class="form-input flex-none lg:max-w-[80%]" type="url" id="carbon-txt-url" name="carbon-txt-url" required bind:value={checkedUrl} />
				<button type="submit" class="btn" on:click|once>Submit</button>
			</div>
		</div>
	</form> -->
</section>

<!-- <section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	{#if form?.status === 'ok'}
		<Heading level={2}>Parsed output</Heading>
		<Heading level={3}>Upstream</Heading>
		{#if upstream}
			<section class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 grid grid-rows-2 gap-4">
				<div class="w-100 flex items-center">
					<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
						<TWGF_Tree width="50px" />
					</div>
					<h4 class="text-3xl inline ml-4">Known green upstreams</h4>
				</div>
				<p>These upstream providers are green because they have registered with the Green Web Foundation, or use an underlying service that has.</p>
				<ul class="mt-[1rem] grid grid-cols-1 md:grid-cols-2 gap-10">
					{#each upstream as provider}
						<li class="block p-2">
							<span class="domain font-mono col-span-2 text-center bg-green-100 p-2">{provider.key}</span>
							<div class="host">
								<p class="bg-green-600 text-white p-2">Hosted by</p>
								<span class="flex gap-3 p-2"
									>{provider.value.name}
									<a href={provider.value.website}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="icon icon-tabler icon-tabler-world"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											stroke-width="2"
											stroke="currentColor"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
											<path d="M3.6 9h16.8" />
											<path d="M3.6 15h16.8" />
											<path d="M11.5 3a17 17 0 0 0 0 18" />
											<path d="M12.5 3a17 17 0 0 1 0 18" />
										</svg>
									</a></span
								>
							</div>
							<div class="services">
								<p class="bg-green-600 text-white p-2">Services</p>
								<ul class="flex flex-col gap-2 p-2">
									{#each provider.value.services as service}
										<li>{service}</li>
									{/each}
								</ul>
							</div>
							<div class="evidence">
								<p class="bg-green-600 text-white p-2">Evidence</p>
								<ul class="flex flex-col gap-2 p-2">
									{#each provider.value.supporting_documents as evidence}
										<li><a href={evidence.link}>{evidence.title}</a></li>
									{/each}
								</ul>
							</div>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
		{#if notRegisteredProviders}
			<section class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 grid grid-rows-2 gap-4 mt-[4rem]">
				<div class="w-100 flex items-center">
					<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
						<TGWF_Question width="50px" />
					</div>
					<h4 class="text-3xl inline ml-4">Unknown upstreams</h4>
				</div>
				<p>These upstream providers for whom we cannot find any information.</p>
				<ul class="mt-[1rem] grid grid-cols-1 md:grid-cols-2 gap-10">
					{#each notRegisteredProviders as provider}
						<li class="block p-2">
							<span class="domain font-mono col-span-2 text-center bg-green-100 p-2">{provider.key}</span>
							<div class="host">
								<p class="bg-green-600 text-white p-2">Service</p>
								<span class="flex gap-3 p-2">{provider.value.service} </span>
							</div>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
		<section class="mt-[4rem]">
			<Heading level={2}>Raw output</Heading>
			<Code code={JSON.stringify(form?.data, null, 2)} lang="json" />
		</section>
	{:else if form?.status === 'error'}
		<div class="alert__error">
			<p>Something went wrong. Please try again with a valid carbon.txt URL.</p>
		</div>
	{/if}
</section> -->
