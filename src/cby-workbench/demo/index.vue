<template>
  <div class="index-main">
    <cby-workbench applicationName="APP_WAREHOUSE" />
  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "index",
  data() {
    return {
      menuList: [
        {
          name: '点巡检工单',
          icon: 'chat-o',
          iconBgColor: '#00c297',
          path: '点巡检工单'
        },
        {
          name: '保养工单',
          icon: 'chat-o',
          iconBgColor: '#6467f0',
          path: '保养工单'
        },
        {
          name: '维修管理',
          icon: 'chat-o',
          iconBgColor: '#3572ff',
          path: '维修管理'
        },
        {
          name: '更多功能',
          icon: 'chat-o',
          iconBgColor: '#d7d7d7',
          path: '更多功能'
        }
      ],
      agencyData: {
        total: 100,
        over: 50,
        late: 25,
        running: 25
      },
      noticeList: [
        {
          desc: '张三完成了维修工单',
          time: '06-16 16:00:00'
        },
        {
          desc: '李四完成了维修工单',
          time: '06-16 16:00:00'
        }
      ],
      agencyList: [
        {
          id: 0,
          num: 2,
          desc: '今日完成 2 单',
          name: '维修管理',
          overNum: 2,
        },
        {
          id: 0,
          num: 2,
          desc: '今日完成 2 单',
          name: '维修管理',
          overNum: 2,
        },
        {
          id: 0,
          num: 2,
          desc: '今日完成 2 单',
          name: '维修管理',
          overNum: 2,
        }
      ]
    }
  },
  props: {
  },
  mounted() {
  },
  computed: {},
  methods: {
    onSearch(val) {
      Toast('search:' + val)
    },
    onAgencyJump(val) {
      Toast('onAgencyJump')
    }
  },
  beforeDestroy() {
  }
}
</script>

<style scoped>

</style>
