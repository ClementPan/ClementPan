<template>
  <li class="sub-phase-item">
    <h2 class="sub-phase-title">{{ subPhase.title }}</h2>
    <ul class="sub-phase-content">
      <li
        class="sub-phase-content-item"
        v-for="(item, index) of subPhase.topic"
        :key="index"
      >
        {{ index + 1 }}：{{ item }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "EducationSubPhase",
};
</script>

<style scoped>
</style>