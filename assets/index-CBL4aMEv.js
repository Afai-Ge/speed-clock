var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function te(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function D(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function O(e,t){return typeof e==`object`&&e&&e.key!=null?D(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+O(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(te(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+O(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+O(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!te(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=te,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,te());else{var t=n(l);t!==null&&O(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&O(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?te():S=!1}}}var te;if(typeof y==`function`)te=function(){y(ee)};else if(typeof MessageChannel<`u`){var D=new MessageChannel,ne=D.port2;D.port1.onmessage=ee,te=function(){ne.postMessage(null)}}else te=function(){_(ee,0)};function O(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,O(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,te()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.0`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),te=Symbol.for(`react.lazy`),D=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),O=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=O&&e[O]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case D:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case te:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function de(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function j(e,t){le++,ce[le]=e.current,e.current=t}var M=ue(null),fe=ue(null),N=ue(null),pe=ue(null);function me(e,t){switch(j(N,t),j(fe,e),j(M,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?nf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=nf(t),e=rf(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(M),j(M,e)}function he(){de(M),de(fe),de(N)}function ge(e){e.memoizedState!==null&&j(pe,e);var t=M.current,n=rf(t,e.type);t!==n&&(j(fe,e),j(M,n))}function _e(e){fe.current===e&&(de(M),de(fe)),pe.current===e&&(de(pe),mp._currentValue=se)}var ve,ye;function be(e){if(ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||``,ye=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ve+e+ye}var xe=!1;function Se(e,t){if(!e||xe)return``;xe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{xe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?be(n):``}function P(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be(`Lazy`);case 13:return e.child!==t&&t!==null?be(`Suspense Fallback`):be(`Suspense`);case 19:return be(`SuspenseList`);case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return be(`Activity`);default:return``}}function Ce(e){try{var t=``,n=null;do t+=P(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var we=Object.prototype.hasOwnProperty,Te=t.unstable_scheduleCallback,Ee=t.unstable_cancelCallback,De=t.unstable_shouldYield,Oe=t.unstable_requestPaint,F=t.unstable_now,ke=t.unstable_getCurrentPriorityLevel,Ae=t.unstable_ImmediatePriority,je=t.unstable_UserBlockingPriority,Me=t.unstable_NormalPriority,Ne=t.unstable_LowPriority,Pe=t.unstable_IdlePriority,Fe=t.log,Ie=t.unstable_setDisableYieldValue,Le=null,Re=null;function ze(e){if(typeof Fe==`function`&&Ie(e),Re&&typeof Re.setStrictMode==`function`)try{Re.setStrictMode(Le,e)}catch{}}var Be=Math.clz32?Math.clz32:Ue,Ve=Math.log,He=Math.LN2;function Ue(e){return e>>>=0,e===0?32:31-(Ve(e)/He|0)|0}var We=256,Ge=262144,Ke=4194304;function qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Je(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=qe(n))):i=qe(o):i=qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=qe(n))):i=qe(o)):i=qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ye(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var e=Ke;return Ke<<=1,!(Ke&62914560)&&(Ke=4194304),e}function Qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $e(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function et(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Be(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&tt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function tt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Be(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function nt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function rt(e,t){var n=t&-t;return n=n&42?1:it(n),(n&(e.suspendedLanes|t))===0?n:0}function it(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function at(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ot(){var e=A.p;return e===0?(e=window.event,e===void 0?32:Ap(e.type)):e}function st(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ct=Math.random().toString(36).slice(2),lt=`__reactFiber$`+ct,ut=`__reactProps$`+ct,dt=`__reactContainer$`+ct,ft=`__reactEvents$`+ct,pt=`__reactListeners$`+ct,mt=`__reactHandles$`+ct,ht=`__reactResources$`+ct,gt=`__reactMarker$`+ct;function _t(e){delete e[lt],delete e[ut],delete e[ft],delete e[pt],delete e[mt]}function vt(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Df(e);e!==null;){if(n=e[lt])return n;e=Df(e)}return t}e=n,n=e.parentNode}return null}function yt(e){if(e=e[lt]||e[dt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function xt(e){var t=e[ht];return t||=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map},t}function St(e){e[gt]=!0}var Ct=new Set,wt={};function Tt(e,t){Et(e,t),Et(e+`Capture`,t)}function Et(e,t){for(wt[e]=t,e=0;e<t.length;e++)Ct.add(t[e])}var Dt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ot={},kt={};function At(e){return we.call(kt,e)?!0:we.call(Ot,e)?!1:Dt.test(e)?kt[e]=!0:(Ot[e]=!0,!1)}function jt(e,t,n){if(At(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Mt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Nt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Pt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ft(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function It(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lt(e){if(!e._valueTracker){var t=Ft(e)?`checked`:`value`;e._valueTracker=It(e,t,``+e[t])}}function Rt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ft(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function zt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Bt=/[\n"\\]/g;function Vt(e){return e.replace(Bt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ht(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Pt(t)):e.value!==``+Pt(t)&&(e.value=``+Pt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Wt(e,o,Pt(n)):Wt(e,o,Pt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Pt(s):e.removeAttribute(`name`)}function Ut(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Lt(e);return}n=n==null?``:``+Pt(n),t=t==null?n:``+Pt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Lt(e)}function Wt(e,t,n){t===`number`&&zt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Gt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kt(e,t,n){if(t!=null&&(t=``+Pt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Pt(n)}function qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Pt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Lt(e)}function Jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Xt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Yt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Zt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Xt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Xt(e,o,t[o])}function Qt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var $t=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),en=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tn(e){return en.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function nn(){}var rn=null;function an(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,sn=null;function cn(e){var t=yt(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ht(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Vt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ut]||null;if(!a)throw Error(i(90));Ht(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Rt(r)}break a;case`textarea`:Kt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}}}var ln=!1;function un(e,t,n){if(ln)return e(t,n);ln=!0;try{return e(t)}finally{if(ln=!1,(on!==null||sn!==null)&&(Nu(),on&&(t=on,e=sn,sn=on=null,cn(t),e)))for(t=0;t<e.length;t++)cn(e[t])}}function dn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ut]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var fn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),pn=!1;if(fn)try{var mn={};Object.defineProperty(mn,`passive`,{get:function(){pn=!0}}),window.addEventListener(`test`,mn,mn),window.removeEventListener(`test`,mn,mn)}catch{pn=!1}var hn=null,gn=null,_n=null;function vn(){if(_n)return _n;var e,t=gn,n=t.length,r,i=`value`in hn?hn.value:hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return _n=i.slice(e,1<r?1-r:void 0)}function yn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bn(){return!0}function xn(){return!1}function Sn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?bn:xn,this.isPropagationStopped=xn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=Sn(Cn),Tn=h({},Cn,{view:0,detail:0}),En=Sn(Tn),Dn,On,kn,An=h({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==kn&&(kn&&e.type===`mousemove`?(Dn=e.screenX-kn.screenX,On=e.screenY-kn.screenY):On=Dn=0,kn=e),Dn)},movementY:function(e){return`movementY`in e?e.movementY:On}}),jn=Sn(An),Mn=h({},An,{dataTransfer:0}),Nn=Sn(Mn),Pn=h({},Tn,{relatedTarget:0}),Fn=Sn(Pn),In=h({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ln=Sn(In),Rn=h({},Cn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}}),zn=Sn(Rn),Bn=h({},Cn,{data:0}),I=Sn(Bn),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=h({},Tn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=yn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?yn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?yn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}}),qn=Sn(Kn),Jn=h({},An,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yn=Sn(Jn),Xn=h({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn}),Zn=Sn(Xn),Qn=h({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$n=Sn(Qn),er=h({},An,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tr=Sn(er),nr=h({},Cn,{newState:0,oldState:0}),rr=Sn(nr),ir=[9,13,27,32],ar=fn&&`CompositionEvent`in window,or=null;fn&&`documentMode`in document&&(or=document.documentMode);var sr=fn&&`TextEvent`in window&&!or,cr=fn&&(!ar||or&&8<or&&11>=or),lr=` `,ur=!1;function dr(e,t){switch(e){case`keyup`:return ir.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function fr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var pr=!1;function mr(e,t){switch(e){case`compositionend`:return fr(t);case`keypress`:return t.which===32?(ur=!0,lr):null;case`textInput`:return e=t.data,e===lr&&ur?null:e;default:return null}}function hr(e,t){if(pr)return e===`compositionend`||!ar&&dr(e,t)?(e=vn(),_n=gn=hn=null,pr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return cr&&t.locale!==`ko`?null:t.data;default:return null}}var gr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!gr[e.type]:t===`textarea`}function vr(e,t,n,r){on?sn?sn.push(r):sn=[r]:on=r,t=Vd(t,`onChange`),0<t.length&&(n=new wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var yr=null,br=null;function xr(e){Pd(e,0)}function Sr(e){var t=bt(e);if(Rt(t))return e}function Cr(e,t){if(e===`change`)return t}var wr=!1;if(fn){var Tr;if(fn){var Er=`oninput`in document;if(!Er){var Dr=document.createElement(`div`);Dr.setAttribute(`oninput`,`return;`),Er=typeof Dr.oninput==`function`}Tr=Er}else Tr=!1;wr=Tr&&(!document.documentMode||9<document.documentMode)}function Or(){yr&&(yr.detachEvent(`onpropertychange`,kr),br=yr=null)}function kr(e){if(e.propertyName===`value`&&Sr(br)){var t=[];vr(t,br,e,an(e)),un(xr,t)}}function Ar(e,t,n){e===`focusin`?(Or(),yr=t,br=n,yr.attachEvent(`onpropertychange`,kr)):e===`focusout`&&Or()}function jr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Sr(br)}function Mr(e,t){if(e===`click`)return Sr(t)}function Nr(e,t){if(e===`input`||e===`change`)return Sr(t)}function Pr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Fr=typeof Object.is==`function`?Object.is:Pr;function Ir(e,t){if(Fr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!we.call(t,i)||!Fr(e[i],t[i]))return!1}return!0}function Lr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rr(e,t){var n=Lr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Lr(n)}}function zr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Br(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=zt(e.document)}return t}function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Hr=fn&&`documentMode`in document&&11>=document.documentMode,Ur=null,Wr=null,Gr=null,Kr=!1;function qr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kr||Ur==null||Ur!==zt(r)||(r=Ur,`selectionStart`in r&&Vr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&Ir(Gr,r)||(Gr=r,r=Vd(Wr,`onSelect`),0<r.length&&(t=new wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ur)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Yr={animationend:Jr(`Animation`,`AnimationEnd`),animationiteration:Jr(`Animation`,`AnimationIteration`),animationstart:Jr(`Animation`,`AnimationStart`),transitionrun:Jr(`Transition`,`TransitionRun`),transitionstart:Jr(`Transition`,`TransitionStart`),transitioncancel:Jr(`Transition`,`TransitionCancel`),transitionend:Jr(`Transition`,`TransitionEnd`)},Xr={},Zr={};fn&&(Zr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),`TransitionEvent`in window||delete Yr.transitionend.transition);function Qr(e){if(Xr[e])return Xr[e];if(!Yr[e])return e;var t=Yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zr)return Xr[e]=t[n];return e}var $r=Qr(`animationend`),ei=Qr(`animationiteration`),ti=Qr(`animationstart`),ni=Qr(`transitionrun`),ri=Qr(`transitionstart`),ii=Qr(`transitioncancel`),ai=Qr(`transitionend`),oi=new Map,si=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);si.push(`scrollEnd`);function ci(e,t){oi.set(e,t),Tt(t,[e])}var li=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ui=[],di=0,fi=0;function pi(){for(var e=di,t=fi=di=0;t<e;){var n=ui[t];ui[t++]=null;var r=ui[t];ui[t++]=null;var i=ui[t];ui[t++]=null;var a=ui[t];if(ui[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&_i(n,i,a)}}function mi(e,t,n,r){ui[di++]=e,ui[di++]=t,ui[di++]=n,ui[di++]=r,fi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function hi(e,t,n,r){return mi(e,t,n,r),vi(e)}function gi(e,t){return mi(e,null,null,t),vi(e)}function _i(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Be(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function vi(e){if(50<wu)throw wu=0,Tu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var yi={};function bi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(e,t,n,r){return new bi(e,t,n,r)}function Si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ci(e,t){var n=e.alternate;return n===null?(n=xi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function wi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ti(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)Si(e)&&(s=1);else if(typeof e==`string`)s=ap(e,n,M.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case D:return e=xi(31,n,t,a),e.elementType=D,e.lanes=o,e;case y:return Ei(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=xi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=xi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=xi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case te:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=xi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ei(e,t,n,r){return e=xi(7,e,r,t),e.lanes=n,e}function Di(e,t,n){return e=xi(6,e,null,t),e.lanes=n,e}function Oi(e){var t=xi(18,null,null,0);return t.stateNode=e,t}function ki(e,t,n){return t=xi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ai=new WeakMap;function ji(e,t){if(typeof e==`object`&&e){var n=Ai.get(e);return n===void 0?(t={value:e,source:t,stack:Ce(t)},Ai.set(e,t),t):n}return{value:e,source:t,stack:Ce(t)}}var Mi=[],Ni=0,Pi=null,Fi=0,Ii=[],Li=0,Ri=null,zi=1,Bi=``;function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Pi,Pi=e,Fi=t}function Hi(e,t,n){Ii[Li++]=zi,Ii[Li++]=Bi,Ii[Li++]=Ri,Ri=e;var r=zi;e=Bi;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var a=32-Be(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zi=1<<32-Be(t)+i|n<<i|r,Bi=a+e}else zi=1<<a|n<<i|r,Bi=e}function Ui(e){e.return!==null&&(Vi(e,1),Hi(e,1,0))}function Wi(e){for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null;for(;e===Ri;)Ri=Ii[--Li],Ii[Li]=null,Bi=Ii[--Li],Ii[Li]=null,zi=Ii[--Li],Ii[Li]=null}function Gi(e,t){Ii[Li++]=zi,Ii[Li++]=Bi,Ii[Li++]=Ri,zi=t.id,Bi=t.overflow,Ri=e}var Ki=null,L=null,R=!1,qi=null,Ji=!1,Yi=Error(i(519));function Xi(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``));throw na(ji(t,e)),Yi}function Zi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[lt]=e,t[ut]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<Md.length;n++)Q(Md[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Ut(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||qd(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||Xi(e,!0)}function Qi(e){for(Ki=e.return;Ki;)switch(Ki.tag){case 5:case 31:case 13:Ji=!1;return;case 27:case 3:Ji=!0;return;default:Ki=Ki.return}}function $i(e){if(e!==Ki)return!1;if(!R)return Qi(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||af(e.type,e.memoizedProps)),n=!n),n&&L&&Xi(e),Qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=Ef(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=Ef(e)}else t===27?(t=L,mf(e.type)?(e=Tf,Tf=null,L=e):L=t):L=Ki?wf(e.stateNode.nextSibling):null;return!0}function ea(){L=Ki=null,R=!1}function ta(){var e=qi;return e!==null&&(uu===null?uu=e:uu.push.apply(uu,e),qi=null),e}function na(e){qi===null?qi=[e]:qi.push(e)}var ra=ue(null),ia=null,aa=null;function oa(e,t,n){j(ra,t._currentValue),t._currentValue=n}function sa(e){e._currentValue=ra.current,de(ra)}function ca(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function la(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ca(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ca(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ua(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Fr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===pe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[mp]:e.push(mp))}a=a.return}e!==null&&la(t,e,n,r),t.flags|=262144}function da(e){for(e=e.firstContext;e!==null;){if(!Fr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fa(e){ia=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pa(e){return ha(ia,e)}function ma(e,t){return ia===null&&fa(e),ha(e,t)}function ha(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},aa===null){if(e===null)throw Error(i(308));aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else aa=aa.next=t;return n}var ga=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},_a=t.unstable_scheduleCallback,va=t.unstable_NormalPriority,ya={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ba(){return{controller:new ga,data:new Map,refCount:0}}function xa(e){e.refCount--,e.refCount===0&&_a(va,function(){e.controller.abort()})}var Sa=null,Ca=0,wa=0,Ta=null;function Ea(e,t){if(Sa===null){var n=Sa=[];Ca=0,wa=wd(),Ta={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ca++,t.then(Da,Da),t}function Da(){if(--Ca===0&&Sa!==null){Ta!==null&&(Ta.status=`fulfilled`);var e=Sa;Sa=null,wa=0,Ta=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Oa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ka=k.S;k.S=function(e,t){pu=F(),typeof t==`object`&&t&&typeof t.then==`function`&&Ea(e,t),ka!==null&&ka(e,t)};var Aa=ue(null);function ja(){var e=Aa.current;return e===null?K.pooledCache:e}function Ma(e,t){t===null?j(Aa,Aa.current):j(Aa,t.pool)}function Na(){var e=ja();return e===null?null:{parent:ya._currentValue,pool:e}}var Pa=Error(i(460)),Fa=Error(i(474)),Ia=Error(i(542)),La={then:function(){}};function Ra(e){return e=e.status,e===`fulfilled`||e===`rejected`}function za(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ua(e),e;default:if(typeof t.status==`string`)t.then(nn,nn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ua(e),e}throw Va=t,Pa}}function Ba(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Va=e,Pa):e}}var Va=null;function Ha(){if(Va===null)throw Error(i(459));var e=Va;return Va=null,e}function Ua(e){if(e===Pa||e===Ia)throw Error(i(483))}var Wa=null,Ga=0;function Ka(e){var t=Ga;return Ga+=1,Wa===null&&(Wa=[]),za(Wa,e,t)}function qa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ja(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ya(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ci(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Di(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===te&&Ba(i)===t.type)?(t=a(t,n.props),qa(t,n),t.return=e,t):(t=Ti(n.type,n.key,n.props,null,e.mode,r),qa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ki(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ei(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Di(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=Ti(t.type,t.key,t.props,null,e.mode,n),qa(n,t),n.return=e,n;case v:return t=ki(t,e.mode,n),t.return=e,t;case te:return t=Ba(t),f(e,t,n)}if(oe(t)||re(t))return t=Ei(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ka(t),n);if(t.$$typeof===C)return f(e,ma(e,t),n);Ja(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case te:return n=Ba(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ka(n),r);if(n.$$typeof===C)return p(e,t,ma(e,n),r);Ja(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case te:return r=Ba(r),m(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ka(r),i);if(r.$$typeof===C)return m(e,t,n,ma(t,r),i);Ja(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&Vi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return R&&Vi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&Vi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),R&&Vi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return R&&Vi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),R&&Vi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===te&&Ba(l)===r.type){n(e,r.sibling),c=a(r,o.props),qa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Ei(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=Ti(o.type,o.key,o.props,null,e.mode,c),qa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=ki(o,e.mode,c),c.return=e,e=c}return s(e);case te:return o=Ba(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ka(o),c);if(o.$$typeof===C)return b(e,r,ma(e,o),c);Ja(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Di(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ga=0;var i=b(e,t,n,r);return Wa=null,i}catch(t){if(t===Pa||t===Ia)throw t;var a=xi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Xa=Ya(!0),Za=Ya(!1),Qa=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function to(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function no(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=vi(e),_i(e,null,n),t}return mi(e,r,t,n),vi(e)}function ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}function io(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ao=!1;function oo(){if(ao){var e=Ta;if(e!==null)throw e}}function so(e,t,n,r){ao=!1;var i=e.updateQueue;Qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===wa&&(ao=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),iu|=o,e.lanes=o,e.memoizedState=d}}function co(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function lo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)co(n[e],t)}var uo=ue(null),fo=ue(0);function po(e,t){e=ru,j(fo,e),j(uo,t),ru=e|t.baseLanes}function mo(){j(fo,ru),j(uo,uo.current)}function ho(){ru=fo.current,de(uo),de(fo)}var go=ue(null),_o=null;function vo(e){var t=e.alternate;j(z,z.current&1),j(go,e),_o===null&&(t===null||uo.current!==null||t.memoizedState!==null)&&(_o=e)}function yo(e){j(z,z.current),j(go,e),_o===null&&(_o=e)}function bo(e){e.tag===22?(j(z,z.current),j(go,e),_o===null&&(_o=e)):xo(e)}function xo(){j(z,z.current),j(go,go.current)}function So(e){de(go),_o===e&&(_o=null),de(z)}var z=ue(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||xf(n)||Sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wo=0,B=null,V=null,To=null,Eo=!1,Do=!1,Oo=!1,ko=0,Ao=0,jo=null,Mo=0;function H(){throw Error(i(321))}function No(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fr(e[n],t[n]))return!1;return!0}function Po(e,t,n,r,i,a){return wo=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?$s:ec,Oo=!1,a=n(r,i),Oo=!1,Do&&(a=Io(t,n,r,i)),Fo(e),a}function Fo(e){k.H=Qs;var t=V!==null&&V.next!==null;if(wo=0,To=V=B=null,Eo=!1,Ao=0,jo=null,t)throw Error(i(300));e===null||_c||(e=e.dependencies,e!==null&&da(e)&&(_c=!0))}function Io(e,t,n,r){B=e;var a=0;do{if(Do&&(jo=null),Ao=0,Do=!1,25<=a)throw Error(i(301));if(a+=1,To=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=tc,o=t(n,r)}while(Do);return o}function Lo(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?Wo(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Ro(){var e=ko!==0;return ko=0,e}function zo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Bo(e){if(Eo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Eo=!1}wo=0,To=V=B=null,Do=!1,Ao=ko=0,jo=null}function Vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return To===null?B.memoizedState=To=e:To=To.next=e,To}function Ho(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=To===null?B.memoizedState:To.next;if(t!==null)To=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},To===null?B.memoizedState=To=e:To=To.next=e}return To}function Uo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(e){var t=Ao;return Ao+=1,jo===null&&(jo=[]),e=za(jo,e,t),t=B,(To===null?t.memoizedState:To.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?$s:ec),e}function Go(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Wo(e);if(e.$$typeof===C)return pa(e)}throw Error(i(438,String(e)))}function Ko(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Uo(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function qo(e,t){return typeof t==`function`?t(e):t}function Jo(e){var t=Ho();return Yo(t,V,e)}function Yo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(wo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===wa&&(d=!0);else if((wo&p)===p){u=u.next,p===wa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,iu|=p;f=u.action,Oo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,iu|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Fr(o,e.memoizedState)&&(_c=!0,d&&(n=Ta,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Xo(e){var t=Ho(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Fr(o,t.memoizedState)||(_c=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Zo(e,t,n){var r=B,a=Ho(),o=R;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Fr((V||a).memoizedState,n);if(s&&(a.memoizedState=n,_c=!0),a=a.queue,ws(es.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||To!==null&&To.memoizedState.tag&1){if(r.flags|=2048,ys(9,{destroy:void 0},$o.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||wo&127||Qo(r,t,n)}return n}function Qo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Uo(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $o(e,t,n,r){t.value=n,t.getSnapshot=r,ts(t)&&ns(e)}function es(e,t,n){return n(function(){ts(t)&&ns(e)})}function ts(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fr(e,n)}catch{return!0}}function ns(e){var t=gi(e,2);t!==null&&Ou(t,e,2)}function rs(e){var t=Vo();if(typeof e==`function`){var n=e;if(e=n(),Oo){ze(!0);try{n()}finally{ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:e},t}function os(e,t,n,r){return e.baseState=n,Yo(e,V,typeof r==`function`?r:qo)}function ss(e,t,n,r,a){if(Ys(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,cs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function cs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),ls(e,t,s)}catch(n){ds(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),ls(e,t,a)}catch(n){ds(e,t,n)}}function ls(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){us(e,t,n)},function(n){return ds(e,t,n)}):us(e,t,n)}function us(e,t,n){t.status=`fulfilled`,t.value=n,fs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,cs(e,n)))}function ds(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,fs(t),t=t.next;while(t!==r)}e.action=null}function fs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ps(e,t){return t}function ms(e,t){if(R){var n=K.formState;if(n!==null){a:{var r=B;if(R){if(L){b:{for(var i=L,a=Ji;i.nodeType!==8;){if(!a){i=null;break b}if(i=wf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){L=wf(i.nextSibling),r=i.data===`F!`;break a}}Xi(r)}r=!1}r&&(t=n[0])}}return n=Vo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:t},n.queue=r,n=Ks.bind(null,B,r),r.dispatch=n,r=rs(!1),a=Js.bind(null,B,!1,r.queue),r=Vo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=ss.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function hs(e){var t=Ho();return gs(t,V,e)}function gs(e,t,n){if(t=Yo(e,t,ps)[0],e=Jo(qo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Wo(t)}catch(e){throw e===Pa?Ia:e}else r=t;t=Ho();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,ys(9,{destroy:void 0},_s.bind(null,i,n),null)),[r,a,e]}function _s(e,t){e.action=t}function vs(e){var t=Ho(),n=V;if(n!==null)return gs(t,n,e);Ho(),t=t.memoizedState,n=Ho();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ys(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Uo(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function bs(){return Ho().memoizedState}function xs(e,t,n,r){var i=Vo();B.flags|=e,i.memoizedState=ys(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ss(e,t,n,r){var i=Ho();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&No(r,V.memoizedState.deps)?i.memoizedState=ys(t,a,n,r):(B.flags|=e,i.memoizedState=ys(1|t,a,n,r))}function Cs(e,t){xs(8390656,8,e,t)}function ws(e,t){Ss(2048,8,e,t)}function Ts(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Uo(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Es(e){var t=Ho().memoizedState;return Ts({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ds(e,t){return Ss(4,2,e,t)}function Os(e,t){return Ss(4,4,e,t)}function ks(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function As(e,t,n){n=n==null?null:n.concat([e]),Ss(4,4,ks.bind(null,t,e),n)}function js(){}function Ms(e,t){var n=Ho();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ns(e,t){var n=Ho();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&No(t,r[1]))return r[0];if(r=e(),Oo){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r}function Ps(e,t,n){return n===void 0||wo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=Du(),B.lanes|=e,iu|=e,n)}function Fs(e,t,n,r){return Fr(n,t)?n:uo.current===null?!(wo&42)||wo&1073741824&&!(J&261930)?(_c=!0,e.memoizedState=n):(e=Du(),B.lanes|=e,iu|=e,t):(e=Ps(e,n,r),Fr(e,t)||(_c=!0),e)}function Is(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Js(e,!1,t,n);try{var c=i(),l=k.S;if(l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`){var u=Oa(c,r);qs(e,t,u,Eu(e))}else qs(e,t,r,Eu(e))}catch(n){qs(e,t,{then:function(){},status:`rejected`,reason:n},Eu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function Ls(){}function Rs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=zs(e).queue;Is(e,a,t,se,n===null?Ls:function(){return Bs(e),n(r)})}function zs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Bs(e){var t=zs(e);t.next===null&&(t=e.alternate.memoizedState),qs(e,t.next.queue,{},Eu())}function Vs(){return pa(mp)}function Hs(){return Ho().memoizedState}function Us(){return Ho().memoizedState}function Ws(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Eu();e=to(n);var r=no(t,e,n);r!==null&&(Ou(r,t,n),ro(r,t,n)),t={cache:ba()},e.payload=t;return}t=t.return}}function Gs(e,t,n){var r=Eu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ys(e)?Xs(t,n):(n=hi(e,t,n,r),n!==null&&(Ou(n,e,r),Zs(n,t,r)))}function Ks(e,t,n){var r=Eu();qs(e,t,n,r)}function qs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ys(e))Xs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Fr(s,o))return mi(e,t,i,0),K===null&&pi(),!1}catch{}if(n=hi(e,t,i,r),n!==null)return Ou(n,e,r),Zs(n,t,r),!0}return!1}function Js(e,t,n,r){if(r={lane:2,revertLane:wd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ys(e)){if(t)throw Error(i(479))}else t=hi(e,n,r,2),t!==null&&Ou(t,e,2)}function Ys(e){var t=e.alternate;return e===B||t!==null&&t===B}function Xs(e,t){Do=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}var Qs={readContext:pa,use:Go,useCallback:H,useContext:H,useEffect:H,useImperativeHandle:H,useLayoutEffect:H,useInsertionEffect:H,useMemo:H,useReducer:H,useRef:H,useState:H,useDebugValue:H,useDeferredValue:H,useTransition:H,useSyncExternalStore:H,useId:H,useHostTransitionStatus:H,useFormState:H,useActionState:H,useOptimistic:H,useMemoCache:H,useCacheRefresh:H};Qs.useEffectEvent=H;var $s={readContext:pa,use:Go,useCallback:function(e,t){return Vo().memoizedState=[e,t===void 0?null:t],e},useContext:pa,useEffect:Cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),xs(4194308,4,ks.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xs(4194308,4,e,t)},useInsertionEffect:function(e,t){xs(4,2,e,t)},useMemo:function(e,t){var n=Vo();t=t===void 0?null:t;var r=e();if(Oo){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Vo();if(n!==void 0){var i=n(t);if(Oo){ze(!0);try{n(t)}finally{ze(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Gs.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Vo();return e={current:e},t.memoizedState=e},useState:function(e){e=rs(e);var t=e.queue,n=Ks.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:js,useDeferredValue:function(e,t){var n=Vo();return Ps(n,e,t)},useTransition:function(){var e=rs(!1);return e=Is.bind(null,B,e.queue,!0,!1),Vo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Vo();if(R){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Qo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Cs(es.bind(null,r,o,e),[e]),r.flags|=2048,ys(9,{destroy:void 0},$o.bind(null,r,o,n,t),null),n},useId:function(){var e=Vo(),t=K.identifierPrefix;if(R){var n=Bi,r=zi;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ko++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Mo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Vs,useFormState:ms,useActionState:ms,useOptimistic:function(e){var t=Vo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Js.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ko,useCacheRefresh:function(){return Vo().memoizedState=Ws.bind(null,B)},useEffectEvent:function(e){var t=Vo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},ec={readContext:pa,use:Go,useCallback:Ms,useContext:pa,useEffect:ws,useImperativeHandle:As,useInsertionEffect:Ds,useLayoutEffect:Os,useMemo:Ns,useReducer:Jo,useRef:bs,useState:function(){return Jo(qo)},useDebugValue:js,useDeferredValue:function(e,t){var n=Ho();return Fs(n,V.memoizedState,e,t)},useTransition:function(){var e=Jo(qo)[0],t=Ho().memoizedState;return[typeof e==`boolean`?e:Wo(e),t]},useSyncExternalStore:Zo,useId:Hs,useHostTransitionStatus:Vs,useFormState:hs,useActionState:hs,useOptimistic:function(e,t){var n=Ho();return os(n,V,e,t)},useMemoCache:Ko,useCacheRefresh:Us};ec.useEffectEvent=Es;var tc={readContext:pa,use:Go,useCallback:Ms,useContext:pa,useEffect:ws,useImperativeHandle:As,useInsertionEffect:Ds,useLayoutEffect:Os,useMemo:Ns,useReducer:Xo,useRef:bs,useState:function(){return Xo(qo)},useDebugValue:js,useDeferredValue:function(e,t){var n=Ho();return V===null?Ps(n,e,t):Fs(n,V.memoizedState,e,t)},useTransition:function(){var e=Xo(qo)[0],t=Ho().memoizedState;return[typeof e==`boolean`?e:Wo(e),t]},useSyncExternalStore:Zo,useId:Hs,useHostTransitionStatus:Vs,useFormState:vs,useActionState:vs,useOptimistic:function(e,t){var n=Ho();return V===null?(n.baseState=e,[e,n.queue.dispatch]):os(n,V,e,t)},useMemoCache:Ko,useCacheRefresh:Us};tc.useEffectEvent=Es;function nc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Eu(),i=to(r);i.payload=t,n!=null&&(i.callback=n),t=no(e,i,r),t!==null&&(Ou(t,e,r),ro(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Eu(),i=to(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=no(e,i,r),t!==null&&(Ou(t,e,r),ro(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Eu(),r=to(n);r.tag=2,t!=null&&(r.callback=t),t=no(e,r,n),t!==null&&(Ou(t,e,n),ro(t,e,n))}};function ic(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(i,a):!0}function ac(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&rc.enqueueReplaceState(t,t.state,null)}function oc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function sc(e){li(e)}function cc(e){console.error(e)}function lc(e){li(e)}function uc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function dc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function fc(e,t,n){return n=to(n),n.tag=3,n.payload={element:null},n.callback=function(){uc(e,t)},n}function pc(e){return e=to(e),e.tag=3,e}function mc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){dc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){dc(t,n,r),typeof i!=`function`&&(gu===null?gu=new Set([this]):gu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function hc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ua(t,n,a,!0),n=go.current,n!==null){switch(n.tag){case 31:case 13:return _o===null?Bu():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===La?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),id(e,r,a)),!1;case 22:return n.flags|=65536,r===La?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),id(e,r,a)),!1}throw Error(i(435,n.tag))}return id(e,r,a),Bu(),!1}if(R)return t=go.current,t===null?(r!==Yi&&(t=Error(i(423),{cause:r}),na(ji(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ji(r,n),a=fc(e.stateNode,r,a),io(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Yi&&(e=Error(i(422),{cause:r}),na(ji(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ji(o,n),lu===null?lu=[o]:lu.push(o),X!==4&&(X=2),t===null)return!0;r=ji(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=fc(n.stateNode,r,e),io(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gu===null||!gu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=pc(a),mc(a,e,n,r),io(n,a),!1}n=n.return}while(n!==null);return!1}var gc=Error(i(461)),_c=!1;function vc(e,t,n,r){t.child=e===null?Za(t,null,n,r):Xa(t,e.child,n,r)}function yc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return fa(t),r=Po(e,t,n,o,a,i),s=Ro(),e!==null&&!_c?(zo(e,t,i),Uc(e,t,i)):(R&&s&&Ui(t),t.flags|=1,vc(e,t,r,i),t.child)}function bc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Si(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,xc(e,t,a,r,i)):(e=Ti(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Wc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ir:n,n(o,r)&&e.ref===t.ref)return Uc(e,t,i)}return t.flags|=1,e=Ci(a,r),e.ref=t.ref,e.return=t,t.child=e}function xc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ir(a,r)&&e.ref===t.ref)if(_c=!1,t.pendingProps=r=a,Wc(e,i))e.flags&131072&&(_c=!0);else return t.lanes=e.lanes,Uc(e,t,i)}return kc(e,t,n,r,i)}function Sc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return wc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ma(t,a===null?null:a.cachePool),a===null?mo():po(t,a),bo(t);else return r=t.lanes=536870912,wc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ma(t,null),mo(),xo(t)):(Ma(t,a.cachePool),po(t,a),xo(t),t.memoizedState=null);return vc(e,t,i,n),t.child}function Cc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function wc(e,t,n,r,i){var a=ja();return a=a===null?null:{parent:ya._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ma(t,null),mo(),bo(t),e!==null&&ua(e,t,r,!0),t.childLanes=i,null}function Tc(e,t){return t=Rc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ec(e,t,n){return Xa(t,e.child,null,n),e=Tc(t,t.pendingProps),e.flags|=2,So(t),t.memoizedState=null,e}function Dc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=Tc(t,r),t.lanes=536870912,Cc(null,e);if(yo(t),(e=L)?(e=bf(e,Ji),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ri===null?null:{id:zi,overflow:Bi},retryLane:536870912,hydrationErrors:null},n=Oi(e),n.return=t,t.child=n,Ki=t,L=null)):e=null,e===null)throw Xi(t);return t.lanes=536870912,null}return Tc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(yo(t),a)if(t.flags&256)t.flags&=-257,t=Ec(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(_c||ua(e,t,n,!1),a=(n&e.childLanes)!==0,_c||a){if(r=K,r!==null&&(s=rt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,gi(e,s),Ou(r,e,s),gc;Bu(),t=Ec(e,t,n)}else e=o.treeContext,L=wf(s.nextSibling),Ki=t,R=!0,qi=null,Ji=!1,e!==null&&Gi(t,e),t=Tc(t,r),t.flags|=4096;return t}return e=Ci(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Oc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function kc(e,t,n,r,i){return fa(t),n=Po(e,t,n,r,void 0,i),r=Ro(),e!==null&&!_c?(zo(e,t,i),Uc(e,t,i)):(R&&r&&Ui(t),t.flags|=1,vc(e,t,n,i),t.child)}function Ac(e,t,n,r,i,a){return fa(t),t.updateQueue=null,n=Io(t,r,n,i),Fo(e),r=Ro(),e!==null&&!_c?(zo(e,t,a),Uc(e,t,a)):(R&&r&&Ui(t),t.flags|=1,vc(e,t,n,a),t.child)}function jc(e,t,n,r,i){if(fa(t),t.stateNode===null){var a=yi,o=n.contextType;typeof o==`object`&&o&&(a=pa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=rc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},$a(t),o=n.contextType,a.context=typeof o==`object`&&o?pa(o):yi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(nc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&rc.enqueueReplaceState(a,a.state,null),so(t,r,a,i),oo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=oc(n,s);a.props=c;var l=a.context,u=n.contextType;o=yi,typeof u==`object`&&u&&(o=pa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&ac(t,a,r,o),Qa=!1;var f=t.memoizedState;a.state=f,so(t,r,a,i),oo(),l=t.memoizedState,s||f!==l||Qa?(typeof d==`function`&&(nc(t,n,d,r),l=t.memoizedState),(c=Qa||ic(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,eo(e,t),o=t.memoizedProps,u=oc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=yi,typeof l==`object`&&l&&(c=pa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&ac(t,a,r,c),Qa=!1,f=t.memoizedState,a.state=f,so(t,r,a,i),oo();var p=t.memoizedState;o!==d||f!==p||Qa||e!==null&&e.dependencies!==null&&da(e.dependencies)?(typeof s==`function`&&(nc(t,n,s,r),p=t.memoizedState),(u=Qa||ic(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&da(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Oc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Xa(t,e.child,null,i),t.child=Xa(t,null,n,i)):vc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Uc(e,t,i),e}function Mc(e,t,n,r){return ea(),t.flags|=256,vc(e,t,n,r),t.child}var Nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pc(e){return{baseLanes:e,cachePool:Na()}}function Fc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=su),e}function Ic(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(z.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(R){if(a?vo(t):xo(t),(e=L)?(e=bf(e,Ji),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ri===null?null:{id:zi,overflow:Bi},retryLane:536870912,hydrationErrors:null},n=Oi(e),n.return=t,t.child=n,Ki=t,L=null)):e=null,e===null)throw Xi(t);return Sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(xo(t),a=t.mode,c=Rc({mode:`hidden`,children:c},a),r=Ei(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Pc(n),r.childLanes=Fc(e,s,n),t.memoizedState=Nc,Cc(null,r)):(vo(t),Lc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(vo(t),t.flags&=-257,t=zc(e,t,n)):t.memoizedState===null?(xo(t),c=r.fallback,a=t.mode,r=Rc({mode:`visible`,children:r.children},a),c=Ei(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Xa(t,e.child,null,n),r=t.child,r.memoizedState=Pc(n),r.childLanes=Fc(e,s,n),t.memoizedState=Nc,t=Cc(null,r)):(xo(t),t.child=e.child,t.flags|=128,t=null);else if(vo(t),Sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,na({value:r,source:null,stack:null}),t=zc(e,t,n)}else if(_c||ua(e,t,n,!1),s=(n&e.childLanes)!==0,_c||s){if(s=K,s!==null&&(r=rt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,gi(e,r),Ou(s,e,r),gc;xf(c)||Bu(),t=zc(e,t,n)}else xf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,L=wf(c.nextSibling),Ki=t,R=!0,qi=null,Ji=!1,e!==null&&Gi(t,e),t=Lc(t,r.children),t.flags|=4096);return t}return a?(xo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=Ci(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Ei(c,a,n,null),c.flags|=2):c=Ci(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,Cc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Pc(n):(a=c.cachePool,a===null?a=Na():(l=ya._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Fc(e,s,n),t.memoizedState=Nc,Cc(e.child,r)):(vo(t),n=e.child,e=n.sibling,n=Ci(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Lc(e,t){return t=Rc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Rc(e,t){return e=xi(22,e,null,t),e.lanes=0,e}function zc(e,t,n){return Xa(t,e.child,null,n),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ca(e.return,t,n)}function Vc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Hc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=z.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(z,o),vc(e,t,r,n),r=R?Fi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bc(e,n,t);else if(e.tag===19)Bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vc(t,!0,n,null,a,r);break;case`together`:Vc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Uc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),iu|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ua(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ci(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ci(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&da(e))):!0}function Gc(e,t,n){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),oa(t,ya,e.memoizedState.cache),ea();break;case 27:case 5:ge(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:oa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(vo(t),e=Uc(e,t,n),e===null?null:e.sibling):Ic(e,t,n):(vo(t),t.flags|=128,null);vo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ua(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Hc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(z,z.current),r)break;return null;case 22:return t.lanes=0,Sc(e,t,n,t.pendingProps);case 24:oa(t,ya,e.memoizedState.cache)}return Uc(e,t,n)}function Kc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)_c=!0;else{if(!Wc(e,n)&&!(t.flags&128))return _c=!1,Gc(e,t,n);_c=!!(e.flags&131072)}else _c=!1,R&&t.flags&1048576&&Hi(t,Fi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ba(t.elementType),t.type=e,typeof e==`function`)Si(e)?(r=oc(e,r),t.tag=1,t=jc(null,t,e,r,n)):(t.tag=0,t=kc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=yc(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=bc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return kc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=oc(r,t.pendingProps),jc(e,t,r,a,n);case 3:a:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,eo(e,t),so(t,r,null,n);var s=t.memoizedState;if(r=s.cache,oa(t,ya,r),r!==o.cache&&la(t,[ya],n,!0),oo(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Mc(e,t,r,n);break a}else if(r!==a){a=ji(Error(i(424)),t),na(a),t=Mc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(L=wf(e.firstChild),Ki=t,R=!0,qi=null,Ji=!0,n=Za(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ea(),r===a){t=Uc(e,t,n);break a}vc(e,t,r,n)}t=t.child}return t;case 26:return Oc(e,t),e===null?(n=Gf(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(n=t.type,e=t.pendingProps,r=tf(N.current).createElement(n),r[lt]=t,r[ut]=e,Yd(r,n,e),St(r),t.stateNode=r):t.memoizedState=Gf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ge(t),e===null&&R&&(r=t.stateNode=Of(t.type,t.pendingProps,N.current),Ki=t,Ji=!0,a=L,mf(t.type)?(Tf=a,L=wf(r.firstChild)):L=a),vc(e,t,t.pendingProps.children,n),Oc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((a=r=L)&&(r=vf(r,t.type,t.pendingProps,Ji),r===null?a=!1:(t.stateNode=r,Ki=t,L=wf(r.firstChild),Ji=!1,a=!0)),a||Xi(t)),ge(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,af(a,o)?r=null:s!==null&&af(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Po(e,t,Lo,null,null,n),mp._currentValue=a),Oc(e,t),vc(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=L)&&(n=yf(n,t.pendingProps,Ji),n===null?e=!1:(t.stateNode=n,Ki=t,L=null,e=!0)),e||Xi(t)),null;case 13:return Ic(e,t,n);case 4:return me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xa(t,null,r,n):vc(e,t,r,n),t.child;case 11:return yc(e,t,t.type,t.pendingProps,n);case 7:return vc(e,t,t.pendingProps,n),t.child;case 8:return vc(e,t,t.pendingProps.children,n),t.child;case 12:return vc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,oa(t,t.type,r.value),vc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,fa(t),a=pa(a),r=r(a),t.flags|=1,vc(e,t,r,n),t.child;case 14:return bc(e,t,t.type,t.pendingProps,n);case 15:return xc(e,t,t.type,t.pendingProps,n);case 19:return Hc(e,t,n);case 31:return Dc(e,t,n);case 22:return Sc(e,t,n,t.pendingProps);case 24:return fa(t),r=pa(ya),e===null?(a=ja(),a===null&&(a=K,o=ba(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},$a(t),oa(t,ya,a)):((e.lanes&n)!==0&&(eo(e,t),so(t,null,null,n),oo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,oa(t,ya,r),r!==a.cache&&la(t,[ya],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),oa(t,ya,r))),vc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function qc(e){e.flags|=4}function Jc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Lu())e.flags|=8192;else throw Va=La,Fa}else e.flags&=-16777217}function Yc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!op(t))if(Lu())e.flags|=8192;else throw Va=La,Fa}function Xc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ze(),e.lanes|=t,cu|=t)}function Zc(e,t){if(!R)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qc(e,t,n){var r=t.pendingProps;switch(Wi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),sa(ya),he(),n.pendingContext&&=(n.context=n.pendingContext,null),(e===null||e.child===null)&&($i(t)?qc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ta())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(qc(t),o===null?(U(t),Jc(t,a,null,r,n)):(U(t),Yc(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(qc(t),U(t),Yc(t,o)):(e=e.memoizedProps,e!==r&&qc(t),U(t),Jc(t,a,e,r,n)),null;case 27:if(_e(t),n=N.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&qc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=M.current,$i(t)?Zi(t,e):(e=Of(a,r,n),t.stateNode=e,qc(t))}return U(t),null;case 5:if(_e(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&qc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=M.current,$i(t))Zi(t,o);else{var s=tf(N.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[lt]=t,o[ut]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Yd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&qc(t)}}return U(t),Jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&qc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=N.current,$i(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ki,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||qd(e.nodeValue,n)),e||Xi(t,!0)}else e=tf(e).createTextNode(r),e[lt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=$i(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[lt]=t}else ea(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=ta(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(So(t),t):(So(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=$i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[lt]=t}else ea(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=ta(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(So(t),t):(So(t),null)}return So(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Xc(t,t.updateQueue),U(t),null);case 4:return he(),e===null&&Ld(t.stateNode.containerInfo),U(t),null;case 10:return sa(t.type),U(t),null;case 19:if(de(z),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Co(e),o!==null){for(t.flags|=128,Zc(r,!1),e=o.updateQueue,t.updateQueue=e,Xc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)wi(n,e),n=n.sibling;return j(z,z.current&1|2),R&&Vi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&F()>mu&&(t.flags|=128,a=!0,Zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=Co(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Xc(t,e),Zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!R)return U(t),null}else 2*F()-r.renderingStartTime>mu&&n!==536870912&&(t.flags|=128,a=!0,Zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=F(),e.sibling=null,n=z.current,j(z,a?n&1|2:n&1),R&&Vi(t,r.treeForkCount),e);case 22:case 23:return So(t),ho(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Xc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(Aa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),sa(ya),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function $c(e,t){switch(Wi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sa(ya),he(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _e(t),null;case 31:if(t.memoizedState!==null){if(So(t),t.alternate===null)throw Error(i(340));ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(So(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(z),null;case 4:return he(),null;case 10:return sa(t.type),null;case 22:case 23:return So(t),ho(),e!==null&&de(Aa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sa(ya),null;case 25:return null;default:return null}}function el(e,t){switch(Wi(t),t.tag){case 3:sa(ya),he();break;case 26:case 27:case 5:_e(t);break;case 4:he();break;case 31:t.memoizedState!==null&&So(t);break;case 13:So(t);break;case 19:de(z);break;case 10:sa(t.type);break;case 22:case 23:So(t),ho(),e!==null&&de(Aa);break;case 24:sa(ya)}}function tl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function nl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function rl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{lo(t,n)}catch(t){Z(e,e.return,t)}}}function il(e,t,n){n.props=oc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function al(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function ol(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function sl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function cl(e,t,n){try{var r=e.stateNode;Xd(r,e.type,n,t),r[ut]=t}catch(t){Z(e,e.return,t)}}function ll(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&mf(e.type)||e.tag===4}function ul(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||ll(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&mf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(r!==4&&(r===27&&mf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(dl(e,t,n),e=e.sibling;e!==null;)dl(e,t,n),e=e.sibling}function fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&mf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}function pl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Yd(t,r,n),t[lt]=e,t[ut]=n}catch(t){Z(e,e.return,t)}}var ml=!1,hl=!1,gl=!1,_l=typeof WeakSet==`function`?WeakSet:Set,vl=null;function yl(e,t){if(e=e.containerInfo,$d=Cp,e=Br(e),Vr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(ef={focusedElem:e,selectionRange:n},Cp=!1,vl=t;vl!==null;)if(t=vl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,vl=e;else for(;vl!==null;){switch(t=vl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=oc(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)_f(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:_f(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,vl=e;break}vl=t.return}}function bl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Pl(e,n),r&4&&tl(5,n);break;case 1:if(Pl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=oc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&rl(n),r&512&&al(n,n.return);break;case 3:if(Pl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{lo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&pl(n);case 26:case 5:Pl(e,n),t===null&&r&4&&sl(n),r&512&&al(n,n.return);break;case 12:Pl(e,n);break;case 31:Pl(e,n),r&4&&Tl(e,n);break;case 13:Pl(e,n),r&4&&El(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sd.bind(null,n),Cf(e,n))));break;case 22:if(r=n.memoizedState!==null||ml,!r){t=t!==null&&t.memoizedState!==null||hl,i=ml;var a=hl;ml=r,(hl=t)&&!a?Il(e,n,(n.subtreeFlags&8772)!=0):Pl(e,n),ml=i,hl=a}break;case 30:break;default:Pl(e,n)}}function xl(e){var t=e.alternate;t!==null&&(e.alternate=null,xl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_t(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,Sl=!1;function Cl(e,t,n){for(n=n.child;n!==null;)wl(e,t,n),n=n.sibling}function wl(e,t,n){if(Re&&typeof Re.onCommitFiberUnmount==`function`)try{Re.onCommitFiberUnmount(Le,n)}catch{}switch(n.tag){case 26:hl||ol(n,t),Cl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:hl||ol(n,t);var r=W,i=Sl;mf(n.type)&&(W=n.stateNode,Sl=!1),Cl(e,t,n),kf(n.stateNode),W=r,Sl=i;break;case 5:hl||ol(n,t);case 6:if(r=W,i=Sl,W=null,Cl(e,t,n),W=r,Sl=i,W!==null)if(Sl)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(Sl?(e=W,hf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Yp(e)):hf(W,n.stateNode));break;case 4:r=W,i=Sl,W=n.stateNode.containerInfo,Sl=!0,Cl(e,t,n),W=r,Sl=i;break;case 0:case 11:case 14:case 15:nl(2,n,t),hl||nl(4,n,t),Cl(e,t,n);break;case 1:hl||(ol(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&il(n,t,r)),Cl(e,t,n);break;case 21:Cl(e,t,n);break;case 22:hl=(r=hl)||n.memoizedState!==null,Cl(e,t,n),hl=r;break;default:Cl(e,t,n)}}function Tl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yp(e)}catch(e){Z(t,t.return,e)}}}function El(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yp(e)}catch(e){Z(t,t.return,e)}}function Dl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _l),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _l),t;default:throw Error(i(435,e.tag))}}function Ol(e,t){var n=Dl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=cd.bind(null,e,t);t.then(r,r)}})}function kl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(mf(c.type)){W=c.stateNode,Sl=!1;break a}break;case 5:W=c.stateNode,Sl=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,Sl=!0;break a}c=c.return}if(W===null)throw Error(i(160));wl(o,s,a),W=null,Sl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)jl(t,e),t=t.sibling}var Al=null;function jl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kl(t,e),Ml(e),r&4&&(nl(3,e,e.return),tl(3,e),nl(5,e,e.return));break;case 1:kl(t,e),Ml(e),r&512&&(hl||n===null||ol(n,n.return)),r&64&&ml&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=Al;if(kl(t,e),Ml(e),r&512&&(hl||n===null||ol(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[gt]||o[lt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Yd(o,r,n),o[lt]=e,St(o),r=o;break a;case`link`:var s=rp(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=rp(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[lt]=e,St(o),r=o}e.stateNode=r}else ip(a,e.type,e.stateNode);else e.stateNode=Qf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&cl(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?ip(a,e.type,e.stateNode):Qf(a,r,e.memoizedProps))}break;case 27:kl(t,e),Ml(e),r&512&&(hl||n===null||ol(n,n.return)),n!==null&&r&4&&cl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(kl(t,e),Ml(e),r&512&&(hl||n===null||ol(n,n.return)),e.flags&32){a=e.stateNode;try{Jt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,cl(e,a,n===null?a:n.memoizedProps)),r&1024&&(gl=!0);break;case 6:if(kl(t,e),Ml(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(np=null,a=Al,Al=Mf(t.containerInfo),kl(t,e),Al=a,Ml(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yp(t.containerInfo)}catch(t){Z(e,e.return,t)}gl&&(gl=!1,Nl(e));break;case 4:r=Al,Al=Mf(e.stateNode.containerInfo),kl(t,e),Ml(e),Al=r;break;case 12:kl(t,e),Ml(e);break;case 31:kl(t,e),Ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 13:kl(t,e),Ml(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(fu=F()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=ml,d=hl;if(ml=u||a,hl=d||l,kl(t,e),hl=d,ml=u,Ml(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||ml||hl||Fl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?gf(m,!0):gf(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Ol(e,n))));break;case 19:kl(t,e),Ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 30:break;case 21:break;default:kl(t,e),Ml(e)}}function Ml(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(ll(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,o=ul(e);fl(e,o,a);break;case 5:var s=n.stateNode;n.flags&32&&(Jt(s,``),n.flags&=-33);var c=ul(e);fl(e,c,s);break;case 3:case 4:var l=n.stateNode.containerInfo,u=ul(e);dl(e,u,l);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bl(e,t.alternate,t),t=t.sibling}function Fl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:nl(4,t,t.return),Fl(t);break;case 1:ol(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&il(t,t.return,n),Fl(t);break;case 27:kf(t.stateNode);case 26:case 5:ol(t,t.return),Fl(t);break;case 22:t.memoizedState===null&&Fl(t);break;case 30:Fl(t);break;default:Fl(t)}e=e.sibling}}function Il(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Il(i,a,n),tl(4,a);break;case 1:if(Il(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)co(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&rl(a),al(a,a.return);break;case 27:pl(a);case 26:case 5:Il(i,a,n),n&&r===null&&o&4&&sl(a),al(a,a.return);break;case 12:Il(i,a,n);break;case 31:Il(i,a,n),n&&o&4&&Tl(i,a);break;case 13:Il(i,a,n),n&&o&4&&El(i,a);break;case 22:a.memoizedState===null&&Il(i,a,n),al(a,a.return);break;case 30:break;default:Il(i,a,n)}t=t.sibling}}function Ll(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&xa(n))}function Rl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xa(e))}function zl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bl(e,t,n,r),t=t.sibling}function Bl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:zl(e,t,n,r),i&2048&&tl(9,t);break;case 1:zl(e,t,n,r);break;case 3:zl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xa(e)));break;case 12:if(i&2048){zl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else zl(e,t,n,r);break;case 31:zl(e,t,n,r);break;case 13:zl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?zl(e,t,n,r):(a._visibility|=2,Vl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?zl(e,t,n,r):Hl(e,t),i&2048&&Ll(o,t);break;case 24:zl(e,t,n,r),i&2048&&Rl(t.alternate,t);break;default:zl(e,t,n,r)}}function Vl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Vl(a,o,s,c,i),tl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Vl(a,o,s,c,i)):u._visibility&2?Vl(a,o,s,c,i):Hl(a,o),i&&l&2048&&Ll(o.alternate,o);break;case 24:Vl(a,o,s,c,i),i&&l&2048&&Rl(o.alternate,o);break;default:Vl(a,o,s,c,i)}t=t.sibling}}function Hl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Hl(n,r),i&2048&&Ll(r.alternate,r);break;case 24:Hl(n,r),i&2048&&Rl(r.alternate,r);break;default:Hl(n,r)}t=t.sibling}}var Ul=8192;function Wl(e,t,n){if(e.subtreeFlags&Ul)for(e=e.child;e!==null;)Gl(e,t,n),e=e.sibling}function Gl(e,t,n){switch(e.tag){case 26:Wl(e,t,n),e.flags&Ul&&e.memoizedState!==null&&sp(n,Al,e.memoizedState,e.memoizedProps);break;case 5:Wl(e,t,n);break;case 3:case 4:var r=Al;Al=Mf(e.stateNode.containerInfo),Wl(e,t,n),Al=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ul,Ul=16777216,Wl(e,t,n),Ul=r):Wl(e,t,n));break;default:Wl(e,t,n)}}function Kl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ql(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];vl=r,Xl(r,e)}Kl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jl(e),e=e.sibling}function Jl(e){switch(e.tag){case 0:case 11:case 15:ql(e),e.flags&2048&&nl(9,e,e.return);break;case 3:ql(e);break;case 12:ql(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yl(e)):ql(e);break;default:ql(e)}}function Yl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];vl=r,Xl(r,e)}Kl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:nl(8,t,t.return),Yl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Yl(t));break;default:Yl(t)}e=e.sibling}}function Xl(e,t){for(;vl!==null;){var n=vl;switch(n.tag){case 0:case 11:case 15:nl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:xa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,vl=r;else a:for(n=e;vl!==null;){r=vl;var i=r.sibling,a=r.return;if(xl(r),r===n){vl=null;break a}if(i!==null){i.return=a,vl=i;break a}vl=a}}}var Zl={getCacheForType:function(e){var t=pa(ya),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return pa(ya).controller.signal}},Ql=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,$l=null,eu=!1,tu=!1,nu=!1,ru=0,X=0,iu=0,au=0,ou=0,su=0,cu=0,lu=null,uu=null,du=!1,fu=0,pu=0,mu=1/0,hu=null,gu=null,_u=0,vu=null,yu=null,bu=0,xu=0,Su=null,Cu=null,wu=0,Tu=null;function Eu(){return G&2&&J!==0?J&-J:k.T===null?ot():wd()}function Du(){if(su===0)if(!(J&536870912)||R){var e=Ge;Ge<<=1,!(Ge&3932160)&&(Ge=262144),su=e}else su=536870912;return e=go.current,e!==null&&(e.flags|=32),su}function Ou(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Fu(e,0),Mu(e,J,su,!1)),$e(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(au|=n),X===4&&Mu(e,J,su,!1)),gd(e))}function ku(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ye(e,t),a=r?Uu(e,t):Vu(e,t,!0),o=r;do{if(a===0){tu&&!r&&Mu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!ju(n)){a=Vu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=lu;var l=c.current.memoizedState.isDehydrated;if(l&&(Fu(c,s).flags|=256),s=Vu(c,s,!1),s!==2){if(nu&&!l){c.errorRecoveryDisabledLanes|=o,au|=o,a=4;break a}o=uu,uu=a,o!==null&&(uu===null?uu=o:uu.push.apply(uu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Fu(e,0),Mu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Mu(r,t,su,!eu);break a;case 2:uu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fu+300-F(),10<a)){if(Mu(r,t,su,!eu),Je(r,0,!0)!==0)break a;bu=t,r.timeoutHandle=lf(Au.bind(null,r,n,uu,hu,du,t,su,au,cu,eu,o,`Throttled`,-0,0),a);break a}Au(r,n,uu,hu,du,t,su,au,cu,eu,o,null,-0,0)}}break}while(1);gd(e)}function Au(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},Gl(t,a,d);var m=(a&62914560)===a?fu-F():(a&4194048)===a?pu-F():0;if(m=lp(d,m),m!==null){bu=a,e.cancelPendingCommit=m(Xu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Mu(e,a,o,!l);return}}Xu(e,t,a,n,r,i,o,s,c)}function ju(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Fr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mu(e,t,n,r){t&=~ou,t&=~au,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Be(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&tt(e,n,t)}function Nu(){return G&6?!0:(_d(0,!1),!1)}function Pu(){if(q!==null){if(Y===0)var e=q.return;else e=q,aa=ia=null,Bo(e),Wa=null,Ga=0,e=q;for(;e!==null;)el(e.alternate,e),e=e.return;q=null}}function Fu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,uf(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bu=0,Pu(),K=e,q=n=Ci(e.current,null),J=t,Y=0,$l=null,eu=!1,tu=Ye(e,t),nu=!1,cu=su=ou=au=iu=X=0,uu=lu=null,du=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Be(r),a=1<<i;t|=e[i],r&=~a}return ru=t,pi(),n}function Iu(e,t){B=null,k.H=Qs,t===Pa||t===Ia?(t=Ha(),Y=3):t===Fa?(t=Ha(),Y=4):Y=t===gc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,$l=t,q===null&&(X=1,uc(e,ji(t,e.current)))}function Lu(){var e=go.current;return e===null?!0:(J&4194048)===J?_o===null:(J&62914560)===J||J&536870912?e===_o:!1}function Ru(){var e=k.H;return k.H=Qs,e===null?Qs:e}function zu(){var e=k.A;return k.A=Zl,e}function Bu(){X=4,eu||(J&4194048)!==J&&go.current!==null||(tu=!0),!(iu&134217727)&&!(au&134217727)||K===null||Mu(K,J,su,!1)}function Vu(e,t,n){var r=G;G|=2;var i=Ru(),a=zu();(K!==e||J!==t)&&(hu=null,Fu(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=$l;switch(Y){case 8:Pu(),o=6;break a;case 3:case 2:case 9:case 6:go.current===null&&(t=!0);var l=Y;if(Y=0,$l=null,qu(e,s,c,l),n&&tu){o=0;break a}break;default:l=Y,Y=0,$l=null,qu(e,s,c,l)}}Hu(),o=X;break}catch(t){Iu(e,t)}while(1);return t&&e.shellSuspendCounter++,aa=ia=null,G=r,k.H=i,k.A=a,q===null&&(K=null,J=0,pi()),o}function Hu(){for(;q!==null;)Gu(q)}function Uu(e,t){var n=G;G|=2;var r=Ru(),a=zu();K!==e||J!==t?(hu=null,mu=F()+500,Fu(e,t)):tu=Ye(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=$l;b:switch(Y){case 1:Y=0,$l=null,qu(e,t,o,1);break;case 2:case 9:if(Ra(o)){Y=0,$l=null,Ku(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),gd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Ra(o)?(Y=0,$l=null,Ku(t)):(Y=0,$l=null,qu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?op(s):c.stateNode.complete){Y=0,$l=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Ju(u))}break b}}Y=0,$l=null,qu(e,t,o,5);break;case 6:Y=0,$l=null,qu(e,t,o,6);break;case 8:Pu(),X=6;break a;default:throw Error(i(462))}}Wu();break}catch(t){Iu(e,t)}while(1);return aa=ia=null,k.H=r,k.A=a,G=n,q===null?(K=null,J=0,pi(),X):0}function Wu(){for(;q!==null&&!De();)Gu(q)}function Gu(e){var t=Kc(e.alternate,e,ru);e.memoizedProps=e.pendingProps,t===null?Ju(e):q=t}function Ku(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ac(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=Ac(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Bo(t);default:el(n,t),t=q=wi(t,ru),t=Kc(n,t,ru)}e.memoizedProps=e.pendingProps,t===null?Ju(e):q=t}function qu(e,t,n,r){aa=ia=null,Bo(t),Wa=null,Ga=0;var i=t.return;try{if(hc(e,i,t,n,J)){X=1,uc(e,ji(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,uc(e,ji(n,e.current)),q=null;return}t.flags&32768?(R||r===1?e=!0:tu||J&536870912?e=!1:(eu=e=!0,(r===2||r===9||r===3||r===6)&&(r=go.current,r!==null&&r.tag===13&&(r.flags|=16384))),Yu(t,e)):Ju(t)}function Ju(e){var t=e;do{if(t.flags&32768){Yu(t,eu);return}e=t.return;var n=Qc(t.alternate,t,ru);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Yu(e,t){do{var n=$c(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Xu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do td();while(_u!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=fi,et(e,n,o,s,c,l),e===K&&(q=K=null,J=0),yu=t,vu=e,bu=n,xu=o,Su=a,Cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,ld(Me,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=G,G|=4;try{yl(e,t,n)}finally{G=s,A.p=a,k.T=r}}_u=1,Zu(),Qu(),$u()}}function Zu(){if(_u===1){_u=0;var e=vu,t=yu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{jl(t,e);var a=ef,o=Br(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&zr(s.ownerDocument.documentElement,s)){if(c!==null&&Vr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Rr(s,h),v=Rr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Cp=!!$d,ef=$d=null}finally{G=i,A.p=r,k.T=n}}e.current=t,_u=2}}function Qu(){if(_u===2){_u=0;var e=vu,t=yu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{bl(e,t.alternate,t)}finally{G=i,A.p=r,k.T=n}}_u=3}}function $u(){if(_u===4||_u===3){_u=0,Oe();var e=vu,t=yu,n=bu,r=Cu;t.subtreeFlags&10256||t.flags&10256?_u=5:(_u=0,yu=vu=null,ed(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(gu=null),at(n),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot==`function`)try{Re.onCommitFiberRoot(Le,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}bu&3&&td(),gd(e),i=e.pendingLanes,n&261930&&i&42?e===Tu?wu++:(wu=0,Tu=e):wu=0,_d(0,!1)}}function ed(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,xa(t)))}function td(){return Zu(),Qu(),$u(),nd()}function nd(){if(_u!==5)return!1;var e=vu,t=xu;xu=0;var n=at(bu),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=Su,Su=null;var o=vu,s=bu;if(_u=0,yu=vu=null,bu=0,G&6)throw Error(i(331));var c=G;if(G|=4,Jl(o.current),Bl(o,o.current,s,n),G=c,_d(0,!1),Re&&typeof Re.onPostCommitFiberRoot==`function`)try{Re.onPostCommitFiberRoot(Le,o)}catch{}return!0}finally{A.p=a,k.T=r,ed(e,t)}}function rd(e,t,n){t=ji(n,t),t=fc(e.stateNode,t,2),e=no(e,t,2),e!==null&&($e(e,2),gd(e))}function Z(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gu===null||!gu.has(r))){e=ji(n,e),n=pc(2),r=no(t,n,2),r!==null&&(mc(n,r,t,e),$e(r,2),gd(r));break}}t=t.return}}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ql;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(nu=!0,i.add(n),e=ad.bind(null,e,t,n),t.then(e,e))}function ad(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>F()-fu?!(G&2)&&Fu(e,0):ou|=n,cu===J&&(cu=0)),gd(e)}function od(e,t){t===0&&(t=Ze()),e=gi(e,t),e!==null&&($e(e,t),gd(e))}function sd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),od(e,n)}function cd(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),od(e,n)}function ld(e,t){return Te(e,t)}var ud=null,dd=null,fd=!1,pd=!1,md=!1,hd=0;function gd(e){e!==dd&&e.next===null&&(dd===null?ud=dd=e:dd=dd.next=e),pd=!0,fd||(fd=!0,Cd())}function _d(e,t){if(!md&&pd){md=!0;do for(var n=!1,r=ud;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Be(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Sd(r,a))}else a=J,a=Je(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ye(r,a)||(n=!0,Sd(r,a));r=r.next}while(n);md=!1}}function vd(){yd()}function yd(){pd=fd=!1;var e=0;hd!==0&&cf()&&(e=hd);for(var t=F(),n=null,r=ud;r!==null;){var i=r.next,a=bd(r,t);a===0?(r.next=null,n===null?ud=i:n.next=i,i===null&&(dd=n)):(n=r,(e!==0||a&3)&&(pd=!0)),r=i}_u!==0&&_u!==5||_d(e,!1),hd!==0&&(hd=0)}function bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Be(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Xe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Je(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ee(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ye(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ee(r),at(n)){case 2:case 8:n=je;break;case 32:n=Me;break;case 268435456:n=Pe;break;default:n=Me}return r=xd.bind(null,e),n=Te(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ee(r),e.callbackPriority=2,e.callbackNode=null,2}function xd(e,t){if(_u!==0&&_u!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(td()&&e.callbackNode!==n)return null;var r=J;return r=Je(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(ku(e,r,t),bd(e,F()),e.callbackNode!=null&&e.callbackNode===n?xd.bind(null,e):null)}function Sd(e,t){if(td())return null;ku(e,t,!0)}function Cd(){ff(function(){G&6?Te(Ae,vd):yd()})}function wd(){if(hd===0){var e=wa;e===0&&(e=We,We<<=1,!(We&261888)&&(We=256)),hd=e}return hd}function Td(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:tn(``+e)}function Ed(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Dd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Td((i[ut]||null).action),o=r.submitter;o&&(t=(t=o[ut]||null)?Td(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new wn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(hd!==0){var e=o?Ed(i,o):new FormData(i);Rs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?Ed(i,o):new FormData(i),Rs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Od=0;Od<si.length;Od++){var kd=si[Od],Ad=kd.toLowerCase(),jd=kd[0].toUpperCase()+kd.slice(1);ci(Ad,`on`+jd)}ci($r,`onAnimationEnd`),ci(ei,`onAnimationIteration`),ci(ti,`onAnimationStart`),ci(`dblclick`,`onDoubleClick`),ci(`focusin`,`onFocus`),ci(`focusout`,`onBlur`),ci(ni,`onTransitionRun`),ci(ri,`onTransitionStart`),ci(ii,`onTransitionCancel`),ci(ai,`onTransitionEnd`),Et(`onMouseEnter`,[`mouseout`,`mouseover`]),Et(`onMouseLeave`,[`mouseout`,`mouseover`]),Et(`onPointerEnter`,[`pointerout`,`pointerover`]),Et(`onPointerLeave`,[`pointerout`,`pointerover`]),Tt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Tt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Tt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Tt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Md=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Nd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Md));function Pd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){li(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){li(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ft];n===void 0&&(n=t[ft]=new Set);var r=e+`__bubble`;n.has(r)||(Rd(t,e,2,!1),n.add(r))}function Fd(e,t,n){var r=0;t&&(r|=4),Rd(n,e,r,t)}var Id=`_reactListening`+Math.random().toString(36).slice(2);function Ld(e){if(!e[Id]){e[Id]=!0,Ct.forEach(function(t){t!==`selectionchange`&&(Nd.has(t)||Fd(t,!1,e),Fd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Id]||(t[Id]=!0,Fd(`selectionchange`,!1,t))}}function Rd(e,t,n,r){switch(Ap(t)){case 2:var i=wp;break;case 8:i=Tp;break;default:i=Ep}n=i.bind(null,t,n,e),i=void 0,!pn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function zd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}un(function(){var r=a,i=an(n),s=[];a:{var c=oi.get(e);if(c!==void 0){var l=wn,u=e;switch(e){case`keypress`:if(yn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Fn;break;case`focusout`:u=`blur`,l=Fn;break;case`beforeblur`:case`afterblur`:l=Fn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Nn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Zn;break;case $r:case ei:case ti:l=Ln;break;case ai:l=$n;break;case`scroll`:case`scrollend`:l=En;break;case`wheel`:l=tr;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=rr}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=dn(m,p),g!=null&&d.push(Bd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==rn&&(u=n.relatedTarget||n.fromElement)&&(vt(u)||u[dt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?vt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=jn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:bt(l),h=u==null?c:bt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,vt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Hd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Ud(s,c,l,d,!1),u!==null&&f!==null&&Ud(s,f,u,d,!0)}}a:{if(c=r?bt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=Cr;else if(_r(c))if(wr)v=Nr;else{v=jr;var y=Ar}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Qt(r.elementType)&&(v=Cr):v=Mr;if(v&&=v(e,r)){vr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Wt(c,`number`,c.value)}switch(y=r?bt(r):window,e){case`focusin`:(_r(y)||y.contentEditable===`true`)&&(Ur=y,Wr=r,Gr=null);break;case`focusout`:Gr=Wr=Ur=null;break;case`mousedown`:Kr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Kr=!1,qr(s,n,i);break;case`selectionchange`:if(Hr)break;case`keydown`:case`keyup`:qr(s,n,i)}var b;if(ar)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else pr?dr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(cr&&n.locale!==`ko`&&(pr||x!==`onCompositionStart`?x===`onCompositionEnd`&&pr&&(b=vn()):(hn=i,gn=`value`in hn?hn.value:hn.textContent,pr=!0)),y=Vd(r,x),0<y.length&&(x=new I(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=fr(n),b!==null&&(x.data=b)))),(b=sr?mr(e,n):hr(e,n))&&(x=Vd(r,`onBeforeInput`),0<x.length&&(y=new I(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),Dd(s,e,r,n,i)}Pd(s,t)})}function Bd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=dn(e,n),i!=null&&r.unshift(Bd(e,i,a)),i=dn(e,t),i!=null&&r.push(Bd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Hd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ud(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=dn(n,a),l!=null&&o.unshift(Bd(n,l,c))):i||(l=dn(n,a),l!=null&&o.push(Bd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Wd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function Kd(e){return(typeof e==`string`?e:``+e).replace(Wd,`
`).replace(Gd,``)}function qd(e,t){return t=Kd(t),Kd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Jt(e,``+r);break;case`className`:Mt(e,`class`,r);break;case`tabIndex`:Mt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Mt(e,n,r);break;case`style`:Zt(e,r,o);break;case`data`:if(t!==`object`){Mt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=tn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),jt(e,`popover`,r);break;case`xlinkActuate`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:jt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=$t.get(n)||n,jt(e,n,r))}}function Jd(e,t,n,r,a,o){switch(n){case`style`:Zt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Jt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!wt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ut]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):jt(e,n,r)}}}function Yd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Ut(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Gt(e,!!r,n,!0):Gt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<Md.length;r++)Q(Md[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Qt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Jd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Xd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Ht(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Gt(e,!!n,n?[]:``,!1):Gt(e,!!n,t,!0)):Gt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Kt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Qt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Jd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Jd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Qd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var $d=null,ef=null;function tf(e){return e.nodeType===9?e:e.ownerDocument}function nf(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function rf(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function af(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sf=null;function cf(){var e=window.event;return e&&e.type===`popstate`?e===sf?!1:(sf=e,!0):(sf=null,!1)}var lf=typeof setTimeout==`function`?setTimeout:void 0,uf=typeof clearTimeout==`function`?clearTimeout:void 0,df=typeof Promise==`function`?Promise:void 0,ff=typeof queueMicrotask==`function`?queueMicrotask:df===void 0?lf:function(e){return df.resolve(null).then(e).catch(pf)};function pf(e){setTimeout(function(){throw e})}function mf(e){return e===`head`}function hf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Yp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)kf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,kf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[gt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&kf(e.ownerDocument.body);n=i}while(n);Yp(t)}function gf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function _f(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:_f(n),_t(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function vf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(r){if(!e[gt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}}else if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;if(e=wf(e.nextSibling),e===null)break}return null}function yf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=wf(e.nextSibling),e===null))return null;return e}function bf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=wf(e.nextSibling),e===null))return null;return e}function xf(e){return e.data===`$?`||e.data===`$~`}function Sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function Cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function wf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var Tf=null;function Ef(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return wf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function Df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function Of(e,t,n){switch(t=tf(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function kf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_t(e)}var Af=new Map,jf=new Set;function Mf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nf=A.d;A.d={f:Pf,r:Ff,D:Rf,C:zf,L:Bf,m:Vf,X:Uf,S:Hf,M:Wf};function Pf(){var e=Nf.f(),t=Nu();return e||t}function Ff(e){var t=yt(e);t!==null&&t.tag===5&&t.type===`form`?Bs(t):Nf.r(e)}var If=typeof document>`u`?null:document;function Lf(e,t,n){var r=If;if(r&&typeof t==`string`&&t){var i=Vt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),jf.has(i)||(jf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Yd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Rf(e){Nf.D(e),Lf(`dns-prefetch`,e,null)}function zf(e,t){Nf.C(e,t),Lf(`preconnect`,e,t)}function Bf(e,t,n){Nf.L(e,t,n);var r=If;if(r&&e&&t){var i=`link[rel="preload"][as="`+Vt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Vt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Vt(n.imageSizes)+`"]`)):i+=`[href="`+Vt(e)+`"]`;var a=i;switch(t){case`style`:a=Kf(e);break;case`script`:a=Xf(e)}Af.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),Af.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(qf(a))||t===`script`&&r.querySelector(Zf(a))||(t=r.createElement(`link`),Yd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Vf(e,t){Nf.m(e,t);var n=If;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Vt(r)+`"][href="`+Vt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Xf(e)}if(!Af.has(a)&&(e=h({rel:`modulepreload`,href:e},t),Af.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Zf(a)))return}r=n.createElement(`link`),Yd(r,`link`,e),St(r),n.head.appendChild(r)}}}function Hf(e,t,n){Nf.S(e,t,n);var r=If;if(r&&e){var i=xt(r).hoistableStyles,a=Kf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(qf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=Af.get(a))&&ep(e,n);var c=o=r.createElement(`link`);St(c),Yd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,$f(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Uf(e,t){Nf.X(e,t);var n=If;if(n&&e){var r=xt(n).hoistableScripts,i=Xf(e),a=r.get(i);a||(a=n.querySelector(Zf(i)),a||(e=h({src:e,async:!0},t),(t=Af.get(i))&&tp(e,t),a=n.createElement(`script`),St(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Wf(e,t){Nf.M(e,t);var n=If;if(n&&e){var r=xt(n).hoistableScripts,i=Xf(e),a=r.get(i);a||(a=n.querySelector(Zf(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=Af.get(i))&&tp(e,t),a=n.createElement(`script`),St(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Gf(e,t,n,r){var a=(a=N.current)?Mf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Kf(n.href),n=xt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Kf(n.href);var o=xt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(qf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Af.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Af.set(e,n),o||Yf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Xf(n),n=xt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Kf(e){return`href="`+Vt(e)+`"`}function qf(e){return`link[rel="stylesheet"][`+e+`]`}function Jf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Yf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Yd(t,`link`,n),St(t),e.head.appendChild(t))}function Xf(e){return`[src="`+Vt(e)+`"]`}function Zf(e){return`script[async]`+e}function Qf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Vt(n.href)+`"]`);if(r)return t.instance=r,St(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),St(r),Yd(r,`style`,a),$f(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Kf(n.href);var o=e.querySelector(qf(a));if(o)return t.state.loading|=4,t.instance=o,St(o),o;r=Jf(n),(a=Af.get(a))&&ep(r,a),o=(e.ownerDocument||e).createElement(`link`),St(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Yd(o,`link`,r),t.state.loading|=4,$f(o,n.precedence,e),t.instance=o;case`script`:return o=Xf(n.src),(a=e.querySelector(Zf(o)))?(t.instance=a,St(a),a):(r=n,(a=Af.get(o))&&(r=h({},n),tp(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),St(a),Yd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,$f(r,n.precedence,e));return t.instance}function $f(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ep(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function tp(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var np=null;function rp(e,t,n){if(np===null){var r=new Map,i=np=new Map;i.set(n,r)}else i=np,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[gt]||a[lt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function ip(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function ap(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function op(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function sp(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Kf(r.href),a=t.querySelector(qf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=up.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,St(a);return}a=t.ownerDocument||t,r=Jf(r),(i=Af.get(i))&&ep(r,i),a=a.createElement(`link`),St(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Yd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=up.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var cp=0;function lp(e,t){return e.stylesheets&&e.count===0&&fp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&fp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&cp===0&&(cp=62500*Qd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>cp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function up(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dp=null;function fp(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dp=new Map,t.forEach(pp,e),dp=null,up.call(e))}function pp(e,t){if(!(t.state.loading&4)){var n=dp.get(e);if(n)var r=n.get(null);else{n=new Map,dp.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=up.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var mp={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function hp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function gp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new hp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=xi(3,null,null,t),e.current=a,a.stateNode=e,t=ba(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},$a(a),e}function _p(e){return e?(e=yi,e):yi}function vp(e,t,n,r,i,a){i=_p(i),r.context===null?r.context=i:r.pendingContext=i,r=to(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=no(e,r,t),n!==null&&(Ou(n,e,t),ro(n,e,t))}function yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bp(e,t){yp(e,t),(e=e.alternate)&&yp(e,t)}function xp(e){if(e.tag===13||e.tag===31){var t=gi(e,67108864);t!==null&&Ou(t,e,67108864),bp(e,67108864)}}function Sp(e){if(e.tag===13||e.tag===31){var t=Eu();t=it(t);var n=gi(e,t);n!==null&&Ou(n,e,t),bp(e,t)}}var Cp=!0;function wp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,Ep(e,t,n,r)}finally{A.p=a,k.T=i}}function Tp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,Ep(e,t,n,r)}finally{A.p=a,k.T=i}}function Ep(e,t,n,r){if(Cp){var i=Dp(r);if(i===null)zd(e,t,r,Op,n),zp(e,r);else if(Vp(i,e,t,n,r))r.stopPropagation();else if(zp(e,r),t&4&&-1<Rp.indexOf(e)){for(;i!==null;){var a=yt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Be(o);s.entanglements[1]|=c,o&=~c}gd(a),!(G&6)&&(mu=F()+500,_d(0,!1))}}break;case 31:case 13:s=gi(a,2),s!==null&&Ou(s,a,2),Nu(),bp(a,2)}if(a=Dp(r),a===null&&zd(e,t,r,Op,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else zd(e,t,r,null,n)}}function Dp(e){return e=an(e),kp(e)}var Op=null;function kp(e){if(Op=null,e=vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Op=e,null}function Ap(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(ke()){case Ae:return 2;case je:return 8;case Me:case Ne:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var jp=!1,Mp=null,Np=null,Pp=null,Fp=new Map,Ip=new Map,Lp=[],Rp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function zp(e,t){switch(e){case`focusin`:case`focusout`:Mp=null;break;case`dragenter`:case`dragleave`:Np=null;break;case`mouseover`:case`mouseout`:Pp=null;break;case`pointerover`:case`pointerout`:Fp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Ip.delete(t.pointerId)}}function Bp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=yt(t),t!==null&&xp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vp(e,t,n,r,i){switch(t){case`focusin`:return Mp=Bp(Mp,e,t,n,r,i),!0;case`dragenter`:return Np=Bp(Np,e,t,n,r,i),!0;case`mouseover`:return Pp=Bp(Pp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Fp.set(a,Bp(Fp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Ip.set(a,Bp(Ip.get(a)||null,e,t,n,r,i)),!0}return!1}function Hp(e){var t=vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,st(e.priority,function(){Sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,st(e.priority,function(){Sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Up(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rn=r,n.target.dispatchEvent(r),rn=null}else return t=yt(n),t!==null&&xp(t),e.blockedOn=n,!1;t.shift()}return!0}function Wp(e,t,n){Up(e)&&n.delete(t)}function Gp(){jp=!1,Mp!==null&&Up(Mp)&&(Mp=null),Np!==null&&Up(Np)&&(Np=null),Pp!==null&&Up(Pp)&&(Pp=null),Fp.forEach(Wp),Ip.forEach(Wp)}function Kp(e,n){e.blockedOn===n&&(e.blockedOn=null,jp||(jp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Gp)))}var qp=null;function Jp(e){qp!==e&&(qp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){qp===e&&(qp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(kp(r||n)===null)continue;break}var a=yt(n);a!==null&&(e.splice(t,3),t-=3,Rs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Yp(e){function t(t){return Kp(t,e)}Mp!==null&&Kp(Mp,e),Np!==null&&Kp(Np,e),Pp!==null&&Kp(Pp,e),Fp.forEach(t),Ip.forEach(t);for(var n=0;n<Lp.length;n++){var r=Lp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Lp.length&&(n=Lp[0],n.blockedOn===null);)Hp(n),n.blockedOn===null&&Lp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ut]||null;if(typeof a==`function`)o||Jp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ut]||null)s=o.formAction;else if(kp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Jp(n)}}}function Xp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Zp(e){this._internalRoot=e}Qp.prototype.render=Zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,r=Eu();vp(n,r,e,t,null,null)},Qp.prototype.unmount=Zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vp(e.current,2,null,e,null,null),Nu(),t[dt]=null}};function Qp(e){this._internalRoot=e}Qp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lp.length&&t!==0&&t<Lp[n].priority;n++);Lp.splice(n,0,e),n===0&&Hp(e)}};var $p=n.version;if($p!==`19.2.0`)throw Error(i(527,$p,`19.2.0`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var em={bundleType:0,version:`19.2.0`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var tm=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tm.isDisabled&&tm.supportsFiber)try{Le=tm.inject(em),Re=tm}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=sc,s=cc,c=lc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=gp(e,1,!1,null,null,n,r,null,o,s,c,Xp),e[dt]=t.current,Ld(e),new Zp(t)}})),g=c(o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()}))()),_=c(u()),v=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs=r()})(e,(function(){var e=1e3,t=6e4,n=36e5,r=`millisecond`,i=`second`,a=`minute`,o=`hour`,s=`day`,c=`week`,l=`month`,u=`quarter`,d=`year`,f=`date`,p=`Invalid Date`,m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:`en`,weekdays:`Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(`_`),months:`January_February_March_April_May_June_July_August_September_October_November_December`.split(`_`),ordinal:function(e){var t=[`th`,`st`,`nd`,`rd`],n=e%100;return`[`+e+(t[(n-20)%10]||t[n]||t[0])+`]`}},_=function(e,t,n){var r=String(e);return!r||r.length>=t?e:``+Array(t+1-r.length).join(n)+e},v={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?`+`:`-`)+_(r,2,`0`)+`:`+_(i,2,`0`)},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),a=n-i<0,o=t.clone().add(r+(a?-1:1),l);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:f,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||``).toLowerCase().replace(/s$/,``)},u:function(e){return e===void 0}},y=`en`,b={};b[y]=g;var x=`$isDayjsObject`,S=function(e){return e instanceof E||!(!e||!e[x])},C=function e(t,n,r){var i;if(!t)return y;if(typeof t==`string`){var a=t.toLowerCase();b[a]&&(i=a),n&&(b[a]=n,i=a);var o=t.split(`-`);if(!i&&o.length>1)return e(o[0])}else{var s=t.name;b[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},w=function(e,t){if(S(e))return e.clone();var n=typeof t==`object`?t:{};return n.date=e,n.args=arguments,new E(n)},T=v;T.l=C,T.i=S,T.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function g(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var _=g.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(t===null)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t==`string`&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,a=(r[7]||`0`).substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return T},_.isValid=function(){return this.$d.toString()!==p},_.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return w(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<w(e)},_.$g=function(e,t,n){return T.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,r=!!T.u(t)||t,u=T.p(e),p=function(e,t){var i=T.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},m=function(e,t){return T.w(n.toDate()[e].apply(n.toDate(`s`),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,g=this.$M,_=this.$D,v=`set`+(this.$u?`UTC`:``);switch(u){case d:return r?p(1,0):p(31,11);case l:return r?p(1,g):p(0,g+1);case c:var y=this.$locale().weekStart||0,b=(h<y?h+7:h)-y;return p(r?_-b:_+(6-b),g);case s:case f:return m(v+`Hours`,0);case o:return m(v+`Minutes`,1);case a:return m(v+`Seconds`,2);case i:return m(v+`Milliseconds`,3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var n,c=T.p(e),u=`set`+(this.$u?`UTC`:``),p=(n={},n[s]=u+`Date`,n[f]=u+`Date`,n[l]=u+`Month`,n[d]=u+`FullYear`,n[o]=u+`Hours`,n[a]=u+`Minutes`,n[i]=u+`Seconds`,n[r]=u+`Milliseconds`,n)[c],m=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var h=this.clone().set(f,1);h.$d[p](m),h.init(),this.$d=h.set(f,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](m);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[T.p(e)]()},_.add=function(r,u){var f,p=this;r=Number(r);var m=T.p(u),h=function(e){var t=w(p);return T.w(t.date(t.date()+Math.round(e*r)),p)};if(m===l)return this.set(l,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===s)return h(1);if(m===c)return h(7);var g=(f={},f[a]=t,f[o]=n,f[i]=e,f)[m]||1,_=this.$d.getTime()+r*g;return T.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||`YYYY-MM-DDTHH:mm:ssZ`,i=T.z(this),a=this.$H,o=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},f=function(e){return T.s(a%12||12,e,`0`)},m=u||function(e,t,n){var r=e<12?`AM`:`PM`;return n?r.toLowerCase():r};return r.replace(h,(function(e,r){return r||function(e){switch(e){case`YY`:return String(t.$y).slice(-2);case`YYYY`:return T.s(t.$y,4,`0`);case`M`:return s+1;case`MM`:return T.s(s+1,2,`0`);case`MMM`:return d(n.monthsShort,s,l,3);case`MMMM`:return d(l,s);case`D`:return t.$D;case`DD`:return T.s(t.$D,2,`0`);case`d`:return String(t.$W);case`dd`:return d(n.weekdaysMin,t.$W,c,2);case`ddd`:return d(n.weekdaysShort,t.$W,c,3);case`dddd`:return c[t.$W];case`H`:return String(a);case`HH`:return T.s(a,2,`0`);case`h`:return f(1);case`hh`:return f(2);case`a`:return m(a,o,!0);case`A`:return m(a,o,!1);case`m`:return String(o);case`mm`:return T.s(o,2,`0`);case`s`:return String(t.$s);case`ss`:return T.s(t.$s,2,`0`);case`SSS`:return T.s(t.$ms,3,`0`);case`Z`:return i}return null}(e)||i.replace(`:`,``)}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(r,f,p){var m,h=this,g=T.p(f),_=w(r),v=(_.utcOffset()-this.utcOffset())*t,y=this-_,b=function(){return T.m(h,_)};switch(g){case d:m=b()/12;break;case l:m=b();break;case u:m=b()/3;break;case c:m=(y-v)/6048e5;break;case s:m=(y-v)/864e5;break;case o:m=y/n;break;case a:m=y/t;break;case i:m=y/e;break;default:m=y}return p?m:T.a(m)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return b[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=C(e,t,!0);return r&&(n.$L=r),n},_.clone=function(){return T.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},g}(),ee=E.prototype;return w.prototype=ee,[[`$ms`,r],[`$s`,i],[`$m`,a],[`$H`,o],[`$W`,s],[`$M`,l],[`$y`,d],[`$D`,f]].forEach((function(e){ee[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||=(e(t,E,w),!0),w},w.locale=C,w.isDayjs=S,w.unix=function(e){return w(1e3*e)},w.en=b[y],w.Ls=b,w.p={},w}))})),y=c(v());function b(e,t,n){let r=n?.serializer||JSON.stringify,i=n?.deserializer||JSON.parse,[a,o]=(0,_.useState)(()=>{if(typeof window>`u`)return t;try{let n=window.localStorage.getItem(e);return n===null?t:i(n)}catch(n){return console.error(`Error reading localStorage key "${e}":`,n),t}});return(0,_.useEffect)(()=>{if(typeof window>`u`)return;let t=t=>{if(t.key===e&&t.newValue)try{o(i(t.newValue))}catch(t){console.error(`Error handling storage change for key "${e}":`,t)}};return window.addEventListener(`storage`,t),()=>window.removeEventListener(`storage`,t)},[e,i]),[a,t=>{try{let n=t instanceof Function?t(a):t;o(n),typeof window<`u`&&window.localStorage.setItem(e,r(n))}catch(t){console.error(`Error setting localStorage key "${e}":`,t)}}]}var x=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),S=c(o(((e,t)=>{t.exports=x()}))()),C=(0,_.createContext)(void 0);const w=({children:e})=>{let[t,n]=b(`speed-clock-state`,{fastTime:(0,y.default)().toISOString(),isRunning:!0,lastSavedTime:(0,y.default)().toISOString()}),r=()=>{let e=(0,y.default)(t.fastTime),n=(0,y.default)(t.lastSavedTime),r=(0,y.default)().diff(n,`millisecond`);return t.isRunning&&r>0?e.add(r,`millisecond`):e},[i,a]=(0,_.useState)((0,y.default)()),[o,s]=(0,_.useState)(r),[c,l]=(0,_.useState)(t.isRunning),u=(0,_.useRef)(Date.now()),d=(0,_.useCallback)(()=>{let e=setTimeout(()=>{let e={fastTime:o.toISOString(),isRunning:c,lastSavedTime:(0,y.default)().toISOString()};n(e)},1e3);return()=>clearTimeout(e)},[o,c,n]),f=(0,_.useCallback)(()=>{let e={fastTime:o.toISOString(),isRunning:c,lastSavedTime:(0,y.default)().toISOString()};n(e)},[o,c,n]);(0,_.useEffect)(()=>{let e,t=()=>{if(c){let e=Date.now(),t=e-u.current;t>0&&(a((0,y.default)()),s(e=>(0,y.default)(e.valueOf()+t)),u.current=e)}e=requestAnimationFrame(t)};return u.current=Date.now(),e=requestAnimationFrame(t),()=>{cancelAnimationFrame(e)}},[c]),(0,_.useEffect)(()=>d(),[d]),(0,_.useEffect)(()=>{let e=()=>{f()};return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[f]);let p=(0,_.useCallback)(e=>{s(e),u.current=Date.now();let t={fastTime:e.toISOString(),isRunning:c,lastSavedTime:(0,y.default)().toISOString()};n(t)},[c,n]),m=(0,_.useCallback)((e,t)=>{let n=o.add(e,t);p(n)},[o,p]),h=(0,_.useCallback)(()=>{p((0,y.default)())},[p]),g=(0,_.useCallback)(()=>{let e=!c;l(e),u.current=Date.now();let t={fastTime:o.toISOString(),isRunning:e,lastSavedTime:(0,y.default)().toISOString()};n(t)},[c,o,n]),v=(0,_.useCallback)(()=>{let e=(0,y.default)();a(e),s(e),l(!0),u.current=Date.now();let t={fastTime:e.toISOString(),isRunning:!0,lastSavedTime:e.toISOString()};n(t)},[n]),x=o.diff(i,`second`);return(0,S.jsx)(C.Provider,{value:{standardTime:i,fastTime:o,timeDifference:x,isRunning:c,toggleRunning:g,reset:v,setFastTimeManually:p,adjustFastTime:m,syncToStandardTime:h},children:e})},T=()=>{let e=(0,_.useContext)(C);if(e===void 0)throw Error(`useTime must be used within a TimeProvider`);return e};var E=function(){return E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},E.apply(this,arguments)};function ee(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var te=o(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),D=`-ms-`,ne=`-moz-`,O=`-webkit-`,re=`comm`,ie=`rule`,ae=`decl`,oe=`@import`,k=`@keyframes`,A=`@layer`,se=Math.abs,ce=String.fromCharCode,le=Object.assign;function ue(e,t){return N(e,0)^45?(((t<<2^N(e,0))<<2^N(e,1))<<2^N(e,2))<<2^N(e,3):0}function de(e){return e.trim()}function j(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function fe(e,t,n){return e.indexOf(t,n)}function N(e,t){return e.charCodeAt(t)|0}function pe(e,t,n){return e.slice(t,n)}function me(e){return e.length}function he(e){return e.length}function ge(e,t){return t.push(e),e}function _e(e,t){return e.map(t).join(``)}function ve(e,t){return e.filter(function(e){return!j(e,t)})}var ye=1,be=1,xe=0,Se=0,P=0,Ce=``;function we(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ye,column:be,length:o,return:``,siblings:s}}function Te(e,t){return le(we(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function Ee(e){for(;e.root;)e=Te(e.root,{children:[e]});ge(e,e.siblings)}function De(){return P}function Oe(){return P=Se>0?N(Ce,--Se):0,be--,P===10&&(be=1,ye--),P}function F(){return P=Se<xe?N(Ce,Se++):0,be++,P===10&&(be=1,ye++),P}function ke(){return N(Ce,Se)}function Ae(){return Se}function je(e,t){return pe(Ce,e,t)}function Me(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ne(e){return ye=be=1,xe=me(Ce=e),Se=0,[]}function Pe(e){return Ce=``,e}function Fe(e){return de(je(Se-1,Re(e===91?e+2:e===40?e+1:e)))}function Ie(e){for(;(P=ke())&&P<33;)F();return Me(e)>2||Me(P)>3?``:` `}function Le(e,t){for(;--t&&F()&&!(P<48||P>102||P>57&&P<65||P>70&&P<97););return je(e,Ae()+(t<6&&ke()==32&&F()==32))}function Re(e){for(;F();)switch(P){case e:return Se;case 34:case 39:e!==34&&e!==39&&Re(P);break;case 40:e===41&&Re(e);break;case 92:F();break}return Se}function ze(e,t){for(;F()&&e+P!==57&&!(e+P===84&&ke()===47););return`/*`+je(t,Se-1)+`*`+ce(e===47?e:F())}function Be(e){for(;!Me(ke());)F();return je(e,Se)}function Ve(e){return Pe(He(``,null,null,null,[``],e=Ne(e),0,[0],e))}function He(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=F()){case 40:if(m!=108&&N(C,d-1)==58){fe(C+=M(Fe(v),`&`,`&\f`),`&\f`,se(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Fe(v);break;case 9:case 10:case 13:case 32:C+=Ie(m);break;case 92:C+=Le(Ae()-1,7);continue;case 47:switch(ke()){case 42:case 47:ge(We(ze(F(),Ae()),t,n,c),c);break;default:C+=`/`}break;case 123*h:s[l++]=me(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=M(C,/\f/g,``)),p>0&&me(C)-d&&ge(p>32?Ge(C+`;`,r,n,d-1,c):Ge(M(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(ge(S=Ue(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)He(C,t,S,S,b,a,d,s,x);else switch(f===99&&N(C,3)===110?100:f){case 100:case 108:case 109:case 115:He(e,S,S,r&&ge(Ue(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x);break;default:He(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+me(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Oe()==125)continue}switch(C+=ce(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(me(C)-1)*_,_=1;break;case 64:ke()===45&&(C+=Fe(F())),f=ke(),u=d=me(y=C+=Be(Ae())),v++;break;case 45:m===45&&me(C)==2&&(h=0)}}return a}function Ue(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=he(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=pe(e,f+1,f=se(g=o[h])),b=e;v<m;++v)(b=de(g>0?p[v]+` `+y:M(y,/&\f/g,p[v])))&&(c[_++]=b);return we(e,t,n,i===0?ie:s,c,l,u,d)}function We(e,t,n,r){return we(e,t,n,re,ce(De()),pe(e,2,-2),0,r)}function Ge(e,t,n,r,i){return we(e,t,n,ae,pe(e,0,r),pe(e,r+1,-1),r,i)}function Ke(e,t,n){switch(ue(e,t)){case 5103:return O+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return ne+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+ne+e+D+e+e;case 5936:switch(N(e,t+11)){case 114:return O+e+D+M(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return O+e+D+M(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return O+e+D+M(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return O+e+D+e+e;case 6165:return O+e+D+`flex-`+e+e;case 5187:return O+e+M(e,/(\w+).+(:[^]+)/,O+`box-$1$2`+D+`flex-$1$2`)+e;case 5443:return O+e+D+`flex-item-`+M(e,/flex-|-self/g,``)+(j(e,/flex-|baseline/)?``:D+`grid-row-`+M(e,/flex-|-self/g,``))+e;case 4675:return O+e+D+`flex-line-pack`+M(e,/align-content|flex-|-self/g,``)+e;case 5548:return O+e+D+M(e,`shrink`,`negative`)+e;case 5292:return O+e+D+M(e,`basis`,`preferred-size`)+e;case 6060:return O+`box-`+M(e,`-grow`,``)+O+e+D+M(e,`grow`,`positive`)+e;case 4554:return O+M(e,/([^-])(transform)/g,`$1`+O+`$2`)+e;case 6187:return M(M(M(e,/(zoom-|grab)/,O+`$1`),/(image-set)/,O+`$1`),e,``)+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,O+`box-pack:$3`+D+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+O+e+e;case 4200:if(!j(e,/flex-|baseline/))return D+`grid-column-align`+pe(e,t)+e;break;case 2592:case 3360:return D+M(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,j(e.props,/grid-\w+-end/)})?~fe(e+(n=n[t].value),`span`,0)?e:D+M(e,`-start`,``)+e+D+`grid-row-span:`+(~fe(n,`span`,0)?j(n,/\d+/):j(n,/\d+/)-+j(e,/\d+/))+`;`:D+M(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return j(e.props,/grid-\w+-start/)})?e:D+M(M(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,O+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(me(e)-1-t>6)switch(N(e,t+1)){case 109:if(N(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,`$1`+O+`$2-$3$1`+ne+(N(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~fe(e,`stretch`,0)?Ke(M(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return D+n+`:`+r+s+(i?D+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(N(e,t+6)===121)return M(e,`:`,`:`+O)+e;break;case 6444:switch(N(e,N(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+O+(N(e,14)===45?`inline-`:``)+`box$3$1`+O+`$2$3$1`+D+`$2box$3`)+e;case 100:return M(e,`:`,`:`+D)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,`scroll-`,`scroll-snap-`)+e}return e}function qe(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Je(e,t,n,r){switch(e.type){case A:if(e.children.length)break;case oe:case ae:return e.return=e.return||e.value;case re:return``;case k:return e.return=e.value+`{`+qe(e.children,r)+`}`;case ie:if(!me(e.value=e.props.join(`,`)))return``}return me(n=qe(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ye(e){var t=he(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Xe(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ze(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ae:e.return=Ke(e.value,e.length,n);return;case k:return qe([Te(e,{value:M(e.value,`@`,`@`+O)})],r);case ie:if(e.length)return _e(n=e.props,function(t){switch(j(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:Ee(Te(e,{props:[M(t,/:(read-\w+)/,`:`+ne+`$1`)]})),Ee(Te(e,{props:[t]})),le(e,{props:ve(n,r)});break;case`::placeholder`:Ee(Te(e,{props:[M(t,/:(plac\w+)/,`:`+O+`input-$1`)]})),Ee(Te(e,{props:[M(t,/:(plac\w+)/,`:`+ne+`$1`)]})),Ee(Te(e,{props:[M(t,/:(plac\w+)/,D+`input-$1`)]})),Ee(Te(e,{props:[t]})),le(e,{props:ve(n,r)});break}return``})}}var Qe=c(te()),$e={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},et=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,tt=`active`,nt=`data-styled-version`,rt=`6.1.19`,it=`/*!sc*/
`,at=typeof window<`u`&&typeof document<`u`,ot=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<`u`&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY),st=Object.freeze([]),ct=Object.freeze({});function lt(e,t,n){return n===void 0&&(n=ct),e.theme!==n.theme&&e.theme||t||n.theme}var ut=new Set(`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.track.u.ul.use.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`)),dt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ft=/(^-|-$)/g;function pt(e){return e.replace(dt,`-`).replace(ft,``)}var mt=/(a)(d)/gi,ht=52,gt=function(e){return String.fromCharCode(e+(e>25?39:97))};function _t(e){var t,n=``;for(t=Math.abs(e);t>ht;t=t/ht|0)n=gt(t%ht)+n;return(gt(t%ht)+n).replace(mt,`$1-$2`)}var vt,yt=5381,bt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},xt=function(e){return bt(yt,e)};function St(e){return _t(xt(e)>>>0)}function Ct(e){return e.displayName||e.name||`Component`}function wt(e){return typeof e==`string`&&!0}var Tt=typeof Symbol==`function`&&Symbol.for,Et=Tt?Symbol.for(`react.memo`):60115,Dt=Tt?Symbol.for(`react.forward_ref`):60112,Ot={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},At={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jt=((vt={})[Dt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vt[Et]=At,vt);function Mt(e){return(`type`in(t=e)&&t.type.$$typeof)===Et?At:`$$typeof`in e?jt[e.$$typeof]:Ot;var t}var Nt=Object.defineProperty,Pt=Object.getOwnPropertyNames,Ft=Object.getOwnPropertySymbols,It=Object.getOwnPropertyDescriptor,Lt=Object.getPrototypeOf,Rt=Object.prototype;function zt(e,t,n){if(typeof t!=`string`){if(Rt){var r=Lt(t);r&&r!==Rt&&zt(e,r,n)}var i=Pt(t);Ft&&(i=i.concat(Ft(t)));for(var a=Mt(e),o=Mt(t),s=0;s<i.length;++s){var c=i[s];if(!(c in kt||n&&n[c]||o&&c in o||a&&c in a)){var l=It(t,c);try{Nt(e,c,l)}catch{}}}}return e}function Bt(e){return typeof e==`function`}function Vt(e){return typeof e==`object`&&`styledComponentId`in e}function Ht(e,t){return e&&t?`${e} ${t}`:e||t||``}function Ut(e,t){if(e.length===0)return``;for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Wt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Gt(e,t,n){if(n===void 0&&(n=!1),!n&&!Wt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Gt(e[r],t[r]);else if(Wt(t))for(var r in t)e[r]=Gt(e[r],t[r]);return e}function Kt(e,t){Object.defineProperty(e,`toString`,{value:t})}function qt(e){var t=[...arguments].slice(1);return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Jt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw qt(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=`${this.tag.getRule(a)}${it}`;return t},e}(),Yt=new Map,Xt=new Map,Zt=1,Qt=function(e){if(Yt.has(e))return Yt.get(e);for(;Xt.has(Zt);)Zt++;var t=Zt++;return Yt.set(e,t),Xt.set(t,e),t},$t=function(e,t){Zt=t+1,Yt.set(e,t),Xt.set(t,e)},en=`style[${et}][${nt}="${rt}"]`,tn=RegExp(`^${et}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),nn=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},rn=function(e,t){for(var n=(t.textContent??``).split(it),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(tn);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&($t(l,c),nn(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},an=function(e){for(var t=document.querySelectorAll(en),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(et)!==tt&&(rn(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function on(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:null}var sn=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){var t=Array.from(e.querySelectorAll(`style[${et}]`));return t[t.length-1]}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(et,tt),r.setAttribute(nt,rt);var o=on();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},cn=function(){function e(e){this.element=sn(e),this.element.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw qt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``},e}(),ln=function(){function e(e){this.element=sn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),un=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),dn=at,fn={isServer:!at,useCSSOMInjection:!ot},pn=function(){function e(e,t,n){e===void 0&&(e=ct),t===void 0&&(t={});var r=this;this.options=E(E({},fn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&at&&dn&&(dn=!1,an(this)),Kt(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=function(n){var i=function(e){return Xt.get(e)}(n);if(i===void 0)return`continue`;var a=e.names.get(i),o=t.getGroup(n);if(a===void 0||!a.size||o.length===0)return`continue`;var s=`${et}.g${n}[id="${i}"]`,c=``;a!==void 0&&a.forEach(function(e){e.length>0&&(c+=`${e},`)}),r+=`${o}${s}{content:"${c}"}${it}`},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return Qt(e)},e.prototype.rehydrate=function(){!this.server&&at&&an(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(E(E({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new un(n):t?new cn(n):new ln(n)}(this.options),new Jt(e));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Qt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Qt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Qt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),mn=/&/g,hn=/^\s*\/\/.*$/gm;function gn(e,t){return e.map(function(e){return e.type===`rule`&&(e.value=`${t} ${e.value}`,e.value=e.value.replaceAll(`,`,`,${t} `),e.props=e.props.map(function(e){return`${t} ${e}`})),Array.isArray(e.children)&&e.type!==`@keyframes`&&(e.children=gn(e.children,t)),e})}function _n(e){var t,n,r,i=e===void 0?ct:e,a=i.options,o=a===void 0?ct:a,s=i.plugins,c=s===void 0?st:s,l=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,``).length>0?`.${t}`:e},u=c.slice();u.push(function(e){e.type===`rule`&&e.value.includes(`&`)&&(e.props[0]=e.props[0].replace(mn,n).replace(r,l))}),o.prefix&&u.push(Ze),u.push(Je);var d=function(e,i,a,s){i===void 0&&(i=``),a===void 0&&(a=``),s===void 0&&(s=`&`),t=s,n=i,r=RegExp(`\\${n}\\b`,`g`);var c=e.replace(hn,``),l=Ve(a||i?`${a} ${i} { ${c} }`:c);o.namespace&&(l=gn(l,o.namespace));var d=[];return qe(l,Ye(u.concat(Xe(function(e){return d.push(e)})))),d};return d.hash=c.length?c.reduce(function(e,t){return t.name||qt(15),bt(e,t.name)},yt).toString():``,d}var vn=new pn,yn=_n(),bn=_.createContext({shouldForwardProp:void 0,styleSheet:vn,stylis:yn});bn.Consumer;var xn=_.createContext(void 0);function Sn(){return(0,_.useContext)(bn)}function Cn(e){var t=(0,_.useState)(e.stylisPlugins),n=t[0],r=t[1],i=Sn().styleSheet,a=(0,_.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),o=(0,_.useMemo)(function(){return _n({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,_.useEffect)(function(){(0,Qe.default)(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,_.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:o}},[e.shouldForwardProp,a,o]);return _.createElement(bn.Provider,{value:s},_.createElement(xn.Provider,{value:o},e.children))}var wn=function(){function e(e,t){var n=this;this.inject=function(e,t){t===void 0&&(t=yn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.name=e,this.id=`sc-keyframes-${e}`,this.rules=t,Kt(this,function(){throw qt(12,String(n.name))})}return e.prototype.getName=function(e){return e===void 0&&(e=yn),this.name+e.hash},e}(),Tn=function(e){return e>=`A`&&e<=`Z`};function En(e){for(var t=``,n=0;n<e.length;n++){var r=e[n];if(n===1&&r===`-`&&e[0]===`-`)return e;Tn(r)?t+=`-`+r.toLowerCase():t+=r}return t.startsWith(`ms-`)?`-`+t:t}var Dn=function(e){return e==null||!1===e||e===``},On=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Dn(a)&&(Array.isArray(a)&&a.isCss||Bt(a)?r.push(`${En(i)}:`,a,`;`):Wt(a)?r.push.apply(r,ee(ee([`${i} {`],On(a),!1),[`}`],!1)):r.push(`${En(i)}: ${t=i,(n=a)==null||typeof n==`boolean`||n===``?``:typeof n!=`number`||n===0||t in $e||t.startsWith(`--`)?String(n).trim():`${n}px`};`))}return r};function kn(e,t,n,r){if(Dn(e))return[];if(Vt(e))return[`.${e.styledComponentId}`];if(Bt(e)){if(!Bt(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return kn(i,t,n,r)}var a;return e instanceof wn?n?(e.inject(n,r),[e.getName(r)]):[e]:Wt(e)?On(e):Array.isArray(e)?Array.prototype.concat.apply(st,e.map(function(e){return kn(e,t,n,r)})):[e.toString()]}function An(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bt(n)&&!Vt(n))return!1}return!0}var jn=xt(rt),Mn=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&An(e),this.componentId=t,this.baseHash=bt(jn,t),this.baseStyle=n,pn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ht(r,this.staticRulesId);else{var i=Ut(kn(this.rules,e,t,n)),a=_t(bt(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,`.${a}`,void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Ht(r,a),this.staticRulesId=a}else{for(var s=bt(this.baseHash,n.hash),c=``,l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u==`string`)c+=u;else if(u){var d=Ut(kn(u,e,t,n));s=bt(s,d+l),c+=d}}if(c){var f=_t(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(c,`.${f}`,void 0,this.componentId)),r=Ht(r,f)}}return r},e}(),Nn=_.createContext(void 0);Nn.Consumer;var Pn={};function Fn(e,t,n){var r=Vt(e),i=e,a=!wt(e),o=t.attrs,s=o===void 0?st:o,c=t.componentId,l=c===void 0?function(e,t){var n=typeof e==`string`?pt(e):`sc`;Pn[n]=(Pn[n]||0)+1;var r=`${n}-${St(rt+n+Pn[n])}`;return t?`${t}-${r}`:r}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(e){return wt(e)?`styled.${e}`:`Styled(${Ct(e)})`}(e):u,f=t.displayName&&t.componentId?`${pt(t.displayName)}-${t.componentId}`:t.componentId||l,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;m=function(e,t){return h(e,t)&&g(e,t)}}else m=h}var v=new Mn(n,f,r?i.componentStyle:void 0);function y(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=_.useContext(Nn),u=Sn(),d=e.shouldForwardProp||u.shouldForwardProp,f=lt(t,l,a)||ct,p=function(e,t,n){for(var r,i=E(E({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Bt(r=e[a])?r(i):r;for(var s in o)i[s]=s===`className`?Ht(i[s],o[s]):s===`style`?E(E({},i[s]),o[s]):o[s]}return t.className&&(i.className=Ht(i.className,t.className)),i}(r,t,f),m=p.as||c,h={};for(var g in p)p[g]===void 0||g[0]===`$`||g===`as`||g===`theme`&&p.theme===f||(g===`forwardedAs`?h.as=p.forwardedAs:d&&!d(g,m)||(h[g]=p[g]));var v=function(e,t){var n=Sn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p),y=Ht(o,s);return v&&(y+=` `+v),p.className&&(y+=` `+p.className),h[wt(m)&&!ut.has(m)?`class`:`className`]=y,n&&(h.ref=n),(0,_.createElement)(m,h)}(b,e,t)}y.displayName=d;var b=_.forwardRef(y);return b.attrs=p,b.componentStyle=v,b.displayName=d,b.shouldForwardProp=m,b.foldedComponentIds=r?Ht(i.foldedComponentIds,i.styledComponentId):``,b.styledComponentId=f,b.target=r?i.target:e,Object.defineProperty(b,`defaultProps`,{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++)Gt(e,r[n],!0);return e}({},i.defaultProps,e):e}}),Kt(b,function(){return`.${b.styledComponentId}`}),a&&zt(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function In(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ln=function(e){return Object.assign(e,{isCss:!0})};function Rn(e){var t=[...arguments].slice(1);if(Bt(e)||Wt(e))return Ln(kn(In(st,ee([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?kn(n):Ln(kn(In(n,t)))}function zn(e,t,n){if(n===void 0&&(n=ct),!t)throw qt(1,t);var r=function(r){var i=[...arguments].slice(1);return e(t,n,Rn.apply(void 0,ee([r],i,!1)))};return r.attrs=function(r){return zn(e,t,E(E({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return zn(e,t,E(E({},n),r))},r}var Bn=function(e){return zn(Fn,e)},I=Bn;ut.forEach(function(e){I[e]=Bn(e)}),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=An(e),pn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Ut(kn(this.rules,t,n,r)),``),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&pn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Vn(e){var t=[...arguments].slice(1),n=Ut(Rn.apply(void 0,ee([e],t,!1))),r=St(n);return new wn(r,n)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return``;var n=on();return`<style ${Ut([n&&`nonce="${n}"`,`${et}="true"`,`${nt}="${rt}"`].filter(Boolean),` `)}>${t}</style>`},this.getStyleTags=function(){if(e.sealed)throw qt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw qt(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[et]=``,t[nt]=rt,t.dangerouslySetInnerHTML={__html:n},t),i=on();return i&&(r.nonce=i),[_.createElement(`style`,E({},r,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new pn({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw qt(2);return _.createElement(Cn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw qt(3)},e})(),`${et}`;var Hn=({type:e})=>{let{standardTime:t,fastTime:n}=T(),r=e===`standard`?t:n,[i,a]=(0,_.useState)(!1),o=()=>e===`standard`?`标准时间`:`快表时间`,s=()=>e===`standard`?`🕐`:`⚡`,c=r.hour()%12,l=r.minute(),u=r.second(),d=u*6-90,f=l*6+u*.1-90,p=c*30+l*.5-90;return(0,S.jsxs)(Kn,{$type:e,children:[(0,S.jsxs)(qn,{children:[(0,S.jsxs)(Jn,{children:[(0,S.jsx)(Yn,{children:s()}),(0,S.jsx)(Xn,{children:o()})]}),(0,S.jsx)(Zn,{onClick:()=>a(!i),$type:e,title:i?`切换到详情模式`:`切换到简洁模式`,children:(0,S.jsx)(Qn,{src:`/speed-clock/icons/suofang.png`,alt:`缩放`})})]}),(0,S.jsxs)($n,{$type:e,children:[[12,1,2,3,4,5,6,7,8,9,10,11].map((e,t)=>(0,S.jsx)(er,{$index:t,children:e},e)),[...Array(12)].map((e,t)=>(0,S.jsx)(tr,{$index:t,$isHour:!0},t)),[...Array(60)].map((e,t)=>t%5==0?null:(0,S.jsx)(tr,{$index:t,$isHour:!1},`min-${t}`)),(0,S.jsx)(nr,{$angle:p,$type:`hour`,$clockType:e}),(0,S.jsx)(nr,{$angle:f,$type:`minute`,$clockType:e}),(0,S.jsx)(nr,{$angle:d,$type:`second`,$clockType:e}),(0,S.jsx)(rr,{$type:e})]}),(0,S.jsxs)(ir,{$isCompact:i,children:[(0,S.jsx)(ar,{$type:e,children:r.format(`HH:mm:ss`)}),!i&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(or,{children:r.format(`YYYY年MM月DD日`)}),(0,S.jsx)(sr,{children:r.format(`dddd`)})]})]})]})},Un=Vn`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`,Wn=Vn`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,Gn=Vn`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Kn=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: var(--card-shadow);
  border: 2px solid
    ${e=>e.$type===`standard`?`rgba(78, 205, 196, 0.3)`:`rgba(255, 107, 129, 0.3)`};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 280px;

  &:hover {
    // transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 48px rgba(31, 38, 135, 0.3);
    border-color: ${e=>e.$type===`standard`?`rgba(78, 205, 196, 0.6)`:`rgba(255, 107, 129, 0.6)`};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.2rem;
    min-width: 240px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 1rem;
    min-width: 200px;
    border-radius: 16px;
  }
`,qn=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Jn=I.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Yn=I.span`
  font-size: 1.8rem;
  animation: ${Un} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`,Xn=I.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Zn=I.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid
    ${e=>e.$type===`standard`?`rgba(78, 205, 196, 0.4)`:`rgba(255, 107, 129, 0.4)`};
  background: ${e=>e.$type===`standard`?`rgba(78, 205, 196, 0.4)`:`rgba(255, 107, 129, 0.4)`};
  // background: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${e=>e.$type===`standard`?`linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)`:`linear-gradient(135deg, #ff6b81 0%, #ff8fa3 100%)`};
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }

  &:hover {
    // transform: scale(1.15) rotate(15deg);
    border-color: ${e=>e.$type===`standard`?`#4ecdc4`:`#ff6b81`};
    box-shadow: 0 4px 15px
      ${e=>e.$type===`standard`?`rgba(78, 205, 196, 0.4)`:`rgba(255, 107, 129, 0.4)`};

    &::before {
      opacity: 0.2;
    }
  }

  &:active {
    // transform: scale(1.05);
    animation: ${Gn} 0.6s ease;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }
`,Qn=I.img`
  width: 30px;

  @media (max-width: 768px) {
    width: 24px;
  }

  @media (max-width: 480px) {
    width: 20px;
  }
`,$n=I.div`
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: ${e=>e.$type===`standard`?`linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)`:`linear-gradient(135deg, #ff6b81 0%, #ff8fa3 100%)`};
  box-shadow: 0 8px 25px
      ${e=>e.$type===`standard`?`rgba(78, 205, 196, 0.4)`:`rgba(255, 107, 129, 0.4)`},
    inset 0 4px 15px rgba(255, 255, 255, 0.3),
    inset 0 -4px 15px rgba(0, 0, 0, 0.1);
  border: 4px solid white;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    border: 3px solid white;
  }

  @media (max-width: 480px) {
    display: none;
  }
`,er=I.div`
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%)
    rotate(${e=>e.$index*30}deg)
    translateY(-80px)
    rotate(${e=>-e.$index*30}deg);
  z-index: 2;
  user-select: none;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    font-size: 0.85rem;
    transform: translate(-50%, -50%)
      rotate(${e=>e.$index*30}deg)
      translateY(-65px)
      rotate(${e=>-e.$index*30}deg);
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    font-size: 0.75rem;
    transform: translate(-50%, -50%)
      rotate(${e=>e.$index*30}deg)
      translateY(-55px)
      rotate(${e=>-e.$index*30}deg);
  }
`,tr=I.div`
  position: absolute;
  width: ${e=>e.$isHour?`3px`:`1.5px`};
  height: ${e=>e.$isHour?`14px`:`8px`};
  background: ${e=>e.$isHour?`rgba(255, 255, 255, 0.95)`:`rgba(255, 255, 255, 0.5)`};
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%)
    rotate(${e=>e.$index*(e.$isHour?30:6)}deg)
    translateY(-100px);
  border-radius: 3px;
  z-index: 1;
  box-shadow: ${e=>e.$isHour?`0 1px 3px rgba(0, 0, 0, 0.2)`:`none`};

  @media (max-width: 768px) {
    width: ${e=>e.$isHour?`2.5px`:`1.2px`};
    height: ${e=>e.$isHour?`12px`:`6px`};
    transform: translate(-50%, -50%)
      rotate(${e=>e.$index*(e.$isHour?30:6)}deg)
      translateY(-82px);
  }

  @media (max-width: 480px) {
    width: ${e=>e.$isHour?`2px`:`1px`};
    height: ${e=>e.$isHour?`10px`:`5px`};
    transform: translate(-50%, -50%)
      rotate(${e=>e.$index*(e.$isHour?30:6)}deg)
      translateY(-68px);
  }
`,nr=I.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: bottom center;
  transform: translateX(-50%) rotate(${e=>e.$angle}deg);
  z-index: ${e=>e.$type===`second`?4:e.$type===`minute`?3:2};
  border-radius: 10px;
  transition: ${e=>e.$type===`second`?`none`:`transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)`};

  ${e=>e.$type===`hour`?`
        width: 7px;
        height: 60px;
        background: linear-gradient(to top, white, rgba(255, 255, 255, 0.8));
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
      `:e.$type===`minute`?`
        width: 5px;
        height: 85px;
        background: linear-gradient(to top, white, rgba(255, 255, 255, 0.9));
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      `:`
        width: 2.5px;
        height: 95px;
        background: ${e.$clockType===`standard`?`#ffe66d`:`#ffeb3b`};
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      `}

  @media (max-width: 768px) {
    ${e=>e.$type===`hour`?`
          width: 6px;
          height: 49px;
        `:e.$type===`minute`?`
          width: 4px;
          height: 69px;
        `:`
          width: 2px;
          height: 77px;
        `}
  }

  @media (max-width: 480px) {
    ${e=>e.$type===`hour`?`
          width: 5px;
          height: 41px;
        `:e.$type===`minute`?`
          width: 3.5px;
          height: 58px;
        `:`
          width: 1.8px;
          height: 65px;
        `}
  }
`,rr=I.div`
  position: absolute;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.4);
  border: 3px solid
    ${e=>e.$type===`standard`?`#4ecdc4`:`#ff6b81`};

  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: ${e=>e.$type===`standard`?`#4ecdc4`:`#ff6b81`};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
    border: 2.5px solid
      ${e=>e.$type===`standard`?`#4ecdc4`:`#ff6b81`};

    &::after {
      width: 7px;
      height: 7px;
    }
  }

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
    border: 2px solid
      ${e=>e.$type===`standard`?`#4ecdc4`:`#ff6b81`};

    &::after {
      width: 6px;
      height: 6px;
    }
  }
`,ir=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.$isCompact?`0`:`0.4rem`};
  animation: ${Wn} 0.6s ease;
  transition: all 0.3s ease;
  min-height: ${e=>e.$isCompact?`auto`:`80px`};
`,ar=I.div`
  font-size: 2.2rem;
  font-weight: 700;
  background: ${e=>e.$type===`standard`?`linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)`:`linear-gradient(135deg, #ff6b81 0%, #ff8fa3 100%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.05em;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,or=I.div`
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
  animation: ${Wn} 0.4s ease;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,sr=I.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.8;
  animation: ${Wn} 0.5s ease;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`,cr=Hn,lr=()=>{let{timeDifference:e}=T(),t=e=>{let t=Math.abs(e),n=Math.floor(t/60),r=Math.floor(n/60),i=Math.floor(r/24);return i>0?`${i}天 ${r%24}小时 ${n%60}分钟`:r>0?`${r}小时 ${n%60}分钟 ${t%60}秒`:n>0?`${n}分钟 ${t%60}秒`:`${t}秒`},n=e=>e>=0?`+`:`-`,r=e>=0;return(0,S.jsxs)(ur,{children:[(0,S.jsxs)(dr,{children:[(0,S.jsxs)(fr,{children:[(0,S.jsx)(pr,{children:`⏱️`}),(0,S.jsx)(hr,{$isPositive:r})]}),(0,S.jsx)(gr,{children:`时间差异`})]}),(0,S.jsxs)(_r,{$isPositive:r,children:[(0,S.jsx)(vr,{children:`当前时间差`}),(0,S.jsxs)(yr,{children:[(0,S.jsx)(br,{$isPositive:r,children:n(e)}),(0,S.jsx)(xr,{$isPositive:r,children:t(e)})]}),(0,S.jsxs)(Sr,{children:[(0,S.jsxs)(Cr,{$isPositive:r,children:[(0,S.jsx)(wr,{$isPositive:r,src:r?`/speed-clock/icons/arrow_up.png`:`/speed-clock/icons/arrow_down.png`,alt:r?`向上箭头`:`向下箭头`}),r?`快表领先`:`快表落后`]}),(0,S.jsx)(Tr,{children:(0,S.jsxs)(Er,{children:[(0,S.jsx)(Dr,{children:`秒数`}),(0,S.jsxs)(Or,{children:[Math.abs(e).toLocaleString(),` s`]})]})})]})]})]})},ur=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  animation: fadeSlideIn 0.6s ease;

  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    gap: 1rem;
    max-width: 550px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.8rem;
    max-width: 100%;
  }
`,dr=I.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,fr=I.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,pr=I.span`
  font-size: 2rem;
  position: relative;
  z-index: 1;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,mr=Vn`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`,hr=I.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>e.$isPositive?`radial-gradient(circle, rgba(168, 230, 207, 0.6) 0%, transparent 70%)`:`radial-gradient(circle, rgba(255, 107, 107, 0.6) 0%, transparent 70%)`};
  animation: ${mr} 2s ease-in-out infinite;
  z-index: 0;

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`,gr=I.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`,_r=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 2.5rem;
  width: 100%;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: var(--card-shadow),
    0 0 40px
      ${e=>e.$isPositive?`rgba(168, 230, 207, 0.2)`:`rgba(255, 107, 107, 0.2)`};
  border: 2px solid
    ${e=>e.$isPositive?`rgba(168, 230, 207, 0.5)`:`rgba(255, 107, 107, 0.5)`};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 16px 48px rgba(31, 38, 135, 0.3),
      0 0 60px
        ${e=>e.$isPositive?`rgba(168, 230, 207, 0.3)`:`rgba(255, 107, 107, 0.3)`};
  }

  @media (max-width: 768px) {
    padding: 2rem;
    gap: 1rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    gap: 0.8rem;
    border-radius: 16px;
  }
`,vr=I.div`
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,yr=I.div`
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
`,br=I.span`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${e=>e.$isPositive?`#a8e6cf`:`#ff6b6b`};
  text-shadow: 0 4px 12px
    ${e=>e.$isPositive?`rgba(168, 230, 207, 0.4)`:`rgba(255, 107, 107, 0.4)`};

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`,xr=I.div`
  font-size: 2.8rem;
  font-weight: 800;
  background: ${e=>e.$isPositive?`linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%)`:`linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,Sr=I.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
`,Cr=I.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 700;
  background: ${e=>e.$isPositive?`linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%)`:`linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)`};
  color: white;
  box-shadow: 0 4px 15px
    ${e=>e.$isPositive?`rgba(168, 230, 207, 0.5)`:`rgba(255, 107, 107, 0.5)`};
  letter-spacing: 0.05em;
`,wr=I.img`
  font-size: 1.2rem;
  animation: bounce 1.5s ease-in-out infinite;

  width: 24px;
  height: 24px;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
  }
`,Tr=I.div`
  display: flex;
  gap: 1.5rem;
`,Er=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`,Dr=I.div`
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`,Or=I.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-color);
  font-variant-numeric: tabular-nums;
`,kr=lr,Ar=c(v()),jr=()=>{let{fastTime:e,setFastTimeManually:t,adjustFastTime:n,syncToStandardTime:r}=T(),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(e.format(`YYYY-MM-DDTHH:mm`)),[c,l]=(0,_.useState)(1),[u,d]=(0,_.useState)(`minute`),f=()=>{let e=(0,Ar.default)(o);e.isValid()&&t(e)},p=(e,t)=>{n(e,t)};return(0,S.jsxs)(Ir,{children:[(0,S.jsxs)(Lr,{children:[(0,S.jsxs)(Rr,{children:[(0,S.jsx)(zr,{children:`⚡`}),(0,S.jsx)(Br,{children:`快速调整`})]}),(0,S.jsx)(Vr,{children:[{label:`+1秒`,amount:1,unit:`second`,emoji:`⏱️`},{label:`+1分`,amount:1,unit:`minute`,emoji:`⏲️`},{label:`+5分`,amount:5,unit:`minute`,emoji:`⏰`},{label:`+1时`,amount:1,unit:`hour`,emoji:`🕐`},{label:`-1秒`,amount:-1,unit:`second`,emoji:`⏱️`},{label:`-1分`,amount:-1,unit:`minute`,emoji:`⏲️`},{label:`-5分`,amount:-5,unit:`minute`,emoji:`⏰`},{label:`-1时`,amount:-1,unit:`hour`,emoji:`🕐`}].map((e,t)=>(0,S.jsxs)(Gr,{$isPositive:e.amount>0,onClick:()=>p(e.amount,e.unit),children:[(0,S.jsx)(Ur,{children:e.emoji}),(0,S.jsx)(Wr,{children:e.label}),(0,S.jsx)(Hr,{$isPositive:e.amount>0})]},t))})]}),(0,S.jsxs)(Lr,{children:[(0,S.jsxs)(Rr,{children:[(0,S.jsx)(zr,{children:`🎯`}),(0,S.jsx)(Br,{children:`自定义调整`})]}),(0,S.jsxs)(Kr,{children:[(0,S.jsxs)(qr,{children:[(0,S.jsxs)(Jr,{children:[(0,S.jsx)(Xr,{type:`number`,value:c,onChange:e=>l(parseInt(e.target.value)||1),min:`1`,max:`365`}),(0,S.jsx)(Yr,{children:`🔢`})]}),(0,S.jsxs)(Zr,{children:[(0,S.jsxs)($r,{value:u,onChange:e=>d(e.target.value),children:[(0,S.jsx)(`option`,{value:`second`,children:`秒`}),(0,S.jsx)(`option`,{value:`minute`,children:`分钟`}),(0,S.jsx)(`option`,{value:`hour`,children:`小时`}),(0,S.jsx)(`option`,{value:`day`,children:`天`})]}),(0,S.jsx)(Qr,{children:`⏳`})]})]}),(0,S.jsxs)(ei,{children:[(0,S.jsxs)(ri,{$variant:`positive`,onClick:()=>p(c,u),children:[(0,S.jsx)(ti,{children:`➕`}),(0,S.jsx)(ni,{children:`增加`})]}),(0,S.jsxs)(ri,{$variant:`negative`,onClick:()=>p(-c,u),children:[(0,S.jsx)(ti,{children:`➖`}),(0,S.jsx)(ni,{children:`减少`})]})]})]})]}),(0,S.jsxs)(Lr,{children:[(0,S.jsxs)(Rr,{children:[(0,S.jsx)(zr,{children:`📅`}),(0,S.jsx)(Br,{children:`精确设置`})]}),(0,S.jsxs)(ii,{children:[(0,S.jsxs)(oi,{onClick:()=>a(!i),children:[(0,S.jsx)(ai,{$isOpen:i,children:i?`🔼`:`🔽`}),i?`隐藏设置`:`显示时间设置`]}),(0,S.jsx)(si,{$isOpen:i,children:(0,S.jsxs)(ci,{children:[(0,S.jsxs)(li,{children:[(0,S.jsx)(di,{type:`datetime-local`,value:o,onChange:e=>s(e.target.value)}),(0,S.jsx)(ui,{children:`🕒`})]}),(0,S.jsxs)(fi,{onClick:f,children:[(0,S.jsx)(ti,{children:`✔️`}),(0,S.jsx)(ni,{children:`设置时间`})]})]})})]})]}),(0,S.jsxs)(gi,{onClick:r,children:[(0,S.jsx)(pi,{children:`🔄`}),(0,S.jsx)(mi,{children:`同步到标准时间`}),(0,S.jsx)(hi,{})]})]})},Mr=Vn`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Nr=Vn`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Pr=Vn`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`,Fr=Vn`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`,Ir=I.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: ${Mr} 0.5s ease;
`,Lr=I.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,Rr=I.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`,zr=I.span`
  font-size: 1.3rem;
  animation: ${Pr} 3s ease-in-out infinite;
`,Br=I.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Vr=I.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Hr=I.div`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: ${e=>e.$isPositive?`radial-gradient(circle, rgba(168, 230, 207, 0.4) 0%, transparent 70%)`:`radial-gradient(circle, rgba(255, 107, 107, 0.4) 0%, transparent 70%)`};
  opacity: 0;
  transition: opacity 0.3s ease;
`,Ur=I.span`
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,Wr=I.span`
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  transition: color 0.3s ease;
`,Gr=I.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 1rem 0.6rem;
  border: 2px solid
    ${e=>e.$isPositive?`rgba(168, 230, 207, 0.6)`:`rgba(255, 107, 107, 0.6)`};
  border-radius: 12px;
  background: white;
  color: ${e=>e.$isPositive?`#56ab91`:`#ff6b6b`};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 700;
  font-size: 0.9rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${e=>e.$isPositive?`linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%)`:`linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)`};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    border-color: ${e=>e.$isPositive?`#56ab91`:`#ff6b6b`};
    box-shadow: 0 8px 20px ${e=>e.$isPositive?`rgba(168, 230, 207, 0.4)`:`rgba(255, 107, 107, 0.4)`};

    &::before {
      opacity: 1;
    }

    ${Hr} {
      opacity: 1;
      animation: ${Fr} 1.5s ease-in-out infinite;
    }

    ${Ur}, ${Wr} {
      position: relative;
      z-index: 1;
      color: white;
    }
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }
`,Kr=I.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,qr=I.div`
  display: flex;
  gap: 1rem;
`,Jr=I.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`,Yr=I.span`
  position: absolute;
  right: 1rem;
  font-size: 1.1rem;
  opacity: 0.5;
  pointer-events: none;
  transition: all 0.3s ease;
`,Xr=I.input`
  flex: 1;
  padding: 0.8rem 2.8rem 0.8rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(255, 107, 129, 0.15),
                0 4px 12px rgba(0, 0, 0, 0.1);
    outline: none;
    transform: translateY(-2px);

    & + ${Yr} {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`,Zr=I.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`,Qr=I.span`
  position: absolute;
  right: 1rem;
  font-size: 1.1rem;
  opacity: 0.5;
  pointer-events: none;
  transition: all 0.3s ease;
`,$r=I.select`
  flex: 1;
  padding: 0.8rem 2.8rem 0.8rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  appearance: none;

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(255, 107, 129, 0.15),
                0 4px 12px rgba(0, 0, 0, 0.1);
    outline: none;
    transform: translateY(-2px);

    & + ${Qr} {
      opacity: 1;
      transform: scale(1.1) rotate(180deg);
    }
  }
`,ei=I.div`
  display: flex;
  gap: 1rem;
`,ti=I.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
`,ni=I.span`
  font-size: 0.95rem;
  letter-spacing: 0.05em;
`,ri=I.button`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: white;
  overflow: hidden;

  ${e=>e.$variant===`positive`?`
        background: linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%);
        box-shadow: 0 4px 15px rgba(168, 230, 207, 0.4);
      `:`
        background: linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%);
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
      `}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: ${e=>e.$variant===`positive`?`0 8px 25px rgba(168, 230, 207, 0.5)`:`0 8px 25px rgba(255, 107, 107, 0.5)`};

    &::before {
      opacity: 1;
    }

    ${ti} {
      transform: scale(1.2);
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }
`,ii=I.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
`,ai=I.span`
  font-size: 1rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${e=>e.$isOpen?`rotate(180deg)`:`rotate(0deg)`};
`,oi=I.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem;
  border: 2px solid rgba(78, 205, 196, 0.6);
  border-radius: 12px;
  background: white;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: var(--secondary-color);
    box-shadow: 0 6px 20px rgba(78, 205, 196, 0.3);

    &::before {
      opacity: 1;
    }

    color: white;

    ${ai} {
      transform: scale(1.2);
    }
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`,si=I.div`
  max-height: ${e=>e.$isOpen?`500px`:`0`};
  opacity: ${e=>e.$isOpen?`1`:`0`};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,ci=I.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,li=I.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`,ui=I.span`
  position: absolute;
  right: 1rem;
  font-size: 1.1rem;
  opacity: 0.5;
  pointer-events: none;
  transition: all 0.3s ease;
`,di=I.input`
  flex: 1;
  padding: 0.8rem 2.8rem 0.8rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(255, 107, 129, 0.15),
                0 4px 12px rgba(0, 0, 0, 0.1);
    outline: none;
    transform: translateY(-2px);

    & + ${ui} {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`,fi=I.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 12px;
  background: var(--primary-gradient);
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(255, 107, 129, 0.4);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 25px rgba(255, 107, 129, 0.5);

    &::before {
      opacity: 1;
    }

    ${ti} {
      transform: scale(1.2);
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`,pi=I.span`
  font-size: 1.3rem;
  transition: transform 0.3s ease;
`,mi=I.span`
  transition: color 0.3s ease;
`,hi=I.div`
  position: absolute;
  inset: 0;
  border-radius: 14px;
  background: radial-gradient(circle, rgba(78, 205, 196, 0.4) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
`,gi=I.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 100%;
  padding: 1.2rem;
  border: 2px dashed rgba(78, 205, 196, 0.6);
  border-radius: 14px;
  background: rgba(78, 205, 196, 0.08);
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    border-style: solid;
    border-color: var(--secondary-color);
    box-shadow: 0 8px 25px rgba(78, 205, 196, 0.3);

    &::before {
      opacity: 1;
    }

    ${hi} {
      opacity: 1;
      animation: ${Fr} 1.5s ease-in-out infinite;
    }

    ${pi} {
      animation: ${Nr} 1s linear infinite;
    }

    ${mi} {
      color: white;
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`,_i=jr,vi=()=>{let{isRunning:e,toggleRunning:t,reset:n}=T(),[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)(!1),s=()=>e?`运行中`:`已暂停`,c=()=>{o(!0)},l=()=>{n(),o(!1)},u=()=>{o(!1)};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(Ei,{children:[(0,S.jsxs)(Ai,{$variant:`primary`,onClick:()=>i(!0),title:`打开控制面板`,children:[(0,S.jsx)(Oi,{children:(0,S.jsx)(ki,{src:`/speed-clock/icons/setting.png`,alt:`设置`})}),(0,S.jsx)(Di,{$variant:`primary`})]}),(0,S.jsxs)(Ai,{$variant:e?`warning`:`success`,onClick:t,title:e?`暂停`:`继续`,children:[(0,S.jsx)(Oi,{children:(0,S.jsx)(ki,{src:e?`/speed-clock/icons/stop.png`:`/speed-clock/icons/play.png`,alt:e?`暂停`:`继续`})}),(0,S.jsx)(Di,{$variant:e?`warning`:`success`})]}),(0,S.jsxs)(Ai,{$variant:`secondary`,onClick:c,title:`重置`,children:[(0,S.jsx)(Oi,{children:(0,S.jsx)(ki,{src:`/speed-clock/icons/refresh.png`,alt:`重置`})}),(0,S.jsx)(Di,{$variant:`secondary`})]})]}),(0,S.jsx)(ji,{children:(0,S.jsxs)(Ni,{$isRunning:e,children:[(0,S.jsx)(Pi,{$isRunning:e}),(0,S.jsx)(Mi,{children:s()})]})}),r&&(0,S.jsx)(Fi,{onClick:()=>i(!1),children:(0,S.jsxs)(Ii,{onClick:e=>e.stopPropagation(),children:[(0,S.jsxs)(Li,{children:[(0,S.jsxs)(zi,{children:[(0,S.jsx)(Ri,{children:`⚙️`}),`控制面板`]}),(0,S.jsx)(Vi,{onClick:()=>i(!1),children:(0,S.jsx)(Bi,{children:`✕`})})]}),(0,S.jsx)(Hi,{children:(0,S.jsx)(_i,{})}),(0,S.jsxs)(Ui,{children:[(0,S.jsxs)(Gi,{$variant:`secondary`,onClick:t,children:[(0,S.jsx)(Wi,{children:e?`s`:`▶️`}),e?`暂停`:`继续`]}),(0,S.jsxs)(Gi,{$variant:`danger`,onClick:c,children:[(0,S.jsx)(Wi,{children:`🔄`}),`重置`]}),(0,S.jsxs)(Gi,{$variant:`primary`,onClick:()=>i(!1),children:[(0,S.jsx)(Wi,{children:`✓`}),`完成`]})]})]})}),a&&(0,S.jsx)(Fi,{onClick:u,children:(0,S.jsxs)(Ki,{onClick:e=>e.stopPropagation(),children:[(0,S.jsx)(L,{children:`⚠️`}),(0,S.jsx)(R,{children:`确认重置`}),(0,S.jsxs)(qi,{children:[`重置将把两个时钟都恢复到当前系统时间,`,(0,S.jsx)(`br`,{}),`此操作无法撤销,确定要继续吗?`]}),(0,S.jsxs)(Ji,{children:[(0,S.jsx)(Yi,{$variant:`cancel`,onClick:u,children:`取消`}),(0,S.jsx)(Yi,{$variant:`confirm`,onClick:l,children:`确认重置`})]})]})})]})},yi=Vn`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.95);
  }
`,bi=Vn`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,xi=Vn`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
`,Si=Vn`
  from { opacity: 0; }
  to { opacity: 1; }
`,Ci=Vn`
  from {
    transform: translateY(50px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`,wi=Vn`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.02);
  }
`,Ti=Vn`
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.1) rotate(-5deg);
  }
  75% {
    transform: scale(1.1) rotate(5deg);
  }
`,Ei=I.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;

  /* 为每个按钮添加延迟的弹性浮动动画 */
  & > button:nth-child(1) {
    animation: ${wi} 3s ease-in-out infinite;
  }

  & > button:nth-child(2) {
    animation: ${wi} 3s ease-in-out 0.3s infinite;
  }

  & > button:nth-child(3) {
    animation: ${wi} 3s ease-in-out 0.6s infinite;
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    flex-direction: row;
  }
`,Di=I.div`
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
  filter: blur(12px);

  ${e=>{switch(e.$variant){case`primary`:return`background: radial-gradient(circle, rgba(255, 107, 129, 0.8) 0%, transparent 70%);`;case`success`:return`background: radial-gradient(circle, rgba(168, 230, 207, 0.8) 0%, transparent 70%);`;case`warning`:return`background: radial-gradient(circle, rgba(255, 217, 61, 0.8) 0%, transparent 70%);`;case`secondary`:return`background: radial-gradient(circle, rgba(78, 205, 196, 0.8) 0%, transparent 70%);`;default:return`background: radial-gradient(circle, rgba(255, 107, 129, 0.8) 0%, transparent 70%);`}}}
`,Oi=I.span`
  font-size: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,ki=I.img`
  width: 36px;
  height: 36px;
`,Ai=I.button`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: visible;
  backdrop-filter: blur(10px);

  ${e=>{switch(e.$variant){case`primary`:return`
          background: var(--primary-gradient);
          color: white;
        `;case`success`:return`
          background: linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%);
          color: white;
        `;case`warning`:return`
          background: linear-gradient(135deg, #ffd93d 0%, #ffb627 100%);
          color: white;
        `;case`secondary`:return`
          background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
          color: white;
        `;default:return`
          background: var(--primary-gradient);
          color: white;
        `}}}

  /* 添加内部光泽效果 */
  &::before {
    content: "";
    position: absolute;
    left: 0 !important;
    top: 0;
    inset: 2px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 50%
    );
    opacity: 0.6;
    z-index: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: scale(1.2) translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 0 6px 16px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 0.9;
    }

    ${Oi} {
      animation: ${Ti} 0.6s ease-in-out;
    }

    ${Di} {
      opacity: 1;
      animation: ${xi} 1.5s ease-in-out infinite;
    }
  }

  &:active {
    transform: scale(1.1) translateY(-2px);
    transition: all 0.1s ease;
  }

  @media (max-width: 768px) {
    width: 52px;
    height: 52px;

    ${Oi} {
      font-size: 1.3rem;
    }
  }
`,ji=I.div`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
  z-index: 999;
  animation: ${Si} 0.5s ease;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`,Mi=I.span`
  transition: all 0.3s ease;
`,Ni=I.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.2rem;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-weight: 700;
  color: ${e=>e.$isRunning?`#56ab91`:`#ff6b6b`};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid
    ${e=>e.$isRunning?`rgba(168, 230, 207, 0.4)`:`rgba(255, 107, 107, 0.4)`};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: ${e=>e.$isRunning?`#56ab91`:`#ff6b6b`};
  }
`,Pi=I.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${e=>e.$isRunning?`linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%)`:`linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)`};
  box-shadow: 0 0 8px
    ${e=>e.$isRunning?`rgba(168, 230, 207, 0.6)`:`rgba(255, 107, 107, 0.6)`};
  animation: ${e=>e.$isRunning?yi:`none`} 2s infinite;
`,Fi=I.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: ${Si} 0.3s ease;
  padding: 1rem;
`,Ii=I.div`
  background: var(--card-bg);
  border-radius: 28px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${Ci} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  /* 美化滚动条 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-gradient);
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 92vh;
    border-radius: 24px;
  }
`,Li=I.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem;
  border-bottom: 2px solid rgba(255, 107, 129, 0.15);
  position: sticky;
  top: 0;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  z-index: 10;
  border-radius: 28px 28px 0 0;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }
`,Ri=I.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  animation: ${bi} 4s linear infinite;
`,zi=I.h2`
  font-size: 1.6rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;
`,Bi=I.span`
  transition: transform 0.3s ease;
  font-size: 1.3rem;
  line-height: 1;
`,Vi=I.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 107, 129, 0.2);
  background: rgba(255, 107, 129, 0.08);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--primary-gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: var(--primary-color);
    box-shadow: 0 4px 15px rgba(255, 107, 129, 0.3);
    transform: scale(1.1);

    &::before {
      opacity: 1;
    }

    ${Bi} {
      transform: rotate(90deg);
      color: white;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  ${Bi} {
    position: relative;
    z-index: 1;
  }
`,Hi=I.div`
  padding: 2.5rem;
  min-height: 300px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,Ui=I.div`
  display: flex;
  gap: 1rem;
  padding: 1.5rem 2.5rem;
  border-top: 2px solid rgba(255, 107, 129, 0.15);
  position: sticky;
  bottom: 0;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border-radius: 0 0 28px 28px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`,Wi=I.span`
  font-size: 1.1rem;
  transition: transform 0.3s ease;
`,Gi=I.button`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 1.5rem;
  border: none;
  border-radius: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  overflow: hidden;

  ${e=>{switch(e.$variant){case`primary`:return`
          background: var(--primary-gradient);
          color: white;
          box-shadow: 0 4px 15px rgba(255, 107, 129, 0.35);
        `;case`secondary`:return`
          background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(78, 205, 196, 0.35);
        `;case`danger`:return`
          background: linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.35);
        `;default:return`
          background: var(--primary-gradient);
          color: white;
        `}}}

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: ${e=>{switch(e.$variant){case`primary`:return`0 8px 25px rgba(255, 107, 129, 0.45)`;case`secondary`:return`0 8px 25px rgba(78, 205, 196, 0.45)`;case`danger`:return`0 8px 25px rgba(255, 107, 107, 0.45)`;default:return`0 8px 25px rgba(0, 0, 0, 0.3)`}}};

    &::before {
      opacity: 1;
    }

    ${Wi} {
      transform: scale(1.2);
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`,Ki=I.div`
  background: var(--card-bg);
  border-radius: 24px;
  padding: 2.5rem;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
              0 8px 20px rgba(0, 0, 0, 0.3);
  animation: ${Ci} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 95%;
  }
`,L=I.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  animation: ${Ti} 0.8s ease-in-out infinite;
`,R=I.h3`
  font-size: 1.8rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
  letter-spacing: 0.02em;
`,qi=I.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  opacity: 0.85;
  margin: 0 0 2rem 0;
`,Ji=I.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Yi=I.button`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 14px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  ${e=>e.$variant===`cancel`?`
        background: rgba(150, 150, 150, 0.15);
        color: var(--text-color);
        border: 2px solid rgba(150, 150, 150, 0.3);

        &:hover {
          background: rgba(150, 150, 150, 0.25);
          border-color: rgba(150, 150, 150, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }
      `:`
        background: linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%);
        color: white;
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);

        &::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.5);

          &::before {
            opacity: 1;
          }
        }
      `}

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`,Xi=vi;function Zi(){return(0,S.jsxs)(w,{children:[(0,S.jsxs)(`div`,{className:`app`,children:[(0,S.jsx)(`header`,{children:(0,S.jsx)(`h1`,{children:`差速时钟比对`})}),(0,S.jsxs)(`main`,{children:[(0,S.jsxs)(`div`,{className:`clocks-container`,children:[(0,S.jsx)(cr,{type:`standard`}),(0,S.jsx)(cr,{type:`fast`})]}),(0,S.jsx)(kr,{})]})]}),(0,S.jsx)(Xi,{})]})}var Qi=Zi;(0,g.createRoot)(document.getElementById(`root`)).render((0,S.jsx)(_.StrictMode,{children:(0,S.jsx)(Qi,{})}));