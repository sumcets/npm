<template>
  <div class='profile-main'>
    <div class='profile-row'>
      <div class='user-msg'>
        <div class='user-ava' v-if='!photo'>
          {{  userInfo.name ? userInfo.name.substring(0, 1) : '-' }}
        </div>
        <van-image
            v-else
            round
            width="60px"
            height="60px"
            :src="photo"
        />
        <div class='user-name-position'>
          <div>
            <span class='name'>{{ userInfo.name || '-' }}</span><span class='tag'>v{{ userInfo.level || 1 }}</span>
          </div>
          <div>{{ userInfo.tenantName || '-' }}</div>
        </div>
      </div>
      <div class='about'>
        <slot name="main">
          <van-cell size='large' is-link @click='changePhone'>
            <template #title>
              <div class='title'>
                <van-icon name="edit" color='#00c297' size='large'/>
                <span>更改手机号</span>
              </div>
            </template>
          </van-cell>
          <van-cell size='large' is-link :value='version' @click='jump'>
            <template #title>
              <div class='title'>
                <van-icon name="info-o" color='#00c297' size='large'/>
                <span>帮助文档</span>
              </div>
            </template>
          </van-cell>
        </slot>
      </div>
      <div class='logout' v-show='runningEnv === "h5"'>
        <van-button type="primary" block color='#00c297' @click='logoutClick'>退出登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Cell, Icon, Image } from 'vant'

import { userInfo, getUserPhoto } from '../request/api/user'
export default {
  name: 'cby-profile',
  components: {
    'van-button': Button,
    'van-cell': Cell,
    'van-icon': Icon,
    'van-image': Image
  },
  data() {
    return {
      photo: '',
      userInfo: {},
      baseApi: `${ process.env.VUE_APP_BASE_URL }/api`
    }
  },
  props: {
    runningEnv: {
      type: String,
      default: 'h5'
    },
    version: {
      type: String,
      default: 'Version 1.0.8'
    }
  },

  computed: {
    helpTextUrl() {
      const appTypeBooks = {
        warehouse: 'https://fqso08qm1m.feishu.cn/docs/doccnsUaP6HHEmN34w7RiQRoCVg'
      }
      return appTypeBooks?.[this.appType]
    }
  },

  mounted() {
    getUserPhoto({}).then(res => {
      if (res.errcode === 0) {
        this.photo = res?.data?.userInfo?.portrait
      }
    })
    userInfo({}).then(res => {
      if (res.errcode === 0) {
        this.userInfo = res?.data || {}
      }
    })
  },
  methods: {
    logoutClick() {
      this.$store.dispatch('logout')
      this.$router.replace('/login')
      // this.$emit('logoutClick')
    },
    jump() {
      window.open(this.helpTextUrl)
    },
    changePhone() {
      this.$router.push('/changePhone')
      // this.$emit('changePhone')
    }
  },
  beforeDestroy() {
  }
}
</script>

<style scoped lang='scss'>
.profile-main{
  height: 100%;
  .profile-row{
    height: calc(100% - 50px);
    overflow-y: auto;
    .user-msg{
      height: 100px;
      width: 100%;
      background-color: #fff;
      display: flex;
      padding: 20px;
      box-sizing: border-box;
      .user-ava{
        height: 60px;
        width: 60px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #ffffff;
        background-color: #00C297;
      }
      .user-name-position{
        margin-left: 20px;
        height: 60px;
        font-size: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > div:first-child{
          font-weight: bold;
          margin-bottom: 3px;
          .tag{
            display: inline-block;
            padding: 2px 10px;
            color: #00C297;
            background-color: #e6fff5;
            border-radius: 10px;
            margin-left: 5px;
          }
        }
      }
    }
    .about{
      width: 100%;
      background-color: #fff;
      margin: 20px 0;
      padding: 10px 0;
      box-sizing: border-box;
      .title{
        display: flex;
        align-items: center;
        & > span{
          margin-left: 5px;
          color: #333333;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.profile-main{
  .logout{
    .van-button--normal{
      font-size: 18px;
    }
    .van-button{
      height: 50px;
    }
  }
}
</style>
