<script>
	/** @type {import('./$types').ActionData} */
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
	import Button from '$lib/components/Button.svelte'
	import Callout from '$lib/components/Callout.svelte'
	import { enhance } from '$app/forms'
	export let form

	import { digitalServiceToml } from '$lib/utils/exampleToml'
</script>

<article id="digital-services" class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[10rem]">
		<Heading level={1}>Implementing carbon.txt <br />For Digital Service Providers</Heading>
		<div class="lg:grid lg:grid-cols-2 lg:items-center gap-10">
			<p class="mb-10">
				As a provider of managed digital services, you can implement carbon.txt to demonstrate that the infrastructure you manage or use to provide your service runs on green energy. It also allows
				you to pass this on to your customers, allowing any downstream services or websites using your services to make the same claims, with a clear chain of attribution.
			</p>
			<Callout>
				<p class="text-2xl">For self-hosted sites and website owners</p>
				<p>
					We are currently piloting the carbon.txt specification with digital service providers only. The FAQ has information for self-hosted sites, and individual website owners who are interested in
					this idea.
				</p>
				<div class="w-max mx-auto mt-[2rem]"><Button link="/faq">Read the FAQ</Button></div>
			</Callout>
		</div>
	</div>

	<div class="w-100 mb-[10rem] prose" id="getting-started">
		<Heading level={2}>Getting started</Heading>
		<p class="mb-10">Follow the steps below to create an implement a carbon.txt file for your service.</p>

		<ol class="flex flex-col gap-3">
			<li>
				<Heading level={3}>Register with the Green Web Foundation</Heading>
				<p>
					As a digital service provider, you should first <a href="https://www.thegreenwebfoundation.org/green-web-check/register/">register with the Green Web Foundation</a>, and provide evidence of
					your green claims.
				</p>
			</li>
			<li>
				<Heading level={3}>Create a carbon.txt file for your organisation</Heading>
				<p>
					Create a carbon.txt file for your organisation. There is <a href="#digital-services-syntax">a guide</a> to the expected syntax below.
				</p>
				<a href="/tools/builder" class="btn btn-white">Use the carbon.txt builder</a>
				<Callout>
					<p class="text-2xl">Note</p>
					<p>You only need one carbon.txt file for your organisation.</p>
					<p>To link multiple domains to a single organisation, refer to the <a href="#link-multiple-domains">linking green claims to multiple domains</a> section below.</p>
				</Callout>
			</li>

			<li>
				<Heading level={3}>Upload your carbon.txt file to your servers.</Heading>
				<p>For example: <em>https://www.my-org.com/carbon.txt</em></p>
				<p>
					We default to checking for a file located at the root of your domain <code>/carbon.txt</code>.
				</p>
			</li>
			<li>
				<Heading level={3}>Share the URL of the carbon.txt file with Green Web Foundation</Heading>
				<p>The Green Web Foundation has an API for registering where to check for carbon.txt file for a given domain. You can do this using the form below.</p>
				{#if form?.status === 'ok'}
					<div class="alert__success">
						<p>Your carbon.txt file has been registered.</p>
					</div>
				{:else if form?.status === 'error'}
					<div class="alert__error">
						<p>Something went wrong. Please try again with a valid carbon.txt URL.</p>
					</div>
					<form class="form" use:enhance method="POST" action="?/registerFile	">
						<div class="flex flex-col gap-1">
							<label for="carbon-txt-url">Your carbon.txt URL</label>
							<!-- URL input with validation that the URL ends with carbon.txt -->
							<div class="flex gap-3 flex-wrap">
								<input class="form-input flex-none lg:max-w-[80%]" type="url" id="carbon-txt-url" name="carbon-txt-url" required />
								<button type="submit" class="btn" on:click|once>Submit</button>
							</div>
						</div>
					</form>
				{:else}
					<form class="form" use:enhance method="POST" action="?/registerFile	">
						<div class="flex flex-col gap-1">
							<label for="carbon-txt-url">Your carbon.txt URL</label>
							<!-- URL input with validation that the URL ends with carbon.txt -->
							<div class="flex gap-3 flex-wrap">
								<input class="form-input flex-grow flex-none lg:max-w-[80%]" type="url" id="carbon-txt-url" name="carbon-txt-url" required pattern=".*carbon\.txt$" />
								<button type="submit" class="btn" on:click|once>Submit</button>
							</div>
						</div>
					</form>
				{/if}
			</li>
			<li>
				<Heading level={3}>Link other domains to your green claims if they are using infrastructure you control</Heading>
				<p>
					If you offer managed hosted services to other organisations, once your first link is established there is an automated process for listing future domains so they show up as green too, with
					attribution to you. See <a href="#link-multiple-domains">domain hashes</a> below for more.
				</p>
			</li>
		</ol>
	</div>
</article>
<article id="digital-services-syntax" class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[10rem] prose">
		<Heading level={2}>Carbon.txt syntax</Heading>
		<p>Carbon.txt files are written in TOML.</p>
		<figure class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8">
			<Code showComments={true} code={digitalServiceToml} />
			<figcaption>An example of what a carbon.txt file might look like for a digital service provider or self-hosted site.</figcaption>
		</figure>
	</div>
</article>
<article id="link-multiple-domains" class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[10rem] prose">
		<Heading level={2}>Linking green claims to multiple domains</Heading>
		<p>
			It's fairly common that a digital service provider might own and provide services through multiple domains. They might also have multiple products, or provide hosted services for a number of
			users all who have their own domains.
		</p>

		<p>In this case, you can maintain a single carbon.txt file at one domain (e.g. https://my-org.com/carbon.txt) and refer other domains to that single source of truth.</p>

		<p>There are two supported ways to do this:</p>

		<ul>
			<li>Using DNS TXT records, which contain the specific URL pointing to the carbon.txt file to read.</li>
			<li>Using a dedicated HTTP Via Header, again containing a URL for the carbon.txt file to read.</li>
		</ul>
		<Heading level={3}>Choosing the right option for your organisation</Heading>
		<div class="mt-[3rem]">
			<Heading level={4}>Using DNS TXT records</Heading>
			<p>
				Using DNS TXT records is intended for organisations who are able to add DNS records to both their own domain, as well as the domain they want to show up as green. If you own both domains, this
				option is for you.
			</p>
			<a href="/how/digital-services/link-multiple-domains/dns" class="btn btn-white">Guide: How to link multiple domains using DNS TXT records</a>
		</div>

		<div class="mt-[3rem]">
			<Heading level={4}>Using HTTP Via Header</Heading>
			<p>
				Using a HTTP Via Header is intended for organisations who are not able to add DNS records for the domain they want to show up as green, but do accept HTTP requests for the domain, and serve
				responses for it. If you operate a CDN, a managed Wordpress service, or a general Platform-As-A-Service (PaaS) offering, this is usually better suited for your use case.
			</p>
			<p>This option also allows you to "pass down" green claims to customer who use your service.</p>
			<a href="/how/digital-services/link-multiple-domains/via" class="btn btn-white">Guide: How to link multiple domains using HTTP VIA HEADER</a>
		</div>
	</div>
</article>

<style>
	[data-toml] {
		display: none;
	}

	[data-toml].active {
		display: block;
	}
</style>
