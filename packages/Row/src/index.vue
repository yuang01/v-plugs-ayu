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

<style lang="scss" scoped>
.ayu-row {
  position: relative;
  box-sizing: border-box;

  &::before,
  &::after {
    display: table;
    content: "";
  }

  &::after {
    clear: both;
  }
}

.ayu-row--flex {
  display: flex;

  &:before,
  &:after {
    display: none;
  }
}

.ayu-row--justify-start {
  justify-content: flex-start;
}

.ayu-row--justify-center {
  justify-content: center;
}

.ayu-row--justify-end {
  justify-content: flex-end;
}

.ayu-row--justify-end {
  justify-content: flex-end;
}

.ayu-row--justify-space-between {
  justify-content: space-between;
}

.ayu-row--justify-space-around {
  justify-content: space-around;
}

.ayu-row--align-top {
  align-items: flex-start;
}

.ayu-row--align-middle {
  align-items: center;
}

.ayu-row--align-bottom {
  align-items: flex-end;
}
</style>
