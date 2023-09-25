<template>
  <div>
    <!-- Login Form -->
    <form @submit.prevent="handleLogin">
      <input v-model="loginUsername" type="text" placeholder="Username" />
      <input v-model="loginPassword" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>

    <!-- Registration Form (if needed) -->
    <!-- ... -->
  </div>
</template>

<script>
export default {
  name: "AdminLoginPage",
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
      // Assuming a simple hardcoded admin credential for demonstration purposes
      adminCredentials: {
        username: "admin",
        password: "admin123",
      },
    };
  },
  methods: {
    handleLogin() {
      if (
        this.loginUsername === this.adminCredentials.username &&
        this.loginPassword === this.adminCredentials.password
      ) {
        alert("Logged in successfully!");
        // Here, you can redirect the user to the admin dashboard or perform other actions.
      } else {
        alert("Invalid credentials!");
      }
    },
    // methods for handling registration (if needed)
  },
};
</script>

<style scoped>
/* Styles for the Admin Login Page */
</style>
