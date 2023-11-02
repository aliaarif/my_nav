<template>
  <div id="app">
    <DynamicNav :navConfig="navData" />
  </div>
</template>

<script>
import DynamicNav from "./components/DynamicNav.vue";
import navData from "./navData";

export default {
  components: {
    DynamicNav,
  },
  data() {
    return {
      navData: navData,
    };
  },
};
</script>

<style>
</style>
