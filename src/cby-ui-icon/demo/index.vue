<template>
  <div class="index-main">
    <Grid :border="false">
      <GridItem v-for="icon in iconList" :key="icon">
        <div class="item" slot="icon" style="background-color: #00c297;cursor: pointer" @click="copyIcon(icon)">
          <cby-ui-icon :name="icon" size="25" color="#fff"/>
        </div>
      </GridItem>
    </Grid>
  </div>
</template>

<script>
import {axios} from '@bundled-es-modules/axios'
import {Grid, GridItem, Notify} from 'vant';

export default {
  name: "index",
  components: {
    Grid,
    GridItem
  },
  data() {
    return {
      iconList: []
    }
  },
  mounted() {
    axios.get('../../../style/font/iconfont.css').then(res => {
      this.iconList = res.data?.match(/(?<=iconfont-).*?(?=:)/g)
    })
  },
  computed: {},
  methods: {
    copyIcon(name) {
      const icon = `<cby-ui-icon name="${ name }"/>`
      this.copyToClipboard(icon)
    },
    copyToClipboard(str) {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selection = document.getSelection();
      if (!selection) {
        return;
      }
      const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      if (selected) {
        selection.removeAllRanges();
        selection.addRange(selected);
      }

      Notify({
        type: 'success',
        duration: 1500,
        className: 'demo-icon-notify',
        message: `复制成功：${str}`,
      });
    }
  },
  beforeDestroy() {
  }
}
</script>

<style scoped lang="scss">
.index-main{
  background-color: #fff;
}
.item {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.menu-name {
  font-size: 14px;
  margin-top: 5px;
}
</style>
