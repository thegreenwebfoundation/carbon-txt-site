<script>
	// Components
	import Heading from '$lib/components/Heading.svelte';

	// Logos, SVGs and things
	import TWGF_Tree from '$lib/svg/tgwf_logo_tree.svelte';
	import TWGF_Up_Arrow from '$lib/svg/tgwf_logo_up_arrow.svelte';
</script>

<article class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<section class="w-100 mb-[10rem]">
		<Heading level={1}>What is carbon.txt?</Heading>
		<div class="flex flex-auto gap-10 items-center">
			<p class="prose">
				A proposed convention for website owners and digital service providers to demonstrate that
				their digital infrastructure runs on green electricity. This is achieved by reusing existing
				governance structures, already published data, and existing industry standards as much
				possible.
			</p>
			<aside class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8">
				<p>
					Note: This is a draft version and we are still ironing out how this might work. If you
					would like to contribute or have questions, please <a
						href="https://github.com/thegreenwebfoundation/carbon.txt/issues">open a GitHub issue</a
					>
					or <a href="fershad@thegreenwebfoundation.org">contact us by email</a>.
				</p>
			</aside>
		</div>
	</section>
	<section id="why" class="w-100 mb-[10rem]">
		<Heading level={2}>Why do we need this?</Heading>
		<div class="prose">
			<p>
				We need a fossil free internet by 2030, but there's still not much transparency around how
				we source power at the moment. The Green Web Foundation has been building a Green Domains
				database, open sources the code for tracking this and is publishing open datasets about the
				state of the green web.
			</p>
			<p>
				Creating this dataset has been an ongoing effort for years. It has comprised of associating
				IP address space like IP ranges or Autonomous System Numbers with specific organisations -
				and then accompanying these links to manually verified written reports and certificates
				provided by said organisations to back up their green claims.
			</p>

			<p>
				This has worked for the first few million domains, and first few billion checks against the
				database, but there are more tools that can help now, and the internet is a much bigger,
				more dynamic place than it was when this endeavour was started.
			</p>

			<p>
				Tools like the domain name system (DNS) allow for a variety of ways to establish a link
				between a domain and the party that is hosting or operating it. Dedicated registries already
				exist to make it possible to trust that electricity has been generated from clean and
				renewable energy sources. And, if you know where to look, it's possible to tell when efforts
				to decarbonise energy are credible.
			</p>

			<p>
				Carbon.txt serves to make links between these systems easier to follow, so when there is a
				claim that a website is running on green energy, you can trace the provenance down to the
				supporting evidence more easily.
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
				<p>
					Bring information about the energy used to power digital services into the public domain.
				</p>
			</li>
			<li
				class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 flex items-center grid grid-rows-2 gap-4"
			>
				<div class="w-100 flex items-center">
					<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
						<TWGF_Up_Arrow width="50px" />
					</div>
					<h3 class="text-3xl inline ml-4">Open source</h3>
				</div>
				<p>
					Lays the groundwork for a future where checking if a website/service uses green energy is
					not locked to a single database.
				</p>
			</li>
		</ul>
		<Heading level={3}>To achieve these goals, we have:</Heading>
		<div class="prose">
			<ul>
				<li>
					used as much existing infrastructure as possible (web standards, conventions, governance)
				</li>
				<li>
					applied permissive licensing around use, so it can easily be built into modern tooling for
					continuous delivery and existing platforms/software;
				</li>
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
				<li>
					Receive recognition in a human readable and machine readable way that the infrastructure
					you manage or use to provide your service runs on green energy.
				</li>
				<li>
					Earn trust from customers by helping creating an evidence base of action being taken by
					providers to help the world transition to a fossil free internet.
				</li>
				<li>
					Allow any downstream services or websites using your services to make the same claims,
					with a clear chain of attribution.
				</li>
				<li>
					Demonstrate leadership if you are moving faster in terms of a climate repsonse than the
					organisations in your supply chain by linking to your own work.
				</li>
			</ul>
			<Heading level={3}>For website owners</Heading>
			<p>If you operate a website, or run an application yourself, you are able to:</p>

			<ul>
				<li>
					Demonstrate in human and machine-readable ways, the care you have taken in responsibly
					sourcing the providers that make up the supply chain in your own sites or applications.
				</li>
				<li>
					Help build the evidence base for tracking the transition of to a fossil free internet.
					Projects like the <a href="https://almanac.httparchive.org/en/2022/"
						>HTTP Archive’s Web Almanac</a
					> use datasets like these to provide a detailed breakdown of the overall "greenness" of the
					web every year. Your efforts provide the data needed for create the insights in these reports.
				</li>
			</ul>
		</div>
	</section>
</article>
