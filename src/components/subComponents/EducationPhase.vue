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
        <input
          :ref="`dropdown${phaseData.id}`"
          type="checkbox"
          :id="`dropdown${phaseData.id}`"
        />
        <label :for="`dropdown${phaseData.id}`" @click="drop">
          <img :src="dropdownIcon" alt="" />
        </label>
      </div>
    </div>
    <!-- <div class="card-body" v-show="isDropped"> -->
    <div class="card-body" :class="{ isDropped: isDropped }">
      <ul class="sub-phase-list">
        <EducationSubPhase
          v-for="(subPhase, index) of phaseData.content"
          :key="index"
          :subPhaseData="subPhase"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import dropdown from "../../assets/images/dropdown.svg";
import EducationSubPhase from "./EducationSubPhase.vue";

export default {
  components: { EducationSubPhase },
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
      isDropped: false,
    };
  },
  methods: {
    drop() {
      const input = this.$refs[`dropdown${this.phaseData.id}`];
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
  font-weight: 700;
}

.card-body {
  /* border: 1px solid #000; */
  padding-left: 48px;
}
</style>