<!-- src/components/BlogList.vue -->

<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { blogPosts } from "@/blogData.js";

export default {
  name: "BlogList",
  data() {
    return {
      posts: blogPosts,
    };
  },
};
</script>
