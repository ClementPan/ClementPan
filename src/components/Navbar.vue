<template>
  <div id="navbar">
    <div class="brand">
      <h1>Clement's</h1>
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
          name: "Tech Stack",
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
  width: 100%;
  height: 160px;
  position: relative;
}

#navbar::after {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  content: "";
  width: 97%;
  height: 100%;
  border-bottom: 1px solid #aaa;
}

.brand {
  height: 120px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}

.brand h1 {
  font-size: 36px;
}

nav {
  height: 40px;
  width: 100%;
}

.navlist {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.navItem {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
}

.navItem p {
  height: 20px;
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
  border-bottom: 1px solid #000;
  transition: width 0.3s 0 linear;
}

.navItem:hover p::after {
  width: 100%;
  transition: width 0.15s linear;
}

@media (min-width: 376px) {
  #navbar {
    height: 240px;
  }
}
</style>