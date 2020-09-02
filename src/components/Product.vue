<template>
  <div>
    <h2>{{good.name}}</h2>
    <div class="price">{{ good.price}}</div>
    <hr />
    <button class="btn btn-warning" @click="chengCnt(good.id, $event)">-1</button>
    <input type="text" :value="good.cnt" @change="chengCnt(good.id, $event)" />
    <button class="btn btn-success" @click="chengCnt(good.id, $event)">+1</button>
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