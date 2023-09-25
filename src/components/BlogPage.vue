<!-- BlogPage.vue -->

<template>
  <div>
    <h1>Blog</h1>

    <div v-for="(post, index) in posts" :key="index" class="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.date }} by {{ post.author }}</p>
      <p>{{ post.excerpt }}</p>
      <router-link :to="'/blog/' + post.id">Read More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "My First Blog Post",
          date: "2023-09-23",
          author: "John Doe",
          excerpt: "This is a short description of my first blog post...",
          // ... other post details
        },
        // ... more posts
      ],
    };
  },
};
</script>

<style scoped>
.post {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
}
</style>
