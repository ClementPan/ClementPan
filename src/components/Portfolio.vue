<template>
  <section id="portfolio">
    <div class="title">
      <h1>Portfolio</h1>
    </div>
    <div class="cards">
      <PortfolioCard
        v-for="(card, index) of cards"
        :key="index"
        :cardData="card"
      />
    </div>
  </section>
</template>

<script>
import twitter from "../assets/images/twitter.png";
import PortfolioCard from "./subComponents/PortfolioCard";
export default {
  name: "Portfolio",
  components: { PortfolioCard },
  data() {
    return {
      cards: [
        {
          title: "Simple Twitter",
          img: twitter,
          type: "團體協作專案",
          techs: ["Vue.js", "Vuex", "Vue-socket.io"],
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem atque ipsa enim delectus sint quaerat at, dolor nobis. Dolor, perferendis numquam ipsam obcaecati hic aut ab similique deleniti debitis!",
        },
        {
          title: "URL Archive",
          img: "",
          type: "個人專案",
          techs: ["Chrome extension", "Vue.js"],
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem atque ipsa enim delectus sint quaerat at, dolor nobis. Dolor, perferendis numquam ipsam obcaecati hic aut ab similique deleniti debitis!",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>