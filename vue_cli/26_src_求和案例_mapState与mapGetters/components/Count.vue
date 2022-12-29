<template>
    <div>
        <h2>当前求和为：{{sum}}</h2>
        <h3>当前求和放大10倍后为：{{bigSum}}</h3>
        <h3>我在{{school}}，学习{{subject}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
  
    import {mapState,mapGetters} from 'vuex'

    export default {
        name:'Count',
        data() {
            return {        
                n:1,   // 用户选择的数字
            }
        },
        methods:{
            increment(){
                this.$store.commit('INCREMENT', this.n);
            },
            decrement(){
                this.$store.commit('DECREMENT', this.n);
            },
            incrementOdd(){
                this.$store.dispatch('incrementIfOdd', this.n);
            },
            incrementWait(){
                this.$store.dispatch('incrementWait', this.n);
            }
        },
        computed: {
        // 靠程序员自己去写计算属性：he、xuexiao、xueke
        /*             
            he() {
                return this.$store.state.sum;
            },
            xuexiao() {
                return this.$store.state.school;
            },
            xueke() {
                return this.$store.state.subject;
            }, */
            
            // 1.借助mapState从state中生成计算属性，从state中读取数据(对象写法)
            // ES6解构赋值：将一个对象放到另一个对象里
            // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

            // 2.借助mapState从state中生成计算属性，从state中读取数据(数组写法)
            // 这类方法要computed属性名和真正读取的属性名(state中)相同才可以
             ...mapState(['sum','school','subject']),

            /* ************************************************************** */
/*             bigSum() {
                return this.$store.getters.bigSum;
            } */          
             
            // 借助mapGetters从state中生成计算属性，从getters中读取数据(数组写法)
            ...mapGetters(['bigSum'])
            // 借助mapGetters从state中生成计算属性，从getters中读取数据(对象写法) 
            // ...mapGetters([bigSum:'bigSum'])
        },
        mounted() { 
            // mapState映射状态
            const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
            console.log(x);
        }
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>