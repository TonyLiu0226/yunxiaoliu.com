<script>
    import { onMount } from "svelte";
    import {isHome, isProjects, isNotes, isPhotos, isBlogs } from "../stores.js";
    // Show mobile icon and display menu
    let showMobileMenu = false;
  
    // Mobile menu click event handler
    const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);
  
    // Media match query handler
    const mediaQueryHandler = e => {
      // Reset mobile state
      if (!e.matches) {
        showMobileMenu = false;
      }
    };
  
    // Attach media query listener on mount hook
    onMount(() => {
      const mediaListener = window.matchMedia("(max-width: 767px)");
  
      mediaListener.addListener(mediaQueryHandler);
    });

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

    //button functions to write to each variable
    function h() {
      home = true; photos = false; projects = false; notes = false; blogs = false;
      isHome.set(home);
      isProjects.set(projects);
      isNotes.set(notes);
      isPhotos.set(photos);
      isBlogs.set(blogs);
    }
    //button functions to write to each variable
    function p() {
      home = false; photos = false; projects = true; notes = false; blogs = false;
      isHome.set(home);
      isProjects.set(projects);
      isNotes.set(notes);
      isPhotos.set(photos);
      isBlogs.set(blogs);
    }
    //button functions to write to each variable
    function n() {
      home = false; photos = false; projects = false; notes = true; blogs = false;
      isHome.set(home);
      isProjects.set(projects);
      isNotes.set(notes);
      isPhotos.set(photos);
      isBlogs.set(blogs);
    }
    //button functions to write to each variable
    function ph() {
      home = false; photos = true; projects = false; notes = false; blogs = false;
      isHome.set(home);
      isProjects.set(projects);
      isNotes.set(notes);
      isPhotos.set(photos);
      isBlogs.set(blogs);
    }
    //button functions to write to each variable
    function b() {
      home = false; photos = false; projects = false; notes = false; blogs = true;
      isHome.set(home);
      isProjects.set(projects);
      isNotes.set(notes);
      isPhotos.set(photos);
      isBlogs.set(blogs);
    }

  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <nav>
    <div class="inner">
      <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
        <div class="middle-line"></div>
      </div>
      <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
      <li>
        <button class={`button${home ? '  active' : ''}`} on:click={h}><i class="fa fa-home"></i></button>
      </li>
      <li>
        <button on:click={p} class={`button${projects ? '  active' : ''}`}>Projects</button>
      </li>
      <li>
        <button on:click={n} class={`button${notes ? '  active' : ''}`}>Notes</button>
      </li>
      <li>
        <button on:click={ph} class={`button${photos ? '  active' : ''}`}>Photos</button>
      </li>
      <li>
        <button on:click={b} class={`button${blogs ? '  active' : ''}`}>Blogs</button>
      </li>
      </ul>
    </div>
  </nav>
  
  <style>
    nav {
      background-color: rgba(7, 74, 17, 0.8);
      font-family: "Ubuntu", sans-serif;
      height: 45px;
      width:100%;
    }
  
    .inner {
      padding-left: 20px;
      padding-right: 20px;
      margin: auto;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 100%;
    }
  
    .mobile-icon {
      width: 25px;
      height: 14px;
      position: relative;
      cursor: pointer;
    }
  
    .mobile-icon:after,
    .mobile-icon:before,
    .middle-line {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transition: all 0.4s;
      transform-origin: center;
    }
  
    .mobile-icon:before,
    .middle-line {
      top: 0;
    }
  
    .mobile-icon:after,
    .middle-line {
      bottom: 0;
    }
  
    .mobile-icon:before {
      width: 66%;
    }
  
    .mobile-icon:after {
      width: 33%;
    }
  
    .middle-line {
      margin: auto;
    }
  
    .mobile-icon:hover:before,
    .mobile-icon:hover:after,
    .mobile-icon.active:before,
    .mobile-icon.active:after,
    .mobile-icon.active .middle-line {
      width: 100%;
    }
  
    .mobile-icon.active:before,
    .mobile-icon.active:after {
      top:30%;
      transform:scale(50%);
      transform: rotate(60deg);
    }
  
    .mobile-icon.active .middle-line {
      transform: scale(47.5%);
      transform: rotate(-60deg);
    }
  
    .navbar-list {
      display: none;
      width: 100%;
      justify-content: space-between;
      margin: 0;
      padding: 0 40px;
    }
  
    .navbar-list.mobile {
      background-color: rgba(7, 74, 17, 0.8);
      position: fixed;
      display: block;
      height: calc(100% - 45px);
      bottom: 0;
      left: 0;
      width:100%;
    }
  
    .navbar-list li {
      list-style-type: none;
      position: relative;
    }
  
    .navbar-list li:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color:#fff;
    }
  
    @media only screen and (min-width: 767px) {
      .mobile-icon {
        display: none;
      }
  
      .navbar-list {
        display: flex;
        padding: 0;
      }

      .button {
        display: inline-flex;
        background-color: rgba(7, 74, 17, 0.8);
        color: #fff;
        height: 100%;
        cursor:pointer;
        border:none;
      }

      .button.active {
        background-color: navy;
      }

      button.hover {
        background-color: navy;
      }
    }
  </style>