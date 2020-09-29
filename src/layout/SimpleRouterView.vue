<template>
  <router-view :key="key" />
</template>

<script>
  export default {
    name: "SimpleRouterView",
    computed: {
      key() {
        return this.$route.path
      }
    }
  }
</script>

<style scoped>

</style>