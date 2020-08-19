<template>
  <div class="pickers">
    <button class="red" @click="$emit('pick-trumps', 'H')">
      <span>♥️</span>
    </button>
    <button class="red" @click="$emit('pick-trumps', 'D')">
      <span>♦</span>
    </button>
    <button class="black" @click="$emit('pick-trumps', 'S')">
      <span>♠️</span>
    </button>
    <button class="black" @click="$emit('pick-trumps', 'C')">
      <span>♣️</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "TrumpsPicker",
  methods: {
    pickTrumps() {},
  },
};
</script>

<style scoped>
.pickers {
  width: 100%;
}

button {
  width: 10%;
  margin: 20px 10px;
  height: 40px;
  border-radius: 10px;
  border: none;
  font-size: 25px;
}

span {
  background-color: white;
  border-radius: 100%;
  display: inline-block;
  width: 30px;
  height: 30px;
}
.red {
  background-color: #cc3329;
  color: #cc3329;
}

.black {
  background-color: #020202;
  color: #020202;
}
</style>
