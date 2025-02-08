<script>
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Pilot from '$lib/components/Pilot.svelte'
	import Faq from '$lib/components/Faq.svelte'
</script>

<article class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="prose mb-[3rem]">
		<Heading level={1}>Frequently asked questions</Heading>
		<p>While this concept is still new, we expect that some edge cases will be encountered. Here are some frequently asked questions we have internally.</p>
	</div>
	<Faq>
		<span slot="question">Where should I store a carbon.txt file for my organisation?</span>
		<div class="prose" slot="answer">
			<p>
				You should upload your carbon.txt file to a location on your website that is easily discoverable for both humans and machines. We recommend placing it in the root directory of your website, or
				in a well-known location such as <code>/.well-known/</code>.
			</p>

			<p>
				The Quickstart guide has more information on <a href="/quickstart">uploading your carbon.txt file</a>.
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
	<Faq>
		<span slot="question">What would stop me using someone else's carbon.txt file instead?</span>
		<div class="prose" slot="answer">
			<p>
				Carbon.txt files are publically accessible, and are designed to be easily discoverable. This means that anyone can access them, and use the information contained within them. It allows for
				transparency, and for anyone to verify the claims made by an organisation.
			</p>
		</div>
	</Faq>
</article>
