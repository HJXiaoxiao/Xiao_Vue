<template>
    <div>
        
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- appear一加载就有动画  :appear="true"    简写 appear -->
        <transition name="hello" :appear="true">
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        name:'Test',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
    h1 {
        background-color: orange;
    }

/*     .v-enter-active {
        animation: guet 0.5s linear;
    }
    .v-leave-active {
        animation: guet 0.5s reverse linear;
    } */
    /* 若动画transition有name属性，则.v-enter-active =》 .(name)-enter-active */
    .hello-enter-active {
        animation: guet 0.5s linear;
    }
    .hello-leave-active {
        animation: guet 0.5s reverse linear;
    }

    @keyframes guet {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0px);
        }
    }
</style>