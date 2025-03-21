<script>
	import Heading from '$lib/components/Heading.svelte'
	import TGWF_Bolt from '$lib/svg/tgwf_logo_bolt.svelte'
	import TGWF_Question from '$lib/svg/tgwf_logo_question.svelte'
	import TGWF_Tree from '$lib/svg/tgwf_logo_tree.svelte'
</script>

<section>
	<div class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 mb-[2rem]">
		<div class="prose md:w-[80%]">
			<Heading level={1}>Tools</Heading>
			<p>A collection of tools to help you get started with implementing, understanding, and using carbon.txt.</p>
		</div>
	</div>
</section>

<section>
	<ul class="grid grid-cols-1 md:grid-cols-2 gap-10 my-[2rem]">
		<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8">
			<a href="tools/builder" class="grid grid-rows-2 gap-4 no-underline">
				<div class="w-100 flex items-center">
					<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
						<TGWF_Tree width="50px" />
					</div>
					<h4 class="text-3xl inline ml-4">File Builder</h4>
				</div>
				<p>Create a carbon.txt file for your organisation.</p>
			</a>
		</li>
		<li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8">
			<a href="/tools/validator" class="grid grid-rows-2 gap-4 no-underline">
				<div class="w-100 flex items-center">
					<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
						<TGWF_Question width="50px" />
					</div>
					<h4 class="text-3xl inline ml-4">Validator</h4>
				</div>
				<p>Check a carbon.txt file works and view its content in a human-readable format.</p>
			</a>
		</li>
		<!-- <li class="bg-white border-2 border-dark-gray rounded-3xl h-100-l p-8">
			<a href="/tools/checker" class="grid grid-rows-2 gap-4 no-underline">
				<div class="w-100 flex items-center">
					<div class="border-r-2 border-dark-gray h-100 pr-4 inline-block">
						<TGWF_Bolt width="50px" />
					</div>
					<h4 class="text-3xl inline ml-4">File checker</h4>
				</div>
				<p>Submit a URL for a carbon.txt file and view the content in a human-readable format.</p>
			</a>
		</li> -->
	</ul>
</section>
