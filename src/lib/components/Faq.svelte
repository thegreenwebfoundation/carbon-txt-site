<script>
	import Heading from '$lib/components/Heading.svelte'
</script>

<section class="w-100 mb-[2rem]">
	<details>
		<summary class="text-3xl">
			<slot name="question" />
		</summary>
		<div class="flex flex-auto gap-10 items-center">
			<slot name="answer" />
		</div>
	</details>
</section>
