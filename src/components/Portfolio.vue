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
          github: "https://github.com/ClementPan/simpleTwitterX",
          techs: ["Vue.js", "Vuex", "socket.io"],
          spec: ["推文", "按讚", "追蹤", "線上聊天"],
          text:
            "Alpha camp 期末協作專題。由兩位前端搭配兩位後端，採前後分離的方式製作簡易版推特 SPA。筆者負責 70% 之頁面切版、API 串接。過程使用 Trello 看板規劃與追蹤開發進度、線上開會軟體實現遠端協作。",
        },
        {
          title: "Tabs Archive",
          img: "",
          type: "個人專案",
          github: "https://github.com/ClementPan",
          techs: ["Vanilla.js", "Chrome extension"],
          spec: ["整理", "分類分頁"],
          text: "Under Construction!",
        },
        {
          // title: "Tabs Archive",
          title: "Any new idea?",
          img: "",
          type: "???",
          github: "https://github.com/ClementPan",
          techs: ["???"],
          spec: ["???"],
          text: "Brainstorming!",
        },
      ],
    };
  },
};
</script>

<style scoped>
@media (min-width: 880px) {
  .cards {
    justify-content: center;
  }
}
</style>