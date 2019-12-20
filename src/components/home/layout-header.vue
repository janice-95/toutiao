<template>
  <div class="contanier">
    <el-row type="flex" class="layout-header" justify="space-between">
      <el-col class='left' :span="12">
        <div class="grid-content bg-purple" style="font-size:16px;">
          <i class="el-icon-s-unfold" style="font-size:20px;"></i>
          江苏传智播客教育科技股份有限公司
        </div>
      </el-col>
      <el-col :span="12" class='right' style="float:right;">
          <el-row type='flex' justify="end" align="middle">
        <div class="grid-content bg-purple">
          <el-tooltip class="item" effect="dark" content="消息" placement="bottom">
            <el-button style="border:0;background:#fff;">消息</el-button>
          </el-tooltip>
          <img src="../../assets/img/HeadPortraits.jpg" alt="" style="width:35px;height:35px;border-radius=50%;vertical-align: middle;">
           <el-dropdown>
                 <!-- 匿名插槽  下拉菜单显示的元素内容 -->
                 <span>昵称</span>
                 <el-dropdown-menu slot="dropdown">
                     <el-dropdown-item>个人信息</el-dropdown-item>
                     <el-dropdown-item>git地址</el-dropdown-item>
                     <el-dropdown-item>退出</el-dropdown-item>
                 </el-dropdown-menu>
             </el-dropdown>
        </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.layout-header {
    height:60px;
    .left {
        font-size: 20px;
        span {
           color: #2c3e50;
           font-size: 16px;
           margin-left:4px;
        }
    }
    .right {
      img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
      }
    }
}
</style>
