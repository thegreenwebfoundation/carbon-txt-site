<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<div class="relative block">
	<div
		class="block fixed -z-50 left-0 w-1/2 -top-24 bg-no-repeat bg-right bg-[length:100%_100%] bg-gradient-to-r from-green-500"
		style="height: calc(100% + 100px);"
	/>
	<slot />
</div>
<Footer />
