## Comments

The problem is that you can't write a comment inside another comment. The examples below will not work!

```html
<!-- <p>
	<!-- <span></span> -->
</p> -->
```

```css
/* div {
	/* display: block; */
} */
```

```js
/* function add() {
	/* console.log() */
} */
```

### What is the solution?

Make it possible to the above examples. Also, make it possible to use JavaScript comment syntax (`//`) in HTML and CSS too.
