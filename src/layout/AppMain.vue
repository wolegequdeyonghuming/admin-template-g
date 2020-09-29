<template>
  <section class="app-main">

    <bread-crumb></bread-crumb>

    <div class="page-container">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </div>
  </section>
</template>

<script>
import BreadCrumb from "./components/BreadCrumb";
export default {
  name: 'AppMain',
  components: {BreadCrumb},
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang="scss">
@import "../style/variables";

.app-main {
  flex: 1;
  position: relative;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;

  .page-container{
    flex: 1;
    padding: 16px;
    overflow-x: hidden;
  }

  &::-webkit-scrollbar {
    width: $scrollbar-width;
  }
  &::-webkit-scrollbar-track{
    background-color: $scrollbar-track-bg;
  }
  &::-webkit-scrollbar-thumb{
    background-color: $scrollbar-thumb-bg;
  }

  /* fade-transform */
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .3s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
