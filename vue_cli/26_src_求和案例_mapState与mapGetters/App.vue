<template>
    <div>
      <count/>
    </div>
</template>

<script>
    import Count from './components/Count.vue'

    export default {
      name:'App',
      components: { 
          Count:Count
      },
      mounted() {
        // console.log('App', this);
      }
    }
</script>

<style>
  
</style>