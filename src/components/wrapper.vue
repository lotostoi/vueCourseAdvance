<template>
  <div>
    <slot v-if="load"></slot>
    <div class="spinner-border m-5" style="width: 10rem; height: 10rem;" role="status" v-else>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
<script >
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    load: false,
  }),
  async created() {
    await this.ready;
    process.isClient && (this.load = true);
  },
  computed: {
    ...mapGetters({ redy: "user/ready" }),
  },
};
</script>