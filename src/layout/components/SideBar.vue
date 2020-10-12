<template>
  <div class="side-bar" v-if="menuItem.length > 0">

    <div v-for="item in menuItem"
         :key="item.path">
      <side-bar-item :meta="item.meta" :path="item.path" v-if="!hasChild(item)"></side-bar-item>
      <side-bar-nested-item :meta="item.meta" :path="item.path" :children="item.children" v-else></side-bar-nested-item>
    </div>

    <!--<el-menu-->
            <!--:default-active="currentRoute"-->
            <!--:default-openeds="currentOpened"-->
            <!--:collapse="isCollapse"-->
            <!--:background-color="variables.menuBg"-->
            <!--:text-color="variables.menuText"-->
            <!--:active-text-color="variables.menuActiveText"-->
            <!--:unique-opened="false"-->
            <!--:collapse-transition="false"-->
            <!--router-->
            <!--mode="vertical"-->
            <!--class="side-bar-menu"-->
            <!--ref="menu"-->
    <!--&gt;-->
      <!--<div v-for="item in menuItem"-->
           <!--:key="item.path">-->
        <!--&lt;!&ndash;<side-bar-item :meta="item.meta" v-if="!hasChild(item)"></side-bar-item>&ndash;&gt;-->
        <!--&lt;!&ndash;<side-bar-nested-item :meta="item.meta" v-else></side-bar-nested-item>&ndash;&gt;-->

        <!--<el-menu-item :index="item.path" v-if="!hasChild(item)">-->
          <!--<div>{{item.meta.title}}</div>-->
        <!--</el-menu-item>-->

        <!--<el-submenu v-else :index="item.path">-->
          <!--<template slot="title">-->
            <!--<span>{{item.meta.title}}</span>-->
          <!--</template>-->
          <!--<div v-for="itemChildren in item.children" :key="itemChildren.path" :to="itemChildren.path">-->
            <!--<el-menu-item :index="itemChildren.path">-->
              <!--{{itemChildren.meta.title}}-->
            <!--</el-menu-item>-->
          <!--</div>-->
        <!--</el-submenu>-->
      <!--</div>-->
    <!--</el-menu>-->

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SideBarItem from "./SideBarItem";
  import SideBarNestedItem from "./SideBarNestedItem";
  import variables from "../../style/variables.scss"

  export default {
    name: "SideBar",
    components: {SideBarNestedItem, SideBarItem},
    computed: {
      currentParentRoute(){
        return this.$router.options.routes.filter(item=>{
          return item.meta.level === "top" &&
            this.$route.matched.filter(match =>{
              return match.meta.title === item.meta.title;
            }).length > 0;
        })[0];
      },
      menuItem(){
        return this.currentParentRoute.children.filter(item=>{
          return item.meta.level === "side"
        });
      },
      ...mapGetters([
        'sidebar'
      ]),
    },
    methods: {
      hasChild(item){
        return item.children && item.children.length > 0;
      }
    },
    mounted(){
      console.log(this.menuItem)
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/variables";

  .side-bar{
    width: $side-bar-width;
    background-color: $side-bar-background;
    box-shadow: rgba(0,0,0,0.5) 0 5px 5px;
    transition: width 0.3s;
    /*padding: 0 8px;*/
    height: calc(100vh - 64px);
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: $scrollbar-width;
    }
    &::-webkit-scrollbar-track{
      background-color: $scrollbar-track-bg;
    }
    &::-webkit-scrollbar-thumb{
      background-color: $scrollbar-thumb-bg;
    }
  }
  .side-bar-menu{
    width: $side-bar-width;
  }

  .hideSidebar{
    .side-bar{
      width: 56px;
    }
  }
</style>