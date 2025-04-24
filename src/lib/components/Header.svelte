<script>
	import NoticeBanner from './NoticeBanner.svelte'
	import { page } from '$app/stores'

	$: currentPage = (route = '') => ($page.route.id === route ? 'no-underline text-black-600 font-bold' : '')
</script>

<header class="bg-white border-b-2">
	<div class="container mx-auto px-2 sm:px-4">
		<nav class="flex flex-wrap justify-center md:justify-start items-center bg-white py-6 gap-x-8 gap-y-4 min-[400px]:gap-y-2">
			<div class="">
				<a href="/">
					<img width="50px" height="50px" src="/carbontxt-logo.svg" alt="carbon.txt logo" />
				</a>
			</div>
			<div class="flex-grow border-l-2 text-medium pl-6 h-12 flex items-center">
				<p class="font-bold"><a href="/" class="no-underline hover:underline">carbon.txt</a></p>
			</div>

			<div class="flex gap-3 w-full sm:w-auto min-[400px]:gap-6 sm:gap-6 flex-wrap items-center justify-end">
				<a href="/tools" class={currentPage('/tools')}>Tools</a>
				<a href="/about" class={currentPage('/about')}>Use cases</a>
				<a href="/faq" class={currentPage('/faq')}>FAQ</a>
				<a href="/quickstart" class="{currentPage('/quickstart')} btn bg-blue-400 text-white hover:bg-blue-200 hover:text-black">Get started</a>
			</div>
		</nav>
	</div>
</header>
<NoticeBanner />
