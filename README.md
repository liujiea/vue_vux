# vue_vux

> A Vue.js project

> 2018年6月7日21:17:31 提交
    - 构建完成第一个组件icon
    - 通用less
        - mobile, setArrow, setOnepx, text
        - color, global, weui-button, weui-cell, weui-dialog, weui-grid, weui-msg, weui-progress
        - fn
        - icon -> weui_iocn, weui_icon_font
        - variable(全局)

> 2018年6月10日16:34:55 提交完成x-button组件
  添加less
      weui-btn_global, weui-btn_default, weuii-btn_disabled, weui-btn_loading, weui-btn_plain, weui-btn_primary,
   weui-btn_warn, weui-button, weui-loading
> 2018年6月11日20:01:04 从github上获取

> 2018年6月11日21:17:37 从github上获取分支
    >> git fetch orgin
    合并
    >> git merge origin/master
> 2018年6月12日22:46:20
    调通x-button 组件 和完成divider组件。

> 2018年6月15日21:52:23 更新 flexbox 组件
    原理是使用了 display： flex ;


最近写一个项目要做输入验证， 本来单个输入框是可以在组件内执行验证的; 但是还要使用 点击按钮， 使得当前组件中所有输入框都验证； 然后就接触到了 指令 与插件；
虽然最后使用指令完成了项目需求，但是暴露出很多的问题也认识到很多自己的不足； 

2018年8月5日20:55:12 

vux 的第一个插件 axaj 还是很容易的； 但是第二个alert 插件；

alert 完成一大半， 渐渐的摸到alert 组件和插件的之间的关系；

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
