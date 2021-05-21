<template>
  <button class="up-button">
    <a href="#navbar">
      <p>Go Top!</p>
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
  background-color: var(--pure-white);
  border: 2px solid var(--the-blue);
  padding: 4px 8px;
}

p {
  color: var(--the-blue);
  font-weight: 700;
}
</style>