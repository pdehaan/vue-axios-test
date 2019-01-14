<template>
  <div id="app">
    <img :src="logo" alt="Vue logo" />
    <breach-list msg="Have I Been Pwned" />
  </div>
</template>

<script>
import BreachList from "./components/BreachList.vue";
import logo from "./assets/logo.png";

export default {
  name: "app",
  components: {
    BreachList
  },
  data() {
    return {
      logo
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
