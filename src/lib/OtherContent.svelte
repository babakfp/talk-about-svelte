<div class="this-el p-8 bg-gray-900 text-gray-300 text-opacity-90 rounded">
	<slot />
</div>

<style lang="postcss">
	:global(.this-el > .this-el) {
		@apply bg-gray-800;
	}
</style>
