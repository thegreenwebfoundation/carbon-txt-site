<script>
	import { page } from '$app/stores'

	console.log($page)
	$: currentPage = (route = '') => ($page.url.pathname === route ? 'no-underline text-green-600' : '')
</script>

<header class="bg-white border-b-2">
	<div class="container mx-auto px-2 sm:px-4">
		<nav class="flex justify-between items-center bg-white py-6 md:justify-start md:space-x-10">
			<div class="flex-grow">
				<a href="/">
					<img width="200px" height="48px" src="/tgwf-logo.svg" alt="The Green Web Foundation logo" />
				</a>
			</div>

			<div class="pl-10 flex gap-3">
				<a href="/about" class={currentPage('/about')}>What is carbon.txt?</a>
				<a href="/how/digital-services" class={currentPage('/how/digital-services')}>Get started</a>
				<a href="/tools/validator" class={currentPage('/tools/validator')}>Validator</a>
				<a href="">Builder</a>
				<a href="/faq">FAQ</a>
			</div>
		</nav>
	</div>
</header>
