<script>
	import Heading from '$lib/components/Heading.svelte'
	import Callout from '$lib/components/Callout.svelte'

	export let short = false
</script>

<Heading level={2} class="text-center pb-0">What data can you share and find?</Heading>

<div class="my-8 md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-3">

	<Callout>
		<Heading level={5}>CSRD reports</Heading>
		<p class="mt-0">The Corporate Sustainability Reporting Directive (CRSD) is an EU law requiring certain companies to disclose
		data in accordance with the European Sustainability Reporting Standards (ESRS).
		</p>
	</Callout>

	<Callout>
		<Heading level={5}>Certificates</Heading>
		<p class="mt-0">Examples include Renewable Energy Certificates (RECs), Power Purchase Agreements (PPAs) or public contracts
			that show use of 100% green energy.
		</p>
	</Callout>

	<Callout>
		<Heading level={5}>ESG reports</Heading>
		<p class="mt-0">Environmental, Social and Governance (ESG) reports are detailed
			  disclosures of a company’s initiatives, performance and impact in these three key areas.
		</p>
	</Callout>	

	<Callout>
		<Heading level={5}>TCS estimates</Heading>
		<p class="mt-0">Technology Carbon Standard (TCS) carbon emission estimates are based on categorised mappings 
			of an organisation's use of digital and be shared as structured JSON data.
		</p>
	</Callout>
</div>
