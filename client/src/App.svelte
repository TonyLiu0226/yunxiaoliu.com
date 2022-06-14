<script>
	import Navbar from "./components/nav.svelte";
	import Home from "./home.svelte";
	import Projects from "./projects.svelte"
	import {isHome, isProjects, isNotes, isPhotos, isBlogs } from "./stores.js";
	import { fade, slide, scale } from 'svelte/transition';
	let num = -1;
	const names = ["XQC", "Dream", "SkyDoesMinecraft", "TechLead", "JomaTech",
"Snoop Dogg", "IDUBBBZTV", "Cookiezi", "Vaxei", "Bruh"];
	function getRand() {
		fetch ("./rand")
		.then(d => d.text())
		.then(d => (num = names[d]));
	}

	let home, projects, notes, photos, blogs;

	isHome.subscribe (value => {
		home = value;
	});
	isProjects.subscribe (value => {
		projects = value;
	});
	isNotes.subscribe (value => {
		notes = value;
	});
	isPhotos.subscribe (value => {
		photos = value;
	});
	isBlogs.subscribe (value => {
		blogs = value;
	});
</script>

<main>
	<div class="nav">
		<Navbar></Navbar>
	</div>
	{#if home}
		<div class="homepg">
			<Home></Home>
		</div>
		<p>Hello {num}!</p>
		<button on:click={getRand}>Get a random number</button>
	{/if}
	{#if projects}
		<div class="projects">
			<Projects></Projects>
		</div>
	{/if}
	{#if notes}
	<div in:slide out:fade>
		<h1>LIST OF COURSES:</h1>
		<br>
		<ul>
			<li>CPEN 211</li>
			<li>CPEN 212</li>
			<li>CPEN 221</li>
			<li>STAT 302</li>
		</ul>
	</div>
	{/if}
	{#if photos}
	<div in:slide out:fade>
		<img src="https://i.ytimg.com/vi/YDj3JHtIviQ/maxresdefault.jpg" width=100% alt="sus"/>
	</div>
	{/if}
	{#if blogs}
	<div transition:fade>
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">MY BLOGS</a>
	</div>
	{/if}
</main>

<style>
	main {
		text-align: center;
		max-width: 480px;

	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 480px) {
		main {
			max-width: none;
		}

		.nav {
		top:0px;
		position:sticky;
		z-index:1;
		}
	}

	.nav {
		top:0px;
		position:sticky;
		z-index:1;
	}

	.homepg {
		align-items:center;
		width: 100%;
	}

</style>