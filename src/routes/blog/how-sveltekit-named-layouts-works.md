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

A few days ago I complained about the new SvelteKit Named Layouts feature on this blog. That blog post is now gone because now I like the new Named Layout system. (You can find the deleted article on GitHub).

I think the big factory that made me don't like the new Named Layouts system, was the fact that the docs are just not good enough for the end-user.

## How SvelteKit New Named Layout system works?

Example below is the simples way that you can use a layout for your pages:

```
├── 📂routes
│   ├── 📄__layout.svelte
│   ├── 📄index.svelte
```

<br>

All of your pages in that same directory and its subdirectories can use that layout template:

```
├── 📂routes
│   │   ├── 📂blog
│   │   ├── 📄[id].svelte ✅
│   │   ├── 📄index.svelte ✅
│   ├── 📄__layout.svelte
│   ├── 📄index.svelte ✅
```

<br>

Create a Named Layout, like this `__layout-<name>.svelte`:

```
├── 📂routes
│   ├── 📄__layout-hello.svelte
```

<br>

Use that named layout like this `index@<name>.svelte`:

```
├── 📂routes
│   ├── 📄index@hello.svelte
```

<br>

Same simple example:

```
├── 📂routes
│   ├── 📄__layout-hello.svelte
│   ├── 📄index@hello.svelte
```

If you don't add `@hello` to the `index.svelte` filename, that the page will not use that layout.

<br>

`index.svelte` will not use `__layout-hello.svelte`. Only `welcome@hello.svelte` can the layout:

```
├── 📂routes
│   ├── 📄__layout-hello.svelte
│   ├── 📄index.svelte
│   ├── 📄welcome@hello.svelte
```

<br>

- `index.svelte` will use `__layout.svelte`
- `welcome@hello.svelte` will use `__layout-hello.svelte`

```
├── 📂routes
│   ├── 📄__layout.svelte
│   ├── 📄__layout-hello.svelte
│   ├── 📄index.svelte
│   ├── 📄welcome@hello.svelte
```

<br>

