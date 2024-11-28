<script>
	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Button from '$lib/components/Button.svelte'
</script>

<div class="relative block">
	<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
		<slot />
	</div>
</div>

<section id="cta" class="w-100 bg-neutral-900">
	<div class="container mx-auto p-6 md:pb-[4rem] md:pt-[4rem] px-2 sm:px-4 text-white text-center flex flex-col justify-center gap-3">
		<Heading level={2}>What is carbon.txt?</Heading>
		<p>If carbon.txt you're new to carbon.txt we recommend reading about it first.</p>
		<div class="w-max mt-[2rem] mx-auto">
			<Button link="/about">What is carbon.txt?</Button>
		</div>
	</div>
</section>
