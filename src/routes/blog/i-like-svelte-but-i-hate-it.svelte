<script>
	import PostDate from ':lib/PostDate.svelte'
	import AlsoRead from ':lib/AlsoRead.svelte'

	import README from ':lib/i-like-svelte-but-i-hate-it/README.md'
</script>

<svelte:head>
	<title>I Like Svelte But, I Hate It! - What nobody tells you!</title>
	<meta name="description" content="I'm using Svelte sense 2020 and this is why I really hate it." />
</svelte:head>

<AlsoRead title="Make Svelte Better" href="/blog/make-svelte-better" />

<PostDate modify="2022-03-07" publish="2022-02-28" />

<README />
