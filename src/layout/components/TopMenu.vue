<template>
  <div class="top-menu">

    <template v-for="(item, index) in menuItem">
      <el-dropdown
              trigger="click"
              @command="navigate"
              v-if="childrenItem(item).length>0"
              :key="index">
        <div class="top-menu-item" :class="activeItem(item) && 'active'">
          <i class="mdi" :class="'mdi-'+item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="child in childrenItem(item)" :key="child.path" :command="child.path">
            {{child.meta.title}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div v-else :key="index">
        <router-link class="top-menu-item" :class="activeItem(item) && 'active'" :to="item.path">
          <i class="mdi" :class="'mdi-'+item.meta.icon"></i>
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
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 100%;
      color: $header-color;
      position: relative;
      font-size: 14px;

      &:hover{
        cursor: pointer;
        background-color: rgba(255,255,255,0.1);
      }
      &.active{
        background-color: rgba(255,255,255,0.1);
        color: $menu-highlight-color;

        &:after{
          content: "";
          flex: none;
          position: absolute;
          width: 100%;
          height: 4px;
          background-color: $menu-highlight-color;
          bottom: 0;
        }
      }

      i {
        font-size: 20px;
      }
      span{

      }
    }
  }
</style>