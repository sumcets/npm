<template>
<div>
  <button class="demo-button">
    <slot />
  </button>
</div>

</template>

<script>
export default {
  name: 'demo-button',
  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
  data() {
    return {
      show: true
    }
  }
};
</script>

<style lang="scss">
.demo-button {
  min-width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  background-color: #f44;
  border: none;
  border-radius: 30px;
}
</style>
