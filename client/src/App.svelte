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
	<div class="visual">
		<button class="visualButton">Play</button>
		<audio controls>
			<source src="https://github.com/TonyLiu0226/yunxiaoliu.com/blob/master/TS.mp3?raw=true" type="audio/mpeg">
		</audio>
	</div>
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
	
	
	.visual {
		visibility:visible;
		transition: transform 500ms ease-in-out;
		padding-top: 10px;
		padding-bottom: 50px;
		
	}

	.visualButton {
		padding: 10px 30px;
		cursor:pointer;
		transition: transform 250ms ease-in-out;
		background-color: teal;
		color: #fff;
		border: 1px solid;
		border-radius: 5px;
		border-color: #fff;
		font-family: 'Ubuntu', sans-serif;
		font-size: 24px;
	}

	.visualButton:hover {
		transform:scale(107.5%);
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