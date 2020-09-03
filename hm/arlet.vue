<template>
<transition-group class="cont-arlet" teg="div" leave-active-class="leave" enter-active-class="enter" mode="out-in">
    <div class="message" v-for="(alert,index) in alerts" :key="index+1">
        <p>{{alert.text}}</p>
    </div>
</transition-group>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";
export default {
    computed: {
        ...mapGetters({
            alerts: "alerts/all",
        }),
    },
};
</script>

<style lang="scss" scoped>
@keyframes leave {
    from {
        opacity: 1;
        transform: scale(1);
    }

    to {
        transform: scale(0);
        opacity: 0;
    }
}

@keyframes enter {
    from {
        transform: scale(0);

        opacity: 0;
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.leave {
    animation: leave 0.3s linear forwards;
}

.enter {
    animation: enter 0.3s linear forwards;
}

.cont-arlet {
    position: fixed;
    right: 5px;
    top: 5px;
    width: 200px;
    flex-direction: column;
    justify-content: center;
}

.message {
    display: flex;
    align-items: flex-end;
    width: 100%;
    font-size: 15px;
    color: black;
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 4px;
    background-color: rgba(255, 0, 0, 0.493);

    &>p {
        margin: 0;
        display: flex;
    }
}
</style>
