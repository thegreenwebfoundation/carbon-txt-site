<script>
	// Components
	import Heading from '$lib/components/Heading.svelte';
	import Code from '$lib/components/Code.svelte';
	import Button from '$lib/components/Button.svelte';

	import { digitalServiceToml, websiteToml } from '$lib/utils/exampleToml';

	// Logos, SVGs and things
	import TWGF_Tree from '$lib/svg/tgwf_logo_tree.svelte';
	import TWGF_Up_Arrow from '$lib/svg/tgwf_logo_up_arrow.svelte';

	let exampleToml = 'digitalService';
	function handleMouseOver(event) {
		exampleToml = event.detail.type;
	}
</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4" id="intro">
	<div class="min-h-[80vh] lg:grid lg:grid-cols-2 lg:items-center">
		<div class="p-8">
			<Heading level={1}>Implementing carbon.txt</Heading>
			<p class="mb-10">
				How you implement carbon.txt will depend on whether you are a provider of managed digital
				services, a self-hosted website operator, or an individual website owner.
			</p>
			<div class="flex flex-wrap gap-3 justify-start">
				<Button
					link="#digital-services"
					white={true}
					mouseOverEventDetail="digitalService"
					on:mouseOverEvent={handleMouseOver}>For digital services and self-hosted sites</Button
				>
				<Button
					link="#website-owners"
					white={true}
					mouseOverEventDetail="website"
					on:mouseOverEvent={handleMouseOver}>For website owners</Button
				>
			</div>
		</div>
		<div class="p-8 max-w-100">
			{#if exampleToml === 'website'}
				<Code code={websiteToml} />
			{:else}
				<Code code={digitalServiceToml} />
			{/if}
		</div>
	</div>
</section>
