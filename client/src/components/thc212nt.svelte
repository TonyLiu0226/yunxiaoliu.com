<script>
    import { onMount } from 'svelte';
    import anime from 'animejs';
    import { fade, slide, scale } from 'svelte/transition';

    let count = 0;
    
    const imageArray = [
    "https://res.cloudinary.com/yuliu/image/upload/v1654651093/p2.5_xskkle.jpg", "https://res.cloudinary.com/yuliu/image/upload/v1654651093/p2.1_klwulq.jpg",
    "https://res.cloudinary.com/yuliu/image/upload/v1654651093/p2.2_zlp7q7.jpg", "https://res.cloudinary.com/yuliu/image/upload/v1654651093/p2.4_gfpevm.jpg",
    "https://res.cloudinary.com/yuliu/image/upload/v1654651093/p2.6_ciiux4.jpg"]
    let image_size = imageArray.length;

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }
</script>
<!-- PROJECTS TO INCLUDE: Rickyboi, Simple FPGA RISC Machine, CPEN 212 Note Transcriber, UniMeetups, Shopinder, Virtuagnosis -->
<div class='card'>
    <div class="THC212NT">
        <h1>Tahsin Hasan's CPEN 212 Note Transcriber</h1>
        <svg viewbox="0 0 100 1">
            <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="teal"/>
        </svg>
        <div class="flex">
            <div class="desc">
            <p>For most of my courses, I like to take my notes by hand. However, after taking many courses throughout the years, 
                I ran into a problem where I don't have enough space to keep all the notebooks. So for our group's CPEN 291 project, I used this 
                as an inspiration to create a note transcriber. (Btw, the name "Tahsin Hasan's CPEN 212 Note Transcriber" was based off using
                Tahsin's CPEN 212 notes to test most of the features of our app initially). The main purpose of this app is to take handwritten text
                (or text printed on hardcopy, such as books or documents) and convert it into printed text on-screen, where it can easily be copied and pasted. 
            </p>
            <p>  
                The project is a first for us in the sense that it integrated both hardware and software components. The main hardware component is
                a device that can flip pages. We built this device using servo motors connected to an ItsyBitsy M4 Express microcontroller, and we 
                programmed it using python's CircuitPython library. 
            </p>  
                <ol>There are three main software components in this project:
                    <li>The machine learning algorithm that actually does the transcription between handwriting and printed text. We used python's
                        PyTesseract library for this.
                    </li>
                    <li>Python code to control an android phone's camera to take photos of the text. We took advantage of the Android Debug Bridge (adb) for this. This
                        code also uploads the photo that was just taken to the server for processing and running the machine learning algorithm on. 
                    </li>
                    <li>A simple web app to control all the features of the device. Users can control the page flipping device, the camera, and the
                        transcription using buttons, directly from a locally-hosted webpage. The buttons each call a backend function on a flask server to
                        perform all of the aforementioned tasks.
                    </li>
                </ol>
            
            <svg viewbox="0 0 100 1">
                <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="green"/>
            </svg>
            <h3>What I learned from this project</h3>
            <p>The main thing we as a group learned from this project was how to break down a large project into pieces, then testing and integrating each piece
                one by one. This was very important as we were trying to integrate both hardware and software. Additionally, this was my first project using react
                for the frontend, so I learned a lot about it. I also learned some basics about machine learning and android adb, with me being responsible for most
                of the code involving the latter. Most important of all however was patience and teamwork, and the ability to set realistic targets and deadlines given
                this project was to be completed in a time frame of around 2-3 weeks. 
            </p>
            <svg viewbox="0 0 100 1">
                <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="green"/>
            </svg>
            <h3>Technologies and frameworks used</h3>
            <ul>
                <li>Python</li>
                <li>Flask</li>
                <li>CircuitPython</li>
                <li>PyTesseract</li>
                <li>Android adb</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
            </ul>
            </div>
        </div>

        <svg viewbox="0 0 100 1">
            <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="red"/>
        </svg>
        <div class="tryout">
            <a href="https://github.com/TonyLiu0226/note_transcriber" target="_blank"><i class="fa fa-github"></i></a>
        </div>
        <svg viewbox="0 0 100 1">
            <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="purple"/>
        </svg>
        <h3>IMAGE GALLERY</h3>
        <div class="gallery">
            <img src={imageArray[count]} width=100% alt="bruh">
            {#if count > 0}
            <button class="btn-l" on:click={decrement}><i class="fa-solid fa-arrow-left"></i></button>
            {/if}
            {#if count < (image_size - 1)}
            <button class="btn-r" on:click={increment}><i class="fa-solid fa-arrow-right"></i></button>
            {/if}
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

.gallery {
    position:relative;
    margin-left:2.5%;
    margin-right:2.5%;
    width:95%;
}

.btn-l {
    position:absolute;
    left:0;
    height:100%;
    width:20%;
    background-color:transparent;
    border:0px;
}

.btn-l:hover {
    background-color:rgba(8, 8, 8, 0.4);
}

.btn-r {
    position:absolute;
    right:0;
    height:100%;
    width:20%;
    background-color:transparent;
    border:0px;
}

.btn-r:hover {
    background-color:rgba(8, 8, 8, 0.4);
}

@media only screen and (max-width: 600px) {
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