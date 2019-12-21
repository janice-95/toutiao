<template>
  <!-- 大容器 -->
  <el-container>
    <!-- 左面 -->
    <el-aside style="height:100vh;background-color:#353b4e;width:200px">
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <!-- 右面上下 -->
      <el-header>
        <layout-header style="height:50px; line-height:50px"></layout-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
</style>
