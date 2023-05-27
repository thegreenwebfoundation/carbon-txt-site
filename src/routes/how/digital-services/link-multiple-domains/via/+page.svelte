<script>
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
	import DomainHash from '$lib/components/tools/DomainHash.svelte'
	import copy from 'clipboard-copy'
	export let form

	let copyText = 'Copy to clipboard'
	const example = form?.result ? `Via: 1.1 https://my-org.com/carbon.txt ${form.result}"` : 'Via: 1.1 https://my-org.com/carbon.txt <generated_domain_hash>'
</script>

<article class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="prose">
		<Heading level={1}>How to link two domains using HTTP Via headers domain hashes</Heading>
		<p>HTTP requests and responses can contain a number of extra headers, which you can use to send along extra metadata about the server serving the request.</p>
		<p>
			Carbon.txt supports using the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/via">HTTP Via header</a>, to declare that a HTTP response has been sent along by one or more
			intermediate entities. In our case usually a managed hosting provider.
		</p>
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
				<Heading level={2}>Set the <code>via</code> header on HTTP responses to requests for the domain you want to show as green</Heading>
				<p>
					For example: my-org.com also owns me.my-org.com. In order to link me.my-org.com to the main carbon.txt file, when a request comes in for me.my-org.com, you would configure the server serving
					the request to add the following Via header.
				</p>
				<Code lang="http" code={example} />
				<p><b>Note</b>: the domain hash would be a 64 character hash of me.my-org.com and your shared secret.</p>
				<p>
					We maintain a set of <a href="https://github.com/thegreenwebfoundation/carbon.txt/tree/master/examples">server config setup examples folder on github</a>, for popular open source servers
					like Nginx, Caddy, Apache, and so on (pull requests gratefully accepted).
				</p>
			</li>
		</ol>
	</div>
</article>
