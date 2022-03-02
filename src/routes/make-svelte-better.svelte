<script>
	import PostDate from '$lib/PostDate.svelte'
	import AlsoRead from '$lib/AlsoRead.svelte'

	import CodeBlocksInHTML from '$lib/make-svelte-better/01. Code Blocks In HTML .md'
	import DynamicHTMLTag from '$lib/make-svelte-better/04. Dynamic HTML Tag .md'
	import ClassProp from '$lib/make-svelte-better/05. Class Prop .md'
	import Translation from '$lib/make-svelte-better/06. Translation .md'
	import CreateEventDispatcher from '$lib/make-svelte-better/07. Create Event Dispatcher .md'
	import CommentsSyntax from '$lib/make-svelte-better/08. Comments Syntax .md'
	import CSSScope from '$lib/make-svelte-better/09. CSS Scope .md'
	import A11Y from '$lib/make-svelte-better/10. A11Y .md'
	import Documentations from '$lib/make-svelte-better/11. Documentations .md'
	import ParentChilds from '$lib/make-svelte-better/12. Parent Childs .md'
	import Tick from '$lib/make-svelte-better/13. Tick .md'
	import DynamicClasses from '$lib/make-svelte-better/14. Dynamic Classes .md'
</script>

<svelte:head>
	<title>Make Svelte Better</title>
	<meta name="description" content="Some feature requests and enhancements that need to happen in Svelte." />
</svelte:head>

<AlsoRead title="I Like Svelte But, I Hate It!" href="/" />

<PostDate modify="28/02/2022" publish="02/03/2022" />

<h1>Make Svelte Better</h1>

<CodeBlocksInHTML />
<hr>
<DynamicHTMLTag />
<hr>
<ClassProp />
<hr>
<Translation />
<hr>
<CreateEventDispatcher />
<hr>
<CommentsSyntax />
<hr>
<CSSScope />
<hr>
<A11Y />
<hr>
<Documentations />
<hr>
<ParentChilds />
<hr>
<Tick />
<hr>
<DynamicClasses />
