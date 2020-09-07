<template>
  <div>
    <h1>User orders</h1>
  </div>
</template>

<script>
import server from "@/api/http";
import { mapActions } from "vuex";
export default {
  created() {
    server.get("orders.php")
	.then(console.log)
	.catch(()=> {
		this.logOut() 
		this.$router.push({ name: "Login" });
	});
  },
  methods: {
    ...mapActions({
      logOut: "user/logOut",
    }),
  },
};
</script>