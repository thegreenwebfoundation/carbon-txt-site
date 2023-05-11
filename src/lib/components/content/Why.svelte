<script>
	export let short = false
</script>

<div class="prose">
	{#if short}
		<p>We need a fossil free internet by 2030. But right now there's still not much transparency around how we source power.</p>

		<p>
			To address this, Green Web Foundation has been building a Green Domains database, open sources the code for tracking this and is publishing open datasets about the state of the green web.
			Creating this dataset has been an ongoing effort for years. This has worked for the first few million domains, but the internet is a much bigger, more dynamic place than it was when this
			endeavour was started. Our approach needs to evolve with the times.
		</p>

		<p>Carbon.txt is an evolution on how we publish and track this data.</p>
	{:else}
		<p>We need a fossil free internet by 2030. But right now there's still not much transparency around how we source power.</p>

		<p>
			To address this, Green Web Foundation has been building a Green Domains database, open sources the code for tracking this and is publishing open datasets about the state of the green web.
			Creating this dataset has been an ongoing effort for years. It has involved associating IP address space like IP ranges or Autonomous System Numbers with specific organisations, then manually
			verifying written reports and certificates provided by said organisations to back up their green claims.
		</p>

		<p>
			This has worked for the first few million domains, and first few billion checks against the database. But the internet is a much bigger, more dynamic place than it was when this endeavour was
			started. Our approach needs to evolve with the times.
		</p>

		<p>
			Luckily, today there are more tools that can help. Tools like the Domain Name System (DNS). DNS provides a variety of ways to establish a link between a domain and the party that is hosting or
			operating it. There are also dedicated registries that make it possible to trust that electricity has been generated from clean and renewable energy sources. And, if you know where to look, it's
			possible to tell when efforts to decarbonise energy are credible.
		</p>

		<p>
			Carbon.txt serves to make links between these systems easier to follow. So when there is a claim that a website is running on green energy, you can trace the provenance of supporting evidence
			more easily.
		</p>
	{/if}
</div>
