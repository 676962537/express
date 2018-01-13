<template>
    <div>
        <div @click="fn">添加</div>
        <div @click="show">展示所有</div>
        <!--<div @click="add">添加</div>-->
        <div v-for="item in list" v-text="item.place"></div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        created(){
        },
        data(){
          return {
              list:[]
          }
        },
        methods:{
            add(){
                var obj={
                    "mahenan":"陈红"
                }
                axios.post("/add",obj).then(function (res) {

                })
            },
            fn(){
                var obj={
                    "mahenan":"mahenanhahaha"
                };
                var that=this;
                axios.post("/post",obj).then(function (res) {
                    that.list=that.list.concat(res.data);
                })
            },
            show(){
                var obj={
                    "mahenan":"mahenanhahaha"
                };
                var that=this;
                axios.post("/show",obj).then(function (res) {
                    that.list=that.list.concat(res.data);
                })
            }
        }
    }
</script>
<style scoped>

</style>