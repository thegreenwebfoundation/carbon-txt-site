<script>
	import TWGF_Tree from '$lib/svg/tgwf_logo_tree.svelte'
	import TWGF_Up_Arrow from '$lib/svg/tgwf_logo_up_arrow.svelte'
</script>

<ul class="grid grid-cols-1 md:grid-cols-2 gap-10">
	<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 grid grid-rows-2 gap-4">
		<div class="w-100 flex items-center">
			<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
				<TWGF_Tree width="50px" />
			</div>
			<h3 class="text-3xl inline ml-4">Surface energy sources</h3>
		</div>
		<p>Bring information about the energy used to power digital services and the internet as a whole into the public domain.</p>
	</li>
	<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 flex items-center grid grid-rows-2 gap-4">
		<div class="w-100 flex items-center">
			<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
				<TWGF_Up_Arrow width="50px" />
			</div>
			<h3 class="text-3xl inline ml-4">Decentralise green hosting data</h3>
		</div>
		<p>Lays the groundwork for a future where checking if a website/service uses green energy is not locked to a single database.</p>
	</li>
</ul>
