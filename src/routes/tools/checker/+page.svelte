<script>
	// NOTE: There is currently no way to test this validator locally as it relies on Cloudflare Workers KV.

	// Components
	import Heading from '$lib/components/Heading.svelte'
	import Checker from '$lib/components/tools/Checker.svelte'
	import ToolsNav from '$lib/components/ToolsNav.svelte'

	/** @type {{ data: import('./$types').PageData, form: import('./$types').ActionData }} */
	let { data, form } = $props()

	const pluralisePlugins = (count) => (count === 1 ? 'plugin' : 'plugins')

	$effect(() => {
		if (form?.response) {
			// Scroll to the result section
			document.getElementById('result').scrollIntoView({ behavior: 'smooth' })
		}
	})
</script>

<ToolsNav currentView="checker" />

<section class="w-full" id="intro">
	<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 pb-[5rem] lg:grid lg:grid-cols-2 lg:items-center">
		<div class="prose md:w-[80%] mb-4">
			<Heading level={1}>File checker</Heading>
			<p>Use this tool to check the content of a carbon.txt file hosted online.</p>
			<p class="italic">
				Note: At this stage, the checker will simply validate the file's content for syntax errors. In the future, we will implement additional capabilities which allow for the contents of carbon.txt
				files and associated linked documents to be parsed and displayed.
			</p>
		</div>
		<Checker textInput={form?.url || ''} />
	</div>
</section>

{#if form?.response.success}
	<hr />
	<section id="result" role="alert" class="w-full">
		<Heading level={2}>Syntax validation</Heading>
		<div class="prose md:w-[80%] mb-4 alert alert-success">
			<p><strong>Success!</strong> The provided carbon.txt file is syntactically valid.</p>
		</div>

		<div class="prose w-full mb-4">
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
			<div class="prose mb-4 w-full">
				<Heading level={2}>Linked evidence</Heading>
				<p>Found linked evidence using <b>{Object.keys(form?.response.document_data).length} {pluralisePlugins(Object.keys(form?.response.document_data).length)}</b>.</p>

				{#each Object.keys(form?.response.document_data) as plugin}
					<div class="relative overflow-x-auto">
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
{:else if form?.response.errors}
	<hr />
	<section id="result" role="alert" class="w-100">
		<div class="prose md:w-[80%] mb-4 alert alert-error">
			<h1 class="text-3xl font-bold mb-4">Errors</h1>
			<p>The provided carbon.txt file contains errors.</p>
			<p>Use our <a href="/tools/validator?url={form?.url}">Validator tool</a> to check the content of the file and identify the errors.</p>
			<p>For help creating a carbon.txt file, please use our <a href="/tools/builder">Builder</a>.</p>
		</div>
	</section>
{:else if form?.response.error}
	<hr />
	<section id="result" role="alert" class="w-100">
		<div class="prose md:w-[80%] mb-4 alert alert-error">
			<h1 class="text-3xl font-bold mb-4">Error</h1>
			<p>Unable to check the provided file. Please submit a valid TOML carbon.txt file for checking.</p>
			<p>For help creating a carbon.txt file, please use our <a href="/tools/builder">Builder</a>.</p>
		</div>
	</section>
{/if}

<ToolsNav currentView="checker" />

<style>
	#result {
		margin-top: 3rem;
	}

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
