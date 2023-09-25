<template>
  <div>
    <h1>Contact Me</h1>
    <form action="https://formspree.io/f/xzbljkdl" method="POST">
      <label for="name">Name:</label>
      <input id="name" name="name" v-model="name" type="text" required />

      <label for="email">Email:</label>
      <input id="email" name="_replyto" v-model="email" type="email" required />

      <label for="message">Message:</label>
      <textarea
        id="message"
        name="message"
        v-model="message"
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>

    <p v-if="isSubmitted">Your message has been sent!</p>

    <ul>
      <li v-for="(message, index) in messages" :key="index">
        {{ message.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      isSubmitted: false,
      messages: [
        { text: "First message" },
        { text: "Second message" },
        // More messages...
      ],
    };
  },
  methods: {
    async submitForm() {
      try {
        console.log("submitForm was called");
        let response = await fetch("http://localhost:8081/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });

        if (!response.ok) {
          console.error(`Server responded with status code ${response.status}`);
          let responseBody = await response.text();
          console.error(`Server responded with body: ${responseBody}`);
          alert("An error occurred. Please try again.");
        } else {
          this.name = "";
          this.email = "";
          this.message = "";
          this.isSubmitted = true;
          this.messages.push({ text: "Your message: " + this.message });
          alert("Your message has been sent!");
        }
      } catch (error) {
        console.error("Fetch request failed:", error);
      }
    },
  },
};
</script>
