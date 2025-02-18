"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[363],{8363:function(e,t,n){let r,l,i,a,o;n.d(t,{u:function(){return G}});var u=n(2265),s=n.t(u,2);function c(){let e=[],t={addEventListener:(e,n,r,l)=>(e.addEventListener(n,r,l),t.add(()=>e.removeEventListener(n,r,l))),requestAnimationFrame(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];let l=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(l))},nextFrame(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];let l=setTimeout(...n);return t.add(()=>clearTimeout(l))},microTask(){for(var e,n=arguments.length,r=Array(n),l=0;l<n;l++)r[l]=arguments[l];let i={current:!0};return e=()=>{i.current&&r[0]()},"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e})),t.add(()=>{i.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(e){let t=c();return e(t),this.add(()=>t.dispose())},add:t=>(e.includes(t)||e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function f(){let[e]=(0,u.useState)(c);return(0,u.useEffect)(()=>()=>e.dispose(),[e]),e}var d=Object.defineProperty,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t,n)=>(h(e,"symbol"!=typeof t?t+"":t,n),n);class m{set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}constructor(){v(this,"current",this.detect()),v(this,"handoffState","pending"),v(this,"currentId",0)}}let p=new m,g=(e,t)=>{p.isServer?(0,u.useEffect)(e,t):(0,u.useLayoutEffect)(e,t)};function b(e){let t=(0,u.useRef)(e);return g(()=>{t.current=e},[e]),t}let y=function(e){let t=b(e);return u.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current(...n)},[t])};function E(){let e;let t=(e="undefined"==typeof document,(0,s.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,r]=u.useState(p.isHandoffComplete);return n&&!1===p.isHandoffComplete&&r(!1),u.useEffect(()=>{!0!==n&&r(!0)},[n]),u.useEffect(()=>p.handoff(),[]),!t&&n}let C=Symbol();function F(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=(0,u.useRef)(t);(0,u.useEffect)(()=>{r.current=t},[t]);let l=y(e=>{for(let t of r.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[C]))?void 0:l}var S=((r=S||{})[r.None=0]="None",r[r.Closed=1]="Closed",r[r.Enter=2]="Enter",r[r.Leave=4]="Leave",r);let w=(0,u.createContext)(null);w.displayName="OpenClosedContext";var A=((l=A||{})[l.Open=1]="Open",l[l.Closed=2]="Closed",l[l.Closing=4]="Closing",l[l.Opening=8]="Opening",l);function O(){return(0,u.useContext)(w)}function T(e){let{value:t,children:n}=e;return u.createElement(w.Provider,{value:t},n)}function N(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.from(new Set(t.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}function j(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),l=2;l<n;l++)r[l-2]=arguments[l];if(e in t){let n=t[e];return"function"==typeof n?n(...r):n}let i=Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e=>'"'.concat(e,'"')).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(i,j),i}var k=((i=k||{})[i.None=0]="None",i[i.RenderStrategy=1]="RenderStrategy",i[i.Static=2]="Static",i),P=((a=P||{})[a.Unmount=0]="Unmount",a[a.Hidden=1]="Hidden",a);function R(e){let{ourProps:t,theirProps:n,slot:r,defaultTag:l,features:i,visible:a=!0,name:o,mergeRefs:u}=e;u=null!=u?u:H;let s=L(n,t);if(a)return x(s,r,l,o,u);let c=null!=i?i:0;if(2&c){let{static:e=!1,...t}=s;if(e)return x(t,r,l,o,u)}if(1&c){let{unmount:e=!0,...t}=s;return j(e?0:1,{0:()=>null,1:()=>x({...t,hidden:!0,style:{display:"none"}},r,l,o,u)})}return x(s,r,l,o,u)}function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,l=arguments.length>4?arguments[4]:void 0,{as:i=n,children:a,refName:o="ref",...s}=U(e,["unmount","static"]),c=void 0!==e.ref?{[o]:e.ref}:{},f="function"==typeof a?a(t):a;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t)),s["aria-labelledby"]&&s["aria-labelledby"]===s.id&&(s["aria-labelledby"]=void 0);let d={};if(t){let e=!1,n=[];for(let[r,l]of Object.entries(t))"boolean"==typeof l&&(e=!0),!0===l&&n.push(r.replace(/([A-Z])/g,e=>"-".concat(e.toLowerCase())));if(e)for(let e of(d["data-headlessui-state"]=n.join(" "),n))d["data-".concat(e)]=""}if(i===u.Fragment&&(Object.keys(M(s)).length>0||Object.keys(M(d)).length>0)){if(!(0,u.isValidElement)(f)||Array.isArray(f)&&f.length>1){if(Object.keys(M(s)).length>0)throw Error(['Passing props on "Fragment"!',"","The current component <".concat(r,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(M(s)).concat(Object.keys(M(d))).map(e=>"  - ".concat(e)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>"  - ".concat(e)).join("\n")].join("\n"))}else{let e=f.props,t=null==e?void 0:e.className,n="function"==typeof t?function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return N(t(...n),s.className)}:N(t,s.className),r=L(f.props,M(U(s,["ref"])));for(let e in d)e in r&&delete d[e];return(0,u.cloneElement)(f,Object.assign({},r,d,c,{ref:l(f.ref,c.ref)},n?{className:n}:{}))}}return(0,u.createElement)(i,Object.assign({},U(s,["ref"]),i!==u.Fragment&&c,i!==u.Fragment&&d),f)}function H(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.every(e=>null==e)?void 0:e=>{for(let n of t)null!=n&&("function"==typeof n?n(e):n.current=e)}}function L(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},l={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=l[t]||(l[t]=[]),l[t].push(e[t])):r[t]=e[t];if(r.disabled||r["aria-disabled"])for(let e in l)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e)&&(l[e]=[e=>{var t;return null==(t=null==e?void 0:e.preventDefault)?void 0:t.call(e)}]);for(let e in l)Object.assign(r,{[e](t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(let n of l[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;n(t,...r)}}});return r}function q(e){var t;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function M(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function U(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}function I(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||(null!=(t=e.as)?t:W)!==u.Fragment||1===u.Children.count(e.children)}let D=(0,u.createContext)(null);D.displayName="TransitionContext";var _=((o=_||{}).Visible="visible",o.Hidden="hidden",o);let V=(0,u.createContext)(null);function B(e){return"children"in e?B(e.children):e.current.filter(e=>{let{el:t}=e;return null!==t.current}).filter(e=>{let{state:t}=e;return"visible"===t}).length>0}function K(e,t){let n;let r=b(e),l=(0,u.useRef)([]),i=(n=(0,u.useRef)(!1),g(()=>(n.current=!0,()=>{n.current=!1}),[]),n),a=f(),o=y(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P.Hidden,n=l.current.findIndex(t=>{let{el:n}=t;return n===e});-1!==n&&(j(t,{[P.Unmount](){l.current.splice(n,1)},[P.Hidden](){l.current[n].state="hidden"}}),a.microTask(()=>{var e;!B(l)&&i.current&&(null==(e=r.current)||e.call(r))}))}),s=y(e=>{let t=l.current.find(t=>{let{el:n}=t;return n===e});return t?"visible"!==t.state&&(t.state="visible"):l.current.push({el:e,state:"visible"}),()=>o(e,P.Unmount)}),c=(0,u.useRef)([]),d=(0,u.useRef)(Promise.resolve()),h=(0,u.useRef)({enter:[],leave:[]}),v=y((e,n,r)=>{c.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(t=>{let[n]=t;return n!==e})),null==t||t.chains.current[n].push([e,new Promise(e=>{c.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(h.current[n].map(e=>{let[t,n]=e;return n})).then(()=>e())})]),"enter"===n?d.current=d.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),m=y((e,t,n)=>{Promise.all(h.current[t].splice(0).map(e=>{let[t,n]=e;return n})).then(()=>{var e;null==(e=c.current.shift())||e()}).then(()=>n(t))});return(0,u.useMemo)(()=>({children:l,register:s,unregister:o,onStart:v,onStop:m,wait:d,chains:h}),[s,o,l,v,m,h,d])}V.displayName="NestingContext";let W=u.Fragment,Y=k.RenderStrategy,Z=q(function(e,t){let{show:n,appear:r=!1,unmount:l=!0,...i}=e,a=(0,u.useRef)(null),o=F(...I(e)?[a,t]:null===t?[]:[t]);E();let s=O();if(void 0===n&&null!==s&&(n=(s&A.Open)===A.Open),void 0===n)throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,f]=(0,u.useState)(n?"visible":"hidden"),d=K(()=>{n||f("hidden")}),[h,v]=(0,u.useState)(!0),m=(0,u.useRef)([n]);g(()=>{!1!==h&&m.current[m.current.length-1]!==n&&(m.current.push(n),v(!1))},[m,n]);let p=(0,u.useMemo)(()=>({show:n,appear:r,initial:h}),[n,r,h]);g(()=>{n?f("visible"):B(d)||null===a.current||f("hidden")},[n,d]);let b={unmount:l},C=y(()=>{var t;h&&v(!1),null==(t=e.beforeEnter)||t.call(e)}),S=y(()=>{var t;h&&v(!1),null==(t=e.beforeLeave)||t.call(e)});return u.createElement(V.Provider,{value:d},u.createElement(D.Provider,{value:p},R({ourProps:{...b,as:u.Fragment,children:u.createElement($,{ref:o,...b,...i,beforeEnter:C,beforeLeave:S})},theirProps:{},defaultTag:u.Fragment,features:Y,visible:"visible"===c,name:"Transition"})))}),$=q(function(e,t){var n,r;let{transition:l=!0,beforeEnter:i,afterEnter:a,beforeLeave:o,afterLeave:s,enter:d,enterFrom:h,enterTo:v,entered:m,leave:p,leaveFrom:b,leaveTo:C,...S}=e,[w,O]=(0,u.useState)(null),k=(0,u.useRef)(null),x=I(e),H=F(...x?[k,t,O]:null===t?[]:[t]),L=null==(n=S.unmount)||n?P.Unmount:P.Hidden,{show:q,appear:U,initial:_}=function(){let e=(0,u.useContext)(D);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[Z,$]=(0,u.useState)(q?"visible":"hidden"),z=function(){let e=(0,u.useContext)(V);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:G,unregister:J}=z;g(()=>G(k),[G,k]),g(()=>{if(L===P.Hidden&&k.current){if(q&&"visible"!==Z){$("visible");return}return j(Z,{hidden:()=>J(k),visible:()=>G(k)})}},[Z,k,G,J,q,L]);let Q=E();g(()=>{if(x&&Q&&"visible"===Z&&null===k.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[k,Z,Q,x]);let X=_&&!U,ee=U&&q&&_,et=(0,u.useRef)(!1),en=K(()=>{et.current||($("hidden"),J(k))},z),er=y(e=>{et.current=!0,en.onStart(k,e?"enter":"leave",e=>{"enter"===e?null==i||i():"leave"===e&&(null==o||o())})}),el=y(e=>{let t=e?"enter":"leave";et.current=!1,en.onStop(k,t,e=>{"enter"===e?null==a||a():"leave"===e&&(null==s||s())}),"leave"!==t||B(en)||($("hidden"),J(k))});(0,u.useEffect)(()=>{x&&l||(er(q),el(q))},[q,x,l]);let[,ei]=function(e,t,n,r){let[l,i]=(0,u.useState)(n),{hasFlag:a,addFlag:o,removeFlag:s}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,n]=(0,u.useState)(e),r=(0,u.useCallback)(e=>n(e),[t]),l=(0,u.useCallback)(e=>n(t=>t|e),[t]),i=(0,u.useCallback)(e=>(t&e)===e,[t]);return{flags:t,setFlag:r,addFlag:l,hasFlag:i,removeFlag:(0,u.useCallback)(e=>n(t=>t&~e),[n]),toggleFlag:(0,u.useCallback)(e=>n(t=>t^e),[n])}}(e&&l?3:0),d=(0,u.useRef)(!1),h=(0,u.useRef)(!1);return g(()=>{var l;if(e){if(n&&i(!0),!t){n&&o(3);return}return null==(l=null==r?void 0:r.start)||l.call(r,n),function(e,t){let{prepare:n,run:r,done:l,inFlight:i}=t,a=c();return function(e,t){let{inFlight:n,prepare:r}=t;if(null!=n&&n.current){r();return}let l=e.style.transition;e.style.transition="none",r(),e.offsetHeight,e.style.transition=l}(e,{prepare:n,inFlight:i}),a.nextFrame(()=>{r(),a.requestAnimationFrame(()=>{a.add(function(e,t){let n=c();if(!e)return n.dispose;let r=!1;n.add(()=>{r=!0});let l=e.getAnimations().filter(e=>e instanceof CSSTransition);return 0===l.length?t():Promise.allSettled(l.map(e=>e.finished)).then(()=>{r||t()}),n.dispose}(e,l))})}),a.dispose}(t,{inFlight:d,prepare(){h.current?h.current=!1:h.current=d.current,d.current=!0,h.current||(n?(o(3),s(4)):(o(4),s(2)))},run(){h.current?n?(s(3),o(4)):(s(4),o(3)):n?s(1):o(1)},done(){var e;h.current&&"function"==typeof t.getAnimations&&t.getAnimations().length>0||(d.current=!1,s(7),n||i(!1),null==(e=null==r?void 0:r.end)||e.call(r,n))}})}},[e,n,t,f()]),e?[l,{closed:a(1),enter:a(2),leave:a(4),transition:a(2)||a(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}(!(!l||!x||!Q||X),w,q,{start:er,end:el}),ea=M({ref:H,className:(null==(r=N(S.className,ee&&d,ee&&h,ei.enter&&d,ei.enter&&ei.closed&&h,ei.enter&&!ei.closed&&v,ei.leave&&p,ei.leave&&!ei.closed&&b,ei.leave&&ei.closed&&C,!ei.transition&&q&&m))?void 0:r.trim())||void 0,...function(e){let t={};for(let n in e)!0===e[n]&&(t["data-".concat(n)]="");return t}(ei)}),eo=0;return"visible"===Z&&(eo|=A.Open),"hidden"===Z&&(eo|=A.Closed),ei.enter&&(eo|=A.Opening),ei.leave&&(eo|=A.Closing),u.createElement(V.Provider,{value:en},u.createElement(T,{value:eo},R({ourProps:ea,theirProps:S,defaultTag:W,features:Y,visible:"visible"===Z,name:"Transition.Child"})))}),z=q(function(e,t){let n=null!==(0,u.useContext)(D),r=null!==O();return u.createElement(u.Fragment,null,!n&&r?u.createElement(Z,{ref:t,...e}):u.createElement($,{ref:t,...e}))}),G=Object.assign(Z,{Child:z,Root:Z})}}]);