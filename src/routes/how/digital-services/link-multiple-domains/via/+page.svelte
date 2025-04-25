<script>
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
</script>

<article class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="prose">
		<Heading level={1}>How to link two domains using an HTTP header</Heading>
		<p>HTTP requests and responses can contain a number of extra headers, which you can use to send along extra metadata about the server serving the request.</p>
		<p>
			Carbon.txt supports using the <code>CarbonTxt-Location</code> header, to point to a carbon.txt served on another domain,  In our case usually a managed hosting provider.
		</p>
		<ol class="flex flex-col gap-3 p-0">
			<li class="border-t border-gray-400">
				<Heading level={2}>Follow the steps above to create your carbon.txt file</Heading>
				<p>Follow Steps 1 to 3 of the <a href="/quickstart">Getting Started guide</a> above to create a carbon.txt file for your organisation.</p>
			</li>
			<li class="border-t border-gray-400">
				<Heading level={2}>Set the header on HTTP responses from the domain you want to show as green</Heading>
				<p>
					For example: my-org.com also owns me.my-org.com. In order to link me.my-org.com to the main carbon.txt file, when a request comes in for me.my-org.com, you would configure the server serving
					the request to add the following header.
				</p>
				<Code lang="http" code="CarbonTxt-Location: https://my-org.com/carbon.txt" />
				<p>
					We maintain a set of <a href="https://github.com/thegreenwebfoundation/carbon.txt/tree/master/examples">server config setup examples folder on github</a>, for popular open source servers
					like Nginx, Caddy, Apache, and so on (pull requests gratefully accepted).
				</p>
			</li>
		</ol>
	</div>
</article>
