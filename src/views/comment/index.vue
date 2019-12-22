<template>
  <el-card>
    <bread-crumb slot="header">
      <!-- 插槽内容 -->
      <template slot="title">评论列表</template>
    </bread-crumb>

    <!-- 表格 -->
    <el-table style="width: 100%" :data="list" v-loading="loading">
      <el-table-column prop="title" width="600" label="标题"></el-table-column>
      <el-table-column
        prop="comment_status"
        :formatter="formatterBoolean"
        label="评论状态"
        text-align="center"
      ></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数" text-align="center"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column prop="operation" label="操作">
        <template slot-scope="obj">
          <!-- 作用域插槽 -->
          <el-button size="small" type="text">修改</el-button>
          <!-- 需要根据状态来进行判断是关闭还是打开 -->
          <el-button
            @click="closeOropen(obj.row)"
            size="small"
            type="text"
          >{{ obj.row.comment_status ? '关闭' : '打开' }}评论</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" @current-change="changePage" :page-size="page.pageSize" :total="page.total" :pager-count="7" :current-page="page.current"  style="text-align:center;font-weight: 400;margin-top:10px">
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        total: 0,
        pageSize: 10,
        current: 1

      }
    }
  },
  methods: {
    changePage (newPage) {
      this.page.current = newPage
      this.getComment()
    },
    getComment () {
      this.loading = true
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment',
          page: this.page.current

        }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
        this.loading = false
      })
    },
    formatterBoolean (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },

    closeOropen (row) {
      // 直接调用接口
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您是否确定要${mess}评论吗`, '提示').then(() => {
        // 调用接口
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id.toString() },
          data: { allow_comment: !row.comment_status } // 因为当前如果是打开 ,就要关闭 如果是关闭 就要打开
        }).then(result => {
          //  表示执行成功
          this.getComment() // 重新拉取评论管理数据
        })
      })
    }
  },
  created () {
    this.getComment() // 获取数据
  }
}
</script>

<style>
</style>
