<template>
  <nav class="col-2 mt-2">
    <ul class="list-group">
      <router-link
        exact
        active-class="spa-nav-link-active"
        class="list-group-item"
        v-for="rout in menu"
        :to="{name:rout.name}"
        :key="rout.path"
        teg="li"
      >
        <a>{{rout.name}}</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "Main"
        },
        {
          name: "Cotalog"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.spa-nav-link-active {
  background-color: rgb(144, 144, 144);
  text-decoration: none;
}

a {
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: none;
    color:black;
  }
}
</style>