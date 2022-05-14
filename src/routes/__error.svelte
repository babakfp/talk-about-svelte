<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		}
	}
</script>

<script>
	import { dev } from '$app/env'

	import { posts } from '$store/posts.js'
	import { PostCard } from '$lib/Post'

	export let error
	export let status
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div>
	<h1 class="text-center font-bold text-7xl">{status}</h1>

	{#if status === 404}

		<p class="mt-4 text-center">The page you were looking for could not be found.</p>

		<hr class="border-white opacity-10 my-8">

		<div class="grid gap-4">
			{#each $posts.reverse() as post}
				<PostCard {...post} />
			{/each}
		</div>

	{:else}

		<h2 class="mt-4 text-center">{error.message}</h2>

		{#if error.stack && dev}
			<pre class="language-undefined !mt-12">
				<code>
					{error.stack}
				</code>
			</pre>
		{/if}

	{/if}
</div>
