<script>
	import Heading from '$lib/components/Heading.svelte'

	export let short = false
</script>

<div class="text-center">
	<Heading level={4} class="text-center">Trusted by</Heading>

	<p>Organisations across the globe are using carbon.txt and changing the norms for disclosing sustainability data.</p>

	<div class="max-w-2xl flex flex-wrap gap-10 justify-center items-center bg-white rounded-lg border border-gray-300 mx-auto my-6 p-6">
		<a href="https://www.thegreenwebfoundation.org/carbon.txt"><img width="150px" height="40px" src="/tgwf-logo.svg" alt="Green Web Foundation logo" /></a>
		<a href="https://www.scottlogic.com/carbon.txt"><img width="150px" height="40px" src="/users/scott-logic-logo.svg" alt="Scott Logic logo" /></a>
		<a href="https://bigroom.eco/carbon.txt"><img width="70px" height="40px" src="/users/doteco-logo.svg" alt=".eco logo" /></a>
		<a href="https://inled.es/wp-content/uploads/2025/04/carbon.txt"><img width="70px" height="40px" src="/users/inled-logo.png" alt="Inled logo" /></a>
		<a href="https://meergroenevinkjes.nl/carbon.txt"><img width="150px" height="40px" src="/users/meergroenevinkjes.svg" alt="Meer Groene Vinkjes logo" /></a>
		<a href="https://www.neuenarrative.de/carbon.txt"><img width="150px" height="40px" src="/users/neuenarrative.svg" alt="Neue Narrative logo" /></a>
		<a href="https://www.feelcreated.com/carbon.txt"><img width="120px" height="40px" src="/users/feelcreated-logo.svg" alt="Feel Created logo" /></a>
		<a href="https://worldoflouis.com/carbon.txt"><img width="50px" height="40px" src="/users/wol-logo.png" alt="World of Louis logo" /></a>
	</div>
</div>