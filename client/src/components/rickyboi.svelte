<script>
    import { onMount } from 'svelte';
    import anime from 'animejs';
    import { fade, slide, scale } from 'svelte/transition';
</script>
<!-- PROJECTS TO INCLUDE: Rickyboi, Simple FPGA RISC Machine, CPEN 212 Note Transcriber, UniMeetups, Shopinder, Virtuagnosis -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<div class='card'>
    <div class="rickyboi">
        <h1>Rickyboi</h1>
        <svg viewbox="0 0 100 1">
            <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="teal"/>
        </svg>
        <div class="flex">
            <div class="desc">
            <p>Rickyboi is a general-purpose discord bot written using the discord.py framework. It currently supports a variety
                of commands ranging from utility commands and mathematical functions, to web scraping sites and fetching data from publically
                available API's to get useful data, such as dictionary definitions, weather forecasts, bus schedules, and currency exchange rates. There are
                also a variety of minigames available for the user to play, and I am currently implementing an economy system for these minigames, 
                to make them more fun and interactive.
            </p>
            <svg viewbox="0 0 100 1">
                <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="green"/>
            </svg>
            <h3>What I learned from this project</h3>
            <p>I learned many things, from reviewing my knowledge of python (I haven't coded much with it before this project since early in
                high school), to more importantly, learning how to retrieve data from the web using various techniques such as web scraping and 
                fetching JSON data from API's. Another major area of growth during this project is my ability to set up workflows and utilize
                version control. It is important to stay organized while working, and to commit regularly (this was the first project where I used git for
                version control, and the repository for this project was my first repository on my GitHub.)
            </p>
            <svg viewbox="0 0 100 1">
                <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="green"/>
            </svg>
            <h3>Technologies and frameworks used</h3>
            <ul>
                <li>Python</li>
                <li>discord.py (soon to migrate to Pycord)</li>
                <li>Beautiful Soup</li>
            </ul>
            </div>
        </div>
        <!-- insert try out links here (github, devpost, youtube demos) -->
        <svg viewbox="0 0 100 1">
            <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="red"/>
        </svg>
        <div class="tryout">
            <a href="https://github.com/TonyLiu0226/Rickyboi" target="_blank"><i class="fa fa-github"></i></a>
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&family=Roboto:wght@300&family=Ubuntu:wght@300;400&display=swap');

.card {
    background-color:rgba(8,8,8,0.5);
    border:5px;
    border-style: solid;
    border-color: teal;
    border-width: 2px;
    border-radius: 10px;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 40px;
    transition: transform 500ms ease-in-out;
}

.card:hover {
    transform:translateY(-20px);
}

h1{
    font-family: 'Ubuntu', sans-serif;
    font-size: 36px;
}

h3{
    font-family: 'Ubuntu', sans-serif;
    font-size: 24px;
}

p{
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    line-height: 1.6;
}

li{
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    line-height: 1.6;
}

ul {
    list-style-type:none;
    padding:0;
}

.flex {
    display:flex;
    flex-direction:column;
}   

a {
    position: relative;
    background-color: rgba(255, 255, 255, 0.4);
    color: black;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 12px;
    padding-right: 12px;
    text-decoration: none;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 20px;
    margin-bottom: 20px;
}

a:hover {
    background-color:blue;
    color:#fff;
}

.tryout {
    display:flex;
    margin-top:5px;
    margin-bottom:15px;
    align-items:center;
    justify-content:space-evenly;
}

@media only screen and (max-width: 600px) {
    .card {
    background-color:rgba(8,8,8,0.5);
    border:5px;
    border-radius: 10px;
    border-style: solid;
    border-color: teal;
    border-width: 2px;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 40px;
    transition: transform 0ms ease-in-out;
}

.card:hover {
    transform:translateY(0px);
    transform:scale(100%);
}
}

.lines {
		opacity: 1;
		stroke-dasharray:100;
		stroke-dashoffset: 100;
        stroke-width: 1;
	}

 .card:hover .lines {
    animation: dash 1s linear forwards;
 }

@keyframes dash {
to {
   	stroke-dashoffset: 0;
  	}
}

</style>