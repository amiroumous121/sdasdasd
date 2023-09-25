<!-- src/components/AdminDashboard.vue -->

<template>
  <div>
    <h1>Admin Dashboard</h1>
    <button @click="goToAddPost">Add New Post</button>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
        <button @click="goToEditPost(post.id)">Edit</button>
        <button @click="deletePost(post.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { blogPosts } from "@/blogData.js";

export default {
  name: "AdminDashboard",
  data() {
    return {
      posts: blogPosts,
    };
  },
  methods: {
    goToAddPost() {
      // Navigate to a new component to add a post
      this.$router.push("/admin/add-post");
    },
    goToEditPost(postId) {
      // Navigate to a new component to edit the post
      this.$router.push(`/admin/edit-post/${postId}`);
    },
    deletePost(postId) {
      // For now, we'll just remove the post from the array
      this.posts = this.posts.filter((post) => post.id !== postId);
      // In a real-world scenario, you'd also update the backend/database
    },
  },
};
</script>
