<script>
export default {
  name: "AyuRow",
  componentName: "AyuRow",
  provide() {
    return { AyuRow: this }
  },
  props: {
    tag: { type: String, default: "div" },
    gutter: Number,
    type: String,
    justify: { type: String, default: "start" },
    align: { type: String, default: "top" }
  },
  computed: {
    style() {
      const css = {};
      if (this.gutter) {
        css.marginLeft = `-${this.gutter / 2}px`;
        css.marginRight = css.marginLeft;
      }
      return css;
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        class: [
          "ayu-row",
          this.justify !== "start" ? `ayu-row--justify-${this.justify}` : "",
          this.align !== "top" ? `ayu-row--align-${this.align}` : "",
          { "ayu-row--flex": this.type === "flex" }
        ],
        style: this.style
      },
      this.$slots.default
    );
  }
};
</script>
