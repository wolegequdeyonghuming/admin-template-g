<template>
    <el-dropdown trigger="click" class="user-menu">
      <div class="avatar-wrapper">
        <i class="mdi mdi-account-circle user-avatar"></i>
        管理员
        <i class="el-icon-caret-bottom" ></i>
      </div>

      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link to="/">
          <el-dropdown-item>
            修改密码
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided @click.native="logout">
          <span style="display:block;">登出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
  export default {
    name: "UserMenu",

    methods: {
      async logout() {
        this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/variables";

  .user-menu {
    cursor: pointer;
    margin: 0 24px;
    color: $header-color;

    .avatar-wrapper {
      display: flex;
      align-items: center;

      .user-avatar {
        margin-right: 10px;
        font-size: 24px;
      }

      .el-icon-caret-bottom {
        margin-left: 12px;
        font-size: 12px;
      }
    }
  }
</style>