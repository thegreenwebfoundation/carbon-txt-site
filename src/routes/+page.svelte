<script>
	// Components
	import Code from '$lib/components/Code.svelte'
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'
	import What from '$lib/components/content/What.svelte'
	import Goals from '$lib/components/content/Goals.svelte'
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
		<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 pb-[5rem] min-h-[80vh] lg:grid lg:grid-cols-2 lg:items-center">
			<div class="p-8">
				<Heading level={1}>Carbon.txt</Heading>
				<div class="mb-10">
					<What short={true} />
				</div>
				<div class="flex flex-wrap gap-3 justify-center md:justify-start">
					<Button link="#what">Learn more</Button>
					<Button link="https://github.com/thegreenwebfoundation/carbon.txt" icon={true} white={true}>Github <Github /></Button>
				</div>
			</div>
			<div class="max-w-100">
				<Code code={exampleToml} />
			</div>
		</div>
	</div>
</section>

<section id="what" class="w-100 bg-neutral-900">
	<div class="container mx-auto p-6 md:pb-[4rem] md:pt-[4rem] px-2 sm:px-4 mb-[5rem] text-white">
		<Heading level={2}>What is carbon.txt?</Heading>
		<What />
	</div>
</section>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 border-b-2 last:border-0 border-neutral-200">
	<div class="w-100 mb-[5rem]">
		<Heading level={2}>Why do we need this?</Heading>
		<Why short={true} />
		<div class="w-max mt-[2rem]"><Button link="/about#why">Read more about why</Button></div>
	</div>
</section>

<section id="cta" class="w-100 bg-neutral-900">
	<div class="container mx-auto p-6 md:pb-[4rem] md:pt-[4rem] px-2 sm:px-4 text-white text-center flex flex-col justify-center gap-3">
		<Heading level={3}>Get started</Heading>
		<div class="flex flex-wrap gap-3 w-100 justify-center">
			<Button link="/how/digital-services">Follow the guide</Button>
			<Button link="/tools/builder" white={true}>Use the builder</Button>
			<Button link="/tools/validator" white={true}>Use the validator</Button>
		</div>
	</div>
</section>
