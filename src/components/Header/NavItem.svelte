<script>
	export let href
	export let isSquare
	export let isTargetBlank = false
	export let isNofollow = false
</script>

<a class="block h-9 py-2 {isSquare ? 'flex items-center justify-center w-9' : 'px-4' } bg-white bg-opacity-0 rounded duration-150 hover:bg-opacity-10" {href} target={isTargetBlank ? '_blank' : ''} rel={isNofollow ? 'nofollow' : ''}>
	<slot />
</a>
