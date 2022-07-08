<template>
  <div class="index-main">
    <Popup position="bottom" v-model="show" style="height: 500px">
      <cby-dwmlist-select @selected="selected"/>
    </Popup>
  </div>
</template>

<script>
import {Popup, Toast} from 'vant'
export default {
  name: "index",
  components: {
    Popup
  },
  data() {
    return {
      show: true
    }
  },
  mounted() {
  },
  computed: {},
  methods: {
    selected(device) {
      this.show = false
      Toast('选择设备')
    }
  },
  beforeDestroy() {
  }
}
</script>

<style scoped>

</style>
