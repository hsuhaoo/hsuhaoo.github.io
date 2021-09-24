(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{501:function(t,r,v){"use strict";v.r(r);var _=v(4),e=Object(_.a)({},(function(){var t=this,r=t.$createElement,v=t._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("V8 实现了准确式 GC，GC 算法采用了分代式垃圾回收机制。因此，V8 将内存（堆）分为新生代和老生代两部分。")]),t._v(" "),v("h2",{attrs:{id:"新生代算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#新生代算法"}},[t._v("#")]),t._v(" 新生代算法")]),t._v(" "),v("p",[t._v("新生代中的对象一般存活时间较短，使用 Scavenge GC 算法。")]),t._v(" "),v("p",[t._v("在新生代空间中，内存空间分为两部分，分别为 From 空间和 To 空间。在这两个空间中，必定有一个空间是使用的，另一个空间是空闲的。新分配的对象会被放入 From 空间中，当 From 空间被占满时，新生代 GC 就会启动了。算法会检查 From 空间中存活的对象并复制到 To 空间中，如果有失活的对象就会销毁。当复制完成后将 From 空间和 To 空间互换，这样 GC 就结束了。")]),t._v(" "),v("h2",{attrs:{id:"老生代算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#老生代算法"}},[t._v("#")]),t._v(" 老生代算法")]),t._v(" "),v("p",[t._v("老生代中的对象一般存活时间较长且数量也多，使用了两个算法，分别是"),v("strong",[t._v("标记清除算法")]),t._v("和"),v("strong",[t._v("标记压缩算法")]),t._v("。")]),t._v(" "),v("p",[t._v("什么情况下对象会出现在老生代空间中：")]),t._v(" "),v("ul",[v("li",[t._v("新生代中的对象是否已经经历过一次 Scavenge 算法，如果经历过的话，会将对象从新生代空间移到老生代空间中。")]),t._v(" "),v("li",[t._v("To 空间的对象占比大小超过 25 %。在这种情况下，为了不影响到内存分配，会将对象从新生代空间移到老生代空间中。")])]),t._v(" "),v("p",[t._v("在老生代中，以下情况会先启动标记清除算法：")]),t._v(" "),v("ul",[v("li",[t._v("某一个空间没有分块的时候")]),t._v(" "),v("li",[t._v("空间中被对象超过一定限制")]),t._v(" "),v("li",[t._v("空间不能保证新生代中的对象移动到老生代中")])]),t._v(" "),v("p",[t._v("在这个阶段中，会遍历堆中所有的对象，然后标记活的对象，在标记完成后，销毁所有没有被标记的对象。在标记大型对内存时，可能需要几百毫秒才能完成一次标记。这就会导致一些性能上的问题。为了解决这个问题，2011 年，V8 从 stop-the-world 标记切换到增量标志。在增量标记期间，GC 将标记工作分解为更小的模块，可以让 JS 应用逻辑在模块间隙执行一会，从而不至于让应用出现停顿情况。但在 2018 年，GC 技术又有了一个重大突破，这项技术名为并发标记。该技术可以让 GC 扫描和标记对象时，同时允许 JS 运行，你可以点击 "),v("a",{attrs:{href:"https://v8project.blogspot.com/2018/06/concurrent-marking.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("该博客"),v("OutboundLink")],1),t._v(" 详细阅读。")]),t._v(" "),v("p",[t._v("清除对象后会造成堆内存出现碎片的情况，当碎片超过一定限制后会启动压缩算法。在压缩过程中，将活的对象像一端移动，直到所有对象都移动完成然后清理掉不需要的内存。")]),t._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),v("p",[t._v("掘金小册 前端面试之道")])])}),[],!1,null,null,null);r.default=e.exports}}]);