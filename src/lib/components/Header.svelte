<script>
	import NoticeBanner from './NoticeBanner.svelte'
	import { page } from '$app/stores'

	$: currentPage = (route = '') => ($page.route.id === route ? 'no-underline text-black-600 font-mono font-bold' : '')
</script>

<header class="bg-white border-b-2">
	<div class="container mx-auto px-2 sm:px-4">
		<nav class="flex flex-wrap justify-center md:justify-start items-center bg-white py-6 gap-8">
			<div class="">
				<a href="https://thegreenwebfoundation.org">
					<img width="200px" height="48px" src="/tgwf-logo.svg" alt="The Green Web Foundation logo" />
				</a>
			</div>
			<div class="flex-grow border-l text-medium pl-8 h-12 flex items-center">
				<p class="font-bold">carbon.txt</p>
			</div>

			<div class="flex gap-3 flex-wrap">
				<a href="/" class={currentPage('/')}>Home</a>
				<a href="/about" class={currentPage('/about')}>What is carbon.txt?</a>
				<a href="/syntax" class={currentPage('/syntax')}>Syntax</a>
				<a href="/quickstart" class={currentPage('/quickstart')}>Get started</a>
				<a href="/tools" class={currentPage('/tools')}>Tools</a>
				<a href="/faq" class={currentPage('/faq')}>FAQ</a>
			</div>
		</nav>
	</div>
</header>
<NoticeBanner />
