<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import What from '$lib/components/content/What.svelte'
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 border-b-2 last:border-0 border-neutral-200">
	<div class="w-100 mb-[5rem] pt-[2.5rem]">
		<Heading level={1}>Use cases</Heading>
		<What short="true" />
		<p class="prose my-4">Here's some practical ways you can put to carbon.txt to use in your own organisation.</p>

		<ul class="prose ml-0">
			<li class="p-3 bg-yellow-100 my-5">
				<strong>✨️ New! carbon.txt can help providers of AI services to surface their carbon emissions data</strong>, and users of AI services to evaluate the carbon impact of their model choices and usage. <a target="_blank" href="https://www.thegreenwebfoundation.org/news/ai-model-cards-in-carbon-txt/">Learn more in our blog post</a>!
      </li>
			<li class="py-3 pl-0">
				<a class="font-bold" href="https://podcast.greenio.tech/e/68rr5078-72-green-io-paris-2025-making-sustainability-easy-to-discover-with-chris-adams" target="_blank">Carbon.txt can help buyers of digital services and infrastructure evaluate the sustainability of the products they're procuring</a> - listen to our Director of Technology and Policy, Chris Adams explain how in this Green.IO podcast episode.
      </li>
			<li class="py-3 pl-0">
				<a class="font-bold" href="https://www.thegreenwebfoundation.org/news/green-hosting-providers-can-use-carbon-txt/" target="_blank"> Green hosting providers can use carbon.txt</a> - how we’re using
				carbon.txt, in combination with our Green Web Dataset. We cover why sharing evidence of green claims data inside a carbon.txt file has the potential to positively impact organisations disclosing
				data and the digital sustainability sector as a whole.
			</li>

			<li class="py-3 pl-0">
				<a class="font-bold" href="https://www.thegreenwebfoundation.org/news/using-carbon-txt-with-tcs/" target="_blank"> Using carbon.txt with the Technology Carbon Standard</a> - how carbon.txt can
				be combined with the Technology Carbon Standard (TCS) to create greater transparency in the field of digital sustainability. We cover how we collaborated with the sustainability team at Scott Logic,
				the driving force behind TCS, to simplify digital estate emissions reports through developing an initial TCS Schema.
			</li>

			<li class="py-3 pl-0">
				<a class="font-bold" href="https://torchbox.com/news/adding-carbon-txt/" target="_blank"> Making sustainability reporting more transparent and discoverable</a> - B-Corp certified digital agency
				Torchbox adopted carbon.txt to link to their yearly Impact Reports, their Sustainability Policy, and information about their website’s digital emissions - ensuring transparency, and making it possible
				for automated tools, partners, clients - anyone, to discover their sustainability data easily.
			</li>

			<li class="py-3 pl-0">
				<a class="font-bold" href="https://www.thegreenwebfoundation.org/news/using-carbon-txt-with-csrd-reports/" target="_blank"> Using carbon.txt with CSRD reports</a> - how carbon.txt can be used to
				share Corporate Sustainability Reporting Directive (CSRD) reports and find specific sustainability data points within them.
			</li>
		</ul>
	</div>
</section>
