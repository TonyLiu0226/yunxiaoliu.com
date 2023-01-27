<script>
    import Saos from "saos";
    let y = 0;

    let courses = [
    {name: 'PHIL 120', 
    courseURL: 'https://docs.google.com/document/d/1ye6sDL1mwvS4o5HaxwfwCjrwI_KAlN9tJJIgQy0ePqU/edit?usp=sharing'
    }, 
    {name: 'CPSC 221', 
    courseURL: 'https://cultured-waitress-af5.notion.site/CPSC-221-b3168cc5490f4222b169a1ae6e3a2d0c'
    },
    {name: 'CPEN 311', 
    courseURL: 'https://cultured-waitress-af5.notion.site/CPEN-311-8e3d245c606b42f79bc27766e2783b20'
    },
    {name: 'CPEN 331', 
    courseURL: 'https://cultured-waitress-af5.notion.site/CPEN-331-dec0ba5a2e4e4391a37a9b35bba8d2c2'
    },
    {name: 'STAT 302',
    courseURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {name: 'CPEN 212',
    courseURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {name: 'CPEN 221',
    courseURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {name: 'CPEN 211',
    courseURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    ];
</script>

<svelte:window bind:innerWidth={y}/>

{#if y > 600}
    {#each courses as course}
    <div class="card">
        <h1>{course.name}</h1>
        <svg viewbox="0 0 100 1">
		    <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="teal"/>
	    </svg>
        <div class="notes">
            <a href={course.courseURL} target="_blank"><i class="fa fa-file"></i></a>
        </div>
    </div>
    {/each}
{:else}
<Saos animation={'fade-in 1.0s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
    {#each courses as course}
    <div class="card">
        <h1>{course}</h1>
        <svg viewbox="0 0 100 1">
		    <line class="lines" x1="0" y1="0" x2="100" y2="0" stroke="teal"/>
	    </svg>
        <div class="notes">
            <a href={course.courseURL} target="_blank"><i class="fa fa-file"></i></a>
        </div>
    </div>
    {/each}
</Saos>
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

.notes {
    display: flex;
    justify-content: center;
    align-content: center;
}

@media only screen and (max-width: 600px) {
    h1{
    font-family: 'Ubuntu', sans-serif;
    font-size: clamp(26px, 6vw, 36px);
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