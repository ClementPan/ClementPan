<template>
  <div class="card">
    <div class="image">
      <h1>{{ cardData.title }}</h1>
      <img :src="cardData.img" alt="" />
    </div>
    <div class="content">
      <p>開發經驗：</p>
      <ul
        class="content-list"
        v-for="(item, index) of cardData.content"
        :key="index"
      >
        <li class="list-item">
          <img class="pointer" :src="pointer" alt="" />
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import pointer from "../../assets/images/pointer.svg";

export default {
  name: "TechCard",
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pointer: pointer,
    };
  },
};
</script>

<style scoped>
.image {
  position: relative;
  height: 160px;
}

.image h1 {
  position: absolute;
  top: 12px;
  left: 12px;
  color: var(--font-dark);
  background-color: var(--font-white);
  padding: 8px 12px;
  border-radius: 12px;
  font-weight: var(--title-weight);
  border: 1px solid var(--dark-grey);
}

.card .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 16px;
}

.content p {
  font-weight: 700;
}

.list-item {
  margin: 8px 0;
  padding: 0;
  padding-left: 0;
  /* border: 1px solid #000; */
  background-color: transparent;
}

.list-item:hover {
  padding-left: 4px;
  background-color: var(--font-white);
  transition: 0.1s linear;
  cursor: pointer;
}

.pointer {
  width: 12px;
  height: 12px;
  transform: rotate(90deg);
}
</style>