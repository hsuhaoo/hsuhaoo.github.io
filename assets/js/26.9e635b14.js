(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{507:function(e,t,v){"use strict";v.r(t);var _=v(4),r=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"初始化及挂载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#初始化及挂载"}},[e._v("#")]),e._v(" 初始化及挂载")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li",[e._v("初始化之后调用 $mount 会挂载组件，如果是运行时编译，即不存在 render function 但是存在 template 的情况，需要进行「 编译」步骤。")])]),e._v(" "),v("h3",{attrs:{id:"编译"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[e._v("#")]),e._v(" 编译")]),e._v(" "),v("p",[e._v("compile 编译可以分成 parse、 optimize 与 generate 三个阶段，最终需要得到 render function。")]),e._v(" "),v("p",[e._v("parse 会用正则等方式解析 template 模板中的指令、class、style 等数据，形成 AST。")]),e._v(" "),v("p",[e._v("optimize 的主要作用是标记 static 静态节点，这是 Vue 在编译过程中的一处优化。")]),e._v(" "),v("p",[e._v("generate 是将 AST 转化成 render function 字符串的过程，得到结果是 render 的字符串以及 staticRenderFns 字符串。")]),e._v(" "),v("p",[e._v("在经历过 parse、 optimize 与 generate 这三个阶段以后，组件中就会存在渲染 VNode 所需的 render function 了。")]),e._v(" "),v("h3",{attrs:{id:"响应式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应式"}},[e._v("#")]),e._v(" 响应式")]),e._v(" "),v("p",[e._v("在 init 的时候通过 Object.defineProperty 进行了绑定， 它使得当被设置的对象被读取的时候会执行 getter 函数，而在当被赋值的时候会执行 setter 函数。 当 render function 被渲染的时候，因为会读取所需对象的值，所以会触发 getter 函数进行「 依赖收集」，即每定义一个vue的data的属性值，就添加到一个Watcher对象到订阅者里面去。这就导致了一个Observe里面的getter&setter方法与订阅者形成一种依赖关系。")]),e._v(" "),v("p",[e._v("在修改对象的值的时候，会触发对应的 setter， setter 通知之前「 依赖收集」得到的订阅者中的每一个观察者，告诉它们自己的值改变了，需要重新渲染视图。这时候这些观察者就会开始调用 update 来 更新视图。")]),e._v(" "),v("h3",{attrs:{id:"mvvm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[e._v("#")]),e._v(" MVVM")]),e._v(" "),v("p",[e._v("MVVM是Model-View-ViewModel的简写。即模型-视图-视图模型。它本质上就是MVC （Model-View- Controller）的改进版。传统的 MVC 架构通常是使用控制器更新模型，视图从模型中获取数据去渲染。当用户有输入时，会通过控制器去更新模型，并且通知视图进行更新。【模型】指的是后端传递的数据。【视图】指的是所看到的页面。但是 MVC 有一个巨大的缺陷就是"),v("strong",[e._v("控制器承担的责任太大")]),e._v("了，随着项目愈加复杂，控制器中的代码会越来越"),v("strong",[e._v("臃肿")]),e._v("，导致出现不利于"),v("strong",[e._v("维护")]),e._v("的情况。")]),e._v(" "),v("p",[e._v("【视图模型】mvvm模式的核心，它是连接view和model的桥梁。ViewModel 只关心数据和业务的处理，不关心 View 如何处理数据，在这种情况下，View 和 Model 都可以独立出来，任何一方改变了也不一定需要改变另一方，并且可以将一些可复用的逻辑放在一个 ViewModel 中，让多个 View 复用这个 ViewModel。")]),e._v(" "),v("p",[e._v("在MVVM的框架下视图和模型是不能直接通信的。它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动，这实际上就实现了数据的双向绑定。并且MVVM中的View 和 ViewModel可以互相通信。MVVM与MVC最大的区别就是：它实现了View和Model的自动同步，也就是当Model的属性改变时，我们不用再自己手动操作Dom元素，来改变View的显示，而是改变属性后该属性对应View层显示会自动改变。")]),e._v(" "),v("h3",{attrs:{id:"更新视图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更新视图"}},[e._v("#")]),e._v(" 更新视图")]),e._v(" "),v("p",[e._v("当数据变化后，执行 render function 就可以得到一个新的 VNode 节点，我们如果想要得到新的视图， 最简单粗暴的方法就是直接解析这个新的 VNode 节点，然后用 innerHTML 直接全部渲染到真实 DOM 中。但是其实我们只对其中的一小块内容进行了修改，这样做似乎有些「 浪费」。 那么我们为什么不能只修改那些「改变了的地方」呢？这个时候就要介绍我们的「 patch 」了。我们会将 新的 VNode 与旧的 VNode 一起传入 patch 进行比较，经过 diff 算法得出它们的「 差异」。最后我 们只需要将这些「 差异」的对应 DOM 进行修改即可。")]),e._v(" "),v("h3",{attrs:{id:"virtual-dom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[e._v("#")]),e._v(" Virtual DOM")]),e._v(" "),v("p",[e._v("Virtual DOM 其实就是一棵以 JavaScript 对 象（ VNode 节点）作为基础的树，用对象属性来描述节点，实际上它只是一层对真实 DOM 的抽象。 最终可以通过一系列操作使这棵树映射到真实环境上。由于 Virtual DOM 是以 JavaScript 对象为基础 而不依赖真实平台环境，所以使它具有了跨平台的能力，比如说浏览器平台、Weex、Node 等。")]),e._v(" "),v("p",[e._v("通过 JS 来模拟 DOM 并且渲染对应的 DOM 只是第一步，难点在于如何判断新旧两个 JS 对象的"),v("strong",[e._v("最小差异")]),e._v("并且实现"),v("strong",[e._v("局部更新")]),e._v(" DOM。首先 DOM 是一个多叉树的结构，如果需要完整的对比两颗树的差异，那么需要的时间复杂度会是 O(n ^ 3)，这个复杂度肯定是不能接受的。于是 React 团队优化了算法，实现了 O(n) 的复杂度来对比差异。 实现 O(n) 复杂度的关键就是只对比同层的节点，而不是跨层对比，这也是考虑到在实际业务中很少会去跨层的移动 DOM 元素。 所以判断差异的算法就分为了两步")]),e._v(" "),v("ul",[v("li",[e._v("首先从上至下，从左往右遍历对象，也就是树的深度遍历，这一步中会给每个节点添加索引，便于最后渲染差异")]),e._v(" "),v("li",[e._v("一旦节点有子元素，就去判断子元素是否有不同")])]),e._v(" "),v("p",[e._v("在第一步算法中我们需要判断新旧节点的 "),v("code",[e._v("tagName")]),e._v(" 是否相同，如果不相同的话就代表节点被替换了。如果没有更改 "),v("code",[e._v("tagName")]),e._v(" 的话，就需要判断是否有子元素，有的话就进行第二步算法。")]),e._v(" "),v("p",[e._v("在第二步算法中，我们需要判断原本的列表中是否有节点被移除，在新的列表中需要判断是否有新的节点加入，还需要判断节点是否有移动。")]),e._v(" "),v("h3",{attrs:{id:"路由"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[e._v("#")]),e._v(" 路由")]),e._v(" "),v("p",[e._v("两种实现方式")]),e._v(" "),v("p",[e._v("1."),v("strong",[e._v("Hash")]),e._v(' --- 利用 URL 中的hash("#");')]),e._v(" "),v("p",[v("code",[e._v("www.test.com/#/")]),e._v(" 就是 Hash URL，当 "),v("code",[e._v("#")]),e._v(" 后面的哈希值发生变化时，可以通过 "),v("code",[e._v("hashchange")]),e._v(" 事件来监听到 URL 的变化，从而进行跳转页面，并且无论哈希值如何变化，服务端接收到的 URL 请求永远是 "),v("code",[e._v("www.test.com")]),e._v("。")]),e._v(" "),v("p",[e._v("2.利用 "),v("strong",[e._v("History interface")]),e._v(" 在HTML5中新增的方法。")]),e._v(" "),v("p",[e._v("主要使用 "),v("code",[e._v("history.pushState")]),e._v(" 和 "),v("code",[e._v("history.replaceState")]),e._v(" 改变 URL。通过 History 模式改变 URL 同样不会引起页面的刷新，只会更新浏览器的历史记录。")]),e._v(" "),v("p",[v("strong",[e._v("两种方式对比")])]),e._v(" "),v("ul",[v("li",[e._v("Hash 模式只可以更改 "),v("code",[e._v("#")]),e._v(" 后面的内容，History 模式可以通过 API 设置任意的同源 URL")]),e._v(" "),v("li",[e._v("History 模式可以通过 API 添加任意类型的数据到历史记录中，Hash 模式只能更改哈希值，也就是字符串")]),e._v(" "),v("li",[e._v("Hash 模式无需后端配置，并且兼容性好。History 模式在用户手动输入地址或者刷新页面的时候会发起 URL 请求，后端需要配置 "),v("code",[e._v("index.html")]),e._v(" 页面用于匹配不到静态资源的时候")])]),e._v(" "),v("h3",{attrs:{id:"与react区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#与react区别"}},[e._v("#")]),e._v(" 与React区别")]),e._v(" "),v("p",[v("strong",[e._v("改变数据方式不同")])]),e._v(" "),v("p",[e._v("Vue 修改状态相比来说要简单许多，React 需要使用 "),v("code",[e._v("setState")]),e._v(" 来改变状态")]),e._v(" "),v("p",[v("strong",[e._v("数据流的不同")])]),e._v(" "),v("p",[e._v("Vue中默认是支持双向绑定， React 从诞生之初就不支持双向绑定，React一直提倡的是单向数据流")]),e._v(" "),v("p",[v("strong",[e._v("模板渲染方式的不同")])]),e._v(" "),v("p",[e._v("在表层上， 模板的语法不同")]),e._v(" "),v("p",[e._v("React 是通过JSX渲染模板")]),e._v(" "),v("p",[e._v("而Vue是通过一种拓展的HTML语法进行渲染")]),e._v(" "),v("p",[e._v("但其实这只是表面现象，毕竟React并不必须依赖JSX。")]),e._v(" "),v("p",[e._v("在深层上，模板的原理不同，这才是他们的本质区别：")]),e._v(" "),v("p",[e._v("React是在组件JS代码中，通过原生JS实现模板中的常见语法，比如插值，条件，循环等，都是通过JS语法实现的")]),e._v(" "),v("p",[e._v("Vue是在和组件JS代码分离的单独的模板中，通过指令来实现的，比如条件语句就需要 v-if 来实现")]),e._v(" "),v("h3",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),v("p",[e._v("掘金小册 剖析 Vue.js 内部运行机制")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://www.jianshu.com/p/eb06903c8bf7",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于Vue和React区别的一些笔记"),v("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);