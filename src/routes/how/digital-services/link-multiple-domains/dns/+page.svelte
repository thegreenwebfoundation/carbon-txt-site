<script>
	import Heading from '$lib/components/Heading.svelte'
	import Code from '$lib/components/Code.svelte'
</script>

<article class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[10rem] prose">
		<Heading level={1}>How to link two domains using DNS TXT records</Heading>
		<p>DNS text records are frequently used to help organisations demonstrate they have control over a domain. The DNS TXT record approach follows similar principles.</p>
		<p>To do this:</p>
		<ol class="flex flex-col gap-3 p-0">
			<li class="border-t border-gray-400">
				<Heading level={2}>Follow the steps above to create your carbon.txt file</Heading>
				<p>Follow Steps 1 to 3 of the <a href="/quickstart">Getting Started guide</a> above to create a carbon.txt file for your organisation.</p>
			</li>
			<li class="border-t border-gray-400">
				<Heading level={2}>Set a DNS record for the domains you want to link back to your main carbon.txt</Heading>
				<p>
					Define a DNS TXT record for the domain you want to link back to your main carbon.txt file, with the location of the
					carbon.txt file prefixed by <code>carbon-txt-location=</code>.
				</p>
				<p>For example: my-org.com also owns me.my-org.com. In order to link me.my-org.com to the main carbon.txt file, they would create a TXT record that looks something like:</p>
				<Code code='TXT "carbon-txt-location=https://my-org.com/carbon.txt"' lang="http" />
				<p>
					<b>Note:</b> You can see an example DNS TXT record for the domain <a href="https://delegating-with-txt-record.carbontxt.org">delegating-with-txt-record.carbontxt.org</a> using online tools
					like
					<a href="https://www.nslookup.io/domains/delegating-with-txt-record.carbontxt.org/dns-records/txt/">nslookup.io</a>
				</p>
			</li>
		</ol>
	</div>
</article>
