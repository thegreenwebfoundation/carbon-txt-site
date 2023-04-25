<script>
	export let lang = 'toml';
	export let code = '';
	import { onMount } from 'svelte';
	let hightlight = '';
	onMount(async () => {
		// const shiki = await import('shiki');
		const highlighter = await shiki.getHighlighter({
			theme: 'nord',
			langs: ['toml']
		});
		hightlight = highlighter.codeToHtml(code, lang);
	});
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/shiki"></script>
</svelte:head>

{@html hightlight}
