<template>
<div class="cont-arlet">
    <div class="message" v-for="(alert,index) in alerts" :key="index+1">
        <p>{{alert.text}}</p>
    </div>
</div>
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
.cont-arlet {
    position: fixed;
    right: 10px;
    top: 10px;
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
    padding: 5px;
    border-radius: 4px;
    background-color: rgba(255, 0, 0, 0.493);

    &>p {
        margin: 0;
        display: flex;
    }
}
</style>
