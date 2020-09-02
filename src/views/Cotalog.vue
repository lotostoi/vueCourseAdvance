<template>
  <section class="mt-1">
    <div v-if="goods.length>0" class="container border rounded pl-3 pr-3 pb-3">
      <h1>Catalog</h1>
      <div class="cont-prod">
        <section class="prod" v-for="good in goods" :key="good.id">
          <img :src="good.img" :alt="good.title" />
          <h3>{{good.title}}</h3>
          <p>${{good.price}}</p>
          <router-link :to="{ name: 'Good', params: { id: good.id }}">Подробнее...</router-link>

          <transition enter-active-class="btn-enter" leave-active-class="btn-leave" mode="out-in">
            <button
              v-if="checkInCart(good.id)"
              class="btn btn-info persp"
              @click="decCart({id:good.id})"
              :disabled="good.inProcessing"
              :class="good.inProcessing ? 'blok-btn': ''"
              key="remove"
            >Remove from cart</button>

            <button
              v-else
              class="btn btn-info persp"
              :class="good.inProcessing ? 'blok-btn': ''"
              @click="addCart({id:good.id})"
              key="add"
              :disabled="good.inProcessing"
            >Add to cart</button>
          </transition>
        </section>
      </div>
    </div>
    <div v-else class="spa-loading-cont">
      <div class="spinner-border" style="width: 10rem; height: 10rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </section>
</template>

<script>
import AppProduct from "../components/good";
import { mapGetters, mapActions } from "vuex";
import { BCard } from "bootstrap-vue";

export default {
  components: {
    AppProduct,
    BCard
  },
  computed: {
    ...mapGetters({ goods: "cotalog/goods", checkInCart: "cart/checkInCart" })
  },
  methods: {
    ...mapActions({ decCart: "cart/decCart", addCart: "cart/addCart" })
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

.cont-prod {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
h1{
  text-align: center;
  margin: 10px;
}

.prod {
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  width: 30%;
 
  flex-direction: column;
  padding: 20px 10px;
  align-items: center;
  margin-bottom: 10px;
  & > img {
    width: 90%;
  }
  & > button {
    width: 90%;
  }
}

a {
  display: flex;
  width:90%;
  margin-bottom: 10px;
}

h3 {
  margin: 10px 0;
  width: 90%;
  text-align-last: left;
  font-size: 20px;
}
p {
  margin: 10px 0;
  width: 90%;
  text-align-last: left;
  font-size: 20px;
}

.btn-leave {
  animation: leave 0.3s linear forwards;
}
.btn-enter {
  animation: enter 0.3s linear forwards;
}
</style>