<script>
  import '../app.css'
	import Header from '$lib/Header/Index.svelte'
</script>

<div class="background-grid fixed inset-0 bg-bottom bg-gradient-to-b from-transparent to-gray-900"></div>

<Header />

<main class="container max-w-3xl z-10 relative py-8 sm:py-20">
	<slot />
</main>

<style>
	main {
		min-height: calc(100vh - 3.5rem)
	}
	.background-grid {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.03)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
	}
</style>
