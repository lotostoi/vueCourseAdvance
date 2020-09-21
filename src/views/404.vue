<template>
  <spa-404/>
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