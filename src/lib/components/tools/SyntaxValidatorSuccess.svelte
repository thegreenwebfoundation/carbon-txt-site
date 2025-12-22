<script>
	import Heading from '../Heading.svelte'
	let { text_contents, form } = $props()
	import Code from '../Code.svelte'

	const pluralisePlugins = (count) => (count === 1 ? 'plugin' : 'plugins')

	const pluginResponse = () => {
		if (form?.response.document_data && Object.keys(form?.response.document_data).length > 0 && Object.keys(form?.response.document_data)[0] !== 'null') {
			return Object.keys(form?.response.document_data).map((plugin) => {
				return {
					name: plugin,
					data: {
						success: form?.response.document_data[plugin].filter((item) => !item.error),
						error: form?.response.document_data[plugin].filter((item) => item.error)
					}
				}
			})
		}
	}

	const pluginData = pluginResponse() || []
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

			<div class="relative overflow-x-auto">
				<table class="w-fulll">
					<thead>
						<tr>
							<td colspan="2">File metadata</td>
						</tr>
						<tr>
							<th>Name</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="whitespace-nowrap"><b>Syntax version: </b></td>
							<td class="whitespace-nowrap">{form?.response.data.version}</td>
						</tr>
						{#if form?.response.data.last_updated}
							<tr>
								<td class="whitespace-nowrap"><b>Last updated on: </b></td>
								<td class="whitespace-nowrap">{form?.response.data.last_updated}</td>
							</tr>
						{/if}
					</tbody>
				</table>
			</div>

			{#if form?.response.data.org && form?.response.data.org.disclosures.length > 0}
				<div class="relative overflow-x-auto">
					<table class="w-full">
						<thead>
							<tr>
								<td colspan="5">Organisation disclosures</td>
							</tr>
							<tr>
								<th>Document Type</th>
								<th>Document URL</th>
								<th>Domain</th>
								<th>Valid until</th>
								<th>Title</th>
							</tr>
						</thead>
						<tbody>
							{#each form?.response.data.org.disclosures as disclosure (disclosure)}
								<tr>
									<td class="whitespace-nowrap">{disclosure.doc_type}</td>
									<td class="break-all"><a href="{disclosure.url}" target="_blank">{disclosure.url}</a></td>
									<td class="whitespace-nowrap">{disclosure.domain || '-'}</td>
									<td class="whitespace-nowrap">{disclosure.valid_until || '-'}</td>
									<td>{disclosure.title || '-'}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}

			{#if form?.response.document_data && Object.keys(form?.response.document_data).length > 0 && Object.keys(form?.response.document_data)[0] !== 'null'}
				<div class="prose mb-4 max-w-fit w-full">
					<Heading level={2}>Linked evidence</Heading>
					<p>Found linked evidence using <b>{Object.keys(form?.response.document_data).length} {pluralisePlugins(Object.keys(form?.response.document_data).length)}</b>.</p>

					{#each pluginData as plugin (plugin)}
						<div class="relative overflow-x-auto max-w-[100vw]">
							{#if plugin.data.success.length > 0}
								<Heading level={3}>Data found</Heading>
								<table class="w-full">
									<thead>
										<tr>
											<td colspan="7">Plugin: {plugin.name}</td>
										</tr>
										<tr>
											<th>Status</th>
											<th>Evidence name</th>
											<th>Value</th>
											<th>Unit</th>
											<th>Start date</th>
											<th>End date</th>
											<th>Source file</th>
										</tr>
									</thead>
									<tbody>
										{#each plugin.data?.success as data (data)}
											<tr>
												<td class="whitespace-nowrap">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														stroke-linecap="round"
														stroke-linejoin="round"
														width="24"
														height="24"
														stroke-width="2"
													>
														<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path> <path d="M9 12l2 2l4 -4"></path>
													</svg>
													Found</td
												>
												<td class="whitespace-nowrap">{data.name}</td>
												<td class="whitespace-nowrap">{data.value}</td>
												<td class="whitespace-nowrap">{data.unit}</td>
												<td class="whitespace-nowrap"><time datetime={data.start_date}>{data.start_date}</time></td>
												<td class="whitespace-nowrap"><time datetime={data.end_date}>{data.end_date}</time></td>
												<td class="whitespace-nowrap"><a href={data.file}>{data.file}</a></td>
											</tr>
										{/each}
									</tbody>
								</table>
							{/if}

							{#if plugin.data.error.length > 0}
								<Heading level={3}>Errors</Heading>
								<table class="w-full">
									<thead>
										<tr>
											<td colspan="7">Plugin: {plugin.name}</td>
										</tr>
										<tr>
											<th>Status</th>
											<th>Evidence name</th>
											<th>Message</th>
										</tr>
									</thead>
									<tbody>
										{#each plugin.data?.error as data (data)}
											<tr data-error>
												<td class="whitespace-nowrap">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														stroke-linecap="round"
														stroke-linejoin="round"
														width="24"
														height="24"
														stroke-width="2"
													>
														<path
															d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
														></path> <path d="M12 16v.01"></path> <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path>
													</svg>
													Not found</td
												>
												<td class="whitespace-nowrap">{data.datapoint_readable_label}</td>
												<td class="whitespace-nowrap"><span class="prose text-wrap max-w-prose">{data.message}</span></td>
											</tr>
										{/each}
									</tbody>
								</table>
							{/if}
						</div>
					{/each}
				</div>
			{/if}

			{#if form?.response.data.upstream && form?.response.data.upstream.services?.length > 0}
				<div class="relative overflow-x-auto">
					<table class="w-full">
						<thead>
							<tr>
								<td colspan="2">Upstream services</td>
							</tr>
							<tr>
								<th>Domain</th>
								<th>Service</th>
							</tr>
						</thead>
						<tbody>
							{#each form?.response.data.upstream.services as service (service)}
								<tr>
									<td class="whitespace-nowrap">{service.domain}</td>
									<td class="whitespace-nowrap">{service.service_type}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}
		</div>
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

	td svg {
		display: inline-block;
		margin-right: 0.5rem;
	}
</style>
