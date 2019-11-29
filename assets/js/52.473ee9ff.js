(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{187:function(v,_,a){"use strict";a.r(_);var s=a(0),t=Object(s.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#闲扯跨平台和动态化"}},[v._v("闲扯跨平台和动态化")]),a("ul",[a("li",[a("a",{attrs:{href:"#跨平台原理本质"}},[v._v("跨平台原理本质")])]),a("li",[a("a",{attrs:{href:"#动态化原理本质"}},[v._v("动态化原理本质")])])])]),a("li",[a("a",{attrs:{href:"#动态化建设"}},[v._v("动态化建设")]),a("ul",[a("li",[a("a",{attrs:{href:"#背景"}},[v._v("背景")])]),a("li",[a("a",{attrs:{href:"#选型"}},[v._v("选型")])]),a("li",[a("a",{attrs:{href:"#picasso-存在的痛点"}},[v._v("Picasso 存在的痛点")])])])]),a("li",[a("a",{attrs:{href:"#picasso-server"}},[v._v("Picasso Server")]),a("ul",[a("li",[a("a",{attrs:{href:"#建设过程"}},[v._v("建设过程")])]),a("li",[a("a",{attrs:{href:"#过程中遇到的问题"}},[v._v("过程中遇到的问题")])]),a("li",[a("a",{attrs:{href:"#做了哪些事情"}},[v._v("做了哪些事情")])]),a("li",[a("a",{attrs:{href:"#一些可能的问题"}},[v._v("一些可能的问题")])]),a("li",[a("a",{attrs:{href:"#后续的总结"}},[v._v("后续的总结")])])])]),a("li",[a("a",{attrs:{href:"#picasso-v-s-rn"}},[v._v("Picasso v.s RN")])])])]),a("p"),v._v(" "),a("h1",{attrs:{id:"闲扯跨平台和动态化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闲扯跨平台和动态化"}},[v._v("#")]),v._v(" 闲扯跨平台和动态化")]),v._v(" "),a("p",[v._v("一定要拧得清跨平台和动态化，这是两个概念。RN、Picasso 核心提供的是跨平台的能力，至于动态化，它是额外的，需要在此基础上扩展很多东西，包括数据请求的能力等等。")]),v._v(" "),a("h2",{attrs:{id:"跨平台原理本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨平台原理本质"}},[v._v("#")]),v._v(" 跨平台原理本质")]),v._v(" "),a("p",[v._v("在 JS 端写下业务逻辑，通过 JS 与各个平台的 Native 通信，将 UI 视图传递给 Native，由 Native 完成视图渲染，展示给用户。用户交互时，由 Native 捕获事件，传递给 JS  端，JS 端完成逻辑处理，更新 UI 后再传递给 Natvie，展示给用户。")]),v._v(" "),a("h2",{attrs:{id:"动态化原理本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态化原理本质"}},[v._v("#")]),v._v(" 动态化原理本质")]),v._v(" "),a("p",[v._v("通过实时的 JS 打包平台，将 JS 业务包通过热跟新发版平台实时下发到 native 端，由客户端完成 JS 业务包的解析，并通过各自的 JS 引擎完成 View 的创建渲染展示流程。")]),v._v(" "),a("h1",{attrs:{id:"动态化建设"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态化建设"}},[v._v("#")]),v._v(" 动态化建设")]),v._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[v._v("#")]),v._v(" 背景")]),v._v(" "),a("p",[v._v("说背景，交代对动态化的诉求。")]),v._v(" "),a("p",[v._v("很长的时间里，我们这边的业务对动态化的诉求主要是各种活动入口。最开始都是使用 H5 完成的，但 H5 存在一些问题：")]),v._v(" "),a("ul",[a("li",[v._v("交互体验差")]),v._v(" "),a("li",[v._v("划不动（容器同学和前端同学的锅）")]),v._v(" "),a("li",[v._v("大字报")])]),v._v(" "),a("p",[v._v("对于 Android 团队的同学来说，常常还带来了各种 Crash。")]),v._v(" "),a("h2",{attrs:{id:"选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选型"}},[v._v("#")]),v._v(" 选型")]),v._v(" "),a("p",[v._v("FlexBox 和 Picasso 类似，都是差不多的套路。都在客户端建立一个渲染引擎，将 server 下发的文件解析成本地的 view。")]),v._v(" "),a("p",[v._v("不同的是，FlexBox 是声明式的，基于 XML；Picasso 是命令式的，基于 JS。")]),v._v(" "),a("p",[v._v("为什么选择 Picasso，而不是 FlexBox？")]),v._v(" "),a("p",[v._v("客观上：")]),v._v(" "),a("ul",[a("li",[v._v("它们能力差不多")]),v._v(" "),a("li",[v._v("Picasso 描述的未来更美好（基于和相关团队同学沟通得到的信息）")]),v._v(" "),a("li",[v._v("Picasso 团队规模更大，支持更好")]),v._v(" "),a("li",[v._v("LiveLoad 功能，更友好")])]),v._v(" "),a("p",[v._v("主观上：")]),v._v(" "),a("ul",[a("li",[v._v("Flexbox 推出挺久，但是一直没啥进展")]),v._v(" "),a("li",[v._v("相对于美团平台，我们更信任点评平台，后者的服务质量更好；前者后续也有比较大的改进")])]),v._v(" "),a("h2",{attrs:{id:"picasso-存在的痛点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picasso-存在的痛点"}},[v._v("#")]),v._v(" Picasso 存在的痛点")]),v._v(" "),a("ul",[a("li",[v._v("Picasso 不具备数据拉取的能力，需要客户端额外塞数据")]),v._v(" "),a("li",[v._v("数据和布局分离，限制了动态化的能力")])]),v._v(" "),a("p",[v._v("两种解决方案：")]),v._v(" "),a("ul",[a("li",[v._v("放在 Server 端，提供 Data API 的时候，顺便告诉客户端这个 Data 需要哪个 Picasso 来渲染")]),v._v(" "),a("li",[v._v("自建 Picasso Server")])]),v._v(" "),a("h1",{attrs:{id:"picasso-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picasso-server"}},[v._v("#")]),v._v(" Picasso Server")]),v._v(" "),a("p",[v._v("为什么自己建设 Picasso Server：")]),v._v(" "),a("ul",[a("li",[v._v("能解决业务上的痛点")]),v._v(" "),a("li",[v._v("客户端介入 Server 的开发，这是一件挺令人激动的事情")]),v._v(" "),a("li",[v._v("从上到下，这都是一个很好的输出项")])]),v._v(" "),a("h2",{attrs:{id:"建设过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建设过程"}},[v._v("#")]),v._v(" 建设过程")]),v._v(" "),a("ul",[a("li",[v._v("接入 SSO")]),v._v(" "),a("li",[v._v("接入 IAM")]),v._v(" "),a("li",[v._v("完成 API 功能")])]),v._v(" "),a("p",[v._v("后来：")]),v._v(" "),a("ul",[a("li",[v._v("接入日志")])]),v._v(" "),a("h2",{attrs:{id:"过程中遇到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过程中遇到的问题"}},[v._v("#")]),v._v(" 过程中遇到的问题")]),v._v(" "),a("ul",[a("li",[v._v("爆发了大量 404 问题，即模块请求不到，低版本 app 请求了配置了高版本的 PicassoModule")]),v._v(" "),a("li",[v._v("磁盘满了，之前是日志输出到磁盘，后来改为接入日志管理系统")])]),v._v(" "),a("h2",{attrs:{id:"做了哪些事情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#做了哪些事情"}},[v._v("#")]),v._v(" 做了哪些事情")]),v._v(" "),a("ul",[a("li",[v._v("方案调研，占据一半的工作量，包括接口是什么样子的，如何和 API Server 同学协作，配置平台是怎样的\n"),a("ul",[a("li",[v._v("高阶同学在做")])])]),v._v(" "),a("li",[v._v("另一半工作是机器、域名、数据库的申请，以及编码（框架调研）工作。包括对公司内部资源的使用，SSO、IAM 等。\n"),a("ul",[a("li",[v._v("我做的")])])])]),v._v(" "),a("h2",{attrs:{id:"一些可能的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些可能的问题"}},[v._v("#")]),v._v(" 一些可能的问题")]),v._v(" "),a("p",[v._v("Q: 指标如何？")]),v._v(" "),a("p",[v._v("A: 网络成功率 99%")]),v._v(" "),a("p",[v._v("Q: 做了哪些事儿？")]),v._v(" "),a("p",[v._v("A: 前期调研、方案制定，都是高阶同学完成的。申请资源、编码是我做的。")]),v._v(" "),a("p",[v._v("Q: 前端框架是用啥做的？")]),v._v(" "),a("p",[v._v("A: 纯手工 HTML，写一个 HTML 模板，往其中塞数据。")]),v._v(" "),a("p",[v._v("Q: 有几台机器？访问量如何？")]),v._v(" "),a("p",[v._v("A: 7 台机器，DAU 两千多万。")]),v._v(" "),a("h2",{attrs:{id:"后续的总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续的总结"}},[v._v("#")]),v._v(" 后续的总结")]),v._v(" "),a("p",[v._v("Q: 难点在哪里？")]),v._v(" "),a("p",[v._v("A: 现在来看，没啥难点。但站在当时的视角上，要面临大量不熟悉的东西：")]),v._v(" "),a("ul",[a("li",[v._v("对于资源来说：申请机器、申请数据库、申请域名，熟悉发布部署流程")]),v._v(" "),a("li",[v._v("对于开发来说：需要学习 Node.js、JS 语言，调研 HTTP 框架并使用、熟悉 Server 端的 MVC 框架")])]),v._v(" "),a("p",[v._v("Q: Server 开发是如何选型的？")]),v._v(" "),a("p",[v._v("A: 包括如下几个方面：")]),v._v(" "),a("ul",[a("li",[v._v("语言： Node，上手容易")]),v._v(" "),a("li",[v._v("Express: 当时知道的说法是它比 Koa 稳定")]),v._v(" "),a("li",[v._v("HTTP 框架: 没有使用，因为想的是尽可能少依赖")])]),v._v(" "),a("p",[v._v("Q: 收获如何？")]),v._v(" "),a("p",[v._v("A: 熟悉了基于 Node 开发的基本套路")]),v._v(" "),a("p",[v._v("Q: 有什么不足？")]),v._v(" "),a("p",[v._v("A: 专业化上的成熟度不足还挺多的，但主要都是当时知识的缺陷，包括：")]),v._v(" "),a("ul",[a("li",[v._v("配置平台太丑陋，应该使用 Vue 或者 React 搭建")]),v._v(" "),a("li",[v._v("代码虽然不多，但是结构看起来很乱，应该使用成熟的 MVC 框架，譬如 Egg.js")]),v._v(" "),a("li",[v._v("数据库的结构定义并不好\n"),a("ul",[a("li",[v._v("prod 和 stage 环境使用一份数据库\n"),a("ul",[a("li",[v._v("导致 stage 数据无法删掉，因为没有权限管理")])])])])])]),v._v(" "),a("h1",{attrs:{id:"picasso-v-s-rn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picasso-v-s-rn"}},[v._v("#")]),v._v(" Picasso v.s RN")]),v._v(" "),a("p",[v._v("Picasso 做得好的地方：")]),v._v(" "),a("ul",[a("li",[v._v("推广得比较好")]),v._v(" "),a("li",[v._v("更容易上手")])]),v._v(" "),a("p",[v._v("Picasso")]),v._v(" "),a("ul",[a("li",[v._v("双端差异小")]),v._v(" "),a("li",[v._v("LiveReload 更好用")])]),v._v(" "),a("p",[v._v("RN 的结构不是很合理，包太大了。我们所需要的只是它的引擎这一块儿的东西。")])])}),[],!1,null,null,null);_.default=t.exports}}]);