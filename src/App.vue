<template>
    <div>
        <router-link :to="{name:'time'}">Timer</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name : 'App',
    components:{
    }
}
</script>
<style>
a{
    font-size: 20px;
    text-decoration: none;
    font-weight: bolder;
}
</style>
