<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
	import TWGF_Tree from '$lib/svg/tgwf_logo_tree.svelte'
	import TGWF_Question from '$lib/svg/tgwf_logo_question.svelte'

	import { load } from 'js-toml'

	let tomlError = ''
	async function storeToml(parsed) {
		const toml = parsed

		const headers = {
			'Content-Type': 'application/text'
		}

		const response = await fetch('/api/validator/post', {
			method: 'POST',
			headers,
			body: JSON.stringify(toml)
		})

		if (response.ok) {
			const data = await response.text()
			console.log(data)

			let url = 'https://carbon-txt-site.pages.dev/api/validator/get?url=' + data
			checkedUrl = url

			// const form = document.getElementById('validateFile')
			// form.submit()
		} else {
			console.log('Error')
		}
	}

	function validateToml() {
		tomlError = ''
		try {
			let parsed = load(textInput)
			tomlError = ''
			storeToml(parsed)
		} catch (error) {
			console.log(error)
			// // Find offset: nnn in the error, where nnn is a number. Return that number.
			// let offset = error.message.match(/offset: (\d+)/)
			// if (offset) {
			// 	offset = offset[1]
			// } else {
			// 	offset = 0
			// }
			// // Get the 5 characters around the offset
			// tomlError = textInput.slice(parseInt(offset - 10), parseInt(offset) + 10)
			// // Highlight the position of the error in the tomlError string by positioning an arrow below the offset
			// tomlError = tomlError + '<br />' + '&nbsp;'.repeat(10) + '^'
			tomlError = error.message
		}
	}

	import { enhance } from '$app/forms'
	export let form

	$: upstream = form?.data?.upstream ? Object.entries(form?.data?.upstream).map(([key, value]) => ({ key, value })) : null
	$: console.log(upstream)
	$: org = form?.data?.org
	$: notRegisteredProviders = form?.data?.not_registered.providers ? Object.entries(form?.data?.not_registered.providers).map(([key, value]) => ({ key, value })) : null

	let checkedUrl = form?.url
	let textInput = ''
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<Heading level={1}>Validator</Heading>
	<p>Use this validator too to check what is returned when your carbon.txt file is parsed.</p>
	<div class="lg:grid lg:grid-cols-2 lg:items-center gap-5">
		<div>
			<textarea name="carbon-txt" bind:value={textInput} rows="15	" />
			<button type="submit" class="btn" on:click={validateToml}>Submit</button>
		</div>
		{#if tomlError.length > 0}
			<div class="alert__error">
				<p>There is an error in your carbon.txt syntax:</p>
				<p>{@html tomlError}</p>
			</div>
		{/if}
	</div>
	<form id="validateFile" class="form mt-[5rem]" use:enhance method="POST" action="?/registerFile	">
		<div class="flex flex-col gap-1">
			<label for="carbon-txt-url">Your carbon.txt URL</label>
			<!-- URL input with validation that the URL ends with carbon.txt -->
			<div class="flex gap-3 flex-wrap">
				<input class="form-input flex-none lg:max-w-[80%]" type="url" id="carbon-txt-url" name="carbon-txt-url" required bind:value={checkedUrl} />
				<button type="submit" class="btn" on:click|once>Submit</button>
			</div>
		</div>
	</form>
</section>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
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
</section>
