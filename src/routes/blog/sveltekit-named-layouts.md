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

So a few days ago, I complained about the new [Named Layouts](https://kit.svelte.dev/docs/layouts#named-layouts) feature. That blog post is not available but you can find it on GitHub. In this post I'm going to talk about:

- Why I first didn't like Named Layouts?
- How Named Layouts work?
- Some problems with Layouts!

## Why I first didn't like them?

I'll blame the documentation. I'll also didn't thoroughly test them out, my bad.

## How does it work?

Since the documentation of SvelteKit sucks so bad, I'm going to teach you how Named Layouts works in SvelteKit. The first thing you need to do is to forget everything you know.

SvelteKit version: `1.0.0-next.330`

### What is a Layout?

There are some elements that you want to show them in every single page, such as a Header, Footer and stc. Instead of repeating them on every page, you can use layout **components**. Create a layout file and import repeated elements there. Now your pages will be wrapped inside that layout.

### Simple Example

This `__layout.svelte` is a layout file, it starts with double underlines.

```
├── 📂routes
│   ├── 📄__layout.svelte
│   ├── 📄index.svelte
```

<br>

`__layout.svelte` file content:

```HTML
<header></header>
<slot/> <!-- <slot></slot> -->
<footer></footer>
```

<br>

`index.svelte` file content:

```HTML
<p>Hey</p>
```

<br>

The result on the web page:

```HTML
<header></header>
<p>Hey</p>
<footer></footer>
```

---

  








---
---
---
---
---
---
---
---
---
---
---
---
---

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

