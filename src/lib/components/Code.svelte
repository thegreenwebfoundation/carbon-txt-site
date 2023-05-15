<script>
	import Highlight from 'svelte-highlight'
	import github from 'svelte-highlight/styles/github-dark'
	import nord from 'svelte-highlight/styles/nord'
	import papercolorDark from 'svelte-highlight/styles/papercolor-dark'
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
