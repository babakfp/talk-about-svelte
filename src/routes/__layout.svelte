<script>
  import '../app.css'
</script>

<header>
	<nav>
		<ul class="flex flex-wrap justify-center">
			<li>
				<a class="block py-3 px-4" href="/">I Like Svelte But, I Hate It!</a>
			</li>
			<li>
				<a class="block py-3 px-4" href="/make-svelte-better">Make Svelte Better</a>
			</li>
		</ul>
	</nav>
</header>

<main class="container content py-8 sm:py-20">
	<div class="max-w-3xl mx-auto">
		<slot />
	</div>
</main>
