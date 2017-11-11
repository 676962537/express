<template>
    <div @click="fn">mahenan</div>
</template>
<script>
    import axios from "axios"
    export default {
        created(){
            alert("mahenan");
        },
        methods:{
            fn(){
                var obj={
                    "mahenan":"mahenanhahaha"
                };
                axios.post("/post",obj).then(function (res) {
                    console.log(res.data);
                })
            }
        }
    }
</script>
<style scoped>

</style>