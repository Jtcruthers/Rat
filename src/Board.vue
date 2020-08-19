<template>
  <div>
    <hand :hand="G.deck" />
  </div>
</template>

<script>
import Hand from "./components/Hand";

export default {
  name: "Board",
  props: ["G", "ctx", "moves", "events", "playerID"],
  components: {
    hand: Hand,
  },
};
</script>
