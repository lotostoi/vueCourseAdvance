<template>
  <header>
    <div class="container">
      <div class="d-block">
        <div class="cont">
          <router-link :to="{name:'Main'}" class="hover">
            <h1>Silmple SPA</h1>
          </router-link>
          <router-link :to="{name:'Cart'}" class="cart" active-class="cart-activ">
            <b-icon-cart icon="cart" class="b-icon hover ml-10"></b-icon-cart>
            <div>
              <p>Amount: {{total.cnt}}</p>
              <p>Price: ${{total.price}}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { BIconCart } from "bootstrap-vue";
import { mapGetters } from "vuex";
import { BNavbar, BNavbarBrand, BNavbarNav } from "bootstrap-vue";

export default {
  components: {
    BIconCart
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters({ total: "cart/total" })
  }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: rgb(204, 203, 203);
  //border-bottom: 1px solid gray;
}

.cont {
  padding: 20px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    & > h1 {
      color: rgb(75, 74, 74);
      font-size: 20px;
    }
  }

  & > .cart {
    display: flex;
    padding: 5px;
    border-radius: 5px;
    & > div {
      display: flex;
      flex-direction: column;
      & > p {
        margin: 0 0 0 10px;
        padding: 0;
        font-size: 14px;
      }
    }
  }
  & > .cart-activ {
    background-color: rgba(69, 69, 70, 0.418);
  }
  & > .cart:hover {
    background-color: #17a2b8;
  }

  & > .cart > .b-icon {
    font-size: 40px;
  }
  & > .cart > p {
    margin: 0;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
}
.hover {
  &:hover {
    color: rgb(182, 89, 89);
    cursor: pointer;
  }
}
</style>

