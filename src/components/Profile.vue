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
      motto: "A Vue.js front-end developer",
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
          body: "網頁前端工程師",
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
  /* background-color: var(--dark-grey); */
  background-color: var(--the-blue);
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
  /* filter: grayscale(80%); */
  /* filter: hue-rotate(0deg); */
  object-fit: cover;
}

.card-content {
  margin-top: 36px;
  padding: 0 12%;
  /* background-color: #aaa; */
}

.motto {
  margin-bottom: 24px;
  text-align: center;
}

.motto p {
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  /* border-bottom: 2px solid var(--dark-grey); */
  border-bottom: 2px solid #f1faee;
  /* color: var(--pure-white); */
  color: #f1faee;
}

.icon-list {
  /* width: auto; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 8px 4px;
  margin-bottom: 12px;
  border-radius: 4px;
  background-color: #f1faee;
}

.icon-list .icon-item {
  height: 24px;
  width: 24px;
  /* padding-bottom: 4px; */
  vertical-align: bottom;
  /* border-bottom: 2px solid var(--dark-grey); */
  /* border-bottom: 2px solid var(--dark-grey); */
}

.icon-list .icon-item a {
  height: 100%;
  width: 100%;
  /* border: 1px solid #000; */
}

.icon-list .icon-item img {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 100%;
  transition: bottom 0.15s linear;
}

.icon-list .icon-item:hover img {
  bottom: 4px;
  transition: bottom 0.15s linear;
}

.description li {
  display: flex;
  /* color: #f1faee; */
}

.description li p {
  color: #f1faee;
  font-weight: 500;
  font-size: 16px;
}

@media (min-width: 768px) {
  .card {
    display: flex;
  }

  .avatar {
    flex: 2;
  }

  .card-content {
    flex: 3;
    margin: 0;
    padding: 0;
  }

  .motto {
    text-align: left;
  }

  .icon-list {
    width: 230px;
    /* background-color: red; */
    /* justify-content: flex-start; */
  }

  .icon-list li {
    /* margin-right: 18px; */
  }
}
</style>