<script>
	import Heading from '$lib/components/Heading.svelte'
	import services from '$lib/utils/upstreamServices.js'

	const servicesByCategory = services.reduce((acc, service) => {
		if (!acc[service.category]) {
			acc[service.category] = []
		}

		acc[service.category].push(service)

		return acc
	}, {})

	const readableCategoryName = (category) => {
		return category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
	}
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4">
	<Heading level={1}>Upstream provider services</Heading>
	<article class="prose">
		<p>Below is a list of accepted upstream services that you can use in a carbon.txt file.</p>

		<p>
			If there's a particular service you'd like listed, but which isn't on that page then please contribute to <a href="https://github.com/thegreenwebfoundation/carbon.txt/issues/16">this issue</a>.
		</p>

		<details>
			<summary>Jump to:</summary>
			<ul>
				{#each Object.keys(servicesByCategory) as category (category)}
					<li><a href="#{category}">{readableCategoryName(category)}</a></li>
				{/each}
			</ul>
		</details>

		{#each Object.keys(servicesByCategory) as category (category)}
			<Heading level={2}><span id={category}>{readableCategoryName(category)}</span></Heading>

			{#each servicesByCategory[category] as service (service)}
				<Heading level={3}><code>{service.slug}</code></Heading>
				<p class="font-bold">{service.name}</p>
				<div>{@html service.description}</div>
			{/each}
		{/each}
	</article>
</section>
