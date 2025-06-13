<script>
	let { logs, isError = false } = $props()
	let open = isError
</script>

<section class="w-100 mb-4" id="logss">
	<div class="prose md:w-[80%] mb-4">
		<h1 class="text-3xl font-bold mb-4">Log trace</h1>
		<p>Below are the steps performed by the validator.</p>
	</div>

	<!-- <details {() => isError ? "open" : ""}> -->
	<details {open}>
		<summary>View logs</summary>
		<ol>
			{#each logs as log}
				<li>{log}</li>
			{/each}
		</ol>
	</details>
</section>

<style>
	ol {
		font-family: 'Courier New', Courier, monospace;
		list-style-type: decimal-leading-zero;
		padding: 0.5rem;
		border: 1px solid black;
		background: white;
		border-radius: 8px;
	}

	ol > li {
		margin-inline-start: 2.5rem;
	}
</style>
