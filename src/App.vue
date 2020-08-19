<template>
  <div id="app">
    <client :playerID="'0'" />
    <client :playerID="'1'" />
    <client :playerID="'2'" />
  </div>
</template>

<script>
import Client from "./Client";

export default {
  name: "App",
  components: {
    Client,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  min-height: 500px;
}
</style>
