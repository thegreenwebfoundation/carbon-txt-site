<script>
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
</script>

<article class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="prose">
		<Heading level={1}>How to link two domains using HTTP Via headers domain hashes</Heading>
		<p>HTTP requests and responses can contain a number of extra headers, which you can use to send along extra metadata about the server serving the request.</p>
		<p>
			Carbon.txt supports using the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/via">HTTP Via header</a>, to declare that a HTTP response has been sent along by one or more
			intermediate entities. In our case usually a managed hosting provider.
		</p>
		<ol>
			<li>
				<Heading level={2}>Follow the steps above to create your carbon.txt file</Heading>
				<p>Follow Steps 1 to 4 of the <a href="#getting-started">Getting Started guide</a> above to create a carbon.txt file for your organisation.</p>
			</li>
			<li>
				<Heading level={2}>Create a domain hash for the domain you want to show as green</Heading>
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
				<Heading level={2}>Set the <code>via</code> header on HTTP responses to requests for the domain you want to show as green</Heading>
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
