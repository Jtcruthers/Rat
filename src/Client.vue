<template>
  <board
    :G="G"
    :ctx="ctx"
    :moves="client.moves"
    :events="client.events"
    :playerID="playerID"
  />
</template>

<script>
import { Client } from "boardgame.io/client";
import { Local } from "boardgame.io/multiplayer";
import { Rat } from "./Rat";
import Board from "./Board";

export default {
  name: "Client",
  components: {
    board: Board,
  },
  props: ["playerID", "numberOfPlayers"],
  data() {
    return {
      G: {},
      ctx: {},
    };
  },
  created() {
    this.client = Client({
      game: Rat,
      multiplayer: Local(),
      playerID: this.playerID,
      numPlayers: this.numberOfPlayers,
    });
    this.client.start();
    this.unsub = this.client.subscribe((state) => {
      this.G = JSON.parse(JSON.stringify(state.G));
      this.ctx = JSON.parse(JSON.stringify(state.ctx));
    });
  },
  destroyed() {
    this.unsub();
  },
  methods: {},
};
</script>
