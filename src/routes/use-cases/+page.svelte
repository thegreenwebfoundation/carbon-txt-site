<script>
	// Components
	import Code from '$lib/components/Code.svelte'
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'
	import What from '$lib/components/content/What.svelte'
	import Features from '$lib/components/content/Features.svelte'
	import Why from '$lib/components/content/Why.svelte'
	import Callout from '$lib/components/Callout.svelte'
	import TGWF_Bolt from '$lib/svg/tgwf_logo_bolt.svelte'
	import Pilot from '$lib/components/Pilot.svelte'

	let showBenefits = 'digitalService'
	function handleMouseOver(event) {
		showBenefits = event.detail.type
	}
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 border-b-2 last:border-0 border-neutral-200">
	<div class="w-100 mb-[5rem] pt-[2.5rem]">
		<Heading level={1}>Use cases</Heading>
		<What short="true"/>
		<p class="prose mt-4">Here's how you can put to carbon.txt to use in your own organisation.</p>

		<ul class="prose list-disc m-6">
			<li>
				<a href="https://www.thegreenwebfoundation.org/news/using-carbon-txt-with-tcs/">
				Using carbon.txt with the Technology Carbon Standard</a>
			</li>
			<li>
				<a href="https://www.thegreenwebfoundation.org/news/green-hosting-providers-can-use-carbon-txt/">
				Green hosting providers can use carbon.txt</a>
			</li>
		</ul>

	</div>
</section>