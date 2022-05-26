<script>
	export let title
	export let href
	export let isNew = false
</script>

<p class="text-sm">
	<span>Read this too:</span>
	<a {href}>{title}</a>
	{#if isNew}
		<span class="text-2xs text-yellow-400">New</span>
	{/if}
</p>

<hr />

<style lang="postcss">
  hr {
    @apply !my-8;
  }
</style>
