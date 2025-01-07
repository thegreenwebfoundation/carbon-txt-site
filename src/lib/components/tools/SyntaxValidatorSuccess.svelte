<script>
	let { text_contents } = $props()
	import Code from '$lib/components/Code.svelte'
</script>

<section class="w-100" id="result">
	<div class="prose md:w-[80%] alert alert-success">
		<h1 class="text-3xl font-bold mb-4">Success!</h1>
		<p>Your carbon.txt file is syntactically valid.</p>
	</div>
	{#if text_contents?.length > 0}
		<Code lang="toml" code={text_contents} />
	{/if}
</section>
