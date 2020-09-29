<template>

  <div class="side-bar-nested-item">

    <!--父级标题-->
    <div class="side-bar-nested-item-title"
         :class="{collapse: collapse, active: isCurrent}"
         @click="collapse = !collapse">

      <el-tooltip
              effect="dark"
              :content="meta.title"
              placement="right"
              :disabled="sidebar.opened">

        <el-popover
                class="icon-wrapper"
                placement="right"
                width="180"
                :disabled="sidebar.opened"
                trigger="click">

          <div v-if="meta.icon" slot="reference">
            <i class="mdi" :class="meta.icon"></i>
          </div>

          <div class="popover-container">
            <router-link class="side-bar-nested-item-children"
                         v-for="child in children"
                         :key="child.path"
                         :to="child.path"
                         :class="isCurrentRoute(child) && 'active'">
              <span class="title">{{child.meta.title}}</span>
            </router-link>
          </div>
        </el-popover>
      </el-tooltip>
      <span>{{meta.title}}</span>

      <div class="nested-icon">
        <i class="mdi" :class="collapse ? 'mdi-chevron-up' : 'mdi-chevron-down'"></i>
      </div>
    </div>

    <!--子目录-->
    <el-collapse-transition>
      <div class="side-bar-nested-item-collapse" v-show="collapse && sidebar.opened">
        <router-link class="side-bar-nested-item-children"
             v-for="child in children"
             :key="child.path"
             :to="child.path"
             :class="isCurrentRoute(child) && 'active'">
          <!--<div class="icon-wrapper" v-if="child.meta.icon">-->
            <!--<i class="mdi" :class="child.meta.icon"></i>-->
          <!--</div>-->
          <span class="title">{{child.meta.title}}</span>
        </router-link>
      </div>
    </el-collapse-transition>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "SideBarNestedItem",
    props: {
      meta: Object,
      path: String,
      children: Array,
    },
    data(){
      return {
        collapse: false
      }
    },
    computed:{
      ...mapGetters([
        'sidebar'
      ]),
      isCurrent(){
        return this.$route.matched.filter(route=>{
          return route.path === this.path;
        }).length > 0;
      }
    },
    methods: {
      isCurrentRoute(child){
        return this.$route.meta.title === child.meta.title;
      },
      navigate(path){
        if(/^(https?:|mailto:|tel:)/.test(path)){
          window.open(path, 'no-referer')
        }else if(path !== this.$route.path){
          this.$router.push(path);
        }
      }
    },
    watch :{
      'sidebar.opened': function () {
        this.collapse = false;
      }
    },
    mounted(){

    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/variables";

  .side-bar-nested-item{

    .side-bar-nested-item-title{
      color: $side-bar-item-color;
      height: 40px;
      display: flex;
      align-items: center;
      overflow-x: hidden;
      white-space: nowrap;
      cursor: pointer;
      width: 100%;
      margin: 8px 0;
      position: relative;
      font-size: 14px;

      &:hover {
        background-color: $side-bar-highlight-bg;
      }
      &.collapse{
        background-color: $side-bar-highlight-bg;
      }
      &.active{
        background-color: $side-bar-highlight-bg;
        color: $side-bar-active-color;
        &:before{
          flex: none;
          position: absolute;
          content: "";
          width: 2px;
          height: 100%;
          left: 0;
          background-color: $side-bar-active-color;
        }
      }

    }

    .icon-wrapper i {
      font-size: 20px;
      display: block;
      width: 40px;
      text-align: center;
    }
    .title {
      flex: 1;
      font-size: $side-bar-title-font-size;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left;
    }
    .nested-icon{
      width: 24px;
      display: block;
      margin-left: auto;
    }

    .side-bar-nested-item-children{
      color: $side-bar-item-color;
      height: 40px;
      display: flex;
      align-items: center;
      overflow-x: hidden;
      white-space: nowrap;
      cursor: pointer;
      width: 100%;
      padding-left: 12px;
      position: relative;

      i {
        font-size: 18px;
      }
      .title{
        font-size: $side-bar-child-font-size;
        opacity: 0.9;
      }

      &:hover {
        background-color: $side-bar-highlight-bg;
      }
      &.active{
        background-color: $side-bar-highlight-bg;
        color: $side-bar-active-color;
        &:before{
          flex: none;
          position: absolute;
          content: "";
          width: 2px;
          height: 100%;
          left: 0;
          background-color: $side-bar-active-color;
        }
      }
    }
    .side-bar-nested-item-collapse{
      background-color: $side-bar-highlight-bg;
    }
  }

  ::v-deep .side-bar-nested-item-children{
    color: #666;
    height: 40px;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    white-space: nowrap;
    cursor: pointer;
    width: 100%;
    padding-left: 12px;
    position: relative;

    i {
      font-size: 18px;
    }
    .title{
      font-size: $side-bar-child-font-size;
      opacity: 0.9;
    }

    &:hover {
      background-color: rgba(0,0,0,0.05);
    }
    &.active{
      background-color: rgba(0,80,200,0.05);
      color: $side-bar-active-color;
      &:before{
        flex: none;
        position: absolute;
        content: "";
        width: 2px;
        height: 100%;
        left: 0;
        background-color: $side-bar-active-color;
      }
    }
  }
</style>