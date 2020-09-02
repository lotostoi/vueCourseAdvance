

<template>
  <div class="mt-1">
    <div v-if="status" class="spa-cart-container border rounded p-2">
      <h1>Cart</h1>
      <table v-if="goodsDitailed.length>0" class="spa-table">
        <thead>
          <tr class="spa-table-header">
            <th class="spa-img">Image</th>
            <th class="spa-name">Name</th>
            <th class="spa-price">Price</th>
            <th class="spa-amount">Amount</th>
          </tr>
        </thead>
        <transition-group leave-active-class="prod-leave" teg="tbody">
          <tr class="spa-table-row" v-for="good in goodsDitailed" :key="good.id">
            <th class="spa-img">
              <img :src="good.img" alt="good.img" />
            </th>
            <td class="spa-name">
              <router-link :to="{ name: 'Good', params: { id: good.id }}">
                <span>{{good.title}}</span>
              </router-link>
            </td>
            <td class="spa-price">$ {{good.price}}</td>
            <td class="spa-amount">
              <div class="spa-div">
                <button
                  class="btn btn-warning"
                  @click="decCart({id:good.id})"
                  :disabled="good.inProcessing"
                  :class="good.inProcessing ? 'blok-btn': ''"
                >-1</button>
                <input
                  type="text"
                  class="spa-input"
                  :value="good.cnt"
                  @change="chengCart({id:good.id,e:$event})"
                />
                <button
                  class="btn btn-success"
                  @click="incCart({id:good.id})"
                  :disabled="good.inProcessing"
                  :class="clearCartBlok ? 'blok-btn': ''"
                >+1</button>
              </div>
            </td>
          </tr>
        </transition-group>
      </table>
      <div class="cartEmpty" v-else>
        <p>Cart is empty...</p>
        <p>
          Select some products from the
          <router-link :to="{name:'Cotalog'}">catalog</router-link>
        </p>
      </div>
      <hr />
      <p>TotalQuantit: {{ total.cnt }}</p>
      <p>TotalPrice: {{ total.price }}</p>
      <hr />
      <button v-if="goodsDitailed.length>0" class="btn btn-success clear" @click="clear" :disabled="clearCartBlok">Clear cart</button>
    </div>
    <div v-else class="spa-loading-cont">
      <div class="spinner-border" style="width: 10rem; height: 10rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { BCard } from "bootstrap-vue";

export default {
  components: { BCard },
  computed: {
    ...mapGetters({
      goodsInCart: "cart/goodsInCart",
      total: "cart/total",
      goodsDitailed: "cart/goodsDitailed"
    }),
    status() {
      return this.$store.state.cart.status;
    },
    clearCartBlok() {
      return this.$store.state.cart.clearCartBlok;
    }
  },
  methods: {
    ...mapActions({
      decCart: "cart/decCart",
      incCart: "cart/incCart",
      chengCart: "cart/chengCart",
      clear: "cart/clearCart"
    })
  }
};
</script>
<style lang="scss" scoped>
@keyframes prod-leave {
  from {
    transform: translate(0, 0);
    opacity: 1;
  }
  25% {
    transform: translate(50px, -50px);
    opacity: 0.75;
  }
  50% {
    transform: translate(100px, 20px);
    opacity: 0.5;
  }
  75% {
    transform: translate(150px, 70px);
    opacity: 0.25;
  }
  to {
    transform: translate(250px, 50px);
    opacity: 0;
  }
}
@keyframes leave {
  from {
    perspective-origin: 50% 0%;
    transform: rotate3d(0, 1, 0, 0);
    opacity: 1;
  }
  to {
    transform: rotate3d(0, 1, 0, 90deg);
    opacity: 1;
  }
}
@keyframes enter {
  from {
    perspective-origin: 50% 0%;
    transform: rotate3d(0, 1, 0, -90deg);

    opacity: 1;
  }

  to {
    opacity: 1;
    transform: rotate3d(0, 1, 0, 0);
  }
}
.cont-anim {
  perspective: 10000px;
  transform-style: preserve-3d;
}

.leave {
  animation: leave 0.3s linear forwards;
}
.enter {
  animation: enter 0.3s linear forwards;
}

.prod-leave {
  animation: prod-leave 0.5s linear forwards;
}

.spa-cart-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

hr {
  width: 100%;
}
h1 {
  text-align: center;
  margin: 0 0 30px;
}

p {
  text-align: right;
}

.cartEmpty {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.clear {
  margin-left: auto;
}
.spa-table {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.spa-table-header {
  border-radius: 5px;
  padding: 10px 20px 10px 0;
  display: flex;
  justify-content: space-between;
  background-color: rgb(97, 95, 95);
  color: #fff;
  margin-bottom: 5px;
}
.spa-table-row {
  border-radius: 5px;
  padding: 10px 20px 10px 0;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(128, 128, 128, 0.493);
  background-color: rgba(200, 199, 199, 0.082);
  color: rgb(59, 59, 59);
  margin-bottom: 5px;
}

.spa-img {
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
}
.spa-price {
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
}
.spa-name {
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
}
.spa-amount {
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
}

.spa-div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.spa-input {
  width: 60px;
  height: 37px;
  margin: 0 10px;
}
</style>