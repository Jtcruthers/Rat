<template>
  <div id="app">
    <client :playerID="'0'" :numberOfPlayers="this.numberOfPlayers" />
    <client :playerID="'1'" :numberOfPlayers="this.numberOfPlayers" />
    <client :playerID="'2'" :numberOfPlayers="this.numberOfPlayers" />
  </div>
</template>

<script>
import Client from "./components/Client";

export default {
  name: "App",
  components: {
    Client
  },
  created() {
    this.numberOfPlayers = 3;
  }
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
