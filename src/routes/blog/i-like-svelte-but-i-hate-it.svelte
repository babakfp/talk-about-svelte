<script>
  import { page } from '$app/stores'
  import { posts } from '$store/posts.js'
	import { ReadThisToo, PostDate } from '$lib/Blog'
  const { title, description, date, readThisToo } = $posts.filter(post => post.href === $page.url.pathname)[0]

	import README from '$content/i-like-svelte-but-i-hate-it/README.md'
</script>

<svelte:head>
	<title>{title} - What nobody tells you!</title>
	<meta name="description" content={description} />
</svelte:head>
<ReadThisToo {...readThisToo} />
<PostDate {...date} />

<README />
