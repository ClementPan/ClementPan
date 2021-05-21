<template>
  <section id="techstack">
    <div class="title">
      <h1>Tech Stack</h1>
    </div>
    <div ref="cards" class="cards">
      <Teckcard
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
import frontend from "../assets/images/frontend.png";
import backend from "../assets/images/backend.png";
import others from "../assets/images/others.png";

import Teckcard from "./subComponents/TeckCard";
export default {
  name: "TechStack",
  components: {
    Teckcard,
  },
  data() {
    return {
      clickedCardId: "",
      cards: [
        {
          title: "Front-end",
          img: frontend,
          content: [
            "HTML5",
            "CSS3",
            "Javascript (ES6)",
            "Vue.js",
            "Bootstrap",
            "SCSS",
            "RWD",
          ],
        },
        {
          title: "Backend",
          img: backend,
          content: [
            "Express.js",
            "Express-handlebars",
            "MongoDB",
            "Mongoose",
            "MySQL",
            "RESTful API",
          ],
        },
        {
          title: "others",
          img: others,
          content: [
            "Visual studio",
            "Vue cli",
            "Git",
            "GitHub",
            "Postman",
            "Heroku",
            "Line chatbot",
          ],
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
@media (min-width: 768px) {
  .cards {
    justify-content: center;
  }
}
</style>