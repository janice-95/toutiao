<template>
  <!-- 大盒子 -->
  <div class="login">
    <!-- el做一个卡片 -->
    <el-card class="login-card">
      <!-- 标题 -->
      <div class="title">
        <!-- logo -->
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 放置表单 -->
      <el-form  ref="myForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
        <!-- 表单域 里面   放置 input/select/checkbox 相当于一行-->
        <el-form-item prop="mobile">

          <!-- el-form-itemx相当于一行一项 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>

        <!-- 表单域 -->
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:65%" placeholder="验证码"></el-input>
          <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="agree">

          <!-- 复选框 -->
          <el-checkbox v-model="loginForm.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>

        <!-- 登录按钮 -->
        <el-form-item>
          <el-button @click="login" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 任一表单项被校验后触发
    var validator = function (rule, value, callback) {
      value
        ? callback()
        : callback(new Error('我已阅读并同意用户协议和隐私条款'))
    }
    return {
      loginForm: {
        mobile: '',
        code: '',
        agree: false
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' }
        ],
        code: [
          { required: true, message: '请输入您的验证码' },
          { pattern: /^\d{6}$/, message: '请输入6位数验证码' }
        ],
        agree: [{ validator }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          console.log('校验成功')
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  background-image: url("../../assets/img/back.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 440px;
    height: 350px;
    .title {
      text-align: center;
      margin-bottom: 30px;
      img {
        height: 35px;
      }
    }
  }
}
</style>
