<script>
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
	import DomainHash from '$lib/components/tools/DomainHash.svelte'
	import copy from 'clipboard-copy'
	export let form

	let copyText = 'Copy to clipboard'
	const example = form?.result ? `TXT "carbon-txt=https://my-org.com/carbon.txt ${form.result}"` : 'TXT "carbon-txt=https://my-org.com/carbon.txt <generated_domain_hash>"'
</script>

<article class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[10rem] prose">
		<Heading level={1}>How to link two domains using DNS TXT records and domain hashes</Heading>
		<p>DNS text records are frequently used to help organisations demonstrate they have control over a domain. The DNS TXT record approach follows similar principles.</p>
		<p>To do this:</p>
		<ol class="flex flex-col gap-3 p-0">
			<li class="border-t border-gray-400">
				<Heading level={2}>Follow the steps above to create your carbon.txt file</Heading>
				<p>Follow Steps 1 to 4 of the <a href="/how/digital-services">Getting Started guide</a> above to create a carbon.txt file for your organisation.</p>
			</li>
			<li class="border-t border-gray-400" id="create-domain-hash">
				<Heading level={2}>Create a domain hash for the domain you want to show as green</Heading>
				<p>Create a domain hash. This is a SHA256 hash of your shared secret and the domain you want to establish a link to.</p>
				<p>Use the form below to create one.</p>

				{#if form?.body}
					<div class="alert__error">
						{form.body}
					</div>
					<DomainHash />
				{:else if form?.result}
					<div class="alert__success">
						<p>Success, your domain hash has been generated!</p>
						<Code code={form.result} lang={'txt'} />
					</div>
					<button
						class="btn mx-auto min-w-[20ch] block mx-auto"
						on:click={() => {
							const copySuccess = copy(form.result)
							// Check if promise resolves to true
							if (copySuccess) {
								copyText = '🎉 Copied!'
								setTimeout(() => {
									copyText = 'Copy to clipboard'
								}, 2000)
							}
						}}>{copyText}</button
					>
				{:else}
					<DomainHash />
				{/if}
			</li>
			<li class="border-t border-gray-400">
				<Heading level={2}>Set a DNS record for the domains you want to link back to your main carbon.txt, containing the domain hash</Heading>
				<p>
					Add the generated domain hash as a final, optional part of the DNS TXT record defining the domain you want to link back to your main carbon.txt file, along with the location of the
					carbon.txt file and the generated hash.
				</p>
				<p>For example: my-org.com also owns me.my-org.com. In order to link me.my-org.com to the main carbon.txt file, they would create a TXT record that looks something like:</p>
				<Code code={example} lang="http" />
				<p>
					<b>Note:</b> You can see an example DNS TXT record for the domain <a href="https://delegating-with-txt-record.carbontxt.org">delegating-with-txt-record.carbontxt.org</a> using online tools
					like
					<a href="https://www.nslookup.io/domains/delegating-with-txt-record.carbontxt.org/dns-records/txt/">nslookup.io</a>
				</p>
			</li>
		</ol>
	</div>
</article>
