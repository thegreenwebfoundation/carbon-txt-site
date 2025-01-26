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
	import Pilot from '$lib/components/Pilot.svelte'

	let showBenefits = 'digitalService'
	function handleMouseOver(event) {
		showBenefits = event.detail.type
	}
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 border-b-2 last:border-0 border-neutral-200">
	<div class="w-100 mb-[5rem] pt-[2.5rem]">
		<Heading level={1}>What is carbon.txt?</Heading>
		<div class="flex flex-auto gap-10 items-center">
			<What />
		</div>
	</div>
</section>
<section id="why" class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 border-b-2 last:border-0 border-neutral-200">
	<div class="w-100 mb-[5rem] pt-[2.5rem]">
		<Heading level={2}>Why do we need this?</Heading>
		<Why />
	</div>
</section>
<section id="goals" class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 border-b-2 last:border-0 border-neutral-200">
	<div class="w-100 mb-[5rem] pt-[2.5rem]">
		<Heading level={2}>What are the goals?</Heading>
		<Goals />
	</div>
	<div class="w-100 mb-[5rem] pt-[2.5rem]">
		<Heading level={3}>To achieve these goals, we have:</Heading>
		<div class="prose">
			<ul>
				<li>used as much existing infrastructure as possible (web standards, conventions, governance)</li>
				<li>applied permissive licensing around use, so it can easily be built into modern tooling for continuous delivery and existing platforms/software;</li>
				<li>used a format that is human readable, as well as machine readable;</li>
			</ul>
		</div>
	</div>
</section>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 border-b-2 last:border-0 border-neutral-200">
	<div class="w-100 mb-[5rem] pt-[2.5rem] grid grid-cols-1 gap-10">
		<Heading level={2}>What are the benefits?</Heading>
		<div id="benefits-digital-services">
			<Heading level={3}>For digital service providers</Heading>
			<p>If you provide hosted digital services to others, carbon.txt lets you:</p>
			<ul class="grid grid-cols-1 md:grid-cols-2 gap-10 my-[2rem]">
				<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 grid grid-rows-2 gap-4">
					<div class="w-100 flex items-center">
						<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
							<TGWF_Bolt width="50px" />
						</div>
						<h4 class="text-3xl inline ml-4">Recognition</h4>
					</div>
					<p>Receive recognition, in a human and machine readable way, that the infrastructure you manage or use to provide your service runs on green energy.</p>
				</li>
				<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 grid grid-rows-2 gap-4">
					<div class="w-100 flex items-center">
						<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
							<TGWF_Bolt width="50px" />
						</div>
						<h4 class="text-3xl inline ml-4">Earn trust</h4>
					</div>
					<p>Earn trust from customers by helping creating an evidence base of action being taken by providers to help the world transition to a fossil free internet.</p>
				</li>
				<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 grid grid-rows-2 gap-4">
					<div class="w-100 flex items-center">
						<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
							<TGWF_Bolt width="50px" />
						</div>
						<h4 class="text-3xl inline ml-4">Pass on to customers</h4>
					</div>
					<p>Allow any downstream services or websites using your services to make the same claims, with a clear chain of attribution.</p>
				</li>
				<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 grid grid-rows-2 gap-4">
					<div class="w-100 flex items-center">
						<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
							<TGWF_Bolt width="50px" />
						</div>
						<h4 class="text-3xl inline ml-4">Show leadership</h4>
					</div>
					<p>Demonstrate leadership if you are moving faster in terms of a climate response than the organisations in your supply chain by linking to your own work.</p>
				</li>
			</ul>
		</div>
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
