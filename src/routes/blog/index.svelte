<script>
	import { browser } from '$app/env'
	import { goto } from '$app/navigation'
	$: if (browser) goto('/')
</script>

<svelte:head>
	<title>Redirecting...</title>
</svelte:head>
