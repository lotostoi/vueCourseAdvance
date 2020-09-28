<template>
    <div  style="width: 100%; display: flex; justify-content: center;align-items: center;">
		<h1 style="font-size: 30px; display: flex;">Loading... </h1>
    </div>
</template>

<script>
import Spa404 from "@/components/404"
export default {
    components: {
        Spa404
    },
    created() {
      this.$store.dispatch('title/setTitle','404')
    }

}
</script>

<style>

</style>