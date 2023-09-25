<template>
  <div id="app">
    <NavBar />
    <router-view />
    <footer>
      <div class="social-icons">
        <a href="#"><img src="path_to_linkedin_icon" alt="LinkedIn" /></a>
        <!-- Add other social media icons similarly -->
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
:root {
  /* CSS Custom Properties for color scheme and typography */
  --primary-color: #0077cc;
  --secondary-color: #004499;
  --font-family: Arial, sans-serif;
  /* Add more variables as needed */
}

#app {
  font-family: var(--font-family);
  margin: 0;
  padding: 0;
  background-color: #f9f9f9; /* or any other background color you prefer */
}

footer {
  padding: 1em;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
}

.social-icons img {
  margin: 0 10px;
  height: 24px;
  width: 24px;
}
</style>
