<script>
    import { onMount } from 'svelte';
    import anime from 'animejs';
    import { fade, slide, scale } from 'svelte/transition';
    anime({
        targets: '.square',
        translatex: 250,
        rotateZ: 360,
        duration: 5000,
        loop: true
    });
</script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<div transition:fade class='card'>
    <div class="about-me">
        <h1>Yunxiao Liu</h1>
        <div class="flex">
            <div class="image">
                <img src="https://lh3.googleusercontent.com/a-/AOh14Ghp-NOXwc_8kDyCBfR-NGWyKr2Evcrvu2B0DBXJjA=s96-c-rg-br100" alt="pfp" width=100%/>
            </div>
            <div class="desc">
            <p>Hello, I am a second year Computer Engineering student at the University of British Columbia,
                hoping to focus on Software Engineering. I enjoy programming during my spare time, with numerous
                side projects such as Rickyboi (my discord bot) and UniMeetups (a simple web app designed for
                university students to connect and make friends). Specifically, over the past few months, my
                interests have shifted towards web development, and this website (still a work in progress lol) is just a small 
                part of my growing passion. I am in the co-op program, and am currently seeking a winter 2023 internship, so if 
                y'all got any tips or tricks, hmu (contact info just below).
            </p>
            </div>
        </div>
    </div>
</div>
<div transition:fade class='card'>
    <div class="contact">
        <div class="flex">
            <div class="resume">
                <h1>My Resume:</h1>
                <div class="btn-row">
                    <a class="resbutton" href="https://drive.google.com/file/d/1NVbkS19h9TuKVyNIhkp1MdNBIe0BNJAJ/view?usp=sharing">RESUME</a>
                </div>
            </div>
            <div class="socials">
                <h1>CONTACT ME</h1>
                <div class="btn-row">
                <a href="https://www.linkedin.com/in/yunxiaotonyliu/"><i class="fa fa-linkedin"></i></a>
                <a href="https://github.com/TonyLiu0226"><i class="fa fa-github"></i></a>
                <a href="https://www.instagram.com/tony_26l/?hl=en/"><i class="fa fa-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UCYLZDU2vS-FeL1E2YaWrG3w"><i class="fa fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="demo-wrapper">
    <div class="square">
        <p>Gay</p>
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

p{
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    line-height: 1.6;
}

.image {
    width: 25%;
    margin-left: 2.5%;
    margin-right: 2.5%;
}

.resume {
    width: 35%;
    margin-left: 2.5%;
    margin-right: 2.5%;
}

.desc {
    width: 65%;
    margin-left: 2.5%;
    margin-right: 2.5%;
}

.socials {
    width: 55%;
    margin-left: 2.5%;
    margin-right: 2.5%;
}

.flex {
    display:flex;
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
    background-color:navy;
    color:white;
}

.btn-row {
    margin-top: 10%;
}
</style>