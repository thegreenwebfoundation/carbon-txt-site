<script>
	import { page } from '$app/stores'

	$: currentPage = (route = '') => ($page.route.id === route ? 'no-underline text-green-600 font-mono font-bold' : '')
</script>

<header class="bg-white border-b-2">
	<div class="container mx-auto px-2 sm:px-4">
		<nav class="flex flex-wrap justify-center md:justify-between items-center bg-white py-6 md:space-x-10 gap-[2rem]">
			<div class="">
				<a href="/">
					<img width="200px" height="48px" src="/tgwf-logo.svg" alt="The Green Web Foundation logo" />
				</a>
			</div>

			<div class="flex gap-3 flex-wrap">
				<a href="/" class={currentPage('/')}>Home</a>
				<a href="/about" class={currentPage('/about')}>What is carbon.txt?</a>
				<a href="/how/digital-services" class={currentPage('/how/digital-services')}>Get started</a>
				<a href="/tools/validator" class={currentPage('/tools/validator')}>Validator</a>
				<a href="/tools/builder" class={currentPage('/tools/builder')}>Builder</a>
				<a href="/faq" class={currentPage('/faq')}>FAQ</a>
			</div>
		</nav>
	</div>
</header>
