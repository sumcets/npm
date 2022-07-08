<template>
  <div class="cby-function-center-main">
    <div class="cby-panel" v-for="menuList in functionList">
      <div class="menu-title">{{ menuList.name }}</div>
      <Grid :border="false">
        <GridItem :text="menu.name" v-for="menu in menuList.list" :key="menu.name">
          <div class="item" slot="icon" :style="{ backgroundColor: menu.iconBgColor }">
            <cby-ui-icon :name="menu.icon" size="25" :color="menu.iconColor"/>
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
import { Grid, GridItem, Icon } from 'vant'
import cbyUiIcon from '../cby-ui-icon'
import { getDict } from '../../utils/ddic'
export default {
  name: "cby-function-center",
  components: {
    Grid,
    Icon,
    GridItem,
    cbyUiIcon
  },
  props: {
    applicationName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  mounted() {
  },
  computed: {
    functionList() {
      return getDict('FUNCTION_CENTER', this.applicationName)
    }
  },
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
    box-sizing: border-box;
    position: relative;
    .menu-title{
      padding: 5px 0 0 5px;
      box-sizing: border-box;
      font-size: 14px;
    }
    &:after{
      content: '';
      display: inline-block;
      width: 100%;
      height: 10px;
      background-color: #f7f8fa;
      position: absolute;
      left: 0;
      bottom: -10px;
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
