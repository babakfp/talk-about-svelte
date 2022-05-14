<div class="this-el p-4 bg-gray-900 bg-opacity-40 text-gray-300 text-opacity-80 rounded sm:p-8">
	<slot />
</div>

<style lang="postcss">
	:global(.this-el > .this-el) {
		@apply bg-gray-800;
	}
</style>
