<script>
	/** @type {import('./$types').ActionData} */
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

	<div class="w-100 mb-[10rem]" id="getting-started">
		<ol class="flex flex-col gap-3 p-0">
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
						Upload the carbon.txt file you just created to your website. We strongly recommend that you upload the file to the root of your domain - that is the URL should look something like this: <code
							>https://www.my-org.com/carbon.txt</code
						>.
					</p>
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

<style>
	ul {
		list-style-type: disc;
	}

	ul li {
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
