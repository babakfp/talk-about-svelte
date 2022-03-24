<script>
	export let title
	export let description
	export let href
</script>

<a class="p-4 bg-white bg-opacity-5 rounded text-gray-200 duration-300 ease-in-out hover:bg-opacity-10 hover:scale-95 lg:p-8" {href}>
	<h2 class="font-medium lg:text-xl">{title}</h2>
	<p class="mt-1 text-sm text-gray-400 lg:text-base">{description}</p>
</a>
