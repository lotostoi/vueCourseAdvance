<template>
  <div>
    <h1>User orders</h1>
    <ul>
    <li v-for = "(order,i) in orders" :key="i">Order {{order}}</li>
    
    
    </ul>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {

  created() {
   this.getAll()
  },

  methods: {
    ...mapActions({
      logOut: "user/logOut",
      getAll: "orders/getAll",
    }),
  },
  computed: {
    ...mapGetters({
      orders: "orders/orders"
    })
  }
};

</script>