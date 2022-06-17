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
		<svg xmlns="http://www.w3.org/2000/svg" width="602" height="302" fill="none" viewBox="0 0 602 302">
			<g class="Frame-1">
		  		<circle cx="151" cy="151" r="150.5" fill="#FEF1D8" stroke="#000" class="base1"/>
		  		<circle cx="451" cy="151" r="150.5" fill="#FEF1D8" stroke="#000" class="base2"/>
		  		<ellipse cx="151.5" cy="151" fill="#FE5775" class="c1" rx="14.5" ry="20"/>
		  		<ellipse cx="450.5" cy="151" fill="#FE5775" class="c2" rx="14.5" ry="20"/>
		  		<path fill="#D9D9D9" stroke="#000" d="M155.5 151a4.5 4.5 0 0 1-4.5 4.5c-2.149 0-3.638-1.534-3.942-3.671 1.276.608 2.323 1.025 3.176 1.28 1.008.302 1.803.395 2.407.262.312-.069.582-.2.797-.402.215-.202.349-.45.426-.714.146-.508.086-1.104-.036-1.673-.124-.58-.331-1.204-.541-1.795-.065-.185-.131-.365-.194-.542a29.485 29.485 0 0 1-.391-1.122c-.163-.517-.236-.876-.221-1.084l.004-.039h.015c.604 0 1.07.148 1.438.389.37.243.669.599.903 1.054.476.925.659 2.205.659 3.557Zm-3.055-4.995.002-.001-.002.001Z" class="n1"/>
		  		<path fill="#D9D9D9" stroke="#000" d="M446.5 151a4.5 4.5 0 0 1 4.5-4.5c2.149 0 3.638 1.534 3.942 3.671-1.276-.608-2.323-1.025-3.176-1.28-1.008-.302-1.803-.395-2.407-.262-.312.069-.582.2-.797.402-.215.202-.349.45-.426.714-.146.508-.086 1.104.036 1.673.124.58.331 1.204.541 1.795.065.185.131.365.194.542.145.399.281.775.391 1.122.163.517.236.876.221 1.084l-.004.039h-.015c-.604 0-1.07-.148-1.438-.389-.37-.243-.669-.599-.903-1.054-.476-.925-.659-2.205-.659-3.557Zm3.055 4.995-.002.001.002-.001Z" class="n2"/>
			</g>
	  	</svg>
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
		visibility: hidden;
	}

	@media (min-width: 602px) {
		.visual {
			visibility:visible;
			transition: transform 500ms ease-in-out;
			padding-top: 10px;
			padding-bottom: 50px;
			}

		.visual:hover {
			transform: scale(120%);
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