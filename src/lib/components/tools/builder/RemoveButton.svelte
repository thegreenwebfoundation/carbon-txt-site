<script>
	let { onRemove } = $props()
</script>

<button onclick={onRemove} aria-label="Remove">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="stroke-red-700"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M18 6l-12 12" />
		<path d="M6 6l12 12" />
	</svg>
</button>
