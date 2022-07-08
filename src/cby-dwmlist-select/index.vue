<template>
  <div class="cby-dwmlist-select-main" ref="mian">
    <van-tabs v-model="activeTab" animated swipeable color="#41cabf" title-active-color="#41cabf" @change="tabChange">
      <van-tab v-for="tab in tabList" :title="tab" :key="tab" :name="tab">
        <div class="cby-select-search">
          <van-search placeholder="请输入设备编号" v-model="search" @search="onSearch" />
        </div>
        <div :style="{ height: rowHeight }" class="list-row">
          <template v-if="activeTab=== '设备'">
            <div class="cby-tab-row">
              <van-empty v-if="!deviceLoading && !deviceList.length"></van-empty>
              <van-list v-model="deviceLoading" :finished="deviceFinished" finished-text="没有更多了" @load="onDeviceLoad">
                <device-list :device-detail="device" v-for="device in deviceList" @selectClick="selectDevice"></device-list>
              </van-list>
            </div>
          </template>
          <template v-else-if="activeTab === '工装'">
            <div class="cby-tab-row">
              <van-empty v-if="!workToolLoading && !workToolList.length"></van-empty>
              <van-list v-model="workToolLoading" :finished="workToolFinished" finished-text="没有更多了" @load="onWorkToolLoad">
                <device-list :device-detail="device" v-for="device in workToolList" @selectClick="selectDevice"></device-list>
              </van-list>
            </div>
          </template>
          <template v-else>
            <div class="cby-tab-row">
              <van-empty v-if="!mouldLoading && !mouldList.length"></van-empty>
              <van-list v-model="mouldLoading" :finished="mouldFinished" finished-text="没有更多了" @load="onMouldLoad">
                <device-list :device-detail="device" v-for="device in mouldList" @selectClick="selectDevice"></device-list>
              </van-list>
            </div>
          </template>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs, Search, List, Empty } from 'vant'
import DeviceList from '../cby-device-list'
import { deviceList } from '../../request/api/device'
import { fixtureList } from '../../request/api/fixture'
import { mouldList } from '../../request/api/mould'
export default {
  name: "cby-dwmlist-select",
  components: {
    'van-tabs': Tabs,
    'van-tab': Tab,
    'van-search': Search,
    'van-list': List,
    'van-empty': Empty,
    DeviceList
  },
  data() {
    return {
      rowHeight: '0px',
      search: '',
      tabList: ['设备','工装','模具'],
      activeTab: '',

      deviceLoading: false,
      deviceFinished: false,
      devicePageNo: 1,
      deviceTotal: 0,
      deviceList: [], // 设备列表

      workToolLoading: false,
      workToolFinished: false,
      workToolPageNo: 1,
      workToolTotal: 0,
      workToolList: [], // 工装列表

      mouldLoading: false,
      mouldFinished: false,
      mouldPageNo: 1,
      mouldTotal: 0,
      mouldList: [], // 模具列表
    }
  },
  mounted() {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvbmVoZWUiLCJpYXQiOjE2NTcyNzAxNDUsImV4cCI6MTY1NzM1NjU0NSwiYXBwSWQiOiIwZGE5MzA5My1kZjAxLTRmYzgtYjNhMy1mNTIwYTEyNWYxZDUiLCJ0ZW5hbnRJZCI6ImM4ZDM1ZWUwLTgzMjItNGZiNS1iMzVhLTc3NzRiODdkN2E4NyIsInNvdXJjZSI6Img1IiwidXNlcklkIjoiYTBlZWJjOTktOWMwYi00ZWY4LWJiNmQtNmJiOWJkMzgwYTE1In0.now0fMfGgDOWV-wnta3jcvYLbK5AFAWB07WpZzLbiEk')
    this.$nextTick(() => {
      const el = this.$refs.mian
      this.rowHeight = `${ el?.offsetHeight - 44 - 70 }px`
    })
    this.getDeviceList()
  },
  computed: {
  },
  methods: {
    tabChange(name) {
        if (name === '工装' && !this.workToolList.length && !this.workToolLoading) {
          this.workToolPageNo = 1
          this.getWorkToolList()
        }
        if (name === '模具' && !this.mouldList.length && !this.mouldLoading) {
          this.mouldPageNo = 1
          this.getMouldList()
        }
    },

    onSearch() {},

    getDeviceList(fn) {
      const params = {
        page_size: 20,
        page_index: this.devicePageNo
      }
      this.deviceLoading = true
      deviceList(params).then(res => {
        this.deviceLoading = false
        if (res.errcode === 0) {
          this.deviceList = [...this.deviceList, ...(res?.data?.list || [])]
          this.deviceTotal = res?.data?.total_count || 0
          typeof fn === 'function' ? fn() : ''
        }
      })
    },
    onDeviceLoad() {
      this.devicePageNo += 1
      this.getDeviceList(() => {
        this.deviceLoading = false
        if (this.deviceList.length >= this.deviceTotal) this.deviceFinished = true
      })
    },

    getWorkToolList(fn) {
      const params = {
        page_size: 20,
        page_index: this.workToolPageNo
      }
      this.workToolLoading = true
      fixtureList(params).then(res => {
        this.workToolLoading = false
        if (res.errcode === 0) {
          this.workToolList = [...this.workToolList, ...(res?.data?.list || [])]
          this.workToolTotal = res?.data?.total_count || 0
          typeof fn === 'function' ? fn() : ''
        }
      })
    },
    onWorkToolLoad() {
      this.workToolPageNo += 1
      this.getWorkToolList((list) => {
        if (this.workToolList.length >= this.workToolTotal) this.workToolFinished = true
      })
    },

    getMouldList(fn) {
      const params = {
        page_size: 20,
        page_index: this.mouldPageNo
      }
      this.mouldLoading = true
      mouldList(params).then(res => {
        this.mouldLoading = false
        if (res.errcode === 0) {
          this.mouldList = [...this.mouldList, ...(res?.data?.list || [])]
          this.mouldTotal = res?.data?.total_count || 0
          typeof fn === 'function' ? fn() : ''
        }
      })
    },
    onMouldLoad() {
      this.mouldPageNo += 1
      this.getMouldList(() => {
        if (this.mouldList.length >= this.mouldTotal) this.mouldFinished = true
      })
    },

    selectDevice(device) {
      this.$emit('selected', device)
    }
  },
  beforeDestroy() {
  }
}
</script>

<style scoped lang="scss">
.cby-dwmlist-select-main{
  height: 100%;
  .cby-tab-row{
    height: 100%;
    overflow-y: auto;
    padding: 0 10px;
    box-sizing: border-box;
  }
}
</style>
<style lang="scss">
.cby-dwmlist-select-main{
  .cby-select-search{
    .van-cell{
      line-height: 40px!important;
    }
  }
}
</style>
