import path from 'path'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'

const config = {
	extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'$lib': path.resolve('src/lib'),
					'$store': path.resolve('src/store'),
				},
			},
		},
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
