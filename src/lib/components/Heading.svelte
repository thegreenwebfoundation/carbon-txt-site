<script>
	export let level = 2
</script>

{#if level === 2}
	<h2 class="text-4xl uppercase pb-4"><slot /></h2>
{:else if level === 3}
	<h3 class="text-3xl uppercase pb-4"><slot /></h3>
{:else if level === 1}
	<h1 class="text-6xl uppercase pb-4"><slot /></h1>
{/if}
