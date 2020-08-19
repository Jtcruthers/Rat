<template>
  <div class="hand">
    <card
      v-for="card in hand"
      :key="card.rank + card.suit"
      :rank="card.rank"
      :suit="card.suit"
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
