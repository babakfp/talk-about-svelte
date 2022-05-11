import { readable } from 'svelte/store'

export const posts = readable([
	{
		title: 'Svelte Layouts Sucks',
		description: 'Why Svelte layouts sucks and what is the solution?',
		href: '/blog/Svelte-Layouts-Sucks',
	},
	{
		title: 'Make Svelte Better',
		description: 'Missing features and etc in Svelte...',
		href: '/blog/make-svelte-better',
	},
	{
		title: 'I like Svelte but, I hate it!',
		description: 'I\'m using Svelte sense 2020 and this is why I really hate it.',
		href: '/blog/i-like-svelte-but-i-hate-it',
	},
])
