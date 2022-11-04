<template>
    <div>
        <h2 @click="showName">学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
    // 引入一个hunhe
    import {hunhe,hunhe2} from '../mixin'
    export default {
        name:'School',
        data() {
            return {
                name:'Guet',
                address:'桂林'
            }
        },
        mixins:[hunhe,hunhe2]
/*         methods: {
            showName() {
                alert(this.name);
            }
        }, */
    }
</script>