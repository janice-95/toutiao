<template>
  <!-- 我可以开始写左侧导航栏了 -->
  <div class="layout-aside">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <el-menu background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
      <el-menu-item>
        <span>首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <!-- 具名插槽 -->
        <template slot="title">
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>发布文章</el-menu-item>
          <el-menu-item>内容列表</el-menu-item>
          <el-menu-item>评论列表</el-menu-item>
          <el-menu-item>素材管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <!-- 具名插槽 -->
        <template slot="title">
          <span>粉丝管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>图文数据</el-menu-item>
          <el-menu-item>粉丝概况</el-menu-item>
          <el-menu-item>粉丝画像</el-menu-item>
          <el-menu-item>粉丝列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item>
        <span>帐户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.layout-aside {
  width: 200px;
  .el-menu {
    border-right: 0;
  }
  .title {
    background-color: #2e2f32;
    text-align: center;
    padding: 10px 0;
    img {
      height: 35px;
    }
  }
}
</style>
