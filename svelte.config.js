import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'
import { mdsvex } from 'mdsvex'

const config = {
	extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter(),
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
		mdsvex({
			extensions: ['.md'],
		}),
  ],
}

export default config
