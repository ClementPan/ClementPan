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
            "HTML / CSS / Javascript",
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
            "RESTful api",
          ],
        },
        {
          id: 3,
          title: "others",
          img: others,
          content: [
            "Git",
            "GitHub",
            "Postman",
            "Npm",
            "Heroku",
            "Line bot",
            "Python：web crawler",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  overflow-x: scroll;
  padding: 12px 0;
}
</style>