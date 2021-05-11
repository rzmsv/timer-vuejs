<template>
    <div>
        <li class="items">
            <div class="timer">
                <p>{{minutes}}</p>
                <span >:</span>
                <p>{{seconds}}</p>
            </div>
            <div class="buttons">
                <button v-if="time.start == false" class="start mdi mdi-play-circle-outline" @click="start(time.id)"></button>
                <button v-if="time.start == true" class="stop mdi mdi-stop-circle-outline" @click="stop(time.id)"></button>
                <button class="reset mdi mdi-undo-variant" @click="reset(time.id)"></button>
            </div>
        </li>
    </div>
</template>
<script>
import {mapMutations} from "vuex";
export default {
    name : 'timerButtones',
    props:["time"],
    data(){
        return{
            
        }
    },
    computed:{
        minutes() {
            return Math.floor(this.time.seconds / 60).toFixed(0)
        },
        seconds() {
            return this.time.seconds % 60
        }
    },
    methods:{
        ...mapMutations('timer',['start','reset','stop']),
    }
}
</script>
<style scoped>
.items{
    background-color:rgb(232, 82, 82);
    width: 180px;
    border: 2px solid wheat;
    padding-left: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
}
.buttons{
    margin-left: 28px;

}
.start{
    width: 50px;
    height: 50px;
    margin: 0 10px 0 0;
    border-radius: 50%;
    border: none;
    font-size: 30px;
    padding: 2px 0 0 0;
    
}
.stop{
    width: 50px;
    height: 50px;
    margin: 0 10px 0 0;
    border-radius: 50%;
    border: none;
    padding: 2px 0 0 0;
    font-size: 30px;
    background-color: rgb(228, 38, 38);
}
.reset{
    width: 50px;
    height: 50px;
    margin: 0 0x 0 0;
    border-radius: 50%;
    font-size: 30px;
    padding: 2px 0 0 0;
    border: none;
}
span{
    font-size: 50px;
    display: inline-block;
    padding: 0 20px;
    color: wheat;
}
p{
    font-size: 40px;
    display: inline-block;
    padding: 0 10px;
    color: wheat;
}
.timer{
padding-bottom: -50px;
padding-left: 12px;
}
</style>

