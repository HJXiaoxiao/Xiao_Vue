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
        <!-- <button @click="INCREMENT(n)">+</button>
        <button @click="DECREMENT(n)">-</button> -->
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
  
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

    export default {
        name:'Count',
        data() {
            return {        
                n:1,   // 用户选择的数字
            }
        },
        methods:{
            // 程序员亲自写方法
            /*            
            increment(){
                this.$store.commit('INCREMENT', this.n);
            },
            decrement(){
                this.$store.commit('DECREMENT', this.n);
            }, */

            // 借助mapMutations生成对应方法，方法会调用commit去联系mutations(对象写法)
            ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}),

            // 借助mapMutations生成对应方法，方法会调用commit去联系mutations(数组写法)
            // ...mapMutations(['INCREMENT','DECREMENT']),
            /* *********************************************** */
/*             incrementOdd(){
                this.$store.dispatch('incrementIfOdd', this.n);
            },
            incrementWait(){
                this.$store.dispatch('incrementWait', this.n);
            } */
            ...mapActions({incrementOdd:'incrementIfOdd',incrementWait:'incrementWait'})
            //...mapActions(['incrementIfOdd','incrementWait'])
        },
        computed: {  

            // 1.借助mapState从state中生成计算属性，从state中读取数据(对象写法)
            // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

            // 2.借助mapState从state中生成计算属性，从state中读取数据(数组写法)
             ...mapState(['sum','school','subject']),

            /* ************************************************************** */ 
            
            // 借助mapGetters从state中生成计算属性，从getters中读取数据(数组写法)
            ...mapGetters(['bigSum'])

            // 借助mapGetters从state中生成计算属性，从getters中读取数据(对象写法)
            // ...mapGetters({bigSum:'bigSum'})

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