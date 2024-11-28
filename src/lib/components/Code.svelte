<script>
	import Highlight, { LineNumbers } from 'svelte-highlight'
	import { monokai } from 'svelte-highlight/styles'
	import ini from 'svelte-highlight/languages/ini'

	let { lang, code, showComments, showLines, highlightedLines } = $props()

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

{#if showLines}
	<!-- content here -->
	<Highlight language={ini} {code} let:highlighted>
		<LineNumbers {highlighted} {highlightedLines} />
	</Highlight>
{:else}
	<!-- else content here -->
	<Highlight language={ini} {code} />
{/if}
