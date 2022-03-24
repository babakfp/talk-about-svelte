<script>
  import '../app.css'

	const navItems = [
		{
			title: 'Home',
			href: '/',
		},
	]

	let isNavMenuOpen = false
</script>

<header class="container z-50 sticky top-0 bg-gray-800 bg-opacity-25 backdrop-blur-xl rounded text-gray-200 text-sm">
	<nav class="max-w-3xl mx-auto h-14 flex items-center">
		<ul>
			{#each navItems as item}
				<li>
					<a class="block py-2 px-4 bg-white bg-opacity-0 rounded duration-150 hover:bg-opacity-10"
						href={item.href}
						on:click={_=> isNavMenuOpen = false}
					>
						{item.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<main class="container py-8 sm:py-20">
	<div class="max-w-3xl mx-auto">
		<slot />
	</div>
</main>
