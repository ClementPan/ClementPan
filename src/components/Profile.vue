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
export default {
  name: "Profile",
  data() {
    return {
      motto: "A Vue.js web front-end developer",
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
  /* border: 1px solid #000; */
  padding: 0 12%;
}

.motto {
  margin-bottom: 36px;
}

.description {
  border: 1px solid #000;
}
.description li {
  list-style: none;
  display: flex;
}

li p:first-child {
  /* min-width: 90px; */
}
</style>