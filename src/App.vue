<template>
  <div id="app">
    <board
      :G="G"
      :ctx="ctx"
      :moves="client.moves"
      :events="client.events"
      :playerId="client.playerId"
      @cell-clicked="cellClicked"
    />
  </div>
</template>

<script>
import { Client } from 'boardgame.io/client';
import { Rat } from './Rat'
import Board from './Board';

export default {
  name: 'App',
  components: {
    'board': Board,
  },
  data() {
    return {
      G: {},
      ctx: {}
    }
  },
  created() {
    this.client = Client({ game: Rat });
    this.client.start();
    this.client.subscribe(state => {
      this.G = {...state.G};
      this.ctx = {...state.ctx};
    });
  },
  methods: {

  }
}
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

