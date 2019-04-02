const markdownRender = require('markdown-it')()
module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        // 向全局sass样式传入共享的全局变量
        data: `@import "./examples/style/variable.scss";`
      }
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
    .rule('js')
    .include
    .add('/packages')
    .end()
    .use('babel')
    .loader('babel-loader')
    .tap(options => {
      // 修改它的选项...
      return options
    })
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use("vue-markdown-loader")
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        use: [
          [require('markdown-it-container'), 'demo', {
            validate: function (params) {
              return params.trim().match(/^demo\s*(.*)$/)
            },

            render: function (tokens, idx) {
              console.log(tokens, idx)
              if (tokens[idx].nesting === 1) {
                // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
                let description = (demoInfo && demoInfo.length > 1) ? demoInfo[1] : ''
                let descriptionHTML = description ? markdownRender.render(description) : ''
                // 2.获取代码块内的html和js代码
                let content = tokens[idx + 1].content
                // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                return `<demo-block>
                <div class="source" slot="source">${content}</div>
                ${descriptionHTML}
                <div class="highlight" slot="highlight">`
              } else {
                return '</div></demo-block>\n'
              }
            }
          }]
        ]
      })
  },
  baseUrl: './',
  parallel: false
}
