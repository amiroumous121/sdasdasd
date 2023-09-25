<template>
  <div class="home">
    <h1>Welcome to My Portfolio</h1>
    <p>
      Hi, I'm amir zandieh, a web developer specialized in Vue.js. Thank you for
      visiting my personal portfolio website. Please feel free to browse around
      and learn more about my work.
    </p>
    <img :src="profilePhoto" alt="Your photo" />
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      profilePhoto: require("@/assets/amir.jpg"),
    };
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 50px;
}

.home h1 {
  color: #3c6e71;
}

.home p {
  color: #444;
  font-size: 18px;
}

.home img {
  margin-top: 30px;
  border-radius: 50%;
}
</style>
