import { readable } from 'svelte/store'

const defaultAlsoRead = {
  title: 'I Like Svelte But, I Hate It!',
  href: '/blog/i-like-svelte-but-i-hate-it',
}

const dbPosts = [
  {
		title: 'I like Svelte but, I hate it!',
		description: "I'm using Svelte sense 2020 and this is why I really hate it.",
		href: '/blog/i-like-svelte-but-i-hate-it',
    date: {
      modifiedAt: '2022-04-28',
      publishedAt: '2022-02-28',
    },
    alsoRead: {
      title: 'Make Svelte Better',
      href: '/blog/make-svelte-better',
    },
	},
  {
		title: 'Make Svelte Better',
		description: 'Missing features and etc in Svelte...',
		href: '/blog/make-svelte-better',
    date: {
      modifiedAt: '2022-05-11',
      publishedAt: '2022-02-28',
    },
    alsoRead: defaultAlsoRead,
	},
  {
    title: 'Svelte Layouts Sucks',
		description: 'Why Svelte layouts sucks and what is the solution?',
		href: '/blog/svelte-layouts-sucks',
    date: {
      modifiedAt: '2022-05-11',
      publishedAt: '2022-05-11',
    },
    alsoRead: defaultAlsoRead,
    hide: true,
  },
	{
		title: 'How SvelteKit Named Layouts works',
		description: "I didn't like SvelteKit new Named Layouts feature, but now I do! Let's talk about it.",
		href: '/blog/how-sveltekit-named-layouts-works',
    date: {
      modifiedAt: '2022-05-13',
      publishedAt: '2022-05-13',
    },
    alsoRead: defaultAlsoRead,
	},
]

export const posts = readable(
  dbPosts.filter(post => post.hide !== true)
)
