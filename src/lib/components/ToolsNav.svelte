<script>
	import TGWF_Bolt from '$lib/svg/tgwf_logo_bolt.svelte'
	import TGWF_Question from '$lib/svg/tgwf_logo_question.svelte'
	import TGWF_Tree from '$lib/svg/tgwf_logo_tree.svelte'

	let { currentView } = $props()
</script>

<section class="w-100">
	<div class="container mx-auto p-6 md:pb-[4rem] md:pt-[4rem] px-2 sm:px-4 max-w-[700px]">
		<ul class="grid gap-3 w-100 justify-center md:grid-cols-3">
			<li data-current={currentView === 'checker'} class="bg-white border-2 border-dark-gray rounded-3xl">
				<a href="/tools/checker" class="grid gap-4 no-underline p-4">
					<div class="w-100 flex justify-center">
						<p>File Checker</p>
					</div>
				</a>
			</li>
			<li data-current={currentView === 'validator'} class="bg-white border-2 border-dark-gray rounded-3xl">
				<a href="/tools/validator" class="grid gap-4 no-underline p-4">
					<div class="w-100 flex justify-center">
						<p>Syntax Validator</p>
					</div>
				</a>
			</li>
			<li data-current={currentView === 'builder'} class="bg-white border-2 border-dark-gray rounded-3xl">
				<a href="/tools/builder" class="grid gap-4 no-underline p-4">
					<div class="w-100 flex justify-center">
						<p>File Builder</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</section>

<style>
	[data-current='true'] {
		@apply bg-fuchsia-700 text-white;
	}

	li:not([data-current='true']):hover {
		@apply bg-fuchsia-100;
	}
</style>
