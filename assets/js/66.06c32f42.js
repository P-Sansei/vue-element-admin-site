(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{272:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("其中，"),a("code",[t._v("@/src/utils/request.js")]),t._v(" 是基于 "),a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios"),a("OutboundLink")],1),t._v(" 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。具体可以参看 "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("request.js"),a("OutboundLink")],1),t._v("。\n它封装了全局 "),a("code",[t._v("request拦截器")]),t._v("、"),a("code",[t._v("response拦截器")]),t._v("、"),a("code",[t._v("统一的错误处理")]),t._v("、"),a("code",[t._v("统一做了超时处理")]),t._v("、"),a("code",[t._v("baseURL设置等")]),t._v("。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("见"),a("router-link",{attrs:{to:"./mock-api.html"}},[t._v(" Mock 和联调")])],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"和服务端进行交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和服务端进行交互","aria-hidden":"true"}},[this._v("#")]),this._v(" 和服务端进行交互")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前端请求流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端请求流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端请求流程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 "),s("code",[this._v("vue-element-admin")]),this._v(" 中，一个完整的前端 UI 交互到服务端处理流程是这样的：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("UI 组件交互操作；")]),t._v(" "),a("li",[t._v("调用统一管理的 api service 请求函数；")]),t._v(" "),a("li",[t._v("使用封装的 request.js 发送请求；")]),t._v(" "),a("li",[t._v("获取服务端返回；")]),t._v(" "),a("li",[t._v("更新 data；")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("从上面的流程可以看出，为了方便管理维护，统一的请求处理都放在 "),s("code",[this._v("@/src/api")]),this._v(" 文件夹中，并且一般按照 model 纬度进行拆分文件，如：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("api/\n  login.js\n  article.js\n  remoteSearch.js\n  ...\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"request-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-js","aria-hidden":"true"}},[this._v("#")]),this._v(" request.js")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一个请求文章列表页的例子："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个请求文章列表页的例子：","aria-hidden":"true"}},[this._v("#")]),this._v(" 一个请求文章列表页的例子：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// api/article.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../utils/request'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/article/list'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" query\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// views/example/list")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fetchList "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/api/article'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    listLoading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listLoading "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listLoading "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"从-mock-直接切换到服务端请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-mock-直接切换到服务端请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 从 mock 直接切换到服务端请求")])}],!1,null,null,null);s.default=e.exports}}]);