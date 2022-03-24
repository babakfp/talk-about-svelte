<script>
  import '../app.css'

	// const navItems = [
	// 	{
	// 		title: 'Home',
	// 		href: '/',
	// 	},
	// 	{
	// 		title: 'Blog',
	// 		href: '/blog',
	// 	},
	// ]

	// let isNavMenuOpen = false
</script>

<main class="container py-8 sm:py-20">
	<div class="max-w-3xl mx-auto">
		<slot />
	</div>
</main>

<!-- <nav class="opacity-0 pointer-events-none -translate-x-full {isNavMenuOpen && 'opacity-100 pointer-events-auto translate-x-0'} fixed left-4 bottom-20 w-48 p-1 bg-white bg-opacity-5 rounded text-gray-200 text-sm shadow-xl duration-200 lg:bottom-18">
	<ul>
		{#each navItems as item}
			<li>
				<a class="block py-2 px-4 bg-white bg-opacity-0 rounded duration-150 hover:bg-opacity-5"
					href={item.href}
					on:click={_=> isNavMenuOpen = false}
				>
					{item.title}
				</a>
			</li>
		{/each}
		</ul>
</nav>

<button class="fixed left-4 bottom-4 w-12 h-12 flex items-center justify-center bg-white bg-opacity-5 rounded-full fill-white duration-150 hover:bg-opacity-10 active:scale-90"
	on:click={_=> isNavMenuOpen = !isNavMenuOpen}
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23 11H13V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v10H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h10v10a1 1 0 0 0 1 1 1 1 0 0 0 1-1V13h10a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z"/></svg>
</button> -->
