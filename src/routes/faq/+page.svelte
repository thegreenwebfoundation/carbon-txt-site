<script>
	import Heading from '$lib/components/Heading.svelte'
	import Faq from '$lib/components/Faq.svelte'

	import DomainLookup from '$lib/svg/mermaid_domain-lookup.svelte'
</script>

<article class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="prose mb-[3rem]">
		<Heading level={1}>Frequently asked questions</Heading>
		<p>While this concept is still new, we expect that some edge cases will be encountered. Here are some frequently asked questions we have internally.</p>
	</div>
	<Faq id="upload">
		<span slot="question">Where should I store a carbon.txt file for my organisation?</span>
		<div class="prose" slot="answer">
			<p>
				You should upload your carbon.txt file to a location on your website that is easily discoverable for both humans and machines. We recommend placing it in the root directory of your website, or
				in a well-known location such as <code>/.well-known/</code>.
			</p>

			<div class="prose mb-[2rem] ml-[1rem]">
				<Heading level={3}>Root of your domain</Heading>
				<p>
					Upload the carbon.txt file to the root of your domain - that is the URL should look something like this:
					<code>https://www.my-org.com/carbon.txt</code>.
				</p>
			</div>
			<div class="prose mb-[2rem] ml-[1rem]">
				<Heading level={3}>.well-known</Heading>
				<p>
					Upload the carbon.txt file to a <code>/.well-known/</code> path on your server. This follows existing conventions that web administrators will be familiar with.
				</p>
				<Heading level={3}>Anywhere else (using a DNS TXT record)</Heading>
				<p>
					Upload the carbon.txt file at any publicly accessible HTTP URL, then set up a DNS TXT record in the format <code>carbon-txt-location=URL</code> pointing to the location of this file.
				</p>
				<Heading level={3}>Anywhere else (using an HTTP header)</Heading>
				<p>
					Upload the carbon.txt file at any publicly accessible HTTP URL, then set up your web server to add the header <code>CarbonTxt-Location: URL</code> to all requests, pointing to the location of this file.
				</p>
			</div>
		</div>
	</Faq>
	<Faq id="why">
		<span slot="question">Why this approach?</span>
		<div class="prose" slot="answer">
			<p>There are a few reasons for taking the approach we’ve described on this site.</p>

			<p>
				Primarily, we are adopting an approach which leans heavily on existing web standards, and technologies. This allows for familiarity, and we hope will lead to these ideas being easier to
				adopt/implement.
			</p>

			<p>
				We believe that providing a simple way for organisations to implement the carbon.txt specification is key to broader adoption. It allows us, as a small not-for-profit driving this idea, to
				have a much larger reach & impact when compared to the alternative of relying on individual action. Buulding this project around a plugin ecosystem also allows for other organisations to build
				on top of the carbon.txt specification, and extend it in ways that we haven't thought of.
			</p>

			<p>
				In the long run, we think that demonstrating how we can use existing internet and web standards to make sustainability claims easily discoverable, as well as human and machine readable, will
				result in a web where it's easier to trust green claims. Not only that, conventions like carbon.txt allows us follow green claims to the supporting evidence used to back them up.
			</p>
		</div>
	</Faq>
	<Faq id="ownership">
		<span slot="question">What would stop me using someone else's carbon.txt file instead?</span>
		<div class="prose" slot="answer">
			<p>
				Carbon.txt files are publically accessible, and are designed to be easily discoverable. This means that anyone can access them, and use the information contained within them. It allows for
				transparency, and for anyone to verify the claims made by an organisation.
			</p>
		</div>
	</Faq>
	<Faq id="validator-how">
		<span slot="question">How does the carbon.txt validator work?</span>
		<div class="prose" slot="answer">
			<p>There are three ways to use the carbon.txt validator:</p>

			<details class="mb-4 ml-4">
				<summary class="text-xl">Check a website domain</summary>

				<p>
					When you enter a website domain, the validator will check for a DNS TXT record in the format <code>carbon-txt-location=URL</code> and follow it, if it exists.
        </p>
        <p>
          If no DNS TXT record is found, it will proceed to look for a carbon.txt
          file in the root of the website (e.g. <code>https://example.com/carbon.txt</code>). If it finds one, it will parse the file and return the information contained within it.
        </p>
        <p>
          If there is no carbon.txt file at the root of the domain, it will then check for the file in a well-known location on the server (e.g. <code>https://example.com/.well-known/carbon.txt</code>).
          Again, if it finds one, it will parse the file and return the information contained within it.
        </p>
        <p>
          If no file is found at either location, then the validator will proceeed to check for a <code>CarbonTxt-Location</code> HTTP header specifying a URL, and follow it.
        </p>
        <p>
          If none of the above succeed, and you have requested either a top-level domain, or the www. subdomain of a top level domain - the validator will then attempt to find the carbontxt at the other alternative automatically
          (the www. subdomain will be tried, if a TLD was requested, the TLD will be tried if a www. subdomain is requested). The entire process is repeated for the alternate domain. For any other subdomains, no further attempts are carried out.
        </p>
        <p>
          If none of the above are found, the validator will return an error message.
				</p>

				<p>The diagram below shows this process visually.</p>

				<DomainLookup />
			</details>

			<details class="mb-4 ml-4">
				<summary class="text-xl">Check a carbon.txt URL</summary>

				<p>
					When you enter a URL that points to a specific carbon.txt file (e.g. <code>https://example.com/carbon.txt</code>), the validator will look make a request to find the file at that location.
					If it finds one, it will parse the file and return the information contained within it. If no file is found, then the validator will return an error message.
				</p>
			</details>

			<details class="mb-4 ml-4">
				<summary class="text-xl">Manually enter the content of a carbon.txt file</summary>

				<p>
					If you manually enter the content of a carbon.txt file, then the validator will try to parse the syntax that has been entered and return the information contained within it. If the syntax is
					incorrect, then the validator will return an error message.
				</p>
			</details>
		</div>
	</Faq>
</article>
