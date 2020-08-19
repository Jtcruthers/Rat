<template>
  <div>
    <card :rank="2" :suit="'H'" />
  </div>
</template>

<script>
import Card from "./components/Card";

export default {
  name: "Board",
  props: ["G", "ctx", "moves", "events", "playerID"],
  components: {
    card: Card,
  },
};
</script>
