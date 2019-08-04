<template>
<div class="ayu-pagination" :class="[paginationSize, {'disabled': disabled}]">
  <span class="ayu-total" v-if="showTotal">共{{total}}条</span>
  <ul class="pagination pagination-gap">
    <li class="page-item" @click="prev()" :class="{disabled : pstart}">
      <a class="page-link" href="javascript:void(0)" aria-label="Previous" @mouseenter="hoverColor($event, -10)" @mouseleave="hoveroutColor($event)">
        <span aria-hidden="true" v-html="prevText === '' ? '&lt;' : prevText"></span>
      </a>
    </li>
    <li class="page-item" v-show="currentPage>5 && pages>7" @click="jumpPage(1)"><a class="page-link" href="javascript:void(0)" @mouseenter="hoverColor($event, -10)" @mouseleave="hoveroutColor($event)">1</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0)" v-show="efont" @mouseenter="hoverColor($event, -10)" @mouseleave="hoveroutColor($event, -10)" @click="prevFive()">...</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0)" v-show="pages === 0">0</a></li>
    <li class="page-item" v-for="(num,index) in indexs" :key="index" :class="{active:currentPage==num}" @click="jumpPage(num)"><a class="page-link" :style="{backgroundColor: currentPage===num ? bgc : ''}" @mouseenter="hoverColor($event, num)" @mouseleave="hoveroutColor($event, num)" href="javascript:void(0)">{{num}}</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0)" v-show="ebehind" @mouseenter="hoverColor($event, -10)" @mouseleave="hoveroutColor($event)" @click="nextFive()">...</a></li>
    <li class="page-item" v-show="currentPage<pages-4 && pages>7" @click="jumpPage(pages)"><a class="page-link" href="javascript:void(0)" @mouseenter="hoverColor($event, -10)" @mouseleave="hoveroutColor($event)">{{pages}}</a></li>
    <li class="page-item" :class="{disabled : pend}" @click="next()">
      <a class="page-link" href="javascript:void(0)" aria-label="Next" @mouseenter="hoverColor($event, -10)" @mouseleave="hoveroutColor($event)">
        <span aria-hidden="true" v-html="nextText === '' ? '&gt;' : nextText"></span>
      </a>
    </li>
  </ul>
  <span class="ayu-pagination__jump" v-if="showJumper">
    前往
    <div class="ayu-input">
      <input ref="ayuInput" class="ayu-input-inner" type="text" :disabled="disabled" :value="currentPage" @keyup.enter="jumpPage($event.target.value)" @blur="jumpPage($event.target.value)">
    </div>
    页
  </span>
</div>
</template>

<script>
export default {
  name: 'AyuPagination',
  props: {
    showTotal: {
      type: Boolean,
      default: false
    },
    showJumper: {
      type: Boolean,
      default: false
    },
    pageSize: { // 每页显示的个数，默认为10
      default: 10
    },
    total: { // 总共有的数据条数
      default: 0
    },
    curpage: { // 当前页数，默认从1开始
      default: 1
    },
    paginationSize: { // 组件大小，有大(pagination-lg)、中(pagination-sm)、小类型，默认为中型
      default: ''
    },
    bgc: { // 背景颜色和鼠标悬浮颜色
      default: ''
    },
    prevText: { // 上一页文字，默认是向左箭头
      default: '&lt;'
    },
    nextText: { // 下一页文字， 默认是向右箭头
      default: '&gt;'
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      currentPage: this.curpage,
    };
  },
  watch: {
    currentPage(val) {
      this.resetCurPage(val);
      this.$emit('current-change', this.currentPage);
      this.$emit('update:curpage', this.currentPage); //触发 input 事件，并传入新值
    },
    curpage(val) {
      this.resetCurPage(val);
    },
    pageSize(val) {
      if (val > this.total) {
        this.$emit('update:page-size', this.total);
        this.$emit('size-change',  this.total);
      } else if (val <= 0) {
        this.$emit('update:page-size', 10);
        this.$emit('size-change',  10);
      } else {
        this.$emit('size-change', val);
      }
      if (this.currentPage > this.pages) {
        this.currentPage = 1;
      }
    },
    total(val) {
      if (this.currentPage > this.pages) {
        this.currentPage = 1;
      }
    }
  },
  computed: {
    pages() {
      if (this.pageSize > this.total) {
        return  1
      } else if (this.pageSize <= 0) {
        return Math.ceil(this.total / 10)
      }
      return Math.ceil(this.total / this.pageSize)
    },
    pstart() {
      return this.currentPage === 1 || this.pages === 0;
    },
    pend() {
      return this.currentPage === this.pages || this.pages === 0;
    },
    efont() {
      if (this.pages <= 7) {
        return false;
      }
      return this.currentPage > 5;
    },
    ebehind() {
      if (this.pages <= 7) {
        return false;
      }
      const nowAy = this.indexs;
      return nowAy[nowAy.length - 1] !== this.pages;
    },
    indexs() {
      let left = 1;
      let right = this.pages;
      const ar = [];
      if (this.pages >= 7) { // 总数大于7的时候
        if (this.currentPage > 5 && this.currentPage < this.pages - 4) {
          left = Number(this.currentPage) - 2;
          right = Number(this.currentPage) + 2;
        } else if (this.currentPage <= 5) {
          left = 1;
          right = 7;
        } else {
          right = this.pages;
          left = this.pages - 5;
        }
      }
      while (left <= right) {
        ar.push(left);
        left += 1;
      }
      return ar;
    },
  },
  methods: {
    prev() {
      if (this.currentPage === 1 || this.pages === 0) {
        return;
      }
      this.currentPage -= 1;
      this.$emit('prev-click', this.currentPage);
      this.$emit('update:curpage', this.currentPage); //触发 input 事件，并传入新值,子组件修改props的值
    },
    jumpPage(id) {
      let val = parseInt(id);
      let p = /[^\d]/g; // 如果用户输入的字符串中有除了数字以外的其他字符，则视为无效
      if (val > this.pages || val <= 0 || isNaN(val) || p.test(id)) {
        this.$refs.ayuInput.value = this.currentPage;
        return;
      }
      this.currentPage = val;
    },
    next() {
      if (this.currentPage === this.pages || this.pages === 0) {
        return;
      }
      this.currentPage += 1;
      this.$emit('next-click', this.currentPage);
      this.$emit('update:curpage', this.currentPage); //触发 input 事件，并传入新值
    },
    // 点击...向左进五个
    prevFive() {
      this.currentPage -= 5;
      this.$emit('prev-click', this.currentPage);
      this.$emit('update:curpage', this.currentPage); //触发 input 事件，并传入新值
    },
    // 点击...向右进五个
    nextFive() {
      this.currentPage += 5;
      this.$emit('next-click', this.currentPage);
      this.$emit('update:curpage', this.currentPage); //触发 input 事件，并传入新值
    },
    hoverColor(ev, num) {
      if (num !== this.currentPage) {
        ev.currentTarget.style.borderColor = this.bgc;
        ev.currentTarget.style.color = this.bgc;
      }
    },
    hoveroutColor(ev) {
      ev.currentTarget.style.borderColor = '#e4eaec';
      ev.currentTarget.style.color = '#76838f';
    },
    // 重置currentPage
    resetCurPage(val) {
      if (val > this.total / this.pageSize || val <= 0) {
        this.currentPage = 1;
      } else {
        this.currentPage = val;
      }
    }
  },
};
</script>
