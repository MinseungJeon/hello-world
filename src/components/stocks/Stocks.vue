<template>
  <div>
    <app-stock
      v-for="(stock, id) in stocks"
      :key="id"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 100 },
        { id: 2, name: "Google", price: 130 },
        { id: 3, name: "Apple", price: 50 },
        { id: 4, name: "Twitter", price: 8 },
      ],
    };
  },
  components: {
    appStock: Stock,
  },
};
</script>
