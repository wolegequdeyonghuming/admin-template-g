<template>
  <div class="app-breadcrumb" v-show="!$route.meta.hideBreadCrumb">

    <div class="icon-wrapper" @click="$store.commit('app/TOGGLE_SIDEBAR')">
      <i class="mdi mdi-menu-open"></i>
    </div>

    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in levelList" :key="item.path">
          <span class="no-redirect">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "BreadCrumb",
    data(){
      return{
        levelList: null,
      }
    },
    methods:{
      getBreadcrumb() {
        let matched = this.$route.matched.filter(
          item => item.meta && item.meta.title
        );
        const first = matched[0];

        this.levelList = matched.filter(
          item =>
            item.meta &&
            item.meta.title &&
            item.meta.breadcrumb !== false
        )
        console.log(matched, this.levelList)
      },

    },
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    created() {
      this.getBreadcrumb()
    },
  }
</script>

<style scoped lang="scss">
  @import "../../style/variables";

  .app-breadcrumb {
    font-size: 14px;
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0,0,0,0.3) 0 1px 3px;

    .icon-wrapper{
      width: 56px;
      height: 32px;
      cursor: pointer;
      text-align: center;
      line-height: 32px;
      transition-duration: 0.2s;

      .mdi-menu-open{
        font-size: 20px;
        color: $bread-crumb-icon-color;
      }
    }

    .no-redirect {
      color: $bread-crumb-text-color;
      cursor: text;
    }
  }

  .hideSidebar {
    .app-breadcrumb{
      .icon-wrapper{
        transform: rotate3d(0,1,0,180deg);
      }
    }
  }


  /* breadcrumb transition */
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all .5s;
  }

  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .breadcrumb-move {
    transition: all .5s;
  }

  .breadcrumb-leave-active {
    position: absolute;
  }

</style>