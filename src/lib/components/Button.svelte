<script>
	export let white = false;
	export let link = '';
	export let inline = false;
	export let icon = false;
</script>

<a
	href={link}
	class="btn {white ? 'btn-white' : ''} {inline
		? 'inline-block'
		: 'block'} min-w-[20ch] rounded-full {icon
		? 'flex items-center justify-center gap-3'
		: 'text-center'}"><slot /></a
>
