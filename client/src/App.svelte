<script>
	import Navbar from "./components/nav.svelte";
	import Home from "./home.svelte";
	import {isHome, isProjects, isNotes, isPhotos, isBlogs } from "./stores.js";
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
		<h1>LIST OF PROJECTS:</h1>
		<br>
		<ul>
			<li>Rickyboi</li>
			<li>Simple FPGA RISC MACHINE</li>
			<li>Tahsin Hasan's CPEN 212 Note Transcriber</li>
			<li>UniMeetups</li>
			<li>Shopinder</li>
			<li>Virtuagnosis</li>
		</ul>
	{/if}
	{#if notes}
		<h1>LIST OF COURSES:</h1>
		<br>
		<ul>
			<li>CPEN 211</li>
			<li>CPEN 212</li>
			<li>CPEN 221</li>
			<li>STAT 302</li>
		</ul>
	{/if}
	{#if photos}
		<img src="https://i.ytimg.com/vi/YDj3JHtIviQ/maxresdefault.jpg" alt="sus"/>
	{/if}
	{#if blogs}
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">MY BLOGS</a>
	{/if}
</main>

<style>
	main {
		text-align: center;
		max-width: 480px;
		margin: 0 auto;

	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.nav {
		top:0px;
		position:sticky;
	}

	.homepg {
		align-items:center;
		width: 100%;
	}
</style>