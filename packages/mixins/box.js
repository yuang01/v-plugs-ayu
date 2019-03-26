export default {
  data () {
    return {
      visible: true,
    }
  },
  watch: {
    visible(val) {
      if (!val) {
        // 动画结束后注销该组件
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },
  mounted() {
    // 执行$mount加载该组件
    document.body.appendChild(this.$el);
  },
  destroyed() {
    // 注销组件
    this.$el.parentNode.removeChild(this.$el);
  },
  methods: {
    destroyElement() {
      this.destroyed();
    },
    // 点击关闭，组件消失
    close() {
      this.visible = false;
    }
  },
}