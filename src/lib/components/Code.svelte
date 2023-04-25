<script>
	export let lang = 'toml'
	export let code = ''
	export let showComments = false

	// Function that removes comments from TOML code
	function removeComments(toml) {
		let lines = toml.split('\n')
		let newLines = []
		for (let line of lines) {
			if (line.startsWith('#')) {
				continue
			}
			newLines.push(line)
		}
		return newLines.join('\n')
	}

	import { onMount } from 'svelte'
	let hightlight = ''
	onMount(async () => {
		// const shiki = await import('shiki');
		const highlighter = await shiki.getHighlighter({
			theme: 'nord',
			langs: ['toml']
		})
		if (!showComments) {
			code = removeComments(code)
		}
		hightlight = highlighter.codeToHtml(code, lang)
	})
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/shiki"></script>
</svelte:head>

{@html hightlight}
