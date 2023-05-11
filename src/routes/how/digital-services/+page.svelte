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

	const stepFourCommand = `curl --request POST --location 'https://api.thegreenwebfoundation.org/api/v3/carbontxt'
	--header 'Content-Type: application/json'
	--data "{ 'url': 'https://my-org.com/carbon.txt' }"`
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
				<h2 class="text-2xl">For self-hosted sites and website owners</h2>
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
					We default to checking for a file located at the root of your domain <code>/carbon.txt</code> or <code>/.well-known/carbon.txt</code>.
				</p>
			</li>
			<li>
				<Heading level={3}>Share the URL of the carbon.txt file with Green Web Foundation</Heading>
				<p>The Green Web Foundation has an API for registering where to check for carbon.txt file for a given domain. Once this is listed, and the link established, your site shows as green.</p>
				<Code lang="shell" code={stepFourCommand} />
				<form class="form" use:enhance method="POST" action="?/registerFile	">
					<div class="flex flex-col gap-1">
						<label for="carbon-txt-url">Your carbon.txt URL</label>
						<!-- URL input with validation that the URL ends with carbon.txt -->
						<input class="form-input" type="url" id="carbon-txt-url" name="carbon-txt-url" required pattern=".*carbon\.txt$" />
					</div>
					<button type="submit" class="btn">Submit</button>
				</form>
				{#if form?.status === 'ok'}
					<p>Yep, good.</p>
				{:else if form?.status === 'error'}
					<p>Something went wrong. Please try again.</p>
				{:else}
					<p>Submit your carbon.txt URL to register it with the Green Web Foundation.</p>
				{/if}
				<div class="alert__warning">
					<p>You can use the <code>curl</code> command above for now. There'll be a tool to do this eventually.</p>
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
<article id="link-domains-with-domain-hash" class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[10rem] prose">
		<Heading level={2}>Linking green claims to multiple domains with domain hashes</Heading>
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

		<p>
			The first of these, using DNS TXT records, is intended for organisations who are able to add DNS records to both their own domain, as well as the domain they want to show up as green. If you own
			both domains, this option is for you.
		</p>

		<p>
			The second, a HTTP Via Header, is intended for organisations who are not able to add DNS records for the domain they want to show up as green, but do accept HTTP requests for the domain, and
			serve responses for it. If you operate a CDN, a managed Wordpress service, or a general Platform-As-A-Service offering, this is usually better suited for your use case.
		</p>

		<Heading level={3}>How to link two domains using DNS TXT records and domain hashes</Heading>

		<p>DNS text records are frequently used to help organisations demonstrate they have control over a domain. The DNS TXT record approach follows similar principles.</p>

		<p>To do this:</p>

		<ol>
			<li>
				<Heading level={4}>Follow the steps above to create your carbon.txt file</Heading>
				<p>Follow Steps 1 to 4 of the <a href="#getting-started">Getting Started guide</a> above to create a carbon.txt file for your organisation.</p>
			</li>

			<li>
				<Heading level={4}>Create a domain hash for the domain you want to show as green</Heading>
				<p>
					Create a domain hash. This is a SHA256 hash of your shared secret and the domain you want to establish a link to. Various online tools demonstrate how to make SHA 256 hashes (<a
						href="https://codebeautify.org/sha256-hash-generator">see this example</a
					>). To make it easier, you can do all this in our <a href="our own observable notebook">own observable notebook</a>.
				</p>
				<div class="alert__warning">
					<p>The Observable Notebook linked above is temporary. There'll be a dedicated tool to do this eventually.</p>
				</div>
			</li>
			<li>
				<Heading level={4}>Set a DNS record for the domains you want to link back to your main carbon.txt, containing the domain hash</Heading>
				<p>
					Add the generated domain hash as a final, optional part of the DNS TXT record defining the domain you want to link back to your main carbon.txt file, along with the location of the
					carbon.txt file and the generated hash.
				</p>

				<p>For example: my-org.com also owns me.my-org.com. In order to link me.my-org.com to the main carbon.txt file, they would create a TXT record that looks something like:</p>
				<Code code={'TXT "carbon-txt=https://my-org.com/carbon.txt <generated_domain_hash>"'} lang="http" />
				<p>
					<b>Note:</b> You can see an example DNS TXT record for the domain <a href="https://delegating-with-txt-record.carbontxt.org">delegating-with-txt-record.carbontxt.org</a> using online tools
					like <a href="https://www.nslookup.io/domains/delegating-with-txt-record.carbontxt.org/dns-records/txt/">nslookup.io</a>
				</p>
			</li>
		</ol>

		<Heading level={3}>How to link two domains using HTTP Via headers domain hashes</Heading>

		<p>HTTP requests and responses can contain a number of extra headers, which you can use to send along extra metadata about the server serving the request.</p>

		<p>
			Carbon.txt supports using the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/via">HTTP Via header</a>, to declare that a HTTP response has been sent along by one or more
			intermediate entities. In our case usually a managed hosting provider.
		</p>

		<ol>
			<li>
				<Heading level={4}>Follow the steps above to create your carbon.txt file</Heading>
				<p>Follow Steps 1 to 4 of the <a href="#getting-started">Getting Started guide</a> above to create a carbon.txt file for your organisation.</p>
			</li>
			<li>
				<Heading level={4}>Create a domain hash for the domain you want to show as green</Heading>
				<p>
					Create a domain hash. This is a SHA256 hash of your shared secret and the domain you want to establish a link to. Various online tools demonstrate how to make SHA 256 hashes (<a
						href="https://codebeautify.org/sha256-hash-generator">see this example</a
					>). To make it easier, you can do all this in our <a href="our own observable notebook">own observable notebook</a>.
				</p>
				<div class="alert__warning">
					<p>The Observable Notebook linked above is temporary. There'll be a dedicated tool to do this eventually.</p>
				</div>
			</li>

			<li>
				<Heading level={4}>Set the <code>via</code> header on HTTP responses to requests for the domain you want to show as green</Heading>
				<p>
					For example: my-org.com also owns me.my-org.com. In order to link me.my-org.com to the main carbon.txt file, when a request comes in for me.my-org.com, you would configure the server serving
					the request to add the following Via header.
				</p>
				<Code lang="http" code={'Via: 1.1 https://my-org.com/carbon.txt <generated_domain_hash>'} />
				<p><b>Note</b>: the domain hash would be a 64 character hash of me.my-org.com and your shared secret.</p>
				<p>
					We maintain a set of <a href="https://github.com/thegreenwebfoundation/carbon.txt/tree/master/examples">server config setup examples folder on github</a>, for popular open source servers
					like Nginx, Caddy, Apache, and so on (pull requests gratefully accepted).
				</p>
			</li>
		</ol>
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
