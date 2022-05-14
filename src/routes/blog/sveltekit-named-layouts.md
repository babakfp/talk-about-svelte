<script>
  import { page } from '$app/stores'
  import { posts } from '$store/posts.js'
	import { AlsoRead, PostDate } from '$lib/Post'
  const { title, description, date, alsoRead } = $posts.filter(post => post.href === $page.url.pathname)[0]
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>
<AlsoRead {...alsoRead} />
<PostDate {...date} />

# {title}

So a few days ago, I complained about the new SvelteKit Named Layouts feature. That blog post is not available but you can find it on GitHub. In this blog post I'm going to talk about:

- Why I first didn't like them?
- How does it work?
- And some problems!

## Why I first didn't like them?

I'll blame the documentation. I'll also didn't thoroughly test them out, my bad.

## How does it work?

Since the documentation of SvelteKit sucks so bad, I'm going to teach you how Named Layouts works in SvelteKit. The first thing you need to do is to forget everything you know.

SvelteKit version: `1.0.0-next.330`

---

COMING SOON!
