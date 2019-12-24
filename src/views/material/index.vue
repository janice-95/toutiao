<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <!-- 标签 -->
      <el-tab-pane label="全部图片" name="all">
        <!-- 大盒子 -->
        <div class="img-list">
          <!-- 图片卡片 -->
          <el-card
            v-for="item in list"
            :key="item.id"
            class="img-card"
            :body-style="{ padding: '0px' }"
            shadow="hover"
          >
            <img :src="item.url" alt />
            <el-row class="operate" justify="space-around" type="flex">
              <i class="el-icon-star-on"></i>
              <i class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏图片" name="collect">
        <div class="img-list">
          <!-- 图片卡片 -->
          <el-card
            v-for="item in list"
            :key="item.id"
            class="img-card"
            :body-style="{ padding: '0px' }"
            shadow="hover"
          >
            <img :src="item.url" alt />
            <el-row class="operate" justify="space-around" type="flex">
              <i class="el-icon-star-on"></i>
              <i class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-pagination
      background
      layout="prev, pager, next"
      :pager-count="7"
      style="text-align:center;font-weight: 400;margin-top:10px"
      :page-size="page.pageSize"
      :total="page.total"
      @current-change="changePage"
    ></el-pagination>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        total: 0,
        pageSize: 8,
        current: 1
      }
    }
  },
  methods: {
    // 分页
    changePage (newPage) {
      this.page.current = newPage
      this.getMaterial()
    },
    // 切换页面的方法
    changeTab () {
      this.page.current = 1
      this.getMaterial()
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          page: this.page.current,
          collect: this.activeName === 'collect', // 传false是全部数据，传true是收藏数据
          per_page: this.page.pageSize
        }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoped>
.img-list {
  display: flex;
  flex-wrap: wrap;
  .img-card {
    width: 180px;
    height: 150px;
    margin: 30px 40px;
    position: relative;
    img {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    .operate {
      width: 100%;
      position: absolute;
      background: #f4f5f6;
      bottom: 0;
      left: 0;
      height: 36px;
      align-items: center;
      font-style: 20px;
      i {
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
