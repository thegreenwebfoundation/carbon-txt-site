<script>
	export let short = false
</script>

<div class="prose">
	{#if short}
		<p>
			The Green Web Foundation is oriented around the world reaching a fossil free internet by 2030. For this to be possible, the firms that make up large parts of the internet need to do two main
			things:
		</p>

		<ol>
			<li>Make clear public commitments to reduce their carbon emissions</li>
			<li>Follow through on their commitments with meaningful action.</li>
		</ol>

		<p>
			Carbon.txt is our open-source project to make this sustainability information easier to discover. It is a spec that defines predictable, consistent places on any website to publish
			sustainability data so that both humans and machines can find it.
		</p>
	{:else}
		<p>
			The Green Web Foundation is oriented around the world reaching a fossil free internet by 2030. For this to be possible, the firms that make up large parts of the internet need to do two main
			things:
		</p>

		<ol>
			<li>Make clear public commitments to reduce their carbon emissions</li>
			<li>Follow through on their commitments with meaningful action.</li>
		</ol>

		<p>
			However, at this time, being able to verify that an organisation has done part one of that process, and is active in undertaking part two remains a challenge. Reliably finding credible data in
			formats that can be easily interpreted by humans and machines remains a major limitation.
		</p>

		<p>
			Carbon.txt is our open-source project to make this sustainability information easier to discover. It is a spec that defines predictable, consistent places on any website to publish
			sustainability data so that both humans and machines can find it.
		</p>

		<p>
			The spec, and tooling around it, also aims to be extendible so that it can be applied to make organisational disclosures discoverable for any number of areas such as water usage, modern slavery,
			etc.
		</p>
	{/if}
</div>
