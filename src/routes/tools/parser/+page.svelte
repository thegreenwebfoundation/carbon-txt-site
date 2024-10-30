<script>
	// NOTE: There is currently no way to test this validator locally as it relies on Cloudflare Workers KV.

	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'
</script>

<section class="w-100" id="intro">
	<div class="relative block">
		<div class="absolute -z-50 right-0 w-1/2 -top-24 bg-no-repeat bg-right bg-[length:100%_100%] bg-gradient-to-l from-green-500 hidden md:block" style="height: calc(100% + 100px);" />
		<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 pb-[5rem] min-h-[80vh] lg:grid lg:grid-cols-2 lg:items-center">
			<div class="mb-10 prose md:w-[80%]">
				<Heading level={1}>Parser</Heading>
				<p>Use this parser to check the content of a carbon.txt file for a domain.</p>
			</div>
		</div>
	</div>
</section>
<section id="cta" class="w-100 bg-neutral-900">
	<div class="container mx-auto p-6 md:pb-[4rem] md:pt-[4rem] px-2 sm:px-4 text-white text-center flex flex-col justify-center gap-3">
		<Heading level={2}>What is carbon.txt?</Heading>
		<p>If you're new to carbon.txt we recommend reading about it first.</p>
		<div class="w-max mt-[2rem] mx-auto">
			<Button link="/about">What is carbon.txt?</Button>
		</div>
	</div>
</section>
