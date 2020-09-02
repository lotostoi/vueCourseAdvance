<template>
  <div class="cont">
    <h1>404</h1>
    <router-link :to="{name:'Main'}">Come back to Home page....</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cont {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>