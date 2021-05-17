<template>
  <section id="techstack">
    <div class="title">
      <h1>Tech Stack</h1>
    </div>
    <div class="cards">
      <Teckcard v-for="card of cards" :key="card.id" :cardData="card" />
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
      cards: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
};
</script>

<style scoped>
</style>