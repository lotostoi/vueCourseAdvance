<template>
  <div class="border ">
    

    <img   class="col col-sm-8" :src="good.img" alt="name">
    <h2 class="col col-sm-8">{{good.name}}</h2>
    <div class="price">{{ good.price}}</div>
  
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    good: {
      type: Object,
      required: true
    }
  },
  computed: mapGetters(["price", "cnt"]),
  methods: {
    ...mapActions(["getCnt"]),
    chengCnt(id, e) {
      this.getCnt({ id: id, e: e });
    }
  }
};
</script>