<template>
  <section ref="portfolio" id="portfolio">
    <div class="title">
      <h1>Portfolio</h1>
    </div>
    <div ref="cards" class="cards">
      <PortfolioCard
        v-for="(card, index) of cards"
        :key="index"
        :cardId="`card${index}`"
        :cardData="card"
        :cardClicked="clickedCardId"
        @afterCardClicked="afterCardClicked"
      />
    </div>
  </section>
</template>

<script>
import twitter from "../assets/images/twitter.png";
import twitterGif from "../assets/images/simpletwitter.gif";

import PortfolioCard from "./subComponents/PortfolioCard";
export default {
  name: "Portfolio",
  components: { PortfolioCard },
  data() {
    return {
      clickedCardId: "",
      cards: [
        {
          title: "Simple Twitter",
          img: twitter,
          gif: twitterGif,
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
          gif: "",
          type: "個人專案",
          github: "https://github.com/ClementPan",
          techs: ["Vanilla.js", "SCSS", "Chrome extension"],
          spec: ["整理", "分類分頁"],
          text: "Under Construction!",
        },
        {
          // title: "Tabs Archive",
          title: "Any new idea?",
          img: "",
          gif: "",
          type: "???",
          github: "https://github.com/ClementPan",
          techs: ["???"],
          spec: ["???"],
          text: "Brainstorming!",
        },
      ],
    };
  },
  methods: {
    afterCardClicked(targetCard) {
      this.clickedCardId = targetCard.id;
      this.centerCard(targetCard);
    },
    getViewportWidth() {
      const viewWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      return viewWidth < 375 ? true : false;
    },
    centerCard(targetCard) {
      const isOnMobile = this.getViewportWidth();
      if (!isOnMobile) {
        return;
      }

      const cards = this.$refs.cards;
      const cardTopToViewportTop = targetCard.getBoundingClientRect().top;

      // for scrollY: distance from document top to Dom top
      const { pageYOffset } = window;
      const scrollY = pageYOffset + cardTopToViewportTop - 120;

      // for scroll x: distance from document left to Dom left
      // const scrollX = targetCard.offsetLeft - 12;
      const scrollX = targetCard.offsetLeft - 24;

      window.scroll({
        top: scrollY,
        behavior: "smooth",
      });

      cards.scroll({
        left: scrollX,
        behavior: "smooth",
      });
      console.log("Scroll!!!!!!!!");
    },
  },
};
</script>

<style scoped>
.cards {
  height: 600px;
}
@media (min-width: 880px) {
  .cards {
    justify-content: center;
  }
}
</style>