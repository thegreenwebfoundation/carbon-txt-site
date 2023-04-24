<script>
	// Components
	import Code from '$lib/components/Code.svelte';

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

<div class="relative block">
	<div
		class="block fixed -z-50 left-0 w-1/2 -top-24 bg-no-repeat bg-right bg-[length:100%_100%] bg-gradient-to-r from-green-500"
		style="height: calc(100% + 100px);"
	/>

	<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4" id="intro">
		<div class="min-h-[80vh] lg:grid lg:grid-cols-2 lg:items-center">
			<div class="p-8">
				<h1 class="text-6xl uppercase pb-4">Carbon.txt</h1>
				<p class="mb-10">
					A proposed convention for website owners and digital service providers to demonstrate that
					their digital infrastructure runs on green electricity.
				</p>
				<div class="flex flex-wrap gap-3 justify-start">
					<a href="#what" class="btn block min-w-[20ch] rounded-full text-center">Learn more</a>
					<a
						href="https://github.com/thegreenwebfoundation/carbon.txt"
						class="btn btn-white block min-w-[20ch] rounded-full flex items-center justify-center gap-3"
						>Github <Github /></a
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
			<h2 class="text-4xl uppercase pb-4">What is carbon.txt?</h2>
			<div class="flex flex-auto gap-10 items-center">
				<p class="prose">
					A proposed convention for website owners and digital service providers to demonstrate that
					their digital infrastructure runs on green electricity. This is achieved by reusing
					existing governance structures, already published data, and existing industry standards as
					much possible.
				</p>
				<aside class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8">
					<p>
						Note: This is a draft version and we are still ironing out how this might work. If you
						would like to contribute or have questions, please <a
							href="https://github.com/thegreenwebfoundation/carbon.txt/issues"
							>open a GitHub issue</a
						>
						or <a href="fershad@thegreenwebfoundation.org">contact us by email</a>.
					</p>
				</aside>
			</div>
		</div>
		<div class="w-100 mb-[10rem] grid grid-cols-1 gap-10">
			<h2 class="text-4xl uppercase pb-4">What are the goals?</h2>
			<ul class="grid grid-cols-1 md:grid-cols-2 gap-10">
				<li
					class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 grid grid-rows-2 gap-4"
				>
					<div class="w-100 flex items-center">
						<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
							<TWGF_Tree width="50px" />
						</div>
						<h3 class="text-3xl inline ml-4">Open data</h3>
					</div>
					<p>
						Bring information about the energy used to power digital services into the public
						domain.
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
						Lays the groundwork for a future where checking if a website/service uses green energy
						is not locked to a single database.
					</p>
				</li>
			</ul>
			<div>
				<h3 class="text-3xl text-center pb-4">Learn more about</h3>
				<div class="flex flex-wrap gap-3 justify-center">
					<a
						class="btn btn-white inline-block min-w-[20ch] rounded-full text-center"
						href="/about#why">Why we need carbon.txt</a
					>
					<a
						href="/about#goals"
						class="btn btn-white inline-block min-w-[20ch] rounded-full text-center">The goals</a
					>
					<a
						href="/about#benefits"
						class="btn btn-white inline-block min-w-[20ch] rounded-full text-center">The benefits</a
					>
				</div>
			</div>
		</div>
	</section>
</div>
