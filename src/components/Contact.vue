<template>
  <section id="contact">
    <div class="brand">
      <h1><span>Clé</span>ment's</h1>
    </div>
    <div class="contact-panel">
      <ul class="contact-list">
        <li class="contact-item" v-for="item of iconList" :key="item.id">
          <a :href="item.link" target="_blank">
            <p><img :src="item.image" alt="" /></p>
            <p>
              {{ item.title }}
            </p>
          </a>
        </li>
      </ul>
    </div>
    <p class="copyright">
      Copyright &copy;2021 Clement Pan. All rights reserved.
    </p>
  </section>
</template>

<script>
import medium from "../assets/images/medium.svg";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import facebook from "../assets/images/facebook.svg";

export default {
  name: "Contact",
  data() {
    return {
      iconList: [
        {
          id: 1,
          title: "My Small talks",
          image: medium,
          link: "https://zzz2999582.medium.com/",
        },
        {
          id: 2,
          title: "My Coding History",
          image: github,
          link: "https://github.com/ClementPan",
        },
        {
          id: 3,
          title: "My Profile",
          image: linkedin,
          link: "https://www.linkedin.com/in/clement-pan-98a9331aa/",
        },
        {
          id: 4,
          title: "My Leaked Personal Information",
          image: facebook,
          link: "https://www.facebook.com/profile.php?id=100001602038553",
        },
      ],
    };
  },
};
</script>

<style scoped>
#contact {
  min-width: 99vw;
  width: 99vw;
  background-color: var(--footer-background);
  display: flex;
  padding: 36px 0 0 0;
  flex-direction: column;
  position: relative;
  left: calc(100% / 2 - 99vw / 2);
  margin-top: 72px;
}

.brand {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand span,
.brand h1 {
  position: relative;
  font-size: 24px;
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
  letter-spacing: 6px;
  z-index: 999;
}

.brand span {
  border: none;
  color: var(--footer-background);
  font-weight: 900;
}

.brand h1::before {
  position: absolute;
  top: 50%;
  left: -10%;
  transform: translateY(-50%);
  content: "";
  width: 72px;
  height: 72px;
  background-color: #ccc;
  border-radius: 50%;
  z-index: -1;
}

.contact-panel {
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.contact-item {
  margin: 12px 0;
  height: 28px;
}

.contact-item a {
  display: flex;
}

.contact-item img {
  background-color: var(--font-white);
  padding: 4px;
  height: 28px;
  width: 28px;
  margin-right: 12px;
  border-radius: 4px;
}

.contact-item P:last-child {
  color: var(--font-white);
  line-height: 28px;
}

.copyright {
  /* background-color: var(--font-dark); */
  color: var(--font-white);
  /* color: var(--font-dark); */
  font-size: 12px;
  padding: 8px 0;
  text-align: center;
}
</style>