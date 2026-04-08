<script>
	export let level = 2
</script>

{#if level === 2}
	<h2 class={`text-4xl uppercase pb-4 ${$$props.class || ''}`}><slot /></h2>
{:else if level === 3}
	<h3 class={`text-3xl uppercase pb-4 ${$$props.class || ''}`}><slot /></h3>
{:else if level === 1}
	<h1 class={`text-6xl uppercase pb-4 ${$$props.class || ''}`}><slot /></h1>
{:else if level === 4}
	<h4 class={`text-2xl pb-4 ${$$props.class || ''}`}><slot /></h4>
{:else if level === 5}
	<h5 class={`text-xl ${$$props.class || ''}`}><slot /></h5>
{/if}
