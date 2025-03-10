<script>
	import { dev } from '$app/environment'
</script>

<footer class="bg-white border-t-2">
	<div class="container mx-auto p-4 sm:px-4">
		<nav class="flex gap-[2rem] justify-between items-center flex-wrap py-6 md:justify-start md:space-x-1">
			<div class="flex-grow">
				<p class="mb-3">Carbon.txt is a</p>
				<a href="https://thegreenwebfoundation.org">
					<img width="150px" height="40px" src="/tgwf-logo.svg" alt="Green Web Foundation logo" />
				</a>
				<p class="mt-3">initiative.</p>
			</div>

			<div class="flex gap-[2rem] flex-wrap justify-start">
				<div class="flex flex-col gap-3">
					<p class="text-xl mb-0">Green Web Foundation</p>
					<ul>
						<li class="mb-3">
							<a href="https://thegreenwebfoundation.org">Main website</a>
						</li>
						<li class="my-3">
							<a href="https://github.com/thegreenwebfoundation">Github</a>
						</li>
						<li class="mt-3">
							<a href="https://www.linkedin.com/company/green-web-foundation/">LinkedIn</a>
						</li>
					</ul>
				</div>
				<div class="flex flex-col gap-3">
					<p class="text-xl mb-0">Carbon.txt</p>
					<ul>
						<li class="mb-3">
							<a href="https://carbontxt.org">Homepage</a>
						</li>
						<li class="my-3">
							<a href="https://github.com/thegreenwebfoundation/carbon.txt">Github</a>
						</li>
						<li class="mt-3">
							<a href="mailto:fershad@thegreenwebfoundation.org">Support email</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</footer>

{#if !dev}
	<script async defer src="https://scripts.withcabin.com/hello.js"></script>
{/if}
