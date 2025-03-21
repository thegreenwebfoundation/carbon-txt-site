<script>
	let { id } = $$props
	// Get the ID from the page URL using the hash
	let faqId = null
	try {
		faqId = location.hash.slice(1)
	} catch (e) {
		console.error(e)
	}
	// If there's as faqId, the set the corresponding dialog to open
	if (faqId && faqId === id) {
		// Set the dialog to open
		// This will trigger the dialog to open
		// and scroll the dialog into view
		setTimeout(() => {
			try {
				document.getElementById(id).open = true
				scrollTo({
					top: document.getElementById(id).offsetTop,
					behavior: 'smooth'
				})
			} catch (e) {
				console.error(e)
			}
		}, 0)
	}
</script>

<section class="w-100 pb-[1rem] mb-[2rem] border-b border-gray-200 last:border-0">
	<details {id}>
		<summary class="text-3xl">
			<slot name="question" />
		</summary>
		<div class="flex flex-auto gap-10 items-center mt-[1rem]">
			<slot name="answer" />
		</div>
	</details>
</section>

<style>
	details > summary {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	summary {
		cursor: pointer;
	}

	summary::marker,
	summary::-webkit-details-marker {
		display: none;
	}

	details > summary::before {
		content: url('data:image/svg+xml;charset=UTF-8, <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M7 7L7.70711 7.70711L7 8.41421L6.29289 7.70711L7 7ZM13.7071 1.70711L7.70711 7.70711L6.29289 6.29289L12.2929 0.292892L13.7071 1.70711ZM6.29289 7.70711L0.292893 1.70711L1.70711 0.292892L7.70711 6.29289L6.29289 7.70711Z" fill="black"/></svg>');
		display: block;
		font-weight: 700;
		height: 100%;
		/* position: grid; */
		/* place-content: center; */
		/* top: -2px; */
		transform: translateY(-0.5ex);
	}

	details[open] > summary::before {
		content: url('data:image/svg+xml;charset=UTF-8, <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"  version="1.1"><path d="M7 2L6.29289 1.29289L7 0.585787L7.70711 1.29289L7 2ZM0.292893 7.29289L6.29289 1.29289L7.70711 2.70711L1.70711 8.70711L0.292893 7.29289ZM7.70711 1.29289L13.7071 7.2929L12.2929 8.70711L6.29289 2.70711L7.70711 1.29289Z" fill="black"/></svg>');
		/* transform: rotate3d(0, 0, 1, 0deg); */
	}

	details {
		padding: 1rem;
	}

	details[open] {
		border: 1px solid #e2e8f0;
	}
</style>
