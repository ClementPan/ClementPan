<template>
  <div id="navbar">
    <div class="brand">
      <h1><img src="../assets/images/c.svg" alt="" />lément's</h1>
    </div>
    <nav>
      <ul class="navlist">
        <li class="navItem" v-for="navItem of navlist" :key="navItem.id">
          <a :href="navItem.to">
            <p>
              {{ navItem.name }}
            </p>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navlist: [
        {
          id: 1,
          name: "Profile",
          to: "#profile",
        },
        {
          id: 2,
          name: "Tech_Stack",
          to: "#profile",
        },
        {
          id: 3,
          name: "Portfolio",
          to: "#portfolio",
        },
        {
          id: 4,
          name: "Education",
          to: "#education",
        },
        {
          id: 5,
          name: "Contact",
          to: "#contact",
        },
      ],
    };
  },
};
</script>

<style scoped>
#navbar {
  background-color: var(--pure-white);
  width: 100%;
  height: 160px;
}

.brand {
  height: 120px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}

.brand img {
  width: 28px;
  height: 28px;
  margin-right: 2px;
}

.brand h1 {
  font-size: 36px;
}

nav {
  height: 40px;
  position: sticky;
  top: 2px;
  z-index: 999;
  background-color: #fff;
  border-top: 2px solid var(--light-grey);
  overflow-x: scroll;
}

nav::-webkit-scrollbar {
  display: none;
}

.navlist {
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
}

.navItem {
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
  position: relative;
  padding: 0 8px;
}

.navItem p {
  height: 20px;
  color: var(--dark-grey);
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  position: relative;
}

.navItem p::after {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  width: 0px;
  height: 20px;
  border-bottom: 2px solid var(--light-grey);
  transition: width 0.3s 0 linear;
}

.navItem:hover p::after {
  width: 100%;
  transition: width 0.15s linear;
}

@media (min-width: 376px) {
  .navlist {
    align-items: center;
    justify-content: space-around;
  }
}
</style>