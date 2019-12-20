<template>
  <!-- 大容器 -->
  <el-container>
    <!-- 左面 -->
    <el-aside style="height:100vh;background-color:#353b4e;width:200px">
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <!-- 右面上下 -->
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutAsid from '../../components/home/layout-aside'
export default {
  components: {
    'layout-aside': layoutAsid
  }
}
</script>

<style>
</style>
