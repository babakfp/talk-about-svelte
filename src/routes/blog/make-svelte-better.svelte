<script>
  import { page } from '$app/stores'
  import { posts } from '$store/posts.js'
	import { ReadThisToo, PostDate } from '$lib/Blog'
  const { title, description, date, readThisToo } = $posts.filter(post => post.href === $page.url.pathname)[0]

	import LogicBlocksSyntax from '$content/make-svelte-better/01. Logic blocks syntax .md'
	import Layouts from '$content/make-svelte-better/03. Layouts .md'
	import ClassProp from '$content/make-svelte-better/05. Class prop .md'
	import Translation from '$content/make-svelte-better/06. Translation .md'
	import CommentsSyntax from '$content/make-svelte-better/08. Comments .md'
	import CSSScope from '$content/make-svelte-better/09. CSS scope .md'
	import A11Y from '$content/make-svelte-better/10. A11Y .md'
	import Docs from '$content/make-svelte-better/11. Docs .md'
	import ChildComponents from '$content/make-svelte-better/12. Child components .md'
	import Tick from '$content/make-svelte-better/13. Tick .md'
	import DynamicClasses from '$content/make-svelte-better/14. Dynamic classes .md'
	import PortIsAlreadyInUse from '$content/make-svelte-better/15. Port is already in use .md'
	import DynamicHTMLTag from '$content/make-svelte-better/04. Dynamic HTML tags .md'
	import BetterErrorHandling from '$content/make-svelte-better/16. Better error handling .md'
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>
<ReadThisToo {...readThisToo} />
<PostDate {...date} />

<h1>{title}</h1>

<LogicBlocksSyntax />
<hr />
<Layouts />
<hr />
<ClassProp />
<hr />
<CommentsSyntax />
<hr />
<CSSScope />
<hr />
<A11Y />
<hr />
<ChildComponents />
<hr />
<Tick />
<hr />
<DynamicClasses />
<hr />
<BetterErrorHandling />
<hr />
<PortIsAlreadyInUse />
<hr />
<Docs />
<hr />
<Translation />
<hr />
<DynamicHTMLTag />

<style lang="postcss">
	hr {
    @apply h-1;
	}
</style>
