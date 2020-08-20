<template>
  <div class="hand">
    <card
      class="card"
      v-for="card in hand"
      :key="card.rank + card.suit"
      :rank="card.rank"
      :suit="card.suit"
      @card-clicked="$emit('played-card', card)"
    />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "Hand",
  props: ["hand", "availableCards"],
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
