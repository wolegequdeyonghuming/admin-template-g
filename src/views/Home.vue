<template>
  <div><button @click="toggle">toggle</button> page. home page. home page. home page. home page. home page. home page. </div>
</template>

<script>
  export default {
    name: "Home",
    methods:{
      toggle(){
        this.$store.commit("app/TOGGLE_SIDEBAR")
      }
    }
  }
</script>

<style scoped>

</style>