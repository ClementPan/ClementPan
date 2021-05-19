<template>
  <div id="app">
    <Navbar />
    <Profile />
    <TechStack />
    <Portfolio />
    <Education />
    <Contact />
    <UpButton />
  </div>
</template>

<script>
import "./assets/css/normalize.css";
import "./assets/css/application.css";
import UpButton from "./components/UpButton";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default {
  name: "App",
  components: {
    Navbar,
    Education,
    Profile,
    TechStack,
    Portfolio,
    Contact,
    UpButton,
  },
};
</script>

<style scoped>
</style>