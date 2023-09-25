<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link" active-class="active-link"
      >Home</router-link
    >
    <router-link to="/about" class="nav-link" active-class="active-link"
      >About</router-link
    >
    <router-link to="/skills" class="nav-link" active-class="active-link"
      >Skills</router-link
    >
    <router-link to="/projects" class="nav-link" active-class="active-link"
      >Projects</router-link
    >
    <router-link to="/contact" class="nav-link" active-class="active-link"
      >Contact</router-link
    >
    <router-link to="/admin-login" class="nav-link" active-class="active-link"
      >Admin Login</router-link
    >
    <router-link to="/resume" class="nav-link" active-class="active-link"
      >Resume</router-link
    >
    <router-link to="/blog" class="nav-link" active-class="active-link"
      >Blog</router-link
    >
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around; /* Distributes the links evenly */
  padding: 1em 0;
  background-color: #f5f5f5; /* Optional background color */
}

.nav-link {
  padding: 0.5em 1em;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #e0e0e0; /* Light gray background on hover */
}

.active-link {
  color: #0077cc; /* Change the color of the active link */
  border-bottom: 2px solid #0077cc; /* Optional: Add an underline to the active link */
}
</style>
