<template>
  <div class="index-main">
    <cby-profile
        env="h5"
        :user-info="userInfo"
        photo="https://static-iiiooottt-dev.oss-cn-shanghai.aliyuncs.com/file/78a89078-977d-43b3-90ec-52b8359d345c/87720870-d4cd-31ee-87b3-7169c21a8b07/1645166655008/1.jpg"
        help-text-url="https://fqso08qm1m.feishu.cn/docs/doccnsUaP6HHEmN34w7RiQRoCVg"
        version="Version 1.0.8"
        @logoutClick="logoutClick"
        @changePhone="changePhone">
    </cby-profile>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: "index",
  data() {
    return {
      userInfo:{
        "id": "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15",
        "employeeId": "b37f2a50-280b-41c4-920d-a1c89e87dee4",
        "name": "维修1",
        "phone": null,
        "level": 2,
        "thirdUsers": null,
        "appId": "4a952297-d812-4b43-8a23-01966cb37a1d",
        "tenantId": "c8d35ee0-8322-4fb5-b35a-7774b87d7a87",
        "tenantName": "永利集团345",
        "depId": "1b3c3c99-893f-4f03-a9fa-35e0c26f9d9e",
        "workLineId": null,
        "relationEntityId": null,
        "creator": false,
        "admin": true,
        "roleList": [
          "52480d3d-bb3b-4111-906d-b817a9176d96"
        ],
        "roleNameList": [
          "维修"
        ],
        "monitorUserId": null,
        "monitor": false,
        "groupLeaderUserId": "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15",
        "groupLeader": true
      }
    }
  },
  mounted() {
  },
  computed: {},
  methods: {
    logoutClick() {
      Toast('退出登录')
    },
    changePhone() {
      Toast('更改手机号')
    }
  },
  beforeDestroy() {
  }
}
</script>

<style scoped>

</style>
