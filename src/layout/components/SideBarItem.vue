<template>

    <router-link class="side-bar-item"
                 :class="isCurrentRoute && 'active'"
                 :to="path">

      <template>
        <el-tooltip effect="dark" :content="meta.title" placement="right" :disabled="sidebar.opened">
          <div class="icon-wrapper">
            <i class="mdi" :class="meta.icon"></i>
          </div>
        </el-tooltip>
        <span>{{meta.title}}</span>
      </template>

    </router-link>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "SideBarItem",
    props: {
      meta: Object,
      path: String,
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      isCurrentRoute(){
        return this.$route.meta.title === this.meta.title;
      }
    },
    methods:{
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

  .side-bar-item{
    color: $side-bar-item-color;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    overflow-x: hidden;
    white-space: nowrap;
    /*margin: 8px 0;*/
    position: relative;

    &:hover {
      background-color: $side-bar-hover-bg;
    }

    .icon-wrapper i {
      font-size: 20px;
      display: block;
      width: 40px;
      text-align: center;
      color: $side-bar-icon-color;
    }
    span {
      flex: 1;
      font-size: $side-bar-title-font-size;
    }


    &.active {
      background-color: $side-bar-active-bg;
      color: $side-bar-active-color;
      &:before{
        flex: none;
        position: absolute;
        content: "";
        width: 2px;
        height: 100%;
        background-color: $side-bar-active-border-color;
      }
      .icon-wrapper i {
        color: $side-bar-icon-active-color;
      }
    }
  }


  .openSidebar {

  }
</style>