<script>
	import TWGF_Tree from '$lib/svg/tgwf_logo_tree.svelte'
	import TWGF_Up_Arrow from '$lib/svg/tgwf_logo_up_arrow.svelte'
	import TWGF_Bolt from '$lib/svg/tgwf_logo_bolt.svelte'
</script>

<ul class="grid grid-cols-1 md:grid-cols-2 gap-10">
	<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 grid grid-rows-2 gap-4">
		<div class="w-100 flex items-center">
			<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
				<TWGF_Tree width="50px" />
			</div>
			<h3 class="text-3xl inline ml-4">Surface organisational sustainability data</h3>
		</div>
		<p>Bring data reported in organisational sustainability reports and disclosures into the public domain in a format that is easily read by both humans and machines.</p>
	</li>
	<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 flex items-center grid grid-rows-2 gap-4">
		<div class="w-100 flex items-center">
			<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
				<TWGF_Up_Arrow width="50px" />
			</div>
			<h3 class="text-3xl inline ml-4">Extendible syntax</h3>
		</div>
		<p>
			A simple, extendible syntax that can be used to describe a wide range of sustainability data, from carbon emissions to social impact, and be easily updated as new data types and mandated
			reporting requirements emerge.
		</p>
	</li>
	<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8 flex items-center grid grid-rows-2 gap-4">
		<div class="w-100 flex items-center">
			<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
				<TWGF_Bolt width="50px" />
			</div>
			<h3 class="text-3xl inline ml-4">Plugin architecture</h3>
		</div>
		<p>
			A plugin architecture that allows for the easy integration of <a href="https://github.com/thegreenwebfoundation/carbon-txt-validator">carbon.txt validation tools</a> into existing platforms and software,
			enabling discovery and validation of sustainability data at scale across a range of use cases.
		</p>
	</li>
</ul>
