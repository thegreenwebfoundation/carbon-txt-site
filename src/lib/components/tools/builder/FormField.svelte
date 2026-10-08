<script>
	let { name, label, hint = '', error = '', wide = false, children } = $props()
</script>

<div class="form-group" class:wide>
	<span>
		<label for={name}>{label}</label>
		{#if hint}
			<small>{@html hint}</small>
		{/if}
	</span>

	{@render children()}

	{#if error}
		<div class="p-2 border rounded alert__error mt-1"><small>{error}</small></div>
	{/if}
</div>

<style>
	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.form-group small {
		display: block;
	}

	.form-group.wide {
		width: 100%;
	}
</style>
