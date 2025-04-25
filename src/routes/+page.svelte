<script>
	// Components
	import Code from '$lib/components/Code.svelte'
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'
	import What from '$lib/components/content/What.svelte'
	import WhatData from '$lib/components/content/WhatData.svelte'
	import TrustedBy from '$lib/components/content/TrustedBy.svelte'
	import Features from '$lib/components/content/Features.svelte'
	import Why from '$lib/components/content/Why.svelte'
	import Callout from '$lib/components/Callout.svelte'
	import TGWF_Bolt from '$lib/svg/tgwf_logo_bolt.svelte'

	// Logos, SVGs and things
	import Github from '$lib/svg/github.svelte'

	import { digitalServiceToml as exampleToml } from '$lib/utils/exampleToml'

	let showBenefits = 'digitalService'
	function handleMouseOver(event) {
		showBenefits = event.detail.type
	}
</script>

<section class="w-100" id="intro">
	<div class="relative block">
		<div class="absolute -z-50 right-0 w-1/2 -top-24 bg-no-repeat bg-right bg-[length:100%_100%] bg-gradient-to-l from-green-500 hidden md:block" style="height: calc(100% + 100px);" />
		<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 pb-[5rem] min-h-[60vh] lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
			<div class="py-8">
				<Heading level={1}>Sustainability data that’s easy to discover and use.</Heading>
				<div class="mb-10">
					<p class="prose">Carbon.txt is a single location on any web domain for public sustainability data relating 
					to that company. It's an open source tool that's free to use or build on.</p>
					<p class="prose mt-4">Be part of the movement for open, discoverable, comparable, 
					and traceable sustainability data on the web.</p>
				</div>
			</div>
			<div class="max-w-100">
				<img class="m-auto" width="600px" height="308px" src="/carbontxt-video-cover.jpg" alt="Hannah Smith presenting carbon.txt at State of the Open Con" />
				<p class="prose my-4 text-center">
					<a href="https://www.youtube.com/watch?v=55cjE8B-wBM&list=PL0U2cL1JGPZcU-k-4_RT7url83zFdJRug&index=9">
					Watch our presentation of carbon.txt at State of the Open, London on YouTube</a>.</p>
			</div>
		</div>

		<div class="max-w-4xl pb-[5rem] m-auto">
			<TrustedBy />
		</div>

	</div>
</section>


<section id="what-data" class="w-100 bg-neutral-900">
	<div class="container mx-auto p-6 md:pb-[4rem] md:pt-[4rem] px-2 sm:px-4 text-white">
		<WhatData />
		
		<div class="text-center">
			<p>Our free and easy to use tools are there to help you get started.</p>

			<div class="flex flex-wrap gap-3 justify-center">
				<Button link="/quickstart">Get started</Button>
			</div>
		</div>
	</div>
</section>

<section id="features" class="w-100 container mx-auto p-6 px-2 sm:px-4 md:py-10">
	<Heading level={2} class="text-center">Key features</Heading>
	<Features />
</section>

<section id="cta" class="w-100 bg-neutral-900">
	<div class="container mx-auto p-6 md:pb-[4rem] md:pt-[4rem] px-2 sm:px-4 text-white text-center flex flex-col justify-center gap-3">
		
		<Heading level={3}>Get started</Heading>
		<div class="flex flex-wrap gap-3 w-100 justify-center">
			<Button link="/quickstart">Follow the guide</Button>
			<Button link="/tools/builder" white={true}>Use the builder</Button>
			<Button link="/tools/validator" white={true}>Use the validator</Button>
		</div>
	</div>
</section>


