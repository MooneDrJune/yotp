(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59bd593d"],{"06d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("2b0e"),a=n["default"].extend({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}})},"0759":function(t,e,r){"use strict";r.d(e,"a",(function(){return j}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),i=r("a723"),o=r("992e"),s=r("d82f"),u=r("cf75"),l=r("fa73"),p=r("7386"),d=r("aa0d");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=function t(e,r){if(!e)return null;var n=(e.$options||{}).components,a=n[r];return a||t(e.$parent,r)},m=Object(u["d"])(Object(s["m"])(f(f({},Object(s["j"])(d["b"],["content","stacked"])),{},{icon:Object(u["c"])(i["u"]),stacked:Object(u["c"])(i["g"],!1)})),c["ib"]),j=n["default"].extend({name:c["ib"],functional:!0,props:m,render:function(t,e){var r=e.data,n=e.props,c=e.parent,i=Object(l["e"])(Object(l["h"])(n.icon||"")).replace(o["p"],"");return t(i&&O(c,"BIcon".concat(i))||p["a"],Object(a["a"])(r,{props:f(f({},n),{},{icon:null})}))}})},"11de":function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),i=r("a723"),o=r("cf75"),s=Object(o["d"])({id:Object(o["c"])(i["u"]),inline:Object(o["c"])(i["g"],!1),novalidate:Object(o["c"])(i["g"],!1),validated:Object(o["c"])(i["g"],!1)},c["J"]),u=n["default"].extend({name:c["J"],functional:!0,props:s,render:function(t,e){var r=e.props,n=e.data,c=e.children;return t("form",Object(a["a"])(n,{class:{"form-inline":r.inline,"was-validated":r.validated},attrs:{id:r.id,novalidate:r.novalidate}}),c)}})},"1f1e":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("2b0e"),a=n["default"].extend({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}})},"223c":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"toastification"},[r("div",{staticClass:"d-flex align-items-start"},[r("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[r("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),r("div",{staticClass:"d-flex flex-grow-1"},[r("div",[t.title?r("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?r("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),r("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():r("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},a=[],c=r("e8a3"),i={components:{BAvatar:c["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=i,s=(r("b549"),r("2877")),u=Object(s["a"])(o,n,a,!1,null,"55dd3057",null);e["a"]=u.exports},3656:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),i=r("d82f"),o=r("cf75"),s=r("46bc");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=Object(o["d"])(Object(i["j"])(s["b"],["append"]),c["pb"]),b=n["default"].extend({name:c["pb"],functional:!0,props:d,render:function(t,e){var r=e.props,n=e.data,c=e.children;return t(s["a"],Object(a["a"])(n,{props:l(l({},r),{},{append:!1})}),c)}})},3897:function(t,e,r){"use strict";r("d8e1")},"40fc":function(t,e,r){"use strict";r.d(e,"b",(function(){return w})),r.d(e,"a",(function(){return P}));var n=r("2b0e"),a=r("0056"),c=r("a723"),i=r("906c"),o=r("6b77"),s=r("a8c8"),u=r("58f2"),l=r("3a58"),p=r("d82f"),d=r("cf75"),b=r("fa73");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=Object(u["a"])("value",{type:c["p"],defaultValue:"",event:a["bb"]}),j=m.mixin,g=m.props,v=m.prop,y=m.event,w=Object(d["d"])(Object(p["m"])(h(h({},g),{},{ariaInvalid:Object(d["c"])(c["j"],!1),autocomplete:Object(d["c"])(c["u"]),debounce:Object(d["c"])(c["p"],0),formatter:Object(d["c"])(c["l"]),lazy:Object(d["c"])(c["g"],!1),lazyFormatter:Object(d["c"])(c["g"],!1),number:Object(d["c"])(c["g"],!1),placeholder:Object(d["c"])(c["u"]),plaintext:Object(d["c"])(c["g"],!1),readonly:Object(d["c"])(c["g"],!1),trim:Object(d["c"])(c["g"],!1)})),"formTextControls"),P=n["default"].extend({mixins:[j],props:w,data:function(){var t=this[v];return{localValue:Object(b["g"])(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,r="range"===e,n="color"===e;return[{"custom-range":r,"form-control-plaintext":t&&!r&&!n,"form-control":n||!t&&!r},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(s["d"])(Object(l["c"])(this.debounce,0),0)},hasFormatter:function(){return Object(d["b"])(this.formatter)}},watch:O({},v,(function(t){var e=Object(b["g"])(t),r=this.modifyValue(t);e===this.localValue&&r===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=r)})),created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on(a["eb"],this.clearDebounce)},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(b["g"])(t),!this.hasFormatter||this.lazyFormatter&&!r||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=Object(b["g"])(t),this.trim&&(t=t.trim()),this.number&&(t=Object(l["b"])(t,t)),t},updateValue:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.lazy;if(!n||r){this.clearDebounce();var a=function(){if(t=e.modifyValue(t),t!==e.vModelValue)e.vModelValue=t,e.$emit(y,t);else if(e.hasFormatter){var r=e.$refs.input;r&&t!==r.value&&(r.value=t)}},c=this.computedDebounce;c>0&&!n&&!r?this.$_inputDebounceTimer=setTimeout(a,c):a()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,r=this.formatValue(e,t);!1===r||t.defaultPrevented?Object(o["f"])(t,{propagation:!1}):(this.localValue=r,this.updateValue(r),this.$emit(a["y"],r))}},onChange:function(t){var e=t.target.value,r=this.formatValue(e,t);!1===r||t.defaultPrevented?Object(o["f"])(t,{propagation:!1}):(this.localValue=r,this.updateValue(r,!0),this.$emit(a["d"],r))},onBlur:function(t){var e=t.target.value,r=this.formatValue(e,t,!0);!1!==r&&(this.localValue=Object(b["g"])(this.modifyValue(r)),this.updateValue(r,!0)),this.$emit(a["b"],t)},focus:function(){this.disabled||Object(i["d"])(this.$el)},blur:function(){this.disabled||Object(i["c"])(this.$el)}}})},"46bc":function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return l}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),i=r("a723"),o=r("cf75"),s=r("d190"),u=Object(o["d"])({append:Object(o["c"])(i["g"],!1),id:Object(o["c"])(i["u"]),isText:Object(o["c"])(i["g"],!1),tag:Object(o["c"])(i["u"],"div")},c["nb"]),l=n["default"].extend({name:c["nb"],functional:!0,props:u,render:function(t,e){var r=e.props,n=e.data,c=e.children,i=r.append;return t(r.tag,Object(a["a"])(n,{class:{"input-group-append":i,"input-group-prepend":!i},attrs:{id:r.id}}),r.isText?[t(s["a"],c)]:c)}})},4797:function(t,e,r){"use strict";r.d(e,"a",(function(){return x}));var n=r("2b0e"),a=r("c637"),c=r("a723"),i=r("2326"),o=r("906c"),s=r("6b77"),u=r("d82f"),l=r("cf75"),p=r("dde7"),d=r("06d9"),b=r("ad47"),f=r("d520"),h=r("40fc"),O=r("1f1e"),m=r("90ef"),j=r("bc9a");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var w=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],P=Object(l["d"])(Object(u["m"])(v(v(v(v(v(v({},m["b"]),p["b"]),b["b"]),f["b"]),h["b"]),{},{list:Object(l["c"])(c["u"]),max:Object(l["c"])(c["p"]),min:Object(l["c"])(c["p"]),noWheel:Object(l["c"])(c["g"],!1),step:Object(l["c"])(c["p"]),type:Object(l["c"])(c["u"],"text",(function(t){return Object(i["a"])(w,t)}))})),a["R"]),x=n["default"].extend({name:a["R"],mixins:[j["a"],m["a"],p["a"],b["a"],f["a"],h["a"],d["a"],O["a"]],props:P,computed:{localType:function(){var t=this.type;return Object(i["a"])(w,t)?t:"text"},computedAttrs:function(){var t=this.localType,e=this.name,r=this.form,n=this.disabled,a=this.placeholder,c=this.required,i=this.min,o=this.max,s=this.step;return{id:this.safeId(),name:e,form:r,type:t,disabled:n,placeholder:a,required:c,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:i,max:o,step:s,list:"password"!==t?this.list:null,"aria-required":c?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return v(v({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(s["c"])(t,e,"focus",this.onWheelFocus),Object(s["c"])(t,e,"blur",this.onWheelBlur),t||Object(s["a"])(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(s["b"])(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(s["a"])(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(s["f"])(t,{propagation:!1}),Object(o["c"])(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return l}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),i=r("a723"),o=r("cf75"),s=r("fa73"),u=Object(o["d"])({title:Object(o["c"])(i["u"]),titleTag:Object(o["c"])(i["u"],"h4")},c["v"]),l=n["default"].extend({name:c["v"],functional:!0,props:u,render:function(t,e){var r=e.props,n=e.data,c=e.children;return t(r.titleTag,Object(a["a"])(n,{staticClass:"card-title"}),c||Object(s["g"])(r.title))}})},"5e12":function(t,e,r){"use strict";r.d(e,"a",(function(){return O}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),i=r("a723"),o=r("9b76"),s=r("8690"),u=r("365c"),l=r("cf75"),p=r("ccc0"),d=r("3656"),b=r("d190");function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=Object(l["d"])({append:Object(l["c"])(i["u"]),appendHtml:Object(l["c"])(i["u"]),id:Object(l["c"])(i["u"]),prepend:Object(l["c"])(i["u"]),prependHtml:Object(l["c"])(i["u"]),size:Object(l["c"])(i["u"]),tag:Object(l["c"])(i["u"],"div")},c["mb"]),O=n["default"].extend({name:c["mb"],functional:!0,props:h,render:function(t,e){var r=e.props,n=e.data,c=e.slots,i=e.scopedSlots,l=r.prepend,h=r.prependHtml,O=r.append,m=r.appendHtml,j=r.size,g=i||{},v=c(),y={},w=t(),P=Object(u["a"])(o["W"],g,v);(P||l||h)&&(w=t(d["a"],[P?Object(u["b"])(o["W"],y,g,v):t(b["a"],{domProps:Object(s["a"])(h,l)})]));var x=t(),C=Object(u["a"])(o["b"],g,v);return(C||O||m)&&(x=t(p["a"],[C?Object(u["b"])(o["b"],y,g,v):t(b["a"],{domProps:Object(s["a"])(m,O)})])),t(r.tag,Object(a["a"])(n,{staticClass:"input-group",class:f({},"input-group-".concat(j),j),attrs:{id:r.id||null,role:"group"}}),[w,Object(u["b"])(o["i"],y,g,v),x])}})},"8d81":function(t,e,r){},a15b:function(t,e,r){"use strict";r.d(e,"a",(function(){return y}));var n=r("b42e"),a=r("c637"),c=r("a723"),i=r("2326"),o=r("228e"),s=r("6c06"),u=r("b508"),l=r("d82f"),p=r("cf75"),d=r("fa73");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=["start","end","center"],m=Object(u["a"])((function(t,e){return e=Object(d["h"])(Object(d["g"])(e)),e?Object(d["c"])(["row-cols",t,e].filter(s["a"]).join("-")):null})),j=Object(u["a"])((function(t){return Object(d["c"])(t.replace("cols",""))})),g=[],v=function(){var t=Object(o["b"])().reduce((function(t,e){return t[Object(p["g"])(e,"cols")]=Object(p["c"])(c["p"]),t}),Object(l["c"])(null));return g=Object(l["h"])(t),Object(p["d"])(Object(l["m"])(f(f({},t),{},{alignContent:Object(p["c"])(c["u"],null,(function(t){return Object(i["a"])(Object(i["b"])(O,"between","around","stretch"),t)})),alignH:Object(p["c"])(c["u"],null,(function(t){return Object(i["a"])(Object(i["b"])(O,"between","around"),t)})),alignV:Object(p["c"])(c["u"],null,(function(t){return Object(i["a"])(Object(i["b"])(O,"baseline","stretch"),t)})),noGutters:Object(p["c"])(c["g"],!1),tag:Object(p["c"])(c["u"],"div")})),a["Ob"])},y={name:a["Ob"],functional:!0,get props(){return delete this.props,this.props=v(),this.props},render:function(t,e){var r,a=e.props,c=e.data,i=e.children,o=a.alignV,s=a.alignH,u=a.alignContent,l=[];return g.forEach((function(t){var e=m(j(t),a[t]);e&&l.push(e)})),l.push((r={"no-gutters":a.noGutters},h(r,"align-items-".concat(o),o),h(r,"justify-content-".concat(s),s),h(r,"align-content-".concat(u),u),r)),t(a.tag,Object(n["a"])(c,{staticClass:"row",class:l}),i)}}},a94f:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"auth-wrapper auth-v2"},[r("b-row",{staticClass:"auth-inner m-0"},[r("b-link",{staticClass:"brand-logo"},[r("vuexy-logo"),r("h2",{staticClass:"brand-text text-primary ml-1"},[t._v(" Morbius ")])],1),r("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[r("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[r("b-img",{attrs:{src:t.imgUrl,fluid:"",alt:"Register V2"}})],1)]),r("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[r("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[r("b-card-title",{staticClass:"font-weight-bold mb-1",attrs:{"title-tag":"h2"}},[t._v(" Reset Password 🔒 ")]),r("b-card-text",{staticClass:"mb-2"},[t._v(" Your new password must be different from previously used passwords ")]),r("validation-observer",{ref:"simpleRules"},[r("b-form",{staticClass:"auth-reset-password-form mt-2",attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.validationForm(e)}}},[r("b-form-group",{attrs:{label:"New Password","label-for":"reset-password-new"}},[r("validation-provider",{attrs:{name:"Password",vid:"Password",rules:"required|password"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("b-input-group",{staticClass:"input-group-merge",class:n.length>0?"is-invalid":null},[r("b-form-input",{staticClass:"form-control-merge",attrs:{id:"reset-password-new",type:t.password1FieldType,state:!(n.length>0)&&null,name:"reset-password-new",placeholder:"············"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.password1ToggleIcon},on:{click:t.togglePassword1Visibility}})],1)],1),r("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1),r("b-form-group",{attrs:{"label-for":"reset-password-confirm",label:"Confirm Password"}},[r("validation-provider",{attrs:{name:"Confirm Password",rules:"required|confirmed:Password"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("b-input-group",{staticClass:"input-group-merge",class:n.length>0?"is-invalid":null},[r("b-form-input",{staticClass:"form-control-merge",attrs:{id:"reset-password-confirm",type:t.password2FieldType,state:!(n.length>0)&&null,name:"reset-password-confirm",placeholder:"············"},model:{value:t.cPassword,callback:function(e){t.cPassword=e},expression:"cPassword"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.password2ToggleIcon},on:{click:t.togglePassword2Visibility}})],1)],1),r("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1),r("b-button",{attrs:{block:"",type:"submit",variant:"primary"}},[t._v(" Set New Password ")])],1)],1),r("p",{staticClass:"text-center mt-2"},[r("b-link",{attrs:{to:{name:"auth-login-v2"}}},[r("feather-icon",{attrs:{icon:"ChevronLeftIcon"}}),t._v(" Back to login ")],1)],1)],1)],1)],1)],1)},a=[],c=r("7bb1"),i=r("088b"),o=r("a15b"),s=r("b28b"),u=r("1947"),l=r("4968"),p=r("d6e4"),d=r("11de"),b=r("8226"),f=r("4918"),h=r("5e12"),O=r("aa59"),m=r("4797"),j=r("ccc0"),g=r("8f03"),v=r("4360"),y=r("223c"),w={components:{VuexyLogo:i["a"],BRow:o["a"],BCol:s["a"],BButton:u["a"],BCardTitle:l["a"],BCardText:p["a"],BForm:d["a"],BFormGroup:b["a"],BImg:f["a"],BInputGroup:h["a"],BLink:O["a"],BFormInput:m["a"],BInputGroupAppend:j["a"],ValidationProvider:c["b"],ValidationObserver:c["a"]},data:function(){return{userEmail:"",cPassword:"",password:"",sideImg:r("ed94"),required:g["l"],password1FieldType:"password",password2FieldType:"password"}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===v["a"].state.appConfig.layout.skin?(this.sideImg=r("aed4"),this.sideImg):this.sideImg},password1ToggleIcon:function(){return"password"===this.password1FieldType?"EyeIcon":"EyeOffIcon"},password2ToggleIcon:function(){return"password"===this.password2FieldType?"EyeIcon":"EyeOffIcon"}},methods:{togglePassword1Visibility:function(){this.password1FieldType="password"===this.password1FieldType?"text":"password"},togglePassword2Visibility:function(){this.password2FieldType="password"===this.password2FieldType?"text":"password"},validationForm:function(){var t=this;this.$refs.simpleRules.validate().then((function(e){e&&t.$toast({component:y["a"],props:{title:"Form Submitted",icon:"EditIcon",variant:"success"}})}))}}},P=w,x=(r("3897"),r("2877")),C=Object(x["a"])(P,n,a,!1,null,null,null);e["default"]=C.exports},aed4:function(t,e,r){t.exports=r.p+"img/reset-password-v2-dark.7f1fd154.svg"},b549:function(t,e,r){"use strict";r("8d81")},ccc0:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),i=r("d82f"),o=r("cf75"),s=r("46bc");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=Object(o["d"])(Object(i["j"])(s["b"],["append"]),c["ob"]),b=n["default"].extend({name:c["ob"],functional:!0,props:d,render:function(t,e){var r=e.props,n=e.data,c=e.children;return t(s["a"],Object(a["a"])(n,{props:l(l({},r),{},{append:!0})}),c)}})},d190:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),i=r("a723"),o=r("cf75"),s=Object(o["d"])({tag:Object(o["c"])(i["u"],"div")},c["qb"]),u=n["default"].extend({name:c["qb"],functional:!0,props:s,render:function(t,e){var r=e.props,n=e.data,c=e.children;return t(r.tag,Object(a["a"])(n,{staticClass:"input-group-text"}),c)}})},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),i=r("a723"),o=r("cf75"),s=Object(o["d"])({textTag:Object(o["c"])(i["u"],"p")},c["u"]),u=n["default"].extend({name:c["u"],functional:!0,props:s,render:function(t,e){var r=e.props,n=e.data,c=e.children;return t(r.textTag,Object(a["a"])(n,{staticClass:"card-text"}),c)}})},d8e1:function(t,e,r){},e8a3:function(t,e,r){"use strict";r.d(e,"b",(function(){return C})),r.d(e,"a",(function(){return D}));var n=r("2b0e"),a=r("c637"),c=r("0056"),i=r("a723"),o=r("9b76"),s=r("7b1e"),u=r("3a58"),l=r("d82f"),p=r("cf75"),d=r("4a38"),b=r("8c18"),f=r("0759"),h=r("7386"),O=r("1947"),m=r("aa59");function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y="b-avatar",w=["sm",null,"lg"],P=.4,x=.7*P,C=function(t){return t=Object(s["n"])(t)&&Object(s["i"])(t)?Object(u["b"])(t,0):t,Object(s["h"])(t)?"".concat(t,"px"):t||null},S=Object(l["j"])(m["b"],["active","event","routerTag"]),V=Object(p["d"])(Object(l["m"])(g(g({},S),{},{alt:Object(p["c"])(i["u"],"avatar"),ariaLabel:Object(p["c"])(i["u"]),badge:Object(p["c"])(i["j"],!1),badgeLeft:Object(p["c"])(i["g"],!1),badgeOffset:Object(p["c"])(i["u"]),badgeTop:Object(p["c"])(i["g"],!1),badgeVariant:Object(p["c"])(i["u"],"primary"),button:Object(p["c"])(i["g"],!1),buttonType:Object(p["c"])(i["u"],"button"),icon:Object(p["c"])(i["u"]),rounded:Object(p["c"])(i["j"],!1),size:Object(p["c"])(i["p"]),square:Object(p["c"])(i["g"],!1),src:Object(p["c"])(i["u"]),text:Object(p["c"])(i["u"]),variant:Object(p["c"])(i["u"],"secondary")})),a["c"]),D=n["default"].extend({name:a["c"],mixins:[b["a"]],inject:{bvAvatarGroup:{default:null}},props:V,data:function(){return{localSrc:this.src||null}},computed:{computedSize:function(){var t=this.bvAvatarGroup;return C(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,r=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===r||(r||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===w.indexOf(t)?"calc(".concat(t," * ").concat(P,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,r=e?e.overlapScale:0,n=t&&r?"calc(".concat(t," * -").concat(r,")"):null;return n?{marginLeft:n,marginRight:n}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,r=this.badgeLeft,n=this.badgeOffset,a=n||"0px";return{fontSize:-1===w.indexOf(t)?"calc(".concat(t," * ").concat(x," )"):null,top:e?a:null,bottom:e?null:a,left:r?a:null,right:r?null:a}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(c["x"],t)},onClick:function(t){this.$emit(c["f"],t)}},render:function(t){var e,r=this.computedVariant,n=this.disabled,a=this.computedRounded,c=this.icon,i=this.localSrc,s=this.text,u=this.fontStyle,l=this.marginStyle,b=this.computedSize,j=this.button,P=this.buttonType,x=this.badge,C=this.badgeVariant,V=this.badgeStyle,D=!j&&Object(d["d"])(this),T=j?O["a"]:D?m["a"]:"span",$=this.alt,k=this.ariaLabel||null,E=null;this.hasNormalizedSlot()?E=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):i?(E=t("img",{style:r?{}:{width:"100%",height:"100%"},attrs:{src:i,alt:$},on:{error:this.onImgError}}),E=t("span",{staticClass:"b-avatar-img"},[E])):E=c?t(f["a"],{props:{icon:c},attrs:{"aria-hidden":"true",alt:$}}):s?t("span",{staticClass:"b-avatar-text",style:u},[t("span",s)]):t(h["m"],{attrs:{"aria-hidden":"true",alt:$}});var I=t(),F=this.hasNormalizedSlot(o["d"]);if(x||""===x||F){var _=!0===x?"":x;I=t("span",{staticClass:"b-avatar-badge",class:v({},"badge-".concat(C),C),style:V},[F?this.normalizeSlot(o["d"]):_])}var z={staticClass:y,class:(e={},v(e,"".concat(y,"-").concat(b),b&&-1!==w.indexOf(b)),v(e,"badge-".concat(r),!j&&r),v(e,"rounded",!0===a),v(e,"rounded-".concat(a),a&&!0!==a),v(e,"disabled",n),e),style:g(g({},l),{},{width:b,height:b}),attrs:{"aria-label":k||null},props:j?{variant:r,disabled:n,type:P}:D?Object(p["e"])(S,this):{},on:j||D?{click:this.onClick}:{}};return t(T,z,[E,I])}})},ed94:function(t,e,r){t.exports=r.p+"img/reset-password-v2.cb5ebb88.svg"}}]);
//# sourceMappingURL=chunk-59bd593d.4159379a.js.map