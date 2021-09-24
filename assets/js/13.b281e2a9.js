(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{497:function(a,t,s){"use strict";s.r(t);var e=s(4),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("样式规则有一些来源：")]),a._v(" "),s("ol",[s("li",[a._v("外部样式表或样式元素中的 CSS 规则")])]),a._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("inline 样式属性及类似内容")])]),a._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[a._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("blue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("HTML 可视化属性（映射到相关的样式规则）")])]),a._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("bgcolor")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("后两种很容易和元素进行匹配，因为元素拥有样式属性，而且 HTML 属性可以使用元素作为键值进行映射。")]),a._v(" "),s("p",[a._v("样式表解析完毕后，系统会根据选择器将 CSS规则添加到某个哈希表中。这些哈希表的选择器各不相同，包括 ID、类名称、标记名称等，还有一种通用哈希表，适合不属于上述类别的规则。如果选择器是 ID，规则就会添加到 ID 表中；如果选择器是类，规则就会添加到类表中，依此类推。")]),a._v(" "),s("p",[a._v("这种处理可以大大简化规则匹配。我们无需查看每一条声明，只要从哈希表中提取元素的相关规则即可。这种优化方法可排除掉 95% 以上规则，因此在匹配过程中根本就不用考虑这些规则了。")]),a._v(" "),s("p",[a._v("对于下面的 HTML 代码段：")]),a._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("an error occurred "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v(" messageDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("this is a message"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("我们首先会为 p 元素寻找匹配的规则。类表中有一个“error”键，在下面可以找到“p.error”的规则。div 元素在 ID 表（键为 ID）和标记表中有相关的规则。剩下的工作就是找出哪些根据键提取的规则是真正匹配的了。")]),a._v(" "),s("p",[a._v("样式对象具有每个可视化属性一一对应的属性（均为 CSS 属性但更为通用）。如果某个属性未由任何匹配规则所定义，那么部分属性就可由父代元素样式对象继承。其他属性具有默认值。")]),a._v(" "),s("p",[a._v("如果定义不止一个，就会出现问题，需要通过层叠顺序来解决。")]),a._v(" "),s("h4",{attrs:{id:"样式表层叠顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式表层叠顺序"}},[a._v("#")]),a._v(" 样式表层叠顺序")]),a._v(" "),s("p",[a._v("某个样式属性的声明可能会出现在多个样式表中，也可能在同一个样式表中出现多次。这意味着应用规则的顺序极为重要。这称为“"),s("a",{attrs:{href:"http://www.nowamagic.net/academy/tag/%E5%B1%82%E5%8F%A0",target:"_blank",rel:"noopener noreferrer"}},[a._v("层叠"),s("OutboundLink")],1),a._v("”顺序。")]),a._v(" "),s("p",[a._v("根据 CSS2 规范，层叠的顺序为（优先级从低到高）：")]),a._v(" "),s("ol",[s("li",[a._v("浏览器声明")]),a._v(" "),s("li",[a._v("用户普通声明")]),a._v(" "),s("li",[a._v("作者普通声明")]),a._v(" "),s("li",[a._v("作者重要声明")]),a._v(" "),s("li",[a._v("用户重要声明")])]),a._v(" "),s("p",[a._v("浏览器声明是重要程度最低的，而用户只有将该声明标记为“重要”才可以替换网页作者的声明。同样顺序的声明会根据特异性进行排序，然后再是其指定顺序。")]),a._v(" "),s("p",[a._v("浏览器把实现这些HTML自带样式的模块称作User Agent Stylesheet。如果对这个默认样式不满意最简单的解决办法就是重新设置该样式的属性，因为user agent stylesheet优先级很低，会被覆盖，这样就不会影响到我们的样式了。")]),a._v(" "),s("h4",{attrs:{id:"选择器的特异性-优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择器的特异性-优先级"}},[a._v("#")]),a._v(" 选择器的特异性（优先级）")]),a._v(" "),s("p",[a._v("选择器的特异性由 CSS2 规范定义如下：")]),a._v(" "),s("ul",[s("li",[a._v("如果声明来自于“style”属性，而不是带有选择器的规则，则记为 1，否则记为 0 (= a)         (内联样式)")]),a._v(" "),s("li",[a._v("记为选择器中 ID 属性的个数 (= b)")]),a._v(" "),s("li",[a._v("记为选择器中类、其他属性和伪类的个数 (= c)")]),a._v(" "),s("li",[a._v("记为选择器中元素名称和伪元素的个数 (= d)")])]),a._v(" "),s("p",[a._v("将四个数字按 a-b-c-d 这样连接起来（位于大数进制的数字系统中），构成特异性。")]),a._v(" "),s("p",[a._v("使用的进制取决于上述类别中的最高计数。")]),a._v(" "),s("p",[a._v("例如，如果 a=14，您可以使用十六进制。如果 a=17，那么您需要使用十七进制；当然不太可能出现这种情况，除非是存在如下的选择器：html body div div p ...（在选择器中出现了 17 个标记，这样的可能性极低）。")]),a._v(" "),s("p",[s("strong",[a._v("需要注意的是：通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以他们的权值都为 0")]),a._v("。 权重值大的选择器其优先级也高，相同权重的优先级又遵循后定义覆盖前面定义的情况。")]),a._v(" "),s("h4",{attrs:{id:"高性能的css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高性能的css"}},[a._v("#")]),a._v(" 高性能的CSS")]),a._v(" "),s("p",[a._v("前面谈了一大堆浏览器的 CSS 渲染的原理，那么这些有什么用呢？最直接的用处就是，可以根据浏览器的渲染原理对 CSS 的书写性能做一点改进。")]),a._v(" "),s("p",[a._v("就渲染引擎加载页面时浏览器的具体工作流程而言，粗略地说，就是构建一个dom树，页面要显示的各元素都会创建到这个dom树当中，每当一个新元素加入到这个dom树当中，浏览器便会通过css引擎查遍css样式表，找到符合该元素的样式规则应用到这个元素上。")]),a._v(" "),s("p",[a._v("CSS 引擎查找样式表，对每条规则都按从右到左的顺序去匹配。 看如下规则：")]),a._v(" "),s("h5",{attrs:{id:"示例-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[a._v("#")]),a._v(" 示例 1")]),a._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("#nav li")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("看起来很快，实际上很慢，尽管这让人有点费解。我们中的大多数人，尤其是那些从左到右阅读的人，可能猜想浏览器也是执行从左到右匹配规则的，因此会推测这条规则的开销并不高。")]),a._v(" "),s("p",[a._v("在脑海中，我们想象浏览器会像这样工作：找到唯一的ID为nav的元素，然后把这个样式应用到直系子元素的li元素上。我们知道有一个ID为nav的元素，并且它只有几个Li子元素，所以这个CSS选择符应该相当高效。")]),a._v(" "),s("p",[a._v("事实上，CSS选择符是从右到左进行匹配的。了解这方面的知识后，我们知道这个之前看似高效地规则实际开销相当高，浏览器必须遍历页面上每个li元素并确定其父元素的id是否为nav。")]),a._v(" "),s("h5",{attrs:{id:"示例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[a._v("#")]),a._v(" 示例 2")]),a._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("效率差到极点的做法，因为*通配符将匹配所有元素，所以浏览器必须去遍历每一个元素，这样的计算次数可能是上万次！")]),a._v(" "),s("h5",{attrs:{id:"示例-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[a._v("#")]),a._v(" 示例 3")]),a._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("ul#nav")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("ul.nav")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("在页面中一个指定的ID只能对应一个元素，所以没有必要添加额外的限定符，而且这会使它更低效。同时也不要用具体的标签限定类选择符，而是要根据实际的情况对类名进行扩展。例如把ul.nav改成.main_nav更好。")]),a._v(" "),s("h5",{attrs:{id:"示例-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-4"}},[a._v("#")]),a._v(" 示例 4")]),a._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("ul li li li .nav_item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("对于这样的选择器，之前也写过，最后自己也数不过来有多少后代选择器了，何不用一个类来关联最后的标签元素，如.extra_navitem，这样只需要匹配class为extra_navitem的元素，效率明显提升了。")]),a._v(" "),s("p",[a._v("对此，在CSS书写过程中，总结出如下性能提升的方案：")]),a._v(" "),s("ol",[s("li",[a._v("避免使用通配规则。如 *{} 计算次数惊人！只对需要用到的元素进行选择")]),a._v(" "),s("li",[a._v("尽量少的去对标签进行选择，而是用class。如：#nav li{},可以为li加上nav_item的类名，如下选择.nav_item{}")]),a._v(" "),s("li",[a._v("不要去用标签限定ID或者类选择符。如：ul#nav,应该简化为#nav")]),a._v(" "),s("li",[a._v("尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过三层，更多的使用类来关联每一个标签元素。")]),a._v(" "),s("li",[a._v("考虑继承。了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则")])]),a._v(" "),s("p",[a._v("选用高效的选择符，可以减少页面的渲染时间，从而有效的提升用户体验。")]),a._v(" "),s("h4",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("p",[s("a",{attrs:{href:"http://www.nowamagic.net/academy/detail/48110527",target:"_blank",rel:"noopener noreferrer"}},[a._v("浏览器对CSS样式规则的匹配"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"http://www.nowamagic.net/academy/detail/48110533",target:"_blank",rel:"noopener noreferrer"}},[a._v("CSS样式表层叠顺序的应用规则"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"http://www.nowamagic.net/academy/detail/48110577",target:"_blank",rel:"noopener noreferrer"}},[a._v("利用浏览器CSS渲染原理写出高性能的CSS代码"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);