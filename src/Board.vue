<template>
  <div>
    <hand :hand="getHand" @played-card="onPlayCard" />
    <button class="deal" @click="onDeal">Deal</button>
    <trumps-picker @pick-trumps="onPickTrumps" />
  </div>
</template>

<script>
import Hand from "./components/Hand";
import TrumpsPicker from "./components/TrumpsPicker";

export default {
  name: "Board",
  props: ["G", "ctx", "moves", "events", "playerID"],
  components: {
    Hand,
    TrumpsPicker,
  },
  methods: {
    onDeal() {
      this.moves.dealToPlayers();
    },
    onPickTrumps(trumps) {
      this.moves.pickTrumps(trumps);
    },
    onPlayCard(card) {
      this.moves.playCard(this.playerID, card);
    },
  },
  computed: {
    getHand() {
      return this.G.players[this.playerID].hand;
    },
  },
};
</script>

<style scoped>
.deal {
  width: 100px;
  height: 40px;
  margin: 10px;
}
</style>
