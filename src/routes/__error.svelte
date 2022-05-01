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

		<hr class="border-white opacity-20 my-12">

		<!-- {#if !dev} -->
			<div class="grid gap-4">
				{#each $posts as post}
					<PostCard {...post} />
				{/each}
			</div>
		<!-- {/if} -->

	{:else}

		<h2 class="text-center">{error.message}</h2>

		{#if error.stack && dev}
			<code class="scrollbar scrollbar-x-spacing-lg block mt-8 p-4 bg-gray-200 rounded dir-ltr lg:p-8">
				<pre>
					{error.stack}
				</pre>
			</code>
		{/if}

	{/if}
</div>
