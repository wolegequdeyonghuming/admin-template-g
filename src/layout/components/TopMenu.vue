<template>
  <div class="top-menu">

    <template v-for="(item, index) in menuItem">
      <el-dropdown
              trigger="click"
              @command="navigate"
              v-if="childrenItem(item).length>0"
              :key="index">
        <div class="top-menu-item" :class="activeItem(item) && 'active'">
          <i class="mdi menu-icon" :class="'mdi-'+item.meta.icon" v-if="item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>

        <el-dropdown-menu slot="dropdown" :appendToBody="false">
          <el-dropdown-item
                  v-for="child in childrenItem(item)"
                  :key="child.path"
                  :command="child.path"
                  :class="activeItem(item) && 'active'">
            {{child.meta.title}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div v-else :key="index">
        <router-link class="top-menu-item" :class="activeItem(item) && 'active'" :to="item.path">
          <i class="mdi menu-icon" :class="'mdi-'+item.meta.icon" v-if="item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
        </router-link>
      </div>
    </template>

  </div>
</template>

<script>
  export default {
    name: "TopMenu",
    computed: {
      menuItem(){
        return this.$router.options.routes.filter(item=>{
          return item.meta.level === "top"
        });
      },
    },
    methods: {
      activeItem(item){
        return this.$route.matched.filter(match =>{
          return match.meta.title === item.meta.title;
        }).length > 0;
      },
      childrenItem(item){
        return item.children.filter(child=>{
          return child.meta.level === "top"
        })
      },
      navigate(path){

        if(/^(https?:|mailto:|tel:)/.test(path)){
          window.open(path, 'no-referer')
        }else if(path !== this.$route.path){
          this.$router.push(path);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/variables";

  .top-menu{
    display: flex;
    height: 100%;

    .top-menu-item{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      /*width: 120px;*/
      padding: 0 16px;
      height: 100%;
      color: $header-color;
      position: relative;
      font-size: 14px;

      &:hover{
        cursor: pointer;
        background-color: $header-active-bg-color;
      }
      &.active{
        background-color: $header-active-bg-color;
        color: $menu-active-color;

        &:after{
          content: "";
          flex: none;
          position: absolute;
          width: 100%;
          height: 4px;
          background-color: $header-active-border-color;
          bottom: 0;
        }
      }

      .menu-icon{
        font-size: 20px;
        margin-right: 10px;
        color: $menu-icon-color;
      }
      span{

      }
    }

    ::v-deep .el-dropdown-menu{
      left: 0 !important;
      width: 100% !important;
      background-color: $header-bg-color;
      margin-top: 4px;

      .popper__arrow{
        display: none;
      }
      .el-dropdown-menu__item{
        color: $header-color !important;
        &:hover {
          background-color: $header-active-bg-color;
        }
        &.active {
          background-color: $menu-active-bg-color;
        }
      }
    }
  }
</style>