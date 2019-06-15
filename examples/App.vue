<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$notify({
      title: '找工作',
      content: '本人正在找工作，主要从事vue，有意向的联系我，非常感谢，电话: 18171766796，请大佬相信我的实力',
      autoClose: false
    })
  }
}
</script>