<template>
  <div class="container">
    <app-header @showCart="on=false" @showCotalog="on=true"></app-header>
    <div class="row main">
      <app-nav class="mt-5"></app-nav>
      <div class="col-10 mt-5 contAnim">
        <transition enter-active-class="enter" leave-active-class="leave" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppContent from "./views/Cotalog";
import AppCart from "./views/Cart";
import AppNav from "./components/nav";
import { mapGetters, mapActions } from "vuex";
import AppFooter from "@/components/footer"

export default {
  components: {
    AppHeader,
    AppContent,
    AppCart,
    AppNav,
    AppFooter
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters({ orderStatus: "status" })
  },
  methods: {
    ...mapActions({ makeOrder: "send" })
  }
};
</script>
<style lang="scss">
//**** Start global classes *****************************/

@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

body {
  min-height: calc(100vh + 1px);
  font-family: "Roboto", sans-serif;
}

.blok-btn {
  cursor: not-allowed;
}

.spa-loading-cont {
  display: flex;
  width: 100%;
  padding: 200px 20px;
  justify-content: center;
  align-items: center;
}

.main {
  min-height: calc(100vh - 150px);
}

//**** End global classes *****************************/

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

.contAnim {
  perspective: 10000px;
  transform-style: preserve-3d;
}

.leave {
  animation: leave 0.3s linear forwards;
}
.enter {
  animation: enter 0.3s linear forwards;
}
</style>