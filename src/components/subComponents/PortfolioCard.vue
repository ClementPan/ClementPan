<template>
  <div class="card">
    <div class="image">
      <img :src="cardData.img | emptyImageFilter" alt="" />
      <!-- <div class="tags">
        <div class="tag">
          <img :src="tags.vue" alt="" />
          <img :src="tags.vue" alt="" />
          <img :src="tags.vue" alt="" />
        </div>
      </div> -->
    </div>
    <div class="content">
      <p class="name">{{ cardData.title }}</p>
      <p class="type">
        <i class="fas fa-dot-circle"></i>
        專案類型：{{ cardData.type }}
      </p>
      <p class="techs">
        <i class="fas fa-dot-circle"></i>
        應用技術：{{ cardData.techs }}
      </p>
    </div>
  </div>
</template>
<script>
import { emptyImageFilter } from "../../utils/mixin";
import vue from "../../assets/images/vue.png";
export default {
  name: "PortfolioCard",
  mixins: [emptyImageFilter],
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.projectTags = this.cardData.techs;
  },
  data() {
    return {
      tags: {
        vue,
      },
      projectTags: [],
    };
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tags {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
}

.tag {
  width: 48px;
  height: 48px;
}

.content {
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.name {
  background-color: var(--font-dark);
  color: var(--pure-white);
  padding: 0 8px;
  margin-bottom: 8px;
}
</style>