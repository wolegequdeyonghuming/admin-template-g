<template>
  <div>
   <!-- <div style="width: 100%;height: auto;display: flex">
      <CGButton type="default" label="默认按钮"></CGButton>
      <CGButton type="primary" label="主要按钮"></CGButton>
      <CGButton type="sure" label="确认按钮"></CGButton>
      <CGButton type="warning" label="删除按钮"></CGButton>
    </div>-->
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">确认按钮</el-button>
    <el-button type="danger">删除按钮</el-button>
  </div>
</template>

<script>
// import CGButton from './CGButton';
export default {
  name: 'CGButtonDemo',
  components: {
    // CGButton
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped>

</style>
