<script>
	/** @type {import('../quickstart/$types').ActionData} */
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
	import Button from '$lib/components/Button.svelte'
	import Callout from '$lib/components/Callout.svelte'
</script>

<article id="digital-services" class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[3rem] prose">
		<Heading level={1}>Implementing carbon.txt for your organisation</Heading>
		<div class="">
			<p class="mb-10">
				Organisations can use carbon.txt to link to information about their own sustainability-related disclosures, such as their carbon footprint, or the energy mix of the infrastructure they use,
				CSRD reports, or other similar information. This presents information in a manner that is both readable by humans and machines, and which can be subsequently verified by third parties.
			</p>
			<p>In this guide, you will learn:</p>
			<ul>
				<li>How to create a carbon.txt file for your organisation</li>
				<li>How to upload your carbon.txt file to your servers</li>
				<li>How to validate the contents of that carbon.txt file</li>
			</ul>
		</div>
	</div>

	<div class="w-100 mb-[5rem]" id="getting-started">
		<ol class="steps flex flex-col gap-3 p-0">
			<li class="border-t border-gray-400 pb-[3rem]">
				<div class="mt-[2rem]">
					<Heading level={2}>Create a carbon.txt file</Heading>
					<p class="mb-10">Follow the steps below to create a carbon.txt file for your organisation.</p>
					<ul class="flex flex-col gap-6 p-0">
						<li>
							<Heading level={3}>Use the carbon.txt builder</Heading>
							<p class="prose">The easiest way to create a carbon.txt file is to use the carbon.txt builder tool.</p>
							<p class="prose mb-[2rem]">
								The carbon.txt builder will help you create a carbon.txt file with the appropriate fields and content. You can then save the output in a carbon.txt file, or manually copy it and save
								it to a file on your computer.
							</p>
							<div class="w-max"><Button link="/tools/builder">Use the carbon.txt builder</Button></div>
						</li>
						<li class="border-t border-gray-400 pb-[3rem]">
							<div class="mt-[2rem] prose">
								<Heading level={3}>Manually create a carbon.txt file</Heading>
								<p class="prose">If you prefer to create the carbon.txt file manually, based on the latest syntax, in your favourite text editor.</p>
								<p class="prose mb-[2rem]">At a minimum, a valid carbon.txt file should contain at least one (1) publicly accessible link to an organisational disclosure document.</p>
								<div class="w-max"><Button link="/syntax">Learn more about the carbon.txt syntax</Button></div>
							</div>
						</li>
					</ul>
				</div>
			</li>
			<li class="border-t border-gray-400 pb-[3rem]">
				<div class="mt-[2rem]">
					<Heading level={2}>Upload your carbon.txt file</Heading>
					<p class="prose mb-[2rem]">
						With your carbon.txt file created, the next step is to upload it to your website in a location that is easily discoverable for both humans and machines. There are two options you can use:
					</p>

					<div class="prose mb-[2rem] ml-[2rem]">
						<Heading level={3}>Beginners</Heading>
						<p>
							<span class="font-bold text-lg">For beginners:</span> Upload the carbon.txt file to the root of your domain - that is the URL should look something like this:
							<code>https://www.my-org.com/carbon.txt</code>.
						</p>
					</div>
					<div class="prose mb-[2rem] ml-[2rem]">
						<Heading level={3}>Experienced users & web admins</Heading>
						<p>
							<span class="font-bold text-lg">For advanced users:</span> Upload the carbon.txt file to a <code>/.well-known/</code> path on your server. This follows existing conventions that web administrators
							will be familiar with.
						</p>
					</div>
				</div>
			</li>
			<li class="border-t border-gray-400 pb-[3rem]">
				<div class="mt-[2rem]">
					<Heading level={2}>Validate your carbon.txt file</Heading>
					<p class="prose mb-[2rem]">
						Once you have uploaded your carbon.txt file, you can validate it using the carbon.txt validator. The validator will check that your carbon.txt file is correctly formatted and contains the
						required fields. It will also display the content of the carbon.txt file in a human readable format.
					</p>
					<div class="w-max"><Button link="/tools/validator">Use the carbon.txt validator</Button></div>
				</div>
			</li>
		</ol>
	</div>
</article>

<article id="advanced" class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[10rem] prose">
		<Heading level={2}>Advanced</Heading>
		<Heading level={3}>Linking a carbon.txt file to multiple domains</Heading>
		<Callout>
			<p>
				The section below only applies to green hosting providers that have already registered an account in the <a href="http://admin.thegreenwebfoundation.org/provider-portal"
					>Green Web Foundation's Provider Portal</a
				>.
			</p>
		</Callout>
		<p>
			It's fairly common that a digital service provider might own and provide services through multiple domains. They might also have multiple products, or provide hosted services for a number of
			users all who have their own domains.
		</p>

		<p>In this case, you can maintain a single carbon.txt file at one domain (e.g. <code>https://my-org.com/carbon.txt</code>) and refer other domains to that single source of truth.</p>

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
			<div class="w-max max-w-100"><Button link="/how/digital-services/link-multiple-domains/dns">Guide: How to link multiple domains using DNS TXT records</Button></div>
		</div>

		<div class="mt-[3rem]">
			<Heading level={4}>Using HTTP Via Header</Heading>
			<p>
				Using a HTTP Via Header is intended for organisations who are not able to add DNS records for the domain they want to show up as green, but do accept HTTP requests for the domain, and serve
				responses for it. If you operate a CDN, a managed Wordpress service, or a general Platform-As-A-Service (PaaS) offering, this is usually better suited for your use case.
			</p>
			<p>This option also allows you to "pass down" green claims to customer who use your service.</p>
			<div class="w-max max-w-100"><Button link="/how/digital-services/link-multiple-domains/via">Guide: How to link multiple domains using HTTP VIA HEADER</Button></div>
		</div>
	</div>
</article>

<style>
	ul {
		list-style-type: disc;
	}

	ul li,
	ol li {
		margin-left: 1.5rem;
		margin-block-start: 0.5rem;
	}

	ol ul {
		list-style-type: none;
	}

	ol ul li {
		margin: 0;
	}
</style>
