<template>
  <section id="education">
    <div class="title">
      <h1>Education</h1>
    </div>
    <div class="phases">
      <Phase v-for="phase of phases" :key="phase.id" :phaseData="phase" />
    </div>
  </section>
</template>

<script>
import alphacamp from "../assets/images/alphacamp.png";
import nccu from "../assets/images/nccu.png";

import Phase from "./subComponents/EducationPhase.vue";
export default {
  name: "Education",
  components: { Phase },
  data() {
    return {
      phases: [
        {
          id: 1,
          title: "ALPHA camp 全端開發課程",
          icon: alphacamp,
          link: "https://tw.alphacamp.co/",
          content: [
            {
              title: "學期 3：軟體工程師養成 - 前端工程師專修",
              topic: [
                "CSS 進階概念與練習",
                "CSS 預處理器",
                "Webpack",
                "Vue.js 與 Web Component",
                "Vue 與 Vuex 專案實作",
              ],
            },
            {
              title: "學期 2-3：後端開發實務",
              topic: [
                "網路概論",
                "Node.js 和 Express.js 後端開發",
                "版本控制：Git 與 GitHub",
                "建立資料庫：NoSQL 與 MongoDB",
                "資料處理功能：CRUD",
              ],
            },
            {
              title: "學期 2-2：軟體開發實務入門",
              topic: [
                "從「做網頁」進入「軟體開發」的實務與工具",
                "運用 AJAX 串接第三方 API",
                "運用 MVC 架構",
                "程式碼模組化",
                "進階流程控制",
              ],
            },
            {
              title: "學期 2-1：軟體開發實務入門",
              topic: [
                "網頁切版技巧",
                "JavaScript 觀念與實作",
                "DOM 事件操作",
                "資料結構觀念",
                "RWD 響應式網頁設計與 Bootstrap",
              ],
            },
            {
              title: "學期 1：軟體開發實務入門",
              topic: [
                "使用者介面與 wireframe",
                "HTML/CSS/JavaScript",
                "運用 MVC 架構",
                "程式碼模組化",
                "運算思維與基礎演算法",
              ],
            },
          ],
        },
        {
          id: 2,
          title: "政大華語文教學研究所",
          icon: nccu,
          link: "https://tcsl.nccu.edu.tw/",
          content: [
            {
              title: "語料處理",
              topic: ["R Basic"],
            },
            {
              title: "程式設計概論",
              topic: ["Python Basic"],
            },
          ],
        },
        {
          id: 3,
          title: "政大歐洲語言與文化學系",
          icon: nccu,
          link: "https://european.nccu.edu.tw/",
          content: [
            {
              title: "法國勃艮地大學交換學生",
              topic: [],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
#education {
}
</style>