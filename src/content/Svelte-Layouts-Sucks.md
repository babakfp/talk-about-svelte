# Svelte Layouts Sucks

Using layouts in your app is one of the easy and most straightforward things to do but it seems that Rich Harris is having problems with how the hell this simple feature should work!

[SvelteKit : 4388](https://github.com/sveltejs/kit/pull/4388)

After the above PR, SvelteKit layouts got even more ridiculous! You don't have the `__layout.reset.svelte` feature anymore. Now you need to use the new feature called Named Layouts. I don't know when Rich Harris will stop making file names unreadable. Docs sucks too, god knows what the hell is going on there. It's not really a hard job to do😐.

- Docs sucks
- Unreadable file names
- Why the hell do you want to reinvent the wheel!

## This is the way that I do it

```
.
├── 📂src
│   ├── 📂layouts
│   │   ├── 🗃️MainLayout.svelte
│   │   ├── 🗃️LayoutManager.svelte
│   ├── 📂routes
│   │   ├── 🗃️__layout.svelte
```

<br>

`🗃️MainLayout.svelte`:

```HTML
<main>
  <slot />
</main>
```

<br>

`🗃️LayoutManager.svelte`:

```HTML
<script>
	import { page } from '$app/stores'

  // '<route>': <Layout Component>
  export let layouts = {}
  export let defaultLayout = null

  // Use `defaultLayout` if route layout isn't set.
  $: layout = layouts[$page.url.pathname] ?? defaultLayout
</script>

{#if layout}

  <svelte:component this={layout}>
    <slot />
  </svelte:component>

{:else}

  <slot />

{/if}
```

<br>

`🗃️__layout.svelte`:

```HTML
<script>
	import LayoutManager from '$layouts/LayoutManager.svelte'
	import MainLayout from '$layouts/MainLayout.svelte'
</script>

<LayoutManager defaultLayout={MainLayout}>
  <slot />
</LayoutManager>
```

<br>

You can add you routes and layouts like this:

```HTML
<script>
	import LayoutManager from '$layouts/LayoutManager.svelte'
	import MainLayout from '$layouts/MainLayout.svelte'
	import PotatoLayout from '$layouts/PotatoLayout.svelte'
	import TomatoLayout from '$layouts/TomatoLayout.svelte'
</script>

<LayoutManager defaultLayout={MainLayout} layouts={{
  '/potato-shop': PotatoLayout,
  '/tomato-shop': TomatoLayout,
}}>
  <slot />
</LayoutManager>
```

You can add your own twist, like inheriting and etc.
