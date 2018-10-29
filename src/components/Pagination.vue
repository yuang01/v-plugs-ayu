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
  props: {
    // pages: { // 总页数
    //   default: 0
    // },
    showTotal: {
      default: false
    },
    showJumper: {
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
      default: '#3e8ef7'
    },
    prevText: { // 上一页文字，默认是向左箭头
      default: '&lt;'
    },
    nextText: { // 下一页文字， 默认是向右箭头
      default: '&gt;'
    },
    disabled: {
      default: false,
    }
  },
  data() {
    return {
      currentPage: this.curpage,
    };
  },
  watch: {
    curpage(val) {
      if (val > this.pages || val <= 0) {
        this.currentPage = 1;
      } else {
        this.currentPage = val;
      }
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
        this.currentPage = this.pages;
        this.$emit('update:curpage', this.currentPage); //触发 input 事件，并传入新值
      }
    },
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
      if (val > this.pages || val <= 0 || val === this.currentPage || isNaN(val) || p.test(id)) {
        this.$refs.ayuInput.value = this.curpage;
        return;
      }
      this.currentPage = val;
      this.$emit('current-change', this.currentPage);
      this.$emit('update:curpage', this.currentPage); //触发 input 事件，并传入新值
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
    }
  },
};
</script>
<style scoped>
.ayu-pagination {
  display: flex;
}
/* 显示总数和跳转到多少页样式 */
.pagination-sm .ayu-total,
.pagination-sm .ayu-pagination__jump {
  height: 34px;
  line-height: 34px;
}
.ayu-total,
.ayu-pagination__jump {
  height: 37px;
  line-height: 37px;
}
.pagination-lg .ayu-total,
.pagination-lg .ayu-pagination__jump {
  height: 45px;
  line-height: 45px;
  font-size: 16px;
}
.ayu-total,
.ayu-pagination__jump {
  font-size: 13px;
  min-width: 35.5px;
  font-weight: 400;
  margin-right: 10px;
  color: #606266;
  vertical-align: top;
  box-sizing: border-box;
}
.ayu-pagination__jump {
  margin-left: 24px;
  display: flex;
}
/* input样式 */
.ayu-input {
  width: 50px;
  margin: 0 2px;
}
.ayu-input-inner {
  width: 48px;
  height: 28px;
  padding: 0 3px;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  text-align: center;
  font-size: inherit;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  box-shadow:none;
  outline:none;
}
.ayu-input-inner:focus {
  border-color: #3e8ef7;
  border-radius: 4px;
  outline:none;
  box-shadow:none;
}
/* 显示总数和跳转到多少页样式--结束 */
/* 中间页码的样式 */
.pagination {
  margin: 0;
}
.pagination {
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: .215rem;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.pagination-gap .page-item:first-child .page-link, .pagination-gap .page-item:last-child .page-link {
  border-radius: 5px;
}
.page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: .215rem;
    border-bottom-left-radius: .215rem;
}
.pagination-gap .page-link {
    margin: 0 5px;
    border-radius: 5px;
}
/* 小样式 */
.pagination-sm .page-link {
    padding: .329rem .686rem;
    font-size: .5rem;
    line-height: 1.5;
}
/* 大样式 */
.pagination-lg .page-link {
    padding: .515rem 1.015rem;
    font-size: 1.286rem;
    line-height: 1.3333333333;
}
.page-link {
    position: relative;
    display: block;
    padding: .329rem .886rem;
    margin-left: -1px;
    line-height: 1.57142857;
    color: #76838f;
    background-color: transparent;
    border: 1px solid #e4eaec;
    font-weight: 600;
}
a {
    text-decoration: none;
    background-color: transparent;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
/* 当前激活样式 */
.page-item.active .page-link{
  background-color: #3e8ef7;
  color: #fff!important;
}
.page-item:not(.active) > .page-link:hover {
  border-color: #3e8ef7;
  color: #3e8ef7;
}
/* 禁止点击 */
.page-item.disabled .page-link {
  color: #ccd5db!important;
  pointer-events: none;
  background-color: transparent!important;
  border-color: #e4eaec!important;
}
.ayu-pagination.disabled{
  cursor: not-allowed;
}
.ayu-pagination.disabled .pagination .page-link,
.ayu-pagination.disabled .pagination .page-item.active .page-link{
  color: #ccc!important;
  background-color: transparent!important;
}
.ayu-pagination.disabled .pagination .page-item {
  pointer-events: none;
}
.ayu-pagination.disabled .ayu-input-inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
/* 中间页码的样式--结束 */
</style>
