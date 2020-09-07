<template>
  <div class="cont">
    <div class="nav">
      <router-link tag="p" class="links" :to="{name: 'office'}">
        <a>Main screen</a>
      </router-link>
      <router-link tag="p" class="links" :to="{name: 'office-orders'}">
        <a>Orders history</a>
      </router-link>
    </div>
    <div class="col col-9">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cont {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(135, 135, 223, 0.52);
  padding: 20px;
  border-radius: 10px;
}
.nav {
  display: flex;
  width: 100%;
}
.links {
  display: flex;
  margin-right: 10px;
  height: 50px;
  align-items: center;
}
</style>