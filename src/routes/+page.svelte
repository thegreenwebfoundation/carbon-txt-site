<script>
	// Components
	import Code from '$lib/components/Code.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';

	// Logos, SVGs and things
	import Github from '$lib/svg/github.svelte';
	import TWGF_Tree from '$lib/svg/tgwf_logo_tree.svelte';
	import TWGF_Up_Arrow from '$lib/svg/tgwf_logo_up_arrow.svelte';

	const exampleToml = `[upstream]	
providers = [
	{ domain = "cloud.google.com", service = "infrastructure" },
	{ domain = "aws.amazon.com", service = "infrastructure" }
]

[org]
credentials = [
	{ domain = "mycompany.com", doctype = "sustainability-page", url = "https://mycompany.com/sustainability" },
	{ domain = "mycompany.com", doctype = "sustainability-report", url = "https://mycompany.com/carbon-emissions-2022.pdf" }
]`;
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4" id="intro">
	<div class="min-h-[80vh] lg:grid lg:grid-cols-2 lg:items-center">
		<div class="p-8">
			<h1 class="text-6xl uppercase pb-4">Carbon.txt</h1>
			<p class="mb-10">
				A proposed convention for website owners and digital service providers to demonstrate that
				their digital infrastructure runs on green electricity.
			</p>
			<div class="flex flex-wrap gap-3 justify-start">
				<Button link="#what">Learn more</Button>
				<Button link="https://github.com/thegreenwebfoundation/carbon.txt" icon={true} white={true}
					>Github <Github /></Button
				>
			</div>
		</div>
		<div class="p-8 max-w-100">
			<Code code={exampleToml} />
		</div>
	</div>
</section>

<section id="what" class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<div class="w-100 mb-[10rem]">
		<Heading level={2}>What is carbon.txt?</Heading>
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
	</div>
	<div class="w-100 mb-[10rem] grid grid-cols-1 gap-10">
		<Heading level={2}>What are the goals?</Heading>
		<ul class="grid grid-cols-1 md:grid-cols-2 gap-10">
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
		<div>
			<Heading level={3}>Learn more about</Heading>
			<div class="flex flex-wrap gap-3 justify-center">
				<Button link="/about#why" white={true}>Why we need carbon.txt</Button>
				<Button link="/about#goals" white={true}>The goals</Button>
				<Button link="/about#benefits" white={true}>The benefits</Button>
			</div>
		</div>
	</div>
</section>
