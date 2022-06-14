<script>
    import { onMount } from 'svelte';
    import anime from 'animejs';
    import { fade, slide, scale } from 'svelte/transition';
import { group_outros } from 'svelte/internal';
</script>
<!-- PROJECTS TO INCLUDE: Rickyboi, Simple FPGA RISC Machine, CPEN 212 Note Transcriber, UniMeetups, Shopinder, Virtuagnosis -->
<div class='card'>
    <div class="THC212NT">
        <h1>UniMeetups</h1>
        <svg viewbox="0 0 100 1">
            <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="teal"/>
        </svg>
        <div class="flex">
            <div class="desc">
            <p>Many university students often struggle with finding others with common interests and forging long lasting friendships.
                Therefore, our team was inspired to create a meetup app intended for that exact purpose for the CalgaryHacks 2022 Hackathon.
                Our app was designed to allow users to create profiles that feature their school, interests, and activities. After account creation, a 
                matching algorithm matches those with similar interets and activities at the same school with each other. These matches automatically
                show up on the user's dashboard when they log in, so users can see exactly who they are able to meet up with at a glance. Users can then
                invite their matches to meetup, which will then reveal their contact info to co-ordinate and communicate further outside the app, fostering
                longer-term connections. Additionally, we implemented another feature where users can create public meetups, which are visible
                to others on the site to join. This allows users to host larger events and form meaningful friend groups. 
            </p>
            <p>  
                We utilized Flask for the entire backend, and HTML, CSS and Jinja in the frontend. For user authentication, we used Flask's
                user authentication and Python's werkzeug framework. We wrote a Python script for the matching algorithm that generates the
                matches for each user.
            </p>  
            
            <svg viewbox="0 0 100 1">
                <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="green"/>
            </svg>
            <h3>What I learned from this project</h3>
            <p>For me personally, this was my first major web app, as well as the first time participating in a hackathon. I learned many
                things applicable to web-development, such as how the different components (frontend, backend, database, etc) communicate
                and work with each other, how to build routes, and implementing basic user authentication systems. I also improved my frontend
                skills by working on the HTML and CSS for some of the pages. Overall, this experience served as a very good introduction to web
                development, and really helped me grow my interest in this area.
            </p>
            <svg viewbox="0 0 100 1">
                <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="green"/>
            </svg>
            <h3>Technologies and frameworks used</h3>
            <ul>
                <li>Python</li>
                <li>Flask</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>MongoDB</li>
            </ul>
            </div>
        </div>
        <!-- insert try out links here (github, devpost, youtube demos) -->
        <svg viewbox="0 0 100 1">
            <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="red"/>
        </svg>
        <div class="tryout">
            <a href="https://devpost.com/software/unimeetups" target="_blank"><i class="fa fa-laptop"></i></a>
            <a href="https://www.youtube.com/watch?v=OKCbhloGrm4" target="_blank"><i class="fa fa-youtube"></i></a>
            <a href="https://github.com/rainbowriverrr/UniMeetups" target="_blank"><i class="fa fa-github"></i></a>
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&family=Roboto:wght@300&family=Ubuntu:wght@300;400&display=swap');

.card {
    background-color:rgba(8,8,8,0.5);
    border:5px;
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

ol {
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    line-height: 1.6;
    list-style:inside;
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
    margin-bottom: 30px;
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