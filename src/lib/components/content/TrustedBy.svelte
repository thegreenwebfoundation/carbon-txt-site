<script>
	import Heading from '$lib/components/Heading.svelte'

	export let short = false
</script>

<div class="text-center">
	<Heading level={4} class="text-center">Trusted by</Heading>

	<p>Organisations across the globe are using carbon.txt and changing the norms for disclosing sustainability data.</p>

	<div class="container flex flex-wrap justify-center items-center bg-white rounded-lg border border-gray-300 mx-auto my-6 p-6">
		<a href="/tools/validator?auto=true&url=https://www.thegreenwebfoundation.org/carbon.txt"><img class="m-3" width="150px" height="40px" src="/tgwf-logo.svg" alt="Green Web Foundation logo" /></a>
		<a href="/tools/validator?auto=true&url=https://www.scottlogic.com/carbon.txt"><img class="m-3" width="150px" height="40px" src="/users/scott-logic-logo.svg" alt="Scott Logic logo" /></a>
		<a href="/tools/validator?auto=true&url=https://torchbox.com/carbon.txt"><img class="m-3" width="150px" height="40px" src="/users/torchbox.svg" alt="Torchbox logo" /></a>
		<a href="/tools/validator?auto=true&url=https://bigroom.eco/carbon.txt"><img class="m-3" width="70px" height="40px" src="/users/doteco-logo.svg" alt=".eco logo" /></a>
		<a href="/tools/validator?auto=true&url=https://inled.es/wp-content/uploads/2025/04/carbon.txt"><img class="m-3" width="70px" height="40px" src="/users/inled-logo.png" alt="Inled logo" /></a>
		<a href="/tools/validator?auto=true&url=https://meergroenevinkjes.nl/carbon.txt"><img class="m-3" width="150px" height="40px" src="/users/meergroenevinkjes.svg" alt="Meer Groene Vinkjes logo" /></a>
		<a href="/tools/validator?auto=true&url=https://www.neuenarrative.de/carbon.txt"><img class="m-3" width="150px" height="40px" src="/users/neuenarrative.svg" alt="Neue Narrative logo" /></a>
		<a href="/tools/validator?auto=true&url=https://www.feelcreated.com/carbon.txt"><img class="m-3" width="120px" height="40px" src="/users/feelcreated-logo.svg" alt="Feel Created logo" /></a>
		<a href="/tools/validator?auto=true&url=https://worldoflouis.com/carbon.txt"><img class="m-3" width="50px" height="40px" src="/users/wol-logo.png" alt="World of Louis logo" /></a>
		<a href="/tools/validator?auto=true&url=https://www.buddyworks.co.jp/carbon.txt"><img class="m-3" width="250px" height="40px" src="/users/buddyworks_logo.svg" alt="World of Louis logo" /></a>
		<a href="/tools/validator?auto=true&url=https://wagtail.org/carbon.txt"><img class="m-3" width="109px" height="40px" src="/users/wagtail.svg" alt="Wagtail CMS logo" /></a>
	</div>
</div>
