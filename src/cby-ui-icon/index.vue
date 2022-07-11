<template>
  <Icon v-bind="$attrs" v-on="$listeners" class-prefix="iconfont"/>
</template>

<script>
import { Icon } from 'vant'
require('../style/font/iconfont.css')
export default {
  name: "cby-ui-icon",
  inheritAttrs: false,
  components: {
    Icon
  },
  data() {
    return {}
  },
  mounted() {
  },
  computed: {},
  methods: {},
  beforeDestroy() {
  }
}
</script>

<style scoped>

</style>
