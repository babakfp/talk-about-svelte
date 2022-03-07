<script>
	export let title
	export let href
	export let isNew = false
</script>

<p>
	<span>Also read:</span>
	<a {href}>{title}</a>
	{#if isNew}
		<span class="text-2xs text-yellow-400">New</span>
	{/if}
</p>
<hr>
<br>
