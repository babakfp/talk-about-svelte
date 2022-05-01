<script>
	export let title
	export let description
	export let href
</script>

<a class="group relative p-6 bg-white bg-opacity-5 backdrop-blur-3xl rounded overflow-hidden text-gray-200 duration-300 ease-in-out hover:bg-opacity-10 lg:p-8" {href}>
	<h2 class="font-medium text-lg lg:text-xl">{title}</h2>
	<p class="mt-1 text-sm text-gray-400 lg:text-base">{description}</p>

	<div class="absolute -right-8 top-6 flex duration-300 ease-in-out group-hover:right-8">
		<svg class="fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.12 9.91 19.25 6a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41L21.39 11H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h20.45l-3.62 3.61a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.87-3.88a3 3 0 0 0 0-4.24Z"/></svg>
	</div>
</a>
