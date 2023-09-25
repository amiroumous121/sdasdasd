<template>
  <div>
    <h1>My Skills</h1>
    <table>
      <tr>
        <th>Skill</th>
        <th>Proficiency</th>
      </tr>
      <tr v-for="(skill, index) in skills" :key="index">
        <td>{{ skill.name }}</td>
        <td>{{ skill.proficiency }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "SkillsPage",
  data() {
    return {
      skills: [
        { name: "Vue.js", proficiency: "Advanced" },
        { name: "Node.js", proficiency: "Intermediate" },
        { name: "JavaScript", proficiency: "Advanced" },
        { name: "HTML & CSS", proficiency: "Advanced" },
        // add as many as you need
      ],
    };
  },
};
</script>
