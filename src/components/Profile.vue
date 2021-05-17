<template>
  <section id="profile">
    <div class="card">
      <div class="avatar">
        <img src="../assets/images/profile.png" alt="" />
      </div>
      <div class="card-content">
        <div class="motto">
          <p>{{ motto }}</p>
        </div>
        <div class="icon-bar">
          <ul class="icon-list">
            <li class="icon-item" v-for="item of iconList" :key="item.id">
              <a :href="item.link" target="_blank">
                <img :src="item.image" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div class="description">
          <ul class="profile-list">
            <li v-for="item of profileList" :key="item.id">
              <p>{{ item.head }}：</p>
              <p>{{ item.body }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import medium from "../assets/images/medium.svg";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import facebook from "../assets/images/facebook.svg";

export default {
  name: "Profile",
  data() {
    return {
      motto: "A Vue.js web front-end developer",
      iconList: [
        {
          id: 1,
          image: medium,
          link: "https://zzz2999582.medium.com/",
        },
        {
          id: 2,
          image: github,
          link: "https://github.com/ClementPan",
        },
        {
          id: 3,
          image: linkedin,
          link: "https://www.linkedin.com/in/clement-pan-98a9331aa/",
        },
        {
          id: 4,
          image: facebook,
          link: "https://www.facebook.com/profile.php?id=100001602038553",
        },
      ],
      profileList: [
        {
          id: 1,
          head: "所在城市",
          body: "台北市",
        },
        {
          id: 2,
          head: "尋找職位",
          body: "前端工程師",
        },
        {
          id: 3,
          head: "電子信箱",
          body: "zzz2999582@gmail.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  height: auto;
  border: none;
}

.avatar {
  width: 100%;
  height: 250px;
  text-align: center;
}

.avatar img {
  width: 250px;
  height: 250px;
  border-radius: 8px;
  filter: grayscale(20%);
  object-fit: cover;
}

.card-content {
  margin-top: 36px;
  padding: 0 12%;
}

.motto {
  margin-bottom: 36px;
}

.motto p {
  font-weight: 700;
  position: relative;
  text-align: center;
}

.motto p::after {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  width: 100%;
  height: 100%;
  border-bottom: 2px solid var(--dark-grey);
  transition: width 0.3s linear;
}

.motto:hover p::after {
  transition: width 0.3s linear;
  width: 0%;
}

.icon-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 8px 4px;
  margin-bottom: 12px;
  border: 2px solid var(--light-grey);
  border-radius: 4px;
}

.icon-list li {
  height: 28px;
  width: 28px;
}

.icon-list li img {
  width: 100%;
  height: 100%;
}

.description li {
  display: flex;
}
</style>