<template>
  <li class="sub-phase-item">
    <template v-if="!subPhaseData.topic.length">
      <h2 class="sub-phase-title">
        {{ subPhaseData.title }}
      </h2>
    </template>
    <template v-else-if="subPhaseData.topic.length === 1">
      <h2 class="sub-phase-title">
        {{ subPhaseData.title }}：{{ subPhaseData.topic[0] }}
      </h2>
    </template>
    <template v-else>
      <h2 class="sub-phase-title">{{ subPhaseData.title }}</h2>

      <div class="dropdown">
        <input
          type="checkbox"
          :id="`dropdown-${subPhaseData.id}`"
          :value="isDropped"
        />
        <label
          :class="{ rotate: isDropped }"
          :for="`dropdown-${subPhaseData.id}`"
          @click="drop"
        >
          <img :src="subDropdownIcon" alt="" />
        </label>
      </div>

      <ul v-if="isDropped" class="sub-phase-content">
        <li
          class="sub-phase-content-item"
          v-for="(item, index) of subPhaseData.topic"
          :key="index"
        >
          <p class="item-index">{{ index + 1 }}：</p>
          <p>
            {{ item }}
          </p>
        </li>
      </ul>
    </template>
  </li>
</template>

<script>
import checked from "../../assets/images/checked.svg";
import dropdownIcon from "../../assets/images/subDropdown.svg";

export default {
  name: "EducationSubPhase",
  props: {
    subPhaseData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      subDropdownIcon: dropdownIcon,
      checkedIcon: checked,
      isDropped: false,
    };
  },
  methods: {
    drop() {
      if (this.isDropped) {
        return (this.isDropped = false);
      }
      this.isDropped = true;
    },
  },
};
</script>

<style scoped>
.sub-phase-item {
  position: relative;
  margin-bottom: 24px;
  border-left: 4px solid var(--font-dark);
  padding-left: 4px;
  margin-left: 4px;
}

.sub-phase-title {
  /* border-left: 2px solid var(--light-grey); */
  /* margin-bottom: 4px; */
  /* padding-left: 4px; */
  font-weight: 700;
  /* border-left: 1px solid #000; */
}

.dropdown {
  top: 0;
  transform: translateY(0%);
}

.sub-phase-content {
  /* display: block; */
  /* border: 1px solid #000; */
  padding-top: 8px;
}

.sub-phase-content-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border: 1px solid #000; */
  /* padding-top: 8px; */
  margin-bottom: 4px;
}

.sub-phase-content-item img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.item-index {
  width: 24px;
  /* border: 1px solid #000; */
}

.dropdown label img {
  transform: rotate(180deg);
  transition: transform 0.15s linear;
}

.dropdown input:checked + label img {
  transform: rotate(0deg);
  transition: transform 0.15s linear;
}
</style>