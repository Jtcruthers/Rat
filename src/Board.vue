<template>
  <div>
    <cards-played :cards="G.cardsPlayed" />
    <hand :hand="getHand" @played-card="onPlayCard" />
    <button class="deal" @click="onDeal">Deal</button>
    <trumps-picker @pick-trumps="onPickTrumps" />
  </div>
</template>

<script>
import CardsPlayed from "./components/CardsPlayed";
import Hand from "./components/Hand";
import TrumpsPicker from "./components/TrumpsPicker";

export default {
  name: "Board",
  props: ["G", "ctx", "moves", "events", "playerID"],
  components: {
    CardsPlayed,
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
      this.moves.playCard(card);
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
