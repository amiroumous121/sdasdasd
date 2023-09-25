<template>
  <div>
    <h1>My Resume</h1>

    <!-- Personal Information -->
    <section>
      <h2>Personal Information</h2>
      <p>Name: {{ resume.name }}</p>
      <p>Email: {{ resume.email }}</p>
      <p>Phone: {{ resume.phone }}</p>
    </section>

    <!-- Objective -->
    <section>
      <h2>Objective</h2>
      <p>{{ resume.objective }}</p>
    </section>

    <!-- Education -->
    <section>
      <h2>Education</h2>
      <div v-for="(education, index) in resume.education" :key="index">
        <h3>{{ education.degree }} at {{ education.institution }}</h3>
        <p>{{ education.startDate }} - {{ education.endDate }}</p>
      </div>
    </section>

    <!-- ... Add other sections similarly ... -->
  </div>
</template>

<script>
export default {
  name: "ResumePage",
  data() {
    return {
      resume: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1234567890",
        objective:
          "A passionate web developer seeking challenging opportunities...",
        education: [
          {
            degree: "Bachelor's in Computer Science",
            institution: "XYZ University",
            startDate: "2015",
            endDate: "2019",
          },
          // ... more education entries
        ],
        // ... other sections like work experience, skills, etc.
      },
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
