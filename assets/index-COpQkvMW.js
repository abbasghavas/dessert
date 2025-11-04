import{G as O,i as Xs,D as Ra,M as _r,c as Zl,n as Js,a as Zn,b as zl,g as zn,o as ki,u as Ai,d as on,e as Ql,f as Xl,h as we,j as ln,k as Jl,t as se,l as w,p as eu,m as Bi,s as Hi,q as Ct,r as eo,v as to,w as Qn,x as tu,A as au,y as iu,z as Wi,B as ru,C as Ki,E as nu,F as ao,H as su,I as Xi,R as Sa,J as Ca}from"./index-BdeFztr9.js";import{H as ou,M as lu}from"./mixin-8od3OKt6.js";import{C as Pa}from"./custom-media-element-Ce0vsE-t.js";var uu=Object.create,io=Object.defineProperty,du=Object.getOwnPropertyDescriptor,cu=Object.getOwnPropertyNames,mu=Object.getPrototypeOf,hu=Object.prototype.hasOwnProperty,ro=function(e,t){return function(){return e&&(t=e(e=0)),t}},le=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},pu=function(e,t,a,i){if(t&&typeof t=="object"||typeof t=="function")for(var r=cu(t),n=0,s=r.length,l;n<s;n++)l=r[n],!hu.call(e,l)&&l!==a&&io(e,l,{get:(function(o){return t[o]}).bind(null,l),enumerable:!(i=du(t,l))||i.enumerable});return e},ce=function(e,t,a){return a=e!=null?uu(mu(e)):{},pu(!e||!e.__esModule?io(a,"default",{value:e,enumerable:!0}):a,e)},Re=le(function(e,t){var a;typeof window<"u"?a=window:typeof global<"u"?a=global:typeof self<"u"?a=self:a={},t.exports=a});function Dt(e,t){return t!=null&&typeof Symbol<"u"&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):Dt(e,t)}var It=ro(function(){It()});function no(e){"@swc/helpers - typeof";return e&&typeof Symbol<"u"&&e.constructor===Symbol?"symbol":typeof e}var so=ro(function(){}),oo=le(function(e,t){var a=Array.prototype.slice;t.exports=i;function i(r,n){for(("length"in r)||(r=[r]),r=a.call(r);r.length;){var s=r.shift(),l=n(s);if(l)return l;s.childNodes&&s.childNodes.length&&(r=a.call(s.childNodes).concat(r))}}}),vu=le(function(e,t){It(),t.exports=a;function a(i,r){if(!Dt(this,a))return new a(i,r);this.data=i,this.nodeValue=i,this.length=i.length,this.ownerDocument=r||null}a.prototype.nodeType=8,a.prototype.nodeName="#comment",a.prototype.toString=function(){return"[object Comment]"}}),fu=le(function(e,t){It(),t.exports=a;function a(i,r){if(!Dt(this,a))return new a(i);this.data=i||"",this.length=this.data.length,this.ownerDocument=r||null}a.prototype.type="DOMTextNode",a.prototype.nodeType=3,a.prototype.nodeName="#text",a.prototype.toString=function(){return this.data},a.prototype.replaceData=function(i,r,n){var s=this.data,l=s.substring(0,i),o=s.substring(i+r,s.length);this.data=l+n+o,this.length=this.data.length}}),lo=le(function(e,t){t.exports=a;function a(i){var r=this,n=i.type;i.target||(i.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(l){i.currentTarget=r,typeof l=="function"?l(i):l.handleEvent(i)});r.parentNode&&r.parentNode.dispatchEvent(i)}}),uo=le(function(e,t){t.exports=a;function a(i,r){var n=this;n.listeners||(n.listeners={}),n.listeners[i]||(n.listeners[i]=[]),n.listeners[i].indexOf(r)===-1&&n.listeners[i].push(r)}}),co=le(function(e,t){t.exports=a;function a(i,r){var n=this;if(n.listeners&&n.listeners[i]){var s=n.listeners[i],l=s.indexOf(r);l!==-1&&s.splice(l,1)}}}),bu=le(function(e,t){so(),t.exports=i;var a=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function i(m){switch(m.nodeType){case 3:return c(m.data);case 8:return"<!--"+m.data+"-->";default:return r(m)}}function r(m){var d=[],f=m.tagName;return m.namespaceURI==="http://www.w3.org/1999/xhtml"&&(f=f.toLowerCase()),d.push("<"+f+u(m)+l(m)),a.indexOf(f)>-1?d.push(" />"):(d.push(">"),m.childNodes.length?d.push.apply(d,m.childNodes.map(i)):m.textContent||m.innerText?d.push(c(m.textContent||m.innerText)):m.innerHTML&&d.push(m.innerHTML),d.push("</"+f+">")),d.join("")}function n(m,d){var f=no(m[d]);return d==="style"&&Object.keys(m.style).length>0?!0:m.hasOwnProperty(d)&&(f==="string"||f==="boolean"||f==="number")&&d!=="nodeName"&&d!=="className"&&d!=="tagName"&&d!=="textContent"&&d!=="innerText"&&d!=="namespaceURI"&&d!=="innerHTML"}function s(m){if(typeof m=="string")return m;var d="";return Object.keys(m).forEach(function(f){var y=m[f];f=f.replace(/[A-Z]/g,function(_){return"-"+_.toLowerCase()}),d+=f+":"+y+";"}),d}function l(m){var d=m.dataset,f=[];for(var y in d)f.push({name:"data-"+y,value:d[y]});return f.length?o(f):""}function o(m){var d=[];return m.forEach(function(f){var y=f.name,_=f.value;y==="style"&&(_=s(_)),d.push(y+'="'+h(_)+'"')}),d.length?" "+d.join(" "):""}function u(m){var d=[];for(var f in m)n(m,f)&&d.push({name:f,value:m[f]});for(var y in m._attributes)for(var _ in m._attributes[y]){var g=m._attributes[y][_],b=(g.prefix?g.prefix+":":"")+_;d.push({name:b,value:g.value})}return m.className&&d.push({name:"class",value:m.className}),d.length?o(d):""}function c(m){var d="";return typeof m=="string"?d=m:m&&(d=m.toString()),d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h(m){return c(m).replace(/"/g,"&quot;")}}),mo=le(function(e,t){It();var a=oo(),i=lo(),r=uo(),n=co(),s=bu(),l="http://www.w3.org/1999/xhtml";t.exports=o;function o(u,c,h){if(!Dt(this,o))return new o(u);var m=h===void 0?l:h||null;this.tagName=m===l?String(u).toUpperCase():u,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=c||null,this.namespaceURI=m,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}o.prototype.type="DOMElement",o.prototype.nodeType=1,o.prototype.appendChild=function(u){return u.parentNode&&u.parentNode.removeChild(u),this.childNodes.push(u),u.parentNode=this,u},o.prototype.replaceChild=function(u,c){u.parentNode&&u.parentNode.removeChild(u);var h=this.childNodes.indexOf(c);return c.parentNode=null,this.childNodes[h]=u,u.parentNode=this,c},o.prototype.removeChild=function(u){var c=this.childNodes.indexOf(u);return this.childNodes.splice(c,1),u.parentNode=null,u},o.prototype.insertBefore=function(u,c){u.parentNode&&u.parentNode.removeChild(u);var h=c==null?-1:this.childNodes.indexOf(c);return h>-1?this.childNodes.splice(h,0,u):this.childNodes.push(u),u.parentNode=this,u},o.prototype.setAttributeNS=function(u,c,h){var m=null,d=c,f=c.indexOf(":");if(f>-1&&(m=c.substr(0,f),d=c.substr(f+1)),this.tagName==="INPUT"&&c==="type")this.type=h;else{var y=this._attributes[u]||(this._attributes[u]={});y[d]={value:h,prefix:m}}},o.prototype.getAttributeNS=function(u,c){var h=this._attributes[u],m=h&&h[c]&&h[c].value;return this.tagName==="INPUT"&&c==="type"?this.type:typeof m!="string"?null:m},o.prototype.removeAttributeNS=function(u,c){var h=this._attributes[u];h&&delete h[c]},o.prototype.hasAttributeNS=function(u,c){var h=this._attributes[u];return!!h&&c in h},o.prototype.setAttribute=function(u,c){return this.setAttributeNS(null,u,c)},o.prototype.getAttribute=function(u){return this.getAttributeNS(null,u)},o.prototype.removeAttribute=function(u){return this.removeAttributeNS(null,u)},o.prototype.hasAttribute=function(u){return this.hasAttributeNS(null,u)},o.prototype.removeEventListener=n,o.prototype.addEventListener=r,o.prototype.dispatchEvent=i,o.prototype.focus=function(){},o.prototype.toString=function(){return s(this)},o.prototype.getElementsByClassName=function(u){var c=u.split(" "),h=[];return a(this,function(m){if(m.nodeType===1){var d=m.className||"",f=d.split(" ");c.every(function(y){return f.indexOf(y)!==-1})&&h.push(m)}}),h},o.prototype.getElementsByTagName=function(u){u=u.toLowerCase();var c=[];return a(this.childNodes,function(h){h.nodeType===1&&(u==="*"||h.tagName.toLowerCase()===u)&&c.push(h)}),c},o.prototype.contains=function(u){return a(this,function(c){return u===c})||!1}}),_u=le(function(e,t){It();var a=mo();t.exports=i;function i(r){if(!Dt(this,i))return new i;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}i.prototype.type="DocumentFragment",i.prototype.nodeType=11,i.prototype.nodeName="#document-fragment",i.prototype.appendChild=a.prototype.appendChild,i.prototype.replaceChild=a.prototype.replaceChild,i.prototype.removeChild=a.prototype.removeChild,i.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),gu=le(function(e,t){t.exports=a;function a(i){}a.prototype.initEvent=function(i,r,n){this.type=i,this.bubbles=r,this.cancelable=n},a.prototype.preventDefault=function(){}}),yu=le(function(e,t){It();var a=oo(),i=vu(),r=fu(),n=mo(),s=_u(),l=gu(),o=lo(),u=uo(),c=co();t.exports=h;function h(){if(!Dt(this,h))return new h;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var m=h.prototype;m.createTextNode=function(d){return new r(d,this)},m.createElementNS=function(d,f){var y=d===null?null:String(d);return new n(f,this,y)},m.createElement=function(d){return new n(d,this)},m.createDocumentFragment=function(){return new s(this)},m.createEvent=function(d){return new l(d)},m.createComment=function(d){return new i(d,this)},m.getElementById=function(d){d=String(d);var f=a(this.childNodes,function(y){if(String(y.id)===d)return y});return f||null},m.getElementsByClassName=n.prototype.getElementsByClassName,m.getElementsByTagName=n.prototype.getElementsByTagName,m.contains=n.prototype.contains,m.removeEventListener=c,m.addEventListener=u,m.dispatchEvent=o}),Eu=le(function(e,t){var a=yu();t.exports=new a}),ho=le(function(e,t){var a=typeof global<"u"?global:typeof window<"u"?window:{},i=Eu(),r;typeof document<"u"?r=document:(r=a["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=a["__GLOBAL_DOCUMENT_CACHE@4"]=i)),t.exports=r});function Tu(e){if(Array.isArray(e))return e}function ku(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var i=[],r=!0,n=!1,s,l;try{for(a=a.call(e);!(r=(s=a.next()).done)&&(i.push(s.value),!(t&&i.length===t));r=!0);}catch(o){n=!0,l=o}finally{try{!r&&a.return!=null&&a.return()}finally{if(n)throw l}}return i}}function Au(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}function po(e,t){if(e){if(typeof e=="string")return gr(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(a);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return gr(e,t)}}function ze(e,t){return Tu(e)||ku(e,t)||po(e,t)||Au()}var ya=ce(Re()),Xn=ce(Re()),wu=ce(Re()),Ru={now:function(){var e=wu.default.performance,t=e&&e.timing,a=t&&t.navigationStart,i=typeof a=="number"&&typeof e.now=="function"?a+e.now():Date.now();return Math.round(i)}},J=Ru,Da=function(){var e,t,a;if(typeof((e=Xn.default.crypto)===null||e===void 0?void 0:e.getRandomValues)=="function"){a=new Uint8Array(32),Xn.default.crypto.getRandomValues(a);for(var i=0;i<32;i++)a[i]=a[i]%16}else{a=[];for(var r=0;r<32;r++)a[r]=Math.random()*16|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(o){var u=o==="x"?a[n]:a[n]&3|8;return n++,u.toString(16)});var s=J.now(),l=s?.toString(16).substring(3);return l?t.substring(0,28)+l:t},vo=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},_e=function(e){if(e&&typeof e.nodeName<"u")return e.muxId||(e.muxId=vo()),e.muxId;var t;try{t=document.querySelector(e)}catch{}return t&&!t.muxId&&(t.muxId=e),t?.muxId||e},wi=function(e){var t;e&&typeof e.nodeName<"u"?(t=e,e=_e(t)):t=document.querySelector(e);var a=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,a]};function Su(e){if(Array.isArray(e))return gr(e)}function Cu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Du(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ge(e){return Su(e)||Cu(e)||po(e)||Du()}var gt={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},Iu=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,a,i,r,n,s,l=[console,e],o=(a=console.trace).bind.apply(a,ge(l)),u=(i=console.info).bind.apply(i,ge(l)),c=(r=console.debug).bind.apply(r,ge(l)),h=(n=console.warn).bind.apply(n,ge(l)),m=(s=console.error).bind.apply(s,ge(l)),d=t;return{trace:function(){for(var f=arguments.length,y=new Array(f),_=0;_<f;_++)y[_]=arguments[_];if(!(d>gt.TRACE))return o.apply(void 0,ge(y))},debug:function(){for(var f=arguments.length,y=new Array(f),_=0;_<f;_++)y[_]=arguments[_];if(!(d>gt.DEBUG))return c.apply(void 0,ge(y))},info:function(){for(var f=arguments.length,y=new Array(f),_=0;_<f;_++)y[_]=arguments[_];if(!(d>gt.INFO))return u.apply(void 0,ge(y))},warn:function(){for(var f=arguments.length,y=new Array(f),_=0;_<f;_++)y[_]=arguments[_];if(!(d>gt.WARN))return h.apply(void 0,ge(y))},error:function(){for(var f=arguments.length,y=new Array(f),_=0;_<f;_++)y[_]=arguments[_];if(!(d>gt.ERROR))return m.apply(void 0,ge(y))},get level(){return d},set level(f){f!==this.level&&(d=f??t)}}},q=Iu("[mux]"),Ji=ce(Re());function yr(){var e=Ji.default.doNotTrack||Ji.default.navigator&&Ji.default.navigator.doNotTrack;return e==="1"}function D(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}It();function te(e,t){if(!Dt(e,t))throw new TypeError("Cannot call a class as a function")}function xu(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function We(e,t,a){return t&&xu(e.prototype,t),e}function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Gt(e){return Gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Gt(e)}function Ou(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=Gt(e),e!==null););return e}function Ka(e,t,a){return typeof Reflect<"u"&&Reflect.get?Ka=Reflect.get:Ka=function(i,r,n){var s=Ou(i,r);if(s){var l=Object.getOwnPropertyDescriptor(s,r);return l.get?l.get.call(n||i):l.value}},Ka(e,t,a||e)}function Er(e,t){return Er=Object.setPrototypeOf||function(a,i){return a.__proto__=i,a},Er(e,t)}function Nu(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Er(e,t)}function Lu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}so();function Mu(e,t){return t&&(no(t)==="object"||typeof t=="function")?t:D(e)}function Pu(e){var t=Lu();return function(){var a=Gt(e),i;if(t){var r=Gt(this).constructor;i=Reflect.construct(a,arguments,r)}else i=a.apply(this,arguments);return Mu(this,i)}}var Te=function(e){return Ia(e)[0]},Ia=function(e){if(typeof e!="string"||e==="")return["localhost"];var t=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,a=e.match(t)||[],i=a[4],r;return i&&(r=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,r]},er=ce(Re()),$u={exists:function(){var e=er.default.performance,t=e&&e.timing;return t!==void 0},domContentLoadedEventEnd:function(){var e=er.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=er.default.performance,t=e&&e.timing;return t&&t.navigationStart}},Ri=$u;function X(e,t,a){a=a===void 0?1:a,e[t]=e[t]||0,e[t]+=a}function Si(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{},i=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),i.forEach(function(r){T(e,r,a[r])})}return e}function Uu(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a.push.apply(a,i)}return a}function un(e,t){return t=t??{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Uu(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}),e}var Bu=["x-cdn","content-type"],fo=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],Hu=Bu.concat(fo);function dn(e){e=e||"";var t={},a=e.trim().split(/[\r\n]+/);return a.forEach(function(i){if(i){var r=i.split(": "),n=r.shift();n&&(Hu.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(t[n]=r.join(": "))}}),t}function Ci(e){if(e){var t=fo.find(function(a){return e[a]!==void 0});return t?e[t]:void 0}}var Wu=function(e){var t={};for(var a in e){var i=e[a],r=i["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=i["DATA-ID"].replace("io.litix.data.","");t[n]=i.VALUE}}return t},bo=Wu,$a=function(e){if(!e)return{};var t=Ri.navigationStart(),a=e.loading,i=a?a.start:e.trequest,r=a?a.first:e.tfirst,n=a?a.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+i),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},Jt=function(e){if(!(!e||typeof e.getAllResponseHeaders!="function"))return dn(e.getAllResponseHeaders())},Ku=function(e,t,a){var i=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(_){var g=parseInt(i.version),b;return g===1&&_.programDateTime!==null&&(b=_.programDateTime),g===0&&_.pdt!==null&&(b=_.pdt),b};if(!Ri.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var l=function(_,g){return e.emit(t,_,g)},o=function(_,g){var b=g.levels,p=g.audioTracks,k=g.url,C=g.stats,I=g.networkDetails,M=g.sessionData,H={},V={};b.forEach(function(ae,me){H[me]={width:ae.width,height:ae.height,bitrate:ae.bitrate,attrs:ae.attrs}}),p.forEach(function(ae,me){V[me]={name:ae.name,language:ae.lang,bitrate:ae.bitrate}});var $=$a(C),N=$.bytesLoaded,ue=$.requestStart,Se=$.responseStart,Ce=$.responseEnd;l("requestcompleted",un(Si({},bo(M)),{request_event_type:_,request_bytes_loaded:N,request_start:ue,request_response_start:Se,request_response_end:Ce,request_type:"manifest",request_hostname:Te(k),request_response_headers:Jt(I),request_rendition_lists:{media:H,audio:V,video:{}}}))};a.on(i.Events.MANIFEST_LOADED,o);var u=function(_,g){var b=g.details,p=g.level,k=g.networkDetails,C=g.stats,I=$a(C),M=I.bytesLoaded,H=I.requestStart,V=I.responseStart,$=I.responseEnd,N=b.fragments[b.fragments.length-1],ue=s(N)+n(N.duration);l("requestcompleted",{request_event_type:_,request_bytes_loaded:M,request_start:H,request_response_start:V,request_response_end:$,request_current_level:p,request_type:"manifest",request_hostname:Te(b.url),request_response_headers:Jt(k),video_holdback:b.holdBack&&n(b.holdBack),video_part_holdback:b.partHoldBack&&n(b.partHoldBack),video_part_target_duration:b.partTarget&&n(b.partTarget),video_target_duration:b.targetduration&&n(b.targetduration),video_source_is_live:b.live,player_manifest_newest_program_time:isNaN(ue)?void 0:ue})};a.on(i.Events.LEVEL_LOADED,u);var c=function(_,g){var b=g.details,p=g.networkDetails,k=g.stats,C=$a(k),I=C.bytesLoaded,M=C.requestStart,H=C.responseStart,V=C.responseEnd;l("requestcompleted",{request_event_type:_,request_bytes_loaded:I,request_start:M,request_response_start:H,request_response_end:V,request_type:"manifest",request_hostname:Te(b.url),request_response_headers:Jt(p)})};a.on(i.Events.AUDIO_TRACK_LOADED,c);var h=function(_,g){var b=g.stats,p=g.networkDetails,k=g.frag;b=b||k.stats;var C=$a(b),I=C.bytesLoaded,M=C.requestStart,H=C.responseStart,V=C.responseEnd,$=p?Jt(p):void 0,N={request_event_type:_,request_bytes_loaded:I,request_start:M,request_response_start:H,request_response_end:V,request_hostname:p?Te(p.responseURL):void 0,request_id:$?Ci($):void 0,request_response_headers:$,request_media_duration:k.duration,request_url:p?.responseURL};k.type==="main"?(N.request_type="media",N.request_current_level=k.level,N.request_video_width=(a.levels[k.level]||{}).width,N.request_video_height=(a.levels[k.level]||{}).height,N.request_labeled_bitrate=(a.levels[k.level]||{}).bitrate):N.request_type=k.type,l("requestcompleted",N)};a.on(i.Events.FRAG_LOADED,h);var m=function(_,g){var b=g.frag,p=b.start,k=s(b),C={currentFragmentPDT:k,currentFragmentStart:n(p)};l("fragmentchange",C)};a.on(i.Events.FRAG_CHANGED,m);var d=function(_,g){var b=g.type,p=g.details,k=g.response,C=g.fatal,I=g.frag,M=g.networkDetails,H=I?.url||g.url||"",V=M?Jt(M):void 0;if((p===i.ErrorDetails.MANIFEST_LOAD_ERROR||p===i.ErrorDetails.MANIFEST_LOAD_TIMEOUT||p===i.ErrorDetails.FRAG_LOAD_ERROR||p===i.ErrorDetails.FRAG_LOAD_TIMEOUT||p===i.ErrorDetails.LEVEL_LOAD_ERROR||p===i.ErrorDetails.LEVEL_LOAD_TIMEOUT||p===i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||p===i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||p===i.ErrorDetails.SUBTITLE_LOAD_ERROR||p===i.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||p===i.ErrorDetails.KEY_LOAD_ERROR||p===i.ErrorDetails.KEY_LOAD_TIMEOUT)&&l("requestfailed",{request_error:p,request_url:H,request_hostname:Te(H),request_id:V?Ci(V):void 0,request_type:p===i.ErrorDetails.FRAG_LOAD_ERROR||p===i.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":p===i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||p===i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":p===i.ErrorDetails.SUBTITLE_LOAD_ERROR||p===i.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":p===i.ErrorDetails.KEY_LOAD_ERROR||p===i.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:k?.code,request_error_text:k?.text}),C){var $,N="".concat(H?"url: ".concat(H,`
`):"")+"".concat(k&&(k.code||k.text)?"response: ".concat(k.code,", ").concat(k.text,`
`):"")+"".concat(g.reason?"failure reason: ".concat(g.reason,`
`):"")+"".concat(g.level?"level: ".concat(g.level,`
`):"")+"".concat(g.parent?"parent stream controller: ".concat(g.parent,`
`):"")+"".concat(g.buffer?"buffer length: ".concat(g.buffer,`
`):"")+"".concat(g.error?"error: ".concat(g.error,`
`):"")+"".concat(g.event?"event: ".concat(g.event,`
`):"")+"".concat(g.err?"error message: ".concat(($=g.err)===null||$===void 0?void 0:$.message,`
`):"");l("error",{player_error_code:b,player_error_message:p,player_error_context:N})}};a.on(i.Events.ERROR,d);var f=function(_,g){var b=g.frag,p=b&&b._url||"";l("requestcanceled",{request_event_type:_,request_url:p,request_type:"media",request_hostname:Te(p)})};a.on(i.Events.FRAG_LOAD_EMERGENCY_ABORTED,f);var y=function(_,g){var b=g.level,p=a.levels[b];if(p&&p.attrs&&p.attrs.BANDWIDTH){var k=p.attrs.BANDWIDTH,C,I=parseFloat(p.attrs["FRAME-RATE"]);isNaN(I)||(C=I),k?l("renditionchange",{video_source_fps:C,video_source_bitrate:k,video_source_width:p.width,video_source_height:p.height,video_source_rendition_name:p.name,video_source_codec:p?.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};a.on(i.Events.LEVEL_SWITCHED,y),a._stopMuxMonitor=function(){a.off(i.Events.MANIFEST_LOADED,o),a.off(i.Events.LEVEL_LOADED,u),a.off(i.Events.AUDIO_TRACK_LOADED,c),a.off(i.Events.FRAG_LOADED,h),a.off(i.Events.FRAG_CHANGED,m),a.off(i.Events.ERROR,d),a.off(i.Events.FRAG_LOAD_EMERGENCY_ABORTED,f),a.off(i.Events.LEVEL_SWITCHED,y),a.off(i.Events.DESTROYING,a._stopMuxMonitor),delete a._stopMuxMonitor},a.on(i.Events.DESTROYING,a._stopMuxMonitor)},qu=function(e){e&&typeof e._stopMuxMonitor=="function"&&e._stopMuxMonitor()},Jn=function(e,t){if(!e||!e.requestEndDate)return{};var a=Te(e.url),i=e.url,r=e.bytesLoaded,n=new Date(e.requestStartDate).getTime(),s=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),o=isNaN(e.duration)?0:e.duration,u=typeof t.getMetricsFor=="function"?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType),c;u.length>0&&(c=dn(u[u.length-1]._responseHeaders||""));var h=c?Ci(c):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:l,requestBytesLoaded:r,requestResponseHeaders:c,requestMediaDuration:o,requestHostname:a,requestUrl:i,requestId:h}},Yu=function(e,t){var a=t.getQualityFor(e),i=t.getCurrentTrackFor(e).bitrateList;return i?{currentLevel:a,renditionWidth:i[a].width||null,renditionHeight:i[a].height||null,renditionBitrate:i[a].bandwidth}:{}},Fu=function(e){var t;return(t=e.match(/.*codecs\*?="(.*)"/))===null||t===void 0?void 0:t[1]},Vu=function(e){try{var t,a,i=(a=e.getVersion)===null||a===void 0||(t=a.call(e))===null||t===void 0?void 0:t.split(".").map(function(r){return parseInt(r)})[0];return i}catch{return!1}},Gu=function(e,t,a){var i=e.log;if(!a||!a.on){i.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=Vu(a),n=function(b,p){return e.emit(t,b,p)},s=function(b){var p=b.type,k=b.data,C=(k||{}).url;n("requestcompleted",{request_event_type:p,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:Te(C),request_url:C})};a.on("manifestLoaded",s);var l={},o=function(b){if(typeof b.getRequests!="function")return null;var p=b.getRequests({state:"executed"});return p.length===0?null:p[p.length-1]},u=function(b){var p=b.type,k=b.fragmentModel,C=b.chunk,I=o(k);c({type:p,request:I,chunk:C})},c=function(b){var p=b.type,k=b.chunk,C=b.request,I=(k||{}).mediaInfo,M=I||{},H=M.type,V=M.bitrateList;V=V||[];var $={};V.forEach(function(De,ne){$[ne]={},$[ne].width=De.width,$[ne].height=De.height,$[ne].bitrate=De.bandwidth,$[ne].attrs={}}),H==="video"?l.video=$:H==="audio"?l.audio=$:l.media=$;var N=Jn(C,a),ue=N.requestStart,Se=N.requestResponseStart,Ce=N.requestResponseEnd,ae=N.requestResponseHeaders,me=N.requestMediaDuration,Xe=N.requestHostname,Je=N.requestUrl,et=N.requestId;n("requestcompleted",{request_event_type:p,request_start:ue,request_response_start:Se,request_response_end:Ce,request_bytes_loaded:-1,request_type:H+"_init",request_response_headers:ae,request_hostname:Xe,request_id:et,request_url:Je,request_media_duration:me,request_rendition_lists:l})};r>=4?a.on("initFragmentLoaded",c):a.on("initFragmentLoaded",u);var h=function(b){var p=b.type,k=b.fragmentModel,C=b.chunk,I=o(k);m({type:p,request:I,chunk:C})},m=function(b){var p=b.type,k=b.chunk,C=b.request,I=k||{},M=I.mediaInfo,H=I.start,V=M||{},$=V.type,N=Jn(C,a),ue=N.requestStart,Se=N.requestResponseStart,Ce=N.requestResponseEnd,ae=N.requestBytesLoaded,me=N.requestResponseHeaders,Xe=N.requestMediaDuration,Je=N.requestHostname,et=N.requestUrl,De=N.requestId,ne=Yu($,a),Ie=ne.currentLevel,qe=ne.renditionWidth,Qi=ne.renditionHeight,jl=ne.renditionBitrate;n("requestcompleted",{request_event_type:p,request_start:ue,request_response_start:Se,request_response_end:Ce,request_bytes_loaded:ae,request_type:$,request_response_headers:me,request_hostname:Je,request_id:De,request_url:et,request_media_start_time:H,request_media_duration:Xe,request_current_level:Ie,request_labeled_bitrate:jl,request_video_width:qe,request_video_height:Qi})};r>=4?a.on("mediaFragmentLoaded",m):a.on("mediaFragmentLoaded",h);var d={video:void 0,audio:void 0,totalBitrate:void 0},f=function(){if(d.video&&typeof d.video.bitrate=="number"){if(!(d.video.width&&d.video.height)){i.warn("have bitrate info for video but missing width/height");return}var b=d.video.bitrate;if(d.audio&&typeof d.audio.bitrate=="number"&&(b+=d.audio.bitrate),b!==d.totalBitrate)return d.totalBitrate=b,{video_source_bitrate:b,video_source_height:d.video.height,video_source_width:d.video.width,video_source_codec:Fu(d.video.codec)}}},y=function(b,p,k){if(typeof b.newQuality!="number"){i.warn("missing evt.newQuality in qualityChangeRendered event",b);return}var C=b.mediaType;if(C==="audio"||C==="video"){var I=a.getBitrateInfoListFor(C).find(function(H){var V=H.qualityIndex;return V===b.newQuality});if(!(I&&typeof I.bitrate=="number")){i.warn("missing bitrate info for ".concat(C));return}d[C]=un(Si({},I),{codec:a.getCurrentTrackFor(C).codec});var M=f();M&&n("renditionchange",M)}};a.on("qualityChangeRendered",y);var _=function(b){var p=b.request,k=b.mediaType;p=p||{},n("requestcanceled",{request_event_type:p.type+"_"+p.action,request_url:p.url,request_type:k,request_hostname:Te(p.url)})};a.on("fragmentLoadingAbandoned",_);var g=function(b){var p=b.error,k,C,I=(p==null||(k=p.data)===null||k===void 0?void 0:k.request)||{},M=(p==null||(C=p.data)===null||C===void 0?void 0:C.response)||{};p?.code===27&&n("requestfailed",{request_error:I.type+"_"+I.action,request_url:I.url,request_hostname:Te(I.url),request_type:I.mediaType,request_error_code:M.status,request_error_text:M.statusText});var H="".concat(I!=null&&I.url?"url: ".concat(I.url,`
`):"")+"".concat(M!=null&&M.status||M!=null&&M.statusText?"response: ".concat(M?.status,", ").concat(M?.statusText,`
`):"");n("error",{player_error_code:p?.code,player_error_message:p?.message,player_error_context:H})};a.on("error",g),a._stopMuxMonitor=function(){a.off("manifestLoaded",s),a.off("initFragmentLoaded",c),a.off("mediaFragmentLoaded",m),a.off("qualityChangeRendered",y),a.off("error",g),a.off("fragmentLoadingAbandoned",_),delete a._stopMuxMonitor}},ju=function(e){e&&typeof e._stopMuxMonitor=="function"&&e._stopMuxMonitor()},es=0,Zu=(function(){function e(){te(this,e),T(this,"_listeners",void 0)}return We(e,[{key:"on",value:function(t,a,i){return a._eventEmitterGuid=a._eventEmitterGuid||++es,this._listeners=this._listeners||{},this._listeners[t]=this._listeners[t]||[],i&&(a=a.bind(i)),this._listeners[t].push(a),a}},{key:"off",value:function(t,a){var i=this._listeners&&this._listeners[t];i&&i.forEach(function(r,n){r._eventEmitterGuid===a._eventEmitterGuid&&i.splice(n,1)})}},{key:"one",value:function(t,a,i){var r=this;a._eventEmitterGuid=a._eventEmitterGuid||++es;var n=function(){r.off(t,n),a.apply(i||this,arguments)};n._eventEmitterGuid=a._eventEmitterGuid,this.on(t,n)}},{key:"emit",value:function(t,a){var i=this;if(this._listeners){a=a||{};var r=this._listeners["before*"]||[],n=this._listeners[t]||[],s=this._listeners["after"+t]||[],l=function(o,u){o=o.slice(),o.forEach(function(c){c.call(i,{type:t},u)})};l(r,a),l(n,a),l(s,a)}}}]),e})(),zu=Zu,tr=ce(Re()),Qu=(function(){function e(t){var a=this;te(this,e),T(this,"_playbackHeartbeatInterval",void 0),T(this,"_playheadShouldBeProgressing",void 0),T(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){a._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?a._stopPlaybackHeartbeatInterval():a._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){a._playbackHeartbeatInterval!==null&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(i,r){a._playbackHeartbeatInterval!==null&&(tr.default.clearInterval(a._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),a._playbackHeartbeatInterval=null)})}return We(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var t=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=tr.default.setInterval(function(){t.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(tr.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e})(),Xu=Qu,Ju=function e(t){var a=this;te(this,e),T(this,"viewErrored",void 0),t.on("viewinit",function(){a.viewErrored=!1}),t.on("error",function(i,r){try{var n=t.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(t.data.player_error_code=n.player_error_code||r.player_error_code,t.data.player_error_message=n.player_error_message||r.player_error_message,t.data.player_error_context=n.player_error_context||r.player_error_context,t.data.player_error_severity=n.player_error_severity||r.player_error_severity,t.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,a.viewErrored=!0)}catch(s){t.mux.log.warn("Exception in error translator callback.",s),a.viewErrored=!0}}),t.on("aftererror",function(){var i,r,n,s,l;(i=t.data)===null||i===void 0||delete i.player_error_code,(r=t.data)===null||r===void 0||delete r.player_error_message,(n=t.data)===null||n===void 0||delete n.player_error_context,(s=t.data)===null||s===void 0||delete s.player_error_severity,(l=t.data)===null||l===void 0||delete l.player_error_business_exception})},ed=Ju,td=(function(){function e(t){te(this,e),T(this,"_watchTimeTrackerLastCheckedTime",void 0),T(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return We(e,[{key:"_updateWatchTime",value:function(t,a){var i=a.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=i),X(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(t,a){this._updateWatchTime(t,a),this._watchTimeTrackerLastCheckedTime=null}}]),e})(),ad=td,id=(function(){function e(t){var a=this;te(this,e),T(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),T(this,"_lastTime",void 0),T(this,"_isAdPlaying",void 0),T(this,"_callbackUpdatePlaybackTime",void 0),T(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=J.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var i=this._startPlaybackTimeTracking.bind(this);t.on("playing",i),t.on("adplaying",i),t.on("seeked",i);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){a._isAdPlaying=!0}),t.on("adended",function(){a._isAdPlaying=!1}),t.on("adpause",function(){a._isAdPlaying=!1}),t.on("adbreakstart",function(){a._isAdPlaying=!1}),t.on("adbreakend",function(){a._isAdPlaying=!1}),t.on("adplay",function(){a._isAdPlaying=!1}),t.on("viewinit",function(){a._playbackTimeTrackerLastPlayheadPosition=-1,a._lastTime=J.now(),a._isAdPlaying=!1,a._callbackUpdatePlaybackTime=null})}return We(e,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var t=this.pm.data.player_playhead_time,a=J.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&t>this._playbackTimeTrackerLastPlayheadPosition?i=t-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=a-this._lastTime),i>0&&i<=1e3&&X(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=t,this._lastTime=a}}]),e})(),rd=id,nd=(function(){function e(t){te(this,e),T(this,"pm",void 0),this.pm=t;var a=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",a),t.on("playbackheartbeatend",a),t.on("timeupdate",a),t.on("destroy",function(){t.off("timeupdate",a)})}return We(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(t,a){var i=this,r=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(a&&a.player_playhead_time)this.pm.data.player_playhead_time=a.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),e})(),sd=nd,ts=300*1e3,od=function e(t){if(te(this,e),!t.disableRebufferTracking){var a,i=function(n,s){r(s),a=void 0},r=function(n){if(a){var s=n.viewer_time-a;X(t.data,"view_rebuffer_duration",s),a=n.viewer_time,t.data.view_rebuffer_duration>ts&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(ts,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(n,s){return r(s)}),t.on("rebufferstart",function(n,s){a||(X(t.data,"view_rebuffer_count",1),a=s.viewer_time,t.one("rebufferend",i))}),t.on("viewinit",function(){a=void 0,t.off("rebufferend",i)})}},ld=od,ud=(function(){function e(t){var a=this;te(this,e),T(this,"_lastCheckedTime",void 0),T(this,"_lastPlayheadTime",void 0),T(this,"_lastPlayheadTimeUpdatedTime",void 0),T(this,"_rebuffering",void 0),T(this,"pm",void 0),this.pm=t,!(t.disableRebufferTracking||t.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){a._cleanupRebufferTracker(null,{viewer_time:J.now()})}))}return We(e,[{key:"_checkIfRebuffering",value:function(t,a){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(t,a);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(a.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(t,a,!0);return}var i=a.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=a.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(t){this._lastCheckedTime=t,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=t}},{key:"_cleanupRebufferTracker",value:function(t,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:a.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=a.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}i?this._prepareRebufferTrackerState(a.viewer_time):this._clearRebufferTrackerState()}}]),e})(),dd=ud,cd=(function(){function e(t){var a=this;te(this,e),T(this,"NAVIGATION_START",void 0),T(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var i=t.data,r=i.view_id;if(!i.view_program_changed){var n=function(s,l){var o=l.viewer_time;(s.type==="playing"&&typeof t.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof t.data.view_time_to_first_frame>"u"||a._inPrerollPosition()))&&a.calculateTimeToFirstFrame(o||J.now(),r)};t.one("playing",n),t.one("adplaying",n),t.one("viewend",function(){t.off("playing",n),t.off("adplaying",n)})}})}return We(e,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(t,a){a===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:t}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e})(),md=cd,hd=function e(t){var a=this;te(this,e),T(this,"_lastPlayerHeight",void 0),T(this,"_lastPlayerWidth",void 0),T(this,"_lastPlayheadPosition",void 0),T(this,"_lastSourceHeight",void 0),T(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){a._lastPlayheadPosition=-1});var i=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend"],r=["playing","hb","renditionchange","orientationchange"];i.forEach(function(n){t.on(n,function(){if(a._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&a._lastPlayerWidth>=0&&a._lastSourceWidth>0&&a._lastPlayerHeight>=0&&a._lastSourceHeight>0){var s=t.data.player_playhead_time-a._lastPlayheadPosition;if(s<0){a._lastPlayheadPosition=-1;return}var l=Math.min(a._lastPlayerWidth/a._lastSourceWidth,a._lastPlayerHeight/a._lastSourceHeight),o=Math.max(0,l-1),u=Math.max(0,1-l);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,o),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,u),X(t.data,"view_total_content_playback_time",s),X(t.data,"view_total_upscaling",o*s),X(t.data,"view_total_downscaling",u*s)}a._lastPlayheadPosition=-1})}),r.forEach(function(n){t.on(n,function(){a._lastPlayheadPosition=t.data.player_playhead_time,a._lastPlayerWidth=t.data.player_width,a._lastPlayerHeight=t.data.player_height,a._lastSourceWidth=t.data.video_source_width,a._lastSourceHeight=t.data.video_source_height})})},pd=hd,vd=2e3,fd=function e(t){var a=this;te(this,e),T(this,"isSeeking",void 0),this.isSeeking=!1;var i=-1,r=function(){var n=J.now(),s=(t.data.viewer_time||n)-(i||n);X(t.data,"view_seek_duration",s),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,s),a.isSeeking=!1,i=-1};t.on("seeking",function(n,s){if(Object.assign(t.data,s),a.isSeeking&&s.viewer_time-i<=vd){i=s.viewer_time;return}a.isSeeking&&r(),a.isSeeking=!0,i=s.viewer_time,X(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){a.isSeeking&&(r(),t.send("seeked")),a.isSeeking=!1,i=-1})},bd=fd,as=function(e,t){e.push(t),e.sort(function(a,i){return a.viewer_time-i.viewer_time})},_d=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],gd=(function(){function e(t){var a=this;te(this,e),T(this,"_adHasPlayed",void 0),T(this,"_adRequests",void 0),T(this,"_adResponses",void 0),T(this,"_currentAdRequestNumber",void 0),T(this,"_currentAdResponseNumber",void 0),T(this,"_prerollPlayTime",void 0),T(this,"_wouldBeNewAdPlay",void 0),T(this,"isAdBreak",void 0),T(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){a.isAdBreak=!1,a._currentAdRequestNumber=0,a._currentAdResponseNumber=0,a._adRequests=[],a._adResponses=[],a._adHasPlayed=!1,a._wouldBeNewAdPlay=!0,a._prerollPlayTime=void 0}),_d.forEach(function(r){return t.on(r,a._updateAdData.bind(a))});var i=function(){a.isAdBreak=!1};t.on("adbreakstart",function(){a.isAdBreak=!0}),t.on("play",i),t.on("playing",i),t.on("viewend",i),t.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+a._currentAdRequestNumber++},n),as(a._adRequests,n),X(t.data,"view_ad_request_count"),a.inPrerollPosition()&&(t.data.view_preroll_requested=!0,a._adHasPlayed||X(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+a._currentAdResponseNumber++},n),as(a._adResponses,n);var s=a.findAdRequest(n.ad_request_id);s&&X(t.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),t.on("adplay",function(r,n){a._adHasPlayed=!0,a._wouldBeNewAdPlay&&(a._wouldBeNewAdPlay=!1,X(t.data,"view_ad_played_count")),a.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,a._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,n.viewer_time-a._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-t.data.view_start)),a._prerollPlayTime=n.viewer_time)}),t.on("adplaying",function(r,n){a.inPrerollPosition()&&typeof t.data.view_preroll_load_time>"u"&&typeof a._prerollPlayTime<"u"&&(t.data.view_preroll_load_time=n.viewer_time-a._prerollPlayTime,t.data.view_startup_preroll_load_time=n.viewer_time-a._prerollPlayTime)}),t.on("adclicked",function(r,n){a._wouldBeNewAdPlay||X(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(r,n){a._wouldBeNewAdPlay||X(t.data,"view_ad_skipped_count")}),t.on("adended",function(){a._wouldBeNewAdPlay=!0}),t.on("aderror",function(){a._wouldBeNewAdPlay=!0})}return We(e,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(t){for(var a=0;a<this._adRequests.length;a++)if(this._adRequests[a].ad_request_id===t)return this._adRequests[a]}},{key:"_updateAdData",value:function(t,a){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&a.ad_tag_url){var i=ze(Ia(a.ad_tag_url),2),r=i[0],n=i[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&a.ad_asset_url){var s=ze(Ia(a.ad_asset_url),2),l=s[0],o=s[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=l}}this.pm.data.ad_asset_url=a?.ad_asset_url,this.pm.data.ad_tag_url=a?.ad_tag_url,this.pm.data.ad_creative_id=a?.ad_creative_id,this.pm.data.ad_id=a?.ad_id,this.pm.data.ad_universal_id=a?.ad_universal_id}}]),e})(),yd=gd,is=ce(Re()),Ed=function e(t){te(this,e);var a,i,r=function(){t.disableRebufferTracking||(X(t.data,"view_waiting_rebuffer_count",1),a=J.now(),i=is.default.setInterval(function(){if(a){var u=J.now();X(t.data,"view_waiting_rebuffer_duration",u-a),a=u}},250))},n=function(){t.disableRebufferTracking||a&&(X(t.data,"view_waiting_rebuffer_duration",J.now()-a),a=!1,is.default.clearInterval(i))},s=!1,l=function(){s=!0},o=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),l()}),t.on("pause",o),t.on("seeking",o)},Td=Ed,kd=function e(t){var a=this;te(this,e),T(this,"lastWallClockTime",void 0);var i=function(){a.lastWallClockTime=J.now(),t.on("before*",r)},r=function(n){var s=J.now(),l=a.lastWallClockTime;a.lastWallClockTime=s,s-l>3e4&&(t.emit("devicesleep",{viewer_time:l}),Object.assign(t.data,{viewer_time:l}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:s}),Object.assign(t.data,{viewer_time:s}),t.send("devicewake"))};t.one("playbackheartbeat",i),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",i)})},Ad=kd,ar=ce(Re()),_o=(function(e){return e()})(function(){var e=function(){for(var a=0,i={};a<arguments.length;a++){var r=arguments[a];for(var n in r)i[n]=r[n]}return i};function t(a){function i(r,n,s){var l;if(typeof document<"u"){if(arguments.length>1){if(s=e({path:"/"},i.defaults,s),typeof s.expires=="number"){var o=new Date;o.setMilliseconds(o.getMilliseconds()+s.expires*864e5),s.expires=o}try{l=JSON.stringify(n),/^[\{\[]/.test(l)&&(n=l)}catch{}return a.write?n=a.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(l={});for(var u=document.cookie?document.cookie.split("; "):[],c=/(%[0-9A-Z]{2})+/g,h=0;h<u.length;h++){var m=u[h].split("="),d=m.slice(1).join("=");d.charAt(0)==='"'&&(d=d.slice(1,-1));try{var f=m[0].replace(c,decodeURIComponent);if(d=a.read?a.read(d,f):a(d,f)||d.replace(c,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch{}if(r===f){l=d;break}r||(l[f]=d)}catch{}}return l}}return i.set=i,i.get=function(r){return i.call(i,r)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(r,n){i(r,"",e(n,{expires:-1}))},i.withConverter=t,i}return t(function(){})}),go="muxData",wd=function(e){return Object.entries(e).map(function(t){var a=ze(t,2),i=a[0],r=a[1];return"".concat(i,"=").concat(r)}).join("&")},Rd=function(e){return e.split("&").reduce(function(t,a){var i=ze(a.split("="),2),r=i[0],n=i[1],s=+n,l=n&&s==n?s:n;return t[r]=l,t},{})},yo=function(){var e;try{e=Rd(_o.get(go)||"")}catch{e={}}return e},Eo=function(e){try{_o.set(go,wd(e),{expires:365})}catch{}},Sd=function(){var e=yo();return e.mux_viewer_id=e.mux_viewer_id||Da(),e.msn=e.msn||Math.random(),Eo(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},Cd=function(){var e=yo(),t=J.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=Da(),e.sst=t),e.sex=t+1500*1e3,Eo(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}};function Dd(e,t){var a=t.beaconCollectionDomain,i=t.beaconDomain;if(a)return"https://"+a;e=e||"inferred";var r=i||"litix.io";return e.match(/^[a-z0-9]+$/)?"https://"+e+"."+r:"https://img.litix.io/a.gif"}var Id=ce(Re()),To=function(){var e;switch(ko()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},ko=function(){var e=Id.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};To.getConnectionFromAPI=ko;var xd=To,Od={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},Nd=Ao(Od),Ld={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},rs=Ao(Ld);function Ao(e){var t={};for(var a in e)e.hasOwnProperty(a)&&(t[e[a]]=a);return t}function Tr(e){var t={},a={};return Object.keys(e).forEach(function(i){var r=!1;if(e.hasOwnProperty(i)&&e[i]!==void 0){var n=i.split("_"),s=n[0],l=Nd[s];l||(q.info("Data key word `"+n[0]+"` not expected in "+i),l=s+"_"),n.splice(1).forEach(function(o){o==="url"&&(r=!0),rs[o]?l+=rs[o]:Number.isInteger(Number(o))?l+=o:(q.info("Data key word `"+o+"` not expected in "+i),l+="_"+o+"_")}),r?a[l]=e[i]:t[l]=e[i]}}),Object.assign(t,a)}var yt=ce(Re()),Md=ce(ho()),Pd={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},$d=56*1024,Ud=["hb","requestcompleted","requestfailed","requestcanceled"],Bd="https://img.litix.io",Qe=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=e||Bd,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},Pd,t)};Qe.prototype.queueEvent=function(e,t){var a=Object.assign({},t);return this._eventQueue.length<=this._options.maxQueueLength||e==="eventrateexceeded"?(this._eventQueue.push(a),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};Qe.prototype.flushEvents=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(e&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};Qe.prototype.destroy=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),yt.default.clearTimeout(this._sendTimeout)};Qe.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],Tr({mux_view_message:"event queue truncated"}));var a=this._createPayload(t);wo(this._beaconUrl,a,!0,function(){})};Qe.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var a=this._createPayload(t),i=J.now();wo(this._beaconUrl,a,!1,function(r,n){n?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,q.info("Error sending beacon: "+n)):e._failureCount=0,e._roundTripTime=J.now()-i,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})};Qe.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return e=e*Math.random(),(1+e)*this._options.baseTimeBetweenBeacons};Qe.prototype._startBeaconSending=function(){var e=this;yt.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=yt.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))};Qe.prototype._createPayload=function(e){var t=this,a={transmission_timestamp:Math.round(J.now())};this._roundTripTime&&(a.rtt_ms=Math.round(this._roundTripTime));var i,r,n,s=function(){i=JSON.stringify({metadata:a,events:r||e}),n=i.length/1024},l=function(){return n<=t._options.maxPayloadKBSize};return s(),l()||(q.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(o){return Ud.indexOf(o.e)===-1}),s()),l()||(q.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(o){for(var u in o){var c=o[u],h=50*1024;typeof c=="string"&&c.length>h&&(o[u]=c.substring(0,h))}}),s()),i};var Hd=typeof Md.default.exitPictureInPicture=="function"?function(e){return e.length<=$d}:function(e){return!1},wo=function(e,t,a,i){if(a&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){i();return}if(yt.default.fetch){yt.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:Hd(t)}).then(function(n){return i(null,n.ok?null:"Error")}).catch(function(n){return i(null,n)});return}if(yt.default.XMLHttpRequest){var r=new yt.default.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return i(null,r.status!==200?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}i()},Wd=Qe,Kd=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],qd=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],Yd=["ad_id","ad_creative_id","ad_universal_id"],Fd=["viewstart","error","ended","viewend"],Vd=600*1e3,Gd=(function(){function e(t,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};te(this,e);var r,n,s,l,o,u,c,h,m,d,f,y;T(this,"mux",void 0),T(this,"envKey",void 0),T(this,"options",void 0),T(this,"eventQueue",void 0),T(this,"sampleRate",void 0),T(this,"disableCookies",void 0),T(this,"respectDoNotTrack",void 0),T(this,"previousBeaconData",void 0),T(this,"lastEventTime",void 0),T(this,"rateLimited",void 0),T(this,"pageLevelData",void 0),T(this,"viewerData",void 0),this.mux=t,this.envKey=a,this.options=i,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new Wd(Dd(this.envKey,this.options));var _;this.sampleRate=(_=this.options.sampleRate)!==null&&_!==void 0?_:1;var g;this.disableCookies=(g=this.options.disableCookies)!==null&&g!==void 0?g:!1;var b;this.respectDoNotTrack=(b=this.options.respectDoNotTrack)!==null&&b!==void 0?b:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(l=this.options.platform)===null||l===void 0?void 0:l.product,viewer_device_category:"",viewer_device_manufacturer:(o=this.options.platform)===null||o===void 0?void 0:o.manufacturer,viewer_os_family:(c=this.options.platform)===null||c===void 0||(u=c.os)===null||u===void 0?void 0:u.family,viewer_os_architecture:(m=this.options.platform)===null||m===void 0||(h=m.os)===null||h===void 0?void 0:h.architecture,viewer_os_version:(f=this.options.platform)===null||f===void 0||(d=f.os)===null||d===void 0?void 0:d.version,viewer_connection_type:xd(),page_url:ar.default===null||ar.default===void 0||(y=ar.default.location)===null||y===void 0?void 0:y.href},this.viewerData=this.disableCookies?{}:Sd()}return We(e,[{key:"send",value:function(t,a){if(!(!t||!(a!=null&&a.view_id))){if(this.respectDoNotTrack&&yr())return q.info("Not sending `"+t+"` because Do Not Track is enabled");if(!a||typeof a!="object")return q.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:Cd(),r=un(Si({},this.pageLevelData,a,i,this.viewerData),{event:t,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,l=this._deduplicateBeaconData(t,r),o=Tr(l);if(this.lastEventTime=this.mux.utils.now(),s)return q.info("Not sending event due to sample rate restriction",t,r,o);if(this.envKey||q.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",t,r,o),!this.rateLimited){if(q.info("Sending event",t,r,o),this.rateLimited=!this.eventQueue.queueEvent(t,o),this.mux.WINDOW_UNLOADING&&t==="viewend")this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&t==="hb"?this.eventQueue.flushEvents(!0):Fd.indexOf(t)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return r.event="eventrateexceeded",o=Tr(r),this.eventQueue.queueEvent(r.event,o),q.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(t,a){var i=this,r={},n=a.view_id;if(n==="-1"||t==="viewstart"||t==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=Vd)r=Si({},a),n&&(this.previousBeaconData=r),n&&t==="viewend"&&(this.previousBeaconData=null);else{var s=t.indexOf("request")===0;Object.entries(a).forEach(function(l){var o=ze(l,2),u=o[0],c=o[1];i.previousBeaconData&&(c!==i.previousBeaconData[u]||Kd.indexOf(u)>-1||i.objectHasChanged(s,u,c,i.previousBeaconData[u])||i.eventRequiresKey(t,u))&&(r[u]=c,i.previousBeaconData[u]=c)})}return r}},{key:"objectHasChanged",value:function(t,a,i,r){return!t||a.indexOf("request_")!==0?!1:a==="request_response_headers"||typeof i!="object"||typeof r!="object"?!0:Object.keys(i||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(t,a){return!!(t==="renditionchange"&&a.indexOf("video_source_")===0||Yd.includes(a)&&qd.includes(t))}}]),e})(),jd=function e(t){te(this,e);var a=0,i=0,r=0,n=0,s=0,l=0,o=0,u=function(m,d){var f=d.request_start,y=d.request_response_start,_=d.request_response_end,g=d.request_bytes_loaded;n++;var b,p;if(y?(b=y-(f??0),p=(_??0)-y):p=(_??0)-(f??0),p>0&&g&&g>0){var k=g/p*8e3;s++,i+=g,r+=p,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,k),t.data.view_average_request_throughput=i/r*8e3,t.data.view_request_count=n,b>0&&(a+=b,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,b),t.data.view_average_request_latency=a/s)}},c=function(m,d){n++,l++,t.data.view_request_count=n,t.data.view_request_failed_count=l},h=function(m,d){n++,o++,t.data.view_request_count=n,t.data.view_request_canceled_count=o};t.on("requestcompleted",u),t.on("requestfailed",c),t.on("requestcanceled",h)},Zd=jd,zd=3600*1e3,Qd=function e(t){var a=this;te(this,e),T(this,"_lastEventTime",void 0),t.on("before*",function(i,r){var n=r.viewer_time,s=J.now(),l=a._lastEventTime;if(a._lastEventTime=s,l&&s-l>zd){var o=Object.keys(t.data).reduce(function(c,h){return h.indexOf("video_")===0?Object.assign(c,T({},h,t.data[h])):c},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var u=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:n},o)),t.playbackHeartbeat._playheadShouldBeProgressing=u,t.playbackHeartbeat._playheadShouldBeProgressing&&i.type!=="play"&&i.type!=="adbreakstart"&&(t.emit("play",{viewer_time:n}),i.type!=="playing"&&t.emit("playing",{viewer_time:n}))}})},Xd=Qd,Jd=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],ec=new Set(["requestcompleted","requestfailed","requestcanceled"]),tc=(function(e){Nu(a,e);var t=Pu(a);function a(i,r,n){te(this,a);var s;s=t.call(this),T(D(s),"DOM_CONTENT_LOADED_EVENT_END",void 0),T(D(s),"NAVIGATION_START",void 0),T(D(s),"_destroyed",void 0),T(D(s),"_heartBeatTimeout",void 0),T(D(s),"adTracker",void 0),T(D(s),"dashjs",void 0),T(D(s),"data",void 0),T(D(s),"disablePlayheadRebufferTracking",void 0),T(D(s),"disableRebufferTracking",void 0),T(D(s),"errorTracker",void 0),T(D(s),"errorTranslator",void 0),T(D(s),"emitTranslator",void 0),T(D(s),"getAdData",void 0),T(D(s),"getPlayheadTime",void 0),T(D(s),"getStateData",void 0),T(D(s),"stateDataTranslator",void 0),T(D(s),"hlsjs",void 0),T(D(s),"id",void 0),T(D(s),"longResumeTracker",void 0),T(D(s),"minimumRebufferDuration",void 0),T(D(s),"mux",void 0),T(D(s),"playbackEventDispatcher",void 0),T(D(s),"playbackHeartbeat",void 0),T(D(s),"playbackHeartbeatTime",void 0),T(D(s),"playheadTime",void 0),T(D(s),"seekingTracker",void 0),T(D(s),"sustainedRebufferThreshold",void 0),T(D(s),"watchTimeTracker",void 0),T(D(s),"currentFragmentPDT",void 0),T(D(s),"currentFragmentStart",void 0),s.DOM_CONTENT_LOADED_EVENT_END=Ri.domContentLoadedEventEnd(),s.NAVIGATION_START=Ri.navigationStart();var l={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(m){return m},emitTranslator:function(){for(var m=arguments.length,d=new Array(m),f=0;f<m;f++)d[f]=arguments[f];return d},stateDataTranslator:function(m){return m}};s.mux=i,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(l,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),q.level=n.debug?gt.DEBUG:gt.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new Gd(i,n.data.env_key,n),s.data={player_instance_id:Da(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var o=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(D(s));if(s.on("viewinit",function(m,d){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,d),this._initializeViewData(),this.one("play",o),this.one("adbreakstart",o)}),s.on("videochange",function(m,d){this._resetView(d)}),s.on("programchange",function(m,d){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(d,{view_program_changed:!0})),o(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(m,d){this.currentFragmentPDT=d.currentFragmentPDT,this.currentFragmentStart=d.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var u=function(){var m=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",m&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",u,!1);var c=function(m){m.persisted||s.destroy()};window.addEventListener("pagehide",c,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",u),window.removeEventListener("pagehide",c)})}s.on("playerready",function(m,d){Object.assign(this.data,d)}),Jd.forEach(function(m){s.on(m,function(d,f){m.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,f),this._sanitizeData()}),s.on("after"+m,function(){(m!=="error"||this.errorTracker.viewErrored)&&this.send(m)})}),s.on("viewend",function(m,d){Object.assign(s.data,d)});var h=function(m){var d=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=d-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",h),s.longResumeTracker=new Xd(D(s)),s.errorTracker=new ed(D(s)),new Ad(D(s)),s.seekingTracker=new bd(D(s)),s.playheadTime=new sd(D(s)),s.playbackHeartbeat=new Xu(D(s)),new pd(D(s)),s.watchTimeTracker=new ad(D(s)),new rd(D(s)),s.adTracker=new yd(D(s)),new dd(D(s)),new ld(D(s)),new md(D(s)),new Td(D(s)),new Zd(D(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return We(a,[{key:"emit",value:function(i,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),l=[i,s];if(this.emitTranslator)try{l=this.emitTranslator(i,s)}catch(o){this.mux.log.warn("Exception in emit translator callback.",o)}l!=null&&l.length&&(n=Ka(Gt(a.prototype),"emit",this)).call.apply(n,[this].concat(ge(l)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(i){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(u){r[u]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=ze(Ia(r.video_source_url),2),l=s[0],o=s[1];r.video_source_domain=o,r.video_source_hostname=l}delete r.ad_request_id,this.playbackEventDispatcher.send(i,r),this.data.view_sequence_number++,this.data.player_sequence_number++,ec.has(i)||this._restartHeartBeat(),i==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(i){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",i)}},{key:"_updateStateData",value:function(){var i=this.getStateData();if(typeof this.stateDataTranslator=="function")try{i=this.stateDataTranslator(i)}catch(r){this.mux.log.warn("Exception in stateDataTranslator translator callback.",r)}Object.assign(this.data,i),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var i=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"];r.forEach(function(s){var l=parseInt(i.data[s],10);i.data[s]=isNaN(l)?void 0:l});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(i.data[s]){var l=i.data[s].toLowerCase();(l.indexOf("data:")===0||l.indexOf("blob:")===0)&&(i.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var i=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete i.data[r]})}},{key:"_resetViewData",value:function(){var i=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete i.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var i=this,r=this.data.view_id=Da(),n=function(){r===i.data.view_id&&X(i.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var i=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){i.data.player_is_paused||i.emit("hb")},1e4)}},{key:"addHLSJS",value:function(i){if(!i.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=i.hlsjs,Ku(this.mux,this.id,i.hlsjs,{},i.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(qu(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(i){if(!i.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=i.dashjs,Gu(this.mux,this.id,i.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(ju(this.dashjs),this.dashjs=void 0)}}]),a})(zu),ac=tc,ea=ce(ho());function ic(){return ea.default&&!!(ea.default.fullscreenElement||ea.default.webkitFullscreenElement||ea.default.mozFullScreenElement||ea.default.msFullscreenElement)}var rc=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],nc={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function sc(e,t,a){var i=ze(wi(t),3),r=i[0],n=i[1],s=i[2],l=e.log,o=e.utils.getComputedStyle,u=e.utils.secondsToMs,c={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return l.error("The element of `"+n+"` was not a media element.")}else return l.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,l.warn("Already monitoring this video element, replacing existing event listeners"));var h={getPlayheadTime:function(){return u(r.currentTime)},getStateData:function(){var d,f,y,_=((d=(f=this).getPlayheadTime)===null||d===void 0?void 0:d.call(f))||u(r.currentTime),g=this.hlsjs&&this.hlsjs.url,b=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),p={player_is_paused:r.paused,player_width:parseInt(o(r,"width")),player_height:parseInt(o(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:ic(),video_poster_url:r.poster,video_source_url:g||b||r.currentSrc,video_source_duration:u(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(y=r.getVideoPlaybackQuality)===null||y===void 0?void 0:y.call(r).droppedVideoFrames};if(r.getStartDate&&_>0){var k=r.getStartDate();if(k&&typeof k.getTime=="function"&&k.getTime()){var C=k.getTime();if(p.player_program_time=C+_,r.seekable.length>0){var I=C+r.seekable.end(r.seekable.length-1);p.player_live_edge_program_time=I}}}return p}};a=Object.assign(c,a,h),a.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},a.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(d,f){e.emit(n,d,f)},r.mux.updateData=function(d){r.mux.emit("hb",d)};var m=function(){l.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(d){r.removeEventListener(d,r.mux.listeners[d],!1)}),delete r.mux.listeners,r.mux.destroy=m,r.mux.swapElement=m,r.mux.emit=m,r.mux.addHLSJS=m,r.mux.addDashJS=m,r.mux.removeHLSJS=m,r.mux.removeDashJS=m,r.mux.updateData=m,r.mux.setEmitTranslator=m,r.mux.setStateDataTranslator=m,r.mux.setGetPlayheadTime=m,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(d){var f=ze(wi(d),3),y=f[0],_=f[1],g=f[2];if(y){if(g!=="video"&&g!=="audio")return e.log.error("The element of `"+_+"` was not a media element.")}else return e.log.error("No element was found with the `"+_+"` query selector.");y.muxId=r.muxId,delete r.muxId,y.mux=y.mux||{},y.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(y.mux.listeners).forEach(function(b){r.removeEventListener(b,y.mux.listeners[b],!1),y.addEventListener(b,y.mux.listeners[b],!1)}),y.mux.swapElement=r.mux.swapElement,y.mux.destroy=r.mux.destroy,delete r.mux,r=y},r.mux.addHLSJS=function(d){e.addHLSJS(n,d)},r.mux.addDashJS=function(d){e.addDashJS(n,d)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(d){e.setEmitTranslator(n,d)},r.mux.setStateDataTranslator=function(d){e.setStateDataTranslator(n,d)},r.mux.setGetPlayheadTime=function(d){d||(d=a.getPlayheadTime),e.setGetPlayheadTime(n,d)},e.init(n,a),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},rc.forEach(function(d){d==="error"&&!a.automaticErrorTracking||(r.mux.listeners[d]=function(){var f={};if(d==="error"){if(!r.error||r.error.code===1)return;f.player_error_code=r.error.code,f.player_error_message=nc[r.error.code]||r.error.message}e.emit(n,d,f)},r.addEventListener(d,r.mux.listeners[d],!1))})}function oc(e,t,a,i){var r=i;if(e&&typeof e[t]=="function")try{r=e[t].apply(e,a)}catch(n){q.info("safeCall error",n)}return r}var Ea=ce(Re()),Ot;Ea.default&&Ea.default.WeakMap&&(Ot=new WeakMap);function lc(e,t){if(!e||!t||!Ea.default||typeof Ea.default.getComputedStyle!="function")return"";var a;return Ot&&Ot.has(e)&&(a=Ot.get(e)),a||(a=Ea.default.getComputedStyle(e,null),Ot&&Ot.set(e,a)),a.getPropertyValue(t)}function uc(e){return Math.floor(e*1e3)}var ct={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},qi=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};qi.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf(`
`);t>-1;t=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)};qi.prototype.processLine=function(e){var t=e.indexOf(":"),a=hc(e,t),i=a[0],r=a.length===2?cn(a[1]):void 0;if(i[0]!=="#")this.currentUri.uri=i,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(i){case ct.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case ct.PART_INF:{ir(this.manifest,a),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case ct.SERVER_CONTROL:{ir(this.manifest,a),this.setHoldBack();break}case ct.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case ct.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case ct.VERSION:{ir(this.manifest,a);break}case ct.SESSION_DATA:{var l=pc(a[1]),o=bo(l);Object.assign(this.manifest.sessionData,o)}}};qi.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,a=e.targetDuration,i=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=a&&a*3,l=i&&i*2;a&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),i&&!t.hasOwnProperty(n)&&(t[n]=i*3),i&&t[n]<l&&(t[n]=l)}};var ir=function(e,t){var a=Ro(t[0].replace("#EXT-X-","")),i;mc(t[1])?(i={},i=Object.assign(cc(t[1]),i)):i=cn(t[1]),e[a]=i},Ro=function(e){return e.toLowerCase().replace(/-(\w)/g,function(t){return t[1].toUpperCase()})},cn=function(e){if(e.toLowerCase()==="yes"||e.toLowerCase()==="no")return e.toLowerCase()==="yes";var t=e.indexOf(":")!==-1?e:parseFloat(e);return isNaN(t)?e:t},dc=function(e){var t={},a=e.split("=");if(a.length>1){var i=Ro(a[0]);t[i]=cn(a[1])}return t},cc=function(e){for(var t=e.split(","),a={},i=0;t.length>i;i++){var r=t[i],n=dc(r);a=Object.assign(n,a)}return a},mc=function(e){return e.indexOf("=")>-1},hc=function(e,t){return t===-1?[e]:[e.substring(0,t),e.substring(t+1)]},pc=function(e){var t={};if(e){var a=e.search(","),i=e.slice(0,a),r=e.slice(a+1),n=[i,r];return n.forEach(function(s,l){for(var o=s.replace(/['"]+/g,"").split("="),u=0;u<o.length;u++)o[u]==="DATA-ID"&&(t["DATA-ID"]=o[1-u]),o[u]==="VALUE"&&(t.VALUE=o[1-u])}),{data:t}}},vc=qi,fc={safeCall:oc,safeIncrement:X,getComputedStyle:lc,secondsToMs:uc,assign:Object.assign,headersStringToObject:dn,cdnHeadersToRequestId:Ci,extractHostnameAndDomain:Ia,extractHostname:Te,manifestParser:vc,generateShortID:vo,generateUUID:Da,now:J.now,findMediaElement:wi},bc=fc,_c={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},gc=_c,yc="mux-embed",Ec="5.9.0",Tc="2.1",Z={},ut=function(e){var t=arguments;typeof e=="string"?ut.hasOwnProperty(e)?ya.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),ut[e].apply(null,t)},0):q.warn("`"+e+"` is an unknown task"):typeof e=="function"?ya.default.setTimeout(function(){e(ut)},0):q.warn("`"+e+"` is invalid.")},kc={loaded:J.now(),NAME:yc,VERSION:Ec,API_VERSION:Tc,PLAYER_TRACKED:!1,monitor:function(e,t){return sc(ut,e,t)},destroyMonitor:function(e){var t=ze(wi(e),1),a=t[0];a&&a.mux&&typeof a.mux.destroy=="function"?a.mux.destroy():q.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var a=_e(e);Z[a]?Z[a].addHLSJS(t):q.error("A monitor for `"+a+"` has not been initialized.")},addDashJS:function(e,t){var a=_e(e);Z[a]?Z[a].addDashJS(t):q.error("A monitor for `"+a+"` has not been initialized.")},removeHLSJS:function(e){var t=_e(e);Z[t]?Z[t].removeHLSJS():q.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=_e(e);Z[t]?Z[t].removeDashJS():q.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){yr()&&t&&t.respectDoNotTrack&&q.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var a=_e(e);Z[a]=new ac(ut,a,t)},emit:function(e,t,a){var i=_e(e);Z[i]?(Z[i].emit(t,a),t==="destroy"&&delete Z[i]):q.error("A monitor for `"+i+"` has not been initialized.")},updateData:function(e,t){var a=_e(e);Z[a]?Z[a].emit("hb",t):q.error("A monitor for `"+a+"` has not been initialized.")},setEmitTranslator:function(e,t){var a=_e(e);Z[a]?Z[a].emitTranslator=t:q.error("A monitor for `"+a+"` has not been initialized.")},setStateDataTranslator:function(e,t){var a=_e(e);Z[a]?Z[a].stateDataTranslator=t:q.error("A monitor for `"+a+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var a=_e(e);Z[a]?Z[a].getPlayheadTime=t:q.error("A monitor for `"+a+"` has not been initialized.")},checkDoNotTrack:yr,log:q,utils:bc,events:gc,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(ut,kc);typeof ya.default<"u"&&typeof ya.default.addEventListener=="function"&&ya.default.addEventListener("pagehide",function(e){e.persisted||(ut.WINDOW_UNLOADING=!0)},!1);var mn=ut;/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/var L=ou,Y={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},S={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},Yi=e=>e===Y.VIDEO?"playback":e,at=class la extends Error{constructor(t,a=la.MEDIA_ERR_CUSTOM,i,r){var n;super(t),this.name="MediaError",this.code=a,this.context=r,this.fatal=i??(a>=la.MEDIA_ERR_NETWORK&&a<=la.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=la.defaultMessages[this.code])!=null?n:"")}};at.MEDIA_ERR_ABORTED=1,at.MEDIA_ERR_NETWORK=2,at.MEDIA_ERR_DECODE=3,at.MEDIA_ERR_SRC_NOT_SUPPORTED=4,at.MEDIA_ERR_ENCRYPTED=5,at.MEDIA_ERR_CUSTOM=100,at.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var A=at,Ac=e=>e==null,hn=(e,t)=>Ac(t)?!1:e in t,kr={ANY:"any",MUTED:"muted"},U={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},$e={MSE:"mse",NATIVE:"native"},ua={HEADER:"header",QUERY:"query",NONE:"none"},Di=Object.values(ua),je={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},ns={HLS:je.M3U8};[...Object.values(je)];var vv={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},fv={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},bv={DESCENDING:"desc"},wc="en",Ar={code:wc},z=(e,t,a,i,r=e)=>{r.addEventListener(t,a,i),e.addEventListener("teardown",()=>{r.removeEventListener(t,a)},{once:!0})};function Rc(e,t,a){t&&a>t&&(a=t);for(let i=0;i<e.length;i++)if(e.start(i)<=a&&e.end(i)>=a)return!0;return!1}var pn=e=>{let t=e.indexOf("?");if(t<0)return[e];let a=e.slice(0,t),i=e.slice(t);return[a,i]},Fi=e=>{let{type:t}=e;if(t){let a=t.toUpperCase();return hn(a,ns)?ns[a]:t}return Sc(e)},So=e=>e==="VOD"?U.ON_DEMAND:U.LIVE,Co=e=>e==="EVENT"?Number.POSITIVE_INFINITY:e==="VOD"?Number.NaN:0,Sc=e=>{let{src:t}=e;if(!t)return"";let a="";try{a=new URL(t).pathname}catch{console.error("invalid url")}let i=a.lastIndexOf(".");if(i<0)return Dc(e)?je.M3U8:"";let r=a.slice(i+1).toUpperCase();return hn(r,je)?je[r]:""},Cc="mux.com",Dc=({src:e,customDomain:t=Cc})=>{let a;try{a=new URL(`${e}`)}catch{return!1}let i=a.protocol==="https:",r=a.hostname===`stream.${t}`.toLowerCase(),n=a.pathname.split("/"),s=n.length===2,l=!(n!=null&&n[1].includes("."));return i&&r&&s&&l},Ht=e=>{let t=(e??"").split(".")[1];if(t)try{let a=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(a).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}},Ic=({exp:e},t=Date.now())=>!e||e*1e3<t,xc=({sub:e},t)=>e!==t,Oc=({aud:e},t)=>!e,Nc=({aud:e},t)=>e!==t,Do="en";function R(e,t=!0){var a,i;let r=t&&(i=(a=Ar)==null?void 0:a[e])!=null?i:e,n=t?Ar.code:Do;return new Lc(r,n)}var Lc=class{constructor(t,a=(i=>(i=Ar)!=null?i:Do)()){this.message=t,this.locale=a}format(t){return this.message.replace(/\{(\w+)\}/g,(a,i)=>{var r;return(r=t[i])!=null?r:""})}toString(){return this.message}},Mc=Object.values(kr),ss=e=>typeof e=="boolean"||typeof e=="string"&&Mc.includes(e),Pc=(e,t,a)=>{let{autoplay:i}=e,r=!1,n=!1,s=ss(i)?i:!!i,l=()=>{r||z(t,"playing",()=>{r=!0},{once:!0})};if(l(),z(t,"loadstart",()=>{r=!1,l(),rr(t,s)},{once:!0}),z(t,"loadstart",()=>{a||(e.streamType&&e.streamType!==U.UNKNOWN?n=e.streamType===U.LIVE:n=!Number.isFinite(t.duration)),rr(t,s)},{once:!0}),a&&a.once(L.Events.LEVEL_LOADED,(o,u)=>{var c;e.streamType&&e.streamType!==U.UNKNOWN?n=e.streamType===U.LIVE:n=(c=u.details.live)!=null?c:!1}),!s){let o=()=>{!n||Number.isFinite(e.startTime)||(a!=null&&a.liveSyncPosition?t.currentTime=a.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};a&&z(t,"play",()=>{t.preload==="metadata"?a.once(L.Events.LEVEL_UPDATED,o):o()},{once:!0})}return o=>{r||(s=ss(o)?o:!!o,rr(t,s))}},rr=(e,t)=>{if(!t)return;let a=e.muted,i=()=>e.muted=a;switch(t){case kr.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(i)});break;case kr.MUTED:e.muted=!0,e.play().catch(i);break;default:e.play().catch(()=>{});break}},$c=({preload:e,src:t},a,i)=>{let r=h=>{h!=null&&["","none","metadata","auto"].includes(h)?a.setAttribute("preload",h):a.removeAttribute("preload")};if(!i)return r(e),r;let n=!1,s=!1,l=i.config.maxBufferLength,o=i.config.maxBufferSize,u=h=>{r(h);let m=h??a.preload;s||m==="none"||(m==="metadata"?(i.config.maxBufferLength=1,i.config.maxBufferSize=1):(i.config.maxBufferLength=l,i.config.maxBufferSize=o),c())},c=()=>{!n&&t&&(n=!0,i.loadSource(t))};return z(a,"play",()=>{s=!0,i.config.maxBufferLength=l,i.config.maxBufferSize=o,c()},{once:!0}),u(e),u};function Uc(e,t){var a;if(!("videoTracks"in e))return;let i=new WeakMap;t.on(L.Events.MANIFEST_PARSED,function(o,u){l();let c=e.addVideoTrack("main");c.selected=!0;for(let[h,m]of u.levels.entries()){let d=c.addRendition(m.url[0],m.width,m.height,m.videoCodec,m.bitrate);i.set(m,`${h}`),d.id=`${h}`}}),t.on(L.Events.AUDIO_TRACKS_UPDATED,function(o,u){s();for(let c of u.audioTracks){let h=c.default?"main":"alternative",m=e.addAudioTrack(h,c.name,c.lang);m.id=`${c.id}`,c.default&&(m.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var o;let u=+((o=[...e.audioTracks].find(h=>h.enabled))==null?void 0:o.id),c=t.audioTracks.map(h=>h.id);u!=t.audioTrack&&c.includes(u)&&(t.audioTrack=u)}),t.on(L.Events.LEVELS_UPDATED,function(o,u){var c;let h=e.videoTracks[(c=e.videoTracks.selectedIndex)!=null?c:0];if(!h)return;let m=u.levels.map(d=>i.get(d));for(let d of e.videoRenditions)d.id&&!m.includes(d.id)&&h.removeRendition(d)});let r=o=>{let u=o.target.selectedIndex;u!=t.nextLevel&&(t.nextLevel=u)};(a=e.videoRenditions)==null||a.addEventListener("change",r);let n=()=>{for(let o of e.videoTracks)e.removeVideoTrack(o)},s=()=>{for(let o of e.audioTracks)e.removeAudioTrack(o)},l=()=>{n(),s()};t.once(L.Events.DESTROYING,l)}var nr=e=>"time"in e?e.time:e.startTime;function Bc(e,t){t.on(L.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var l,o;let u=(l=s.subtitleTrack)!=null?l:s.closedCaptions,c=t.subtitleTracks.findIndex(({lang:m,name:d,type:f})=>m==u?.lang&&d===s.label&&f.toLowerCase()===s.kind),h=((o=s._id)!=null?o:s.default)?"default":`${s.kind}${c}`;vn(e,s.kind,s.label,u?.lang,h,s.default)})});let a=()=>{if(!t.subtitleTracks.length)return;let r=Array.from(e.textTracks).find(l=>l.id&&l.mode==="showing"&&["subtitles","captions"].includes(l.kind));if(!r)return;let n=t.subtitleTracks[t.subtitleTrack],s=n?n.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||r?.id!==s){let l=t.subtitleTracks.findIndex(({lang:o,name:u,type:c,default:h})=>r.id==="default"&&h||o==r.language&&u===r.label&&c.toLowerCase()===r.kind);t.subtitleTrack=l}r?.id===s&&r.cues&&Array.from(r.cues).forEach(l=>{r.addCue(l)})};e.textTracks.addEventListener("change",a),t.on(L.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let l=e.textTracks.getTrackById(n);if(!l)return;let o=l.mode==="disabled";o&&(l.mode="hidden"),s.forEach(u=>{var c;(c=l.cues)!=null&&c.getCueById(u.id)||l.addCue(u)}),o&&(l.mode="disabled")}),t.once(L.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",a),e.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let i=()=>{Array.from(e.textTracks).forEach(r=>{var n,s;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let l="track";r.kind&&(l+=`[kind="${r.kind}"]`),r.label&&(l+=`[label="${r.label}"]`);let o=e.querySelector(l),u=(s=o?.getAttribute("src"))!=null?s:"";o?.removeAttribute("src"),setTimeout(()=>{o?.setAttribute("src",u)},0)}r.mode!=="hidden"&&(r.mode="hidden")}})};t.once(L.Events.MANIFEST_LOADED,i),t.once(L.Events.MEDIA_ATTACHED,i)}function vn(e,t,a,i,r,n){let s=document.createElement("track");return s.kind=t,s.label=a,i&&(s.srclang=i),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function Hc(e,t){let a=Array.prototype.find.call(e.querySelectorAll("track"),i=>i.track===t);a?.remove()}function Ma(e,t,a){var i;return(i=Array.from(e.querySelectorAll("track")).find(r=>r.track.label===t&&r.track.kind===a))==null?void 0:i.track}async function Io(e,t,a,i){let r=Ma(e,a,i);return r||(r=vn(e,i,a),r.mode="hidden",await new Promise(n=>setTimeout(()=>n(void 0),0))),r.mode!=="hidden"&&(r.mode="hidden"),[...t].sort((n,s)=>nr(s)-nr(n)).forEach(n=>{var s,l;let o=n.value,u=nr(n);if("endTime"in n&&n.endTime!=null)r?.addCue(new VTTCue(u,n.endTime,i==="chapters"?o:JSON.stringify(o??null)));else{let c=Array.prototype.findIndex.call(r?.cues,f=>f.startTime>=u),h=(s=r?.cues)==null?void 0:s[c],m=h?h.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,d=(l=r?.cues)==null?void 0:l[c-1];d&&(d.endTime=u),r?.addCue(new VTTCue(u,m,i==="chapters"?o:JSON.stringify(o??null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var fn="cuepoints",xo=Object.freeze({label:fn});async function Oo(e,t,a=xo){return Io(e,t,a.label,"metadata")}var wr=e=>({time:e.startTime,value:JSON.parse(e.text)});function Wc(e,t={label:fn}){let a=Ma(e,t.label,"metadata");return a!=null&&a.cues?Array.from(a.cues,i=>wr(i)):[]}function No(e,t={label:fn}){var a,i;let r=Ma(e,t.label,"metadata");if(!((a=r?.activeCues)!=null&&a.length))return;if(r.activeCues.length===1)return wr(r.activeCues[0]);let{currentTime:n}=e,s=Array.prototype.find.call((i=r.activeCues)!=null?i:[],({startTime:l,endTime:o})=>l<=n&&o>n);return wr(s||r.activeCues[0])}async function Kc(e,t=xo){return new Promise(a=>{z(e,"loadstart",async()=>{let i=await Oo(e,[],t);z(e,"cuechange",()=>{let r=No(e);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});e.dispatchEvent(n)}},{},i),a(i)})})}var bn="chapters",Lo=Object.freeze({label:bn}),Rr=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function Mo(e,t,a=Lo){return Io(e,t,a.label,"chapters")}function qc(e,t={label:bn}){var a;let i=Ma(e,t.label,"chapters");return(a=i?.cues)!=null&&a.length?Array.from(i.cues,r=>Rr(r)):[]}function Po(e,t={label:bn}){var a,i;let r=Ma(e,t.label,"chapters");if(!((a=r?.activeCues)!=null&&a.length))return;if(r.activeCues.length===1)return Rr(r.activeCues[0]);let{currentTime:n}=e,s=Array.prototype.find.call((i=r.activeCues)!=null?i:[],({startTime:l,endTime:o})=>l<=n&&o>n);return Rr(s||r.activeCues[0])}async function Yc(e,t=Lo){return new Promise(a=>{z(e,"loadstart",async()=>{let i=await Mo(e,[],t);z(e,"cuechange",()=>{let r=Po(e);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});e.dispatchEvent(n)}},{},i),a(i)})})}function Fc(e,t){if(t){let a=t.playingDate;if(a!=null)return new Date(a.getTime()-e.currentTime*1e3)}return typeof e.getStartDate=="function"?e.getStartDate():new Date(NaN)}function Vc(e,t){if(t&&t.playingDate)return t.playingDate;if(typeof e.getStartDate=="function"){let a=e.getStartDate();return new Date(a.getTime()+e.currentTime*1e3)}return new Date(NaN)}var Ta={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},Gc=e=>{if(e===Y.VIDEO)return Ta.VIDEO;if(e===Y.DRM)return Ta.DRM},jc=(e,t)=>{var a,i;let r=Yi(e),n=`${r}Token`;return(a=t.tokens)!=null&&a[r]?(i=t.tokens)==null?void 0:i[r]:hn(n,t)?t[n]:void 0},Ii=(e,t,a,i,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,l;if(n){let g=R("Your device appears to be offline",r),b,p=A.MEDIA_ERR_NETWORK,k=new A(g,p,!1,b);return k.errorCategory=t,k.muxCode=S.NETWORK_OFFLINE,k.data=e,k}let o="status"in e?e.status:e.code,u=Date.now(),c=A.MEDIA_ERR_NETWORK;if(o===200)return;let h=Yi(t),m=jc(t,a),d=Gc(t),[f]=pn((s=a.playbackId)!=null?s:"");if(!o||!f)return;let y=Ht(m);if(m&&!y){let g=R("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:h}),b=R("Compact JWT string: {token}",r).format({token:m}),p=new A(g,c,!0,b);return p.errorCategory=t,p.muxCode=S.NETWORK_TOKEN_MALFORMED,p.data=e,p}if(o>=500){let g=new A("",c,i??!0);return g.errorCategory=t,g.muxCode=S.NETWORK_UNKNOWN_ERROR,g}if(o===403)if(y){if(Ic(y,u)){let g={timeStyle:"medium",dateStyle:"medium"},b=R("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:h}),p=R("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",g).format((l=y.exp)!=null?l:0*1e3),currentDate:new Intl.DateTimeFormat("en",g).format(u)}),k=new A(b,c,!0,p);return k.errorCategory=t,k.muxCode=S.NETWORK_TOKEN_EXPIRED,k.data=e,k}if(xc(y,f)){let g=R("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:h}),b=R("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:h,playbackId:f,tokenPlaybackId:y.sub}),p=new A(g,c,!0,b);return p.errorCategory=t,p.muxCode=S.NETWORK_TOKEN_SUB_MISMATCH,p.data=e,p}if(Oc(y)){let g=R("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:h}),b=R("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:h,expectedAud:d}),p=new A(g,c,!0,b);return p.errorCategory=t,p.muxCode=S.NETWORK_TOKEN_AUD_MISSING,p.data=e,p}if(Nc(y,d)){let g=R("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:h}),b=R("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:h,expectedAud:d,aud:y.aud}),p=new A(g,c,!0,b);return p.errorCategory=t,p.muxCode=S.NETWORK_TOKEN_AUD_MISMATCH,p.data=e,p}}else{let g=R("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:h,category:t}),b=R("Specified playback ID: {playbackId}",r).format({playbackId:f}),p=new A(g,c,i??!0,b);return p.errorCategory=t,p.muxCode=S.NETWORK_TOKEN_MISSING,p.data=e,p}if(o===412){let g=R("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),b=R("Specified playback ID: {playbackId}",r).format({playbackId:f}),p=new A(g,c,i??!0,b);return p.errorCategory=t,p.muxCode=S.NETWORK_NOT_READY,p.streamType=a.streamType===U.LIVE?"live":a.streamType===U.ON_DEMAND?"on-demand":"unknown",p.data=e,p}if(o===404){let g=R("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),b=R("Specified playback ID: {playbackId}",r).format({playbackId:f}),p=new A(g,c,i??!0,b);return p.errorCategory=t,p.muxCode=S.NETWORK_NOT_FOUND,p.data=e,p}if(o===400){let g=R("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),b=R("Specified playback ID: {playbackId}",r).format({playbackId:f}),p=new A(g,c,i??!0,b);return p.errorCategory=t,p.muxCode=S.NETWORK_INVALID_URL,p.data=e,p}let _=new A("",c,i??!0);return _.errorCategory=t,_.muxCode=S.NETWORK_UNKNOWN_ERROR,_.data=e,_},os=L.DefaultConfig.capLevelController,$o=class Uo extends os{constructor(t){super(t)}get levels(){var t;return(t=this.hls.levels)!=null?t:[]}getValidLevels(t){return this.levels.filter((a,i)=>this.isLevelAllowed(a)&&i<=t)}getMaxLevel(t){let a=super.getMaxLevel(t),i=this.getValidLevels(t);if(!i[a])return a;let r=Math.min(i[a].width,i[a].height),n=Uo.minMaxResolution;return r>=n?a:os.getMaxLevelByMediaSize(i,n*(16/9),n)}};$o.minMaxResolution=720;var Zc=$o,zc=Zc,qa={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},Qc=e=>{if(e.includes("fps"))return qa.FAIRPLAY;if(e.includes("playready"))return qa.PLAYREADY;if(e.includes("widevine"))return qa.WIDEVINE},Xc=e=>{let t=e.split(`
`).find((a,i,r)=>i&&r[i-1].startsWith("#EXT-X-STREAM-INF"));return fetch(t).then(a=>a.status!==200?Promise.reject(a):a.text())},Jc=e=>{let t=e.split(`
`).filter(i=>i.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let a={};for(let i of t){let r=tm(i),n=r["DATA-ID"];n&&(a[n]={...r})}return{sessionData:a}},em=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function tm(e){let t=[...e.matchAll(em)];return Object.fromEntries(t.map(([,a,i])=>[a,i]))}var am=e=>{var t,a,i;let r=e.split(`
`),n=(a=((t=r.find(u=>u.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?t:"").split(":")[1])==null?void 0:a.trim(),s=So(n),l=Co(n),o;if(s===U.LIVE){let u=r.find(c=>c.startsWith("#EXT-X-PART-INF"));if(u)o=+u.split(":")[1].split("=")[1]*2;else{let c=r.find(m=>m.startsWith("#EXT-X-TARGETDURATION")),h=(i=c?.split(":"))==null?void 0:i[1];o=+(h??6)*3}}return{streamType:s,targetLiveWindow:l,liveEdgeStartOffset:o}},im=async(e,t)=>{if(t===je.MP4)return{streamType:U.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===je.M3U8){let a=await fetch(e);if(!a.ok)return Promise.reject(a);let i=await a.text(),r=await Xc(i);return{...Jc(i),...am(r)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},rm=async(e,t,a=Fi({src:e}))=>{var i,r,n,s;let{streamType:l,targetLiveWindow:o,liveEdgeStartOffset:u,sessionData:c}=await im(e,a),h=c?.["com.apple.hls.chapters"];(h!=null&&h.URI||h!=null&&h.VALUE.toLocaleLowerCase().startsWith("http"))&&_n((i=h.URI)!=null?i:h.VALUE,t),((r=j.get(t))!=null?r:{}).liveEdgeStartOffset=u,((n=j.get(t))!=null?n:{}).targetLiveWindow=o,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=j.get(t))!=null?s:{}).streamType=l,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},_n=async(e,t)=>{var a,i;try{let r=await fetch(e);if(!r.ok)throw new Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!((a=n?.[0])!=null&&a.metadata))return;for(let o of n[0].metadata)o.key&&o.value&&(s[o.key]=o.value);((i=j.get(t))!=null?i:{}).metadata=s;let l=new CustomEvent("muxmetadata");t.dispatchEvent(l)}catch(r){console.error(r)}},nm=e=>{var t;let a=e.type,i=So(a),r=Co(a),n,s=!!((t=e.partList)!=null&&t.length);return i===U.LIVE&&(n=s?e.partTarget*2:e.targetduration*3),{streamType:i,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},sm=(e,t,a)=>{var i,r,n,s,l,o,u,c;let{streamType:h,targetLiveWindow:m,liveEdgeStartOffset:d,lowLatency:f}=nm(e);if(h===U.LIVE){f?(a.config.backBufferLength=(i=a.userConfig.backBufferLength)!=null?i:4,a.config.maxFragLookUpTolerance=(r=a.userConfig.maxFragLookUpTolerance)!=null?r:.001,a.config.abrBandWidthUpFactor=(n=a.userConfig.abrBandWidthUpFactor)!=null?n:a.config.abrBandWidthFactor):a.config.backBufferLength=(s=a.userConfig.backBufferLength)!=null?s:8;let y=Object.freeze({get length(){return t.seekable.length},start(_){return t.seekable.start(_)},end(_){var g;return _>this.length||_<0||Number.isFinite(t.duration)?t.seekable.end(_):(g=a.liveSyncPosition)!=null?g:t.seekable.end(_)}});((l=j.get(t))!=null?l:{}).seekable=y}((o=j.get(t))!=null?o:{}).liveEdgeStartOffset=d,((u=j.get(t))!=null?u:{}).targetLiveWindow=m,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((c=j.get(t))!=null?c:{}).streamType=h,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ls,us,om=(us=(ls=globalThis?.navigator)==null?void 0:ls.userAgent)!=null?us:"",ds,cs,ms,lm=(ms=(cs=(ds=globalThis?.navigator)==null?void 0:ds.userAgentData)==null?void 0:cs.platform)!=null?ms:"",um=om.toLowerCase().includes("android")||["x11","android"].some(e=>lm.toLowerCase().includes(e)),j=new WeakMap,Ze="mux.com",hs,ps,Bo=(ps=(hs=L).isSupported)==null?void 0:ps.call(hs),dm=um,gn=()=>mn.utils.now(),cm=mn.utils.generateUUID,Sr=({playbackId:e,customDomain:t=Ze,maxResolution:a,minResolution:i,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:l,assetEndTime:o,playbackToken:u,tokens:{playback:c=u}={},extraSourceParams:h={}}={})=>{if(!e)return;let[m,d=""]=pn(e),f=new URL(`https://stream.${t}/${m}.m3u8${d}`);return c||f.searchParams.has("token")?(f.searchParams.forEach((y,_)=>{_!="token"&&f.searchParams.delete(_)}),c&&f.searchParams.set("token",c)):(a&&f.searchParams.set("max_resolution",a),i&&(f.searchParams.set("min_resolution",i),a&&+a.slice(0,-1)<+i.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",i,"maxResolution",a)),r&&f.searchParams.set("rendition_order",r),n&&f.searchParams.set("program_start_time",`${n}`),s&&f.searchParams.set("program_end_time",`${s}`),l&&f.searchParams.set("asset_start_time",`${l}`),o&&f.searchParams.set("asset_end_time",`${o}`),Object.entries(h).forEach(([y,_])=>{_!=null&&f.searchParams.set(y,_)})),f.toString()},Vi=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},yn=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},mm=e=>{var t,a,i;return(t=e?.metadata)!=null&&t.video_id?e.metadata.video_id:Go(e)&&(i=(a=Vi(e.playbackId))!=null?a:yn(e.src))!=null?i:e.src},Ho=e=>{var t;return(t=j.get(e))==null?void 0:t.error},hm=e=>{var t;return(t=j.get(e))==null?void 0:t.metadata},Cr=e=>{var t,a;return(a=(t=j.get(e))==null?void 0:t.streamType)!=null?a:U.UNKNOWN},pm=e=>{var t,a;return(a=(t=j.get(e))==null?void 0:t.targetLiveWindow)!=null?a:Number.NaN},En=e=>{var t,a;return(a=(t=j.get(e))==null?void 0:t.seekable)!=null?a:e.seekable},vm=e=>{var t;let a=(t=j.get(e))==null?void 0:t.liveEdgeStartOffset;if(typeof a!="number")return Number.NaN;let i=En(e);return i.length?i.end(i.length-1)-a:Number.NaN},Tn=.034,fm=(e,t,a=Tn)=>Math.abs(e-t)<=a,Wo=(e,t,a=Tn)=>e>t||fm(e,t,a),bm=(e,t=Tn)=>e.paused&&Wo(e.currentTime,e.duration,t),Ko=(e,t)=>{var a,i,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?(i=(a=t.levels)==null?void 0:a[t.currentLevel])==null?void 0:i.details:(r=t.levels.find(h=>!!h.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let l=s[s.length-1];if(e.currentTime<=l.start)return!1;let o=l.start+l.duration/2,u=e.buffered.start(e.buffered.length-1),c=e.buffered.end(e.buffered.length-1);return o>u&&o<c},qo=(e,t)=>e.ended||e.loop?e.ended:t&&Ko(e,t)?!0:bm(e),_m=(e,t,a)=>{Yo(t,a,e);let{metadata:i={}}=e,{view_session_id:r=cm()}=i,n=mm(e);i.view_session_id=r,i.video_id=n,e.metadata=i;let s=c=>{var h;(h=t.mux)==null||h.emit("hb",{view_drm_type:c})};e.drmTypeCb=s,j.set(t,{retryCount:0});let l=gm(e,t),o=$c(e,t,l);e!=null&&e.muxDataKeepSession&&t!=null&&t.mux&&!t.mux.deleted?l&&t.mux.addHLSJS({hlsjs:l,Hls:l?L:void 0}):wm(e,t,l),Rm(e,t,l),Kc(t),Yc(t);let u=Pc(e,t,l);return{engine:l,setAutoplay:u,setPreload:o}},Yo=(e,t,a)=>{let i=t?.engine;e!=null&&e.mux&&!e.mux.deleted&&(a!=null&&a.muxDataKeepSession?i&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),i&&(i.detachMedia(),i.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",Zo),e.removeEventListener("error",Dr),e.removeEventListener("durationchange",jo),j.delete(e),e.dispatchEvent(new Event("teardown")))};function Fo(e,t){var a;let i=Fi(e);if(i!==je.M3U8)return!0;let r=!i||((a=t.canPlayType(i))!=null?a:!0),{preferPlayback:n}=e,s=n===$e.MSE,l=n===$e.NATIVE;return r&&(l||!(Bo&&(s||dm)))}var gm=(e,t)=>{let{debug:a,streamType:i,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:l={}}=e,o=Fi(e)===je.M3U8,u=Fo(e,t);if(o&&!u&&Bo){let c={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},h=ym(i),m=Em(e),d=[ua.QUERY,ua.HEADER].includes(s)?{useHeaders:s===ua.HEADER,sessionId:n?.view_session_id,contentId:n?.video_id}:void 0,f=new L({debug:a,startPosition:r,cmcd:d,xhrSetup:(y,_)=>{var g,b;if(s&&s!==ua.QUERY)return;let p=new URL(_);if(!p.searchParams.has("CMCD"))return;let k=((b=(g=p.searchParams.get("CMCD"))==null?void 0:g.split(","))!=null?b:[]).filter(C=>C.startsWith("sid")||C.startsWith("cid")).join(",");p.searchParams.set("CMCD",k),y.open("GET",p)},capLevelController:zc,...c,...h,...m,...l});return f.on(L.Events.MANIFEST_PARSED,async function(y,_){var g,b;let p=(g=_.sessionData)==null?void 0:g["com.apple.hls.chapters"];(p!=null&&p.URI||p!=null&&p.VALUE.toLocaleLowerCase().startsWith("http"))&&_n((b=p?.URI)!=null?b:p?.VALUE,t)}),f}},ym=e=>e===U.LIVE?{backBufferLength:8}:{},Em=e=>{let{tokens:{drm:t}={},playbackId:a,drmTypeCb:i}=e,r=Vi(a);return!t||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:Ya(e,"fairplay"),serverCertificateUrl:Vo(e,"fairplay")},"com.widevine.alpha":{licenseUrl:Ya(e,"widevine")},"com.microsoft.playready":{licenseUrl:Ya(e,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(l=>{var o;let u=(o=l.videoCapabilities)==null?void 0:o.map(c=>({...c,robustness:"HW_SECURE_ALL"}));return{...l,videoCapabilities:u}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(l=>{let o=Qc(n);return i?.(o),l}))}},Tm=async e=>{let t=await fetch(e);return t.status!==200?Promise.reject(t):await t.arrayBuffer()},km=async(e,t)=>{let a=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});if(a.status!==200)return Promise.reject(a);let i=await a.arrayBuffer();return new Uint8Array(i)},Am=(e,t)=>{z(t,"encrypted",async a=>{try{let i=a.initDataType;if(i!=="skd"){console.error(`Received unexpected initialization data type "${i}"`);return}if(!t.mediaKeys){let o=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(c=>{var h;return(h=e.drmTypeCb)==null||h.call(e,qa.FAIRPLAY),c}).catch(()=>{let c=R("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),h=new A(c,A.MEDIA_ERR_ENCRYPTED,!0);h.errorCategory=Y.DRM,h.muxCode=S.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,fe(t,h)});if(!o)return;let u=await o.createMediaKeys();try{let c=await Tm(Vo(e,"fairplay")).catch(h=>{if(h instanceof Response){let m=Ii(h,Y.DRM,e);return console.error("mediaError",m?.message,m?.context),m?Promise.reject(m):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(h)});await u.setServerCertificate(c).catch(()=>{let h=R("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),m=new A(h,A.MEDIA_ERR_ENCRYPTED,!0);return m.errorCategory=Y.DRM,m.muxCode=S.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(m)})}catch(c){fe(t,c);return}await t.setMediaKeys(u)}let r=a.initData;if(r==null){console.error(`Could not start encrypted playback due to missing initData in ${a.type} event`);return}let n=t.mediaKeys.createSession();n.addEventListener("keystatuseschange",()=>{n.keyStatuses.forEach(o=>{let u;if(o==="internal-error"){let c=R("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");u=new A(c,A.MEDIA_ERR_ENCRYPTED,!0),u.errorCategory=Y.DRM,u.muxCode=S.ENCRYPTED_CDM_ERROR}else if(o==="output-restricted"||o==="output-downscaled"){let c=R("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");u=new A(c,A.MEDIA_ERR_ENCRYPTED,!1),u.errorCategory=Y.DRM,u.muxCode=S.ENCRYPTED_OUTPUT_RESTRICTED}u&&fe(t,u)})});let s=await Promise.all([n.generateRequest(i,r).catch(()=>{let o=R("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),u=new A(o,A.MEDIA_ERR_ENCRYPTED,!0);u.errorCategory=Y.DRM,u.muxCode=S.ENCRYPTED_GENERATE_REQUEST_FAILED,fe(t,u)}),new Promise(o=>{n.addEventListener("message",u=>{o(u.message)},{once:!0})})]).then(([,o])=>o),l=await km(s,Ya(e,"fairplay")).catch(o=>{if(o instanceof Response){let u=Ii(o,Y.DRM,e);return console.error("mediaError",u?.message,u?.context),u?Promise.reject(u):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(o)});await n.update(l).catch(()=>{let o=R("Failed to update DRM license. This may be an issue with the player or your protected content."),u=new A(o,A.MEDIA_ERR_ENCRYPTED,!0);return u.errorCategory=Y.DRM,u.muxCode=S.ENCRYPTED_UPDATE_LICENSE_FAILED,Promise.reject(u)})}catch(i){fe(t,i);return}})},Ya=({playbackId:e,tokens:{drm:t}={},customDomain:a=Ze},i)=>{let r=Vi(e);return`https://license.${a.toLocaleLowerCase().endsWith(Ze)?a:Ze}/license/${i}/${r}?token=${t}`},Vo=({playbackId:e,tokens:{drm:t}={},customDomain:a=Ze},i)=>{let r=Vi(e);return`https://license.${a.toLocaleLowerCase().endsWith(Ze)?a:Ze}/appcert/${i}/${r}?token=${t}`},Go=({playbackId:e,src:t,customDomain:a})=>{if(e)return!0;if(typeof t!="string")return!1;let i=window?.location.href,r=new URL(t,i).hostname.toLocaleLowerCase();return r.includes(Ze)||!!a&&r.includes(a.toLocaleLowerCase())},wm=(e,t,a)=>{var i;let{envKey:r,disableTracking:n,muxDataSDK:s=mn,muxDataSDKOptions:l={}}=e,o=Go(e);if(!n&&(r||o)){let{playerInitTime:u,playerSoftwareName:c,playerSoftwareVersion:h,beaconCollectionDomain:m,debug:d,disableCookies:f}=e,y={...e.metadata,video_title:((i=e?.metadata)==null?void 0:i.video_title)||void 0},_=g=>typeof g.player_error_code=="string"?!1:typeof e.errorTranslator=="function"?e.errorTranslator(g):g;s.monitor(t,{debug:d,beaconCollectionDomain:m,hlsjs:a,Hls:a?L:void 0,automaticErrorTracking:!1,errorTranslator:_,disableCookies:f,...l,data:{...r?{env_key:r}:{},player_software_name:c,player_software:c,player_software_version:h,player_init_time:u,...y}})}},Rm=(e,t,a)=>{var i,r;let n=Fo(e,t),{src:s,customDomain:l=Ze}=e,o=()=>{t.ended||e.disablePseudoEnded||!qo(t,a)||(Ko(t,a)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},u,c,h=()=>{let m=En(t),d,f;m.length>0&&(d=m.start(0),f=m.end(0)),(c!==f||u!==d)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),u=d,c=f};if(z(t,"durationchange",h),t&&n){let m=Fi(e);if(typeof s=="string"){if(s.endsWith(".mp4")&&s.includes(l)){let y=yn(s),_=new URL(`https://stream.${l}/${y}/metadata.json`);_n(_.toString(),t)}let d=()=>{if(Cr(t)!==U.LIVE||Number.isFinite(t.duration))return;let y=setInterval(h,1e3);t.addEventListener("teardown",()=>{clearInterval(y)},{once:!0}),z(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(y)})},f=async()=>rm(s,t,m).then(d).catch(y=>{if(y instanceof Response){let _=Ii(y,Y.VIDEO,e);if(_){fe(t,_);return}}});if(t.preload==="none"){let y=()=>{f(),t.removeEventListener("loadedmetadata",_)},_=()=>{f(),t.removeEventListener("play",y)};z(t,"play",y,{once:!0}),z(t,"loadedmetadata",_,{once:!0})}else f();(i=e.tokens)!=null&&i.drm?Am(e,t):z(t,"encrypted",()=>{let y=R("Attempting to play DRM-protected content without providing a DRM token."),_=new A(y,A.MEDIA_ERR_ENCRYPTED,!0);_.errorCategory=Y.DRM,_.muxCode=S.ENCRYPTED_MISSING_TOKEN,fe(t,_)},{once:!0}),t.setAttribute("src",s),e.startTime&&(((r=j.get(t))!=null?r:{}).startTime=e.startTime,t.addEventListener("durationchange",jo,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",Zo),t.addEventListener("error",Dr),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(d=>{d.remove()})},{once:!0}),z(t,"pause",o),z(t,"seeked",o),z(t,"play",()=>{t.ended||Wo(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else a&&s?(a.once(L.Events.LEVEL_LOADED,(m,d)=>{sm(d.details,t,a),h(),Cr(t)===U.LIVE&&!Number.isFinite(t.duration)&&(a.on(L.Events.LEVEL_UPDATED,h),z(t,"durationchange",()=>{Number.isFinite(t.duration)&&a.off(L.Events.LEVELS_UPDATED,h)}))}),a.on(L.Events.ERROR,(m,d)=>{var f,y;let _=Sm(d,e);if(_.muxCode===S.NETWORK_NOT_READY){let g=(f=j.get(t))!=null?f:{},b=(y=g.retryCount)!=null?y:0;if(b<6){let p=b===0?5e3:6e4,k=new A(`Retrying in ${p/1e3} seconds...`,_.code,_.fatal);Object.assign(k,_),fe(t,k),setTimeout(()=>{g.retryCount=b+1,d.details==="manifestLoadError"&&d.url&&a.loadSource(d.url)},p);return}else{g.retryCount=0;let p=new A('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',_.code,_.fatal);Object.assign(p,_),fe(t,p);return}}fe(t,_)}),a.on(L.Events.MANIFEST_LOADED,()=>{let m=j.get(t);m&&m.error&&(m.error=null,m.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",Dr),z(t,"waiting",o),Uc(e,a),Bc(t,a),a.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function jo(e){var t;let a=e.target,i=(t=j.get(a))==null?void 0:t.startTime;if(i&&Rc(a.seekable,a.duration,i)){let r=a.preload==="auto";r&&(a.preload="none"),a.currentTime=i,r&&(a.preload="auto")}}async function Zo(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(t!=null&&t.error))return;let{message:a,code:i}=t.error,r=new A(a,i);if(t.src&&i===A.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=Ho(t))!=null?n:t.error;s?.code===A.MEDIA_ERR_SRC_NOT_SUPPORTED&&fe(t,r)},500);return}if(t.src&&(i!==A.MEDIA_ERR_DECODE||i!==void 0))try{let{status:n}=await fetch(t.src);r.data={response:{code:n}}}catch{}fe(t,r)}function fe(e,t){var a;t.fatal&&(((a=j.get(e))!=null?a:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function Dr(e){var t,a;if(!(e instanceof CustomEvent)||!(e.detail instanceof A))return;let i=e.target,r=e.detail;!r||!r.fatal||(((t=j.get(i))!=null?t:{}).error=r,(a=i.mux)==null||a.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var Sm=(e,t)=>{var a,i,r;console.error("getErrorFromHlsErrorData()",e);let n={[L.ErrorTypes.NETWORK_ERROR]:A.MEDIA_ERR_NETWORK,[L.ErrorTypes.MEDIA_ERROR]:A.MEDIA_ERR_DECODE,[L.ErrorTypes.KEY_SYSTEM_ERROR]:A.MEDIA_ERR_ENCRYPTED},s=c=>[L.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,L.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(c.details)?A.MEDIA_ERR_NETWORK:n[c.type],l=c=>{if(c.type===L.ErrorTypes.KEY_SYSTEM_ERROR)return Y.DRM;if(c.type===L.ErrorTypes.NETWORK_ERROR)return Y.VIDEO},o,u=s(e);if(u===A.MEDIA_ERR_NETWORK&&e.response){let c=(a=l(e))!=null?a:Y.VIDEO;o=(i=Ii(e.response,c,t,e.fatal))!=null?i:new A("",u,e.fatal)}else if(u===A.MEDIA_ERR_ENCRYPTED)if(e.details===L.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let c=R("Attempting to play DRM-protected content without providing a DRM token.");o=new A(c,A.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=Y.DRM,o.muxCode=S.ENCRYPTED_MISSING_TOKEN}else if(e.details===L.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let c=R("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");o=new A(c,A.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=Y.DRM,o.muxCode=S.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(e.details===L.ErrorDetails.KEY_SYSTEM_NO_SESSION){let c=R("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");o=new A(c,A.MEDIA_ERR_ENCRYPTED,!0),o.errorCategory=Y.DRM,o.muxCode=S.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(e.details===L.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let c=R("Failed to update DRM license. This may be an issue with the player or your protected content.");o=new A(c,A.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=Y.DRM,o.muxCode=S.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(e.details===L.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let c=R("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");o=new A(c,A.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=Y.DRM,o.muxCode=S.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(e.details===L.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let c=R("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");o=new A(c,A.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=Y.DRM,o.muxCode=S.ENCRYPTED_CDM_ERROR}else if(e.details===L.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let c=R("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");o=new A(c,A.MEDIA_ERR_ENCRYPTED,!1),o.errorCategory=Y.DRM,o.muxCode=S.ENCRYPTED_OUTPUT_RESTRICTED}else o=new A(e.error.message,A.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=Y.DRM,o.muxCode=S.ENCRYPTED_ERROR;else o=new A("",u,e.fatal);return o.context||(o.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${(r=e.err)==null?void 0:r.message}
`:""}`),o.data=e,o},zo=e=>{throw TypeError(e)},kn=(e,t,a)=>t.has(e)||zo("Cannot "+a),ie=(e,t,a)=>(kn(e,t,"read from private field"),a?a.call(e):t.get(e)),be=(e,t,a)=>t.has(e)?zo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),pe=(e,t,a,i)=>(kn(e,t,"write to private field"),t.set(e,a),a),sr=(e,t,a)=>(kn(e,t,"access private method"),a),Cm=()=>{try{return"0.27.0"}catch{}return"UNKNOWN"},Dm=Cm(),Im=()=>Dm,xm=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,v={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},Om=Object.values(v),vs=Im(),fs="mux-video",Oe,da,Fa,ca,Va,Ga,ja,Za,za,ma,ha,Qa,Nm=class extends Pa{constructor(){super(),be(this,ha),be(this,Oe),be(this,da),be(this,Fa),be(this,ca,{}),be(this,Va,{}),be(this,Ga),be(this,ja),be(this,Za),be(this,za),be(this,ma,""),pe(this,Fa,gn()),this.nativeEl.addEventListener("muxmetadata",e=>{var t;let a=hm(this.nativeEl),i=(t=this.metadata)!=null?t:{};this.metadata={...a,...i},a?.["com.mux.video.branding"]==="mux-free-plan"&&(pe(this,ma,"default"),this.updateLogo())})}static get NAME(){return fs}static get VERSION(){return vs}static get observedAttributes(){var e;return[...Om,...(e=Pa.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?xm:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var t;return`
      ${Pa.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((t=e[v.LOGO])!=null?t:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(v.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Di.includes(e)?this.setAttribute(v.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${Di.join()}`):this.removeAttribute(v.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(v.PLAYER_INIT_TIME)?+this.getAttribute(v.PLAYER_INIT_TIME):ie(this,Fa)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(v.PLAYER_INIT_TIME):this.setAttribute(v.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=ie(this,Za))!=null?e:fs}set playerSoftwareName(e){pe(this,Za,e)}get playerSoftwareVersion(){var e;return(e=ie(this,ja))!=null?e:vs}set playerSoftwareVersion(e){pe(this,ja,e)}get _hls(){var e;return(e=ie(this,Oe))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=Ho(this.nativeEl))!=null?e:null}get errorTranslator(){return ie(this,za)}set errorTranslator(e){pe(this,za,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(v.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(v.TYPE,e):this.removeAttribute(v.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(v.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(v.DEBUG,""):this.removeAttribute(v.DEBUG))}get disableTracking(){return this.hasAttribute(v.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(v.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(v.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(v.DISABLE_COOKIES,""):this.removeAttribute(v.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(v.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(v.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(v.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(v.START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(v.START_TIME):this.setAttribute(v.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(v.PLAYBACK_ID)?this.getAttribute(v.PLAYBACK_ID):(e=yn(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(v.PLAYBACK_ID,e):this.removeAttribute(v.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(v.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(v.MAX_RESOLUTION,e):this.removeAttribute(v.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(v.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(v.MIN_RESOLUTION,e):this.removeAttribute(v.MIN_RESOLUTION))}get renditionOrder(){var e;return(e=this.getAttribute(v.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(v.RENDITION_ORDER,e):this.removeAttribute(v.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(v.PROGRAM_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){e==null?this.removeAttribute(v.PROGRAM_START_TIME):this.setAttribute(v.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(v.PROGRAM_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){e==null?this.removeAttribute(v.PROGRAM_END_TIME):this.setAttribute(v.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(v.ASSET_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){e==null?this.removeAttribute(v.ASSET_START_TIME):this.setAttribute(v.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(v.ASSET_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){e==null?this.removeAttribute(v.ASSET_END_TIME):this.setAttribute(v.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(v.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(v.CUSTOM_DOMAIN,e):this.removeAttribute(v.CUSTOM_DOMAIN))}get drmToken(){var e;return(e=this.getAttribute(v.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(v.DRM_TOKEN,e):this.removeAttribute(v.DRM_TOKEN))}get playbackToken(){var e,t,a,i;if(this.hasAttribute(v.PLAYBACK_TOKEN))return(e=this.getAttribute(v.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(v.PLAYBACK_ID)){let[,r]=pn((t=this.playbackId)!=null?t:"");return(a=new URLSearchParams(r).get("token"))!=null?a:void 0}if(this.src)return(i=new URLSearchParams(this.src).get("token"))!=null?i:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(v.PLAYBACK_TOKEN,e):this.removeAttribute(v.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(v.PLAYBACK_TOKEN),t=this.getAttribute(v.DRM_TOKEN);return{...ie(this,Va),...e!=null?{playback:e}:{},...t!=null?{drm:t}:{}}}set tokens(e){pe(this,Va,e??{})}get ended(){return qo(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(v.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(v.ENV_KEY,e):this.removeAttribute(v.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(v.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(v.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(v.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(v.STREAM_TYPE))!=null?e:Cr(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(v.STREAM_TYPE,e):this.removeAttribute(v.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(v.TARGET_LIVE_WINDOW)?+this.getAttribute(v.TARGET_LIVE_WINDOW):pm(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(v.TARGET_LIVE_WINDOW):this.setAttribute(v.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(v.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,i=(e=this.nativeEl.seekable.end(0))!=null?e:0,r=(t=this.nativeEl.seekable.start(0))!=null?t:0;return Math.max(r,i-a)}return vm(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(v.LIVE_EDGE_OFFSET))return+this.getAttribute(v.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(v.LIVE_EDGE_OFFSET):this.setAttribute(v.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return En(this.nativeEl)}async addCuePoints(e){return Oo(this.nativeEl,e)}get activeCuePoint(){return No(this.nativeEl)}get cuePoints(){return Wc(this.nativeEl)}async addChapters(e){return Mo(this.nativeEl,e)}get activeChapter(){return Po(this.nativeEl)}get chapters(){return qc(this.nativeEl)}getStartDate(){return Fc(this.nativeEl,this._hls)}get currentPdt(){return Vc(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(v.PREFER_PLAYBACK);if(e===$e.MSE||e===$e.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===$e.MSE||e===$e.NATIVE?this.setAttribute(v.PREFER_PLAYBACK,e):this.removeAttribute(v.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![v.METADATA_URL].includes(e)).reduce((e,t)=>{let a=this.getAttribute(t);return a!=null&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...ie(this,ca)}}set metadata(e){pe(this,ca,e??{}),this.mux&&this.mux.emit("hb",ie(this,ca))}get _hlsConfig(){return ie(this,Ga)}set _hlsConfig(e){pe(this,Ga,e)}get logo(){var e;return(e=this.getAttribute(v.LOGO))!=null?e:ie(this,ma)}set logo(e){e?this.setAttribute(v.LOGO,e):this.removeAttribute(v.LOGO)}load(){pe(this,Oe,_m(this,this.nativeEl,ie(this,Oe)))}unload(){Yo(this.nativeEl,ie(this,Oe),this),pe(this,Oe,void 0)}attributeChangedCallback(e,t,a){var i,r;switch(Pa.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,a),e){case v.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case v.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let n=!!t,s=!!a;!n&&s?sr(this,ha,Qa).call(this):n&&!s?this.unload():n&&s&&(this.unload(),sr(this,ha,Qa).call(this));break}case"autoplay":if(a===t)break;(i=ie(this,Oe))==null||i.setAutoplay(this.autoplay);break;case"preload":if(a===t)break;(r=ie(this,Oe))==null||r.setPreload(a);break;case v.PLAYBACK_ID:this.src=Sr(this);break;case v.DEBUG:{let n=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=n);break}case v.METADATA_URL:a&&fetch(a).then(n=>n.json()).then(n=>this.metadata=n).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case v.STREAM_TYPE:(a==null||a!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case v.TARGET_LIVE_WINDOW:(a==null||a!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case v.LOGO:(a==null||a!==t)&&this.updateLogo();break}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let t=this.constructor.getLogoHTML(ie(this,ma)||this.logo);e.innerHTML=t}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.nativeEl&&this.src&&!ie(this,Oe)&&sr(this,ha,Qa).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Oe=new WeakMap,da=new WeakMap,Fa=new WeakMap,ca=new WeakMap,Va=new WeakMap,Ga=new WeakMap,ja=new WeakMap,Za=new WeakMap,za=new WeakMap,ma=new WeakMap,ha=new WeakSet,Qa=async function(){ie(this,da)||(await pe(this,da,Promise.resolve()),pe(this,da,null),this.load())};const At=new WeakMap;class or extends Error{}class Lm extends Error{}const Mm=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],Pm=globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{const a=t.deref();a&&e(a)})}}:Set;function $m(e){globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?e():customElements.whenDefined("google-cast-button").then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(e)}}function Um(){return globalThis.chrome}function Bm(){const e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;const t=document.createElement("script");t.src=e,document.head.append(t)}function lt(){return globalThis.cast?.framework?.CastContext.getInstance()}function An(){return lt()?.getCurrentSession()}function wn(){return An()?.getSessionObj().media[0]}function Hm(e){return new Promise((t,a)=>{wn().editTracksInfo(e,t,a)})}function Wm(e){return new Promise((t,a)=>{wn().getStatus(e,t,a)})}function bs(e){return lt().setOptions({...Qo(),...e})}function Qo(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function Km(e){if(!e)return;const t=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,a=e.match(t);return a?a[1]:null}function qm(e){const t=e.split(`
`),a=[];for(let i=0;i<t.length;i++)if(t[i].trim().startsWith("#EXT-X-STREAM-INF")){const n=t[i+1]?t[i+1].trim():"";n&&!n.startsWith("#")&&a.push(n)}return a}function Ym(e){return e.split(`
`).find(i=>!i.trim().startsWith("#")&&i.trim()!=="")}async function Fm(e){try{const a=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return Mm.some(i=>a===i)}catch(t){return console.error("Error while trying to get the Content-Type of the manifest",t),!1}}async function Vm(e){try{const t=await(await fetch(e)).text();let a=t;const i=qm(t);if(i.length>0){const s=new URL(i[0],e).toString();a=await(await fetch(s)).text()}const r=Ym(a);return Km(r)}catch(t){console.error("Error while trying to parse the manifest playlist",t);return}}const Xa=new Pm,tt=new WeakSet;let ee;$m(()=>{if(!globalThis.chrome?.cast?.isAvailable){console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);return}ee||(ee=cast.framework,lt().addEventListener(ee.CastContextEventType.CAST_STATE_CHANGED,e=>{Xa.forEach(t=>At.get(t).onCastStateChanged?.(e))}),lt().addEventListener(ee.CastContextEventType.SESSION_STATE_CHANGED,e=>{Xa.forEach(t=>At.get(t).onSessionStateChanged?.(e))}),Xa.forEach(e=>At.get(e).init?.()))});let _s=0;class Gm extends EventTarget{#t;#s;#a;#i;#e="disconnected";#r=!1;#o=new Set;#c=new WeakMap;constructor(t){super(),this.#t=t,Xa.add(this),At.set(this,{init:()=>this.#u(),onCastStateChanged:()=>this.#l(),onSessionStateChanged:()=>this.#p(),getCastPlayer:()=>this.#n}),this.#u()}get#n(){if(tt.has(this.#t))return this.#a}get state(){return this.#e}async watchAvailability(t){if(this.#t.disableRemotePlayback)throw new or("disableRemotePlayback attribute is present.");return this.#c.set(t,++_s),this.#o.add(t),queueMicrotask(()=>t(this.#h())),_s}async cancelWatchAvailability(t){if(this.#t.disableRemotePlayback)throw new or("disableRemotePlayback attribute is present.");t?this.#o.delete(t):this.#o.clear()}async prompt(){if(this.#t.disableRemotePlayback)throw new or("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new Lm("The RemotePlayback API is disabled on this platform.");const t=tt.has(this.#t);tt.add(this.#t),bs(this.#t.castOptions),Object.entries(this.#i).forEach(([a,i])=>{this.#a.controller.addEventListener(a,i)});try{await lt().requestSession()}catch(a){if(t||tt.delete(this.#t),a==="cancel")return;throw new Error(a)}At.get(this.#t)?.loadOnPrompt?.()}#m(){tt.has(this.#t)&&(Object.entries(this.#i).forEach(([t,a])=>{this.#a.controller.removeEventListener(t,a)}),tt.delete(this.#t),this.#t.muted=this.#a.isMuted,this.#t.currentTime=this.#a.savedPlayerState.currentTime,this.#a.savedPlayerState.isPaused===!1&&this.#t.play())}#h(){const t=lt()?.getCastState();return t&&t!=="NO_DEVICES_AVAILABLE"}#l(){const t=lt().getCastState();if(tt.has(this.#t)&&t==="CONNECTING"&&(this.#e="connecting",this.dispatchEvent(new Event("connecting"))),!this.#r&&t?.includes("CONNECT")){this.#r=!0;for(let a of this.#o)a(!0)}else if(this.#r&&(!t||t==="NO_DEVICES_AVAILABLE")){this.#r=!1;for(let a of this.#o)a(!1)}}async#p(){const{SESSION_RESUMED:t}=ee.SessionState;if(lt().getSessionState()===t&&this.#t.castSrc===wn()?.media.contentId){tt.add(this.#t),Object.entries(this.#i).forEach(([a,i])=>{this.#a.controller.addEventListener(a,i)});try{await Wm(new chrome.cast.media.GetStatusRequest)}catch(a){console.error(a)}this.#i[ee.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#i[ee.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#u(){!ee||this.#s||(this.#s=!0,bs(this.#t.castOptions),this.#t.textTracks.addEventListener("change",()=>this.#d()),this.#l(),this.#a=new ee.RemotePlayer,new ee.RemotePlayerController(this.#a),this.#i={[ee.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:t})=>{t===!0?(this.#e="connected",this.dispatchEvent(new Event("connect"))):(this.#m(),this.#e="disconnected",this.dispatchEvent(new Event("disconnect")))},[ee.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#t.dispatchEvent(new Event("durationchange"))},[ee.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#t.dispatchEvent(new Event("volumechange"))},[ee.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#t.dispatchEvent(new Event("volumechange"))},[ee.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#n?.isMediaLoaded&&this.#t.dispatchEvent(new Event("timeupdate"))},[ee.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#t.dispatchEvent(new Event("resize"))},[ee.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#t.dispatchEvent(new Event(this.paused?"pause":"play"))},[ee.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#n?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#t.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#n?.playerState]))},[ee.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#n?.isMediaLoaded&&(await Promise.resolve(),this.#v())}})}#v(){this.#d()}async#d(){if(!this.#n)return;const a=(this.#a.mediaInfo?.tracks??[]).filter(({type:h})=>h===chrome.cast.media.TrackType.TEXT),i=[...this.#t.textTracks].filter(({kind:h})=>h==="subtitles"||h==="captions"),r=a.map(({language:h,name:m,trackId:d})=>{const{mode:f}=i.find(y=>y.language===h&&y.label===m)??{};return f?{mode:f,trackId:d}:!1}).filter(Boolean),s=r.filter(({mode:h})=>h!=="showing").map(({trackId:h})=>h),l=r.find(({mode:h})=>h==="showing"),o=An()?.getSessionObj().media[0]?.activeTrackIds??[];let u=o;if(o.length&&(u=u.filter(h=>!s.includes(h))),l?.trackId&&(u=[...u,l.trackId]),u=[...new Set(u)],!((h,m)=>h.length===m.length&&h.every(d=>m.includes(d)))(o,u))try{const h=new chrome.cast.media.EditTracksInfoRequest(u);await Hm(h)}catch(h){console.error(h)}}}const jm=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#t={paused:!1};#s=Qo();#a;#i;get remote(){return this.#i?this.#i:Um()?(this.disableRemotePlayback||Bm(),At.set(this,{loadOnPrompt:()=>this.#r()}),this.#i=new Gm(this)):super.remote}get#e(){return At.get(this.remote)?.getCastPlayer?.()}attributeChangedCallback(a,i,r){if(super.attributeChangedCallback(a,i,r),a==="cast-receiver"&&r){this.#s.receiverApplicationId=r;return}if(this.#e)switch(a){case"cast-stream-type":case"cast-src":this.load();break}}async#r(){this.#t.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(a){console.error(a)}}async load(){if(!this.#e)return super.load();const a=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);a.customData=this.castCustomData;const i=[...this.querySelectorAll("track")].filter(({kind:l,src:o})=>o&&(l==="subtitles"||l==="captions")),r=[];let n=0;if(i.length&&(a.tracks=i.map(l=>{const o=++n;r.length===0&&l.track.mode==="showing"&&r.push(o);const u=new chrome.cast.media.Track(o,chrome.cast.media.TrackType.TEXT);return u.trackContentId=l.src,u.trackContentType="text/vtt",u.subtype=l.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,u.name=l.label,u.language=l.srclang,u})),this.castStreamType==="live"?a.streamType=chrome.cast.media.StreamType.LIVE:a.streamType=chrome.cast.media.StreamType.BUFFERED,a.metadata=new chrome.cast.media.GenericMediaMetadata,a.metadata.title=this.title,a.metadata.images=[{url:this.poster}],Fm(this.castSrc)){const l=await Vm(this.castSrc);(l?.includes("m4s")||l?.includes("mp4"))&&(a.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,a.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4)}const s=new chrome.cast.media.LoadRequest(a);s.currentTime=super.currentTime??0,s.autoplay=!this.#t.paused,s.activeTrackIds=r,await An()?.loadMedia(s),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#e){this.#e.isPaused&&this.#e.controller?.playOrPause();return}return super.play()}pause(){if(this.#e){this.#e.isPaused||this.#e.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#s}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(a){this.castReceiver!=a&&this.setAttribute("cast-receiver",`${a}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(a){this.castSrc!=a&&this.setAttribute("cast-src",`${a}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(a){this.setAttribute("cast-content-type",`${a}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(a){this.setAttribute("cast-stream-type",`${a}`)}get castCustomData(){return this.#a}set castCustomData(a){const i=typeof a;if(!["object","undefined"].includes(i)){console.error(`castCustomData must be nullish or an object but value was of type ${i}`);return}this.#a=a}get readyState(){if(this.#e)switch(this.#e.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#e?this.#e.isPaused:super.paused}get muted(){return this.#e?this.#e?.isMuted:super.muted}set muted(a){if(this.#e){(a&&!this.#e.isMuted||!a&&this.#e.isMuted)&&this.#e.controller?.muteOrUnmute();return}super.muted=a}get volume(){return this.#e?this.#e?.volumeLevel??1:super.volume}set volume(a){if(this.#e){this.#e.volumeLevel=+a,this.#e.controller?.setVolumeLevel();return}super.volume=a}get duration(){return this.#e&&this.#e?.isMediaLoaded?this.#e?.duration??NaN:super.duration}get currentTime(){return this.#e&&this.#e?.isMediaLoaded?this.#e?.currentTime??0:super.currentTime}set currentTime(a){if(this.#e){this.#e.currentTime=a,this.#e.controller?.seek();return}super.currentTime=a}};var Xo=e=>{throw TypeError(e)},Jo=(e,t,a)=>t.has(e)||Xo("Cannot "+a),Zm=(e,t,a)=>(Jo(e,t,"read from private field"),a?a.call(e):t.get(e)),zm=(e,t,a)=>t.has(e)?Xo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Qm=(e,t,a,i)=>(Jo(e,t,"write to private field"),t.set(e,a),a),el=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class e extends el{}globalThis.DocumentFragment=e}var Xm=class extends el{},Jm={get(e){},define(e,t,a){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Xm)}},eh={customElements:Jm},th=typeof window>"u"||typeof globalThis.customElements>"u",lr=th?eh:globalThis,Ja,gs=class extends jm(lu(Nm)){constructor(){super(...arguments),zm(this,Ja)}get autoplay(){let e=this.getAttribute("autoplay");return e===null?!1:e===""?!0:e}set autoplay(e){let t=this.autoplay;e!==t&&(e?this.setAttribute("autoplay",typeof e=="string"?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return(e=Zm(this,Ja))!=null?e:this.muxCastCustomData}set castCustomData(e){Qm(this,Ja,e)}};Ja=new WeakMap;lr.customElements.get("mux-video")||(lr.customElements.define("mux-video",gs),lr.MuxVideoElement=gs);var tl=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},x=(e,t,a)=>(tl(e,t,"read from private field"),a?a.call(e):t.get(e)),Me=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Ge=(e,t,a,i)=>(tl(e,t,"write to private field"),t.set(e,a),a),Nt,ei,pt,pa,it,rt,nt,vt,Lt,ti,ye;const ys=1,Es=0,ah=1,ih={processCallback(e,t,a){if(a){for(const[i,r]of t)if(i in a){const n=a[i];typeof n=="boolean"&&r instanceof Ae&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Ae?r.element[r.attributeName]=n:r.value=n}}}};class Gi extends O.DocumentFragment{constructor(t,a,i=ih){var r;super(),Me(this,Nt,void 0),Me(this,ei,void 0),this.append(t.content.cloneNode(!0)),Ge(this,Nt,al(this)),Ge(this,ei,i),(r=i.createCallback)==null||r.call(i,this,x(this,Nt),a),i.processCallback(this,x(this,Nt),a)}update(t){x(this,ei).processCallback(this,x(this,Nt),t)}}Nt=new WeakMap;ei=new WeakMap;const al=(e,t=[])=>{let a,i;for(const r of e.attributes||[])if(r.value.includes("{{")){const n=new nh;for([a,i]of ks(r.value))if(!a)n.append(i);else{const s=new Ae(e,r.name,r.namespaceURI);n.append(s),t.push([i,s])}r.value=n.toString()}for(const r of e.childNodes)if(r.nodeType===ys&&!(r instanceof HTMLTemplateElement))al(r,t);else{const n=r.data;if(r.nodeType===ys||n.includes("{{")){const s=[];if(n)for([a,i]of ks(n))if(!a)s.push(new Text(i));else{const l=new zt(e);s.push(l),t.push([i,l])}else if(r instanceof HTMLTemplateElement){const l=new nl(e,r);s.push(l),t.push([l.expression,l])}r.replaceWith(...s.flatMap(l=>l.replacementNodes||[l]))}}return t},Ts={},ks=e=>{let t="",a=0,i=Ts[e],r=0,n;if(i)return i;for(i=[];n=e[r];r++)n==="{"&&e[r+1]==="{"&&e[r-1]!=="\\"&&e[r+2]&&++a==1?(t&&i.push([Es,t]),t="",r++):n==="}"&&e[r+1]==="}"&&e[r-1]!=="\\"&&!--a?(i.push([ah,t.trim()]),t="",r++):t+=n||"";return t&&i.push([Es,(a>0?"{{":"")+t]),Ts[e]=i},rh=11;class il{get value(){return""}set value(t){}toString(){return this.value}}const rl=new WeakMap;class nh{constructor(){Me(this,pt,[])}[Symbol.iterator](){return x(this,pt).values()}get length(){return x(this,pt).length}item(t){return x(this,pt)[t]}append(...t){for(const a of t)a instanceof Ae&&rl.set(a,this),x(this,pt).push(a)}toString(){return x(this,pt).join("")}}pt=new WeakMap;class Ae extends il{constructor(t,a,i){super(),Me(this,vt),Me(this,pa,""),Me(this,it,void 0),Me(this,rt,void 0),Me(this,nt,void 0),Ge(this,it,t),Ge(this,rt,a),Ge(this,nt,i)}get attributeName(){return x(this,rt)}get attributeNamespace(){return x(this,nt)}get element(){return x(this,it)}get value(){return x(this,pa)}set value(t){x(this,pa)!==t&&(Ge(this,pa,t),!x(this,vt,Lt)||x(this,vt,Lt).length===1?t==null?x(this,it).removeAttributeNS(x(this,nt),x(this,rt)):x(this,it).setAttributeNS(x(this,nt),x(this,rt),t):x(this,it).setAttributeNS(x(this,nt),x(this,rt),x(this,vt,Lt).toString()))}get booleanValue(){return x(this,it).hasAttributeNS(x(this,nt),x(this,rt))}set booleanValue(t){if(!x(this,vt,Lt)||x(this,vt,Lt).length===1)this.value=t?"":null;else throw new DOMException("Value is not fully templatized")}}pa=new WeakMap;it=new WeakMap;rt=new WeakMap;nt=new WeakMap;vt=new WeakSet;Lt=function(){return rl.get(this)};class zt extends il{constructor(t,a){super(),Me(this,ti,void 0),Me(this,ye,void 0),Ge(this,ti,t),Ge(this,ye,a?[...a]:[new Text])}get replacementNodes(){return x(this,ye)}get parentNode(){return x(this,ti)}get nextSibling(){return x(this,ye)[x(this,ye).length-1].nextSibling}get previousSibling(){return x(this,ye)[0].previousSibling}get value(){return x(this,ye).map(t=>t.textContent).join("")}set value(t){this.replace(t)}replace(...t){const a=t.flat().flatMap(i=>i==null?[new Text]:i.forEach?[...i]:i.nodeType===rh?[...i.childNodes]:i.nodeType?[i]:[new Text(i)]);a.length||a.push(new Text),Ge(this,ye,sh(x(this,ye)[0].parentNode,x(this,ye),a,this.nextSibling))}}ti=new WeakMap;ye=new WeakMap;class nl extends zt{constructor(t,a){const i=a.getAttribute("directive")||a.getAttribute("type");let r=a.getAttribute("expression")||a.getAttribute(i)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(t),this.expression=r,this.template=a,this.directive=i}}function sh(e,t,a,i=null){let r=0,n,s,l,o=a.length,u=t.length;for(;r<o&&r<u&&t[r]==a[r];)r++;for(;r<o&&r<u&&a[o-1]==t[u-1];)i=a[--u,--o];if(r==u)for(;r<o;)e.insertBefore(a[r++],i);if(r==o)for(;r<u;)e.removeChild(t[r++]);else{for(n=t[r];r<o;)l=a[r++],s=n?n.nextSibling:i,n==l?n=s:r<o&&a[r]==s?(e.replaceChild(l,n),n=s):e.insertBefore(l,n);for(;n!=i;)s=n.nextSibling,e.removeChild(n),n=s}return a}const As={string:e=>String(e)};class sl{constructor(t){this.template=t,this.state=void 0}}const Et=new WeakMap,Tt=new WeakMap,Ir={partial:(e,t)=>{t[e.expression]=new sl(e.template)},if:(e,t)=>{var a;if(ol(e.expression,t))if(Et.get(e)!==e.template){Et.set(e,e.template);const i=new Gi(e.template,t,Rn);e.replace(i),Tt.set(e,i)}else(a=Tt.get(e))==null||a.update(t);else e.replace(""),Et.delete(e),Tt.delete(e)}},oh=Object.keys(Ir),Rn={processCallback(e,t,a){var i,r;if(a)for(const[n,s]of t){if(s instanceof nl){if(!s.directive){const o=oh.find(u=>s.template.hasAttribute(u));o&&(s.directive=o,s.expression=s.template.getAttribute(o))}(i=Ir[s.directive])==null||i.call(Ir,s,a);continue}let l=ol(n,a);if(l instanceof sl){Et.get(s)!==l.template?(Et.set(s,l.template),l=new Gi(l.template,l.state,Rn),s.value=l,Tt.set(s,l)):(r=Tt.get(s))==null||r.update(l.state);continue}l?(s instanceof Ae&&s.attributeName.startsWith("aria-")&&(l=String(l)),s instanceof Ae?typeof l=="boolean"?s.booleanValue=l:typeof l=="function"?s.element[s.attributeName]=l:s.value=l:(s.value=l,Et.delete(s),Tt.delete(s))):s instanceof Ae?s.value=void 0:(s.value=void 0,Et.delete(s),Tt.delete(s))}}},ws={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>e??t,"|":(e,t)=>{var a;return(a=As[t])==null?void 0:a.call(As,e)}};function lh(e){return uh(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:t})=>t!=="ws")}function ol(e,t={}){var a,i,r,n,s,l,o;const u=lh(e);if(u.length===0||u.some(({type:c})=>!c))return ta(e);if(((a=u[0])==null?void 0:a.token)===">"){const c=t[(i=u[1])==null?void 0:i.token];if(!c)return ta(e);const h={...t};c.state=h;const m=u.slice(2);for(let d=0;d<m.length;d+=3){const f=(r=m[d])==null?void 0:r.token,y=(n=m[d+1])==null?void 0:n.token,_=(s=m[d+2])==null?void 0:s.token;f&&y==="="&&(h[f]=aa(_,t))}return c}if(u.length===1)return Ua(u[0])?aa(u[0].token,t):ta(e);if(u.length===2){const c=(l=u[0])==null?void 0:l.token,h=ws[c];if(!h||!Ua(u[1]))return ta(e);const m=aa(u[1].token,t);return h(m)}if(u.length===3){const c=(o=u[1])==null?void 0:o.token,h=ws[c];if(!h||!Ua(u[0])||!Ua(u[2]))return ta(e);const m=aa(u[0].token,t);if(c==="|")return h(m,u[2].token);const d=aa(u[2].token,t);return h(m,d)}}function ta(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function Ua({type:e}){return["number","boolean","string","param"].includes(e)}function aa(e,t){const a=e[0],i=e.slice(-1);return e==="true"||e==="false"?e==="true":a===i&&["'",'"'].includes(a)?e.slice(1,-1):Xs(e)?parseFloat(e):t[e]}function uh(e,t){let a,i,r;const n=[];for(;e;){r=null,a=e.length;for(const s in t)i=t[s].exec(e),i&&i.index<a&&(r={token:i[0],type:s,matches:i.slice(1)},a=i.index);a&&n.push({token:e.substr(0,a),type:void 0}),r&&n.push(r),e=e.substr(a+(r?r.token.length:0))}return n}var Sn=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},xr=(e,t,a)=>(Sn(e,t,"read from private field"),a?a.call(e):t.get(e)),ia=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},kt=(e,t,a,i)=>(Sn(e,t,"write to private field"),t.set(e,a),a),ur=(e,t,a)=>(Sn(e,t,"access private method"),a),Wt,ai,Kt,Or,ll,ii,Nr;const dr={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},ul=Ra.createElement("template");ul.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class ji extends O.HTMLElement{constructor(){super(),ia(this,Or),ia(this,ii),ia(this,Wt,void 0),ia(this,ai,void 0),ia(this,Kt,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const t=new MutationObserver(a=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||a.some(r=>{const n=r.target;return n===this?!0:n.localName!=="media-controller"?!1:!!(dr[r.attributeName]||r.attributeName.startsWith("breakpoint"))})&&this.render()});t.observe(this,{attributes:!0}),t.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(_r.BREAKPOINTS_COMPUTED,this.render),ur(this,Or,ll).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var t;return(t=xr(this,Wt))!=null?t:this.constructor.template}set template(t){if(t===null){this.removeAttribute("template");return}typeof t=="string"?this.setAttribute("template",t):t instanceof HTMLTemplateElement&&(kt(this,Wt,t),kt(this,Kt,null),this.createRenderer())}get props(){var t,a,i;const r=[...Array.from((a=(t=this.mediaController)==null?void 0:t.attributes)!=null?a:[]).filter(({name:s})=>dr[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const l=(i=dr[s.name])!=null?i:Zl(s.name);let{value:o}=s;o!=null?(Xs(o)&&(o=parseFloat(o)),n[l]=o===""?!0:o):n[l]=!1}return n}attributeChangedCallback(t,a,i){t==="template"&&a!=i&&ur(this,ii,Nr).call(this)}connectedCallback(){ur(this,ii,Nr).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==xr(this,ai)&&(kt(this,ai,this.template),this.renderer=new Gi(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(ul.content.cloneNode(!0),this.renderer))}render(){var t;(t=this.renderer)==null||t.update(this.props)}}Wt=new WeakMap;ai=new WeakMap;Kt=new WeakMap;Or=new WeakSet;ll=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}};ii=new WeakSet;Nr=function(){var e;const t=this.getAttribute("template");if(!t||t===xr(this,Kt))return;const a=this.getRootNode(),i=(e=a?.getElementById)==null?void 0:e.call(a,t);if(i){kt(this,Kt,t),kt(this,Wt,i),this.createRenderer();return}dh(t)&&(kt(this,Kt,t),ch(t).then(r=>{const n=Ra.createElement("template");n.innerHTML=r,kt(this,Wt,n),this.createRenderer()}).catch(console.error))};ji.observedAttributes=["template"];ji.processor=Rn;function dh(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;const t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch{return!1}return!0}async function ch(e){const t=await fetch(e);if(t.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}O.customElements.get("media-theme")||O.customElements.define("media-theme",ji);function mh({anchor:e,floating:t,placement:a}){const i=hh({anchor:e,floating:t}),{x:r,y:n}=vh(i,a);return{x:r,y:n}}function hh({anchor:e,floating:t}){return{anchor:ph(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}function ph(e,t){var a;const i=e.getBoundingClientRect(),r=(a=t?.getBoundingClientRect())!=null?a:{x:0,y:0};return{x:i.x-r.x,y:i.y-r.y,width:i.width,height:i.height}}function vh({anchor:e,floating:t},a){const i=fh(a)==="x"?"y":"x",r=i==="y"?"height":"width",n=dl(a),s=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,o=e[r]/2-t[r]/2;let u;switch(n){case"top":u={x:s,y:e.y-t.height};break;case"bottom":u={x:s,y:e.y+e.height};break;case"right":u={x:e.x+e.width,y:l};break;case"left":u={x:e.x-t.width,y:l};break;default:u={x:e.x,y:e.y}}switch(a.split("-")[1]){case"start":u[i]-=o;break;case"end":u[i]+=o;break}return u}function dl(e){return e.split("-")[0]}function fh(e){return["top","bottom"].includes(dl(e))?"y":"x"}class Cn extends Event{constructor({action:t="auto",relatedTarget:a,...i}){super("invoke",i),this.action=t,this.relatedTarget=a}}class bh extends Event{constructor({newState:t,oldState:a,...i}){super("toggle",i),this.newState=t,this.oldState=a}}var Dn=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},P=(e,t,a)=>(Dn(e,t,"read from private field"),a?a.call(e):t.get(e)),W=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Ne=(e,t,a,i)=>(Dn(e,t,"write to private field"),t.set(e,a),a),K=(e,t,a)=>(Dn(e,t,"access private method"),a),Le,wt,dt,ri,ni,Rt,xa,Lr,cl,xi,In,Oi,si,Mr,Pr,ml,$r,hl,Ur,pl,qt,Yt,Ft,Oa,Ni,xn,Br,vl,On,fl,Hr,bl,Nn,_l,Wr,gl,Kr,yl,ka,Li,qr,El,Aa,Mi,oi,Yr;function jt({type:e,text:t,value:a,checked:i}){const r=Ra.createElement("media-chrome-menu-item");r.type=e,r.part.add("menu-item"),r.part.add(e),r.value=a,r.checked=i;const n=Ra.createElement("span");return n.textContent=t,r.append(n),r}function St(e,t){let a=e.querySelector(`:scope > [slot="${t}"]`);if(a?.nodeName=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a)return a=a.cloneNode(!0),a;const i=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return i?i.cloneNode(!0):""}function _h(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}const mt={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class Ke extends O.HTMLElement{constructor(){if(super(),W(this,Lr),W(this,xi),W(this,si),W(this,Pr),W(this,$r),W(this,Ur),W(this,Ft),W(this,Ni),W(this,Br),W(this,On),W(this,Hr),W(this,Nn),W(this,Wr),W(this,Kr),W(this,ka),W(this,qr),W(this,Aa),W(this,oi),W(this,Le,null),W(this,wt,null),W(this,dt,null),W(this,ri,new Set),W(this,ni,void 0),W(this,Rt,!1),W(this,xa,null),W(this,Oi,()=>{const t=P(this,ri),a=new Set(this.items);for(const i of t)a.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(const i of a)t.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));Ne(this,ri,a)}),W(this,qt,()=>{K(this,Ft,Oa).call(this),K(this,Ni,xn).call(this,!1)}),W(this,Yt,()=>{K(this,Ft,Oa).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=Js(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),Ne(this,ni,new MutationObserver(P(this,Oi))),P(this,ni).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[mt.DISABLED,mt.HIDDEN,mt.STYLE,mt.ANCHOR,Zn.MEDIA_CONTROLLER]}static formatMenuItemText(t,a){return t}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(t){switch(t.type){case"slotchange":K(this,Lr,cl).call(this,t);break;case"invoke":K(this,Pr,ml).call(this,t);break;case"click":K(this,Br,vl).call(this,t);break;case"toggle":K(this,Hr,bl).call(this,t);break;case"focusout":K(this,Wr,gl).call(this,t);break;case"keydown":K(this,Kr,yl).call(this,t);break}}connectedCallback(){var t,a;Ne(this,xa,zl(this.shadowRoot,":host")),K(this,si,Mr).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),Ne(this,Le,zn(this)),(a=(t=P(this,Le))==null?void 0:t.associateElement)==null||a.call(t,this),this.hidden||(ki(Na(this),P(this,qt)),ki(this,P(this,Yt))),K(this,xi,In).call(this)}disconnectedCallback(){var t,a;Ai(Na(this),P(this,qt)),Ai(this,P(this,Yt)),this.disable(),(a=(t=P(this,Le))==null?void 0:t.unassociateElement)==null||a.call(t,this),Ne(this,Le,null)}attributeChangedCallback(t,a,i){var r,n,s,l;t===mt.HIDDEN&&i!==a?(P(this,Rt)||Ne(this,Rt,!0),this.hidden?K(this,Ur,pl).call(this):K(this,$r,hl).call(this),this.dispatchEvent(new bh({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):t===Zn.MEDIA_CONTROLLER?(a&&((n=(r=P(this,Le))==null?void 0:r.unassociateElement)==null||n.call(r,this),Ne(this,Le,null)),i&&this.isConnected&&(Ne(this,Le,zn(this)),(l=(s=P(this,Le))==null?void 0:s.associateElement)==null||l.call(s,this))):t===mt.DISABLED&&i!==a?i==null?this.enable():this.disable():t===mt.STYLE&&i!==a&&K(this,si,Mr).call(this)}formatMenuItemText(t,a){return this.constructor.formatMenuItemText(t,a)}get anchor(){return this.getAttribute("anchor")}set anchor(t){this.setAttribute("anchor",`${t}`)}get anchorElement(){var t;return this.anchor?(t=on(this))==null?void 0:t.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(gh)}get radioGroupItems(){return this.items.filter(t=>t.role==="menuitemradio")}get checkedItems(){return this.items.filter(t=>t.checked)}get value(){var t,a;return(a=(t=this.checkedItems[0])==null?void 0:t.value)!=null?a:""}set value(t){const a=this.items.find(i=>i.value===t);a&&K(this,oi,Yr).call(this,a)}focus(){if(Ne(this,wt,Ql()),this.items.length){K(this,Aa,Mi).call(this,this.items[0]),this.items[0].focus();return}const t=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');t?.focus()}handleSelect(t){var a;const i=K(this,ka,Li).call(this,t);i&&(K(this,oi,Yr).call(this,i,i.type==="checkbox"),P(this,dt)&&!this.hidden&&((a=P(this,wt))==null||a.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(t){var a,i;const{key:r}=t,n=this.items,s=(i=(a=K(this,ka,Li).call(this,t))!=null?a:K(this,qr,El).call(this))!=null?i:n[0],l=n.indexOf(s);let o=Math.max(0,l);r==="ArrowDown"?o++:r==="ArrowUp"?o--:t.key==="Home"?o=0:t.key==="End"&&(o=n.length-1),o<0&&(o=n.length-1),o>n.length-1&&(o=0),K(this,Aa,Mi).call(this,n[o]),n[o].focus()}}Le=new WeakMap;wt=new WeakMap;dt=new WeakMap;ri=new WeakMap;ni=new WeakMap;Rt=new WeakMap;xa=new WeakMap;Lr=new WeakSet;cl=function(e){const t=e.target;for(const a of t.assignedNodes({flatten:!0}))a.nodeType===3&&a.textContent.trim()===""&&a.remove();["header","title"].includes(t.name)&&K(this,xi,In).call(this),t.name||P(this,Oi).call(this)};xi=new WeakSet;In=function(){const e=this.shadowRoot.querySelector('slot[name="header"]'),t=this.shadowRoot.querySelector('slot[name="title"]');e.hidden=t.assignedNodes().length===0&&e.assignedNodes().length===0};Oi=new WeakMap;si=new WeakSet;Mr=function(){var e;const t=this.shadowRoot.querySelector("#layout-row"),a=(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:e.trim();t.setAttribute("media",a==="row"?"":"width:0")};Pr=new WeakSet;ml=function(e){Ne(this,dt,e.relatedTarget),ln(this,e.relatedTarget)||(this.hidden=!this.hidden)};$r=new WeakSet;hl=function(){var e;(e=P(this,dt))==null||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),ki(Na(this),P(this,qt)),ki(this,P(this,Yt))};Ur=new WeakSet;pl=function(){var e;(e=P(this,dt))==null||e.setAttribute("aria-expanded","false"),Ai(Na(this),P(this,qt)),Ai(this,P(this,Yt))};qt=new WeakMap;Yt=new WeakMap;Ft=new WeakSet;Oa=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:t,y:a}=mh({anchor:this.anchorElement,floating:this,placement:"top-start"});e??(e=this.offsetWidth);const r=Na(this).getBoundingClientRect(),n=r.width-t-e,s=r.height-a-this.offsetHeight,{style:l}=P(this,xa);l.setProperty("position","absolute"),l.setProperty("right",`${Math.max(0,n)}px`),l.setProperty("--_menu-bottom",`${s}px`);const o=getComputedStyle(this),c=l.getPropertyValue("--_menu-bottom")===o.bottom?s:parseFloat(o.bottom),h=r.height-c-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${h}px`)};Ni=new WeakSet;xn=function(e){const t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),a=t?.querySelector('[role="menu"]'),{style:i}=P(this,xa);if(e||i.setProperty("--media-menu-transition-in","none"),a){const r=a.offsetHeight,n=Math.max(a.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),K(this,Ft,Oa).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),K(this,Ft,Oa).call(this);i.removeProperty("--media-menu-transition-in")};Br=new WeakSet;vl=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(P(this,On,fl))){(t=P(this,wt))==null||t.focus(),this.hidden=!0;return}const a=K(this,ka,Li).call(this,e);!a||a.hasAttribute("disabled")||(K(this,Aa,Mi).call(this,a),this.handleSelect(e))};On=new WeakSet;fl=function(){var e;return(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:e.find(a=>a.matches('button[part~="back"]'))};Hr=new WeakSet;bl=function(e){if(e.target===this)return;K(this,Nn,_l).call(this);const t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const a of t)a.invokeTargetElement!=e.target&&e.newState=="open"&&a.getAttribute("aria-expanded")=="true"&&!a.invokeTargetElement.hidden&&a.invokeTargetElement.dispatchEvent(new Cn({relatedTarget:a}));for(const a of t)a.setAttribute("aria-expanded",`${!a.submenuElement.hidden}`);K(this,Ni,xn).call(this,!0)};Nn=new WeakSet;_l=function(){const t=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!t)};Wr=new WeakSet;gl=function(e){var t;ln(this,e.relatedTarget)||(P(this,Rt)&&((t=P(this,wt))==null||t.focus()),P(this,dt)&&P(this,dt)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))};Kr=new WeakSet;yl=function(e){var t,a,i,r,n;const{key:s,ctrlKey:l,altKey:o,metaKey:u}=e;if(!(l||o||u)&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),s==="Tab"){if(P(this,Rt)){this.hidden=!0;return}e.shiftKey?(a=(t=this.previousElementSibling)==null?void 0:t.focus)==null||a.call(t):(r=(i=this.nextElementSibling)==null?void 0:i.focus)==null||r.call(i),this.blur()}else s==="Escape"?((n=P(this,wt))==null||n.focus(),P(this,Rt)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(e):this.handleMove(e)};ka=new WeakSet;Li=function(e){return e.composedPath().find(t=>["menuitemradio","menuitemcheckbox"].includes(t.role))};qr=new WeakSet;El=function(){return this.items.find(e=>e.tabIndex===0)};Aa=new WeakSet;Mi=function(e){for(const t of this.items)t.tabIndex=t===e?0:-1};oi=new WeakSet;Yr=function(e,t){const a=[...this.checkedItems];e.type==="radio"&&this.radioGroupItems.forEach(i=>i.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((i,r)=>i!=a[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};Ke.shadowRootOptions={mode:"open"};Ke.getTemplateHTML=_h;function gh(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(e?.role)}function Na(e){var t;return(t=e.getAttribute("bounds")?Xl(e,`#${e.getAttribute("bounds")}`):we(e)||e.parentElement)!=null?t:e}O.customElements.get("media-chrome-menu")||O.customElements.define("media-chrome-menu",Ke);var Ln=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Ue=(e,t,a)=>(Ln(e,t,"read from private field"),a?a.call(e):t.get(e)),Ye=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},cr=(e,t,a,i)=>(Ln(e,t,"write to private field"),t.set(e,a),a),ke=(e,t,a)=>(Ln(e,t,"access private method"),a),li,wa,Fr,Tl,Pi,Mn,Pn,kl,Be,Zt,La,Vr,Al,ui,Gr;function yh(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `}function Eh(e){return""}const he={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class Qt extends O.HTMLElement{constructor(){if(super(),Ye(this,Fr),Ye(this,Pi),Ye(this,Pn),Ye(this,Zt),Ye(this,Vr),Ye(this,ui),Ye(this,li,!1),Ye(this,wa,void 0),Ye(this,Be,()=>{var t,a;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const i=this.shadowRoot.querySelector('slot[name="description"]'),r=(t=this.submenuElement.checkedItems)==null?void 0:t[0],n=(a=r?.dataset.description)!=null?a:r?.text,s=Ra.createElement("span");s.textContent=n??"",i.replaceChildren(s)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=Js(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[he.TYPE,he.DISABLED,he.CHECKED,he.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),ra(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(t){switch(t.type){case"slotchange":ke(this,Fr,Tl).call(this,t);break;case"click":this.handleClick(t);break;case"keydown":ke(this,Vr,Al).call(this,t);break;case"keyup":ke(this,Zt,La).call(this,t);break}}attributeChangedCallback(t,a,i){t===he.CHECKED&&ra(this)&&!Ue(this,li)?this.setAttribute("aria-checked",i!=null?"true":"false"):t===he.TYPE&&i!==a?this.role="menuitem"+i:t===he.DISABLED&&i!==a&&(i==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(he.DISABLED)||this.enable(),this.role="menuitem"+this.type,cr(this,wa,jr(this,this.parentNode)),ke(this,ui,Gr).call(this),this.submenuElement&&ke(this,Pi,Mn).call(this)}disconnectedCallback(){this.disable(),ke(this,ui,Gr).call(this),cr(this,wa,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=on(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var t;return(t=this.getAttribute(he.TYPE))!=null?t:""}set type(t){this.setAttribute(he.TYPE,`${t}`)}get value(){var t;return(t=this.getAttribute(he.VALUE))!=null?t:this.text}set value(t){this.setAttribute(he.VALUE,t)}get text(){var t;return((t=this.textContent)!=null?t:"").trim()}get checked(){if(ra(this))return this.getAttribute("aria-checked")==="true"}set checked(t){ra(this)&&(cr(this,li,!0),this.setAttribute("aria-checked",t?"true":"false"),t?this.part.add("checked"):this.part.remove("checked"))}handleClick(t){ra(this)||this.invokeTargetElement&&ln(this,t.target)&&this.invokeTargetElement.dispatchEvent(new Cn({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}li=new WeakMap;wa=new WeakMap;Fr=new WeakSet;Tl=function(e){const t=e.target;if(!t?.name)for(const i of t.assignedNodes({flatten:!0}))i instanceof Text&&i.textContent.trim()===""&&i.remove();t.name==="submenu"&&(this.submenuElement?ke(this,Pi,Mn).call(this):ke(this,Pn,kl).call(this))};Pi=new WeakSet;Mn=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Ue(this,Be)),this.submenuElement.addEventListener("addmenuitem",Ue(this,Be)),this.submenuElement.addEventListener("removemenuitem",Ue(this,Be)),Ue(this,Be).call(this)};Pn=new WeakSet;kl=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Ue(this,Be)),this.submenuElement.removeEventListener("addmenuitem",Ue(this,Be)),this.submenuElement.removeEventListener("removemenuitem",Ue(this,Be)),Ue(this,Be).call(this)};Be=new WeakMap;Zt=new WeakSet;La=function(e){const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",ke(this,Zt,La));return}this.handleClick(e)};Vr=new WeakSet;Al=function(e){const{metaKey:t,altKey:a,key:i}=e;if(t||a||!this.keysUsed.includes(i)){this.removeEventListener("keyup",ke(this,Zt,La));return}this.addEventListener("keyup",ke(this,Zt,La),{once:!0})};ui=new WeakSet;Gr=function(){var e;const t=(e=Ue(this,wa))==null?void 0:e.radioGroupItems;if(!t)return;let a=t.filter(i=>i.getAttribute("aria-checked")==="true").pop();a||(a=t[0]);for(const i of t)i.setAttribute("aria-checked","false");a?.setAttribute("aria-checked","true")};Qt.shadowRootOptions={mode:"open"};Qt.getTemplateHTML=yh;Qt.getSuffixSlotInnerHTML=Eh;function ra(e){return e.type==="radio"||e.type==="checkbox"}function jr(e,t){if(!e)return null;const{host:a}=e.getRootNode();return!t&&a?jr(e,a):t?.items?t:jr(t,t?.parentNode)}O.customElements.get("media-chrome-menu-item")||O.customElements.define("media-chrome-menu-item",Qt);function Th(e){return`
    ${Ke.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}class wl extends Ke{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:we(this).querySelector("media-settings-menu-button")}}wl.getTemplateHTML=Th;O.customElements.get("media-settings-menu")||O.customElements.define("media-settings-menu",wl);function kh(e){return`
    ${Qt.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function Ah(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class Zi extends Qt{}Zi.shadowRootOptions={mode:"open"};Zi.getTemplateHTML=kh;Zi.getSuffixSlotInnerHTML=Ah;O.customElements.get("media-settings-menu-item")||O.customElements.define("media-settings-menu-item",Zi);class Xt extends Jl{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=on(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):null}handleClick(){var t;(t=this.invokeTargetElement)==null||t.dispatchEvent(new Cn({relatedTarget:this}))}}O.customElements.get("media-chrome-menu-button")||O.customElements.define("media-chrome-menu-button",Xt);function wh(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function Rh(){return se("Settings")}class $n extends Xt{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",se("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:we(this).querySelector("media-settings-menu")}}$n.getSlotTemplateHTML=wh;$n.getTooltipContentHTML=Rh;O.customElements.get("media-settings-menu-button")||O.customElements.define("media-settings-menu-button",$n);var Un=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Rl=(e,t,a)=>(Un(e,t,"read from private field"),a?a.call(e):t.get(e)),Ba=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Zr=(e,t,a,i)=>(Un(e,t,"write to private field"),t.set(e,a),a),Ha=(e,t,a)=>(Un(e,t,"access private method"),a),va,$i,di,zr,ci,Qr;class Sh extends Ke{constructor(){super(...arguments),Ba(this,di),Ba(this,ci),Ba(this,va,[]),Ba(this,$i,void 0)}static get observedAttributes(){return[...super.observedAttributes,w.MEDIA_AUDIO_TRACK_LIST,w.MEDIA_AUDIO_TRACK_ENABLED,w.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===w.MEDIA_AUDIO_TRACK_ENABLED&&a!==i?this.value=i:t===w.MEDIA_AUDIO_TRACK_LIST&&a!==i&&(Zr(this,va,eu(i??"")),Ha(this,di,zr).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ha(this,ci,Qr))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ha(this,ci,Qr))}get anchorElement(){var t;return this.anchor!=="auto"?super.anchorElement:(t=we(this))==null?void 0:t.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return Rl(this,va)}set mediaAudioTrackList(t){Zr(this,va,t),Ha(this,di,zr).call(this)}get mediaAudioTrackEnabled(){var t;return(t=Bi(this,w.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){Hi(this,w.MEDIA_AUDIO_TRACK_ENABLED,t)}}va=new WeakMap;$i=new WeakMap;di=new WeakSet;zr=function(){if(Rl(this,$i)===JSON.stringify(this.mediaAudioTrackList))return;Zr(this,$i,JSON.stringify(this.mediaAudioTrackList));const e=this.mediaAudioTrackList;this.defaultSlot.textContent="";for(const t of e){const a=this.formatMenuItemText(t.label,t),i=jt({type:"radio",text:a,value:`${t.id}`,checked:t.enabled});i.prepend(St(this,"checked-indicator")),this.defaultSlot.append(i)}};ci=new WeakSet;Qr=function(){if(this.value==null)return;const e=new O.CustomEvent(Ct.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};O.customElements.get("media-audio-track-menu")||O.customElements.define("media-audio-track-menu",Sh);const Ch=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function Dh(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${Ch}</slot>
  `}function Ih(){return se("Audio")}const Rs=e=>{const t=se("Audio");e.setAttribute("aria-label",t)};class Bn extends Xt{static get observedAttributes(){return[...super.observedAttributes,w.MEDIA_AUDIO_TRACK_ENABLED,w.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Rs(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===w.MEDIA_LANG&&Rs(this)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=we(this))==null?void 0:t.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var t;return(t=Bi(this,w.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){Hi(this,w.MEDIA_AUDIO_TRACK_ENABLED,t)}}Bn.getSlotTemplateHTML=Dh;Bn.getTooltipContentHTML=Ih;O.customElements.get("media-audio-track-menu-button")||O.customElements.define("media-audio-track-menu-button",Bn);var Hn=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},xh=(e,t,a)=>(Hn(e,t,"read from private field"),t.get(e)),mr=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Oh=(e,t,a,i)=>(Hn(e,t,"write to private field"),t.set(e,a),a),hr=(e,t,a)=>(Hn(e,t,"access private method"),a),Ui,Xr,Sl,mi,Jr;const Nh=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function Lh(e){return`
    ${Ke.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${Nh}</slot>
  `}class Cl extends Ke{constructor(){super(...arguments),mr(this,Xr),mr(this,mi),mr(this,Ui,void 0)}static get observedAttributes(){return[...super.observedAttributes,w.MEDIA_SUBTITLES_LIST,w.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===w.MEDIA_SUBTITLES_LIST&&a!==i?hr(this,Xr,Sl).call(this):t===w.MEDIA_SUBTITLES_SHOWING&&a!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",hr(this,mi,Jr))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",hr(this,mi,Jr))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:we(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return Ss(this,w.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){Cs(this,w.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return Ss(this,w.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){Cs(this,w.MEDIA_SUBTITLES_SHOWING,t)}}Ui=new WeakMap;Xr=new WeakSet;Sl=function(){var e;if(xh(this,Ui)===JSON.stringify(this.mediaSubtitlesList))return;Oh(this,Ui,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const t=!this.value,a=jt({type:"radio",text:this.formatMenuItemText(se("Off")),value:"off",checked:t});a.prepend(St(this,"checked-indicator")),this.defaultSlot.append(a);const i=this.mediaSubtitlesList;for(const r of i){const n=jt({type:"radio",text:this.formatMenuItemText(r.label,r),value:Qn(r),checked:this.value==Qn(r)});n.prepend(St(this,"checked-indicator")),((e=r.kind)!=null?e:"subs")==="captions"&&n.append(St(this,"captions-indicator")),this.defaultSlot.append(n)}};mi=new WeakSet;Jr=function(){const e=this.mediaSubtitlesShowing,t=this.getAttribute(w.MEDIA_SUBTITLES_SHOWING),a=this.value!==t;if(e?.length&&a&&this.dispatchEvent(new O.CustomEvent(Ct.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!a)return;const i=new O.CustomEvent(Ct.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(i)};Cl.getTemplateHTML=Lh;const Ss=(e,t)=>{const a=e.getAttribute(t);return a?eo(a):[]},Cs=(e,t,a)=>{if(!a?.length){e.removeAttribute(t);return}const i=to(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};O.customElements.get("media-captions-menu")||O.customElements.define("media-captions-menu",Cl);const Mh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Ph=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function $h(){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${Mh}</slot>
      <slot name="off">${Ph}</slot>
    </slot>
  `}function Uh(){return se("Captions")}const Ds=e=>{e.setAttribute("aria-checked",tu(e).toString())},Is=e=>{e.setAttribute("aria-label",se("closed captions"))};class Wn extends Xt{static get observedAttributes(){return[...super.observedAttributes,w.MEDIA_SUBTITLES_LIST,w.MEDIA_SUBTITLES_SHOWING,w.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),Is(this),Ds(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===w.MEDIA_SUBTITLES_SHOWING?Ds(this):t===w.MEDIA_LANG&&Is(this)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=we(this))==null?void 0:t.querySelector("media-captions-menu")}get mediaSubtitlesList(){return xs(this,w.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){Os(this,w.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return xs(this,w.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){Os(this,w.MEDIA_SUBTITLES_SHOWING,t)}}Wn.getSlotTemplateHTML=$h;Wn.getTooltipContentHTML=Uh;const xs=(e,t)=>{const a=e.getAttribute(t);return a?eo(a):[]},Os=(e,t,a)=>{if(!a?.length){e.removeAttribute(t);return}const i=to(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};O.customElements.get("media-captions-menu-button")||O.customElements.define("media-captions-menu-button",Wn);var Dl=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Mt=(e,t,a)=>(Dl(e,t,"read from private field"),a?a.call(e):t.get(e)),pr=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},na=(e,t,a)=>(Dl(e,t,"access private method"),a),ot,fa,hi,pi,en;const vr={RATES:"rates"};class Bh extends Ke{constructor(){super(),pr(this,fa),pr(this,pi),pr(this,ot,new au(this,vr.RATES,{defaultValue:iu})),na(this,fa,hi).call(this)}static get observedAttributes(){return[...super.observedAttributes,w.MEDIA_PLAYBACK_RATE,vr.RATES]}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===w.MEDIA_PLAYBACK_RATE&&a!=i?this.value=i:t===vr.RATES&&a!=i&&(Mt(this,ot).value=i,na(this,fa,hi).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",na(this,pi,en))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",na(this,pi,en))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:we(this).querySelector("media-playback-rate-menu-button")}get rates(){return Mt(this,ot)}set rates(t){t?Array.isArray(t)?Mt(this,ot).value=t.join(" "):typeof t=="string"&&(Mt(this,ot).value=t):Mt(this,ot).value="",na(this,fa,hi).call(this)}get mediaPlaybackRate(){return Wi(this,w.MEDIA_PLAYBACK_RATE,ru)}set mediaPlaybackRate(t){Ki(this,w.MEDIA_PLAYBACK_RATE,t)}}ot=new WeakMap;fa=new WeakSet;hi=function(){this.defaultSlot.textContent="";for(const e of Mt(this,ot)){const t=jt({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(St(this,"checked-indicator")),this.defaultSlot.append(t)}};pi=new WeakSet;en=function(){if(!this.value)return;const e=new O.CustomEvent(Ct.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};O.customElements.get("media-playback-rate-menu")||O.customElements.define("media-playback-rate-menu",Bh);const vi=1;function Hh(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||vi}x</slot>
  `}function Wh(){return se("Playback rate")}class Kn extends Xt{static get observedAttributes(){return[...super.observedAttributes,w.MEDIA_PLAYBACK_RATE]}constructor(){var t;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(t=this.mediaPlaybackRate)!=null?t:vi}x`}attributeChangedCallback(t,a,i){if(super.attributeChangedCallback(t,a,i),t===w.MEDIA_PLAYBACK_RATE){const r=i?+i:Number.NaN,n=Number.isNaN(r)?vi:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",se("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:we(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return Wi(this,w.MEDIA_PLAYBACK_RATE,vi)}set mediaPlaybackRate(t){Ki(this,w.MEDIA_PLAYBACK_RATE,t)}}Kn.getSlotTemplateHTML=Hh;Kn.getTooltipContentHTML=Wh;O.customElements.get("media-playback-rate-menu-button")||O.customElements.define("media-playback-rate-menu-button",Kn);var qn=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},ba=(e,t,a)=>(qn(e,t,"read from private field"),a?a.call(e):t.get(e)),Wa=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Ns=(e,t,a,i)=>(qn(e,t,"write to private field"),t.set(e,a),a),xt=(e,t,a)=>(qn(e,t,"access private method"),a),_a,Bt,Pt,ga,fi,tn;class Kh extends Ke{constructor(){super(...arguments),Wa(this,Pt),Wa(this,fi),Wa(this,_a,[]),Wa(this,Bt,{})}static get observedAttributes(){return[...super.observedAttributes,w.MEDIA_RENDITION_LIST,w.MEDIA_RENDITION_SELECTED,w.MEDIA_RENDITION_UNAVAILABLE,w.MEDIA_HEIGHT]}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===w.MEDIA_RENDITION_SELECTED&&a!==i?(this.value=i??"auto",xt(this,Pt,ga).call(this)):t===w.MEDIA_RENDITION_LIST&&a!==i?(Ns(this,_a,nu(i)),xt(this,Pt,ga).call(this)):t===w.MEDIA_HEIGHT&&a!==i&&xt(this,Pt,ga).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",xt(this,fi,tn))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",xt(this,fi,tn))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:we(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return ba(this,_a)}set mediaRenditionList(t){Ns(this,_a,t),xt(this,Pt,ga).call(this)}get mediaRenditionSelected(){return Bi(this,w.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){Hi(this,w.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return Wi(this,w.MEDIA_HEIGHT)}set mediaHeight(t){Ki(this,w.MEDIA_HEIGHT,t)}}_a=new WeakMap;Bt=new WeakMap;Pt=new WeakSet;ga=function(){if(ba(this,Bt).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&ba(this,Bt).mediaHeight===this.mediaHeight)return;ba(this,Bt).mediaRenditionList=JSON.stringify(this.mediaRenditionList),ba(this,Bt).mediaHeight=this.mediaHeight;const e=this.mediaRenditionList.sort((n,s)=>s.height-n.height);for(const n of e)n.selected=n.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";const t=!this.mediaRenditionSelected;for(const n of e){const s=this.formatMenuItemText(`${Math.min(n.width,n.height)}p`,n),l=jt({type:"radio",text:s,value:`${n.id}`,checked:n.selected&&!t});l.prepend(St(this,"checked-indicator")),this.defaultSlot.append(l)}const a=t?this.formatMenuItemText(`${se("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(se("Auto")),i=jt({type:"radio",text:a,value:"auto",checked:t}),r=this.mediaHeight>0?`${se("Auto")} (${this.mediaHeight}p)`:se("Auto");i.dataset.description=r,i.prepend(St(this,"checked-indicator")),this.defaultSlot.append(i)};fi=new WeakSet;tn=function(){if(this.value==null)return;const e=new O.CustomEvent(Ct.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};O.customElements.get("media-rendition-menu")||O.customElements.define("media-rendition-menu",Kh);const qh=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function Yh(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${qh}</slot>
  `}function Fh(){return se("Quality")}class Yn extends Xt{static get observedAttributes(){return[...super.observedAttributes,w.MEDIA_RENDITION_SELECTED,w.MEDIA_RENDITION_UNAVAILABLE,w.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",se("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:we(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return Bi(this,w.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){Hi(this,w.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return Wi(this,w.MEDIA_HEIGHT)}set mediaHeight(t){Ki(this,w.MEDIA_HEIGHT,t)}}Yn.getSlotTemplateHTML=Yh;Yn.getTooltipContentHTML=Fh;O.customElements.get("media-rendition-menu-button")||O.customElements.define("media-rendition-menu-button",Yn);var Il=e=>{throw TypeError(e)},Fn=(e,t,a)=>t.has(e)||Il("Cannot "+a),B=(e,t,a)=>(Fn(e,t,"read from private field"),a?a.call(e):t.get(e)),Ee=(e,t,a)=>t.has(e)?Il("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),He=(e,t,a,i)=>(Fn(e,t,"write to private field"),t.set(e,a),a),Q=(e,t,a)=>(Fn(e,t,"access private method"),a),zi=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends zi{}globalThis.DocumentFragment=e}var Vn=class extends zi{},Vh=class extends zi{},Gh={get(e){},define(e,t,a){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Vn)}},bi,jh=class{constructor(t,a={}){Ee(this,bi),He(this,bi,a?.detail)}get detail(){return B(this,bi)}initCustomEvent(){}};bi=new WeakMap;function Zh(e,t){return new Vn}var xl={document:{createElement:Zh},DocumentFragment,customElements:Gh,CustomEvent:jh,EventTarget:zi,HTMLElement:Vn,HTMLVideoElement:Vh},Ol=typeof window>"u"||typeof globalThis.customElements>"u",Pe=Ol?xl:globalThis,Gn=Ol?xl.document:globalThis.document;function zh(e){let t="";return Object.entries(e).forEach(([a,i])=>{i!=null&&(t+=`${an(a)}: ${i}; `)}),t?t.trim():void 0}function an(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Nl(e){return e.replace(/[-_]([a-z])/g,(t,a)=>a.toUpperCase())}function de(e){if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}function Ll(e){let t=Qh(e).toString();return t?"?"+t:""}function Qh(e){let t={};for(let a in e)e[a]!=null&&(t[a]=e[a]);return new URLSearchParams(t)}var Ml=(e,t)=>!e||!t?!1:e.contains(t)?!0:Ml(e,t.getRootNode().host),Pl="mux.com",Xh=()=>{try{return"3.6.0"}catch{}return"UNKNOWN"},Jh=Xh(),$l=()=>Jh,ep=(e,{token:t,customDomain:a=Pl,thumbnailTime:i,programTime:r}={})=>{var n;let s=t==null?i:void 0,{aud:l}=(n=Ht(t))!=null?n:{};if(!(t&&l!=="t"))return`https://image.${a}/${e}/thumbnail.webp${Ll({token:t,time:s,program_time:r})}`},tp=(e,{token:t,customDomain:a=Pl,programStartTime:i,programEndTime:r}={})=>{var n;let{aud:s}=(n=Ht(t))!=null?n:{};if(!(t&&s!=="s"))return`https://image.${a}/${e}/storyboard.vtt${Ll({token:t,format:"webp",program_start_time:i,program_end_time:r})}`},jn=e=>{if(e){if([U.LIVE,U.ON_DEMAND].includes(e))return e;if(e!=null&&e.includes("live"))return U.LIVE}},ap={crossorigin:"crossOrigin",playsinline:"playsInline"};function ip(e){var t;return(t=ap[e])!=null?t:Nl(e)}var $t,Ut,oe,rp=class{constructor(t,a){Ee(this,$t),Ee(this,Ut),Ee(this,oe,[]),He(this,$t,t),He(this,Ut,a)}[Symbol.iterator](){return B(this,oe).values()}get length(){return B(this,oe).length}get value(){var t;return(t=B(this,oe).join(" "))!=null?t:""}set value(t){var a;t!==this.value&&(He(this,oe,[]),this.add(...(a=t?.split(" "))!=null?a:[]))}toString(){return this.value}item(t){return B(this,oe)[t]}values(){return B(this,oe).values()}keys(){return B(this,oe).keys()}forEach(t){B(this,oe).forEach(t)}add(...t){var a,i;t.forEach(r=>{this.contains(r)||B(this,oe).push(r)}),!(this.value===""&&!((a=B(this,$t))!=null&&a.hasAttribute(`${B(this,Ut)}`)))&&((i=B(this,$t))==null||i.setAttribute(`${B(this,Ut)}`,`${this.value}`))}remove(...t){var a;t.forEach(i=>{B(this,oe).splice(B(this,oe).indexOf(i),1)}),(a=B(this,$t))==null||a.setAttribute(`${B(this,Ut)}`,`${this.value}`)}contains(t){return B(this,oe).includes(t)}toggle(t,a){return typeof a<"u"?a?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,a){this.remove(t),this.add(a)}};$t=new WeakMap,Ut=new WeakMap,oe=new WeakMap;var Ul=`[mux-player ${$l()}]`;function Ve(...e){console.warn(Ul,...e)}function ve(...e){console.error(Ul,...e)}function Bl(e){var t;let a=(t=e.message)!=null?t:"";e.context&&(a+=` ${e.context}`),e.file&&(a+=` ${R("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),Ve(a)}var re={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},ft={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},Ls=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),np=Object.values(re).filter(e=>re.PLAYSINLINE!==e),sp=Object.values(ft),op=[...np,...sp],lp=class extends Pe.HTMLElement{static get observedAttributes(){return op}constructor(){super()}attributeChangedCallback(e,t,a){var i,r;switch(e){case ft.MUTED:{this.media&&(this.media.muted=a!=null,this.media.defaultMuted=a!=null);return}case ft.VOLUME:{let n=(i=de(a))!=null?i:1;this.media&&(this.media.volume=n);return}case ft.PLAYBACKRATE:{let n=(r=de(a))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var e,t;return(t=(e=this.media)==null?void 0:e.play())!=null?t:Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}load(){var e;(e=this.media)==null||e.load()}get media(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return(t=(e=this.media)==null?void 0:e.paused)!=null?t:!0}get duration(){var e,t;return(t=(e=this.media)==null?void 0:e.duration)!=null?t:NaN}get ended(){var e,t;return(t=(e=this.media)==null?void 0:e.ended)!=null?t:!1}get buffered(){var e,t;return(t=(e=this.media)==null?void 0:e.buffered)!=null?t:Ls}get seekable(){var e,t;return(t=(e=this.media)==null?void 0:e.seekable)!=null?t:Ls}get readyState(){var e,t;return(t=(e=this.media)==null?void 0:e.readyState)!=null?t:0}get videoWidth(){var e,t;return(t=(e=this.media)==null?void 0:e.videoWidth)!=null?t:0}get videoHeight(){var e,t;return(t=(e=this.media)==null?void 0:e.videoHeight)!=null?t:0}get currentSrc(){var e,t;return(t=(e=this.media)==null?void 0:e.currentSrc)!=null?t:""}get currentTime(){var e,t;return(t=(e=this.media)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return(t=(e=this.media)==null?void 0:e.volume)!=null?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return(t=(e=this.media)==null?void 0:e.playbackRate)!=null?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return(e=de(this.getAttribute(ft.PLAYBACKRATE)))!=null?e:1}set defaultPlaybackRate(e){e!=null?this.setAttribute(ft.PLAYBACKRATE,`${e}`):this.removeAttribute(ft.PLAYBACKRATE)}get crossOrigin(){return sa(this,re.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(re.CROSSORIGIN,`${e}`)}get autoplay(){return sa(this,re.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute(re.AUTOPLAY,typeof e=="string"?e:""):this.removeAttribute(re.AUTOPLAY)}get loop(){return sa(this,re.LOOP)!=null}set loop(e){e?this.setAttribute(re.LOOP,""):this.removeAttribute(re.LOOP)}get muted(){var e,t;return(t=(e=this.media)==null?void 0:e.muted)!=null?t:!1}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return sa(this,re.MUTED)!=null}set defaultMuted(e){e?this.setAttribute(re.MUTED,""):this.removeAttribute(re.MUTED)}get playsInline(){return sa(this,re.PLAYSINLINE)!=null}set playsInline(e){ve("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(re.PRELOAD,e):this.removeAttribute(re.PRELOAD)}};function sa(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var Ms=lp,up=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,oa=new WeakMap,dp=class Hl{constructor(t,a){this.element=t,this.type=a,this.element.addEventListener(this.type,this);let i=oa.get(this.element);i&&i.set(this.type,this)}set(t){if(typeof t=="function")this.handleEvent=t.bind(this.element);else if(typeof t=="object"&&typeof t.handleEvent=="function")this.handleEvent=t.handleEvent.bind(t);else{this.element.removeEventListener(this.type,this);let a=oa.get(this.element);a&&a.delete(this.type)}}static for(t){oa.has(t.element)||oa.set(t.element,new Map);let a=t.attributeName.slice(2),i=oa.get(t.element);return i&&i.has(a)?i.get(a):new Hl(t.element,a)}};function cp(e,t){return e instanceof Ae&&e.attributeName.startsWith("on")?(dp.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),!0):!1}function mp(e,t){return t instanceof Wl&&e instanceof zt?(t.renderInto(e),!0):!1}function hp(e,t){return t instanceof DocumentFragment&&e instanceof zt?(t.childNodes.length&&e.replace(...t.childNodes),!0):!1}function pp(e,t){if(e instanceof Ae){let a=e.attributeNamespace,i=e.element.getAttributeNS(a,e.attributeName);return String(t)!==i&&(e.value=String(t)),!0}return e.value=String(t),!0}function vp(e,t){if(e instanceof Ae&&t instanceof Element){let a=e.element;return a[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),a[e.attributeName]=t),!0}return!1}function fp(e,t){if(typeof t=="boolean"&&e instanceof Ae){let a=e.attributeNamespace,i=e.element.hasAttributeNS(a,e.attributeName);return t!==i&&(e.booleanValue=t),!0}return!1}function bp(e,t){return t===!1&&e instanceof zt?(e.replace(""),!0):!1}function _p(e,t){vp(e,t)||fp(e,t)||cp(e,t)||bp(e,t)||mp(e,t)||hp(e,t)||pp(e,t)}var fr=new Map,Ps=new WeakMap,$s=new WeakMap,Wl=class{constructor(t,a,i){this.strings=t,this.values=a,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if(fr.has(this.stringsKey))return fr.get(this.stringsKey);{let t=Gn.createElement("template"),a=this.strings.length-1;return t.innerHTML=this.strings.reduce((i,r,n)=>i+r+(n<a?`{{ ${n} }}`:""),""),fr.set(this.stringsKey,t),t}}renderInto(t){var a;let i=this.template;if(Ps.get(t)!==i){Ps.set(t,i);let n=new Gi(i,this.values,this.processor);$s.set(t,n),t instanceof zt?t.replace(...n.children):t.appendChild(n);return}let r=$s.get(t);(a=r?.update)==null||a.call(r,this.values)}},gp={processCallback(e,t,a){var i;if(a){for(let[r,n]of t)if(r in a){let s=(i=a[r])!=null?i:"";_p(n,s)}}}};function _i(e,...t){return new Wl(e,t,gp)}function yp(e,t){e.renderInto(t)}var Ep=e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},Tp=e=>_i`
  <style>
    ${Ep(e)}
    ${up}
  </style>
  ${Rp(e)}
`,kp=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return jn(e.streamType)==="live"&&(t+=" noarrowleft noarrowright"),t},Ap={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},wp=Object.values(Ap).join(", "),Rp=e=>{var t,a,i,r,n,s,l,o,u,c,h,m,d,f,y,_,g,b,p,k,C,I,M,H,V,$,N,ue,Se,Ce,ae,me,Xe,Je,et,De,ne;return _i`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${(t=e.defaultStreamType)!=null?t:!1}"
    hotkeys="${kp(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!((a=e.streamType)!=null&&a.includes(U.LIVE))&&e.targetLiveWindow!==0}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${(i=e.audio)!=null?i:!1}"
    style="${(r=zh({"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${(n=e.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=e.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(l=e.playbackRates)!=null?l:!1}"
    defaultshowremainingtime="${(o=e.defaultShowRemainingTime)!=null?o:!1}"
    defaultduration="${(u=e.defaultDuration)!=null?u:!1}"
    hideduration="${(c=e.hideDuration)!=null?c:!1}"
    title="${(h=e.title)!=null?h:!1}"
    videotitle="${(m=e.videoTitle)!=null?m:!1}"
    proudlydisplaymuxbadge="${(d=e.proudlyDisplayMuxBadge)!=null?d:!1}"
    exportparts="${wp}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${(f=e.noHotKeys)!=null?f:!1}"
      target-live-window="${(y=e.targetLiveWindow)!=null?y:!1}"
      stream-type="${(_=jn(e.streamType))!=null?_:!1}"
      crossorigin="${(g=e.crossOrigin)!=null?g:""}"
      playsinline
      autoplay="${(b=e.autoplay)!=null?b:!1}"
      muted="${(p=e.muted)!=null?p:!1}"
      loop="${(k=e.loop)!=null?k:!1}"
      preload="${(C=e.preload)!=null?C:!1}"
      debug="${(I=e.debug)!=null?I:!1}"
      prefer-cmcd="${(M=e.preferCmcd)!=null?M:!1}"
      disable-tracking="${(H=e.disableTracking)!=null?H:!1}"
      disable-cookies="${(V=e.disableCookies)!=null?V:!1}"
      prefer-playback="${($=e.preferPlayback)!=null?$:!1}"
      start-time="${e.startTime!=null?e.startTime:!1}"
      beacon-collection-domain="${(N=e.beaconCollectionDomain)!=null?N:!1}"
      player-init-time="${(ue=e.playerInitTime)!=null?ue:!1}"
      player-software-name="${(Se=e.playerSoftwareName)!=null?Se:!1}"
      player-software-version="${(Ce=e.playerSoftwareVersion)!=null?Ce:!1}"
      env-key="${(ae=e.envKey)!=null?ae:!1}"
      custom-domain="${(me=e.customDomain)!=null?me:!1}"
      src="${e.src?e.src:e.playbackId?Sr(e):!1}"
      cast-src="${e.src?e.src:e.playbackId?Sr(e):!1}"
      cast-receiver="${(Xe=e.castReceiver)!=null?Xe:!1}"
      drm-token="${(et=(Je=e.tokens)==null?void 0:Je.drm)!=null?et:!1}"
      exportparts="video"
      disable-pseudo-ended="${(De=e.disablePseudoEnded)!=null?De:!1}"
    >
      ${e.storyboard?_i`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:_i``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${e.poster?e.poster:!1}"
        placeholdersrc="${(ne=e.placeholder)!=null?ne:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},Kl=e=>e.charAt(0).toUpperCase()+e.slice(1),Sp=(e,t=!1)=>{var a,i;if(e.muxCode){let r=Kl((a=e.errorCategory)!=null?a:"video"),n=Yi((i=e.errorCategory)!=null?i:Y.VIDEO);if(e.muxCode===S.NETWORK_OFFLINE)return R("Your device appears to be offline",t);if(e.muxCode===S.NETWORK_TOKEN_EXPIRED)return R("{category} URL has expired",t).format({category:r});if([S.NETWORK_TOKEN_SUB_MISMATCH,S.NETWORK_TOKEN_AUD_MISMATCH,S.NETWORK_TOKEN_AUD_MISSING,S.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return R("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===S.NETWORK_TOKEN_MISSING)return R("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===S.NETWORK_NOT_FOUND)return R("{category} does not exist",t).format({category:r});if(e.muxCode===S.NETWORK_NOT_READY){let s=e.streamType==="live"?"Live stream":"Video";return R("{mediaType} is not currently available",t).format({mediaType:s})}}if(e.code){if(e.code===A.MEDIA_ERR_NETWORK)return R("Network Error",t);if(e.code===A.MEDIA_ERR_DECODE)return R("Media Error",t);if(e.code===A.MEDIA_ERR_SRC_NOT_SUPPORTED)return R("Source Not Supported",t)}return R("Error",t)},Cp=(e,t=!1)=>{var a,i;if(e.muxCode){let r=Kl((a=e.errorCategory)!=null?a:"video"),n=Yi((i=e.errorCategory)!=null?i:Y.VIDEO);return e.muxCode===S.NETWORK_OFFLINE?R("Check your internet connection and try reloading this video.",t):e.muxCode===S.NETWORK_TOKEN_EXPIRED?R("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===S.NETWORK_TOKEN_SUB_MISMATCH?R("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===S.NETWORK_TOKEN_MALFORMED?R("{category} URL is formatted incorrectly",t).format({category:r}):[S.NETWORK_TOKEN_AUD_MISMATCH,S.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?R("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[S.NETWORK_TOKEN_MISSING,S.NETWORK_INVALID_URL].includes(e.muxCode)?R("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===S.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===A.MEDIA_ERR_NETWORK||e.code===A.MEDIA_ERR_DECODE||(e.code,A.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},Dp=(e,t=!1)=>{let a=Sp(e,t).toString(),i=Cp(e,t).toString();return{title:a,message:i}},Ip=e=>{if(e.muxCode){if(e.muxCode===S.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===S.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([S.NETWORK_TOKEN_AUD_MISMATCH,S.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===S.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===S.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===S.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===S.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===A.MEDIA_ERR_NETWORK)return"";if(e.code===A.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===A.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},Us=(e,t)=>{let a=Ip(e);return{message:e.message,context:e.context,file:a}},xp=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,rn=Gn.createElement("template");"innerHTML"in rn&&(rn.innerHTML=xp);var Bs,Hs,ql=class extends ji{};ql.template=(Hs=(Bs=rn.content)==null?void 0:Bs.children)==null?void 0:Hs[0];Pe.customElements.get("media-theme-gerwig")||Pe.customElements.define("media-theme-gerwig",ql);var Op="gerwig",Fe={SRC:"src",POSTER:"poster"},E={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},nn=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","proudlydisplaymuxbadge"];function Np(e,t){var a,i;return{src:!e.playbackId&&e.src,playbackId:e.playbackId,hasSrc:!!e.playbackId||!!e.src||!!e.currentSrc,poster:e.poster,storyboard:e.storyboard,storyboardSrc:e.getAttribute(E.STORYBOARD_SRC),placeholder:e.getAttribute("placeholder"),themeTemplate:Mp(e),thumbnailTime:!e.tokens.thumbnail&&e.thumbnailTime,autoplay:e.autoplay,crossOrigin:e.crossOrigin,loop:e.loop,noHotKeys:e.hasAttribute(E.NOHOTKEYS),hotKeys:e.getAttribute(E.HOTKEYS),muted:e.muted,paused:e.paused,preload:e.preload,envKey:e.envKey,preferCmcd:e.preferCmcd,debug:e.debug,disableTracking:e.disableTracking,disableCookies:e.disableCookies,tokens:e.tokens,beaconCollectionDomain:e.beaconCollectionDomain,maxResolution:e.maxResolution,minResolution:e.minResolution,programStartTime:e.programStartTime,programEndTime:e.programEndTime,assetStartTime:e.assetStartTime,assetEndTime:e.assetEndTime,renditionOrder:e.renditionOrder,metadata:e.metadata,playerInitTime:e.playerInitTime,playerSoftwareName:e.playerSoftwareName,playerSoftwareVersion:e.playerSoftwareVersion,startTime:e.startTime,preferPlayback:e.preferPlayback,audio:e.audio,defaultStreamType:e.defaultStreamType,targetLiveWindow:e.getAttribute(v.TARGET_LIVE_WINDOW),streamType:jn(e.getAttribute(v.STREAM_TYPE)),primaryColor:e.getAttribute(E.PRIMARY_COLOR),secondaryColor:e.getAttribute(E.SECONDARY_COLOR),accentColor:e.getAttribute(E.ACCENT_COLOR),forwardSeekOffset:e.forwardSeekOffset,backwardSeekOffset:e.backwardSeekOffset,defaultHiddenCaptions:e.defaultHiddenCaptions,defaultDuration:e.defaultDuration,defaultShowRemainingTime:e.defaultShowRemainingTime,hideDuration:Pp(e),playbackRates:e.getAttribute(E.PLAYBACK_RATES),customDomain:(a=e.getAttribute(v.CUSTOM_DOMAIN))!=null?a:void 0,title:e.getAttribute(E.TITLE),videoTitle:(i=e.getAttribute(E.VIDEO_TITLE))!=null?i:e.getAttribute(E.TITLE),novolumepref:e.hasAttribute(E.NO_VOLUME_PREF),proudlyDisplayMuxBadge:e.hasAttribute(E.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:e.castReceiver,disablePseudoEnded:e.hasAttribute(E.DISABLE_PSEUDO_ENDED),...t,extraSourceParams:e.extraSourceParams}}var Lp=ao.formatErrorMessage;ao.formatErrorMessage=e=>{var t,a;if(e instanceof A){let i=Dp(e,!1);return`
      ${i!=null&&i.title?`<h3>${i.title}</h3>`:""}
      ${i!=null&&i.message||i!=null&&i.linkUrl?`<p>
        ${i?.message}
        ${i!=null&&i.linkUrl?`<a
              href="${i.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(t=i.linkText)!=null?t:""} ${R("(opens in a new window)")}"
              >${(a=i.linkText)!=null?a:i.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return Lp(e)};function Mp(e){var t,a;let i=e.theme;if(i){let r=(a=(t=e.getRootNode())==null?void 0:t.getElementById)==null?void 0:a.call(t,i);if(r&&r instanceof HTMLTemplateElement)return r;i.startsWith("media-theme-")||(i=`media-theme-${i}`);let n=Pe.customElements.get(i);if(n!=null&&n.template)return n.template}}function Pp(e){var t;let a=(t=e.mediaController)==null?void 0:t.querySelector("media-time-display");return a&&getComputedStyle(a).getPropertyValue("--media-duration-display-display").trim()==="none"}function Ws(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(a=>a.startsWith("metadata-")).reduce((a,i)=>{let r=e.getAttribute(i);return r!==null&&(a[i.replace(/^metadata-/,"").replace(/-/g,"_")]=r),a},t)}var $p=Object.values(v),Up=Object.values(Fe),Bp=Object.values(E),Ks=$l(),qs="mux-player",Ys={isDialogOpen:!1},Hp={redundant_streams:!0},gi,yi,Ei,bt,Ti,Vt,G,st,Yl,sn,_t,Fs,Vs,Gs,js,Wp=class extends Ms{constructor(){super(),Ee(this,G),Ee(this,gi),Ee(this,yi,!1),Ee(this,Ei,{}),Ee(this,bt,!0),Ee(this,Ti,new rp(this,"hotkeys")),Ee(this,Vt,{...Ys,onCloseErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&Q(this,G,sn).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&(Ml(this,Gn.activeElement)||e.preventDefault())}}),He(this,gi,gn()),this.attachShadow({mode:"open"}),Q(this,G,Yl).call(this),this.isConnected&&Q(this,G,st).call(this)}static get NAME(){return qs}static get VERSION(){return Ks}static get observedAttributes(){var e;return[...(e=Ms.observedAttributes)!=null?e:[],...Up,...$p,...Bp]}get mediaTheme(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return(t=(e=this.mediaTheme)==null?void 0:e.shadowRoot)==null?void 0:t.querySelector("media-controller")}connectedCallback(){let e=this.media;e&&(e.metadata=Ws(this))}attributeChangedCallback(e,t,a){switch(Q(this,G,st).call(this),super.attributeChangedCallback(e,t,a),e){case E.HOTKEYS:B(this,Ti).value=a;break;case E.THUMBNAIL_TIME:{a!=null&&this.tokens.thumbnail&&Ve(R("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case E.THUMBNAIL_TOKEN:{if(a){let i=Ht(a);if(i){let{aud:r}=i,n=Ta.THUMBNAIL;r!==n&&Ve(R("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case E.STORYBOARD_TOKEN:{if(a){let i=Ht(a);if(i){let{aud:r}=i,n=Ta.STORYBOARD;r!==n&&Ve(R("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case E.DRM_TOKEN:{if(a){let i=Ht(a);if(i){let{aud:r}=i,n=Ta.DRM;r!==n&&Ve(R("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case v.PLAYBACK_ID:{a!=null&&a.includes("?token")&&ve(R("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:a}));break}case v.STREAM_TYPE:a&&![U.LIVE,U.ON_DEMAND,U.UNKNOWN].includes(a)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=a.includes("dvr")?Number.POSITIVE_INFINITY:0:Bl({file:"invalid-stream-type.md",message:R("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):a===U.LIVE?this.getAttribute(E.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[v.PLAYBACK_ID,Fe.SRC,E.PLAYBACK_TOKEN].includes(e)&&t!==a&&He(this,Vt,{...B(this,Vt),...Ys}),Q(this,G,_t).call(this,{[ip(e)]:a})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(w.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new Pe.CustomEvent(Ct.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,i)=>{var r;(r=this.mediaController)==null||r.addEventListener(_r.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(w.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new Pe.CustomEvent(Ct.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((t,a)=>{var i;(i=this.mediaController)==null||i.addEventListener(_r.MEDIA_IS_FULLSCREEN,()=>t(),{once:!0})})}get preferCmcd(){var e;return(e=this.getAttribute(v.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Di.includes(e)?this.setAttribute(v.PREFER_CMCD,e):Ve(`Invalid value for preferCmcd. Must be one of ${Di.join()}`):this.removeAttribute(v.PREFER_CMCD))}get hasPlayed(){var e,t;return(t=(e=this.mediaController)==null?void 0:e.hasAttribute(w.MEDIA_HAS_PLAYED))!=null?t:!1}get inLiveWindow(){var e;return(e=this.mediaController)==null?void 0:e.hasAttribute(w.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return(e=this.media)==null?void 0:e._hls}get mux(){var e;return(e=this.media)==null?void 0:e.mux}get theme(){var e;return(e=this.getAttribute(E.THEME))!=null?e:Op}set theme(e){this.setAttribute(E.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let a of e.getAttributeNames()){if(nn.includes(a))continue;let i=e.getAttribute(a);t[Nl(a)]=i===""?!0:i}return t}set themeProps(e){var t,a;Q(this,G,st).call(this);let i={...this.themeProps,...e};for(let r in i){if(nn.includes(r))continue;let n=e?.[r];typeof n=="boolean"||n==null?(t=this.mediaTheme)==null||t.toggleAttribute(an(r),!!n):(a=this.mediaTheme)==null||a.setAttribute(an(r),n)}}get playbackId(){var e;return(e=this.getAttribute(v.PLAYBACK_ID))!=null?e:void 0}set playbackId(e){e?this.setAttribute(v.PLAYBACK_ID,e):this.removeAttribute(v.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?(e=ht(this,Fe.SRC))!=null?e:void 0:(t=this.getAttribute(Fe.SRC))!=null?t:void 0}set src(e){e?this.setAttribute(Fe.SRC,e):this.removeAttribute(Fe.SRC)}get poster(){var e;let t=this.getAttribute(Fe.POSTER);if(t!=null)return t;let{tokens:a}=this;if(a.playback&&!a.thumbnail){Ve("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return ep(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(e=this.thumbnailTime)!=null?e:this.startTime,programTime:this.programStartTime,token:a.thumbnail})}set poster(e){e||e===""?this.setAttribute(Fe.POSTER,e):this.removeAttribute(Fe.POSTER)}get storyboardSrc(){var e;return(e=this.getAttribute(E.STORYBOARD_SRC))!=null?e:void 0}set storyboardSrc(e){e?this.setAttribute(E.STORYBOARD_SRC,e):this.removeAttribute(E.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;if(this.storyboardSrc&&!e.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[U.LIVE,U.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard))return tp(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(E.AUDIO)}set audio(e){if(!e){this.removeAttribute(E.AUDIO);return}this.setAttribute(E.AUDIO,"")}get hotkeys(){return B(this,Ti)}get nohotkeys(){return this.hasAttribute(E.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(E.NOHOTKEYS);return}this.setAttribute(E.NOHOTKEYS,"")}get thumbnailTime(){return de(this.getAttribute(E.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(E.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return(t=(e=this.getAttribute(E.VIDEO_TITLE))!=null?e:this.getAttribute(E.TITLE))!=null?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(E.VIDEO_TITLE,e):this.removeAttribute(E.VIDEO_TITLE))}get placeholder(){var e;return(e=ht(this,E.PLACEHOLDER))!=null?e:""}set placeholder(e){this.setAttribute(E.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let a=this.getAttribute(E.PRIMARY_COLOR);if(a!=null||this.mediaTheme&&(a=(t=(e=Pe.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_primary-color"))==null?void 0:t.trim(),a))return a}set primaryColor(e){this.setAttribute(E.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let a=this.getAttribute(E.SECONDARY_COLOR);if(a!=null||this.mediaTheme&&(a=(t=(e=Pe.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_secondary-color"))==null?void 0:t.trim(),a))return a}set secondaryColor(e){this.setAttribute(E.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let a=this.getAttribute(E.ACCENT_COLOR);if(a!=null||this.mediaTheme&&(a=(t=(e=Pe.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_accent-color"))==null?void 0:t.trim(),a))return a}set accentColor(e){this.setAttribute(E.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(E.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(E.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(E.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(E.PLAYBACK_RATES))return this.getAttribute(E.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(E.PLAYBACK_RATES);return}this.setAttribute(E.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return(e=de(this.getAttribute(E.FORWARD_SEEK_OFFSET)))!=null?e:10}set forwardSeekOffset(e){this.setAttribute(E.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return(e=de(this.getAttribute(E.BACKWARD_SEEK_OFFSET)))!=null?e:10}set backwardSeekOffset(e){this.setAttribute(E.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(E.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(E.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(E.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return de(this.getAttribute(E.DEFAULT_DURATION))}set defaultDuration(e){e==null?this.removeAttribute(E.DEFAULT_DURATION):this.setAttribute(E.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(v.PLAYER_INIT_TIME)?de(this.getAttribute(v.PLAYER_INIT_TIME)):B(this,gi)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(v.PLAYER_INIT_TIME):this.setAttribute(v.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=this.getAttribute(v.PLAYER_SOFTWARE_NAME))!=null?e:qs}get playerSoftwareVersion(){var e;return(e=this.getAttribute(v.PLAYER_SOFTWARE_VERSION))!=null?e:Ks}get beaconCollectionDomain(){var e;return(e=this.getAttribute(v.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(v.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(v.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return(e=this.getAttribute(v.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(v.MAX_RESOLUTION,e):this.removeAttribute(v.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(v.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(v.MIN_RESOLUTION,e):this.removeAttribute(v.MIN_RESOLUTION))}get renditionOrder(){var e;return(e=this.getAttribute(v.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(v.RENDITION_ORDER,e):this.removeAttribute(v.RENDITION_ORDER))}get programStartTime(){return de(this.getAttribute(v.PROGRAM_START_TIME))}set programStartTime(e){e==null?this.removeAttribute(v.PROGRAM_START_TIME):this.setAttribute(v.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return de(this.getAttribute(v.PROGRAM_END_TIME))}set programEndTime(e){e==null?this.removeAttribute(v.PROGRAM_END_TIME):this.setAttribute(v.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return de(this.getAttribute(v.ASSET_START_TIME))}set assetStartTime(e){e==null?this.removeAttribute(v.ASSET_START_TIME):this.setAttribute(v.ASSET_START_TIME,`${e}`)}get assetEndTime(){return de(this.getAttribute(v.ASSET_END_TIME))}set assetEndTime(e){e==null?this.removeAttribute(v.ASSET_END_TIME):this.setAttribute(v.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(E.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(E.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,a])=>(e[t]=a,e),{}):Hp}set extraSourceParams(e){e==null?this.removeAttribute(E.EXTRA_SOURCE_PARAMS):this.setAttribute(E.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return(e=this.getAttribute(v.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(v.CUSTOM_DOMAIN,e):this.removeAttribute(v.CUSTOM_DOMAIN))}get envKey(){var e;return(e=ht(this,v.ENV_KEY))!=null?e:void 0}set envKey(e){this.setAttribute(v.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(E.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(E.NO_VOLUME_PREF,""):this.removeAttribute(E.NO_VOLUME_PREF)}get debug(){return ht(this,v.DEBUG)!=null}set debug(e){e?this.setAttribute(v.DEBUG,""):this.removeAttribute(v.DEBUG)}get disableTracking(){return ht(this,v.DISABLE_TRACKING)!=null}set disableTracking(e){this.toggleAttribute(v.DISABLE_TRACKING,!!e)}get disableCookies(){return ht(this,v.DISABLE_COOKIES)!=null}set disableCookies(e){e?this.setAttribute(v.DISABLE_COOKIES,""):this.removeAttribute(v.DISABLE_COOKIES)}get streamType(){var e,t,a;return(a=(t=this.getAttribute(v.STREAM_TYPE))!=null?t:(e=this.media)==null?void 0:e.streamType)!=null?a:U.UNKNOWN}set streamType(e){this.setAttribute(v.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,a;return(a=(t=this.getAttribute(E.DEFAULT_STREAM_TYPE))!=null?t:(e=this.mediaController)==null?void 0:e.getAttribute(E.DEFAULT_STREAM_TYPE))!=null?a:U.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(E.DEFAULT_STREAM_TYPE,e):this.removeAttribute(E.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(E.TARGET_LIVE_WINDOW)?+this.getAttribute(E.TARGET_LIVE_WINDOW):(t=(e=this.media)==null?void 0:e.targetLiveWindow)!=null?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(e==null?this.removeAttribute(E.TARGET_LIVE_WINDOW):this.setAttribute(E.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return(e=this.media)==null?void 0:e.liveEdgeStart}get startTime(){return de(ht(this,v.START_TIME))}set startTime(e){this.setAttribute(v.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(v.PREFER_PLAYBACK);if(e===$e.MSE||e===$e.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===$e.MSE||e===$e.NATIVE?this.setAttribute(v.PREFER_PLAYBACK,e):this.removeAttribute(v.PREFER_PLAYBACK))}get metadata(){var e;return(e=this.media)==null?void 0:e.metadata}set metadata(e){if(Q(this,G,st).call(this),!this.media){ve("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...Ws(this),...e}}get _hlsConfig(){var e;return(e=this.media)==null?void 0:e._hlsConfig}set _hlsConfig(e){if(Q(this,G,st).call(this),!this.media){ve("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(Q(this,G,st).call(this),!this.media){ve("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(t=this.media)==null?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return(e=this.media)==null?void 0:e.activeCuePoint}get cuePoints(){var e,t;return(t=(e=this.media)==null?void 0:e.cuePoints)!=null?t:[]}addChapters(e){var t;if(Q(this,G,st).call(this),!this.media){ve("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(t=this.media)==null?void 0:t.addChapters(e)}get activeChapter(){var e;return(e=this.media)==null?void 0:e.activeChapter}get chapters(){var e,t;return(t=(e=this.media)==null?void 0:e.chapters)!=null?t:[]}getStartDate(){var e;return(e=this.media)==null?void 0:e.getStartDate()}get currentPdt(){var e;return(e=this.media)==null?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(E.PLAYBACK_TOKEN),t=this.getAttribute(E.DRM_TOKEN),a=this.getAttribute(E.THUMBNAIL_TOKEN),i=this.getAttribute(E.STORYBOARD_TOKEN);return{...B(this,Ei),...e!=null?{playback:e}:{},...t!=null?{drm:t}:{},...a!=null?{thumbnail:a}:{},...i!=null?{storyboard:i}:{}}}set tokens(e){He(this,Ei,e??{})}get playbackToken(){var e;return(e=this.getAttribute(E.PLAYBACK_TOKEN))!=null?e:void 0}set playbackToken(e){this.setAttribute(E.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return(e=this.getAttribute(E.DRM_TOKEN))!=null?e:void 0}set drmToken(e){this.setAttribute(E.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return(e=this.getAttribute(E.THUMBNAIL_TOKEN))!=null?e:void 0}set thumbnailToken(e){this.setAttribute(E.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return(e=this.getAttribute(E.STORYBOARD_TOKEN))!=null?e:void 0}set storyboardToken(e){this.setAttribute(E.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,a,i){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return vn(n,e,t,a,i)}removeTextTrack(e){var t;let a=(t=this.media)==null?void 0:t.nativeEl;if(a)return Hc(a,e)}get textTracks(){var e;return(e=this.media)==null?void 0:e.textTracks}get castReceiver(){var e;return(e=this.getAttribute(E.CAST_RECEIVER))!=null?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(E.CAST_RECEIVER,e):this.removeAttribute(E.CAST_RECEIVER))}get castCustomData(){var e;return(e=this.media)==null?void 0:e.castCustomData}set castCustomData(e){if(!this.media){ve("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(E.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(E.NO_TOOLTIPS);return}this.setAttribute(E.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(E.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(E.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(E.PROUDLY_DISPLAY_MUX_BADGE)}};gi=new WeakMap,yi=new WeakMap,Ei=new WeakMap,bt=new WeakMap,Ti=new WeakMap,Vt=new WeakMap,G=new WeakSet,st=function(){var e,t,a,i;if(!B(this,yi)){He(this,yi,!0),Q(this,G,_t).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Pe.HTMLElement))throw""}catch{ve("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{ve("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof su))throw""}catch{ve("<media-controller> failed to upgrade!")}Q(this,G,Fs).call(this),Q(this,G,Vs).call(this),Q(this,G,Gs).call(this),He(this,bt,(t=(e=this.mediaController)==null?void 0:e.hasAttribute(Xi.USER_INACTIVE))!=null?t:!0),Q(this,G,js).call(this),(a=this.media)==null||a.addEventListener("streamtypechange",()=>Q(this,G,_t).call(this)),(i=this.media)==null||i.addEventListener("loadstart",()=>Q(this,G,_t).call(this))}},Yl=function(){var e,t;try{(e=window?.CSS)==null||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(t=window?.CSS)==null||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},sn=function(e){Object.assign(B(this,Vt),e),Q(this,G,_t).call(this)},_t=function(e={}){yp(Tp(Np(this,{...B(this,Vt),...e})),this.shadowRoot)},Fs=function(){let e=t=>{var a,i;if(!(t!=null&&t.startsWith("theme-")))return;let r=t.replace(/^theme-/,"");if(nn.includes(r))return;let n=this.getAttribute(t);n!=null?(a=this.mediaTheme)==null||a.setAttribute(r,n):(i=this.mediaTheme)==null||i.removeAttribute(r)};new MutationObserver(t=>{for(let{attributeName:a}of t)e(a)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},Vs=function(){let e=t=>{var a;let i=(a=this.media)==null?void 0:a.error;if(!(i instanceof A)){let{message:n,code:s}=i??{};i=new A(n,s)}if(!(i!=null&&i.fatal)){Ve(i),i.data&&Ve(`${i.name} data:`,i.data);return}let r=Us(i);r.message&&Bl(r),ve(i),i.data&&ve(`${i.name} data:`,i.data),Q(this,G,sn).call(this,{isDialogOpen:!0})};this.addEventListener("error",e),this.media&&(this.media.errorTranslator=(t={})=>{var a,i,r;if(!(((a=this.media)==null?void 0:a.error)instanceof A))return t;let n=Us((i=this.media)==null?void 0:i.error);return{player_error_code:(r=this.media)==null?void 0:r.error.code,player_error_message:n.message?String(n.message):t.player_error_message,player_error_context:n.context?String(n.context):t.player_error_context}})},Gs=function(){var e,t,a,i;let r=()=>Q(this,G,_t).call(this);(t=(e=this.media)==null?void 0:e.textTracks)==null||t.addEventListener("addtrack",r),(i=(a=this.media)==null?void 0:a.textTracks)==null||i.addEventListener("removetrack",r)},js=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let a,i=new WeakMap,r=()=>this.streamType===U.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(o,u,c=!1)=>{r()||Array.from(o&&o.activeCues||[]).forEach(h=>{if(!(!h.snapToLines||h.line<-5||h.line>=0&&h.line<10))if(!u||this.paused){let m=h.text.split(`
`).length,d=-3;this.streamType===U.LIVE&&(d=-2);let f=d-m;if(h.line===f&&!c)return;i.has(h)||i.set(h,h.line),h.line=f}else setTimeout(()=>{h.line=i.get(h)||"auto"},500)})},s=()=>{var o,u;n(a,(u=(o=this.mediaController)==null?void 0:o.hasAttribute(Xi.USER_INACTIVE))!=null?u:!1)},l=()=>{var o,u;let c=Array.from(((u=(o=this.mediaController)==null?void 0:o.media)==null?void 0:u.textTracks)||[]).filter(h=>["subtitles","captions"].includes(h.kind)&&h.mode==="showing")[0];c!==a&&a?.removeEventListener("cuechange",s),a=c,a?.addEventListener("cuechange",s),n(a,B(this,bt))};l(),(e=this.textTracks)==null||e.addEventListener("change",l),(t=this.textTracks)==null||t.addEventListener("addtrack",l),this.addEventListener("userinactivechange",()=>{var o,u;let c=(u=(o=this.mediaController)==null?void 0:o.hasAttribute(Xi.USER_INACTIVE))!=null?u:!0;B(this,bt)!==c&&(He(this,bt,c),n(a,B(this,bt)))})};function ht(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var Zs=Wp,Fl=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends Fl{}globalThis.DocumentFragment=e}var Kp=class extends Fl{},qp={get(e){},define(e,t,a){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Kp)}},Yp={customElements:qp},Fp=typeof window>"u"||typeof globalThis.customElements>"u",br=Fp?Yp:globalThis;br.customElements.get("mux-player")||(br.customElements.define("mux-player",Zs),br.MuxPlayerElement=Zs);var Vl=parseInt(Sa.version)>=19,zs={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},Vp=e=>e==null,Gp=(e,t)=>Vp(t)?!1:e in t,jp=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),Zp=(e,t)=>{if(!(!Vl&&typeof t=="boolean"&&!t)){if(Gp(e,zs))return zs[e];if(typeof t<"u")return/[A-Z]/.test(e)?jp(e):e}},zp=(e,t)=>!Vl&&typeof e=="boolean"?"":e,Qp=(e={})=>{let{ref:t,...a}=e;return Object.entries(a).reduce((i,[r,n])=>{let s=Zp(r,n);if(!s)return i;let l=zp(n);return i[s]=l,i},{})};function Qs(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Xp(...e){return t=>{let a=!1,i=e.map(r=>{let n=Qs(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<i.length;r++){let n=i[r];typeof n=="function"?n():Qs(e[r],null)}}}}function Jp(...e){return Ca.useCallback(Xp(...e),e)}var ev=Object.prototype.hasOwnProperty,tv=(e,t)=>{if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:e.some((r,n)=>t[n]===r);let a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(let r=0;r<a.length;r++)if(!ev.call(t,a[r])||!Object.is(e[a[r]],t[a[r]]))return!1;return!0},Gl=(e,t,a)=>!tv(t,e[a]),av=(e,t,a)=>{e[a]=t},iv=(e,t,a,i=av,r=Gl)=>Ca.useEffect(()=>{let n=a?.current;n&&r(n,t,e)&&i(n,t,e)},[a?.current,t]),xe=iv,rv=()=>{try{return"3.6.0"}catch{}return"UNKNOWN"},nv=rv(),sv=()=>nv,F=(e,t,a)=>Ca.useEffect(()=>{let i=t?.current;if(!i||!a)return;let r=e,n=a;return i.addEventListener(r,n),()=>{i.removeEventListener(r,n)}},[t?.current,a,e]),ov=Sa.forwardRef(({children:e,...t},a)=>Sa.createElement("mux-player",{suppressHydrationWarning:!0,...Qp(t),ref:a},e)),lv=(e,t)=>{let{onAbort:a,onCanPlay:i,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:l,onLoadedMetadata:o,onProgress:u,onDurationChange:c,onVolumeChange:h,onRateChange:m,onResize:d,onWaiting:f,onPlay:y,onPlaying:_,onTimeUpdate:g,onPause:b,onSeeking:p,onSeeked:k,onStalled:C,onSuspend:I,onEnded:M,onError:H,onCuePointChange:V,onChapterChange:$,metadata:N,tokens:ue,paused:Se,playbackId:Ce,playbackRates:ae,currentTime:me,themeProps:Xe,extraSourceParams:Je,castCustomData:et,_hlsConfig:De,...ne}=t;return xe("tokens",ue,e),xe("playbackId",Ce,e),xe("playbackRates",ae,e),xe("metadata",N,e),xe("extraSourceParams",Je,e),xe("_hlsConfig",De,e),xe("themeProps",Xe,e),xe("castCustomData",et,e),xe("paused",Se,e,(Ie,qe)=>{qe!=null&&(qe?Ie.pause():Ie.play())},(Ie,qe,Qi)=>Ie.hasAttribute("autoplay")&&!Ie.hasPlayed?!1:Gl(Ie,qe,Qi)),xe("currentTime",me,e,(Ie,qe)=>{qe!=null&&(Ie.currentTime=qe)}),F("abort",e,a),F("canplay",e,i),F("canplaythrough",e,r),F("emptied",e,n),F("loadstart",e,s),F("loadeddata",e,l),F("loadedmetadata",e,o),F("progress",e,u),F("durationchange",e,c),F("volumechange",e,h),F("ratechange",e,m),F("resize",e,d),F("waiting",e,f),F("play",e,y),F("playing",e,_),F("timeupdate",e,g),F("pause",e,b),F("seeking",e,p),F("seeked",e,k),F("stalled",e,C),F("suspend",e,I),F("ended",e,M),F("error",e,H),F("cuepointchange",e,V),F("chapterchange",e,$),[ne]},uv=sv(),dv="mux-player-react",cv=Sa.forwardRef((e,t)=>{var a;let i=Ca.useRef(null),r=Jp(i,t),[n]=lv(i,e),[s]=Ca.useState((a=e.playerInitTime)!=null?a:gn());return Sa.createElement(ov,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:dv,playerSoftwareVersion:uv,playerInitTime:s,...n})}),Rv=cv;export{vv as MaxResolution,A as MediaError,fv as MinResolution,bv as RenditionOrder,Rv as default,gn as generatePlayerInitTime,dv as playerSoftwareName,uv as playerSoftwareVersion};
