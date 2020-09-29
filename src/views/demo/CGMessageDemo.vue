<template>
  <div>
    全局提示：<br/><br/>
    <el-button @click="open1">消息</el-button>
    <el-button type="success" @click="open2">成功</el-button>
    <el-button type="warning" @click="open3">警告</el-button>
    <el-button type="danger" @click="open4">错误</el-button>
    （提示框8秒自动关闭）<br/><br/>
    告警提示：<br/><br/>
    <el-button @click="open5">不会自动关闭</el-button>
  </div>
</template>

<script>

export default {
  name: 'CGMessageDemo',
  components: {},
  methods: {
    open1() {
      this.$message({
        message: '提示内容提示内容提示内容',
        type: 'info',
        duration: '8000',
      });
    },
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success',
        duration: '8000',
      });
    },
    open3() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning',
        duration: '8000',
      });
    },
    open4() {
      this.$message({
        message: '警告哦，这是一条错误消息',
        type: 'error',
        duration: '8000',
      });
    },
    open5() {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      });
    }
  }
}
</script>
<style scoped>

</style>
