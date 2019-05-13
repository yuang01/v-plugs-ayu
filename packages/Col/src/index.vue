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

<style lang="scss" scoped>
[class*="ayu-col-"] {
  float: left;
  box-sizing: border-box;
}

.ayu-col-0 {
  display: none;
}

@for $i from 0 through 24 {
  .ayu-col-#{$i} {
    width: (1 / 24 * $i * 100) * 1%;
  }

  .ayu-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }

  .ayu-col-pull-#{$i} {
    position: relative;
    right: (1 / 24 * $i * 100) * 1%;
  }

  .ayu-col-push-#{$i} {
    position: relative;
    left: (1 / 24 * $i * 100) * 1%;
  }
}

@media only screen and (max-width: 768px) {
  @for $i from 0 through 24 {
    .ayu-col-xs-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-offset-xs-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-pull-xs-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-push-xs-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@media only screen and (min-width: 768px) {
  @for $i from 0 through 24 {
    .ayu-col-sm-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-offset-sm-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-pull-sm-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-push-sm-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@media only screen and (min-width: 992px) {
  @for $i from 0 through 24 {
    .ayu-col-md-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-offset-md-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-pull-md-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-push-md-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@media only screen and (min-width: 1200px) {
  @for $i from 0 through 24 {
    .ayu-col-lg-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-offset-lg-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-pull-lg-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-push-lg-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@media only screen and (min-width: 1920px) {
  @for $i from 0 through 24 {
    .ayu-col-xl-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-offset-xl-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-pull-xl-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-push-xl-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}
</style>

=======
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

<style lang="scss" scoped>
[class*="ayu-col-"] {
  float: left;
  box-sizing: border-box;
}

.ayu-col-0 {
  display: none;
}

@for $i from 0 through 24 {
  .ayu-col-#{$i} {
    width: (1 / 24 * $i * 100) * 1%;
  }

  .ayu-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }

  .ayu-col-pull-#{$i} {
    position: relative;
    right: (1 / 24 * $i * 100) * 1%;
  }

  .ayu-col-push-#{$i} {
    position: relative;
    left: (1 / 24 * $i * 100) * 1%;
  }
}

@media only screen and (max-width: 768px) {
  @for $i from 0 through 24 {
    .ayu-col-xs-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-offset-xs-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-pull-xs-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-push-xs-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@media only screen and (min-width: 768px) {
  @for $i from 0 through 24 {
    .ayu-col-sm-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-offset-sm-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-pull-sm-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-push-sm-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@media only screen and (min-width: 992px) {
  @for $i from 0 through 24 {
    .ayu-col-md-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-offset-md-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-pull-md-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-push-md-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@media only screen and (min-width: 1200px) {
  @for $i from 0 through 24 {
    .ayu-col-lg-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-offset-lg-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-pull-lg-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-push-lg-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@media only screen and (min-width: 1920px) {
  @for $i from 0 through 24 {
    .ayu-col-xl-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-offset-xl-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-pull-xl-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ayu-col-push-xl-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}
</style>

>>>>>>> dev
