<template>
    <div>
        <div @click="fn">mahenan</div>
        <div v-for="item in list" v-text="item.name"></div>
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
            fn(){
                var obj={
                    "mahenan":"mahenanhahaha"
                };
                var that=this;
                axios.post("/post",obj).then(function (res) {
                    that.list=that.list.concat(res.data.data.list);
                })
            }
        }
    }
</script>
<style scoped>

</style>