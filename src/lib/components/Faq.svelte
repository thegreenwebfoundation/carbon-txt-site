<script>
	import Heading from '$lib/components/Heading.svelte'
</script>

<section class="w-100 mb-[10rem]">
	<Heading level={2}><slot name="question" /></Heading>
	<div class="flex flex-auto gap-10 items-center">
		<slot name="answer" />
	</div>
</section>
