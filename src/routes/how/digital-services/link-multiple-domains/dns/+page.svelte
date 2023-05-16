<script>
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
</script>

<article class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="prose">
		<Heading level={1}>How to link two domains using DNS TXT records and domain hashes</Heading>
		<p>DNS text records are frequently used to help organisations demonstrate they have control over a domain. The DNS TXT record approach follows similar principles.</p>
		<p>To do this:</p>
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
				<Heading level={2}>Set a DNS record for the domains you want to link back to your main carbon.txt, containing the domain hash</Heading>
				<p>
					Add the generated domain hash as a final, optional part of the DNS TXT record defining the domain you want to link back to your main carbon.txt file, along with the location of the
					carbon.txt file and the generated hash.
				</p>
				<p>For example: my-org.com also owns me.my-org.com. In order to link me.my-org.com to the main carbon.txt file, they would create a TXT record that looks something like:</p>
				<Code code={'TXT "carbon-txt=https://my-org.com/carbon.txt <generated_domain_hash>"'} lang="http" />
				<p>
					<b>Note:</b> You can see an example DNS TXT record for the domain <a href="https://delegating-with-txt-record.carbontxt.org">delegating-with-txt-record.carbontxt.org</a> using online tools
					like
					<a href="https://www.nslookup.io/domains/delegating-with-txt-record.carbontxt.org/dns-records/txt/">nslookup.io</a>
				</p>
			</li>
		</ol>
	</div>
</article>
