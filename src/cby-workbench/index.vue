<template>
  <div class="cby-workbench-main">
    <div class="cby-search">
      <Search :placeholder="searchPlaceholder" v-model="search" @search="onSearch" />
    </div>
    <div class="cby-tools">
      <slot name="tools"></slot>
    </div>
    <div class="cby-menu">
      <Grid :border="false">
        <GridItem :text="menu.name" v-for="menu in menuList" :key="menu.name">
          <div class="item" slot="icon" :style="{ backgroundColor: menu.iconBgColor }">
            <van-icon :name="menu.icon" size="25" color="#fff"/>
          </div>
          <div slot="text" class="menu-name">
            {{ menu.name }}
          </div>
        </GridItem>
      </Grid>
    </div>
    <div class="cby-my-agency">
      <div class="cby-agency-title">
        <span>我的代办</span><span><van-icon name="question-o" /></span>
      </div>
      <div class="cby-agency-data">
        <div title="代办总数">
          <div class="num">{{ agencyData.total || '-' }}</div>
          <div class="progress">
            <Progress :percentage="100" :show-pivot="false" stroke-width="10px"/>
          </div>
        </div>
        <div title="已完成">
          <div class="num">{{ agencyData.over || '-'}}</div>
          <div class="progress">
            <Progress :percentage="percentOver" :show-pivot="false" stroke-width="10px" color="#4dcb73" track-color="#b6e4c4"/>
          </div>
        </div>
        <div title="已逾期">
          <div class="num">{{ agencyData.late || '-'}}</div>
          <div class="progress">
            <Progress :percentage="percentLate" :show-pivot="false" stroke-width="10px" color="#f24129" track-color="#f58699"/>
          </div>
        </div>
        <div title="进行中">
          <div class="num">{{ agencyData.running || '-' }}</div>
          <div class="progress">
            <Progress :percentage="percentRunning" :show-pivot="false" stroke-width="10px" color="#f59a23" track-color="#fad099"/>
          </div>
        </div>
      </div>
      <div class="cby-notice-bar" v-if="noticeList.length">
        <NoticeBar left-icon="volume-o" :scrollable="false" background="#fff">
          <Swipe
              vertical
              class="notice-swipe"
              :autoplay="3000"
              :show-indicators="false">
            <SwipeItem v-for="notice in noticeList">
              <div class="notice-item">
                <span>{{ notice.desc }}</span><span>{{ notice.time }}</span>
              </div>
            </SwipeItem>
          </Swipe>
        </NoticeBar>
      </div>
      <div class="cby-agency-list">
        <Empty v-if="!agencyList.length" description="暂无数据"/>
        <div class="item" v-for="agency in agencyList">
          <div>
            <div class="name-status">
              <span class="name">{{ agency.name }}</span>
              <span class="icon">
                <van-icon name="underway-o" color="red" size="16"/>
              </span>
              <Tag type="danger">超时3单</Tag>
            </div>
            <div class="desc">{{ agency.desc }}</div>
          </div>
          <div @click="agencyJump(agency)">
            <div class="num">{{ agency.num }}</div>
            <div class="num-text">剩余数量</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from 'vant'
import { Grid, GridItem, Icon, Progress,NoticeBar,Swipe, SwipeItem, Empty, Tag } from 'vant'
export default {
  name: "cby-workbench",
  components: {
    GridItem,
    Search,
    Progress,
    NoticeBar,
    Grid,
    Icon,
    Empty,
    Swipe,
    SwipeItem,
    Tag
  },
  data() {
    return {
      search: ''
    }
  },
  props: {
    searchPlaceholder: {
      type: String,
      default: '请输入搜索关键词'
    },
    menuList: {
      type:Array,
      default: () => []
    },
    agencyData: {
      type:Object,
      default: () => {
        return {}
      }
    },
    agencyList: {
      type: Array,
      default: () => []
    },
    noticeList: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
  },
  computed: {
    percentOver() {
      return this.countPercent('over')
    },
    percentLate() {
      return this.countPercent('late')
    },
    percentRunning() {
      return this.countPercent('running')
    }
  },
  methods: {
    onSearch(val) {
      if (val) this.$emit('onSearch', val)
    },
    countPercent(attr) {
      const hasData = this.agencyData?.[attr] && this.agencyData?.total && this.agencyData[attr] < this.agencyData.total
      return hasData ? 100 * (this.agencyData[attr] / this.agencyData.total) : 0
    },
    agencyJump(agency) {
      this.$emit('onAgencyJump', agency)
    }
  },
  beforeDestroy() {
  }
}
</script>

<style scoped lang="scss">
.cby-workbench-main{
  height: 100%;
  .cby-menu{
    margin-bottom: 10px;
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
  .cby-my-agency{
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
    .cby-agency-title{
      display: flex;
      align-items: center;
      & > span:last-child{
        margin-left: 5px;
      }
      & > span:first-child{
        font-size: 15px;
      }
    }
    .cby-agency-data{
      display: flex;
      flex-wrap: wrap;
      & > div{
        width: calc( (100% - 10px ) / 2);
        min-height: 70px;
        height: auto;
        background-color: #f3f3f3;
        margin-top: 10px;
        border-radius: 3px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        position: relative;
        padding: 25px 5px 5px 5px;
        box-sizing: border-box;
        &:after{
          content: attr(title);
          display: inline-block;
          font-size: 12px;
          color: #ababab;
          position: absolute;
          top: 5px;
          left: 5px;
        }
        .num{
          font-size: 24px;
          color: #3ba0ff;
          font-weight: bolder;
        }
      }
      & > div:nth-child(2n-1){
        margin-right: 10px;
      }
    }
    .cby-notice-bar{
      width: 100%;
      padding: 10px 0;
      box-sizing: border-box;
      .notice-swipe {
        height: 40px;
        line-height: 40px;
        width: 100%;
      }
      .notice-item{
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: #555555;
        font-size: 12px;
      }
    }
    .cby-agency-list{
      & > .item:last-child{
        margin-bottom: 0!important;
      }
      .item{
        border-left: red solid 2px;
        background-color: #f3f3f3;
        border-radius: 3px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        padding: 10px 5px;
        box-sizing: border-box;
        margin-bottom: 10px;
        & > div{
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .num{
            font-size: 22px;
            font-weight: bolder;
            color: #00C297;
          }
          .num-text{
            font-size: 12px;
            margin-top: 5px;
          }
          .name-status{
            font-size: 16px;
            display: flex;
            align-items: center;
            .name{
              color: #00C297;
              font-weight: bolder;
            }
            .icon{
              margin: 0 3px;
            }
          }
          .desc{
            font-size: 12px;
            color: #ababab;
            margin-top: 10px;
          }
        }
        & > div:first-child{
          flex: 1;
        }
        & > div:last-child{
          width: 100px;
          text-align: center;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.cby-workbench-main{
  .cby-search{
    .van-cell{
      line-height: 40px!important;
    }
  }
  .cby-menu{
    .van-grid-item__content{
      //background-color: transparent!important;
    }
  }
  .cby-notice-bar{
    .van-notice-bar__content.van-ellipsis{
      width: 100% !important;
    }
  }
}
</style>
