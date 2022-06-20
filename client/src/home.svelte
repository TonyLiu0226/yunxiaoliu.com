<script>
    import { onMount } from 'svelte';
    import anime from 'animejs';
    import Saos from "saos";
    import { fade, slide, scale } from 'svelte/transition';
import { select_option } from 'svelte/internal';
    anime({
        targets: '.square',
        translatex: 250,
        rotateZ: 360,
        duration: 5000,
        loop: true
    });
    let y = 0;
    const titles = ['Computer Engineering Student', 'Web Developer', 'Aspiring Software Engineer', 'He/him'];
    let title = "dude";
    let i = 0;
    
    const Timeout = setInterval(changeTitle, 5000);
    var transition = null;
    function changeTitle() {
        var t = document.getElementsByClassName('changing-title')[0];
        var pos = 100;
        transition = setInterval(moveTitle, 25);
        function moveTitle() {
            if (pos == 0) {
                i++;
                title = titles[i % 4];
                clearInterval(transition);
            }
            else {
                pos--;
                t.style.opacity = pos/100;
            }
        }
        
    }
</script>

<svelte:window bind:innerWidth={y}/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<Saos animation={'fade-in 1.0s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
<div class='card'>
    <div class="about-me">
        <h1>Yunxiao Liu</h1>
        <div class="titles">
            <p class="changing-title">{title}</p>
        </div>
        <svg viewbox="0 0 100 1">
            <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="teal"/>
        </svg>
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
</Saos>
<Saos animation={'fade-in 1.0s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
<div class='card'>
    <div class="contact">
        <div class="flex">
            <div class="resume">
                <h1>My resume</h1>
                <div class="btn-row">
                    <a href="https://drive.google.com/file/d/1NVbkS19h9TuKVyNIhkp1MdNBIe0BNJAJ/view?usp=sharing" target="_blank"><i class="fa fa-file"></i></a>
                </div>
            </div>
            {#if y <= 600}
            <svg viewbox="0 0 100 1">
                <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="teal"/>
            </svg>
            {/if}
            <div class="socials">
                <h1>Contact Me</h1>
                <div class="btn-row">
                <a href="https://www.linkedin.com/in/yunxiaotonyliu/" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="https://github.com/TonyLiu0226" target="_blank"><i class="fa fa-github"></i></a>
                <a href="https://www.instagram.com/tony_26l/?hl=en/" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UCYLZDU2vS-FeL1E2YaWrG3w" target="_blank"><i class="fa fa-youtube"></i></a>
                
                </div>
            </div>
        </div>
    </div>
</div>
</Saos>
<Saos animation={'fade-in 1.0s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
<div class="card">
    <h1>LANGUAGES AND FRAMEWORKS</h1>
    <svg viewbox="0 0 100 1">
		<line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="teal"/>
	</svg>
    <div class="languages">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" width=33% alt="python">
        <img src="https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt7d6dd0195aec2967/614b535dd8068d7efec4da52/Java_logo.png?quality=80&format=jpg&width=640" width=33% alt="java">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png" width=33% alt="c">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width=33% alt="javascript">
        <img src="https://myiotmart.files.wordpress.com/2016/07/verilog.jpg" width=33% alt="verilog">
        <img src="https://www.logolynx.com/images/logolynx/00/00429ca224699ddf60ce05b46ef08709.jpeg" width=33% alt="flask">
        <img src="https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4_400x400.png" width=33% alt="svelte">
        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png" width=33% alt="react">
        <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png" width=33% alt="mongodb">
    </div>
</div>
</Saos>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&family=Roboto:wght@300&family=Ubuntu:wght@300;400&display=swap');
@keyframes -global-fade-in {
    0% {
      transform: rotateY(-180deg) translateX(-100vw) skewX(0deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

.image {
    width: 25%;
    margin-left: 2.5%;
    margin-right: 2.5%;
}
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
    font-size: clamp(32px, 4vw, 48px);
}

p{
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    line-height: 1.6;
}

.resume {
    width: 40%;
    margin-right: 2.5%;
}

.desc {
    width: 65%;
    margin-left: 2.5%;
    margin-right: 2.5%;
}

.socials {
    width: 55%;
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
    margin-top: 5%;
    margin-bottom: 5%;
}

.languages {
    display:grid;
    gap: 20px;
    grid-template-columns: auto auto auto;
    align-content:center;
}

img {
    display:block;
    margin-left:auto;
    margin-right:auto;
}

@media only screen and (max-width: 600px) {
    .flex {
        display:flex;
        flex-direction:column;
    }

    .image {
        margin-left:5%;
        margin-right:5%;
        width:90%;
    }

    .desc {
        margin-left:5%;
        margin-right:5%;
        width:90%;
    }

    .resume {
        margin-left:5%;
        margin-right:5%;
        width:90%;
        margin-bottom:10px;
    }

    .socials {
        margin-left:5%;
        margin-right:5%;
        width:90%;
    }

    h1{
    font-family: 'Ubuntu', sans-serif;
    font-size: clamp(26px, 6vw, 36px);
    }

    p{
    font-family: 'Quicksand', sans-serif;
    font-size: 15px;
    line-height: 1.6;
    }

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

 .titles {
    overflow: hidden;
 }

 .changing-title {
    color: teal;
    font-family: "Ubuntu", sans-serif;
    font-size: clamp(15px, 2vw, 20px);
    }

.changing-title.horizTranslate {
    transition: 1000ms;
    margin-bottom: 100% !important;
}
 

	@keyframes dash {
  	to {
   		stroke-dashoffset: 0;
  		}
	}

    @keyframes my-animation {
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  50% {
    transform: translateY(0%);
    opacity: 1;
  }
  to {
    transform: translateY(-50%);
    opacity: 0;
  }
}

</style>