<script>
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Pilot from '$lib/components/Pilot.svelte'
	import Faq from '$lib/components/Faq.svelte'
</script>

<article class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<Heading level={1}>Frequently asked questions</Heading>
	<Faq>
		<span slot="question">I am self-hosting my website, can I use carbon.txt?</span>
		<div class="prose" slot="answer">
			<p>
				For now, no. We are currently working with larger organisations to pilot the carbon.txt specification. This will help us uncover use cases and implementation details that will be applicable to
				smaller providers and website operators.
			</p>

			<p>
				Expanding the carbon.txt specification to cater for self-hosted sites is on our roadmap. You can follow <a href="https://github.com/thegreenwebfoundation/carbon.txt/issues/9"
					>this Github issue</a
				> to keep updated with progress.
			</p>
		</div>
	</Faq>
	<Faq>
		<span slot="question">I run a website for my company/myself, can I use carbon.txt?</span>
		<div class="prose" slot="answer">
			<p>
				For now, no. We are currently working with larger organisations to pilot the carbon.txt specification. This will help us uncover use cases and implementation details that will be applicable to
				smaller providers and website operators.
			</p>

			<p>
				Expanding the carbon.txt specification to cater for self-hosted sites is on our roadmap. You can follow <a href="https://github.com/thegreenwebfoundation/carbon.txt/issues/9"
					>this Github issue</a
				> to keep updated with progress.
			</p>
		</div>
	</Faq>
	<Faq>
		<span slot="question">Why this approach?</span>
		<div class="prose" slot="answer">
			<p>There are a few reasons for taking the approach we’ve described on this site.</p>

			<p>
				Primarily, we are adopting an approach which leans heavily on existing web standards, and technologies. This allows for familiarity, and we hope will lead to these ideas being easier to
				adopt/implement.
			</p>

			<p>
				We believe that providing a way for hosting providers/managed services to implement the carbon.txt specification for their product/s is key to broader adoption. It allows us, as a small
				not-for-profit driving this idea, to have a much larger reach & impact when compared to the alternative of relying on individuals to upload carbon.txt files to their own domains.
			</p>

			<p>
				In the long run, we think that demonstrating how we can use existing internet and web standards to make sustainability claims easily discoverable, as well as human and machine readable, will
				result in a web where it's easier to trust green claims. Not only that, conventions like carbon.txt allows us follow green claims to the supporting evidence used to back them up.
			</p>
		</div>
	</Faq>
	<Faq>
		<span slot="question">What would stop me using someone else's carbon.txt file instead?</span>
		<div class="prose" slot="answer">
			<p>
				Domains must be associated to an organisation that is a verified green hosting provider with the Green Web Foundation before they show up as being green. This is to mitigate against bad actors
				taking credit for the green claims made in another organisation's carbon.txt file.
			</p>

			<p>There are two ways to associate a domain with a verified green hosting provider:</p>

			<ol>
				<li>
					Using domain hashes - New domains are only automatically recognised as green, and associated to a verified green provider, if there is a matching domain hash available when they are first
					submitted/checked through the Greencheck API.
				</li>
				<li>Manually - Green Web Foundation staff can manually create a record for a new domain, and associate with an existing verified green hosting provider.</li>
			</ol>
		</div>
	</Faq>
	<Faq>
		<span slot="question">How does this work for globally distributed providers?</span>
		<div class="prose" slot="answer">
			<p>
				The internet is a distributed network by its very nature. And, many hosting providers - especially CDNs and edge compute services - will serve content from locations around the world. Some of
				these locations could be in regions that run entirely (or almost entirely) on green energy.
			</p>

			<p>
				At present, carbon.txt is designed to work at an organisational level, for organisations aiming to demonstrate that 100% of the carbon emissions associated with operating digital
				infrastructure have been accounted for.
			</p>

			<p>
				We're looking into ways and funding to surface greater geographic resolution for location-based carbon intensity, to reflect the physical reality. If you're interested in collaborating or
				funding our work, please <a href="mailto:fershad@thegreenwebfoundation.org">get in touch</a>.
			</p>
		</div>
	</Faq>
</article>
