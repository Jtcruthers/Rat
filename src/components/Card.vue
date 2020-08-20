<template>
  <span class="card">
    <img
      :src="imageUrl"
      :alt="cardID"
      @click="$emit('card-clicked', cardID)"
      width="200px"
    />
  </span>
</template>

<script>
export default {
  name: "Card",
  props: ["rank", "suit"],
  computed: {
    cardID() {
      return `${this.rank}${this.suit}`;
    },
    imageUrl() {
      return require(`../assets/${this.cardID}.png`);
    },
  },
};
</script>
