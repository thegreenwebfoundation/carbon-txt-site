<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Pilot from '$lib/components/Pilot.svelte'

	// Logos, SVGs and things
	import TWGF_Tree from '$lib/svg/tgwf_logo_tree.svelte'
	import TWGF_Up_Arrow from '$lib/svg/tgwf_logo_up_arrow.svelte'
</script>

<article class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<section class="w-100 mb-[10rem]">
		<Heading level={1}>What is carbon.txt?</Heading>
		<div class="flex flex-auto gap-10 items-center">
			<p class="prose">
				A proposed convention for website owners and digital service providers to demonstrate that their digital infrastructure runs on green electricity. This is achieved by reusing existing
				governance structures, already published data, and existing industry standards as much possible.
			</p>
			<Pilot />
		</div>
	</section>
	<section id="why" class="w-100 mb-[10rem]">
		<Heading level={2}>Why do we need this?</Heading>
		<div class="prose">
			<p>We need a fossil free internet by 2030. But right now there's still not much transparency around how we source power.</p>

			<p>
				To address this, Green Web Foundation has been building a Green Domains database, open sources the code for tracking this and is publishing open datasets about the state of the green web.
				Creating this dataset has been an ongoing effort for years. It has involved associating IP address space like IP ranges or Autonomous System Numbers with specific organisations, then manually
				verifying written reports and certificates provided by said organisations to back up their green claims.
			</p>

			<p>
				This has worked for the first few million domains, and first few billion checks against the database. But the internet is a much bigger, more dynamic place than it was when this endeavour was
				started. Our approach needs to evolve with the times.
			</p>

			<p>
				Luckily, today there are more tools that can help. Tools like the Domain Name System (DNS). DNS provides a variety of ways to establish a link between a domain and the party that is hosting or
				operating it. There are also dedicated registries that make it possible to trust that electricity has been generated from clean and renewable energy sources. And, if you know where to look,
				it's possible to tell when efforts to decarbonise energy are credible.
			</p>

			<p>
				Carbon.txt serves to make links between these systems easier to follow. So when there is a claim that a website is running on green energy, you can trace the provenance of supporting evidence
				more easily.
			</p>
		</div>
	</section>
	<section id="goals" class="w-100 mb-[10rem] grid grid-cols-1 gap-10">
		<Heading level={2}>What are the goals?</Heading>
		<ul class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-[9rem]">
			<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 grid grid-rows-2 gap-4">
				<div class="w-100 flex items-center">
					<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
						<TWGF_Tree width="50px" />
					</div>
					<h3 class="text-3xl inline ml-4">Open data</h3>
				</div>
				<p>Bring information about the energy used to power digital services into the public domain.</p>
			</li>
			<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 flex items-center grid grid-rows-2 gap-4">
				<div class="w-100 flex items-center">
					<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
						<TWGF_Up_Arrow width="50px" />
					</div>
					<h3 class="text-3xl inline ml-4">Open source</h3>
				</div>
				<p>Lays the groundwork for a future where checking if a website/service uses green energy is not locked to a single database.</p>
			</li>
		</ul>
		<Heading level={3}>To achieve these goals, we have:</Heading>
		<div class="prose">
			<ul>
				<li>used as much existing infrastructure as possible (web standards, conventions, governance)</li>
				<li>applied permissive licensing around use, so it can easily be built into modern tooling for continuous delivery and existing platforms/software;</li>
				<li>used a format that is human readable, as well as machine readable;</li>
			</ul>
		</div>
	</section>

	<section id="benefits" class="w-100 mb-[10rem]">
		<Heading level={2}>What are the benefits?</Heading>
		<div class="prose">
			<Heading level={3}>For digital service providers</Heading>
			<p>If you provide hosted digital services to others, carbon.txt lets you:</p>
			<ul>
				<li>Receive recognition, in a human and machine readable way, that the infrastructure you manage or use to provide your service runs on green energy.</li>
				<li>Earn trust from customers by helping creating an evidence base of action being taken by providers to help the world transition to a fossil free internet.</li>
				<li>Allow any downstream services or websites using your services to make the same claims, with a clear chain of attribution.</li>
				<li>Demonstrate leadership if you are moving faster in terms of a climate response than the organisations in your supply chain by linking to your own work.</li>
			</ul>
			<Heading level={3}>Get started</Heading>
			<Pilot />
			<div class="flex flex-wrap gap-3 justify-center">
				<Button link="/how/digital-services" white={true}>Implementing carbon.txt as a digital service provider</Button>
			</div>
		</div>
	</section>
</article>
