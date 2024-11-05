<script>
	let { text_content } = $props()
	import Code from '$lib/components/Code.svelte'
	let showLines = true
</script>

<section class="w-100" id="result">
	<div class="prose md:w-[80%]">
		<h1 class="text-3xl font-bold mb-4">Error!</h1>
		<p>Your carbon.txt file has a syntax error.</p>
	</div>
	<Code lang="toml" code={text_content} {showLines} />
</section>
