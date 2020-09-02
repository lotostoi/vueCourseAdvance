<template>
  <div class="spa-cont">
    <div v-if="id && item" class="spa-cont-good">
      <img class="spa-img" :src="item.img" alt />
      <div class="spa-cont-buttons">
        <transition enter-active-class="btn-enter" leave-active-class="btn-leave" mode="out-in">
          <button
            v-if="checkInCart(id)"
            class="btn btn-info btn-block persp"
            @click="decCart({id:id})"
            key="remove"
            :disabled="item.inProcessing"
            :class="item.inProcessing ? 'blok-btn': ''"
          >Remove from cart</button>
          <button
            v-else
            class="btn btn-info btn-block persp"
            @click="addCart({id:id})"
            key="add"
            :disabled="item.inProcessing"
            :class="item.inProcessing ? 'blok-btn': ''"
          >Add to cart</button>
        </transition>
      </div>
      <h1>{{item.title}}</h1>
      <p>Prise: $ {{item.price}}</p>
      <p class="spa-description">{{item.description}}</p>
    
    </div>
    <div v-else class="spa-loading-cont">
      <div class="spinner-border" style="width: 10rem; height: 10rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import Spa404 from "@/components/404";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Spa404
  },
  methods: {
    ...mapActions({ decCart: "cart/decCart", addCart: "cart/addCart" })
  },
  computed: {
    ...mapGetters({ good: "cotalog/getGood", checkInCart: "cart/checkInCart" }),
    id() {
      return /\D/.test(this.$route.params.id) ? false : this.$route.params.id;
    },
    item() {
      return this.good(this.id)
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes leave {
  from {
    opacity: 1;
  }
  to {
    transform: translateX(30px);
    opacity: 0;
  }
}
@keyframes enter {
  from {
    transform: translateX(-30px);

    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.btn-leave {
  animation: leave 0.3s linear forwards;
}
.btn-enter {
  animation: enter 0.3s linear forwards;
}
.spa-cont-good {
  padding: 20px;
  border: 1px solid rgba(128, 128, 128, 0.637);
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
}
.spa-img {
  width: 40%;
}
.spa-cont-buttons {
  display: flex;
  width: 40%;
  justify-content: center;
  margin: 10px 0;
}
.spa-description {
  text-indent: 20px;
  text-align: justify;
}
</style>