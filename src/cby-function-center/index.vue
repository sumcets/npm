<template>
  <div class="cby-function-center-main">
    <div class="cby-panel" v-for="menuList in functionList" :title="menuList.name">
      <Grid :border="false">
        <GridItem :text="menu.name" v-for="menu in menuList.list" :key="menu.name">
          <div class="item" slot="icon" :style="{ backgroundColor: menu.iconBgColor }">
            <Icon  :name="menu.icon" size="25" color="#fff" class-prefix="iconfont"/>
          </div>
          <div slot="text" class="menu-name">
            {{ menu.name }}
          </div>
        </GridItem>
      </Grid>
    </div>
  </div>
</template>

<script>
require('../font/iconfont.css')
import { Grid, GridItem, Icon } from 'vant'
export default {
  name: "cby-function-center",
  components: {
    Grid,
    Icon,
    GridItem
  },
  data() {
    return {
      functionList: [
        {
          name: '点巡检管理',
          list: [
            {
              name: '点巡检计划',
              path: '',
              icon: 'huiyuanjifen',
              iconBgColor: '#3572ff'
            },
            {
              name: '计划工单',
              path: '',
              icon: 'chat-o',
              iconBgColor: '#00c297'
            },
            {
              name: '任务工单',
              path: '',
              icon: 'chat-o',
              iconBgColor: '#6467f0'
            }
          ]
        },
        {
          name: '保养管理',
          list: [
            {
              name: '保养计划',
              path: '',
              icon: 'chat-o',
              iconBgColor: '#ffc300'
            },
            {
              name: '计划工单',
              path: '',
              icon: 'chat-o',
              iconBgColor: '#6467f0'
            },
            {
              name: '任务工单',
              path: '',
              icon: 'chat-o',
              iconBgColor: '#6467f0'
            }
          ]
        },
        {
          name: '维修管理',
          list: [
            {
              name: '维修管理',
              path: '',
              icon: 'chat-o',
              iconBgColor: '#00c297'
            }
          ]
        }
      ]
    }
  },
  mounted() {
  },
  computed: {},
  methods: {},
  beforeDestroy() {
  }
}
</script>

<style>

</style>

<style scoped lang="scss">
.cby-function-center-main{
  height: 100%;
  overflow-y: auto;
  .cby-panel{
    background-color: #fff;
    margin-bottom: 10px;
    padding-top: 20px;
    box-sizing: border-box;
    position: relative;
    &:after{
      content: attr(title);
      display: inline-block;
      position: absolute;
      font-size: 14px;
      top: 5px;
      left: 5px;
    }
    .item{
      height: 45px;
      width: 45px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    .menu-name{
      font-size: 14px;
      margin-top: 5px;
    }
  }
}
</style>
