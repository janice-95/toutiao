<template>
  <el-card class="articles">
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>

    <el-form>
      <!-- 文章状态 0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除 -->
      <el-form-item label="文章状态:">
        <el-radio-group v-model="searchForm.status">
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="频道列表:">
        <el-select v-model="searchForm.channel_id" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="时间选择:">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="searchForm.dateRange"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
      </el-form-item>
    </el-form>
      <el-row class='total' type='flex' align="middle" style="border-bottom:1px dashed #ccc;padding: 20px 0;">
          <span >
              共找到10000条符合条件的内容
          </span>
      </el-row>
      <div class='article-item'>
          <!-- 左侧 -->
          <div class='left'>
              <img src="../../assets/img/index_bcg.jpg" alt="">
              <div class='info'>
                  <span>文章标题</span>
                  <el-tag class='tag'>标签一</el-tag>
                  <span class='date'>2019-12-24 15:07:01</span>
              </div>
          </div>
          <!-- 右侧 -->
          <div class='right'>
              <span><i class="el-icon-edit"></i>修改</span>
              <span><i class="el-icon-delete"></i>删除</span>
          </div>
      </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      searchForm: {
        status: '',
        name: '',
        channel_id: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-item{
  overflow: hidden;
  padding: 15px 5px;
  margin: 0 10px;
  border-bottom: 1px solid #f2f3f5;
  img{
    float: left;
    width: 150px;
    height: 100px;
    .info {
      display: flex;
    }
  }
}
</style>
