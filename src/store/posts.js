import { readable } from 'svelte/store'

export const posts = readable([
  {
		title: 'Make Svelte Better',
		description: 'Missing features and etc in Svelte...',
		href: '/blog/make-svelte-better',
    date: {
      modifiedAt: '2022-05-11',
      publishedAt: '2022-02-28',
    },
    readThisToo: {
      title: 'I Like Svelte But, I Hate It!',
      href: '/blog/i-like-svelte-but-i-hate-it',
    },
	},
  {
		title: 'I like Svelte but, I hate it!',
		description: "I'm using Svelte sense 2020 and this is why I really hate it.",
		href: '/blog/i-like-svelte-but-i-hate-it',
    date: {
      modifiedAt: '2022-04-28',
      publishedAt: '2022-02-28',
    },
    readThisToo: {
      title: 'Make Svelte Better',
      href: '/blog/make-svelte-better',
    },
	},
])
