<!-- BlogPost.vue -->

<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.date }} by {{ post.author }}</p>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
import { blogPosts } from "@/blogData.js";

export default {
  name: "BlogPost",
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    const postId = this.$route.params.postId;
    this.post = blogPosts.find((post) => post.id === parseInt(postId));
  },
};
</script>
