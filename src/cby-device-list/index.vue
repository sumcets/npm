<template>
  <div class='DeviceItem-main' @click='viewDevice'>
    <div class='device-img'>
      <van-image
          height='80'
          width='80'
          fit='contain'
          :src="deviceImg || ''">
        <template v-slot:error>暂无图片</template>
      </van-image>
    </div>
    <div class='device-detail'>
      <div class='device-name'>
        {{ deviceObj.name || '-' }}
        <div class='d-tag' :class='getTagClass(deviceObj.status)'>
          {{ deviceObj.status || '-' }}
        </div>
      </div>
      <div class='device-code'>
        设备编号：{{ deviceObj.serial || '-' }}
      </div>
      <div class='device-class'>
        规格型号：{{ deviceObj.specification || '-' }}
      </div>
      <div class='device-position'>
        设备位置：{{ deviceObj.location || '-' }}
      </div>
      <div class='device-position'>
        负责人：{{ deviceObj.user_name || deviceObj.user_phone || '' }}
      </div>
    </div>
  </div>
</template>

<script>
import { Image } from 'vant'
export default {
  name: 'DeviceItem',
  components: {
    'van-image': Image
  },
  props: {
    deviceDetail: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      isJumpToDetail: true,
      checked: true
    }
  },
  mounted() {
  },
  computed: {
    deviceObj() {
      return this.deviceDetail || {}
    },
    deviceImg() {
      const list = this.deviceDetail?.pic_url_list || []
      return list?.[0]?.file_url
    }
  },
  methods: {
    getTagClass(status) {
      const map = {
        '新建': 'create',
        '在用': 'use',
        '在修': 'repair',
        '停用': 'stop',
        '报废': 'no-use'
      }
      return map[status] || 'd-tag'
    },
    viewDevice() {
      this.$emit('selectClick', this.deviceObj)
    }
  },
  beforeDestroy() {
  }
}
</script>

<style scoped lang='scss'>
.DeviceItem-main {
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 10px;
  position: relative;
  &:after{
    content: '';
    display: inline-block;
    height: 10px;
    width: calc( 100% + 20px );
    position: absolute;
    left: -10px;
    bottom: -10px;
    background-color: #f7f8fa;
  }

  .device-img {
    height: 80px;
    width: 80px;
    margin-right: 10px;
  }

  .device-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: calc(100% - 90px);

    .device-name {
      font-size: 15px;
      position: relative;
      padding-right: 50px;
      box-sizing: border-box;
      width: 100%;

      .d-tag {
        right: 0;
        top: 0;
        position: absolute;
        font-size: 12px;
        padding: 3px 10px;
        box-sizing: border-box;
        background-color: #d7f1ca;
        color: #00C297;
        border-radius: 5px;
      }

      .create {
        background-color: #E6F7FF;
        color: #1890FF;
      }

      .use {
        background-color: #D7F1CA;
        color: #52C41A;
      }

      .repair {
        background-color: #FCEAEC;
        color: #D9001B;
      }

      .stop {
        background-color: #FDEBD4;
        color: #F59A23;
      }

      .no-use {
        background-color: #F2F2F2;
        color: #7F7F7F;
      }
    }

    .device-code, .device-class, .device-position {
      font-size: 13px;
      color: #8a8a8a;
      padding: 1px 0;
      box-sizing: border-box;
      position: relative;
    }

    .device-position {
      padding-right: 30px;
      box-sizing: border-box;
    }
  }
}
</style>

