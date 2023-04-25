<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
	import Button from '$lib/components/Button.svelte'
	import { digitalServiceToml } from '$lib/utils/exampleToml'
</script>

<article id="digital-services" class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[10rem] prose">
		<Heading level={1}>Implementing carbon.txt <br />For Digital Service Providers and Self-hosted Websites</Heading>
		<p class="mb-10">
			As a provider of managed digital services, you can implement carbon.txt to demonstrate that the infrastructure you manage or use to provide your service runs on green energy. It also allows you
			to pass this on to your customers, allowing any downstream services or websites using your services to make the same claims, with a clear chain of attribution.
		</p>
	</div>

	<div class="w-100 mb-[10rem] prose">
		<Heading level={2}>Getting started</Heading>
		<p class="mb-10">Follow the steps below to create an implement a carbon.txt file for your service.</p>

		<ol>
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
			</li>

			<li>
				<Heading level={3}>Upload your carbon.txt file to your servers.</Heading>
				<p>For example: <em>https://www.my-org.com/carbon.txt</em></p>
				<p>
					We default to checking for a file located at the root of your domain (e.g. <code>/carbon.txt</code>). If you need to store the file at a different path, we support setting your own path,
					like
					<code>.well-known/carbon.txt</code>. We <a href="#link-domains-with-domain-hash">outline how</a> further below.
				</p>
			</li>
			<li>
				<Heading level={3}>Share the URL of the carbon.txt file with Green Web Foundation</Heading>
				<p>The Green Web Foundation has an API for registering where to check for carbon.txt file for a given domain. Once this is listed, and the link established, your site shows as green.</p>
				<div class="alert__warning">
					<p>There'll be a tool to do this.</p>
				</div>
			</li>
			<li>
				<Heading level={3}
					>Link other domains to your green claims if they are using infrastructure you control <span class="bg-white border-2 border-dark-gray rounded-3xl text-base p-2">Optional</span></Heading
				>
				<p>
					If you offer managed hosted services to other organisations, once your first link is established there is an automated process for listing future domains so they show up as green too, with
					attribution to you. See <a href="#link-domains-with-domain-hash">domain hashes</a> below for more.
				</p>
			</li>
		</ol>
	</div>
</article>
<article id="digital-services" class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[10rem] prose">
		<Heading level={2}>Carbon.txt syntax</Heading>
		<p>Carbon.txt files are written in TOML.</p>
		<figure class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8">
			<Code lang="toml" showComments={true} code={digitalServiceToml} />
			<figcaption>An example of what a carbon.txt file might look like for a digital service provider or self-hosted site.</figcaption>
		</figure>
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
