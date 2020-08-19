<template>
  <div>
    <hand :hand="G.deck" />
    <trumps-picker />
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
};
</script>
