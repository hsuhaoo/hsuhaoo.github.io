(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{494:function(e,t,r){"use strict";r.r(t);var v=r(4),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("想要理解Event Loop，就要从程序的运行模式讲起。运行以后的程序叫做"),r("a",{attrs:{href:"http://zh.wikipedia.org/wiki/%E8%BF%9B%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[e._v('"进程"'),r("OutboundLink")],1),e._v("（process），一般情况下，一个进程一次只能执行一个任务。")]),e._v(" "),r("p",[e._v("如果有很多任务需要执行，不外乎三种解决方法。")]),e._v(" "),r("blockquote",[r("p",[e._v("**（1）排队。**因为一个进程一次只能执行一个任务，只好等前面的任务执行完了，再执行后面的任务。")]),e._v(" "),r("p",[e._v("**（2）新建进程。**使用fork命令，为每个任务新建一个进程。")]),e._v(" "),r("p",[e._v("**（3）新建线程。**因为进程太耗费资源，所以如今的程序往往允许一个进程包含多个线程，由线程去完成任务。（进程和线程的详细解释，请看"),r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),r("OutboundLink")],1),e._v("。）")])]),e._v(" "),r("p",[e._v('以JavaScript语言为例，它是一种单线程语言，所有任务都在一个线程上完成，即采用上面的第一种方法。一旦遇到大量任务或者遇到一个耗时的任务，网页就会出现"假死"，因为JavaScript停不下来，也就无法响应用户的行为。')]),e._v(" "),r("p",[e._v("JavaScript从诞生起就是单线程。原因大概是不想让浏览器变得太复杂，因为多线程需要共享资源、且有可能修改彼此的运行结果，对于一种网页脚本语言来说，这就太复杂了。后来就约定俗成，JavaScript为一种单线程语言。（Worker API可以实现多线程，但是JavaScript本身始终是单线程的。）")]),e._v(" "),r("p",[e._v('如果某个任务很耗时，比如涉及很多I/O（输入/输出）操作，由于I/O操作很慢，所以这个线程的大部分运行时间都在空等I/O操作的返回结果。这种运行方式称为"同步模式"（synchronous I/O）或"堵塞模式"（blocking I/O）。若采用多线程，不仅占用多倍的系统资源，也闲置多倍的资源。')]),e._v(" "),r("p",[e._v("Event Loop就是为了解决这个问题而提出的。"),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Event_loop",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia"),r("OutboundLink")],1),e._v("这样定义：")]),e._v(" "),r("blockquote",[r("p",[e._v('"'),r("strong",[e._v("Event Loop是一个程序结构，用于等待和发送消息和事件。")]),e._v('（a programming construct that waits for and dispatches events or messages in a program.）"')])]),e._v(" "),r("p",[e._v('简单说，就是在程序中设置两个线程：一个负责程序本身的运行，称为"主线程"；另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被称为"Event Loop线程"（可以译为"消息线程"）。')]),e._v(" "),r("p",[r("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/201310/2013102004.png",alt:"asynchronous mode"}})]),e._v(" "),r("p",[e._v("上图主线程的绿色部分，还是表示运行时间，而橙色部分表示空闲时间。每当遇到I/O的时候，主线程就让Event Loop线程去通知相应的I/O程序，然后接着往后运行，所以不存在红色的等待时间。等到I/O程序完成操作，Event Loop线程再把结果返回主线程。主线程就调用事先设定的回调函数，完成整个任务。")]),e._v(" "),r("p",[e._v('可以看到，由于多出了橙色的空闲时间，所以主线程得以运行更多的任务，这就提高了效率。这种运行方式称为"'),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Asynchronous_I/O",target:"_blank",rel:"noopener noreferrer"}},[e._v("异步模式"),r("OutboundLink")],1),e._v('"（asynchronous I/O）或"非堵塞模式"（non-blocking mode）。')]),e._v(" "),r("p",[e._v("这正是JavaScript语言的运行方式。单线程模型虽然对JavaScript构成了很大的限制，但也因此使它具备了其他语言不具备的优势。如果部署得好，JavaScript程序是不会出现堵塞的，这就是为什么node.js平台可以用很少的资源，应付大流量访问的原因。")]),e._v(" "),r("h2",{attrs:{id:"call-stack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#call-stack"}},[e._v("#")]),e._v(" Call Stack")]),e._v(" "),r("p",[e._v("栈里是一个个待执行的函数。拿两个函数来说：")]),e._v(" "),r("ul",[r("li",[e._v("栈空")]),e._v(" "),r("li",[e._v("现在执行到一个 "),r("strong",[e._v("函数A")]),e._v("，函数A "),r("strong",[e._v("入栈")])]),e._v(" "),r("li",[e._v("函数A 又调用了 "),r("strong",[e._v("函数B")]),e._v("，函数B "),r("strong",[e._v("入栈")])]),e._v(" "),r("li",[r("strong",[e._v("函数B")]),e._v(" 执行完后 "),r("strong",[e._v("出栈")])]),e._v(" "),r("li",[e._v("然后继续执行 "),r("strong",[e._v("函数A")]),e._v("，执行完后A也 "),r("strong",[e._v("出栈")])]),e._v(" "),r("li",[e._v("栈空")])]),e._v(" "),r("p",[e._v("Event Loop 会一直检查 Call Stack 中是否有函数需要执行，如果有，就从栈顶依次执行。同时，如果执行的过程中发现其他函数，继续入栈然后执行。")]),e._v(" "),r("h2",{attrs:{id:"event-table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-table"}},[e._v("#")]),e._v(" Event Table")]),e._v(" "),r("p",[e._v("Event Table 可以理解成一张 "),r("code",[e._v("事件->回调函数")]),e._v(" 对应表")]),e._v(" "),r("p",[e._v("它就是用来存储 JavaScript 中的异步事件 (request, setTimeout, IO等) 及其对应的回调函数的列表")]),e._v(" "),r("h2",{attrs:{id:"event-queue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-queue"}},[e._v("#")]),e._v(" Event Queue")]),e._v(" "),r("p",[e._v("Event Queue 简单理解就是 "),r("code",[e._v("回调函数 队列")]),e._v("，所以它也叫 Callback Queue")]),e._v(" "),r("p",[e._v("当 Event Table 中的事件被触发，事件对应的 "),r("strong",[e._v("回调函数")]),e._v(" 就会被 push 进这个 Event Queue，然后等待被执行")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://savokiss.com/usr/uploads/2019/05/929634567.png",alt:"event-loop-process.png"}})]),e._v(" "),r("ul",[r("li",[e._v("开始，任务先进入 Call Stack")]),e._v(" "),r("li",[e._v("同步任务直接在栈中等待被执行，异步任务从 Call Stack 移入到 Event Table 注册")]),e._v(" "),r("li",[e._v("当对应的事件触发（或延迟到指定时间），Event Table 会将事件回调函数移入 Event Queue 等待")]),e._v(" "),r("li",[e._v("当 Call Stack 中没有任务，就从 Event Queue 中拿出一个任务放入 Call Stack")])]),e._v(" "),r("p",[e._v("Job Queue")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Event Queue` 在 HTML 规范中被称为 `Task Queue`，但是为了区分，一般都叫作 `Macrotask Queue`\n`Job Queue` 是在 ECMAScript 规范中谈及处理 Promise 回调时提到的，但是由于和 V8 中的实现比较相似，所以一般都称为 `Microtask Queue\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("Macrotasks 包含了解析 HTML、生成 DOM、执行主线程 JS 代码和其他事件如 页面加载、输入、网络事件、定时器事件等。从浏览器的角度，Macrotask 代表的是一些离散的独立的工作。")]),e._v(" "),r("p",[r("strong",[e._v("常见应用")]),e._v(" "),r("code",[e._v("setTimeout")]),e._v(", "),r("code",[e._v("setInterval")]),e._v(", "),r("code",[e._v("setImmediate")]),e._v(", "),r("code",[e._v("requestAnimationFrame")]),e._v(", "),r("code",[e._v("I/O")]),e._v(", "),r("code",[e._v("UI rendering")])]),e._v(" "),r("h2",{attrs:{id:"microtask"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#microtask"}},[e._v("#")]),e._v(" Microtask")]),e._v(" "),r("p",[e._v("Microtasks 则是为了完成一些更新应用程序状态的较小的任务，如处理 Promise 的回调和 DOM 的修改，以便让这些任务在浏览器重新渲染之前执行。Microtask 应该以异步的方式尽快执行，所以它们的开销比 Macrotask 要小，并且可以使我们在 UI 重新渲染之前执行，避免了不必要的 UI 渲染。")]),e._v(" "),r("p",[r("strong",[e._v("常见应用")]),e._v(" "),r("code",[e._v("process.nextTick")]),e._v(", "),r("code",[e._v("Promises")]),e._v(", "),r("code",[e._v("Object.observe(已废弃）")]),e._v(", "),r("code",[e._v("MutationObserver")])]),e._v(" "),r("h2",{attrs:{id:"执行顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行顺序"}},[e._v("#")]),e._v(" 执行顺序")]),e._v(" "),r("p",[e._v("一开始执行栈空,我们可以把执行栈认为是一个存储函数调用的栈结构，遵循先进后出的原则。micro 队列空，macro 队列里有且只有一个 script 脚本（整体代码）。")]),e._v(" "),r("p",[e._v("上一步我们出队的是一个 macro-task，这一步我们处理的是 micro-task。但需要注意的是：当 macro-task 出队时，任务是一个一个执行的；而 micro-task 出队时，任务是一队一队执行的。因此，我们处理 micro 队列这一步，会逐个执行队列中的任务并把它出队，直到队列被清空。")]),e._v(" "),r("p",[e._v("执行渲染操作，更新界面")]),e._v(" "),r("p",[e._v("检查是否存在 Web worker 任务，如果有，则对其进行处理")]),e._v(" "),r("p",[e._v("上述过程循环往复，直到两个队列都清空")]),e._v(" "),r("h2",{attrs:{id:"nodejs运行环境中的eventloop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nodejs运行环境中的eventloop"}},[e._v("#")]),e._v(" nodeJS运行环境中的EventLoop")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100803.png",alt:"Node.js"}})]),e._v(" "),r("p",[e._v("Node.js的运行机制如下:")]),e._v(" "),r("p",[e._v("V8引擎解析JavaScript脚本。\n解析后的代码，调用Node API。\nlibuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。\nV8引擎再将结果返回给用户。")]),e._v(" "),r("h3",{attrs:{id:"六个阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六个阶段"}},[e._v("#")]),e._v(" 六个阶段")]),e._v(" "),r("p",[e._v("其中libuv引擎中的事件循环分为 6 个阶段，它们会按照顺序反复运行。每当进入某一个阶段的时候，都会从对应的回调队列中取出函数去执行。当队列为空或者执行的回调函数数量到达系统设定的阈值，就会进入下一阶段。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/5294c8898f9647965c303b77da622174.webp?x-oss-process=image/format,png",alt:"img"}})]),e._v(" "),r("p",[e._v("外部输入数据--\x3e轮询阶段(poll)--\x3e检查阶段(check)--\x3e关闭事件回调阶段(close callback)--\x3e定时器检测阶段(timer)--\x3eI/O事件回调阶段(I/O callbacks)--\x3e闲置阶段(idle, prepare)--\x3e轮询阶段（按照该顺序反复运行）...")]),e._v(" "),r("p",[e._v("timers 阶段：这个阶段执行timer（setTimeout、setInterval）的回调\nI/O callbacks 阶段：处理一些上一轮循环中的少数未执行的 I/O 回调\nidle, prepare 阶段：仅node内部使用\npoll 阶段：获取新的I/O事件, 适当的条件下node将阻塞在这里\ncheck 阶段：执行 setImmediate() 的回调\nclose callbacks 阶段：执行 socket 的 close 事件回调\n注意：上面六个阶段都不包括 process.nextTick()")]),e._v(" "),r("p",[e._v("poll 是一个至关重要的阶段，这一阶段中，系统会做两件事情")]),e._v(" "),r("p",[e._v("1.回到 timer 阶段执行回调")]),e._v(" "),r("p",[e._v("2.执行 I/O 回调")]),e._v(" "),r("p",[e._v("并且在进入该阶段时如果没有设定了 timer 的话，会发生以下两件事情")]),e._v(" "),r("p",[e._v("如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者达到系统限制\n如果 poll 队列为空时，会有两件事发生\n如果有 setImmediate 回调需要执行，poll 阶段会停止并且进入到 check 阶段执行回调\n如果没有 setImmediate 回调需要执行，会等待回调被加入到队列中并立即执行回调，这里同样会有个超时时间设置防止一直等待下去\n当然设定了 timer 的话且 poll 队列为空，则会判断是否有 timer 超时，如果有的话会回到 timer 阶段执行回调。")]),e._v(" "),r("p",[e._v("3.Micro-Task 与 Macro-Task\nNode端事件循环中的异步队列也是这两种：macro（宏任务）队列和 micro（微任务）队列。")]),e._v(" "),r("p",[e._v("常见的 macro-task 比如：setTimeout、setInterval、 setImmediate、script（整体代码）、 I/O 操作等。\n常见的 micro-task 比如: process.nextTick、new Promise().then(回调)等。\n4.注意点\n(1) setTimeout 和 setImmediate")]),e._v(" "),r("p",[e._v("二者非常相似，区别主要在于调用时机不同。")]),e._v(" "),r("p",[e._v("setImmediate 设计在poll阶段完成时执行，即check阶段；\nsetTimeout 设计在poll阶段为空闲时，且设定时间到达后执行，但它在timer阶段执行")]),e._v(" "),r("p",[e._v("process.nextTick")]),e._v(" "),r("p",[e._v("这个函数其实是独立于 Event Loop 之外的，它有一个自己的队列，当每个阶段完成后，如果存在 nextTick 队列，就会清空队列中的所有回调函数，并且优先于其他 microtask 执行。")]),e._v(" "),r("h2",{attrs:{id:"node与浏览器的-event-loop-差异"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node与浏览器的-event-loop-差异"}},[e._v("#")]),e._v(" Node与浏览器的 Event Loop 差异")]),e._v(" "),r("p",[e._v("浏览器环境下，microtask的任务队列是每个macrotask执行完之后执行。")]),e._v(" "),r("p",[e._v("在Node.js11之前，microtask会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行microtask队列的任务。")]),e._v(" "),r("p",[e._v("Node.js11后，实现向浏览器看齐，每运行完一个宏任务，就去清空微任务队列。")]),e._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2013/10/event_loop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("什么是 Event Loop？"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript 运行机制详解：再谈Event Loop"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/z591102/article/details/111588572",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器与Node的事件循环(Event Loop)有何区别?"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node 定时器详解"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ginobilee/blog/issues/6",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestAnimationFrame回调在HTML的Event Loop中是一个宏任务么? "),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);