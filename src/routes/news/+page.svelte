<script>
  import { onMount } from "svelte";
  import * as publicEnv from '$env/static/public'
  import { posts } from "./store.js";
  // Components
	import Heading from '$lib/components/Heading.svelte'

  const WP_BLOG_HOST = publicEnv['PUBLIC_WP_BLOG_HOST'] || 'www.thegreenwebfoundation.org';
  const PER_PAGE = publicEnv["PUBLIC_WP_PER_PAGE"] || 10;
  const WP_CATEGORY_ID = publicEnv["PUBLIC_WP_CATEGORY_ID"] || 93;

  onMount(async function() {
    const response = await fetch(`https://${WP_BLOG_HOST}/wp-json/wp/v2/posts?categories=${WP_CATEGORY_ID}&per_page=${PER_PAGE}`);
    const json = await response.json()
    const postsData = json.map((postJson) => {
      const title = postJson.title.rendered;
      const link = postJson.link;
      const time = Intl.DateTimeFormat(
        navigator.language,
        { weekday: 'long', month: 'short', day: 'numeric' }
      ).format(new Date(postJson.date));
      const excerptSource = postJson.excerpt.rendered;
      const excerptDoc = new DOMParser().parseFromString(excerptSource, "text/html")
      const excerptNode = excerptDoc.querySelector("p");
      const dateNode = excerptDoc.createElement("strong")
      dateNode.innerText = `${time}: `;
      excerptNode.prepend(dateNode);
      excerptNode.classList.add("mt-0")
      const readMoreNode = excerptDoc.createElement("a")
      readMoreNode.href = link;
      readMoreNode.target = "_blank";
      readMoreNode.innerText = "[read more]";
      excerptNode.append(" ");
      excerptNode.append(readMoreNode);
      const excerpt = excerptNode.outerHTML;
      return { title, link, excerpt };
    });
    document.getElementById("loading-spinner-container").remove()
    posts.set(postsData);
  });

</script>

<section class="container mx-auto pt-6 md:pt-8 px-2 sm:px-4 border-b-2 last:border-0 border-neutral-200">
	<div class="w-100 mb-[5rem] pt-[2.5rem]">
		<Heading level={1}>News</Heading>
		<p class="prose mt-4 mb-8">Read the latest news about the carbon.txt project from the <a href="https://{WP_BLOG_HOST}/news/" target="_blank">Green Web Foundation blog</a>.</p>
    <div class="prose" id="loading-spinner-container">
      <img src="/loading.gif" alt="Loading..." class="mx-auto my-8 py-8" height="75" width="75" />
    </div>
    {#if $posts && $posts.length > 0}
		  <ul class="prose ml-0">
      {#each $posts as post}
			<li class="pt-3 pb-5 pl-0">
        <Heading level={3} class="pb-1 pt-1 mt-1 mb-0"><a href="{post.link}" class="no-underline hover:underline" target="_blank">{@html post.title}</a></Heading>
        <div class="excerpt">{@html post.excerpt}</div>
      </li>
      {/each}
		</ul>
    {/if}
    <div class="prose more-link text-right mt-8 pt-8">
      <p><a href="https://{WP_BLOG_HOST}/categories/carbon-txt/" target="_blank">Read older posts on the blog</a> »</p>
    </div>
	</div>
</section>
