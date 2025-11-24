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
			<li class="py-3 pl-0">
				<a class="font-bold" href="https://www.thegreenwebfoundation.org/news/using-carbon-txt-with-csrd-reports/"> Using carbon.txt with CSRD reports</a> - how carbon.txt can be used to share Corporate
				Sustainability Reporting Directive (CSRD) reports and find specific sustainability data points within them.
			</li>

			<li class="py-3 pl-0">
				<a class="font-bold" href="https://www.thegreenwebfoundation.org/news/using-carbon-txt-with-tcs/"> Using carbon.txt with the Technology Carbon Standard</a> - how carbon.txt can be combined with
				the Technology Carbon Standard (TCS) to create greater transparency in the field of digital sustainability. We cover how we collaborated with the sustainability team at Scott Logic, the driving
				force behind TCS, to simplify digital estate emissions reports through developing an initial TCS Schema.
			</li>

			<li class="py-3 pl-0">
				<a class="font-bold" href="https://www.thegreenwebfoundation.org/news/green-hosting-providers-can-use-carbon-txt/"> Green hosting providers can use carbon.txt</a> - how we’re using carbon.txt,
				in combination with our Green Web Dataset. We cover why sharing evidence of green claims data inside a carbon.txt file has the potential to positively impact organisations disclosing data and the
				digital sustainability sector as a whole.
			</li>
		</ul>
	</div>
</section>
