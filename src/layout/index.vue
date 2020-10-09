<template>
  <div :class="classObj" class="app-wrapper">
    <!--<sidebar class="sidebar-container" />-->
    <!--<div class="main-container">-->
      <!--<div :class="{'fixed-header':fixedHeader}">-->
        <!--<navbar />-->
      <!--</div>-->
      <!--<app-main />-->
    <!--</div>-->
    <!---->
    <header>
      <h1><img :src="logo"/>系统名</h1>
      <!--<div style="margin-left: auto"></div>-->

      <top-menu></top-menu>
      <user-menu></user-menu>
    </header>

    <main>
      <side-bar></side-bar>
      <app-main/>
    </main>
  </div>
</template>

<script>
import TopMenu from "./components/TopMenu";
import UserMenu from "./components/UserMenu";
import AppMain from "./AppMain";
import SideBar from "./components/SideBar";
export default {
  name: 'Layout',
  components: {
    SideBar,
    AppMain,
    UserMenu,
    TopMenu
  },
  data(){
    return{
      logo: require("../assets/logo.png")
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../style/variables";

  .app-wrapper{
    display: flex;
    flex-direction: column;
    height: 100vh;

    header {
      height: 64px;
      background-color: $header-bg-color;
      color: $header-color;
      display: flex;
      padding: 0 24px;
      align-items: center;
      box-shadow: rgba(0,0,0,0.5) -5px 0 5px;
      justify-content: space-between;


      h1 {
        font-size: 24px;
        margin: 0 16px;
        letter-spacing: 2px;
        display: flex;
        align-items: center;

        img{
          width: 48px;
          margin-right: 20px;
        }
      }

    }

    main {
      display: flex;
      flex: 1;
      position: relative;
    }

  }
</style>
