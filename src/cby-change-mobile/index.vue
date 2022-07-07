<template>
  <div class='cby-change-mobile-main'>
    <div class='login'>
      <div class='header-text'>
        修改手机号
      </div>
      <div class='pwd-user'>
        <div class='input-row'>
          <div class='user-pwd-sms-old'>
            <Field :value="phone" placeholder="旧手机号码" disabled/>
          </div>
          <div class='user-name-sms'>
            <Field
                v-model="userName"
                center
                type='tel'
                @input='errorMsg = ""'
                :error-message='errorMsg'
                maxlength='11'
                placeholder="请输入手机号">
              <template #extra>
                  <span class='send-code' @click='sendSms'>
                     {{ earnTime === 60 ? '发送验证码' : `${ earnTime } s` }}
                  </span>
              </template>
            </Field>
          </div>
          <div class='user-pwd-sms'>
            <Field v-model="smsCode" placeholder='请输入验证码' :error-message='pwdErrorMsg' @input='pwdErrorMsg = ""'/>
          </div>
        </div>
      </div>
      <div class='btn'>
        <Button type="primary" block color='#00c297' @click='loginClick'>确定</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { userInfo, modifyPhoneSms, modifyPhone } from '../util/api/user'
import { Toast, Field, Button } from 'vant'
export default {
  name: 'cby-change-mobile',
  components: {
    Field,
    Button
  },
  data() {
    return {
      userName: '',
      password: '',
      passwordType: 'password',
      smsCode: '',
      errorMsg: '',
      pwdErrorMsg: '',
      loginType: '1',
      earnTime: 60,
      timeObj: null,
      loading: false,

      userInfo: {}
    }
  },
  mounted() {
  },
  computed: {
    phone() {
      return this?.userInfo?.phone || ''
    },
    id() {
      return this?.userInfo?.id || ''
    },
  },
  methods: {
    sendSms() {
      const isMo = /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.userName)
      if (!isMo) {
        this.errorMsg = '请填写正确的手机号码'
      } else {
        if (this.timeObj) return
        // 请求发送验证码
        const params = {
          phone: this.userName
        }
        modifyPhoneSms(params).then(res => {
          Toast({
            message: res.errmsg,
            position: 'bottom',
            duration: 1000
          })
          if (res.errcode === 0) {
            this.timeObj = setInterval(() => {
              if (this.earnTime) {
                this.earnTime -= 1
              } else {
                this.resetTime()
              }
            }, 1000)
          }
        }).catch(error => {
          Toast({
            message: error.response.statusText,
            position: 'bottom',
            duration: 1000
          })
        })
      }
    },
    loginClick() {
      if (this.loading) return
      this.loading = true
      // 验证码登录
      const isMo = /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.userName)
      if (!this.userName) this.errorMsg = '手机号不能为空'
      if (!this.smsCode) this.pwdErrorMsg = '验证码不能为空'
      if (!isMo) this.errorMsg = '请填写正确的手机号码'
      if (!this.userName || !this.smsCode || !isMo) {
        this.loading = false
        return
      }
      const params = {
        id: this.id,
        phone: this.phone || null,
        codePhone: this.userName,
        code: this.smsCode
      }
      modifyPhone(params).then(res => {
        Toast({
          message: res.errmsg,
          position: 'bottom',
          duration: 1000
        })
        if (res.errcode === 0) {
          this.getUserDetail()
          this.$router.go(-1)
        } else {
          this.loading = false
        }
      }).catch(error => {
        this.loading = false
        Toast({
          message: error?.response?.statusText || 'Error',
          position: 'bottom',
          duration: 1000
        })
      })
    },
    resetTime() {
      this.timeObj && clearInterval(this.timeObj)
      this.earnTime = 60
      this.timeObj = null
    },
    getUserDetail() {
      userInfo({}).then(res => {
        if (res.errcode === 0) {
          this.userInfo = res?.data || {}
          this.$store.dispatch('setUserInfo', res?.data || {})
        }
      })
    }
  },
  beforeDestroy() {
    this.resetTime()
  }
}
</script>

<style scoped lang='scss'>
.cby-change-mobile-main{
  height: 100%;
  -webkit-user-select:none;
  .login{
    min-height: 100%;
    height: auto;
    background-color: #fff;
    padding: 0 20px;
    box-sizing: border-box;
    .header-text{
      height: 100px;
      display: flex;
      align-items: flex-end;
      font-size: 28px;
      font-weight: bold;
      width: 100%;
    }
    .pwd-user{
      margin: 20px 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      .input-row{
        width: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;
        .user-pwd{
          margin-top: 40px;
          position: relative;
          border-bottom: rgba(0,0,0,.1) solid 1px;
          &:after{
            content: '密码';
            position: absolute;
            top: -30px;
            left: 0;
            font-size: 14px;
          }
        }
        .user-name{
          margin-top: 50px;
          position: relative;
          border-bottom: rgba(0,0,0,.1) solid 1px;
          &:after{
            content: '账号';
            position: absolute;
            top: -30px;
            left: 0;
            font-size: 14px;
          }
        }
        .user-pwd-sms{
          margin-top: 40px;
          position: relative;
          border-bottom: rgba(0,0,0,.1) solid 1px;
          &:after{
            content: '验证码';
            position: absolute;
            top: -30px;
            left: 0;
            font-size: 14px;
          }
        }
        .user-pwd-sms-old {
          margin-top: 40px;
          position: relative;
          border-bottom: rgba(0,0,0,.1) solid 1px;
          &:after{
            content: '旧手机号码';
            position: absolute;
            top: -30px;
            left: 0;
            font-size: 14px;
          }
        }
        .user-name-sms{
          margin-top: 50px;
          position: relative;
          border-bottom: rgba(0,0,0,.1) solid 1px;
          &:after{
            content: '新手机号码';
            position: absolute;
            top: -30px;
            left: 0;
            font-size: 14px;
          }
        }
        .send-code{
          color: #00C297;
          font-size: 12px;
        }
      }
      .bottom{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        .code-login-link{
          color: #00C297;
        }
        .forgetPwd{
          color: #7F7F7F;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.cby-change-mobile-main{
 .login{
   .btn{
     width: 100%;
     .van-button--normal{
       font-size: 18px;
     }
     .van-button{
       height: 50px;
     }
   }
   .pwd-user{
     .input-row{
       .van-field{
         padding-left: 0!important;
         input{
           font-size: 20px!important;
         }
       }
     }
   }
 }
}
</style>

