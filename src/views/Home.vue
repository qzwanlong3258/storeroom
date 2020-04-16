<template>
  <div class="Login" :width="fullWidth" :height="fullHeight">
    <img src="~@/assets/logo.jpeg" alt="" style="position: fixed;" :width="fullWidth" :height="fullHeight">
    <div class="login_form">
      <div class="login_form_hd">云端</div>
      <div style="padding: 20px">
        <el-form  :model="formInline" class="demo-form-inline">
          <el-form-item label="账号" class="form-input" >
            <el-input style=" width: calc(100% - 60px);" size="mini" class="form-input-width"  v-model="formInline.user" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" class="form-input" >
            <el-input style=" width: calc(100% - 60px);" size="mini" v-model="formInline.user" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="" class="form-input" >
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input style=" margin-left: 40px" size="mini" v-model="formInline.user" placeholder="验证码"></el-input>
              </el-col>
              <el-col :span="10" class="login-captcha">
                <img :src="captchaPath" @click="getCaptcha()" alt="">
              </el-col>
            </el-row>

          </el-form-item>
<!--          <el-form-item>-->
<!--            <el-button type="primary" @click="onSubmit">查询</el-button>-->
<!--          </el-form-item>-->
        </el-form>
        <div class="Login_ft">
          <div class="btn" @click="submit">登录</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data(){
    return{
      formInline: {
        user: '',
        region: '',

      },
      fullWidth:document.documentElement.clientWidth,
      fullHeight:document.documentElement.clientHeight

    }
  },
  created(){
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },

  methods:{
    onSubmit() {
      console.log('submit!');
    },
    handleResize (event) {
      this.fullWidth = document.documentElement.clientWidth
      this.fullHeight = document.documentElement.clientHeight
    }

  }
}
</script>
<style>
  .Login{



  }
  .login_form{
    width: 400px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: rgba(255,255,255,0.7);
    box-shadow: 0 0 2px 2px #944144;
  }
  .login_form_hd{
    height: 60px;
    line-height: 60px;
    background: coral;
    color: #fff;
    font-size: 30px;
    font-weight: bolder;
    text-align: center;
    box-shadow: 0 0 4px 4px #848514;
  }
  .Login_ft{
    /* position: absolute;
    left: 0;
    bottom: 20rpx; */
    width: 100%;
    height: 50px;
    margin-top: 20px;

  }
  .btn{
    height: 40px;

    text-align: center;
    line-height: 40px;
    border-radius: 20px;
    background: coral;
    color: #000000;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    font-size: 14px;
    letter-spacing: 2px;
  }

  .Login .form-input {
    width: 100%;
    margin-bottom: 10px;

  }

</style>
