<template>
  <form class="form">
    <transition enter-active-class="enter" leave-active-class="leave" mode="out-in">
      <div class="login" v-if="!user" key="login">
        <div class="fields">
          <b-form-input v-model="authData.login" placeholder="Login"></b-form-input>
        </div>
        <div class="fields">
          <b-form-input v-model="authData.password" placeholder="Password" type="password"></b-form-input>
        </div>
        <div class="fields">
          <button type="button" class="btn btn-primary" @click="tryLogin">Login</button>
        </div>
        <div v-if="authData.errorText != ''">
          <p class="mt-2 mb-0 text-danger">{{ authData.errorText }}</p>
        </div>
      </div>
      <div class="logout" v-else key="logOut">
        <div class="fields">
          <strong>User name:</strong>
          <span class="ml-2">{{user.login}}</span>
        </div>

        <div class="fields">
          <button type="button" class="btn btn-danger" @click="logOut">LogOut</button>
        </div>
      </div>
    </transition>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { BFormInput, BFormTextarea } from "bootstrap-vue";

export default {
  components: {
    BFormInput,
  },
  data() {
    return {
      authData: {
        login: "",
        password: "",
        errorText: "",
      },
    };
  },
  created() {
    this.$store.dispatch("title/setTitle", "Enter");
  },

  computed: {},
  methods: {
    ...mapActions({
      login: "user/login",
      logOut: "user/logOut",
    }),
    async tryLogin() {
    
      let data = await this.login({
        login: this.authData.login,
        password: this.authData.password,
      });

   

      if (data.res) {
        this.authData.login = "";
        this.authData.password = "";
        this.authData.errorText = "";
        this.$router.push({ name: "office" });
      } else {
        this.authData.errorText = data.errors.join(",");
      }
    },
  },
  computed: {
    ...mapGetters({
      user: "user/user",
    }),
  },
};
</script>

<style lang="scss" scoped>
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

.leave {
  animation: leave 0.3s linear forwards;
}

.enter {
  animation: enter 0.3s linear forwards;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  align-items: center;
  border: 1px solid rgba(79, 79, 233, 0.226);
  border-radius: 10px;
}
.login {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.logout {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.fields {
  width: 50%;
  margin: 10px;
}
</style>