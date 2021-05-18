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
      <div class="link">
        <a :href="cardData.github" target="_blank">
          <img :src="link" alt="" />
          <p>Github</p>
        </a>
      </div>
      <p class="name">{{ cardData.title }}</p>
    </div>
    <div class="content">
      <p class="type">
        <i class="fas fa-dot-circle"></i>
        類型：{{ cardData.type }}
      </p>
      <p class="techs">
        <i class="fas fa-dot-circle"></i>
        技術：
        {{ cardData.techs | listFormatFilter }}
      </p>
      <p class="spec">
        <i class="fas fa-dot-circle"></i>
        功能：
        {{ cardData.spec | listFormatFilter }}
      </p>
      <p class="text">
        <i class="fas fa-dot-circle"></i>
        簡述：
        <br />
        {{ cardData.text }}
      </p>
    </div>
  </div>
</template>
<script>
import link from "../../assets/images/link.svg";
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
      link,
      tags: {
        vue,
      },
      projectTags: [],
    };
  },
  filters: {
    listFormatFilter(list) {
      return list.join("、");
    },
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

.link {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 24px;
  overflow: hidden;
  transition: width 0.2s linear;
  background-color: var(--font-white);
  padding: 0px 4px;
  border-radius: 2px;
}

.link a {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
}

.link a img {
  width: 100%;
  height: 100%;
  margin-right: 4px;
}

.link:hover {
  transition: width 0.2s linear;
  width: 100px;
}

.link:hover img {
  margin: 0 4px;
}

.name {
  position: absolute;
  left: 12px;
  bottom: 12px;
  background-color: var(--font-dark);
  color: var(--pure-white);
  padding: 0 8px;
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

.techs br + i {
  margin-left: 20px;
}

.text {
  margin-top: 8px;
}
</style>