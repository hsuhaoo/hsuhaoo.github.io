(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{512:function(e,v,_){"use strict";_.r(v);var c=_(4),a=Object(c.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h3",{attrs:{id:"webpack核心概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webpack核心概念"}},[e._v("#")]),e._v(" webpack核心概念")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("entry")]),e._v(" 一个可执行模块或库的入口文件。")]),e._v(" "),_("li",[_("code",[e._v("chunk")]),e._v(" 多个文件组成的一个代码块，例如把一个可执行模块和它所有依赖的模块组合和一个 "),_("code",[e._v("chunk")]),e._v(" 这体现了webpack的打包机制。\n"),_("ul",[_("li",[_("code",[e._v("loader")]),e._v(" 文件转换器，例如把es6转换为es5，scss转换为css。（常见的有css-loader(允许将css文件通过require的方式引入，并返回css代码)/style-loader(将css添加到DOM的内联样式标签style里)/file-loader(分发文件到output目录并返回相对路径)/babel-loader 用babel来转换JS文件")])])]),e._v(" "),_("li",[_("code",[e._v("plugin")]),e._v(" 插件，用于扩展webpack的功能，在webpack构建生命周期的节点上加入扩展hook为webpack加入功能。")])]),e._v(" "),_("h3",{attrs:{id:"webpack构建流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webpack构建流程"}},[e._v("#")]),e._v(" webpack构建流程")]),e._v(" "),_("p",[e._v("从启动webpack构建到输出结果经历了一系列过程，它们是：")]),e._v(" "),_("ol",[_("li",[e._v("解析webpack配置参数，合并从shell传入和"),_("code",[e._v("webpack.config.js")]),e._v("文件里配置的参数，生产最后的配置结果。")]),e._v(" "),_("li",[e._v("注册所有配置的插件，好让插件监听webpack构建生命周期的事件节点，以做出对应的反应。")]),e._v(" "),_("li",[e._v("从配置的"),_("code",[e._v("entry")]),e._v("入口文件开始解析文件构建AST语法树，找出每个文件所依赖的文件，递归下去。")]),e._v(" "),_("li",[e._v("在解析文件递归的过程中根据文件类型和loader配置找出合适的loader用来对文件进行转换。")]),e._v(" "),_("li",[e._v("递归完后得到每个文件的最终结果，根据"),_("code",[e._v("entry")]),e._v("配置生成代码块"),_("code",[e._v("chunk")]),e._v("。")]),e._v(" "),_("li",[e._v("输出所有"),_("code",[e._v("chunk")]),e._v("到文件系统。")])]),e._v(" "),_("p",[e._v("需要注意的是，在构建生命周期中有一系列插件在合适的时机做了合适的事情，比如"),_("code",[e._v("UglifyJsPlugin")]),e._v("会在loader转换递归完后对结果再使用"),_("code",[e._v("UglifyJs")]),e._v("压缩覆盖之前的结果。")])])}),[],!1,null,null,null);v.default=a.exports}}]);