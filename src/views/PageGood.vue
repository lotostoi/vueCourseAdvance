<template>
  <div class="spa-cont">
    <div v-if=" id && item" class="spa-cont-good">
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
      <p class="price">Prise: $ {{item.price}}</p>

      <hr />

      <div class="mb-1">Current Product Rating: {{ currentRating }}({{amountMarks}} marks)</div>
      <div class="row" v-if="showRatingEdit">
        <div class="col col-2">
          <div>
            <small>Your last mark: {{lastMark || '...'}}</small>
          </div>
          <div>
            <small>Your current mark: {{currentMark || '...'}}</small>
          </div>
        </div>
        <div class="col col-8">
          <b-form-rating v-model="userMark"></b-form-rating>
        </div>
        <div class="col col-2">
          <button class="btn btn-primary" :disabled="blockButton" @click="sendRating">Send</button>
        </div>
      </div>
      <hr />

      <p class="spa-description">{{item.description}}</p>

      <router-link :to="{name:'Cotalog'}">Back to producs</router-link>
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
import { BFormRating } from "bootstrap-vue";
import { getRating, sentRating } from "@/api/cotalog";

export default {
  data() {
    return {
      userMark: "",
      rating: null,
      lastMark: null,
    };
  },
  created() {
    this.$store.getters["user/ready"].then(() => this.gRaring());
   
    this.$store.dispatch("title/setTitle", `${this.item.title}`);
 

  },
  components: {
    Spa404,
    BFormRating,
  },

  methods: {
    ...mapActions({
      decCart: "cart/decCart",
      addCart: "cart/addCart",
      alert: "alerts/add",
    }),
    async sendRating() {
      let res = await sentRating(this.id, this.userMark);

      res && this.gRaring();
    },
    gRaring() {
      getRating(this.id).then((data) => {
        this.rating = data;
        this.lastMark = data.your;
      });
    },
  },
  computed: {
    ...mapGetters({
      goods: "cotalog/goods",
      good: "cotalog/getGood",
      checkInCart: "cart/checkInCart",
      checkRole: "user/checkRole",
      user: "user/user",
      ready: "user/ready",
    }),
    id() {
      return /\D/.test(this.$route.params.id) ? false : this.$route.params.id;
    },
    item() {
      return this.good(this.id);
    },
    currentMark() {
      return this.userMark === "" ? 0 : this.userMark;
    },
    currentRating() {
      return this.rating ? this.rating.average.toFixed(2) : 0;
    },
    showRatingEdit() {
      return this.user && this.checkRole(["auditor"]);
    },
    blockButton() {
      return this.currentMark === this.lastMark || this.currentMark === 0;
    },
    amountMarks() {
      return this.rating ? this.rating.count : "";
    },
  },
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

.price {
  margin: 0;
}

.btn-leave {
  animation: leave 0.3s linear forwards;
}

.btn-enter {
  animation: enter 0.3s linear forwards;
}

hr {
  width: 100%;
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
  width: 30%;
}

.spa-cont-buttons {
  display: flex;
  width: 30%;
  justify-content: center;
  margin: 10px 0;
}

.spa-description {
  text-indent: 20px;
  text-align: justify;
}
</style>
