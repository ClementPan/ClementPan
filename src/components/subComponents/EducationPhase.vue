<template>
  <div class="card">
    <div class="card-head">
      <a class="icon-link" :href="phaseData.link" target="_blank">
        <div class="icon">
          <img :src="phaseData.icon" alt="" />
        </div>
      </a>
      <h1>{{ phaseData.title }}</h1>
      <div class="dropdown">
        <input ref="input" type="checkbox" :id="`dropdown-${phaseData.id}`" />
        <label :for="`dropdown-${phaseData.id}`" @click="drop">
          <img :src="dropdownIcon" alt="" />
        </label>
      </div>
    </div>
    <!-- <div class="card-body" v-show="isDropped"> -->
    <div class="card-body" :class="{ isDropped: isDropped }">
      <ul class="sub-phase-list">
        <li
          class="sub-phase-item"
          v-for="(subPhase, index) of phaseData.content"
          :key="index"
        >
          <h2 class="sub-phase-title">{{ subPhase.title }}</h2>
          <ul class="sub-phase-content">
            <li
              class="sub-phase-content-item"
              v-for="(item, index) of subPhase.topic"
              :key="index"
            >
              {{ index + 1 }}：{{ item }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import dropdown from "../../assets/images/dropdown.svg";
// import dropdownIcon from "../../assets/images/subDropdownIcon.svg";

export default {
  name: "EduPhase",
  props: {
    phaseData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dropdownIcon: dropdown,
      // subDropdownIcon: dropdownIcon,
      isDropped: false,
    };
  },
  methods: {
    drop() {
      const input = this.$refs.input;
      // false: dropped, true: undropped
      if (input.checked) {
        return (this.isDropped = false);
      }
      this.isDropped = true;
    },
  },
};
</script>

<style scoped>
.card {
  /* border: 1px solid #000; */
  min-width: 320px;
  /* width: 320px; */
  /* height: 440px; */
  margin: 0 12px;
  margin-bottom: 12px;
}

.card-head {
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border: 1px solid red; */
  position: relative;
}

.icon {
  width: 40px;
  height: 40px;
  margin-right: 12px;
}

.icon img {
  width: 100%;
  height: 100%;
}

.card-head h1 {
  color: var(--font-dark);
  font-size: 20px;
}

.sub-phase-item {
  border: 1px solid #000;
}

.dropdown {
  position: absolute;
  right: 0;
  width: 28px;
  height: 24px;
}

.dropdown img {
  width: 100%;
  height: 100%;
}

.dropdown input {
  display: none;
}

.dropdown label > img {
  transform: rotate(180deg);
  transition: transform 0.3s linear;
}

.dropdown input:checked + label > img {
  transform: rotate(0deg);
  transition: transform 0.3s linear;
}

.card-body {
  display: none;
  height: 0;
  /* transform-origin: top; */
  /* transform: scaleY(0); */
  /* transition: transform 0.3s linear; */
  /* opacity: 0; */
}

.isDropped {
  display: block;
  height: auto;
  /* opacity: 1; */
  /* transform: scaleY(1); */
  /* transition: transform 0.3s linear; */
  /* transition: 0.5s linear; */
}
</style>