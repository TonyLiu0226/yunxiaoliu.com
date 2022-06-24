<script>
    import { onMount } from 'svelte';
    import anime from 'animejs';
    import { fade, slide, scale } from 'svelte/transition';
</script>
<!-- PROJECTS TO INCLUDE: Rickyboi, Simple FPGA RISC Machine, CPEN 212 Note Transcriber, UniMeetups, Shopinder, Virtuagnosis -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<div class='card'>
    <div class="simple-RISC-machine">
        <h1>Simple RISC Machine</h1>
        <svg viewbox="0 0 100 1">
            <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="teal"/>
        </svg>
        <div class="flex">
            <div class="desc">
            <p>This was the main project in the CPEN 211 course. I made a simple RISC machine on a DE1-SOC FPGA board. Written in verilog,
                it contains a 16 bit instruction decoder, 8 registers, a datapath FSM controller, a 4 operation ALU and shifter, as well as flags
                for negative, zero and overflow. 
            </p>
            <svg viewbox="0 0 100 1">
                <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="green"/>
            </svg>
            <h3>What I learned from this project</h3>
            <p>I learned many things related to hardware and microcomputers while working on the project and throughout the course.
                Specifically, I gained skills in designing sequential and combinational logic circuits, finite
                state machines, and using the verilog HDL. I also realized the importance of learning good debugging skills, 
                and unit testing each individual component of the machine.
            </p>
            <svg viewbox="0 0 100 1">
                <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="green"/>
            </svg>
            <h3>Technologies and frameworks used</h3>
            <ul>
                <li>Verilog</li>
                <li>ARM Assembly (to generate opcodes for various instructions)</li>
            </ul>
            </div>
        </div>
        <!-- insert try out links here (github, devpost, youtube demos) -->
        <svg viewbox="0 0 100 1">
            <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="red"/>
        </svg>
        <div class="tryout">
            <a href="https://github.com/TonyLiu0226/Simple-RISC-Machine" target="_blank"><i class="fa fa-github"></i></a>
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&family=Roboto:wght@300&family=Ubuntu:wght@300;400&display=swap');

.card {
    background-color:rgba(8,8,8,0.5);
    border:5px;
    border-radius: 10px;
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