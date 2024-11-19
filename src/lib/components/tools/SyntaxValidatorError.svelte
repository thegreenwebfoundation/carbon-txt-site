<script>
	import Code from '$lib/components/Code.svelte'

	let { text_contents, errors, errorLines } = $props()

	console.log(errorLines)

	let showLines = true

	/* Find the lines that have errors by searching through the text contents

	*/
	const highlightedLines = errorLines
</script>

<section class="w-100" id="result">
	<div class="prose md:w-[80%] mb-4 alert alert-error">
		<h1 class="text-3xl font-bold mb-4">Syntax Error!</h1>
		<p>Your carbon.txt file has {errors?.length > 1 ? 'syntax errors' : 'a syntax error'}.</p>
	</div>

	{#if errors.length > 0}
		<table class="table-auto w-full mb-6">
			<thead>
				<tr>
					<th>Error Type</th>
					<th>Location</th>
					<th>Error Message</th>
				</tr>
			</thead>
			<tbody>
				{#each errors as error}
					<tr>
						<td>{error.type}</td>
						{#if error.line}
							<!-- content here -->
							<td>(Line: {error.line}) {error.loc.join(' > ')}</td>
						{:else}
							<!-- else content here -->
							<td>{error.loc.join(' > ')}</td>
						{/if}
						<td>{error.msg}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
	{#if text_contents.length > 0}
		<Code lang="toml" code={text_contents} {showLines} {highlightedLines} />
	{/if}
</section>

<style>
	table {
		border-radius: 5px;
	}

	thead {
		@apply bg-purple-100;
		/* @apply border-b border-purple-400; */
	}

	th,
	td {
		@apply px-4 py-4;
		@apply border-b border-purple-400;
	}
</style>
