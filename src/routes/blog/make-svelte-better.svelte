<script>
	import { AlsoRead, PostDate } from '$lib/Post'
	import LogicBlocks from '$lib/content/make-svelte-better/01. Logic Blocks .md'
	import ClassProp from '$lib/content/make-svelte-better/05. Class Prop .md'
	import Translation from '$lib/content/make-svelte-better/06. Translation .md'
	import CreateEventDispatcher from '$lib/content/make-svelte-better/07. Create Event Dispatcher .md'
	import CommentsSyntax from '$lib/content/make-svelte-better/08. Comments .md'
	import CSSScope from '$lib/content/make-svelte-better/09. CSS Scope .md'
	import A11Y from '$lib/content/make-svelte-better/10. A11Y .md'
	import Docs from '$lib/content/make-svelte-better/11. Docs .md'
	import ChildComponents from '$lib/content/make-svelte-better/12. Child Components .md'
	import Tick from '$lib/content/make-svelte-better/13. Tick .md'
	import DynamicClasses from '$lib/content/make-svelte-better/14. Dynamic Classes .md'
	import PortIsAlreadyInUse from '$lib/content/make-svelte-better/15. Port is already in use .md'
	import DynamicHTMLTag from '$lib/content/make-svelte-better/04. Dynamic HTML Tag .md'
	import BetterErrorHandling from '$lib/content/make-svelte-better/16. Better Error Handling .md'
</script>

<svelte:head>
	<title>Make Svelte Better</title>
	<meta name="description" content="Missing features and etc in Svelte..." />
</svelte:head>

<AlsoRead title="I Like Svelte But, I Hate It!" href="/blog/i-like-svelte-but-i-hate-it" />

<PostDate modifiedAt="2022-04-30" bublishedAt="2022-02-28" />

<h1>Make Svelte Better</h1>

<LogicBlocks />
<hr />
<ClassProp />
<hr />
<CreateEventDispatcher />
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

<style>
	hr {
		height: 3px;
	}
</style>
