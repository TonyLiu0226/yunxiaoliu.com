<script>
    let y = 0;
</script>

<svelte:window bind:innerWidth={y}/>

{#if y > 600}
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
{:else}
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
{/if}

<style>

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

@media only screen and (max-width: 600px) {
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

  @keyframes -global-fade-in2 {
    0% {
      transform: rotateY(180deg) translateX(100vw) skewX(0deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }
</style>