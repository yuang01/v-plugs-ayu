<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view class="markdown" />
  </div>
</template>

<style lang="scss">
.markdown h1 {
  color: #0d1a26;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 8px;
  font-size: 30px;
  line-height: 38px;
}
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
  font-family: Lato;
  margin: 1.6em 0 0.6em;
  font-weight: 500;
  clear: both;
}
.markdown h3 {
  font-size: 18px;
}
.markdown h4 {
  font-size: 16px;
}
.markdown h5 {
  font-size: 14px;
}
.markdown h6 {
  font-size: 12px;
}
.markdown p,
.markdown pre {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
.markdown ul > li > p,
.markdown ol > li > p {
  margin: 0.2em 0;
}
.markdown ul {
  padding: 0;
  margin: 0;
}
.markdown ul > li {
  list-style-type: circle;
  margin-left: 20px;
  padding-left: 4px;
  padding-top: 15px;
}
.markdown ol > li {
  list-style-type: decimal;
  margin-left: 20px;
  padding-left: 4px;
  padding-top: 15px;
}
.markdown > table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #ebedf0;
  width: 100%;
  margin: 8px 0 16px;
}
.markdown > table th,
.markdown > table td {
  color: #314659;
  border: 1px solid #ebedf0;
  text-align: left;
  padding: 10px 15px;
}
.markdown > table th {
  white-space: nowrap;
  color: #5c6b77;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.02);
}
.markdown strong,
.markdown b {
  font-weight: 500;
}
.markdown .sh-markdown-permalink {
  opacity: 0;
}
.markdown h1:hover .sh-markdown-permalink,
.markdown h2:hover .sh-markdown-permalink,
.markdown h3:hover .sh-markdown-permalink,
.markdown h4:hover .sh-markdown-permalink,
.markdown h5:hover .sh-markdown-permalink,
.markdown h6:hover .sh-markdown-permalink {
  opacity: 1;
  display: inline-block;
}
.markdown > br,
.markdown p > br {
  clear: both;
}
.markdown blockquote {
  font-size: 90%;
  color: #0d1a26;
  border-left: 4px solid #ebedf0;
  padding-left: 0.8em;
  margin: 1em 0;
}
.markdown blockquote p {
  margin: 0;
}
.markdown hr {
  height: 1px;
  border: 0;
  background: #ebedf0;
  clear: both;
}
.markdown code {
  font-family: Microsoft YaHei;
  margin: 0 1px;
  background: #f2f4f5;
  padding: 0.2em 0.5em;
  border-radius: 3px;
  font-size: 0.9em;
  border: 1px solid #eee;
}
</style>
