<template>
  <el-card>
    <bread-crumb slot="header">
      <!-- 插槽内容 -->
      <template slot="title">评论列表</template>
    </bread-crumb>

    <!-- 表格 -->
    <el-table style="width: 100%">
      <el-table-column prop="title" label="标题" ></el-table-column>
      <el-table-column prop="status" label="评论状态" ></el-table-column>
      <el-table-column prop="endNumber" label="总评论数"></el-table-column>
      <el-table-column prop="fansNumber" label="粉丝评论数"></el-table-column>
      <el-table-column prop="operation" label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {}
</script>

<style>
</style>
