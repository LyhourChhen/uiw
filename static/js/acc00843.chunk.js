(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(19),a=n(5),c=n(12),o=n(21),i=n(13),l=n(14),s=n(15),u=n(2),p=n.n(u),f=n(4),d=n.n(f),b=n(108);n(103);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var h=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).renderSvgPaths=function(e){var t=b[e];return null==t?null:t.map(function(e,t){return p.a.createElement("path",{key:t,d:e,fillRule:"evenodd"})})},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,c=e.color,o=e.type,i=e.spin,l=e.verticalAlign,s=e.tagName,u=Object(a.a)(e,["prefixCls","className","color","type","spin","verticalAlign","tagName"]),f=null;if(null==o||"boolean"==typeof o)return null;f="string"!=typeof o?p.a.cloneElement(o,{fill:c}):p.a.createElement("svg",{fill:c,viewBox:"0 0 20 20"},this.renderSvgPaths(o)),u.style=O({fill:"currentColor"},u.style);var b=O({},u,{className:d()(t,n,"".concat(t,"-").concat(l),Object(r.a)({},"".concat(t,"-spin"),i))});return p.a.createElement(s,b,f)}}]),t}(p.a.PureComponent);h.defaultProps={prefixCls:"w-icon",verticalAlign:"middle",tagName:"span",spin:!1}},103:function(e,t,n){},105:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var r=n(20),a=n(19),c=n(5),o=n(12),i=n(21),l=n(13),s=n(14),u=n(15),p=n(2),f=n.n(p),d=n(4),b=n.n(d),y=n(102),O=(n(109),function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).addonRef=f.a.createRef(),n.inputRef=f.a.createRef(),n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){if(this.addonRef.current&&this.inputRef.current){var e=window.getComputedStyle(this.addonRef.current,null);this.inputRef.current.style.paddingRight="".concat(this.addonRef.current.clientWidth+2*parseInt(e.right,10),"px")}}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,i=t.style,l=t.size,s=t.type,u=t.preIcon,p=t.addonAfter,d=Object(c.a)(t,["prefixCls","className","style","size","type","preIcon","addonAfter"]),O=b()(n,o,(e={},Object(a.a)(e,"".concat(n,"-").concat(l),l),Object(a.a)(e,"".concat(n,"-addon"),p),Object(a.a)(e,"disabled",this.props.disabled),e));return f.a.createElement("div",{className:O,style:i},f.a.createElement(y.a,{type:u}),f.a.createElement("input",Object(r.a)({ref:this.inputRef,type:s},d,{className:b()("".concat(n,"-inner"))})),p&&f.a.createElement("span",{className:"".concat(n,"-addon-after"),ref:this.addonRef},p))}}]),t}(f.a.Component));O.defaultProps={prefixCls:"w-input",preIcon:null,type:"text",size:"default"}},111:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var r=n(20),a=n(19),c=n(5),o=n(12),i=n(21),l=n(13),s=n(14),u=n(15),p=n(2),f=n.n(p),d=n(4),b=n.n(d),y=n(102),O=(n(105),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.type,i=t.size,l=t.icon,s=t.active,u=t.disabled,p=t.block,d=t.basic,O=t.className,h=t.loading,m=t.children,j=t.htmlType,v=Object(c.a)(t,["prefixCls","type","size","icon","active","disabled","block","basic","className","loading","children","htmlType"]),g=b()(O,n,(e={},Object(a.a)(e,"".concat(n,"-size-").concat(i),i),Object(a.a)(e,"".concat(n,"-").concat(o),o),Object(a.a)(e,"".concat(n,"-basic"),d),Object(a.a)(e,"".concat(n,"-loading"),h),Object(a.a)(e,"disabled",u||h),Object(a.a)(e,"active",s),Object(a.a)(e,"block",p),e));return f.a.createElement("button",Object(r.a)({},v,{type:j,disabled:u||h,className:g}),l&&f.a.createElement(y.a,{type:l}),m&&f.a.Children.map(m,function(e){return e?f.a.isValidElement(e)?e:f.a.createElement("span",null,e):e}))}}]),t}(f.a.Component));O.defaultProps={prefixCls:"w-btn",disabled:!1,active:!1,loading:!1,block:!1,basic:!1,htmlType:"button",type:"light",size:"default"}},174:function(e,t,n){
/*!
 * @uiw/copy-to-clipboard v1.0.8
 * Copy to clipboard.
 * 
 * Copyright (c) 2019 Kenny Wang
 * https://github.com/uiw-react/copy-to-clipboard.git
 * 
 * Licensed under the MIT license.
 */
e.exports=function(){"use strict";return function(e,t){const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style={position:"absolute",left:"-9999px"},document.body.appendChild(n);const r=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);n.select();try{const e=document.execCommand("copy"),n=!!e;t&&t(n)}catch(e){t&&t(!1)}document.body.removeChild(n),r&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(r))}}()},175:function(e,t,n){},323:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var r=n(19),a=n(5),c=n(12),o=n(21),i=n(13),l=n(14),s=n(15),u=n(2),p=n.n(u),f=n(174),d=n.n(f);n(175);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"onClick",value:function(e){var t=this.props,n=t.onClick,r=t.text;if(!r)return n(r,!1,e);d()(r,function(t){n(r,t,e)})}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.text,c=e.children,o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},Object(a.a)(e,["prefixCls","text","children"]),{},{onClick:this.onClick.bind(this),className:t});return p.a.createElement("a",o,p.a.createElement("span",{className:"".concat(t,"-select")},n),c)}}]),t}(p.a.Component);y.defaultProps={text:"",prefixCls:"w-copy-to-clipboard",onClick:function(){return null}}},692:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n(59),a=n.n(r),c=n(60),o=n.n(c),i=n(6),l=n.n(i),s=n(9),u=n.n(s),p=n(7),f=n.n(p),d=n(8),b=n.n(d),y=n(10),O=n.n(y),h=n(323),m=n(111),j=n(110),v=function(e){function t(){var e,n;l()(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=f()(this,(e=b()(t)).call.apply(e,[this].concat(a)))).path="packages/core/src/copy-to-clipboard/README.md",n.dependencies={CopyToClipboard:h.a,Button:m.a,Input:j.a},n}var r;return O()(t,e),u()(t,[{key:"renderPage",value:(r=o()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(383).then(n.t.bind(null,648,7));case 2:return t=e.sent,e.abrupt("return",t.default||t);case 4:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)})}]),t}(n(104).a)}}]);