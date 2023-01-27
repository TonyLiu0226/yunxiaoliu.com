<script>
	import Navbar from "./components/nav.svelte";
	import Home from "./home.svelte";
	import Projects from "./projects.svelte"
	import Notes from "./notes.svelte"
	import {isHome, isProjects, isNotes, isBlogs } from "./stores.js";
	import { fade, slide, scale } from 'svelte/transition';
	let num = -1;
	let isPlaying = false;
	const names = ["XQC", "Dream", "SkyDoesMinecraft", "TechLead", "JomaTech",
"Snoop Dogg", "IDUBBBZTV", "Cookiezi", "Vaxei", "Bruh"];
	function getRand() {
		fetch ("./rand")
		.then(d => d.text())
		.then(d => (num = names[d]));
	}

	function play() {
		if (!isPlaying) {
			document.getElementById('audioFile').play();
		}
		else {
			document.getElementById('audioFile').pause();
		}
		isPlaying = !isPlaying;
	}

	let home, projects, notes, blogs;

	isHome.subscribe (value => {
		home = value;
	});
	isProjects.subscribe (value => {
		projects = value;
	});
	isNotes.subscribe (value => {
		notes = value;
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
		<Notes></Notes>
	</div>
	{/if}
	{#if blogs}
	<div transition:fade>
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">MY BLOGS</a>
	</div>
	{/if}
	<div class="visual">
		<button class="visualButton" on:click={play}>{isPlaying ? "||" : "▷"}</button>
		<audio id="audioFile">
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
		background-color: transparent;
		color: teal;
		font-family: 'Ubuntu', sans-serif;
		font-size: 36px;
		border:none;
	}

	.visualButton:hover {
		transform:scale(107.5%);
	}

	.visualButton:active {
		color: teal;
		background-color:transparent;
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