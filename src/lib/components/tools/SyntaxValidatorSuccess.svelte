<script>
	let { text_content } = $props()
	import Code from '$lib/components/Code.svelte'
</script>

<section class="w-100" id="result">
	<div class="prose md:w-[80%]">
		<h1 class="text-3xl font-bold mb-4">Success!</h1>
		<p>Your carbon.txt file is syntactically valid.</p>
	</div>
	<Code lang="toml" code={text_content} />
</section>
