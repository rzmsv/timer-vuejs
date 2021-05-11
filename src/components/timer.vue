<template>
    <div class="container">
        <button class="duplicateButton" @click="duplicate">Duplicate</button>
        <ul>
            <timerButtons class="list" v-for="time in timers" :key="time.etag" :time="time"/>
        </ul>
    </div>
</template>
<script>
import timerButtons from "./timerButtones"
import {mapMutations, mapState} from "vuex";
export default {
    name : "timer",
    components:{
        timerButtons
    },
    computed: {
        ...mapState('timer',['timers'])
    },
    methods:{
        ...mapMutations('timer',['duplicate']),
    },
    
}
</script>
<style>
body{
    background-color: #2F0D48;
}
.container{
    width: 800px;
}
.duplicateButton{
    width: 150px;
    height: 40px;
    font-size: 17px;
    font-weight: bold;
    background-color:rgb(171, 102, 237);
    margin-left: 60px;
}
.list{
    margin-top: 50px;
    list-style-type: none;
}

</style>