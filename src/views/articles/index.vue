<template>
  <el-card class="articles">
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>

    <el-form>
      <!-- 文章状态 0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除 -->
      <el-form-item label="文章状态:">
        <el-radio-group v-model="searchForm.status" @change="changeCondition">
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="频道列表:">
        <el-select v-model="searchForm.channel_id" placeholder="请选择频道"  @change="changeCondition">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="时间选择:">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
          value-format="yyyy-MM-dd"
            v-model="searchForm.dateRange"
            type="daterange" range-separator="至 "
            start-placeholder="开始日期"
            end-placeholder="结束日期"
             @change="changeCondition"
          ></el-date-picker>
        </div>
      </el-form-item>
    </el-form>
      <el-row class='total' type='flex' align="middle" style="border-bottom:1px dashed #ccc;padding: 20px 0;">
          <span >
              共找到10000条符合条件的内容
          </span>
      </el-row>
      <div class='article-item' v-for="item in list" :key="item.id.toString()">
          <!-- 左侧 -->
          <div class='left'>
              <img :src="item.cover.images.length ? item.cover.images[0] : defaultImg" alt="">
              <div class='info'>
                  <span>{{item.title}}</span>
                  <el-tag :type="item.status | filterType" class='tag'>{{item.status|filterStatus}}</el-tag>
                  <span class='date'>2019-12-24 15:07:01</span>
              </div>
          </div>
          <!-- 右侧 -->
          <div class='right'>
              <span><i class="el-icon-edit"></i>修改</span>
              <span><i class="el-icon-delete"></i>删除</span>
          </div>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
         style="text-align:center;font-weight: 400;margin-top:10px"
        :page-size="page.pageSize"
        :current-page="page.current"
        :total="page.total"
        @current-change="changePage">
      </el-pagination>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      defaultImg: require('../../assets/img/index_bcg.jpg'),
      list: [],
      channels: [],
      searchForm: {
        status: 5,
        channel_id: null,
        dateRange: []
      },
      page: {
        total: 0,
        pageSize: 10,
        current: 1
      }
    }
  },
  // 过滤器
  filters: {
    filterStatus (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
        default:
          break
      }
    },
    filterType (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return 'danger'
        default:
          break
      }
    }
  },
  // watch: {
  //   searchForm: {
  //     handler: function () {
  //       // 此时数据已经变成最新的了
  //       // this 指向组件实例
  //       this.changeCondition() // 直接调用条件改变的方法
  //     },
  //     deep: true
  //   }
  // },
  methods: {
    //   改变页码方法
    changePage (newPage) {
      this.page.currentPage = newPage // 最新页码
      this.getConditionArticle() // 调用获取文章数据
    },
    //   改变条件
    changeCondition () {
      this.page.currentPage = 1 // 强制将页码重置第一页
      this.getConditionArticle() // 调用获取文章数据
    },
    getConditionArticle () {
      let params = {
        page: this.page.currentPage,
        per_page: this.page.pageSize,
        status: this.searchForm.status === 5 ? null : this.searchForm.status, // 因为5是前端定义的一个标识, 如果等于5 表示查全部, 全部应该什么都不传 直接传null
        channel_id: this.searchForm.channel_id,
        begin_pubdate: this.searchForm.dateRange === null ? null : this.searchForm.dateRange[0], // 开始时间
        end_pubdate: this.searchForm.dateRange === null ? null : this.searchForm.dateRange[1] // 截止时间
      }
      this.getArticles(params)
    },
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    },
    getArticles (params) {
      this.$axios({
        url: '/articles',
        params
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },

  created () {
    this.getArticles({ page: 1, per_page: 10 })
    this.getChannels()
  }
}
</script>

<style lang="less" scoped>
 .articles {
      .total {
          height: 60px;
          border-bottom: 1px dashed #ccc;
      }
      .article-item {
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          border-bottom: 1px solid #f2f3f5;
          .left {
              display: flex;
              img {
                  width: 180px;
                  height: 100px;
                  border-radius: 4px;
              }
              .info {
                  height: 100px;
                  margin-left: 10px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  .date {
                      color: #999;
                      font-size:12px;
                  }
                  .tag {
                      text-align: center;
                      width:60px;
                  }
              }
          }
          .right {
              span {
                  font-size:14px;
                  margin-right: 8px;
                  cursor: pointer;
              }
          }
      }
  }
</style>
