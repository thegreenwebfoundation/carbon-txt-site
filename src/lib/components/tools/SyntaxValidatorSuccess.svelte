<script>
	import Heading from '../Heading.svelte'
	let { text_contents, form } = $props()
	import Code from '../Code.svelte'

	const pluralisePlugins = (count) => (count === 1 ? 'plugin' : 'plugins')
</script>

<section class="w-100" id="result">
	<hr />
	<section id="result" role="alert" class="w-full">
		<Heading level={2}>Syntax validation</Heading>
		<div class="prose md:w-[80%] mb-4 alert alert-success">
			<p><strong>Success!</strong> The provided carbon.txt file is syntactically valid.</p>
		</div>

		<div class="prose max-w-fit w-full mb-4">
			<Heading level={2}>File contents</Heading>
			<p>The content found in the carbon.txt file is displayed below:</p>

			{#if form?.response.data.upstream && form?.response.data.upstream.providers.length > 0}
				<div class="relative overflow-x-auto">
					<table class="w-full">
						<thead>
							<tr>
								<td colspan="2">Upstream providers</td>
							</tr>
							<tr>
								<th>Domain</th>
								<th>Service</th>
							</tr>
						</thead>
						<tbody>
							{#each form?.response.data.upstream.providers as { domain, service }}
								<tr>
									<td class="whitespace-nowrap">{domain}</td>
									<td class="whitespace-nowrap">{service}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}

			{#if form?.response.data.org && form?.response.data.org.credentials.length > 0}
				<div class="relative overflow-x-auto">
					<table class="w-full">
						<thead>
							<tr>
								<td colspan="3">Organisation credentials</td>
							</tr>
							<tr>
								<th>Domain</th>
								<th>Document Type</th>
								<th>Document URL</th>
							</tr>
						</thead>
						<tbody>
							{#each form?.response.data.org.credentials as { domain, doctype, url }}
								<tr>
									<td class="whitespace-nowrap">{domain}</td>
									<td class="whitespace-nowrap">{doctype}</td>
									<td class="whitespace-nowrap">{url}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}
		</div>

		{#if form?.response.document_data && Object.keys(form?.response.document_data).length > 0}
			<div class="prose mb-4 max-w-fit w-full">
				<Heading level={2}>Linked evidence</Heading>
				<p>Found linked evidence using <b>{Object.keys(form?.response.document_data).length} {pluralisePlugins(Object.keys(form?.response.document_data).length)}</b>.</p>

				{#each Object.keys(form?.response.document_data) as plugin}
					<div class="relative overflow-x-auto max-w-[100vw]">
						<table class="w-full">
							<thead>
								<tr>
									<td colspan="6">Plugin: {plugin}</td>
								</tr>
								<tr>
									<th>Evidence name</th>
									<th>Value</th>
									<th>Unit</th>
									<th>Start date</th>
									<th>End date</th>
									<th>Source file</th>
								</tr>
							</thead>
							<tbody>
								{#each form?.response.document_data[plugin] as { name, value, unit, start_date, end_date, file }}
									<tr>
										<td class="whitespace-nowrap">{name}</td>
										<td class="whitespace-nowrap">{value}</td>
										<td class="whitespace-nowrap">{unit}</td>
										<td class="whitespace-nowrap"><time datetime={start_date}>{start_date}</time></td>
										<td class="whitespace-nowrap"><time datetime={end_date}>{end_date}</time></td>
										<td class="whitespace-nowrap"><a href={file}>{file}</a></td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/each}
			</div>
		{/if}
	</section>

	{#if text_contents?.length > 0}
		<div class="prose mb-4 max-w-fit w-full">
			<Heading level={2}>File contents</Heading>
			<Code lang="toml" code={text_contents} />
		</div>
	{/if}
</section>

<style>
	.result-item {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	table {
		border-radius: 5px;
	}

	thead > tr + tr {
		@apply bg-purple-100;
		/* @apply border-b border-purple-400; */
	}

	thead {
		font-weight: bold;
	}

	thead > tr:first-of-type {
		@apply bg-purple-800;
		@apply text-white;
	}

	th,
	td {
		@apply px-4 py-4;
		@apply border-b border-purple-400;
	}
</style>
