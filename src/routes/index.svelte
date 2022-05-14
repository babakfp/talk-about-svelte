<script>
	import { posts } from '$store/posts.js'
	import { PostCard } from '$lib/Blog'
</script>

<svelte:head>
	<title>Talk About Svelte</title>
</svelte:head>

<h1 class="text-3xl text-center font-semibold text-gray-200 lg:text-3xl lg:font-bold">Talk About Svelte</h1>

<div class="grid gap-4 mt-8">
	{#each $posts as post}
		<PostCard {...post} />
	{/each}
</div>
