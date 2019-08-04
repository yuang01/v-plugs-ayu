<<<<<<< HEAD
<script>
export default {
  name: "AyuCol",
  componentName: "AyuCol",
  inject: {
    AyuRow: { default: "" }
  },
  props: {
    span: { type: Number, default: 24 },
    tag: { type: String, default: "div" },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutter() {
      return this.AyuRow ? this.AyuRow.gutter : 0;
    }
  },
  render(h) {
    let classList = [];
    let style = {};
    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + "px";
      style.paddingRight = style.paddingLeft;
    }
    ["span", "offset", "pull", "push"].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop !== "span"
            ? `ayu-col-${prop}-${this[prop]}`
            : `ayu-col-${this[prop]}`
        );
      }
    });
    ["xs", "sm", "md", "lg", "xl"].forEach(size => {
      if (typeof this[size] === "number") {
        classList.push(`ayu-col-${size}-${this[size]}`);
        return;
      }
      if (typeof this[size] === "object") {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== "span"
              ? `ayu-col-${size}-${prop}-${props[prop]}`
              : `ayu-col-${size}-${props[prop]}`
          );
        });
      }
    });
    return h(
      this.tag,
      {
        class: ["ayu-col", classList],
        style
      },
      this.$slots.default
    );
  }
};
</script>
