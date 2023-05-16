<script>
	import Highlight, { LineNumbers } from 'svelte-highlight'
	import { monokai } from 'svelte-highlight/styles'
	import ini from 'svelte-highlight/languages/ini'

	export let lang = 'toml'
	export let code = ''
	export let showComments = false

	if (lang === 'toml' && !showComments) {
		code = removeComments(code)
	}

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
</script>

<svelte:head>
	{@html monokai}
</svelte:head>

<Highlight language={ini} {code} />
