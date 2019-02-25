# 使用
首先可以先
``` bash
npm config set registry https://registry.npmjs.org/
```
然后
``` bash
npm install --save v-plugs-ayu
```
在man.js中引入即可
``` javascript
import "v-plugs-ayu/dist/personal-component.css";
import "v-plugs-ayu";
```
# FloatInput组件预览
![预览](https://yuang.site//images/myplug-floatinput.gif)

页面中直接使用以下标签就行了
``` html
<float-input></float-input>
or
<FloatInput></FloatInput>
```
# 参数Props
<table>
    <tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
    <tr><td>value(v-model)</td><td>值</td><td>string</td><td>-</td><td>-</td></tr>
    <tr><td>placeholder</td><td>提示信息</td><td>string</td><td>-</td><td>-</td></tr>
    <tr><td>type</td><td>输入框类型</td><td>string</td><td>text、password、email</td><td>text</td></tr>
    <tr><td>required</td><td>是否必填</td><td>boolean</td><td>true、false</td><td>false</td></tr>
    <tr><td>hascolor</td><td>自带的输入框颜色</td><td>string</td><td>has-default、has-danger、has-success、has-warning、has-info</td><td>has-default</td></tr>
    <tr><td>color</td><td>自定义输入框颜色，若果has-color和color同时存在，则优先color参数</td><td>string</td><td>red、blue、#000等</td><td>-</td></tr>
</table>

# pagination分页组件组件预览
![预览](https://github.com/yuang01/myblog/blob/yuangboy/source/images/pagination.gif)
页面中直接使用以下标签就行了
``` html
<pagination></pagination>
```
# 参数Props
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
showTotal|显示总条数|boolean|true、false|false
showJumper|显示前往多少页的input|boolean|true、false|false
page-size|每页显示条目个数，支持 .sync 修饰符|number|-|10
total|总条目数|number|-|-
curpage|当前页数，支持 .sync 修饰符|number|-|1
pagination-size|组件大小|string|pagination-sm、pagination-lg|-
bgc|组件颜色|string|任意颜色值|#3e8ef7
prevText|上一页文字|string|任意|&lt;(向左箭头)
nextText|下一页文字|string|任意|&gt;(向右箭头)
disabled|是否禁用|boolean|true、false|false
# 事件
事件名称|说明|回调参数|-|-
:---|:---|:---|:---|:---
size-change|pageSize 改变时会触发|每页条数|-|-
current-change|curpage 改变时会触发|当前页|-|-
prev-click|用户点击上一页按钮改变当前页后触发|当前页|-|-
next-click|用户点击下一页按钮改变当前页后触发|当前页|-|-
