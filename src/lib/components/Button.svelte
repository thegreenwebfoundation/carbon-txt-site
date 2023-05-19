<script>
	import { createEventDispatcher } from 'svelte'

	export let white = false
	export let link = ''
	export let inline = false
	export let icon = false
	export let mouseOverEventDetail = ''

	const dispatch = createEventDispatcher()

	function dispatchMouseOverEvent() {
		if (mouseOverEventDetail.length > 0) {
			dispatch('mouseOverEvent', {
				type: mouseOverEventDetail
			})
		}
	}
</script>

<a
	href={link}
	class="btn {white ? 'btn-white' : ''} {inline ? 'inline-block' : 'block'} min-w-[20ch] rounded-full {icon ? 'flex items-center justify-center gap-3' : 'text-center'}"
	on:mouseover={dispatchMouseOverEvent}
	on:focus={dispatchMouseOverEvent}><slot /></a
>
