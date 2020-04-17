<template>
  <div class="Login" :width="fullWidth" :height="fullHeight">
    <img src="~@/assets/logo.jpeg" alt="" style="position: fixed;" :width="fullWidth" :height="fullHeight">
    <div class="login_form">
      <div class="login_form_hd">云端</div>
      <div style="padding: 20px">
        <el-form  :model="dataForm" :rules="dataRule" ref="dataForm" class="demo-form-inline" status-icon>
          <el-form-item label="账号" class="form-input" prop="userName">
            <el-input style=" width: calc(100% - 60px);" size="mini" class="form-input-width"  v-model="dataForm.userName" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" class="form-input" prop="password">
            <el-input style=" width: calc(100% - 60px);" size="mini" v-model="dataForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item  class="form-input" prop="xcode">
            <el-row :gutter="10">
              <el-col :span="12">
                <el-input style="padding-left: 50px" size="mini" v-model="dataForm.xcode" placeholder="验证码"></el-input>
              </el-col>
              <el-col :span="8" class="login-captcha">
                <img :src="xcodePic" style="margin-left: 50px;vertical-align: middle" @click="getXcode()" alt="">
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
import { Login, getXcodePic} from "@/api/login";
import { getUUID } from '@/utils/index'

export default {
  data(){
    return{
      dataForm: {
        userName: '',
        password: '',
        xcode:'',
        refId: ''

      },
      dataRule: {
        userName: [
          { required: true, message: '帐号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        xcode: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ]
      },
      xcodePic:'',
      fullWidth:document.documentElement.clientWidth,
      fullHeight:document.documentElement.clientHeight

    }
  },
  created(){
    window.addEventListener('resize', this.handleResize)
    this.getXcode()
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },

  methods:{
    async submit() {
      this.$refs['dataForm'].validate(async (valid) => {
        if (valid) {
          let datalist=await Login(this.dataForm)
          console.log(datalist)
          console.log('submit!');
        }
      })

    },
    handleResize (event) {
      this.fullWidth = document.documentElement.clientWidth
      this.fullHeight = document.documentElement.clientHeight
    },
    // 验证码
    async getXcode(){
      this.dataForm.refId = getUUID()
      console.log(this.dataForm.refId)
      this.dataForm.xcode = ''
      this.xcodePic = await getXcodePic(this.dataForm.refId)
      console.log(this.xcodePic)

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
  .login-captcha {
    /*overflow: hidden;*/

  }
  .login-captcha img {
    width: 100%;
    cursor: pointer;
  }

</style>
