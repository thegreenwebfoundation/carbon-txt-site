<script>
	// Components
	import Code from '$lib/components/Code.svelte'
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'
	import What from '$lib/components/content/What.svelte'
	import Goals from '$lib/components/content/Features.svelte'
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
				<Heading level={1}>Sustainability data that’s easier to discover and use.</Heading>
				<div class="mb-10">
					<p class="prose">Carbon.txt is a single location on any web domain for public sustainability data relating 
					to that company. It's an open source tool that's free for you to use or build on.</p>
					<p class="prose mt-4">Be a part of the movement for open, discoverable, comparable, 
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
	</div>
</section>

<section id="what" class="w-100 bg-neutral-900">
	<div class="container mx-auto p-6 md:pb-[4rem] md:pt-[4rem] px-2 sm:px-4 mb-[5rem] text-white">
		<Heading level={2}>What is carbon.txt?</Heading>
		<What />
						<div class="flex flex-wrap gap-3 justify-center md:justify-start">
					<Button link="#what">Learn more</Button>
					<Button link="https://github.com/thegreenwebfoundation/carbon.txt" icon={true} white={true}>Github <Github /></Button>
				</div>
	</div>
</section>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 border-b-2 last:border-0 border-neutral-200">
	<div class="w-100 mb-[5rem]">
		<Heading level={2}>Why do we need this?</Heading>
		<Why short={true} />
		<div class="w-max mt-[2rem]"><Button link="/about#why">Read more about why</Button></div>
		<Code code={exampleToml} />
	</div>
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


