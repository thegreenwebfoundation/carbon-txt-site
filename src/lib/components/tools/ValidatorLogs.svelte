<script>
	import Heading from '../Heading.svelte'
	let { logs, open = false } = $props()
</script>

<section class="w-100 mb-8" id="logs">
	<div class="prose max-w-full w-full md:w-[80%] mb-4">
		<Heading level={2}>Log trace</Heading>
		<p>Below are the steps performed by the validator.</p>
	</div>

	<!-- <details {() => isError ? "open" : ""}> -->
	<details {open}>
		<summary>View logs</summary>
		<ol>
			{#each logs as log (log)}
				<li>{log}</li>
			{/each}
		</ol>
	</details>
</section>

<style>
	section {
		overflow: hidden;
	}

	ol {
		font-family: 'Courier New', Courier, monospace;
		list-style-type: decimal-leading-zero;
		padding: 0.5rem;
		border: 1px solid black;
		background: white;
		border-radius: 8px;
		overflow: auto;
	}

	ol > li {
		margin-inline-start: 2.5rem;
		margin-block: 0.5rem;
	}
</style>
