<template>
  <button class="up-button">
    <a href="#navbar">
      <p>Go top!</p>
    </a>
  </button>
</template>

<script>
export default {
  name: "UpButton",
};
</script>

<style scoped>
.up-button {
  position: fixed;
  bottom: 3rem;
  right: 2rem;
  border: none;
  border-radius: 8px;
  z-index: 999;
  background-color: var(--the-blue);
}

p {
  color: var(--pure-white);
  font-weight: 500;
}
</style>