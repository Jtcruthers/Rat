<template>
  <div class="cards-played">
    <card
      class="card"
      v-for="card in cards"
      :key="card.rank + card.suit"
      :rank="card.rank"
      :suit="card.suit"
    />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "CardsPlayed",
  props: ["cards"],
  components: {
    card: Card,
  },
};
</script>

<style scoped>
.card {
  margin: 100px 20px 0 20px;
}
</style>
