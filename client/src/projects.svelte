<script>
    import Rickyboi from './components/rickyboi.svelte';
    import THC212NT from './components/thc212nt.svelte';
    import SRM from './components/simple-risc-machine.svelte';
    import UniMeetups from './components/unimeetups.svelte';
    import Saos from "saos";
</script>
<div class="project-list">
<Saos 
animation={'fade-in 1.0s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
<Rickyboi></Rickyboi>
</Saos>
<Saos 
animation={'fade-in2 1.0s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
<THC212NT></THC212NT>
</Saos>
<Saos 
animation={'fade-in 1.0s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
<SRM></SRM>
</Saos>
<Saos 
animation={'fade-in2 1.0s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
<UniMeetups></UniMeetups>
</Saos>
</div>

<style>
    .project-list {
        padding-top: 10px;
        padding-bottom: 30px;
        margin:auto;
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