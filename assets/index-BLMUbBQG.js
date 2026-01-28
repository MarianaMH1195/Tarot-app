(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Ax(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Wd={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function eE(){if(Gv)return nl;Gv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return nl.Fragment=e,nl.jsx=n,nl.jsxs=n,nl}var kv;function tE(){return kv||(kv=1,Wd.exports=eE()),Wd.exports}var B=tE(),jd={exports:{}},At={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function nE(){if(Xv)return At;Xv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function S(P,K,Se){this.props=P,this.context=K,this.refs=b,this.updater=Se||y}S.prototype.isReactComponent={},S.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function x(){}x.prototype=S.prototype;function U(P,K,Se){this.props=P,this.context=K,this.refs=b,this.updater=Se||y}var C=U.prototype=new x;C.constructor=U,M(C,S.prototype),C.isPureReactComponent=!0;var I=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},R=Object.prototype.hasOwnProperty;function H(P,K,Se,ve,Oe,Ze){return Se=Ze.ref,{$$typeof:a,type:P,key:K,ref:Se!==void 0?Se:null,props:Ze}}function X(P,K){return H(P.type,K,void 0,void 0,void 0,P.props)}function A(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function D(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Se){return K[Se]})}var k=/\/+/g;function ne(P,K){return typeof P=="object"&&P!==null&&P.key!=null?D(""+P.key):K.toString(36)}function Z(){}function ce(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(Z,Z):(P.status="pending",P.then(function(K){P.status==="pending"&&(P.status="fulfilled",P.value=K)},function(K){P.status==="pending"&&(P.status="rejected",P.reason=K)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function re(P,K,Se,ve,Oe){var Ze=typeof P;(Ze==="undefined"||Ze==="boolean")&&(P=null);var ae=!1;if(P===null)ae=!0;else switch(Ze){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(P.$$typeof){case a:case e:ae=!0;break;case g:return ae=P._init,re(ae(P._payload),K,Se,ve,Oe)}}if(ae)return Oe=Oe(P),ae=ve===""?"."+ne(P,0):ve,I(Oe)?(Se="",ae!=null&&(Se=ae.replace(k,"$&/")+"/"),re(Oe,K,Se,"",function(ft){return ft})):Oe!=null&&(A(Oe)&&(Oe=X(Oe,Se+(Oe.key==null||P&&P.key===Oe.key?"":(""+Oe.key).replace(k,"$&/")+"/")+ae)),K.push(Oe)),1;ae=0;var be=ve===""?".":ve+":";if(I(P))for(var Ue=0;Ue<P.length;Ue++)ve=P[Ue],Ze=be+ne(ve,Ue),ae+=re(ve,K,Se,Ze,Oe);else if(Ue=_(P),typeof Ue=="function")for(P=Ue.call(P),Ue=0;!(ve=P.next()).done;)ve=ve.value,Ze=be+ne(ve,Ue++),ae+=re(ve,K,Se,Ze,Oe);else if(Ze==="object"){if(typeof P.then=="function")return re(ce(P),K,Se,ve,Oe);throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ae}function L(P,K,Se){if(P==null)return P;var ve=[],Oe=0;return re(P,ve,"","",function(Ze){return K.call(Se,Ze,Oe++)}),ve}function F(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(Se){(P._status===0||P._status===-1)&&(P._status=1,P._result=Se)},function(Se){(P._status===0||P._status===-1)&&(P._status=2,P._result=Se)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var Y=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function xe(){}return At.Children={map:L,forEach:function(P,K,Se){L(P,function(){K.apply(this,arguments)},Se)},count:function(P){var K=0;return L(P,function(){K++}),K},toArray:function(P){return L(P,function(K){return K})||[]},only:function(P){if(!A(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},At.Component=S,At.Fragment=n,At.Profiler=o,At.PureComponent=U,At.StrictMode=r,At.Suspense=d,At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,At.__COMPILER_RUNTIME={__proto__:null,c:function(P){return O.H.useMemoCache(P)}},At.cache=function(P){return function(){return P.apply(null,arguments)}},At.cloneElement=function(P,K,Se){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var ve=M({},P.props),Oe=P.key,Ze=void 0;if(K!=null)for(ae in K.ref!==void 0&&(Ze=void 0),K.key!==void 0&&(Oe=""+K.key),K)!R.call(K,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&K.ref===void 0||(ve[ae]=K[ae]);var ae=arguments.length-2;if(ae===1)ve.children=Se;else if(1<ae){for(var be=Array(ae),Ue=0;Ue<ae;Ue++)be[Ue]=arguments[Ue+2];ve.children=be}return H(P.type,Oe,void 0,void 0,Ze,ve)},At.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},At.createElement=function(P,K,Se){var ve,Oe={},Ze=null;if(K!=null)for(ve in K.key!==void 0&&(Ze=""+K.key),K)R.call(K,ve)&&ve!=="key"&&ve!=="__self"&&ve!=="__source"&&(Oe[ve]=K[ve]);var ae=arguments.length-2;if(ae===1)Oe.children=Se;else if(1<ae){for(var be=Array(ae),Ue=0;Ue<ae;Ue++)be[Ue]=arguments[Ue+2];Oe.children=be}if(P&&P.defaultProps)for(ve in ae=P.defaultProps,ae)Oe[ve]===void 0&&(Oe[ve]=ae[ve]);return H(P,Ze,void 0,void 0,null,Oe)},At.createRef=function(){return{current:null}},At.forwardRef=function(P){return{$$typeof:h,render:P}},At.isValidElement=A,At.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:F}},At.memo=function(P,K){return{$$typeof:p,type:P,compare:K===void 0?null:K}},At.startTransition=function(P){var K=O.T,Se={};O.T=Se;try{var ve=P(),Oe=O.S;Oe!==null&&Oe(Se,ve),typeof ve=="object"&&ve!==null&&typeof ve.then=="function"&&ve.then(xe,Y)}catch(Ze){Y(Ze)}finally{O.T=K}},At.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},At.use=function(P){return O.H.use(P)},At.useActionState=function(P,K,Se){return O.H.useActionState(P,K,Se)},At.useCallback=function(P,K){return O.H.useCallback(P,K)},At.useContext=function(P){return O.H.useContext(P)},At.useDebugValue=function(){},At.useDeferredValue=function(P,K){return O.H.useDeferredValue(P,K)},At.useEffect=function(P,K,Se){var ve=O.H;if(typeof Se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ve.useEffect(P,K)},At.useId=function(){return O.H.useId()},At.useImperativeHandle=function(P,K,Se){return O.H.useImperativeHandle(P,K,Se)},At.useInsertionEffect=function(P,K){return O.H.useInsertionEffect(P,K)},At.useLayoutEffect=function(P,K){return O.H.useLayoutEffect(P,K)},At.useMemo=function(P,K){return O.H.useMemo(P,K)},At.useOptimistic=function(P,K){return O.H.useOptimistic(P,K)},At.useReducer=function(P,K,Se){return O.H.useReducer(P,K,Se)},At.useRef=function(P){return O.H.useRef(P)},At.useState=function(P){return O.H.useState(P)},At.useSyncExternalStore=function(P,K,Se){return O.H.useSyncExternalStore(P,K,Se)},At.useTransition=function(){return O.H.useTransition()},At.version="19.1.1",At}var Wv;function Bp(){return Wv||(Wv=1,jd.exports=nE()),jd.exports}var oe=Bp();const iE=Ax(oe);var qd={exports:{}},il={},Yd={exports:{}},Zd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function aE(){return jv||(jv=1,(function(a){function e(L,F){var Y=L.length;L.push(F);e:for(;0<Y;){var xe=Y-1>>>1,P=L[xe];if(0<o(P,F))L[xe]=F,L[Y]=P,Y=xe;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var F=L[0],Y=L.pop();if(Y!==F){L[0]=Y;e:for(var xe=0,P=L.length,K=P>>>1;xe<K;){var Se=2*(xe+1)-1,ve=L[Se],Oe=Se+1,Ze=L[Oe];if(0>o(ve,Y))Oe<P&&0>o(Ze,ve)?(L[xe]=Ze,L[Oe]=Y,xe=Oe):(L[xe]=ve,L[Se]=Y,xe=Se);else if(Oe<P&&0>o(Ze,Y))L[xe]=Ze,L[Oe]=Y,xe=Oe;else break e}}return F}function o(L,F){var Y=L.sortIndex-F.sortIndex;return Y!==0?Y:L.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,v=null,_=3,y=!1,M=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function I(L){for(var F=n(p);F!==null;){if(F.callback===null)r(p);else if(F.startTime<=L)r(p),F.sortIndex=F.expirationTime,e(d,F);else break;F=n(p)}}function O(L){if(b=!1,I(L),!M)if(n(d)!==null)M=!0,R||(R=!0,ne());else{var F=n(p);F!==null&&re(O,F.startTime-L)}}var R=!1,H=-1,X=5,A=-1;function D(){return S?!0:!(a.unstable_now()-A<X)}function k(){if(S=!1,R){var L=a.unstable_now();A=L;var F=!0;try{e:{M=!1,b&&(b=!1,U(H),H=-1),y=!0;var Y=_;try{t:{for(I(L),v=n(d);v!==null&&!(v.expirationTime>L&&D());){var xe=v.callback;if(typeof xe=="function"){v.callback=null,_=v.priorityLevel;var P=xe(v.expirationTime<=L);if(L=a.unstable_now(),typeof P=="function"){v.callback=P,I(L),F=!0;break t}v===n(d)&&r(d),I(L)}else r(d);v=n(d)}if(v!==null)F=!0;else{var K=n(p);K!==null&&re(O,K.startTime-L),F=!1}}break e}finally{v=null,_=Y,y=!1}F=void 0}}finally{F?ne():R=!1}}}var ne;if(typeof C=="function")ne=function(){C(k)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ce=Z.port2;Z.port1.onmessage=k,ne=function(){ce.postMessage(null)}}else ne=function(){x(k,0)};function re(L,F){H=x(function(){L(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(L){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var Y=_;_=F;try{return L()}finally{_=Y}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=_;_=L;try{return F()}finally{_=Y}},a.unstable_scheduleCallback=function(L,F,Y){var xe=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xe+Y:xe):Y=xe,L){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Y+P,L={id:g++,callback:F,priorityLevel:L,startTime:Y,expirationTime:P,sortIndex:-1},Y>xe?(L.sortIndex=Y,e(p,L),n(d)===null&&L===n(p)&&(b?(U(H),H=-1):b=!0,re(O,Y-xe))):(L.sortIndex=P,e(d,L),M||y||(M=!0,R||(R=!0,ne()))),L},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(L){var F=_;return function(){var Y=_;_=F;try{return L.apply(this,arguments)}finally{_=Y}}}})(Zd)),Zd}var qv;function rE(){return qv||(qv=1,Yd.exports=aE()),Yd.exports}var Kd={exports:{}},qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function sE(){if(Yv)return qn;Yv=1;var a=Bp();function e(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(d,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:d,containerInfo:p,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,qn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(d,p,null,g)},qn.flushSync=function(d){var p=u.T,g=r.p;try{if(u.T=null,r.p=2,d)return d()}finally{u.T=p,r.p=g,r.d.f()}},qn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(d,p))},qn.prefetchDNS=function(d){typeof d=="string"&&r.d.D(d)},qn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&r.d.X(d,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},qn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(d)},qn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(d,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},qn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(d)},qn.requestFormReset=function(d){r.d.r(d)},qn.unstable_batchedUpdates=function(d,p){return d(p)},qn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},qn.useFormStatus=function(){return u.H.useHostTransitionStatus()},qn.version="19.1.1",qn}var Zv;function Rx(){if(Zv)return Kd.exports;Zv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Kd.exports=sE(),Kd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function oE(){if(Kv)return il;Kv=1;var a=rE(),e=Bp(),n=Rx();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(r(188))}function d(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),t;if(m===l)return h(f),i;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=m;else{for(var E=!1,w=f.child;w;){if(w===s){E=!0,s=f,l=m;break}if(w===l){E=!0,l=f,s=m;break}w=w.sibling}if(!E){for(w=m.child;w;){if(w===s){E=!0,s=m,l=f;break}if(w===l){E=!0,l=m,s=f;break}w=w.sibling}if(!E)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function p(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=p(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),C=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Z?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case O:return"Suspense";case R:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case C:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case I:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return i=t.displayName||null,i!==null?i:ce(t.type)||"Memo";case X:i=t._payload,t=t._init;try{return ce(t(i))}catch{}}return null}var re=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xe=[],P=-1;function K(t){return{current:t}}function Se(t){0>P||(t.current=xe[P],xe[P]=null,P--)}function ve(t,i){P++,xe[P]=t.current,t.current=i}var Oe=K(null),Ze=K(null),ae=K(null),be=K(null);function Ue(t,i){switch(ve(ae,i),ve(Ze,t),ve(Oe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?gv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=gv(i),t=vv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Se(Oe),ve(Oe,t)}function ft(){Se(Oe),Se(Ze),Se(ae)}function ze(t){t.memoizedState!==null&&ve(be,t);var i=Oe.current,s=vv(i,t.type);i!==s&&(ve(Ze,t),ve(Oe,s))}function xt(t){Ze.current===t&&(Se(Oe),Se(Ze)),be.current===t&&(Se(be),Qo._currentValue=Y)}var dn=Object.prototype.hasOwnProperty,Ct=a.unstable_scheduleCallback,bt=a.unstable_cancelCallback,Yt=a.unstable_shouldYield,St=a.unstable_requestPaint,zt=a.unstable_now,W=a.unstable_getCurrentPriorityLevel,hn=a.unstable_ImmediatePriority,Ft=a.unstable_UserBlockingPriority,Gt=a.unstable_NormalPriority,Ye=a.unstable_LowPriority,z=a.unstable_IdlePriority,T=a.log,Q=a.unstable_setDisableYieldValue,ge=null,_e=null;function me(t){if(typeof T=="function"&&Q(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(ge,t)}catch{}}var Ge=Math.clz32?Math.clz32:dt,Be=Math.log,qe=Math.LN2;function dt(t){return t>>>=0,t===0?32:31-(Be(t)/qe|0)|0}var Re=256,Ie=4194304;function We(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ke(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~m,l!==0?f=We(l):(E&=w,E!==0?f=We(E):s||(s=w&~t,s!==0&&(f=We(s))))):(w=l&~m,w!==0?f=We(w):E!==0?f=We(E):s||(s=l&~t,s!==0&&(f=We(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Le(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function yt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var t=Re;return Re<<=1,(Re&4194048)===0&&(Re=256),t}function Ve(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Ne(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function ke(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function we(t,i,s,l,f,m){var E=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,G=t.expirationTimes,le=t.hiddenUpdates;for(s=E&~s;0<s;){var ye=31-Ge(s),Te=1<<ye;w[ye]=0,G[ye]=-1;var fe=le[ye];if(fe!==null)for(le[ye]=null,ye=0;ye<fe.length;ye++){var pe=fe[ye];pe!==null&&(pe.lane&=-536870913)}s&=~Te}l!==0&&Ee(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(E&~i))}function Ee(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ge(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function Pe(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ge(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function pt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function V(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:Iv(t.type))}function ie(t,i){var s=F.p;try{return F.p=t,i()}finally{F.p=s}}var ue=Math.random().toString(36).slice(2),Ae="__reactFiber$"+ue,De="__reactProps$"+ue,Qe="__reactContainer$"+ue,it="__reactEvents$"+ue,et="__reactListeners$"+ue,rt="__reactHandles$"+ue,st="__reactResources$"+ue,Je="__reactMarker$"+ue;function at(t){delete t[Ae],delete t[De],delete t[it],delete t[et],delete t[rt]}function Mt(t){var i=t[Ae];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Qe]||s[Ae]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Sv(t);t!==null;){if(s=t[Ae])return s;t=Sv(t)}return i}t=s,s=t.parentNode}return null}function Ht(t){if(t=t[Ae]||t[Qe]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function pn(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function on(t){var i=t[st];return i||(i=t[st]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function _t(t){t[Je]=!0}var Zt=new Set,bi={};function Jn(t,i){zn(t,i),zn(t+"Capture",i)}function zn(t,i){for(bi[t]=i,t=0;t<i.length;t++)Zt.add(i[t])}var ii=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ka={},Yi={};function N(t){return dn.call(Yi,t)?!0:dn.call(ka,t)?!1:ii.test(t)?Yi[t]=!0:(ka[t]=!0,!1)}function J(t,i,s){if(N(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function he(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function $(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var ee,Fe;function He(t){if(ee===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ee=i&&i[1]||"",Fe=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+t+Fe}var Ce=!1;function je(t,i){if(!t||Ce)return"";Ce=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(pe){var fe=pe}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(pe){fe=pe}t.call(Te.prototype)}}else{try{throw Error()}catch(pe){fe=pe}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(pe){if(pe&&fe&&typeof pe.stack=="string")return[pe.stack,fe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],w=m[1];if(E&&w){var G=E.split(`
`),le=w.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<le.length&&!le[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===le.length)for(l=G.length-1,f=le.length-1;1<=l&&0<=f&&G[l]!==le[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==le[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==le[f]){var ye=`
`+G[l].replace(" at new "," at ");return t.displayName&&ye.includes("<anonymous>")&&(ye=ye.replace("<anonymous>",t.displayName)),ye}while(1<=l&&0<=f);break}}}finally{Ce=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?He(s):""}function nt(t){switch(t.tag){case 26:case 27:case 5:return He(t.type);case 16:return He("Lazy");case 13:return He("Suspense");case 19:return He("SuspenseList");case 0:case 15:return je(t.type,!1);case 11:return je(t.type.render,!1);case 1:return je(t.type,!0);case 31:return He("Activity");default:return""}}function ut(t){try{var i="";do i+=nt(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qt(t){var i=Tt(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ln(t){t._valueTracker||(t._valueTracker=Qt(t))}function mn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Tt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Wt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ct=/[\n"\\]/g;function Et(t){return t.replace(ct,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ot(t,i,s,l,f,m,E,w){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+$e(i)):t.value!==""+$e(i)&&(t.value=""+$e(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?Zi(t,E,$e(i)):s!=null?Zi(t,E,$e(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+$e(w):t.removeAttribute("name")}function Wn(t,i,s,l,f,m,E,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+$e(s):"",i=i!=null?""+$e(i):s,w||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Zi(t,i,s){i==="number"&&Wt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Tn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+$e(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Xa(t,i,s){if(i!=null&&(i=""+$e(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+$e(s):""}function Jt(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(re(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=$e(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function Sn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var ai=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||ai.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Hn(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Pn(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Pn(t,m,i[m])}function Rr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pa=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$y=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(t){return $y.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Xu=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rs=null,ss=null;function _m(t){var i=Ht(t);if(i&&(t=i.stateNode)){var s=t[De]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ot(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Et(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[De]||null;if(!f)throw Error(r(90));Ot(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&mn(l)}break e;case"textarea":Xa(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Tn(t,!!s.multiple,i,!1)}}}var ju=!1;function xm(t,i,s){if(ju)return t(i,s);ju=!0;try{var l=t(i);return l}finally{if(ju=!1,(rs!==null||ss!==null)&&(xc(),rs&&(i=rs,t=ss,ss=rs=null,_m(i),t)))for(i=0;i<t.length;i++)_m(t[i])}}function co(t,i){var s=t.stateNode;if(s===null)return null;var l=s[De]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=!1;if(ma)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){qu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{qu=!1}var Wa=null,Yu=null,Ol=null;function ym(){if(Ol)return Ol;var t,i=Yu,s=i.length,l,f="value"in Wa?Wa.value:Wa.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===f[m-l];l++);return Ol=f.slice(t,1<l?1-l:void 0)}function Il(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function Sm(){return!1}function ri(t){function i(s,l,f,m,E){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Fl:Sm,this.isPropagationStopped=Sm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),i}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=ri(wr),fo=g({},wr,{view:0,detail:0}),eS=ri(fo),Zu,Ku,ho,zl=g({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Zu=t.screenX-ho.screenX,Ku=t.screenY-ho.screenY):Ku=Zu=0,ho=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:Ku}}),Mm=ri(zl),tS=g({},zl,{dataTransfer:0}),nS=ri(tS),iS=g({},fo,{relatedTarget:0}),Qu=ri(iS),aS=g({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),rS=ri(aS),sS=g({},wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oS=ri(sS),lS=g({},wr,{data:0}),Em=ri(lS),cS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=fS[t])?!!i[t]:!1}function Ju(){return dS}var hS=g({},fo,{key:function(t){if(t.key){var i=cS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pS=ri(hS),mS=g({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=ri(mS),gS=g({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),vS=ri(gS),_S=g({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xS=ri(_S),yS=g({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SS=ri(yS),MS=g({},wr,{newState:0,oldState:0}),ES=ri(MS),bS=[9,13,27,32],$u=ma&&"CompositionEvent"in window,po=null;ma&&"documentMode"in document&&(po=document.documentMode);var TS=ma&&"TextEvent"in window&&!po,Tm=ma&&(!$u||po&&8<po&&11>=po),Am=" ",Rm=!1;function wm(t,i){switch(t){case"keyup":return bS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function AS(t,i){switch(t){case"compositionend":return Cm(i);case"keypress":return i.which!==32?null:(Rm=!0,Am);case"textInput":return t=i.data,t===Am&&Rm?null:t;default:return null}}function RS(t,i){if(os)return t==="compositionend"||!$u&&wm(t,i)?(t=ym(),Ol=Yu=Wa=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Tm&&i.locale!=="ko"?null:i.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!wS[t.type]:i==="textarea"}function Nm(t,i,s,l){rs?ss?ss.push(l):ss=[l]:rs=l,i=Tc(i,"onChange"),0<i.length&&(s=new Bl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var mo=null,go=null;function CS(t){fv(t,0)}function Hl(t){var i=pn(t);if(mn(i))return t}function Um(t,i){if(t==="change")return i}var Lm=!1;if(ma){var ef;if(ma){var tf="oninput"in document;if(!tf){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),tf=typeof Pm.oninput=="function"}ef=tf}else ef=!1;Lm=ef&&(!document.documentMode||9<document.documentMode)}function Om(){mo&&(mo.detachEvent("onpropertychange",Im),go=mo=null)}function Im(t){if(t.propertyName==="value"&&Hl(go)){var i=[];Nm(i,go,t,Wu(t)),xm(CS,i)}}function DS(t,i,s){t==="focusin"?(Om(),mo=i,go=s,mo.attachEvent("onpropertychange",Im)):t==="focusout"&&Om()}function NS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(go)}function US(t,i){if(t==="click")return Hl(i)}function LS(t,i){if(t==="input"||t==="change")return Hl(i)}function PS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var hi=typeof Object.is=="function"?Object.is:PS;function vo(t,i){if(hi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!dn.call(i,f)||!hi(t[f],i[f]))return!1}return!0}function Fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bm(t,i){var s=Fm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Fm(s)}}function zm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?zm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Hm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Wt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Wt(t.document)}return i}function nf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var OS=ma&&"documentMode"in document&&11>=document.documentMode,ls=null,af=null,_o=null,rf=!1;function Vm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;rf||ls==null||ls!==Wt(l)||(l=ls,"selectionStart"in l&&nf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_o&&vo(_o,l)||(_o=l,l=Tc(af,"onSelect"),0<l.length&&(i=new Bl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ls)))}function Cr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var cs={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionrun:Cr("Transition","TransitionRun"),transitionstart:Cr("Transition","TransitionStart"),transitioncancel:Cr("Transition","TransitionCancel"),transitionend:Cr("Transition","TransitionEnd")},sf={},Gm={};ma&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Dr(t){if(sf[t])return sf[t];if(!cs[t])return t;var i=cs[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Gm)return sf[t]=i[s];return t}var km=Dr("animationend"),Xm=Dr("animationiteration"),Wm=Dr("animationstart"),IS=Dr("transitionrun"),FS=Dr("transitionstart"),BS=Dr("transitioncancel"),jm=Dr("transitionend"),qm=new Map,of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");of.push("scrollEnd");function Bi(t,i){qm.set(t,i),Jn(i,[t])}var Ym=new WeakMap;function Ti(t,i){if(typeof t=="object"&&t!==null){var s=Ym.get(t);return s!==void 0?s:(i={value:t,source:i,stack:ut(i)},Ym.set(t,i),i)}return{value:t,source:i,stack:ut(i)}}var Ai=[],us=0,lf=0;function Vl(){for(var t=us,i=lf=us=0;i<t;){var s=Ai[i];Ai[i++]=null;var l=Ai[i];Ai[i++]=null;var f=Ai[i];Ai[i++]=null;var m=Ai[i];if(Ai[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}m!==0&&Zm(s,f,m)}}function Gl(t,i,s,l){Ai[us++]=t,Ai[us++]=i,Ai[us++]=s,Ai[us++]=l,lf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function cf(t,i,s,l){return Gl(t,i,s,l),kl(t)}function fs(t,i){return Gl(t,null,null,i),kl(t)}function Zm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Ge(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function kl(t){if(50<ko)throw ko=0,md=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ds={};function zS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(t,i,s,l){return new zS(t,i,s,l)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,i){var s=t.alternate;return s===null?(s=pi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Km(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Xl(t,i,s,l,f,m){var E=0;if(l=t,typeof t=="function")uf(t)&&(E=1);else if(typeof t=="string")E=VM(t,s,Oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case A:return t=pi(31,s,i,f),t.elementType=A,t.lanes=m,t;case M:return Nr(s.children,f,m,i);case b:E=8,f|=24;break;case S:return t=pi(12,s,i,f|2),t.elementType=S,t.lanes=m,t;case O:return t=pi(13,s,i,f),t.elementType=O,t.lanes=m,t;case R:return t=pi(19,s,i,f),t.elementType=R,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case C:E=10;break e;case U:E=9;break e;case I:E=11;break e;case H:E=14;break e;case X:E=16,l=null;break e}E=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=pi(E,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Nr(t,i,s,l){return t=pi(7,t,l,i),t.lanes=s,t}function ff(t,i,s){return t=pi(6,t,null,i),t.lanes=s,t}function df(t,i,s){return i=pi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var hs=[],ps=0,Wl=null,jl=0,Ri=[],wi=0,Ur=null,va=1,_a="";function Lr(t,i){hs[ps++]=jl,hs[ps++]=Wl,Wl=t,jl=i}function Qm(t,i,s){Ri[wi++]=va,Ri[wi++]=_a,Ri[wi++]=Ur,Ur=t;var l=va;t=_a;var f=32-Ge(l)-1;l&=~(1<<f),s+=1;var m=32-Ge(i)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,va=1<<32-Ge(i)+f|s<<f|l,_a=m+t}else va=1<<m|s<<f|l,_a=t}function hf(t){t.return!==null&&(Lr(t,1),Qm(t,1,0))}function pf(t){for(;t===Wl;)Wl=hs[--ps],hs[ps]=null,jl=hs[--ps],hs[ps]=null;for(;t===Ur;)Ur=Ri[--wi],Ri[wi]=null,_a=Ri[--wi],Ri[wi]=null,va=Ri[--wi],Ri[wi]=null}var $n=null,_n=null,Kt=!1,Pr=null,Ki=!1,mf=Error(r(519));function Or(t){var i=Error(r(418,""));throw So(Ti(i,t)),mf}function Jm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[Ae]=t,i[De]=l,s){case"dialog":Lt("cancel",i),Lt("close",i);break;case"iframe":case"object":case"embed":Lt("load",i);break;case"video":case"audio":for(s=0;s<Wo.length;s++)Lt(Wo[s],i);break;case"source":Lt("error",i);break;case"img":case"image":case"link":Lt("error",i),Lt("load",i);break;case"details":Lt("toggle",i);break;case"input":Lt("invalid",i),Wn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ln(i);break;case"select":Lt("invalid",i);break;case"textarea":Lt("invalid",i),Jt(i,l.value,l.defaultValue,l.children),ln(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||mv(i.textContent,s)?(l.popover!=null&&(Lt("beforetoggle",i),Lt("toggle",i)),l.onScroll!=null&&Lt("scroll",i),l.onScrollEnd!=null&&Lt("scrollend",i),l.onClick!=null&&(i.onclick=Ac),i=!0):i=!1,i||Or(t)}function $m(t){for($n=t.return;$n;)switch($n.tag){case 5:case 13:Ki=!1;return;case 27:case 3:Ki=!0;return;default:$n=$n.return}}function xo(t){if(t!==$n)return!1;if(!Kt)return $m(t),Kt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Nd(t.type,t.memoizedProps)),s=!s),s&&_n&&Or(t),$m(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){_n=Hi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}_n=null}}else i===27?(i=_n,or(t.type)?(t=Od,Od=null,_n=t):_n=i):_n=$n?Hi(t.stateNode.nextSibling):null;return!0}function yo(){_n=$n=null,Kt=!1}function eg(){var t=Pr;return t!==null&&(li===null?li=t:li.push.apply(li,t),Pr=null),t}function So(t){Pr===null?Pr=[t]:Pr.push(t)}var gf=K(null),Ir=null,xa=null;function ja(t,i,s){ve(gf,i._currentValue),i._currentValue=s}function ya(t){t._currentValue=gf.current,Se(gf)}function vf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function _f(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=f;for(var G=0;G<i.length;G++)if(w.context===i[G]){m.lanes|=s,w=m.alternate,w!==null&&(w.lanes|=s),vf(m.return,s,t),l||(E=null);break e}m=w.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(r(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),vf(E,s,t),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===t){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Mo(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var w=f.type;hi(f.pendingProps.value,E.value)||(t!==null?t.push(w):t=[w])}}else if(f===be.current){if(E=f.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Qo):t=[Qo])}f=f.return}t!==null&&_f(i,t,s,l),i.flags|=262144}function ql(t){for(t=t.firstContext;t!==null;){if(!hi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fr(t){Ir=t,xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function jn(t){return tg(Ir,t)}function Yl(t,i){return Ir===null&&Fr(t),tg(t,i)}function tg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},xa===null){if(t===null)throw Error(r(308));xa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else xa=xa.next=i;return s}var HS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},VS=a.unstable_scheduleCallback,GS=a.unstable_NormalPriority,Dn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xf(){return{controller:new HS,data:new Map,refCount:0}}function Eo(t){t.refCount--,t.refCount===0&&VS(GS,function(){t.controller.abort()})}var bo=null,yf=0,ms=0,gs=null;function kS(t,i){if(bo===null){var s=bo=[];yf=0,ms=Md(),gs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return yf++,i.then(ng,ng),i}function ng(){if(--yf===0&&bo!==null){gs!==null&&(gs.status="fulfilled");var t=bo;bo=null,ms=0,gs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function XS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var ig=L.S;L.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&kS(t,i),ig!==null&&ig(t,i)};var Br=K(null);function Sf(){var t=Br.current;return t!==null?t:fn.pooledCache}function Zl(t,i){i===null?ve(Br,Br.current):ve(Br,i.pool)}function ag(){var t=Sf();return t===null?null:{parent:Dn._currentValue,pool:t}}var To=Error(r(460)),rg=Error(r(474)),Kl=Error(r(542)),Mf={then:function(){}};function sg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ql(){}function og(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Ql,Ql),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,cg(t),t;default:if(typeof i.status=="string")i.then(Ql,Ql);else{if(t=fn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,cg(t),t}throw Ao=i,To}}var Ao=null;function lg(){if(Ao===null)throw Error(r(459));var t=Ao;return Ao=null,t}function cg(t){if(t===To||t===Kl)throw Error(r(483))}var qa=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,($t&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=kl(t),Zm(t,null,s),i}return Gl(t,l,i,s),kl(t)}function Ro(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Pe(t,s)}}function Tf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Af=!1;function wo(){if(Af){var t=gs;if(t!==null)throw t}}function Co(t,i,s,l){Af=!1;var f=t.updateQueue;qa=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var G=w,le=G.next;G.next=null,E===null?m=le:E.next=le,E=G;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,w=ye.lastBaseUpdate,w!==E&&(w===null?ye.firstBaseUpdate=le:w.next=le,ye.lastBaseUpdate=G))}if(m!==null){var Te=f.baseState;E=0,ye=le=G=null,w=m;do{var fe=w.lane&-536870913,pe=fe!==w.lane;if(pe?(Vt&fe)===fe:(l&fe)===fe){fe!==0&&fe===ms&&(Af=!0),ye!==null&&(ye=ye.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var gt=t,ht=w;fe=i;var rn=s;switch(ht.tag){case 1:if(gt=ht.payload,typeof gt=="function"){Te=gt.call(rn,Te,fe);break e}Te=gt;break e;case 3:gt.flags=gt.flags&-65537|128;case 0:if(gt=ht.payload,fe=typeof gt=="function"?gt.call(rn,Te,fe):gt,fe==null)break e;Te=g({},Te,fe);break e;case 2:qa=!0}}fe=w.callback,fe!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=f.callbacks,pe===null?f.callbacks=[fe]:pe.push(fe))}else pe={lane:fe,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ye===null?(le=ye=pe,G=Te):ye=ye.next=pe,E|=fe;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;pe=w,w=pe.next,pe.next=null,f.lastBaseUpdate=pe,f.shared.pending=null}}while(!0);ye===null&&(G=Te),f.baseState=G,f.firstBaseUpdate=le,f.lastBaseUpdate=ye,m===null&&(f.shared.lanes=0),ir|=E,t.lanes=E,t.memoizedState=Te}}function ug(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function fg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)ug(s[t],i)}var vs=K(null),Jl=K(0);function dg(t,i){t=Ra,ve(Jl,t),ve(vs,i),Ra=t|i.baseLanes}function Rf(){ve(Jl,Ra),ve(vs,vs.current)}function wf(){Ra=Jl.current,Se(vs),Se(Jl)}var Ka=0,Dt=null,nn=null,An=null,$l=!1,_s=!1,zr=!1,ec=0,Do=0,xs=null,WS=0;function Mn(){throw Error(r(321))}function Cf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!hi(t[s],i[s]))return!1;return!0}function Df(t,i,s,l,f,m){return Ka=m,Dt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,L.H=t===null||t.memoizedState===null?Zg:Kg,zr=!1,m=s(l,f),zr=!1,_s&&(m=pg(i,s,l,f)),hg(t),m}function hg(t){L.H=sc;var i=nn!==null&&nn.next!==null;if(Ka=0,An=nn=Dt=null,$l=!1,Do=0,xs=null,i)throw Error(r(300));t===null||On||(t=t.dependencies,t!==null&&ql(t)&&(On=!0))}function pg(t,i,s,l){Dt=t;var f=0;do{if(_s&&(xs=null),Do=0,_s=!1,25<=f)throw Error(r(301));if(f+=1,An=nn=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}L.H=JS,m=i(s,l)}while(_s);return m}function jS(){var t=L.H,i=t.useState()[0];return i=typeof i.then=="function"?No(i):i,t=t.useState()[0],(nn!==null?nn.memoizedState:null)!==t&&(Dt.flags|=1024),i}function Nf(){var t=ec!==0;return ec=0,t}function Uf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Lf(t){if($l){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}$l=!1}Ka=0,An=nn=Dt=null,_s=!1,Do=ec=0,xs=null}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?Dt.memoizedState=An=t:An=An.next=t,An}function Rn(){if(nn===null){var t=Dt.alternate;t=t!==null?t.memoizedState:null}else t=nn.next;var i=An===null?Dt.memoizedState:An.next;if(i!==null)An=i,nn=t;else{if(t===null)throw Dt.alternate===null?Error(r(467)):Error(r(310));nn=t,t={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},An===null?Dt.memoizedState=An=t:An=An.next=t}return An}function Pf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(t){var i=Do;return Do+=1,xs===null&&(xs=[]),t=og(xs,t,i),i=Dt,(An===null?i.memoizedState:An.next)===null&&(i=i.alternate,L.H=i===null||i.memoizedState===null?Zg:Kg),t}function tc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return No(t);if(t.$$typeof===C)return jn(t)}throw Error(r(438,String(t)))}function Of(t){var i=null,s=Dt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Pf(),Dt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=D;return i.index++,s}function Sa(t,i){return typeof i=="function"?i(t):i}function nc(t){var i=Rn();return If(i,nn,t)}function If(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var w=E=null,G=null,le=i,ye=!1;do{var Te=le.lane&-536870913;if(Te!==le.lane?(Vt&Te)===Te:(Ka&Te)===Te){var fe=le.revertLane;if(fe===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),Te===ms&&(ye=!0);else if((Ka&fe)===fe){le=le.next,fe===ms&&(ye=!0);continue}else Te={lane:0,revertLane:le.revertLane,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},G===null?(w=G=Te,E=m):G=G.next=Te,Dt.lanes|=fe,ir|=fe;Te=le.action,zr&&s(m,Te),m=le.hasEagerState?le.eagerState:s(m,Te)}else fe={lane:Te,revertLane:le.revertLane,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},G===null?(w=G=fe,E=m):G=G.next=fe,Dt.lanes|=Te,ir|=Te;le=le.next}while(le!==null&&le!==i);if(G===null?E=m:G.next=w,!hi(m,t.memoizedState)&&(On=!0,ye&&(s=gs,s!==null)))throw s;t.memoizedState=m,t.baseState=E,t.baseQueue=G,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ff(t){var i=Rn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var E=f=f.next;do m=t(m,E.action),E=E.next;while(E!==f);hi(m,i.memoizedState)||(On=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function mg(t,i,s){var l=Dt,f=Rn(),m=Kt;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=i();var E=!hi((nn||f).memoizedState,s);E&&(f.memoizedState=s,On=!0),f=f.queue;var w=_g.bind(null,l,f,t);if(Uo(2048,8,w,[t]),f.getSnapshot!==i||E||An!==null&&An.memoizedState.tag&1){if(l.flags|=2048,ys(9,ic(),vg.bind(null,l,f,s,i),null),fn===null)throw Error(r(349));m||(Ka&124)!==0||gg(l,i,s)}return s}function gg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Dt.updateQueue,i===null?(i=Pf(),Dt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function vg(t,i,s,l){i.value=s,i.getSnapshot=l,xg(i)&&yg(t)}function _g(t,i,s){return s(function(){xg(i)&&yg(t)})}function xg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!hi(t,s)}catch{return!0}}function yg(t){var i=fs(t,2);i!==null&&xi(i,t,2)}function Bf(t){var i=si();if(typeof t=="function"){var s=t;if(t=s(),zr){me(!0);try{s()}finally{me(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},i}function Sg(t,i,s,l){return t.baseState=s,If(t,nn,typeof l=="function"?l:Sa)}function qS(t,i,s,l,f){if(rc(t))throw Error(r(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};L.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,Mg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Mg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=L.T,E={};L.T=E;try{var w=s(f,l),G=L.S;G!==null&&G(E,w),Eg(t,i,w)}catch(le){zf(t,i,le)}finally{L.T=m}}else try{m=s(f,l),Eg(t,i,m)}catch(le){zf(t,i,le)}}function Eg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){bg(t,i,l)},function(l){return zf(t,i,l)}):bg(t,i,s)}function bg(t,i,s){i.status="fulfilled",i.value=s,Tg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Mg(t,s)))}function zf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Tg(i),i=i.next;while(i!==l)}t.action=null}function Tg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Ag(t,i){return i}function Rg(t,i){if(Kt){var s=fn.formState;if(s!==null){e:{var l=Dt;if(Kt){if(_n){t:{for(var f=_n,m=Ki;f.nodeType!==8;){if(!m){f=null;break t}if(f=Hi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){_n=Hi(f.nextSibling),l=f.data==="F!";break e}}Or(l)}l=!1}l&&(i=s[0])}}return s=si(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ag,lastRenderedState:i},s.queue=l,s=jg.bind(null,Dt,l),l.dispatch=s,l=Bf(!1),m=Xf.bind(null,Dt,!1,l.queue),l=si(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=qS.bind(null,Dt,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function wg(t){var i=Rn();return Cg(i,nn,t)}function Cg(t,i,s){if(i=If(t,i,Ag)[0],t=nc(Sa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=No(i)}catch(E){throw E===To?Kl:E}else l=i;i=Rn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(Dt.flags|=2048,ys(9,ic(),YS.bind(null,f,s),null)),[l,m,t]}function YS(t,i){t.action=i}function Dg(t){var i=Rn(),s=nn;if(s!==null)return Cg(i,s,t);Rn(),i=i.memoizedState,s=Rn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function ys(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=Dt.updateQueue,i===null&&(i=Pf(),Dt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function ic(){return{destroy:void 0,resource:void 0}}function Ng(){return Rn().memoizedState}function ac(t,i,s,l){var f=si();l=l===void 0?null:l,Dt.flags|=t,f.memoizedState=ys(1|i,ic(),s,l)}function Uo(t,i,s,l){var f=Rn();l=l===void 0?null:l;var m=f.memoizedState.inst;nn!==null&&l!==null&&Cf(l,nn.memoizedState.deps)?f.memoizedState=ys(i,m,s,l):(Dt.flags|=t,f.memoizedState=ys(1|i,m,s,l))}function Ug(t,i){ac(8390656,8,t,i)}function Lg(t,i){Uo(2048,8,t,i)}function Pg(t,i){return Uo(4,2,t,i)}function Og(t,i){return Uo(4,4,t,i)}function Ig(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Fg(t,i,s){s=s!=null?s.concat([t]):null,Uo(4,4,Ig.bind(null,i,t),s)}function Hf(){}function Bg(t,i){var s=Rn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Cf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function zg(t,i){var s=Rn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Cf(i,l[1]))return l[0];if(l=t(),zr){me(!0);try{t()}finally{me(!1)}}return s.memoizedState=[l,i],l}function Vf(t,i,s){return s===void 0||(Ka&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=G0(),Dt.lanes|=t,ir|=t,s)}function Hg(t,i,s,l){return hi(s,i)?s:vs.current!==null?(t=Vf(t,s,l),hi(t,i)||(On=!0),t):(Ka&42)===0?(On=!0,t.memoizedState=s):(t=G0(),Dt.lanes|=t,ir|=t,i)}function Vg(t,i,s,l,f){var m=F.p;F.p=m!==0&&8>m?m:8;var E=L.T,w={};L.T=w,Xf(t,!1,i,s);try{var G=f(),le=L.S;if(le!==null&&le(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ye=XS(G,l);Lo(t,i,ye,_i(t))}else Lo(t,i,l,_i(t))}catch(Te){Lo(t,i,{then:function(){},status:"rejected",reason:Te},_i())}finally{F.p=m,L.T=E}}function ZS(){}function Gf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=Gg(t).queue;Vg(t,f,i,Y,s===null?ZS:function(){return kg(t),s(l)})}function Gg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:Y},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function kg(t){var i=Gg(t).next.queue;Lo(t,i,{},_i())}function kf(){return jn(Qo)}function Xg(){return Rn().memoizedState}function Wg(){return Rn().memoizedState}function KS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=_i();t=Ya(s);var l=Za(i,t,s);l!==null&&(xi(l,i,s),Ro(l,i,s)),i={cache:xf()},t.payload=i;return}i=i.return}}function QS(t,i,s){var l=_i();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},rc(t)?qg(i,s):(s=cf(t,i,s,l),s!==null&&(xi(s,t,l),Yg(s,i,l)))}function jg(t,i,s){var l=_i();Lo(t,i,s,l)}function Lo(t,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(rc(t))qg(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,w=m(E,s);if(f.hasEagerState=!0,f.eagerState=w,hi(w,E))return Gl(t,i,f,0),fn===null&&Vl(),!1}catch{}finally{}if(s=cf(t,i,f,l),s!==null)return xi(s,t,l),Yg(s,i,l),!0}return!1}function Xf(t,i,s,l){if(l={lane:2,revertLane:Md(),action:l,hasEagerState:!1,eagerState:null,next:null},rc(t)){if(i)throw Error(r(479))}else i=cf(t,s,l,2),i!==null&&xi(i,t,2)}function rc(t){var i=t.alternate;return t===Dt||i!==null&&i===Dt}function qg(t,i){_s=$l=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Yg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Pe(t,s)}}var sc={readContext:jn,use:tc,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useLayoutEffect:Mn,useInsertionEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useSyncExternalStore:Mn,useId:Mn,useHostTransitionStatus:Mn,useFormState:Mn,useActionState:Mn,useOptimistic:Mn,useMemoCache:Mn,useCacheRefresh:Mn},Zg={readContext:jn,use:tc,useCallback:function(t,i){return si().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:Ug,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,ac(4194308,4,Ig.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ac(4194308,4,t,i)},useInsertionEffect:function(t,i){ac(4,2,t,i)},useMemo:function(t,i){var s=si();i=i===void 0?null:i;var l=t();if(zr){me(!0);try{t()}finally{me(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=si();if(s!==void 0){var f=s(i);if(zr){me(!0);try{s(i)}finally{me(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=QS.bind(null,Dt,t),[l.memoizedState,t]},useRef:function(t){var i=si();return t={current:t},i.memoizedState=t},useState:function(t){t=Bf(t);var i=t.queue,s=jg.bind(null,Dt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Hf,useDeferredValue:function(t,i){var s=si();return Vf(s,t,i)},useTransition:function(){var t=Bf(!1);return t=Vg.bind(null,Dt,t.queue,!0,!1),si().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=Dt,f=si();if(Kt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),fn===null)throw Error(r(349));(Vt&124)!==0||gg(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Ug(_g.bind(null,l,m,t),[t]),l.flags|=2048,ys(9,ic(),vg.bind(null,l,m,s,i),null),s},useId:function(){var t=si(),i=fn.identifierPrefix;if(Kt){var s=_a,l=va;s=(l&~(1<<32-Ge(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=ec++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=WS++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:kf,useFormState:Rg,useActionState:Rg,useOptimistic:function(t){var i=si();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Xf.bind(null,Dt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Of,useCacheRefresh:function(){return si().memoizedState=KS.bind(null,Dt)}},Kg={readContext:jn,use:tc,useCallback:Bg,useContext:jn,useEffect:Lg,useImperativeHandle:Fg,useInsertionEffect:Pg,useLayoutEffect:Og,useMemo:zg,useReducer:nc,useRef:Ng,useState:function(){return nc(Sa)},useDebugValue:Hf,useDeferredValue:function(t,i){var s=Rn();return Hg(s,nn.memoizedState,t,i)},useTransition:function(){var t=nc(Sa)[0],i=Rn().memoizedState;return[typeof t=="boolean"?t:No(t),i]},useSyncExternalStore:mg,useId:Xg,useHostTransitionStatus:kf,useFormState:wg,useActionState:wg,useOptimistic:function(t,i){var s=Rn();return Sg(s,nn,t,i)},useMemoCache:Of,useCacheRefresh:Wg},JS={readContext:jn,use:tc,useCallback:Bg,useContext:jn,useEffect:Lg,useImperativeHandle:Fg,useInsertionEffect:Pg,useLayoutEffect:Og,useMemo:zg,useReducer:Ff,useRef:Ng,useState:function(){return Ff(Sa)},useDebugValue:Hf,useDeferredValue:function(t,i){var s=Rn();return nn===null?Vf(s,t,i):Hg(s,nn.memoizedState,t,i)},useTransition:function(){var t=Ff(Sa)[0],i=Rn().memoizedState;return[typeof t=="boolean"?t:No(t),i]},useSyncExternalStore:mg,useId:Xg,useHostTransitionStatus:kf,useFormState:Dg,useActionState:Dg,useOptimistic:function(t,i){var s=Rn();return nn!==null?Sg(s,nn,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Of,useCacheRefresh:Wg},Ss=null,Po=0;function oc(t){var i=Po;return Po+=1,Ss===null&&(Ss=[]),og(Ss,t,i)}function Oo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function lc(t,i){throw i.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Qg(t){var i=t._init;return i(t._payload)}function Jg(t){function i(te,j){if(t){var se=te.deletions;se===null?(te.deletions=[j],te.flags|=16):se.push(j)}}function s(te,j){if(!t)return null;for(;j!==null;)i(te,j),j=j.sibling;return null}function l(te){for(var j=new Map;te!==null;)te.key!==null?j.set(te.key,te):j.set(te.index,te),te=te.sibling;return j}function f(te,j){return te=ga(te,j),te.index=0,te.sibling=null,te}function m(te,j,se){return te.index=se,t?(se=te.alternate,se!==null?(se=se.index,se<j?(te.flags|=67108866,j):se):(te.flags|=67108866,j)):(te.flags|=1048576,j)}function E(te){return t&&te.alternate===null&&(te.flags|=67108866),te}function w(te,j,se,Me){return j===null||j.tag!==6?(j=ff(se,te.mode,Me),j.return=te,j):(j=f(j,se),j.return=te,j)}function G(te,j,se,Me){var tt=se.type;return tt===M?ye(te,j,se.props.children,Me,se.key):j!==null&&(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===X&&Qg(tt)===j.type)?(j=f(j,se.props),Oo(j,se),j.return=te,j):(j=Xl(se.type,se.key,se.props,null,te.mode,Me),Oo(j,se),j.return=te,j)}function le(te,j,se,Me){return j===null||j.tag!==4||j.stateNode.containerInfo!==se.containerInfo||j.stateNode.implementation!==se.implementation?(j=df(se,te.mode,Me),j.return=te,j):(j=f(j,se.children||[]),j.return=te,j)}function ye(te,j,se,Me,tt){return j===null||j.tag!==7?(j=Nr(se,te.mode,Me,tt),j.return=te,j):(j=f(j,se),j.return=te,j)}function Te(te,j,se){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=ff(""+j,te.mode,se),j.return=te,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case _:return se=Xl(j.type,j.key,j.props,null,te.mode,se),Oo(se,j),se.return=te,se;case y:return j=df(j,te.mode,se),j.return=te,j;case X:var Me=j._init;return j=Me(j._payload),Te(te,j,se)}if(re(j)||ne(j))return j=Nr(j,te.mode,se,null),j.return=te,j;if(typeof j.then=="function")return Te(te,oc(j),se);if(j.$$typeof===C)return Te(te,Yl(te,j),se);lc(te,j)}return null}function fe(te,j,se,Me){var tt=j!==null?j.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return tt!==null?null:w(te,j,""+se,Me);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case _:return se.key===tt?G(te,j,se,Me):null;case y:return se.key===tt?le(te,j,se,Me):null;case X:return tt=se._init,se=tt(se._payload),fe(te,j,se,Me)}if(re(se)||ne(se))return tt!==null?null:ye(te,j,se,Me,null);if(typeof se.then=="function")return fe(te,j,oc(se),Me);if(se.$$typeof===C)return fe(te,j,Yl(te,se),Me);lc(te,se)}return null}function pe(te,j,se,Me,tt){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return te=te.get(se)||null,w(j,te,""+Me,tt);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case _:return te=te.get(Me.key===null?se:Me.key)||null,G(j,te,Me,tt);case y:return te=te.get(Me.key===null?se:Me.key)||null,le(j,te,Me,tt);case X:var Nt=Me._init;return Me=Nt(Me._payload),pe(te,j,se,Me,tt)}if(re(Me)||ne(Me))return te=te.get(se)||null,ye(j,te,Me,tt,null);if(typeof Me.then=="function")return pe(te,j,se,oc(Me),tt);if(Me.$$typeof===C)return pe(te,j,se,Yl(j,Me),tt);lc(j,Me)}return null}function gt(te,j,se,Me){for(var tt=null,Nt=null,ot=j,mt=j=0,Fn=null;ot!==null&&mt<se.length;mt++){ot.index>mt?(Fn=ot,ot=null):Fn=ot.sibling;var jt=fe(te,ot,se[mt],Me);if(jt===null){ot===null&&(ot=Fn);break}t&&ot&&jt.alternate===null&&i(te,ot),j=m(jt,j,mt),Nt===null?tt=jt:Nt.sibling=jt,Nt=jt,ot=Fn}if(mt===se.length)return s(te,ot),Kt&&Lr(te,mt),tt;if(ot===null){for(;mt<se.length;mt++)ot=Te(te,se[mt],Me),ot!==null&&(j=m(ot,j,mt),Nt===null?tt=ot:Nt.sibling=ot,Nt=ot);return Kt&&Lr(te,mt),tt}for(ot=l(ot);mt<se.length;mt++)Fn=pe(ot,te,mt,se[mt],Me),Fn!==null&&(t&&Fn.alternate!==null&&ot.delete(Fn.key===null?mt:Fn.key),j=m(Fn,j,mt),Nt===null?tt=Fn:Nt.sibling=Fn,Nt=Fn);return t&&ot.forEach(function(dr){return i(te,dr)}),Kt&&Lr(te,mt),tt}function ht(te,j,se,Me){if(se==null)throw Error(r(151));for(var tt=null,Nt=null,ot=j,mt=j=0,Fn=null,jt=se.next();ot!==null&&!jt.done;mt++,jt=se.next()){ot.index>mt?(Fn=ot,ot=null):Fn=ot.sibling;var dr=fe(te,ot,jt.value,Me);if(dr===null){ot===null&&(ot=Fn);break}t&&ot&&dr.alternate===null&&i(te,ot),j=m(dr,j,mt),Nt===null?tt=dr:Nt.sibling=dr,Nt=dr,ot=Fn}if(jt.done)return s(te,ot),Kt&&Lr(te,mt),tt;if(ot===null){for(;!jt.done;mt++,jt=se.next())jt=Te(te,jt.value,Me),jt!==null&&(j=m(jt,j,mt),Nt===null?tt=jt:Nt.sibling=jt,Nt=jt);return Kt&&Lr(te,mt),tt}for(ot=l(ot);!jt.done;mt++,jt=se.next())jt=pe(ot,te,mt,jt.value,Me),jt!==null&&(t&&jt.alternate!==null&&ot.delete(jt.key===null?mt:jt.key),j=m(jt,j,mt),Nt===null?tt=jt:Nt.sibling=jt,Nt=jt);return t&&ot.forEach(function($M){return i(te,$M)}),Kt&&Lr(te,mt),tt}function rn(te,j,se,Me){if(typeof se=="object"&&se!==null&&se.type===M&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case _:e:{for(var tt=se.key;j!==null;){if(j.key===tt){if(tt=se.type,tt===M){if(j.tag===7){s(te,j.sibling),Me=f(j,se.props.children),Me.return=te,te=Me;break e}}else if(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===X&&Qg(tt)===j.type){s(te,j.sibling),Me=f(j,se.props),Oo(Me,se),Me.return=te,te=Me;break e}s(te,j);break}else i(te,j);j=j.sibling}se.type===M?(Me=Nr(se.props.children,te.mode,Me,se.key),Me.return=te,te=Me):(Me=Xl(se.type,se.key,se.props,null,te.mode,Me),Oo(Me,se),Me.return=te,te=Me)}return E(te);case y:e:{for(tt=se.key;j!==null;){if(j.key===tt)if(j.tag===4&&j.stateNode.containerInfo===se.containerInfo&&j.stateNode.implementation===se.implementation){s(te,j.sibling),Me=f(j,se.children||[]),Me.return=te,te=Me;break e}else{s(te,j);break}else i(te,j);j=j.sibling}Me=df(se,te.mode,Me),Me.return=te,te=Me}return E(te);case X:return tt=se._init,se=tt(se._payload),rn(te,j,se,Me)}if(re(se))return gt(te,j,se,Me);if(ne(se)){if(tt=ne(se),typeof tt!="function")throw Error(r(150));return se=tt.call(se),ht(te,j,se,Me)}if(typeof se.then=="function")return rn(te,j,oc(se),Me);if(se.$$typeof===C)return rn(te,j,Yl(te,se),Me);lc(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,j!==null&&j.tag===6?(s(te,j.sibling),Me=f(j,se),Me.return=te,te=Me):(s(te,j),Me=ff(se,te.mode,Me),Me.return=te,te=Me),E(te)):s(te,j)}return function(te,j,se,Me){try{Po=0;var tt=rn(te,j,se,Me);return Ss=null,tt}catch(ot){if(ot===To||ot===Kl)throw ot;var Nt=pi(29,ot,null,te.mode);return Nt.lanes=Me,Nt.return=te,Nt}finally{}}}var Ms=Jg(!0),$g=Jg(!1),Ci=K(null),Qi=null;function Qa(t){var i=t.alternate;ve(Nn,Nn.current&1),ve(Ci,t),Qi===null&&(i===null||vs.current!==null||i.memoizedState!==null)&&(Qi=t)}function e0(t){if(t.tag===22){if(ve(Nn,Nn.current),ve(Ci,t),Qi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Qi=t)}}else Ja()}function Ja(){ve(Nn,Nn.current),ve(Ci,Ci.current)}function Ma(t){Se(Ci),Qi===t&&(Qi=null),Se(Nn)}var Nn=K(0);function cc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Pd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Wf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var jf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=_i(),f=Ya(l);f.payload=i,s!=null&&(f.callback=s),i=Za(t,f,l),i!==null&&(xi(i,t,l),Ro(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=_i(),f=Ya(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Za(t,f,l),i!==null&&(xi(i,t,l),Ro(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=_i(),l=Ya(s);l.tag=2,i!=null&&(l.callback=i),i=Za(t,l,s),i!==null&&(xi(i,t,s),Ro(i,t,s))}};function t0(t,i,s,l,f,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!vo(s,l)||!vo(f,m):!0}function n0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&jf.enqueueReplaceState(i,i.state,null)}function Hr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}var uc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function i0(t){uc(t)}function a0(t){console.error(t)}function r0(t){uc(t)}function fc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function s0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function qf(t,i,s){return s=Ya(s),s.tag=3,s.payload={element:null},s.callback=function(){fc(t,i)},s}function o0(t){return t=Ya(t),t.tag=3,t}function l0(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){s0(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){s0(i,s,l),typeof f!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function $S(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Mo(i,s,f,!0),s=Ci.current,s!==null){switch(s.tag){case 13:return Qi===null?vd():s.alternate===null&&xn===0&&(xn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Mf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),xd(t,l,f)),!1;case 22:return s.flags|=65536,l===Mf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),xd(t,l,f)),!1}throw Error(r(435,s.tag))}return xd(t,l,f),vd(),!1}if(Kt)return i=Ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==mf&&(t=Error(r(422),{cause:l}),So(Ti(t,s)))):(l!==mf&&(i=Error(r(423),{cause:l}),So(Ti(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Ti(l,s),f=qf(t.stateNode,l,f),Tf(t,f),xn!==4&&(xn=2)),!1;var m=Error(r(520),{cause:l});if(m=Ti(m,s),Go===null?Go=[m]:Go.push(m),xn!==4&&(xn=2),i===null)return!0;l=Ti(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=qf(s.stateNode,l,t),Tf(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ar===null||!ar.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=o0(f),l0(f,t,s,l),Tf(s,f),!1}s=s.return}while(s!==null);return!1}var c0=Error(r(461)),On=!1;function Vn(t,i,s,l){i.child=t===null?$g(i,null,s,l):Ms(i,t.child,s,l)}function u0(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var w in l)w!=="ref"&&(E[w]=l[w])}else E=l;return Fr(i),l=Df(t,i,s,E,m,f),w=Nf(),t!==null&&!On?(Uf(t,i,f),Ea(t,i,f)):(Kt&&w&&hf(i),i.flags|=1,Vn(t,i,l,f),i.child)}function f0(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!uf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,d0(t,i,m,l,f)):(t=Xl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!td(t,f)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:vo,s(E,l)&&t.ref===i.ref)return Ea(t,i,f)}return i.flags|=1,t=ga(m,l),t.ref=i.ref,t.return=i,i.child=t}function d0(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(vo(m,l)&&t.ref===i.ref)if(On=!1,i.pendingProps=l=m,td(t,f))(t.flags&131072)!==0&&(On=!0);else return i.lanes=t.lanes,Ea(t,i,f)}return Yf(t,i,s,l,f)}function h0(t,i,s){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,t!==null){for(f=i.child=t.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return p0(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(i,m!==null?m.cachePool:null),m!==null?dg(i,m):Rf(),e0(i);else return i.lanes=i.childLanes=536870912,p0(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Zl(i,m.cachePool),dg(i,m),Ja(),i.memoizedState=null):(t!==null&&Zl(i,null),Rf(),Ja());return Vn(t,i,f,s),i.child}function p0(t,i,s,l){var f=Sf();return f=f===null?null:{parent:Dn._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},t!==null&&Zl(i,null),Rf(),e0(i),t!==null&&Mo(t,i,l,!0),null}function dc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Yf(t,i,s,l,f){return Fr(i),s=Df(t,i,s,l,void 0,f),l=Nf(),t!==null&&!On?(Uf(t,i,f),Ea(t,i,f)):(Kt&&l&&hf(i),i.flags|=1,Vn(t,i,s,f),i.child)}function m0(t,i,s,l,f,m){return Fr(i),i.updateQueue=null,s=pg(i,l,s,f),hg(t),l=Nf(),t!==null&&!On?(Uf(t,i,m),Ea(t,i,m)):(Kt&&l&&hf(i),i.flags|=1,Vn(t,i,s,m),i.child)}function g0(t,i,s,l,f){if(Fr(i),i.stateNode===null){var m=ds,E=s.contextType;typeof E=="object"&&E!==null&&(m=jn(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=jf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Ef(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?jn(E):ds,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Wf(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&jf.enqueueReplaceState(m,m.state,null),Co(i,l,m,f),wo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var w=i.memoizedProps,G=Hr(s,w);m.props=G;var le=m.context,ye=s.contextType;E=ds,typeof ye=="object"&&ye!==null&&(E=jn(ye));var Te=s.getDerivedStateFromProps;ye=typeof Te=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,ye||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||le!==E)&&n0(i,m,l,E),qa=!1;var fe=i.memoizedState;m.state=fe,Co(i,l,m,f),wo(),le=i.memoizedState,w||fe!==le||qa?(typeof Te=="function"&&(Wf(i,s,Te,l),le=i.memoizedState),(G=qa||t0(i,s,G,l,fe,le,E))?(ye||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=le),m.props=l,m.state=le,m.context=E,l=G):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,bf(t,i),E=i.memoizedProps,ye=Hr(s,E),m.props=ye,Te=i.pendingProps,fe=m.context,le=s.contextType,G=ds,typeof le=="object"&&le!==null&&(G=jn(le)),w=s.getDerivedStateFromProps,(le=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Te||fe!==G)&&n0(i,m,l,G),qa=!1,fe=i.memoizedState,m.state=fe,Co(i,l,m,f),wo();var pe=i.memoizedState;E!==Te||fe!==pe||qa||t!==null&&t.dependencies!==null&&ql(t.dependencies)?(typeof w=="function"&&(Wf(i,s,w,l),pe=i.memoizedState),(ye=qa||t0(i,s,ye,l,fe,pe,G)||t!==null&&t.dependencies!==null&&ql(t.dependencies))?(le||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,pe,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,pe,G)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&fe===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&fe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=pe),m.props=l,m.state=pe,m.context=G,l=ye):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&fe===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&fe===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,dc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=Ms(i,t.child,null,f),i.child=Ms(i,null,s,f)):Vn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=Ea(t,i,f),t}function v0(t,i,s,l){return yo(),i.flags|=256,Vn(t,i,s,l),i.child}var Zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kf(t){return{baseLanes:t,cachePool:ag()}}function Qf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Di),t}function _0(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Kt){if(f?Qa(i):Ja(),Kt){var w=_n,G;if(G=w){e:{for(G=w,w=Ki;G.nodeType!==8;){if(!w){w=null;break e}if(G=Hi(G.nextSibling),G===null){w=null;break e}}w=G}w!==null?(i.memoizedState={dehydrated:w,treeContext:Ur!==null?{id:va,overflow:_a}:null,retryLane:536870912,hydrationErrors:null},G=pi(18,null,null,0),G.stateNode=w,G.return=i,i.child=G,$n=i,_n=null,G=!0):G=!1}G||Or(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Pd(w)?i.lanes=32:i.lanes=536870912,null;Ma(i)}return w=l.children,l=l.fallback,f?(Ja(),f=i.mode,w=hc({mode:"hidden",children:w},f),l=Nr(l,f,s,null),w.return=i,l.return=i,w.sibling=l,i.child=w,f=i.child,f.memoizedState=Kf(s),f.childLanes=Qf(t,E,s),i.memoizedState=Zf,l):(Qa(i),Jf(i,w))}if(G=t.memoizedState,G!==null&&(w=G.dehydrated,w!==null)){if(m)i.flags&256?(Qa(i),i.flags&=-257,i=$f(t,i,s)):i.memoizedState!==null?(Ja(),i.child=t.child,i.flags|=128,i=null):(Ja(),f=l.fallback,w=i.mode,l=hc({mode:"visible",children:l.children},w),f=Nr(f,w,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,Ms(i,t.child,null,s),l=i.child,l.memoizedState=Kf(s),l.childLanes=Qf(t,E,s),i.memoizedState=Zf,i=f);else if(Qa(i),Pd(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var le=E.dgst;E=le,l=Error(r(419)),l.stack="",l.digest=E,So({value:l,source:null,stack:null}),i=$f(t,i,s)}else if(On||Mo(t,i,s,!1),E=(s&t.childLanes)!==0,On||E){if(E=fn,E!==null&&(l=s&-s,l=(l&42)!==0?1:pt(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==G.retryLane))throw G.retryLane=l,fs(t,l),xi(E,t,l),c0;w.data==="$?"||vd(),i=$f(t,i,s)}else w.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,_n=Hi(w.nextSibling),$n=i,Kt=!0,Pr=null,Ki=!1,t!==null&&(Ri[wi++]=va,Ri[wi++]=_a,Ri[wi++]=Ur,va=t.id,_a=t.overflow,Ur=i),i=Jf(i,l.children),i.flags|=4096);return i}return f?(Ja(),f=l.fallback,w=i.mode,G=t.child,le=G.sibling,l=ga(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,le!==null?f=ga(le,f):(f=Nr(f,w,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,w=t.child.memoizedState,w===null?w=Kf(s):(G=w.cachePool,G!==null?(le=Dn._currentValue,G=G.parent!==le?{parent:le,pool:le}:G):G=ag(),w={baseLanes:w.baseLanes|s,cachePool:G}),f.memoizedState=w,f.childLanes=Qf(t,E,s),i.memoizedState=Zf,l):(Qa(i),s=t.child,t=s.sibling,s=ga(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=s,i.memoizedState=null,s)}function Jf(t,i){return i=hc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function hc(t,i){return t=pi(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function $f(t,i,s){return Ms(i,t.child,null,s),t=Jf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function x0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),vf(t.return,i,s)}function ed(t,i,s,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function y0(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Vn(t,i,l.children,s),l=Nn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&x0(t,s,i);else if(t.tag===19)x0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(ve(Nn,l),f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&cc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),ed(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&cc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}ed(i,!0,s,null,m);break;case"together":ed(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ea(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ir|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Mo(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=ga(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ga(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function td(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ql(t)))}function eM(t,i,s){switch(i.tag){case 3:Ue(i,i.stateNode.containerInfo),ja(i,Dn,t.memoizedState.cache),yo();break;case 27:case 5:ze(i);break;case 4:Ue(i,i.stateNode.containerInfo);break;case 10:ja(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?_0(t,i,s):(Qa(i),t=Ea(t,i,s),t!==null?t.sibling:null);Qa(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Mo(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return y0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ve(Nn,Nn.current),l)break;return null;case 22:case 23:return i.lanes=0,h0(t,i,s);case 24:ja(i,Dn,t.memoizedState.cache)}return Ea(t,i,s)}function S0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)On=!0;else{if(!td(t,s)&&(i.flags&128)===0)return On=!1,eM(t,i,s);On=(t.flags&131072)!==0}else On=!1,Kt&&(i.flags&1048576)!==0&&Qm(i,jl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")uf(l)?(t=Hr(l,t),i.tag=1,i=g0(null,i,l,t,s)):(i.tag=0,i=Yf(null,i,l,t,s));else{if(l!=null){if(f=l.$$typeof,f===I){i.tag=11,i=u0(null,i,l,t,s);break e}else if(f===H){i.tag=14,i=f0(null,i,l,t,s);break e}}throw i=ce(l)||l,Error(r(306,i,""))}}return i;case 0:return Yf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Hr(l,i.pendingProps),g0(t,i,l,f,s);case 3:e:{if(Ue(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,bf(t,i),Co(i,l,null,s);var E=i.memoizedState;if(l=E.cache,ja(i,Dn,l),l!==m.cache&&_f(i,[Dn],s,!0),wo(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=v0(t,i,l,s);break e}else if(l!==f){f=Ti(Error(r(424)),i),So(f),i=v0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(_n=Hi(t.firstChild),$n=i,Kt=!0,Pr=null,Ki=!0,s=$g(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(yo(),l===f){i=Ea(t,i,s);break e}Vn(t,i,l,s)}i=i.child}return i;case 26:return dc(t,i),t===null?(s=Tv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Kt||(s=i.type,t=i.pendingProps,l=Rc(ae.current).createElement(s),l[Ae]=i,l[De]=t,kn(l,s,t),_t(l),i.stateNode=l):i.memoizedState=Tv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ze(i),t===null&&Kt&&(l=i.stateNode=Mv(i.type,i.pendingProps,ae.current),$n=i,Ki=!0,f=_n,or(i.type)?(Od=f,_n=Hi(l.firstChild)):_n=f),Vn(t,i,i.pendingProps.children,s),dc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Kt&&((f=l=_n)&&(l=wM(l,i.type,i.pendingProps,Ki),l!==null?(i.stateNode=l,$n=i,_n=Hi(l.firstChild),Ki=!1,f=!0):f=!1),f||Or(i)),ze(i),f=i.type,m=i.pendingProps,E=t!==null?t.memoizedProps:null,l=m.children,Nd(f,m)?l=null:E!==null&&Nd(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=Df(t,i,jS,null,null,s),Qo._currentValue=f),dc(t,i),Vn(t,i,l,s),i.child;case 6:return t===null&&Kt&&((t=s=_n)&&(s=CM(s,i.pendingProps,Ki),s!==null?(i.stateNode=s,$n=i,_n=null,t=!0):t=!1),t||Or(i)),null;case 13:return _0(t,i,s);case 4:return Ue(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ms(i,null,l,s):Vn(t,i,l,s),i.child;case 11:return u0(t,i,i.type,i.pendingProps,s);case 7:return Vn(t,i,i.pendingProps,s),i.child;case 8:return Vn(t,i,i.pendingProps.children,s),i.child;case 12:return Vn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ja(i,i.type,l.value),Vn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Fr(i),f=jn(f),l=l(f),i.flags|=1,Vn(t,i,l,s),i.child;case 14:return f0(t,i,i.type,i.pendingProps,s);case 15:return d0(t,i,i.type,i.pendingProps,s);case 19:return y0(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=hc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ga(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return h0(t,i,s);case 24:return Fr(i),l=jn(Dn),t===null?(f=Sf(),f===null&&(f=fn,m=xf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},Ef(i),ja(i,Dn,f)):((t.lanes&s)!==0&&(bf(t,i),Co(i,null,null,s),wo()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ja(i,Dn,l)):(l=m.cache,ja(i,Dn,l),l!==f.cache&&_f(i,[Dn],s,!0))),Vn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ba(t){t.flags|=4}function M0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Dv(i)){if(i=Ci.current,i!==null&&((Vt&4194048)===Vt?Qi!==null:(Vt&62914560)!==Vt&&(Vt&536870912)===0||i!==Qi))throw Ao=Mf,rg;t.flags|=8192}}function pc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ve():536870912,t.lanes|=i,As|=i)}function Io(t,i){if(!Kt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function vn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function tM(t,i,s){var l=i.pendingProps;switch(pf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return vn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ya(Dn),ft(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(xo(i)?ba(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,eg())),vn(i),null;case 26:return s=i.memoizedState,t===null?(ba(i),s!==null?(vn(i),M0(i,s)):(vn(i),i.flags&=-16777217)):s?s!==t.memoizedState?(ba(i),vn(i),M0(i,s)):(vn(i),i.flags&=-16777217):(t.memoizedProps!==l&&ba(i),vn(i),i.flags&=-16777217),null;case 27:xt(i),s=ae.current;var f=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ba(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return vn(i),null}t=Oe.current,xo(i)?Jm(i):(t=Mv(f,l,s),i.stateNode=t,ba(i))}return vn(i),null;case 5:if(xt(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ba(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return vn(i),null}if(t=Oe.current,xo(i))Jm(i);else{switch(f=Rc(ae.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}t[Ae]=i,t[De]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=t;e:switch(kn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ba(i)}}return vn(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ba(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=ae.current,xo(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=$n,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[Ae]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||mv(t.nodeValue,s)),t||Or(i)}else t=Rc(t).createTextNode(l),t[Ae]=i,i.stateNode=t}return vn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=xo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Ae]=i}else yo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),f=!1}else f=eg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Ma(i),i):(Ma(i),null)}if(Ma(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),pc(i,i.updateQueue),vn(i),null;case 4:return ft(),t===null&&Ad(i.stateNode.containerInfo),vn(i),null;case 10:return ya(i.type),vn(i),null;case 19:if(Se(Nn),f=i.memoizedState,f===null)return vn(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)Io(f,!1);else{if(xn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=cc(t),m!==null){for(i.flags|=128,Io(f,!1),t=m.updateQueue,i.updateQueue=t,pc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Km(s,t),s=s.sibling;return ve(Nn,Nn.current&1|2),i.child}t=t.sibling}f.tail!==null&&zt()>vc&&(i.flags|=128,l=!0,Io(f,!1),i.lanes=4194304)}else{if(!l)if(t=cc(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,pc(i,t),Io(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Kt)return vn(i),null}else 2*zt()-f.renderingStartTime>vc&&s!==536870912&&(i.flags|=128,l=!0,Io(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(t=f.last,t!==null?t.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=zt(),i.sibling=null,t=Nn.current,ve(Nn,l?t&1|2:t&1),i):(vn(i),null);case 22:case 23:return Ma(i),wf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),s=i.updateQueue,s!==null&&pc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&Se(Br),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ya(Dn),vn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function nM(t,i){switch(pf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ya(Dn),ft(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return xt(i),null;case 13:if(Ma(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));yo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Se(Nn),null;case 4:return ft(),null;case 10:return ya(i.type),null;case 22:case 23:return Ma(i),wf(),t!==null&&Se(Br),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ya(Dn),null;case 25:return null;default:return null}}function E0(t,i){switch(pf(i),i.tag){case 3:ya(Dn),ft();break;case 26:case 27:case 5:xt(i);break;case 4:ft();break;case 13:Ma(i);break;case 19:Se(Nn);break;case 10:ya(i.type);break;case 22:case 23:Ma(i),wf(),t!==null&&Se(Br);break;case 24:ya(Dn)}}function Fo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==f)}}catch(w){cn(i,i.return,w)}}function $a(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var E=l.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,f=i;var G=s,le=w;try{le()}catch(ye){cn(f,G,ye)}}}l=l.next}while(l!==m)}}catch(ye){cn(i,i.return,ye)}}function b0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{fg(i,s)}catch(l){cn(t,t.return,l)}}}function T0(t,i,s){s.props=Hr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){cn(t,i,l)}}function Bo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){cn(t,i,f)}}function Ji(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){cn(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){cn(t,i,f)}else s.current=null}function A0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){cn(t,t.return,f)}}function nd(t,i,s){try{var l=t.stateNode;EM(l,t.type,s,i),l[De]=i}catch(f){cn(t,t.return,f)}}function R0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&or(t.type)||t.tag===4}function id(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||R0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&or(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ac));else if(l!==4&&(l===27&&or(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(ad(t,i,s),t=t.sibling;t!==null;)ad(t,i,s),t=t.sibling}function mc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&or(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(mc(t,i,s),t=t.sibling;t!==null;)mc(t,i,s),t=t.sibling}function w0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);kn(i,l,s),i[Ae]=t,i[De]=s}catch(m){cn(t,t.return,m)}}var Ta=!1,En=!1,rd=!1,C0=typeof WeakSet=="function"?WeakSet:Set,In=null;function iM(t,i){if(t=t.containerInfo,Cd=Lc,t=Hm(t),nf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,w=-1,G=-1,le=0,ye=0,Te=t,fe=null;t:for(;;){for(var pe;Te!==s||f!==0&&Te.nodeType!==3||(w=E+f),Te!==m||l!==0&&Te.nodeType!==3||(G=E+l),Te.nodeType===3&&(E+=Te.nodeValue.length),(pe=Te.firstChild)!==null;)fe=Te,Te=pe;for(;;){if(Te===t)break t;if(fe===s&&++le===f&&(w=E),fe===m&&++ye===l&&(G=E),(pe=Te.nextSibling)!==null)break;Te=fe,fe=Te.parentNode}Te=pe}s=w===-1||G===-1?null:{start:w,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(Dd={focusedElem:t,selectionRange:s},Lc=!1,In=i;In!==null;)if(i=In,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,In=t;else for(;In!==null;){switch(i=In,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var gt=Hr(s.type,f,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(gt,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(ht){cn(s,s.return,ht)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Ld(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ld(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,In=t;break}In=i.return}}function D0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:er(t,s),l&4&&Fo(5,s);break;case 1:if(er(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(E){cn(s,s.return,E)}else{var f=Hr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){cn(s,s.return,E)}}l&64&&b0(s),l&512&&Bo(s,s.return);break;case 3:if(er(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{fg(t,i)}catch(E){cn(s,s.return,E)}}break;case 27:i===null&&l&4&&w0(s);case 26:case 5:er(t,s),i===null&&l&4&&A0(s),l&512&&Bo(s,s.return);break;case 12:er(t,s);break;case 13:er(t,s),l&4&&L0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=dM.bind(null,s),DM(t,s))));break;case 22:if(l=s.memoizedState!==null||Ta,!l){i=i!==null&&i.memoizedState!==null||En,f=Ta;var m=En;Ta=l,(En=i)&&!m?tr(t,s,(s.subtreeFlags&8772)!==0):er(t,s),Ta=f,En=m}break;case 30:break;default:er(t,s)}}function N0(t){var i=t.alternate;i!==null&&(t.alternate=null,N0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&at(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gn=null,oi=!1;function Aa(t,i,s){for(s=s.child;s!==null;)U0(t,i,s),s=s.sibling}function U0(t,i,s){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(ge,s)}catch{}switch(s.tag){case 26:En||Ji(s,i),Aa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:En||Ji(s,i);var l=gn,f=oi;or(s.type)&&(gn=s.stateNode,oi=!1),Aa(t,i,s),qo(s.stateNode),gn=l,oi=f;break;case 5:En||Ji(s,i);case 6:if(l=gn,f=oi,gn=null,Aa(t,i,s),gn=l,oi=f,gn!==null)if(oi)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(s.stateNode)}catch(m){cn(s,i,m)}else try{gn.removeChild(s.stateNode)}catch(m){cn(s,i,m)}break;case 18:gn!==null&&(oi?(t=gn,yv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),tl(t)):yv(gn,s.stateNode));break;case 4:l=gn,f=oi,gn=s.stateNode.containerInfo,oi=!0,Aa(t,i,s),gn=l,oi=f;break;case 0:case 11:case 14:case 15:En||$a(2,s,i),En||$a(4,s,i),Aa(t,i,s);break;case 1:En||(Ji(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&T0(s,i,l)),Aa(t,i,s);break;case 21:Aa(t,i,s);break;case 22:En=(l=En)||s.memoizedState!==null,Aa(t,i,s),En=l;break;default:Aa(t,i,s)}}function L0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{tl(t)}catch(s){cn(i,i.return,s)}}function aM(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new C0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new C0),i;default:throw Error(r(435,t.tag))}}function sd(t,i){var s=aM(t);i.forEach(function(l){var f=hM.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}function mi(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,E=i,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(or(w.type)){gn=w.stateNode,oi=!1;break e}break;case 5:gn=w.stateNode,oi=!1;break e;case 3:case 4:gn=w.stateNode.containerInfo,oi=!0;break e}w=w.return}if(gn===null)throw Error(r(160));U0(m,E,f),gn=null,oi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)P0(i,t),i=i.sibling}var zi=null;function P0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:mi(i,t),gi(t),l&4&&($a(3,t,t.return),Fo(3,t),$a(5,t,t.return));break;case 1:mi(i,t),gi(t),l&512&&(En||s===null||Ji(s,s.return)),l&64&&Ta&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=zi;if(mi(i,t),gi(t),l&512&&(En||s===null||Ji(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Je]||m[Ae]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),kn(m,l,s),m[Ae]=t,_t(m),l=m;break e;case"link":var E=wv("link","href",f).get(l+(s.href||""));if(E){for(var w=0;w<E.length;w++)if(m=E[w],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(w,1);break t}}m=f.createElement(l),kn(m,l,s),f.head.appendChild(m);break;case"meta":if(E=wv("meta","content",f).get(l+(s.content||""))){for(w=0;w<E.length;w++)if(m=E[w],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(w,1);break t}}m=f.createElement(l),kn(m,l,s),f.head.appendChild(m);break;default:throw Error(r(468,l))}m[Ae]=t,_t(m),l=m}t.stateNode=l}else Cv(f,t.type,t.stateNode);else t.stateNode=Rv(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?Cv(f,t.type,t.stateNode):Rv(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&nd(t,t.memoizedProps,s.memoizedProps)}break;case 27:mi(i,t),gi(t),l&512&&(En||s===null||Ji(s,s.return)),s!==null&&l&4&&nd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(mi(i,t),gi(t),l&512&&(En||s===null||Ji(s,s.return)),t.flags&32){f=t.stateNode;try{Sn(f,"")}catch(pe){cn(t,t.return,pe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,nd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(rd=!0);break;case 6:if(mi(i,t),gi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(pe){cn(t,t.return,pe)}}break;case 3:if(Dc=null,f=zi,zi=wc(i.containerInfo),mi(i,t),zi=f,gi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{tl(i.containerInfo)}catch(pe){cn(t,t.return,pe)}rd&&(rd=!1,O0(t));break;case 4:l=zi,zi=wc(t.stateNode.containerInfo),mi(i,t),gi(t),zi=l;break;case 12:mi(i,t),gi(t);break;case 13:mi(i,t),gi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(dd=zt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,sd(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,le=Ta,ye=En;if(Ta=le||f,En=ye||G,mi(i,t),En=ye,Ta=le,gi(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||G||Ta||En||Vr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(m=G.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=G.stateNode;var Te=G.memoizedProps.style,fe=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;w.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(pe){cn(G,G.return,pe)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(pe){cn(G,G.return,pe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,sd(t,s))));break;case 19:mi(i,t),gi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,sd(t,l)));break;case 30:break;case 21:break;default:mi(i,t),gi(t)}}function gi(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(R0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,m=id(t);mc(t,m,f);break;case 5:var E=s.stateNode;s.flags&32&&(Sn(E,""),s.flags&=-33);var w=id(t);mc(t,w,E);break;case 3:case 4:var G=s.stateNode.containerInfo,le=id(t);ad(t,le,G);break;default:throw Error(r(161))}}catch(ye){cn(t,t.return,ye)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function O0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;O0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function er(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)D0(t,i.alternate,i),i=i.sibling}function Vr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:$a(4,i,i.return),Vr(i);break;case 1:Ji(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&T0(i,i.return,s),Vr(i);break;case 27:qo(i.stateNode);case 26:case 5:Ji(i,i.return),Vr(i);break;case 22:i.memoizedState===null&&Vr(i);break;case 30:Vr(i);break;default:Vr(i)}t=t.sibling}}function tr(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:tr(f,m,s),Fo(4,m);break;case 1:if(tr(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(le){cn(l,l.return,le)}if(l=m,f=l.updateQueue,f!==null){var w=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)ug(G[f],w)}catch(le){cn(l,l.return,le)}}s&&E&64&&b0(m),Bo(m,m.return);break;case 27:w0(m);case 26:case 5:tr(f,m,s),s&&l===null&&E&4&&A0(m),Bo(m,m.return);break;case 12:tr(f,m,s);break;case 13:tr(f,m,s),s&&E&4&&L0(f,m);break;case 22:m.memoizedState===null&&tr(f,m,s),Bo(m,m.return);break;case 30:break;default:tr(f,m,s)}i=i.sibling}}function od(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Eo(s))}function ld(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Eo(t))}function $i(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)I0(t,i,s,l),i=i.sibling}function I0(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:$i(t,i,s,l),f&2048&&Fo(9,i);break;case 1:$i(t,i,s,l);break;case 3:$i(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Eo(t)));break;case 12:if(f&2048){$i(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,E=m.id,w=m.onPostCommit;typeof w=="function"&&w(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){cn(i,i.return,G)}}else $i(t,i,s,l);break;case 13:$i(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?$i(t,i,s,l):zo(t,i):m._visibility&2?$i(t,i,s,l):(m._visibility|=2,Es(t,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&od(E,i);break;case 24:$i(t,i,s,l),f&2048&&ld(i.alternate,i);break;default:$i(t,i,s,l)}}function Es(t,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,E=i,w=s,G=l,le=E.flags;switch(E.tag){case 0:case 11:case 15:Es(m,E,w,G,f),Fo(8,E);break;case 23:break;case 22:var ye=E.stateNode;E.memoizedState!==null?ye._visibility&2?Es(m,E,w,G,f):zo(m,E):(ye._visibility|=2,Es(m,E,w,G,f)),f&&le&2048&&od(E.alternate,E);break;case 24:Es(m,E,w,G,f),f&&le&2048&&ld(E.alternate,E);break;default:Es(m,E,w,G,f)}i=i.sibling}}function zo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:zo(s,l),f&2048&&od(l.alternate,l);break;case 24:zo(s,l),f&2048&&ld(l.alternate,l);break;default:zo(s,l)}i=i.sibling}}var Ho=8192;function bs(t){if(t.subtreeFlags&Ho)for(t=t.child;t!==null;)F0(t),t=t.sibling}function F0(t){switch(t.tag){case 26:bs(t),t.flags&Ho&&t.memoizedState!==null&&kM(zi,t.memoizedState,t.memoizedProps);break;case 5:bs(t);break;case 3:case 4:var i=zi;zi=wc(t.stateNode.containerInfo),bs(t),zi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Ho,Ho=16777216,bs(t),Ho=i):bs(t));break;default:bs(t)}}function B0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Vo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];In=l,H0(l,t)}B0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)z0(t),t=t.sibling}function z0(t){switch(t.tag){case 0:case 11:case 15:Vo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Vo(t);break;case 12:Vo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,gc(t)):Vo(t);break;default:Vo(t)}}function gc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];In=l,H0(l,t)}B0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:$a(8,i,i.return),gc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,gc(i));break;default:gc(i)}t=t.sibling}}function H0(t,i){for(;In!==null;){var s=In;switch(s.tag){case 0:case 11:case 15:$a(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Eo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,In=l;else e:for(s=t;In!==null;){l=In;var f=l.sibling,m=l.return;if(N0(l),l===s){In=null;break e}if(f!==null){f.return=m,In=f;break e}In=m}}}var rM={getCacheForType:function(t){var i=jn(Dn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},sM=typeof WeakMap=="function"?WeakMap:Map,$t=0,fn=null,Ut=null,Vt=0,en=0,vi=null,nr=!1,Ts=!1,cd=!1,Ra=0,xn=0,ir=0,Gr=0,ud=0,Di=0,As=0,Go=null,li=null,fd=!1,dd=0,vc=1/0,_c=null,ar=null,Gn=0,rr=null,Rs=null,ws=0,hd=0,pd=null,V0=null,ko=0,md=null;function _i(){if(($t&2)!==0&&Vt!==0)return Vt&-Vt;if(L.T!==null){var t=ms;return t!==0?t:Md()}return V()}function G0(){Di===0&&(Di=(Vt&536870912)===0||Kt?q():536870912);var t=Ci.current;return t!==null&&(t.flags|=32),Di}function xi(t,i,s){(t===fn&&(en===2||en===9)||t.cancelPendingCommit!==null)&&(Cs(t,0),sr(t,Vt,Di,!1)),ke(t,s),(($t&2)===0||t!==fn)&&(t===fn&&(($t&2)===0&&(Gr|=s),xn===4&&sr(t,Vt,Di,!1)),ea(t))}function k0(t,i,s){if(($t&6)!==0)throw Error(r(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Le(t,i),f=l?cM(t,i):_d(t,i,!0),m=l;do{if(f===0){Ts&&!l&&sr(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!oM(s)){f=_d(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var w=t;f=Go;var G=w.current.memoizedState.isDehydrated;if(G&&(Cs(w,E).flags|=256),E=_d(w,E,!1),E!==2){if(cd&&!G){w.errorRecoveryDisabledLanes|=m,Gr|=m,f=4;break e}m=li,li=f,m!==null&&(li===null?li=m:li.push.apply(li,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Cs(t,0),sr(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:sr(l,i,Di,!nr);break e;case 2:li=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=dd+300-zt(),10<f)){if(sr(l,i,Di,!nr),Ke(l,0,!0)!==0)break e;l.timeoutHandle=_v(X0.bind(null,l,s,li,_c,fd,i,Di,Gr,As,nr,m,2,-0,0),f);break e}X0(l,s,li,_c,fd,i,Di,Gr,As,nr,m,0,-0,0)}}break}while(!0);ea(t)}function X0(t,i,s,l,f,m,E,w,G,le,ye,Te,fe,pe){if(t.timeoutHandle=-1,Te=i.subtreeFlags,(Te&8192||(Te&16785408)===16785408)&&(Ko={stylesheets:null,count:0,unsuspend:GM},F0(i),Te=XM(),Te!==null)){t.cancelPendingCommit=Te(Q0.bind(null,t,i,m,s,l,f,E,w,G,ye,1,fe,pe)),sr(t,m,E,!le);return}Q0(t,i,m,s,l,f,E,w,G)}function oM(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!hi(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i,s,l){i&=~ud,i&=~Gr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Ge(f),E=1<<m;l[m]=-1,f&=~E}s!==0&&Ee(t,s,i)}function xc(){return($t&6)===0?(Xo(0),!1):!0}function gd(){if(Ut!==null){if(en===0)var t=Ut.return;else t=Ut,xa=Ir=null,Lf(t),Ss=null,Po=0,t=Ut;for(;t!==null;)E0(t.alternate,t),t=t.return;Ut=null}}function Cs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,TM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),gd(),fn=t,Ut=s=ga(t.current,null),Vt=i,en=0,vi=null,nr=!1,Ts=Le(t,i),cd=!1,As=Di=ud=Gr=ir=xn=0,li=Go=null,fd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Ge(l),m=1<<f;i|=t[f],l&=~m}return Ra=i,Vl(),s}function W0(t,i){Dt=null,L.H=sc,i===To||i===Kl?(i=lg(),en=3):i===rg?(i=lg(),en=4):en=i===c0?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,vi=i,Ut===null&&(xn=1,fc(t,Ti(i,t.current)))}function j0(){var t=L.H;return L.H=sc,t===null?sc:t}function q0(){var t=L.A;return L.A=rM,t}function vd(){xn=4,nr||(Vt&4194048)!==Vt&&Ci.current!==null||(Ts=!0),(ir&134217727)===0&&(Gr&134217727)===0||fn===null||sr(fn,Vt,Di,!1)}function _d(t,i,s){var l=$t;$t|=2;var f=j0(),m=q0();(fn!==t||Vt!==i)&&(_c=null,Cs(t,i)),i=!1;var E=xn;e:do try{if(en!==0&&Ut!==null){var w=Ut,G=vi;switch(en){case 8:gd(),E=6;break e;case 3:case 2:case 9:case 6:Ci.current===null&&(i=!0);var le=en;if(en=0,vi=null,Ds(t,w,G,le),s&&Ts){E=0;break e}break;default:le=en,en=0,vi=null,Ds(t,w,G,le)}}lM(),E=xn;break}catch(ye){W0(t,ye)}while(!0);return i&&t.shellSuspendCounter++,xa=Ir=null,$t=l,L.H=f,L.A=m,Ut===null&&(fn=null,Vt=0,Vl()),E}function lM(){for(;Ut!==null;)Y0(Ut)}function cM(t,i){var s=$t;$t|=2;var l=j0(),f=q0();fn!==t||Vt!==i?(_c=null,vc=zt()+500,Cs(t,i)):Ts=Le(t,i);e:do try{if(en!==0&&Ut!==null){i=Ut;var m=vi;t:switch(en){case 1:en=0,vi=null,Ds(t,i,m,1);break;case 2:case 9:if(sg(m)){en=0,vi=null,Z0(i);break}i=function(){en!==2&&en!==9||fn!==t||(en=7),ea(t)},m.then(i,i);break e;case 3:en=7;break e;case 4:en=5;break e;case 7:sg(m)?(en=0,vi=null,Z0(i)):(en=0,vi=null,Ds(t,i,m,7));break;case 5:var E=null;switch(Ut.tag){case 26:E=Ut.memoizedState;case 5:case 27:var w=Ut;if(!E||Dv(E)){en=0,vi=null;var G=w.sibling;if(G!==null)Ut=G;else{var le=w.return;le!==null?(Ut=le,yc(le)):Ut=null}break t}}en=0,vi=null,Ds(t,i,m,5);break;case 6:en=0,vi=null,Ds(t,i,m,6);break;case 8:gd(),xn=6;break e;default:throw Error(r(462))}}uM();break}catch(ye){W0(t,ye)}while(!0);return xa=Ir=null,L.H=l,L.A=f,$t=s,Ut!==null?0:(fn=null,Vt=0,Vl(),xn)}function uM(){for(;Ut!==null&&!Yt();)Y0(Ut)}function Y0(t){var i=S0(t.alternate,t,Ra);t.memoizedProps=t.pendingProps,i===null?yc(t):Ut=i}function Z0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=m0(s,i,i.pendingProps,i.type,void 0,Vt);break;case 11:i=m0(s,i,i.pendingProps,i.type.render,i.ref,Vt);break;case 5:Lf(i);default:E0(s,i),i=Ut=Km(i,Ra),i=S0(s,i,Ra)}t.memoizedProps=t.pendingProps,i===null?yc(t):Ut=i}function Ds(t,i,s,l){xa=Ir=null,Lf(i),Ss=null,Po=0;var f=i.return;try{if($S(t,f,i,s,Vt)){xn=1,fc(t,Ti(s,t.current)),Ut=null;return}}catch(m){if(f!==null)throw Ut=f,m;xn=1,fc(t,Ti(s,t.current)),Ut=null;return}i.flags&32768?(Kt||l===1?t=!0:Ts||(Vt&536870912)!==0?t=!1:(nr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),K0(i,t)):yc(i)}function yc(t){var i=t;do{if((i.flags&32768)!==0){K0(i,nr);return}t=i.return;var s=tM(i.alternate,i,Ra);if(s!==null){Ut=s;return}if(i=i.sibling,i!==null){Ut=i;return}Ut=i=t}while(i!==null);xn===0&&(xn=5)}function K0(t,i){do{var s=nM(t.alternate,t);if(s!==null){s.flags&=32767,Ut=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Ut=t;return}Ut=t=s}while(t!==null);xn=6,Ut=null}function Q0(t,i,s,l,f,m,E,w,G){t.cancelPendingCommit=null;do Sc();while(Gn!==0);if(($t&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(m=i.lanes|i.childLanes,m|=lf,we(t,s,m,E,w,G),t===fn&&(Ut=fn=null,Vt=0),Rs=i,rr=t,ws=s,hd=m,pd=f,V0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,pM(Gt,function(){return nv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,f=F.p,F.p=2,E=$t,$t|=4;try{iM(t,i,s)}finally{$t=E,F.p=f,L.T=l}}Gn=1,J0(),$0(),ev()}}function J0(){if(Gn===1){Gn=0;var t=rr,i=Rs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=L.T,L.T=null;var l=F.p;F.p=2;var f=$t;$t|=4;try{P0(i,t);var m=Dd,E=Hm(t.containerInfo),w=m.focusedElem,G=m.selectionRange;if(E!==w&&w&&w.ownerDocument&&zm(w.ownerDocument.documentElement,w)){if(G!==null&&nf(w)){var le=G.start,ye=G.end;if(ye===void 0&&(ye=le),"selectionStart"in w)w.selectionStart=le,w.selectionEnd=Math.min(ye,w.value.length);else{var Te=w.ownerDocument||document,fe=Te&&Te.defaultView||window;if(fe.getSelection){var pe=fe.getSelection(),gt=w.textContent.length,ht=Math.min(G.start,gt),rn=G.end===void 0?ht:Math.min(G.end,gt);!pe.extend&&ht>rn&&(E=rn,rn=ht,ht=E);var te=Bm(w,ht),j=Bm(w,rn);if(te&&j&&(pe.rangeCount!==1||pe.anchorNode!==te.node||pe.anchorOffset!==te.offset||pe.focusNode!==j.node||pe.focusOffset!==j.offset)){var se=Te.createRange();se.setStart(te.node,te.offset),pe.removeAllRanges(),ht>rn?(pe.addRange(se),pe.extend(j.node,j.offset)):(se.setEnd(j.node,j.offset),pe.addRange(se))}}}}for(Te=[],pe=w;pe=pe.parentNode;)pe.nodeType===1&&Te.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Te.length;w++){var Me=Te[w];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}Lc=!!Cd,Dd=Cd=null}finally{$t=f,F.p=l,L.T=s}}t.current=i,Gn=2}}function $0(){if(Gn===2){Gn=0;var t=rr,i=Rs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=L.T,L.T=null;var l=F.p;F.p=2;var f=$t;$t|=4;try{D0(t,i.alternate,i)}finally{$t=f,F.p=l,L.T=s}}Gn=3}}function ev(){if(Gn===4||Gn===3){Gn=0,St();var t=rr,i=Rs,s=ws,l=V0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Gn=5:(Gn=0,Rs=rr=null,tv(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ar=null),Xt(s),i=i.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(ge,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=L.T,f=F.p,F.p=2,L.T=null;try{for(var m=t.onRecoverableError,E=0;E<l.length;E++){var w=l[E];m(w.value,{componentStack:w.stack})}}finally{L.T=i,F.p=f}}(ws&3)!==0&&Sc(),ea(t),f=t.pendingLanes,(s&4194090)!==0&&(f&42)!==0?t===md?ko++:(ko=0,md=t):ko=0,Xo(0)}}function tv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Eo(i)))}function Sc(t){return J0(),$0(),ev(),nv()}function nv(){if(Gn!==5)return!1;var t=rr,i=hd;hd=0;var s=Xt(ws),l=L.T,f=F.p;try{F.p=32>s?32:s,L.T=null,s=pd,pd=null;var m=rr,E=ws;if(Gn=0,Rs=rr=null,ws=0,($t&6)!==0)throw Error(r(331));var w=$t;if($t|=4,z0(m.current),I0(m,m.current,E,s),$t=w,Xo(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(ge,m)}catch{}return!0}finally{F.p=f,L.T=l,tv(t,i)}}function iv(t,i,s){i=Ti(s,i),i=qf(t.stateNode,i,2),t=Za(t,i,2),t!==null&&(ke(t,2),ea(t))}function cn(t,i,s){if(t.tag===3)iv(t,t,s);else for(;i!==null;){if(i.tag===3){iv(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=Ti(s,t),s=o0(2),l=Za(i,s,2),l!==null&&(l0(s,l,i,t),ke(l,2),ea(l));break}}i=i.return}}function xd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new sM;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(cd=!0,f.add(s),t=fM.bind(null,t,i,s),i.then(t,t))}function fM(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,fn===t&&(Vt&s)===s&&(xn===4||xn===3&&(Vt&62914560)===Vt&&300>zt()-dd?($t&2)===0&&Cs(t,0):ud|=s,As===Vt&&(As=0)),ea(t)}function av(t,i){i===0&&(i=Ve()),t=fs(t,i),t!==null&&(ke(t,i),ea(t))}function dM(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),av(t,s)}function hM(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),av(t,s)}function pM(t,i){return Ct(t,i)}var Mc=null,Ns=null,yd=!1,Ec=!1,Sd=!1,kr=0;function ea(t){t!==Ns&&t.next===null&&(Ns===null?Mc=Ns=t:Ns=Ns.next=t),Ec=!0,yd||(yd=!0,gM())}function Xo(t,i){if(!Sd&&Ec){Sd=!0;do for(var s=!1,l=Mc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var E=l.suspendedLanes,w=l.pingedLanes;m=(1<<31-Ge(42|t)+1)-1,m&=f&~(E&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,lv(l,m))}else m=Vt,m=Ke(l,l===fn?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Le(l,m)||(s=!0,lv(l,m));l=l.next}while(s);Sd=!1}}function mM(){rv()}function rv(){Ec=yd=!1;var t=0;kr!==0&&(bM()&&(t=kr),kr=0);for(var i=zt(),s=null,l=Mc;l!==null;){var f=l.next,m=sv(l,i);m===0?(l.next=null,s===null?Mc=f:s.next=f,f===null&&(Ns=s)):(s=l,(t!==0||(m&3)!==0)&&(Ec=!0)),l=f}Xo(t)}function sv(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var E=31-Ge(m),w=1<<E,G=f[E];G===-1?((w&s)===0||(w&l)!==0)&&(f[E]=yt(w,i)):G<=i&&(t.expiredLanes|=w),m&=~w}if(i=fn,s=Vt,s=Ke(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(en===2||en===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&bt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Le(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&bt(l),Xt(s)){case 2:case 8:s=Ft;break;case 32:s=Gt;break;case 268435456:s=z;break;default:s=Gt}return l=ov.bind(null,t),s=Ct(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&bt(l),t.callbackPriority=2,t.callbackNode=null,2}function ov(t,i){if(Gn!==0&&Gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Sc()&&t.callbackNode!==s)return null;var l=Vt;return l=Ke(t,t===fn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(k0(t,l,i),sv(t,zt()),t.callbackNode!=null&&t.callbackNode===s?ov.bind(null,t):null)}function lv(t,i){if(Sc())return null;k0(t,i,!0)}function gM(){AM(function(){($t&6)!==0?Ct(hn,mM):rv()})}function Md(){return kr===0&&(kr=q()),kr}function cv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Pl(""+t)}function uv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function vM(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=cv((f[De]||null).action),E=l.submitter;E&&(i=(i=E[De]||null)?cv(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var w=new Bl("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(kr!==0){var G=E?uv(f,E):new FormData(f);Gf(s,{pending:!0,data:G,method:f.method,action:m},null,G)}}else typeof m=="function"&&(w.preventDefault(),G=E?uv(f,E):new FormData(f),Gf(s,{pending:!0,data:G,method:f.method,action:m},m,G))},currentTarget:f}]})}}for(var Ed=0;Ed<of.length;Ed++){var bd=of[Ed],_M=bd.toLowerCase(),xM=bd[0].toUpperCase()+bd.slice(1);Bi(_M,"on"+xM)}Bi(km,"onAnimationEnd"),Bi(Xm,"onAnimationIteration"),Bi(Wm,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(IS,"onTransitionRun"),Bi(FS,"onTransitionStart"),Bi(BS,"onTransitionCancel"),Bi(jm,"onTransitionEnd"),zn("onMouseEnter",["mouseout","mouseover"]),zn("onMouseLeave",["mouseout","mouseover"]),zn("onPointerEnter",["pointerout","pointerover"]),zn("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function fv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var w=l[E],G=w.instance,le=w.currentTarget;if(w=w.listener,G!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=le;try{m(f)}catch(ye){uc(ye)}f.currentTarget=null,m=G}else for(E=0;E<l.length;E++){if(w=l[E],G=w.instance,le=w.currentTarget,w=w.listener,G!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=le;try{m(f)}catch(ye){uc(ye)}f.currentTarget=null,m=G}}}}function Lt(t,i){var s=i[it];s===void 0&&(s=i[it]=new Set);var l=t+"__bubble";s.has(l)||(dv(i,t,2,!1),s.add(l))}function Td(t,i,s){var l=0;i&&(l|=4),dv(s,t,l,i)}var bc="_reactListening"+Math.random().toString(36).slice(2);function Ad(t){if(!t[bc]){t[bc]=!0,Zt.forEach(function(s){s!=="selectionchange"&&(yM.has(s)||Td(s,!1,t),Td(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[bc]||(i[bc]=!0,Td("selectionchange",!1,i))}}function dv(t,i,s,l){switch(Iv(i)){case 2:var f=qM;break;case 8:f=YM;break;default:f=Hd}s=f.bind(null,i,s,t),f=void 0,!qu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Rd(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var w=l.stateNode.containerInfo;if(w===f)break;if(E===4)for(E=l.return;E!==null;){var G=E.tag;if((G===3||G===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;w!==null;){if(E=Mt(w),E===null)return;if(G=E.tag,G===5||G===6||G===26||G===27){l=m=E;continue e}w=w.parentNode}}l=l.return}xm(function(){var le=m,ye=Wu(s),Te=[];e:{var fe=qm.get(t);if(fe!==void 0){var pe=Bl,gt=t;switch(t){case"keypress":if(Il(s)===0)break e;case"keydown":case"keyup":pe=pS;break;case"focusin":gt="focus",pe=Qu;break;case"focusout":gt="blur",pe=Qu;break;case"beforeblur":case"afterblur":pe=Qu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=vS;break;case km:case Xm:case Wm:pe=rS;break;case jm:pe=xS;break;case"scroll":case"scrollend":pe=eS;break;case"wheel":pe=SS;break;case"copy":case"cut":case"paste":pe=oS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=bm;break;case"toggle":case"beforetoggle":pe=ES}var ht=(i&4)!==0,rn=!ht&&(t==="scroll"||t==="scrollend"),te=ht?fe!==null?fe+"Capture":null:fe;ht=[];for(var j=le,se;j!==null;){var Me=j;if(se=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||se===null||te===null||(Me=co(j,te),Me!=null&&ht.push(jo(j,Me,se))),rn)break;j=j.return}0<ht.length&&(fe=new pe(fe,gt,null,s,ye),Te.push({event:fe,listeners:ht}))}}if((i&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",fe&&s!==Xu&&(gt=s.relatedTarget||s.fromElement)&&(Mt(gt)||gt[Qe]))break e;if((pe||fe)&&(fe=ye.window===ye?ye:(fe=ye.ownerDocument)?fe.defaultView||fe.parentWindow:window,pe?(gt=s.relatedTarget||s.toElement,pe=le,gt=gt?Mt(gt):null,gt!==null&&(rn=c(gt),ht=gt.tag,gt!==rn||ht!==5&&ht!==27&&ht!==6)&&(gt=null)):(pe=null,gt=le),pe!==gt)){if(ht=Mm,Me="onMouseLeave",te="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ht=bm,Me="onPointerLeave",te="onPointerEnter",j="pointer"),rn=pe==null?fe:pn(pe),se=gt==null?fe:pn(gt),fe=new ht(Me,j+"leave",pe,s,ye),fe.target=rn,fe.relatedTarget=se,Me=null,Mt(ye)===le&&(ht=new ht(te,j+"enter",gt,s,ye),ht.target=se,ht.relatedTarget=rn,Me=ht),rn=Me,pe&&gt)t:{for(ht=pe,te=gt,j=0,se=ht;se;se=Us(se))j++;for(se=0,Me=te;Me;Me=Us(Me))se++;for(;0<j-se;)ht=Us(ht),j--;for(;0<se-j;)te=Us(te),se--;for(;j--;){if(ht===te||te!==null&&ht===te.alternate)break t;ht=Us(ht),te=Us(te)}ht=null}else ht=null;pe!==null&&hv(Te,fe,pe,ht,!1),gt!==null&&rn!==null&&hv(Te,rn,gt,ht,!0)}}e:{if(fe=le?pn(le):window,pe=fe.nodeName&&fe.nodeName.toLowerCase(),pe==="select"||pe==="input"&&fe.type==="file")var tt=Um;else if(Dm(fe))if(Lm)tt=LS;else{tt=NS;var Nt=DS}else pe=fe.nodeName,!pe||pe.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?le&&Rr(le.elementType)&&(tt=Um):tt=US;if(tt&&(tt=tt(t,le))){Nm(Te,tt,s,ye);break e}Nt&&Nt(t,fe,le),t==="focusout"&&le&&fe.type==="number"&&le.memoizedProps.value!=null&&Zi(fe,"number",fe.value)}switch(Nt=le?pn(le):window,t){case"focusin":(Dm(Nt)||Nt.contentEditable==="true")&&(ls=Nt,af=le,_o=null);break;case"focusout":_o=af=ls=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,Vm(Te,s,ye);break;case"selectionchange":if(OS)break;case"keydown":case"keyup":Vm(Te,s,ye)}var ot;if($u)e:{switch(t){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else os?wm(t,s)&&(mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(mt="onCompositionStart");mt&&(Tm&&s.locale!=="ko"&&(os||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&os&&(ot=ym()):(Wa=ye,Yu="value"in Wa?Wa.value:Wa.textContent,os=!0)),Nt=Tc(le,mt),0<Nt.length&&(mt=new Em(mt,t,null,s,ye),Te.push({event:mt,listeners:Nt}),ot?mt.data=ot:(ot=Cm(s),ot!==null&&(mt.data=ot)))),(ot=TS?AS(t,s):RS(t,s))&&(mt=Tc(le,"onBeforeInput"),0<mt.length&&(Nt=new Em("onBeforeInput","beforeinput",null,s,ye),Te.push({event:Nt,listeners:mt}),Nt.data=ot)),vM(Te,t,le,s,ye)}fv(Te,i)})}function jo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Tc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=co(t,s),f!=null&&l.unshift(jo(t,f,m)),f=co(t,i),f!=null&&l.push(jo(t,f,m))),t.tag===3)return l;t=t.return}return[]}function Us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function hv(t,i,s,l,f){for(var m=i._reactName,E=[];s!==null&&s!==l;){var w=s,G=w.alternate,le=w.stateNode;if(w=w.tag,G!==null&&G===l)break;w!==5&&w!==26&&w!==27||le===null||(G=le,f?(le=co(s,m),le!=null&&E.unshift(jo(s,le,G))):f||(le=co(s,m),le!=null&&E.push(jo(s,le,G)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var SM=/\r\n?/g,MM=/\u0000|\uFFFD/g;function pv(t){return(typeof t=="string"?t:""+t).replace(SM,`
`).replace(MM,"")}function mv(t,i){return i=pv(i),pv(t)===i}function Ac(){}function an(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Sn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Sn(t,""+l);break;case"className":he(t,"class",l);break;case"tabIndex":he(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":he(t,s,l);break;case"style":Hn(t,l,m);break;case"data":if(i!=="object"){he(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Pl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&an(t,i,"name",f.name,f,null),an(t,i,"formEncType",f.formEncType,f,null),an(t,i,"formMethod",f.formMethod,f,null),an(t,i,"formTarget",f.formTarget,f,null)):(an(t,i,"encType",f.encType,f,null),an(t,i,"method",f.method,f,null),an(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Pl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Ac);break;case"onScroll":l!=null&&Lt("scroll",t);break;case"onScrollEnd":l!=null&&Lt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Pl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Lt("beforetoggle",t),Lt("toggle",t),J(t,"popover",l);break;case"xlinkActuate":$(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":$(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":$(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":$(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":$(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":$(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":$(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":$(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":$(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":J(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=pa.get(s)||s,J(t,s,l))}}function wd(t,i,s,l,f,m){switch(s){case"style":Hn(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Sn(t,l):(typeof l=="number"||typeof l=="bigint")&&Sn(t,""+l);break;case"onScroll":l!=null&&Lt("scroll",t);break;case"onScrollEnd":l!=null&&Lt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ac);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bi.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[De]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):J(t,s,l)}}}function kn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Lt("error",t),Lt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:an(t,i,m,E,s,null)}}f&&an(t,i,"srcSet",s.srcSet,s,null),l&&an(t,i,"src",s.src,s,null);return;case"input":Lt("invalid",t);var w=m=E=f=null,G=null,le=null;for(l in s)if(s.hasOwnProperty(l)){var ye=s[l];if(ye!=null)switch(l){case"name":f=ye;break;case"type":E=ye;break;case"checked":G=ye;break;case"defaultChecked":le=ye;break;case"value":m=ye;break;case"defaultValue":w=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(r(137,i));break;default:an(t,i,l,ye,s,null)}}Wn(t,m,w,G,le,E,f,!1),ln(t);return;case"select":Lt("invalid",t),l=E=m=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":m=w;break;case"defaultValue":E=w;break;case"multiple":l=w;default:an(t,i,f,w,s,null)}i=m,s=E,t.multiple=!!l,i!=null?Tn(t,!!l,i,!1):s!=null&&Tn(t,!!l,s,!0);return;case"textarea":Lt("invalid",t),m=f=l=null;for(E in s)if(s.hasOwnProperty(E)&&(w=s[E],w!=null))switch(E){case"value":l=w;break;case"defaultValue":f=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:an(t,i,E,w,s,null)}Jt(t,l,f,m),ln(t);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:an(t,i,G,l,s,null)}return;case"dialog":Lt("beforetoggle",t),Lt("toggle",t),Lt("cancel",t),Lt("close",t);break;case"iframe":case"object":Lt("load",t);break;case"video":case"audio":for(l=0;l<Wo.length;l++)Lt(Wo[l],t);break;case"image":Lt("error",t),Lt("load",t);break;case"details":Lt("toggle",t);break;case"embed":case"source":case"link":Lt("error",t),Lt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in s)if(s.hasOwnProperty(le)&&(l=s[le],l!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:an(t,i,le,l,s,null)}return;default:if(Rr(i)){for(ye in s)s.hasOwnProperty(ye)&&(l=s[ye],l!==void 0&&wd(t,i,ye,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&an(t,i,w,l,s,null))}function EM(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,w=null,G=null,le=null,ye=null;for(pe in s){var Te=s[pe];if(s.hasOwnProperty(pe)&&Te!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":G=Te;default:l.hasOwnProperty(pe)||an(t,i,pe,null,l,Te)}}for(var fe in l){var pe=l[fe];if(Te=s[fe],l.hasOwnProperty(fe)&&(pe!=null||Te!=null))switch(fe){case"type":m=pe;break;case"name":f=pe;break;case"checked":le=pe;break;case"defaultChecked":ye=pe;break;case"value":E=pe;break;case"defaultValue":w=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,i));break;default:pe!==Te&&an(t,i,fe,pe,l,Te)}}Ot(t,E,w,G,le,ye,m,f);return;case"select":pe=E=w=fe=null;for(m in s)if(G=s[m],s.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":pe=G;default:l.hasOwnProperty(m)||an(t,i,m,null,l,G)}for(f in l)if(m=l[f],G=s[f],l.hasOwnProperty(f)&&(m!=null||G!=null))switch(f){case"value":fe=m;break;case"defaultValue":w=m;break;case"multiple":E=m;default:m!==G&&an(t,i,f,m,l,G)}i=w,s=E,l=pe,fe!=null?Tn(t,!!s,fe,!1):!!l!=!!s&&(i!=null?Tn(t,!!s,i,!0):Tn(t,!!s,s?[]:"",!1));return;case"textarea":pe=fe=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:an(t,i,w,null,l,f)}for(E in l)if(f=l[E],m=s[E],l.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":fe=f;break;case"defaultValue":pe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&an(t,i,E,f,l,m)}Xa(t,fe,pe);return;case"option":for(var gt in s)if(fe=s[gt],s.hasOwnProperty(gt)&&fe!=null&&!l.hasOwnProperty(gt))switch(gt){case"selected":t.selected=!1;break;default:an(t,i,gt,null,l,fe)}for(G in l)if(fe=l[G],pe=s[G],l.hasOwnProperty(G)&&fe!==pe&&(fe!=null||pe!=null))switch(G){case"selected":t.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:an(t,i,G,fe,l,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in s)fe=s[ht],s.hasOwnProperty(ht)&&fe!=null&&!l.hasOwnProperty(ht)&&an(t,i,ht,null,l,fe);for(le in l)if(fe=l[le],pe=s[le],l.hasOwnProperty(le)&&fe!==pe&&(fe!=null||pe!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,i));break;default:an(t,i,le,fe,l,pe)}return;default:if(Rr(i)){for(var rn in s)fe=s[rn],s.hasOwnProperty(rn)&&fe!==void 0&&!l.hasOwnProperty(rn)&&wd(t,i,rn,void 0,l,fe);for(ye in l)fe=l[ye],pe=s[ye],!l.hasOwnProperty(ye)||fe===pe||fe===void 0&&pe===void 0||wd(t,i,ye,fe,l,pe);return}}for(var te in s)fe=s[te],s.hasOwnProperty(te)&&fe!=null&&!l.hasOwnProperty(te)&&an(t,i,te,null,l,fe);for(Te in l)fe=l[Te],pe=s[Te],!l.hasOwnProperty(Te)||fe===pe||fe==null&&pe==null||an(t,i,Te,fe,l,pe)}var Cd=null,Dd=null;function Rc(t){return t.nodeType===9?t:t.ownerDocument}function gv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Nd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ud=null;function bM(){var t=window.event;return t&&t.type==="popstate"?t===Ud?!1:(Ud=t,!0):(Ud=null,!1)}var _v=typeof setTimeout=="function"?setTimeout:void 0,TM=typeof clearTimeout=="function"?clearTimeout:void 0,xv=typeof Promise=="function"?Promise:void 0,AM=typeof queueMicrotask=="function"?queueMicrotask:typeof xv<"u"?function(t){return xv.resolve(null).then(t).catch(RM)}:_v;function RM(t){setTimeout(function(){throw t})}function or(t){return t==="head"}function yv(t,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var E=t.ownerDocument;if(s&1&&qo(E.documentElement),s&2&&qo(E.body),s&4)for(s=E.head,qo(s),E=s.firstChild;E;){var w=E.nextSibling,G=E.nodeName;E[Je]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=w}}if(f===0){t.removeChild(m),tl(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);tl(i)}function Ld(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ld(s),at(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function wM(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Je])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Hi(t.nextSibling),t===null)break}return null}function CM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Hi(t.nextSibling),t===null))return null;return t}function Pd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function DM(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Hi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Od=null;function Sv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function Mv(t,i,s){switch(i=Rc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function qo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);at(t)}var Ni=new Map,Ev=new Set;function wc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wa=F.d;F.d={f:NM,r:UM,D:LM,C:PM,L:OM,m:IM,X:BM,S:FM,M:zM};function NM(){var t=wa.f(),i=xc();return t||i}function UM(t){var i=Ht(t);i!==null&&i.tag===5&&i.type==="form"?kg(i):wa.r(t)}var Ls=typeof document>"u"?null:document;function bv(t,i,s){var l=Ls;if(l&&typeof i=="string"&&i){var f=Et(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Ev.has(f)||(Ev.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),kn(i,"link",t),_t(i),l.head.appendChild(i)))}}function LM(t){wa.D(t),bv("dns-prefetch",t,null)}function PM(t,i){wa.C(t,i),bv("preconnect",t,i)}function OM(t,i,s){wa.L(t,i,s);var l=Ls;if(l&&t&&i){var f='link[rel="preload"][as="'+Et(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Et(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Et(s.imageSizes)+'"]')):f+='[href="'+Et(t)+'"]';var m=f;switch(i){case"style":m=Ps(t);break;case"script":m=Os(t)}Ni.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ni.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Yo(m))||i==="script"&&l.querySelector(Zo(m))||(i=l.createElement("link"),kn(i,"link",t),_t(i),l.head.appendChild(i)))}}function IM(t,i){wa.m(t,i);var s=Ls;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Et(l)+'"][href="'+Et(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Os(t)}if(!Ni.has(m)&&(t=g({rel:"modulepreload",href:t},i),Ni.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Zo(m)))return}l=s.createElement("link"),kn(l,"link",t),_t(l),s.head.appendChild(l)}}}function FM(t,i,s){wa.S(t,i,s);var l=Ls;if(l&&t){var f=on(l).hoistableStyles,m=Ps(t);i=i||"default";var E=f.get(m);if(!E){var w={loading:0,preload:null};if(E=l.querySelector(Yo(m)))w.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ni.get(m))&&Id(t,s);var G=E=l.createElement("link");_t(G),kn(G,"link",t),G._p=new Promise(function(le,ye){G.onload=le,G.onerror=ye}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Cc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:w},f.set(m,E)}}}function BM(t,i){wa.X(t,i);var s=Ls;if(s&&t){var l=on(s).hoistableScripts,f=Os(t),m=l.get(f);m||(m=s.querySelector(Zo(f)),m||(t=g({src:t,async:!0},i),(i=Ni.get(f))&&Fd(t,i),m=s.createElement("script"),_t(m),kn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function zM(t,i){wa.M(t,i);var s=Ls;if(s&&t){var l=on(s).hoistableScripts,f=Os(t),m=l.get(f);m||(m=s.querySelector(Zo(f)),m||(t=g({src:t,async:!0,type:"module"},i),(i=Ni.get(f))&&Fd(t,i),m=s.createElement("script"),_t(m),kn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Tv(t,i,s,l){var f=(f=ae.current)?wc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ps(s.href),s=on(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ps(s.href);var m=on(f).hoistableStyles,E=m.get(t);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,E),(m=f.querySelector(Yo(t)))&&!m._p&&(E.instance=m,E.state.loading=5),Ni.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ni.set(t,s),m||HM(f,t,s,E.state))),i&&l===null)throw Error(r(528,""));return E}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Os(s),s=on(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ps(t){return'href="'+Et(t)+'"'}function Yo(t){return'link[rel="stylesheet"]['+t+"]"}function Av(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function HM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),kn(i,"link",s),_t(i),t.head.appendChild(i))}function Os(t){return'[src="'+Et(t)+'"]'}function Zo(t){return"script[async]"+t}function Rv(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Et(s.href)+'"]');if(l)return i.instance=l,_t(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),_t(l),kn(l,"style",f),Cc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Ps(s.href);var m=t.querySelector(Yo(f));if(m)return i.state.loading|=4,i.instance=m,_t(m),m;l=Av(s),(f=Ni.get(f))&&Id(l,f),m=(t.ownerDocument||t).createElement("link"),_t(m);var E=m;return E._p=new Promise(function(w,G){E.onload=w,E.onerror=G}),kn(m,"link",l),i.state.loading|=4,Cc(m,s.precedence,t),i.instance=m;case"script":return m=Os(s.src),(f=t.querySelector(Zo(m)))?(i.instance=f,_t(f),f):(l=s,(f=Ni.get(m))&&(l=g({},s),Fd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),_t(f),kn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Cc(l,s.precedence,t));return i.instance}function Cc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,E=0;E<l.length;E++){var w=l[E];if(w.dataset.precedence===i)m=w;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Id(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Fd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Dc=null;function wv(t,i,s){if(Dc===null){var l=new Map,f=Dc=new Map;f.set(s,l)}else f=Dc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Je]||m[Ae]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=t+E;var w=l.get(E);w?w.push(m):l.set(E,[m])}}return l}function Cv(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function VM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Dv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ko=null;function GM(){}function kM(t,i,s){if(Ko===null)throw Error(r(475));var l=Ko;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Ps(s.href),m=t.querySelector(Yo(f));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Nc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,_t(m);return}m=t.ownerDocument||t,s=Av(s),(f=Ni.get(f))&&Id(s,f),m=m.createElement("link"),_t(m);var E=m;E._p=new Promise(function(w,G){E.onload=w,E.onerror=G}),kn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Nc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function XM(){if(Ko===null)throw Error(r(475));var t=Ko;return t.stylesheets&&t.count===0&&Bd(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&Bd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function Nc(){if(this.count--,this.count===0){if(this.stylesheets)Bd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uc=null;function Bd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uc=new Map,i.forEach(WM,t),Uc=null,Nc.call(t))}function WM(t,i){if(!(i.state.loading&4)){var s=Uc.get(t);if(s)var l=s.get(null);else{s=new Map,Uc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,f),s.set(E,f),this.count++,l=Nc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Qo={$$typeof:C,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function jM(t,i,s,l,f,m,E,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Nv(t,i,s,l,f,m,E,w,G,le,ye,Te){return t=new jM(t,i,s,E,w,G,le,Te),i=1,m===!0&&(i|=24),m=pi(3,null,null,i),t.current=m,m.stateNode=t,i=xf(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Ef(m),t}function Uv(t){return t?(t=ds,t):ds}function Lv(t,i,s,l,f,m){f=Uv(f),l.context===null?l.context=f:l.pendingContext=f,l=Ya(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Za(t,l,i),s!==null&&(xi(s,t,i),Ro(s,t,i))}function Pv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function zd(t,i){Pv(t,i),(t=t.alternate)&&Pv(t,i)}function Ov(t){if(t.tag===13){var i=fs(t,67108864);i!==null&&xi(i,t,67108864),zd(t,67108864)}}var Lc=!0;function qM(t,i,s,l){var f=L.T;L.T=null;var m=F.p;try{F.p=2,Hd(t,i,s,l)}finally{F.p=m,L.T=f}}function YM(t,i,s,l){var f=L.T;L.T=null;var m=F.p;try{F.p=8,Hd(t,i,s,l)}finally{F.p=m,L.T=f}}function Hd(t,i,s,l){if(Lc){var f=Vd(l);if(f===null)Rd(t,i,l,Pc,s),Fv(t,l);else if(KM(f,t,i,s,l))l.stopPropagation();else if(Fv(t,l),i&4&&-1<ZM.indexOf(t)){for(;f!==null;){var m=Ht(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=We(m.pendingLanes);if(E!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var G=1<<31-Ge(E);w.entanglements[1]|=G,E&=~G}ea(m),($t&6)===0&&(vc=zt()+500,Xo(0))}}break;case 13:w=fs(m,2),w!==null&&xi(w,m,2),xc(),zd(m,2)}if(m=Vd(l),m===null&&Rd(t,i,l,Pc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Rd(t,i,l,null,s)}}function Vd(t){return t=Wu(t),Gd(t)}var Pc=null;function Gd(t){if(Pc=null,t=Mt(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Pc=t,null}function Iv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case hn:return 2;case Ft:return 8;case Gt:case Ye:return 32;case z:return 268435456;default:return 32}default:return 32}}var kd=!1,lr=null,cr=null,ur=null,Jo=new Map,$o=new Map,fr=[],ZM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fv(t,i){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(i.pointerId)}}function el(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ht(i),i!==null&&Ov(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function KM(t,i,s,l,f){switch(i){case"focusin":return lr=el(lr,t,i,s,l,f),!0;case"dragenter":return cr=el(cr,t,i,s,l,f),!0;case"mouseover":return ur=el(ur,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return Jo.set(m,el(Jo.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,$o.set(m,el($o.get(m)||null,t,i,s,l,f)),!0}return!1}function Bv(t){var i=Mt(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,ie(t.priority,function(){if(s.tag===13){var l=_i();l=pt(l);var f=fs(s,l);f!==null&&xi(f,s,l),zd(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Vd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Xu=l,s.target.dispatchEvent(l),Xu=null}else return i=Ht(s),i!==null&&Ov(i),t.blockedOn=s,!1;i.shift()}return!0}function zv(t,i,s){Oc(t)&&s.delete(i)}function QM(){kd=!1,lr!==null&&Oc(lr)&&(lr=null),cr!==null&&Oc(cr)&&(cr=null),ur!==null&&Oc(ur)&&(ur=null),Jo.forEach(zv),$o.forEach(zv)}function Ic(t,i){t.blockedOn===i&&(t.blockedOn=null,kd||(kd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,QM)))}var Fc=null;function Hv(t){Fc!==t&&(Fc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Fc===t&&(Fc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Gd(l||s)===null)continue;break}var m=Ht(s);m!==null&&(t.splice(i,3),i-=3,Gf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function tl(t){function i(G){return Ic(G,t)}lr!==null&&Ic(lr,t),cr!==null&&Ic(cr,t),ur!==null&&Ic(ur,t),Jo.forEach(i),$o.forEach(i);for(var s=0;s<fr.length;s++){var l=fr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<fr.length&&(s=fr[0],s.blockedOn===null);)Bv(s),s.blockedOn===null&&fr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],E=f[De]||null;if(typeof m=="function")E||Hv(s);else if(E){var w=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[De]||null)w=E.formAction;else if(Gd(f)!==null)continue}else w=E.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),Hv(s)}}}function Xd(t){this._internalRoot=t}Bc.prototype.render=Xd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=_i();Lv(s,l,t,i,null,null)},Bc.prototype.unmount=Xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lv(t.current,2,null,t,null,null),xc(),i[Qe]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var i=V();t={blockedOn:null,target:t,priority:i};for(var s=0;s<fr.length&&i!==0&&i<fr[s].priority;s++);fr.splice(s,0,t),s===0&&Bv(t)}};var Vv=e.version;if(Vv!=="19.1.1")throw Error(r(527,Vv,"19.1.1"));F.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(i),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var JM={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{ge=zc.inject(JM),_e=zc}catch{}}return il.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=i0,m=a0,E=r0,w=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=Nv(t,1,!1,null,null,s,l,f,m,E,w,null),t[Qe]=i.current,Ad(t),new Xd(i)},il.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",m=i0,E=a0,w=r0,G=null,le=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(G=s.unstable_transitionCallbacks),s.formState!==void 0&&(le=s.formState)),i=Nv(t,1,!0,i,s??null,l,f,m,E,w,G,le),i.context=Uv(null),s=i.current,l=_i(),l=pt(l),f=Ya(l),f.callback=null,Za(s,f,l),s=l,i.current.lanes=s,ke(i,s),ea(i),t[Qe]=i.current,Ad(t),new Bc(i)},il.version="19.1.1",il}var Qv;function lE(){if(Qv)return qd.exports;Qv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),qd.exports=oE(),qd.exports}var cE=lE();const uE=Ax(cE);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var wx=a=>{throw TypeError(a)},fE=(a,e,n)=>e.has(a)||wx("Cannot "+n),Qd=(a,e,n)=>(fE(a,e,"read from private field"),n?n.call(a):e.get(a)),dE=(a,e,n)=>e.has(a)?wx("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,n),Jv="popstate";function hE(a={}){function e(r,o){let{pathname:c,search:u,hash:h}=r.location;return xl("",{pathname:c,search:u,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:br(o)}return mE(e,n,null,a)}function Pt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Cn(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pE(){return Math.random().toString(36).substring(2,10)}function $v(a,e){return{usr:a.state,key:a.key,idx:e}}function xl(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Ar(e):e,state:n,key:e&&e.key||r||pE()}}function br({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function Ar(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function mE(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,u=o.history,h="POP",d=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function v(){h="POP";let S=g(),x=S==null?null:S-p;p=S,d&&d({action:h,location:b.location,delta:x})}function _(S,x){h="PUSH";let U=xl(b.location,S,x);p=g()+1;let C=$v(U,p),I=b.createHref(U);try{u.pushState(C,"",I)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(I)}c&&d&&d({action:h,location:b.location,delta:1})}function y(S,x){h="REPLACE";let U=xl(b.location,S,x);p=g();let C=$v(U,p),I=b.createHref(U);u.replaceState(C,"",I),c&&d&&d({action:h,location:b.location,delta:0})}function M(S){return Cx(S)}let b={get action(){return h},get location(){return a(o,u)},listen(S){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(Jv,v),d=S,()=>{o.removeEventListener(Jv,v),d=null}},createHref(S){return e(o,S)},createURL:M,encodeLocation(S){let x=M(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:y,go(S){return u.go(S)}};return b}function Cx(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Pt(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:br(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}var ml,e_=class{constructor(a){if(dE(this,ml,new Map),a)for(let[e,n]of a)this.set(e,n)}get(a){if(Qd(this,ml).has(a))return Qd(this,ml).get(a);if(a.defaultValue!==void 0)return a.defaultValue;throw new Error("No value found for context")}set(a,e){Qd(this,ml).set(a,e)}};ml=new WeakMap;var gE=new Set(["lazy","caseSensitive","path","id","index","children"]);function vE(a){return gE.has(a)}var _E=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function xE(a){return _E.has(a)}function yE(a){return a.index===!0}function yl(a,e,n=[],r={},o=!1){return a.map((c,u)=>{let h=[...n,String(u)],d=typeof c.id=="string"?c.id:h.join("-");if(Pt(c.index!==!0||!c.children,"Cannot specify children on an index route"),Pt(o||!r[d],`Found a route id collision on id "${d}".  Route id's must be globally unique within Data Router usages`),yE(c)){let p={...c,...e(c),id:d};return r[d]=p,p}else{let p={...c,...e(c),id:d,children:void 0};return r[d]=p,c.children&&(p.children=yl(c.children,e,h,r,o)),p}})}function yr(a,e,n="/"){return du(a,e,n,!1)}function du(a,e,n,r){let o=typeof e=="string"?Ar(e):e,c=Fi(o.pathname||"/",n);if(c==null)return null;let u=Dx(a);ME(u);let h=null;for(let d=0;h==null&&d<u.length;++d){let p=LE(c);h=NE(u[d],p,r)}return h}function SE(a,e){let{route:n,pathname:r,params:o}=a;return{id:n.id,pathname:r,params:o,data:e[n.id],loaderData:e[n.id],handle:n.handle}}function Dx(a,e=[],n=[],r=""){let o=(c,u,h)=>{let d={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:u,route:c};d.relativePath.startsWith("/")&&(Pt(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length));let p=la([r,d.relativePath]),g=n.concat(d);c.children&&c.children.length>0&&(Pt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Dx(c.children,e,g,p)),!(c.path==null&&!c.index)&&e.push({path:p,score:CE(p,c.index),routesMeta:g})};return a.forEach((c,u)=>{if(c.path===""||!c.path?.includes("?"))o(c,u);else for(let h of Nx(c.path))o(c,u,h)}),e}function Nx(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let u=Nx(r.join("/")),h=[];return h.push(...u.map(d=>d===""?c:[c,d].join("/"))),o&&h.push(...u),h.map(d=>a.startsWith("/")&&d===""?"/":d)}function ME(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:DE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var EE=/^:[\w-]+$/,bE=3,TE=2,AE=1,RE=10,wE=-2,t_=a=>a==="*";function CE(a,e){let n=a.split("/"),r=n.length;return n.some(t_)&&(r+=wE),e&&(r+=TE),n.filter(o=>!t_(o)).reduce((o,c)=>o+(EE.test(c)?bE:c===""?AE:RE),r)}function DE(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function NE(a,e,n=!1){let{routesMeta:r}=a,o={},c="/",u=[];for(let h=0;h<r.length;++h){let d=r[h],p=h===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",v=bu({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},g),_=d.route;if(!v&&p&&n&&!r[r.length-1].route.index&&(v=bu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:la([c,v.pathname]),pathnameBase:FE(la([c,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(c=la([c,v.pathnameBase]))}return u}function bu(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=UE(a.path,a.caseSensitive,a.end),o=e.match(n);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},_)=>{if(g==="*"){let M=h[_]||"";u=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const y=h[_];return v&&!y?p[g]=void 0:p[g]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:u,pattern:a}}function UE(a,e=!1,n=!0){Cn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,d)=>(r.push({paramName:h,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function LE(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Cn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Fi(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function PE({basename:a,pathname:e}){return e==="/"?a:la([a,e])}function OE(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?Ar(a):a;return{pathname:n?n.startsWith("/")?n:IE(n,e):e,search:BE(r),hash:zE(o)}}function IE(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Jd(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ux(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function zp(a){let e=Ux(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Hp(a,e,n,r=!1){let o;typeof a=="string"?o=Ar(a):(o={...a},Pt(!o.pathname||!o.pathname.includes("?"),Jd("?","pathname","search",o)),Pt(!o.pathname||!o.pathname.includes("#"),Jd("#","pathname","hash",o)),Pt(!o.search||!o.search.includes("#"),Jd("#","search","hash",o)));let c=a===""||o.pathname==="",u=c?"/":o.pathname,h;if(u==null)h=n;else{let v=e.length-1;if(!r&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),v-=1;o.pathname=_.join("/")}h=v>=0?e[v]:"/"}let d=OE(o,h),p=u&&u!=="/"&&u.endsWith("/"),g=(c||u===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(p||g)&&(d.pathname+="/"),d}var la=a=>a.join("/").replace(/\/\/+/g,"/"),FE=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),BE=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,zE=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Tu=class{constructor(a,e,n,r=!1){this.status=a,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Sl(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Lx=["POST","PUT","PATCH","DELETE"],HE=new Set(Lx),VE=["GET",...Lx],GE=new Set(VE),kE=new Set([301,302,303,307,308]),XE=new Set([307,308]),$d={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},WE={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},al={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},jE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vp=a=>jE.test(a),qE=a=>({hasErrorBoundary:!!a.hasErrorBoundary}),Px="remix-router-transitions",Ox=Symbol("ResetLoaderData");function YE(a){const e=a.window?a.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u";Pt(a.routes.length>0,"You must provide a non-empty routes array to createRouter");let r=a.hydrationRouteProperties||[],o=a.mapRouteProperties||qE,c={},u=yl(a.routes,o,void 0,c),h,d=a.basename||"/",p=a.dataStrategy||$E,g={unstable_middleware:!1,...a.future},v=null,_=new Set,y=null,M=null,b=null,S=a.hydrationData!=null,x=yr(u,a.history.location,d),U=!1,C=null,I;if(x==null&&!a.patchRoutesOnNavigation){let V=Li(404,{pathname:a.history.location.pathname}),{matches:ie,route:ue}=h_(u);I=!0,x=ie,C={[ue.id]:V}}else if(x&&!a.hydrationData&&Ee(x,u,a.history.location.pathname).active&&(x=null),x)if(x.some(V=>V.route.lazy))I=!1;else if(!x.some(V=>V.route.loader))I=!0;else{let V=a.hydrationData?a.hydrationData.loaderData:null,ie=a.hydrationData?a.hydrationData.errors:null;if(ie){let ue=x.findIndex(Ae=>ie[Ae.route.id]!==void 0);I=x.slice(0,ue+1).every(Ae=>!Fh(Ae.route,V,ie))}else I=x.every(ue=>!Fh(ue.route,V,ie))}else{I=!1,x=[];let V=Ee(null,u,a.history.location.pathname);V.active&&V.matches&&(U=!0,x=V.matches)}let O,R={historyAction:a.history.action,location:a.history.location,matches:x,initialized:I,navigation:$d,restoreScrollPosition:a.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:a.hydrationData&&a.hydrationData.loaderData||{},actionData:a.hydrationData&&a.hydrationData.actionData||null,errors:a.hydrationData&&a.hydrationData.errors||C,fetchers:new Map,blockers:new Map},H="POP",X=!1,A,D=!1,k=new Map,ne=null,Z=!1,ce=!1,re=new Set,L=new Map,F=0,Y=-1,xe=new Map,P=new Set,K=new Map,Se=new Map,ve=new Set,Oe=new Map,Ze,ae=null;function be(){if(v=a.history.listen(({action:V,location:ie,delta:ue})=>{if(Ze){Ze(),Ze=void 0;return}Cn(Oe.size===0||ue!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Ae=yt({currentLocation:R.location,nextLocation:ie,historyAction:V});if(Ae&&ue!=null){let De=new Promise(Qe=>{Ze=Qe});a.history.go(ue*-1),Le(Ae,{state:"blocked",location:ie,proceed(){Le(Ae,{state:"proceeding",proceed:void 0,reset:void 0,location:ie}),De.then(()=>a.history.go(ue))},reset(){let Qe=new Map(R.blockers);Qe.set(Ae,al),ze({blockers:Qe})}});return}return bt(V,ie)}),n){ub(e,k);let V=()=>fb(e,k);e.addEventListener("pagehide",V),ne=()=>e.removeEventListener("pagehide",V)}return R.initialized||bt("POP",R.location,{initialHydration:!0}),O}function Ue(){v&&v(),ne&&ne(),_.clear(),A&&A.abort(),R.fetchers.forEach((V,ie)=>Ge(ie)),R.blockers.forEach((V,ie)=>Ke(ie))}function ft(V){return _.add(V),()=>_.delete(V)}function ze(V,ie={}){V.matches&&(V.matches=V.matches.map(De=>{let Qe=c[De.route.id],it=De.route;return it.element!==Qe.element||it.errorElement!==Qe.errorElement||it.hydrateFallbackElement!==Qe.hydrateFallbackElement?{...De,route:Qe}:De})),R={...R,...V};let ue=[],Ae=[];R.fetchers.forEach((De,Qe)=>{De.state==="idle"&&(ve.has(Qe)?ue.push(Qe):Ae.push(Qe))}),ve.forEach(De=>{!R.fetchers.has(De)&&!L.has(De)&&ue.push(De)}),[..._].forEach(De=>De(R,{deletedFetchers:ue,viewTransitionOpts:ie.viewTransitionOpts,flushSync:ie.flushSync===!0})),ue.forEach(De=>Ge(De)),Ae.forEach(De=>R.fetchers.delete(De))}function xt(V,ie,{flushSync:ue}={}){let Ae=R.actionData!=null&&R.navigation.formMethod!=null&&ui(R.navigation.formMethod)&&R.navigation.state==="loading"&&V.state?._isRedirect!==!0,De;ie.actionData?Object.keys(ie.actionData).length>0?De=ie.actionData:De=null:Ae?De=R.actionData:De=null;let Qe=ie.loaderData?f_(R.loaderData,ie.loaderData,ie.matches||[],ie.errors):R.loaderData,it=R.blockers;it.size>0&&(it=new Map(it),it.forEach((Je,at)=>it.set(at,al)));let et=Z?!1:we(V,ie.matches||R.matches),rt=X===!0||R.navigation.formMethod!=null&&ui(R.navigation.formMethod)&&V.state?._isRedirect!==!0;h&&(u=h,h=void 0),Z||H==="POP"||(H==="PUSH"?a.history.push(V,V.state):H==="REPLACE"&&a.history.replace(V,V.state));let st;if(H==="POP"){let Je=k.get(R.location.pathname);Je&&Je.has(V.pathname)?st={currentLocation:R.location,nextLocation:V}:k.has(V.pathname)&&(st={currentLocation:V,nextLocation:R.location})}else if(D){let Je=k.get(R.location.pathname);Je?Je.add(V.pathname):(Je=new Set([V.pathname]),k.set(R.location.pathname,Je)),st={currentLocation:R.location,nextLocation:V}}ze({...ie,actionData:De,loaderData:Qe,historyAction:H,location:V,initialized:!0,navigation:$d,revalidation:"idle",restoreScrollPosition:et,preventScrollReset:rt,blockers:it},{viewTransitionOpts:st,flushSync:ue===!0}),H="POP",X=!1,D=!1,Z=!1,ce=!1,ae?.resolve(),ae=null}async function dn(V,ie){if(typeof V=="number"){a.history.go(V);return}let ue=Ih(R.location,R.matches,d,V,ie?.fromRouteId,ie?.relative),{path:Ae,submission:De,error:Qe}=n_(!1,ue,ie),it=R.location,et=xl(R.location,Ae,ie&&ie.state);et={...et,...a.history.encodeLocation(et)};let rt=ie&&ie.replace!=null?ie.replace:void 0,st="PUSH";rt===!0?st="REPLACE":rt===!1||De!=null&&ui(De.formMethod)&&De.formAction===R.location.pathname+R.location.search&&(st="REPLACE");let Je=ie&&"preventScrollReset"in ie?ie.preventScrollReset===!0:void 0,at=(ie&&ie.flushSync)===!0,Mt=yt({currentLocation:it,nextLocation:et,historyAction:st});if(Mt){Le(Mt,{state:"blocked",location:et,proceed(){Le(Mt,{state:"proceeding",proceed:void 0,reset:void 0,location:et}),dn(V,ie)},reset(){let Ht=new Map(R.blockers);Ht.set(Mt,al),ze({blockers:Ht})}});return}await bt(st,et,{submission:De,pendingError:Qe,preventScrollReset:Je,replace:ie&&ie.replace,enableViewTransition:ie&&ie.viewTransition,flushSync:at})}function Ct(){ae||(ae=db()),Q(),ze({revalidation:"loading"});let V=ae.promise;return R.navigation.state==="submitting"?V:R.navigation.state==="idle"?(bt(R.historyAction,R.location,{startUninterruptedRevalidation:!0}),V):(bt(H||R.historyAction,R.navigation.location,{overrideNavigation:R.navigation,enableViewTransition:D===!0}),V)}async function bt(V,ie,ue){A&&A.abort(),A=null,H=V,Z=(ue&&ue.startUninterruptedRevalidation)===!0,ke(R.location,R.matches),X=(ue&&ue.preventScrollReset)===!0,D=(ue&&ue.enableViewTransition)===!0;let Ae=h||u,De=ue&&ue.overrideNavigation,Qe=ue?.initialHydration&&R.matches&&R.matches.length>0&&!U?R.matches:yr(Ae,ie,d),it=(ue&&ue.flushSync)===!0;if(Qe&&R.initialized&&!ce&&rb(R.location,ie)&&!(ue&&ue.submission&&ui(ue.submission.formMethod))){xt(ie,{matches:Qe},{flushSync:it});return}let et=Ee(Qe,Ae,ie.pathname);if(et.active&&et.matches&&(Qe=et.matches),!Qe){let{error:on,notFoundMatches:_t,route:Zt}=q(ie.pathname);xt(ie,{matches:_t,loaderData:{},errors:{[Zt.id]:on}},{flushSync:it});return}A=new AbortController;let rt=Ks(a.history,ie,A.signal,ue&&ue.submission),st=a.unstable_getContext?await a.unstable_getContext():new e_,Je;if(ue&&ue.pendingError)Je=[Sr(Qe).route.id,{type:"error",error:ue.pendingError}];else if(ue&&ue.submission&&ui(ue.submission.formMethod)){let on=await Yt(rt,ie,ue.submission,Qe,st,et.active,ue&&ue.initialHydration===!0,{replace:ue.replace,flushSync:it});if(on.shortCircuited)return;if(on.pendingActionResult){let[_t,Zt]=on.pendingActionResult;if(Mi(Zt)&&Sl(Zt.error)&&Zt.error.status===404){A=null,xt(ie,{matches:on.matches,loaderData:{},errors:{[_t]:Zt.error}});return}}Qe=on.matches||Qe,Je=on.pendingActionResult,De=eh(ie,ue.submission),it=!1,et.active=!1,rt=Ks(a.history,rt.url,rt.signal)}let{shortCircuited:at,matches:Mt,loaderData:Ht,errors:pn}=await St(rt,ie,Qe,st,et.active,De,ue&&ue.submission,ue&&ue.fetcherSubmission,ue&&ue.replace,ue&&ue.initialHydration===!0,it,Je);at||(A=null,xt(ie,{matches:Mt||Qe,...d_(Je),loaderData:Ht,errors:pn}))}async function Yt(V,ie,ue,Ae,De,Qe,it,et={}){Q();let rt=lb(ie,ue);if(ze({navigation:rt},{flushSync:et.flushSync===!0}),Qe){let at=await Pe(Ae,ie.pathname,V.signal);if(at.type==="aborted")return{shortCircuited:!0};if(at.type==="error"){let Mt=Sr(at.partialMatches).route.id;return{matches:at.partialMatches,pendingActionResult:[Mt,{type:"error",error:at.error}]}}else if(at.matches)Ae=at.matches;else{let{notFoundMatches:Mt,error:Ht,route:pn}=q(ie.pathname);return{matches:Mt,pendingActionResult:[pn.id,{type:"error",error:Ht}]}}}let st,Je=hu(Ae,ie);if(!Je.route.action&&!Je.route.lazy)st={type:"error",error:Li(405,{method:V.method,pathname:ie.pathname,routeId:Je.route.id})};else{let at=Js(o,c,V,Ae,Je,it?[]:r,De),Mt=await z(V,at,De,null);if(st=Mt[Je.route.id],!st){for(let Ht of Ae)if(Mt[Ht.route.id]){st=Mt[Ht.route.id];break}}if(V.signal.aborted)return{shortCircuited:!0}}if($r(st)){let at;return et&&et.replace!=null?at=et.replace:at=l_(st.response.headers.get("Location"),new URL(V.url),d)===R.location.pathname+R.location.search,await Ye(V,st,!0,{submission:ue,replace:at}),{shortCircuited:!0}}if(Mi(st)){let at=Sr(Ae,Je.route.id);return(et&&et.replace)!==!0&&(H="PUSH"),{matches:Ae,pendingActionResult:[at.route.id,st,Je.route.id]}}return{matches:Ae,pendingActionResult:[Je.route.id,st]}}async function St(V,ie,ue,Ae,De,Qe,it,et,rt,st,Je,at){let Mt=Qe||eh(ie,it),Ht=it||et||m_(Mt),pn=!Z&&!st;if(De){if(pn){let ee=zt(at);ze({navigation:Mt,...ee!==void 0?{actionData:ee}:{}},{flushSync:Je})}let $=await Pe(ue,ie.pathname,V.signal);if($.type==="aborted")return{shortCircuited:!0};if($.type==="error"){let ee=Sr($.partialMatches).route.id;return{matches:$.partialMatches,loaderData:{},errors:{[ee]:$.error}}}else if($.matches)ue=$.matches;else{let{error:ee,notFoundMatches:Fe,route:He}=q(ie.pathname);return{matches:Fe,loaderData:{},errors:{[He.id]:ee}}}}let on=h||u,{dsMatches:_t,revalidatingFetchers:Zt}=i_(V,Ae,o,c,a.history,R,ue,Ht,ie,st?[]:r,st===!0,ce,re,ve,K,P,on,d,a.patchRoutesOnNavigation!=null,at);if(Y=++F,!a.dataStrategy&&!_t.some($=>$.shouldLoad)&&!_t.some($=>$.route.unstable_middleware)&&Zt.length===0){let $=Re();return xt(ie,{matches:ue,loaderData:{},errors:at&&Mi(at[1])?{[at[0]]:at[1].error}:null,...d_(at),...$?{fetchers:new Map(R.fetchers)}:{}},{flushSync:Je}),{shortCircuited:!0}}if(pn){let $={};if(!De){$.navigation=Mt;let ee=zt(at);ee!==void 0&&($.actionData=ee)}Zt.length>0&&($.fetchers=W(Zt)),ze($,{flushSync:Je})}Zt.forEach($=>{qe($.key),$.controller&&L.set($.key,$.controller)});let bi=()=>Zt.forEach($=>qe($.key));A&&A.signal.addEventListener("abort",bi);let{loaderResults:Jn,fetcherResults:zn}=await T(_t,Zt,V,Ae);if(V.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",bi),Zt.forEach($=>L.delete($.key));let ii=Hc(Jn);if(ii)return await Ye(V,ii.result,!0,{replace:rt}),{shortCircuited:!0};if(ii=Hc(zn),ii)return P.add(ii.key),await Ye(V,ii.result,!0,{replace:rt}),{shortCircuited:!0};let{loaderData:ka,errors:Yi}=u_(R,ue,Jn,at,Zt,zn);st&&R.errors&&(Yi={...R.errors,...Yi});let N=Re(),J=Ie(Y),he=N||J||Zt.length>0;return{matches:ue,loaderData:ka,errors:Yi,...he?{fetchers:new Map(R.fetchers)}:{}}}function zt(V){if(V&&!Mi(V[1]))return{[V[0]]:V[1].data};if(R.actionData)return Object.keys(R.actionData).length===0?null:R.actionData}function W(V){return V.forEach(ie=>{let ue=R.fetchers.get(ie.key),Ae=rl(void 0,ue?ue.data:void 0);R.fetchers.set(ie.key,Ae)}),new Map(R.fetchers)}async function hn(V,ie,ue,Ae){qe(V);let De=(Ae&&Ae.flushSync)===!0,Qe=h||u,it=Ih(R.location,R.matches,d,ue,ie,Ae?.relative),et=yr(Qe,it,d),rt=Ee(et,Qe,it);if(rt.active&&rt.matches&&(et=rt.matches),!et){_e(V,ie,Li(404,{pathname:it}),{flushSync:De});return}let{path:st,submission:Je,error:at}=n_(!0,it,Ae);if(at){_e(V,ie,at,{flushSync:De});return}let Mt=a.unstable_getContext?await a.unstable_getContext():new e_,Ht=(Ae&&Ae.preventScrollReset)===!0;if(Je&&ui(Je.formMethod)){await Ft(V,ie,st,et,Mt,rt.active,De,Ht,Je);return}K.set(V,{routeId:ie,path:st}),await Gt(V,ie,st,et,Mt,rt.active,De,Ht,Je)}async function Ft(V,ie,ue,Ae,De,Qe,it,et,rt){Q(),K.delete(V);let st=R.fetchers.get(V);ge(V,cb(rt,st),{flushSync:it});let Je=new AbortController,at=Ks(a.history,ue,Je.signal,rt);if(Qe){let Ce=await Pe(Ae,new URL(at.url).pathname,at.signal,V);if(Ce.type==="aborted")return;if(Ce.type==="error"){_e(V,ie,Ce.error,{flushSync:it});return}else if(Ce.matches)Ae=Ce.matches;else{_e(V,ie,Li(404,{pathname:ue}),{flushSync:it});return}}let Mt=hu(Ae,ue);if(!Mt.route.action&&!Mt.route.lazy){let Ce=Li(405,{method:rt.formMethod,pathname:ue,routeId:ie});_e(V,ie,Ce,{flushSync:it});return}L.set(V,Je);let Ht=F,pn=Js(o,c,at,Ae,Mt,r,De),_t=(await z(at,pn,De,V))[Mt.route.id];if(at.signal.aborted){L.get(V)===Je&&L.delete(V);return}if(ve.has(V)){if($r(_t)||Mi(_t)){ge(V,xr(void 0));return}}else{if($r(_t))if(L.delete(V),Y>Ht){ge(V,xr(void 0));return}else return P.add(V),ge(V,rl(rt)),Ye(at,_t,!1,{fetcherSubmission:rt,preventScrollReset:et});if(Mi(_t)){_e(V,ie,_t.error);return}}let Zt=R.navigation.location||R.location,bi=Ks(a.history,Zt,Je.signal),Jn=h||u,zn=R.navigation.state!=="idle"?yr(Jn,R.navigation.location,d):R.matches;Pt(zn,"Didn't find any matches after fetcher action");let ii=++F;xe.set(V,ii);let ka=rl(rt,_t.data);R.fetchers.set(V,ka);let{dsMatches:Yi,revalidatingFetchers:N}=i_(bi,De,o,c,a.history,R,zn,rt,Zt,r,!1,ce,re,ve,K,P,Jn,d,a.patchRoutesOnNavigation!=null,[Mt.route.id,_t]);N.filter(Ce=>Ce.key!==V).forEach(Ce=>{let je=Ce.key,nt=R.fetchers.get(je),ut=rl(void 0,nt?nt.data:void 0);R.fetchers.set(je,ut),qe(je),Ce.controller&&L.set(je,Ce.controller)}),ze({fetchers:new Map(R.fetchers)});let J=()=>N.forEach(Ce=>qe(Ce.key));Je.signal.addEventListener("abort",J);let{loaderResults:he,fetcherResults:$}=await T(Yi,N,bi,De);if(Je.signal.aborted)return;if(Je.signal.removeEventListener("abort",J),xe.delete(V),L.delete(V),N.forEach(Ce=>L.delete(Ce.key)),R.fetchers.has(V)){let Ce=xr(_t.data);R.fetchers.set(V,Ce)}let ee=Hc(he);if(ee)return Ye(bi,ee.result,!1,{preventScrollReset:et});if(ee=Hc($),ee)return P.add(ee.key),Ye(bi,ee.result,!1,{preventScrollReset:et});let{loaderData:Fe,errors:He}=u_(R,zn,he,void 0,N,$);Ie(ii),R.navigation.state==="loading"&&ii>Y?(Pt(H,"Expected pending action"),A&&A.abort(),xt(R.navigation.location,{matches:zn,loaderData:Fe,errors:He,fetchers:new Map(R.fetchers)})):(ze({errors:He,loaderData:f_(R.loaderData,Fe,zn,He),fetchers:new Map(R.fetchers)}),ce=!1)}async function Gt(V,ie,ue,Ae,De,Qe,it,et,rt){let st=R.fetchers.get(V);ge(V,rl(rt,st?st.data:void 0),{flushSync:it});let Je=new AbortController,at=Ks(a.history,ue,Je.signal);if(Qe){let Zt=await Pe(Ae,new URL(at.url).pathname,at.signal,V);if(Zt.type==="aborted")return;if(Zt.type==="error"){_e(V,ie,Zt.error,{flushSync:it});return}else if(Zt.matches)Ae=Zt.matches;else{_e(V,ie,Li(404,{pathname:ue}),{flushSync:it});return}}let Mt=hu(Ae,ue);L.set(V,Je);let Ht=F,pn=Js(o,c,at,Ae,Mt,r,De),_t=(await z(at,pn,De,V))[Mt.route.id];if(L.get(V)===Je&&L.delete(V),!at.signal.aborted){if(ve.has(V)){ge(V,xr(void 0));return}if($r(_t))if(Y>Ht){ge(V,xr(void 0));return}else{P.add(V),await Ye(at,_t,!1,{preventScrollReset:et});return}if(Mi(_t)){_e(V,ie,_t.error);return}ge(V,xr(_t.data))}}async function Ye(V,ie,ue,{submission:Ae,fetcherSubmission:De,preventScrollReset:Qe,replace:it}={}){ie.response.headers.has("X-Remix-Revalidate")&&(ce=!0);let et=ie.response.headers.get("Location");Pt(et,"Expected a Location header on the redirect Response"),et=l_(et,new URL(V.url),d);let rt=xl(R.location,et,{_isRedirect:!0});if(n){let pn=!1;if(ie.response.headers.has("X-Remix-Reload-Document"))pn=!0;else if(Vp(et)){const on=Cx(et,!0);pn=on.origin!==e.location.origin||Fi(on.pathname,d)==null}if(pn){it?e.location.replace(et):e.location.assign(et);return}}A=null;let st=it===!0||ie.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Je,formAction:at,formEncType:Mt}=R.navigation;!Ae&&!De&&Je&&at&&Mt&&(Ae=m_(R.navigation));let Ht=Ae||De;if(XE.has(ie.response.status)&&Ht&&ui(Ht.formMethod))await bt(st,rt,{submission:{...Ht,formAction:et},preventScrollReset:Qe||X,enableViewTransition:ue?D:void 0});else{let pn=eh(rt,Ae);await bt(st,rt,{overrideNavigation:pn,fetcherSubmission:De,preventScrollReset:Qe||X,enableViewTransition:ue?D:void 0})}}async function z(V,ie,ue,Ae){let De,Qe={};try{De=await eb(p,V,ie,Ae,ue,!1)}catch(it){return ie.filter(et=>et.shouldLoad).forEach(et=>{Qe[et.route.id]={type:"error",error:it}}),Qe}if(V.signal.aborted)return Qe;for(let[it,et]of Object.entries(De))if(sb(et)){let rt=et.result;Qe[it]={type:"redirect",response:ib(rt,V,it,ie,d)}}else Qe[it]=await nb(et);return Qe}async function T(V,ie,ue,Ae){let De=z(ue,V,Ae,null),Qe=Promise.all(ie.map(async rt=>{if(rt.matches&&rt.match&&rt.request&&rt.controller){let Je=(await z(rt.request,rt.matches,Ae,rt.key))[rt.match.route.id];return{[rt.key]:Je}}else return Promise.resolve({[rt.key]:{type:"error",error:Li(404,{pathname:rt.path})}})})),it=await De,et=(await Qe).reduce((rt,st)=>Object.assign(rt,st),{});return{loaderResults:it,fetcherResults:et}}function Q(){ce=!0,K.forEach((V,ie)=>{L.has(ie)&&re.add(ie),qe(ie)})}function ge(V,ie,ue={}){R.fetchers.set(V,ie),ze({fetchers:new Map(R.fetchers)},{flushSync:(ue&&ue.flushSync)===!0})}function _e(V,ie,ue,Ae={}){let De=Sr(R.matches,ie);Ge(V),ze({errors:{[De.route.id]:ue},fetchers:new Map(R.fetchers)},{flushSync:(Ae&&Ae.flushSync)===!0})}function me(V){return Se.set(V,(Se.get(V)||0)+1),ve.has(V)&&ve.delete(V),R.fetchers.get(V)||WE}function Ge(V){let ie=R.fetchers.get(V);L.has(V)&&!(ie&&ie.state==="loading"&&xe.has(V))&&qe(V),K.delete(V),xe.delete(V),P.delete(V),ve.delete(V),re.delete(V),R.fetchers.delete(V)}function Be(V){let ie=(Se.get(V)||0)-1;ie<=0?(Se.delete(V),ve.add(V)):Se.set(V,ie),ze({fetchers:new Map(R.fetchers)})}function qe(V){let ie=L.get(V);ie&&(ie.abort(),L.delete(V))}function dt(V){for(let ie of V){let ue=me(ie),Ae=xr(ue.data);R.fetchers.set(ie,Ae)}}function Re(){let V=[],ie=!1;for(let ue of P){let Ae=R.fetchers.get(ue);Pt(Ae,`Expected fetcher: ${ue}`),Ae.state==="loading"&&(P.delete(ue),V.push(ue),ie=!0)}return dt(V),ie}function Ie(V){let ie=[];for(let[ue,Ae]of xe)if(Ae<V){let De=R.fetchers.get(ue);Pt(De,`Expected fetcher: ${ue}`),De.state==="loading"&&(qe(ue),xe.delete(ue),ie.push(ue))}return dt(ie),ie.length>0}function We(V,ie){let ue=R.blockers.get(V)||al;return Oe.get(V)!==ie&&Oe.set(V,ie),ue}function Ke(V){R.blockers.delete(V),Oe.delete(V)}function Le(V,ie){let ue=R.blockers.get(V)||al;Pt(ue.state==="unblocked"&&ie.state==="blocked"||ue.state==="blocked"&&ie.state==="blocked"||ue.state==="blocked"&&ie.state==="proceeding"||ue.state==="blocked"&&ie.state==="unblocked"||ue.state==="proceeding"&&ie.state==="unblocked",`Invalid blocker state transition: ${ue.state} -> ${ie.state}`);let Ae=new Map(R.blockers);Ae.set(V,ie),ze({blockers:Ae})}function yt({currentLocation:V,nextLocation:ie,historyAction:ue}){if(Oe.size===0)return;Oe.size>1&&Cn(!1,"A router only supports one blocker at a time");let Ae=Array.from(Oe.entries()),[De,Qe]=Ae[Ae.length-1],it=R.blockers.get(De);if(!(it&&it.state==="proceeding")&&Qe({currentLocation:V,nextLocation:ie,historyAction:ue}))return De}function q(V){let ie=Li(404,{pathname:V}),ue=h||u,{matches:Ae,route:De}=h_(ue);return{notFoundMatches:Ae,route:De,error:ie}}function Ve(V,ie,ue){if(y=V,b=ie,M=ue||null,!S&&R.navigation===$d){S=!0;let Ae=we(R.location,R.matches);Ae!=null&&ze({restoreScrollPosition:Ae})}return()=>{y=null,b=null,M=null}}function Ne(V,ie){return M&&M(V,ie.map(Ae=>SE(Ae,R.loaderData)))||V.key}function ke(V,ie){if(y&&b){let ue=Ne(V,ie);y[ue]=b()}}function we(V,ie){if(y){let ue=Ne(V,ie),Ae=y[ue];if(typeof Ae=="number")return Ae}return null}function Ee(V,ie,ue){if(a.patchRoutesOnNavigation)if(V){if(Object.keys(V[0].params).length>0)return{active:!0,matches:du(ie,ue,d,!0)}}else return{active:!0,matches:du(ie,ue,d,!0)||[]};return{active:!1,matches:null}}async function Pe(V,ie,ue,Ae){if(!a.patchRoutesOnNavigation)return{type:"success",matches:V};let De=V;for(;;){let Qe=h==null,it=h||u,et=c;try{await a.patchRoutesOnNavigation({signal:ue,path:ie,matches:De,fetcherKey:Ae,patch:(Je,at)=>{ue.aborted||a_(Je,at,it,et,o,!1)}})}catch(Je){return{type:"error",error:Je,partialMatches:De}}finally{Qe&&!ue.aborted&&(u=[...u])}if(ue.aborted)return{type:"aborted"};let rt=yr(it,ie,d);if(rt)return{type:"success",matches:rt};let st=du(it,ie,d,!0);if(!st||De.length===st.length&&De.every((Je,at)=>Je.route.id===st[at].route.id))return{type:"success",matches:null};De=st}}function pt(V){c={},h=yl(V,o,void 0,c)}function Xt(V,ie,ue=!1){let Ae=h==null;a_(V,ie,h||u,c,o,ue),Ae&&(u=[...u],ze({}))}return O={get basename(){return d},get future(){return g},get state(){return R},get routes(){return u},get window(){return e},initialize:be,subscribe:ft,enableScrollRestoration:Ve,navigate:dn,fetch:hn,revalidate:Ct,createHref:V=>a.history.createHref(V),encodeLocation:V=>a.history.encodeLocation(V),getFetcher:me,deleteFetcher:Be,dispose:Ue,getBlocker:We,deleteBlocker:Ke,patchRoutes:Xt,_internalFetchControllers:L,_internalSetRoutes:pt,_internalSetStateDoNotUseOrYouWillBreakYourApp(V){ze(V)}},O}function ZE(a){return a!=null&&("formData"in a&&a.formData!=null||"body"in a&&a.body!==void 0)}function Ih(a,e,n,r,o,c){let u,h;if(o){u=[];for(let p of e)if(u.push(p),p.route.id===o){h=p;break}}else u=e,h=e[e.length-1];let d=Hp(r||".",zp(u),Fi(a.pathname,n)||a.pathname,c==="path");if(r==null&&(d.search=a.search,d.hash=a.hash),(r==null||r===""||r===".")&&h){let p=Gp(d.search);if(h.route.index&&!p)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!h.route.index&&p){let g=new URLSearchParams(d.search),v=g.getAll("index");g.delete("index"),v.filter(y=>y).forEach(y=>g.append("index",y));let _=g.toString();d.search=_?`?${_}`:""}}return n!=="/"&&(d.pathname=PE({basename:n,pathname:d.pathname})),br(d)}function n_(a,e,n){if(!n||!ZE(n))return{path:e};if(n.formMethod&&!ob(n.formMethod))return{path:e,error:Li(405,{method:n.formMethod})};let r=()=>({path:e,error:Li(400,{type:"invalid-body"})}),c=(n.formMethod||"get").toUpperCase(),u=Gx(e);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!ui(c))return r();let v=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((_,[y,M])=>`${_}${y}=${M}
`,""):String(n.body);return{path:e,submission:{formMethod:c,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:v}}}else if(n.formEncType==="application/json"){if(!ui(c))return r();try{let v=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:e,submission:{formMethod:c,formAction:u,formEncType:n.formEncType,formData:void 0,json:v,text:void 0}}}catch{return r()}}}Pt(typeof FormData=="function","FormData is not available in this environment");let h,d;if(n.formData)h=zh(n.formData),d=n.formData;else if(n.body instanceof FormData)h=zh(n.body),d=n.body;else if(n.body instanceof URLSearchParams)h=n.body,d=c_(h);else if(n.body==null)h=new URLSearchParams,d=new FormData;else try{h=new URLSearchParams(n.body),d=c_(h)}catch{return r()}let p={formMethod:c,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(ui(p.formMethod))return{path:e,submission:p};let g=Ar(e);return a&&g.search&&Gp(g.search)&&h.append("index",""),g.search=`?${h}`,{path:br(g),submission:p}}function i_(a,e,n,r,o,c,u,h,d,p,g,v,_,y,M,b,S,x,U,C){let I=C?Mi(C[1])?C[1].error:C[1].data:void 0,O=o.createURL(c.location),R=o.createURL(d),H;if(g&&c.errors){let Z=Object.keys(c.errors)[0];H=u.findIndex(ce=>ce.route.id===Z)}else if(C&&Mi(C[1])){let Z=C[0];H=u.findIndex(ce=>ce.route.id===Z)-1}let X=C?C[1].statusCode:void 0,A=X&&X>=400,D={currentUrl:O,currentParams:c.matches[0]?.params||{},nextUrl:R,nextParams:u[0].params,...h,actionResult:I,actionStatus:X},k=u.map((Z,ce)=>{let{route:re}=Z,L=null;if(H!=null&&ce>H?L=!1:re.lazy?L=!0:re.loader==null?L=!1:g?L=Fh(re,c.loaderData,c.errors):KE(c.loaderData,c.matches[ce],Z)&&(L=!0),L!==null)return Bh(n,r,a,Z,p,e,L);let F=A?!1:v||O.pathname+O.search===R.pathname+R.search||O.search!==R.search||QE(c.matches[ce],Z),Y={...D,defaultShouldRevalidate:F},xe=Au(Z,Y);return Bh(n,r,a,Z,p,e,xe,Y)}),ne=[];return M.forEach((Z,ce)=>{if(g||!u.some(Se=>Se.route.id===Z.routeId)||y.has(ce))return;let re=c.fetchers.get(ce),L=re&&re.state!=="idle"&&re.data===void 0,F=yr(S,Z.path,x);if(!F){if(U&&L)return;ne.push({key:ce,routeId:Z.routeId,path:Z.path,matches:null,match:null,request:null,controller:null});return}if(b.has(ce))return;let Y=hu(F,Z.path),xe=new AbortController,P=Ks(o,Z.path,xe.signal),K=null;if(_.has(ce))_.delete(ce),K=Js(n,r,P,F,Y,p,e);else if(L)v&&(K=Js(n,r,P,F,Y,p,e));else{let Se={...D,defaultShouldRevalidate:A?!1:v};Au(Y,Se)&&(K=Js(n,r,P,F,Y,p,e,Se))}K&&ne.push({key:ce,routeId:Z.routeId,path:Z.path,matches:K,match:Y,request:P,controller:xe})}),{dsMatches:k,revalidatingFetchers:ne}}function Fh(a,e,n){if(a.lazy)return!0;if(!a.loader)return!1;let r=e!=null&&a.id in e,o=n!=null&&n[a.id]!==void 0;return!r&&o?!1:typeof a.loader=="function"&&a.loader.hydrate===!0?!0:!r&&!o}function KE(a,e,n){let r=!e||n.route.id!==e.route.id,o=!a.hasOwnProperty(n.route.id);return r||o}function QE(a,e){let n=a.route.path;return a.pathname!==e.pathname||n!=null&&n.endsWith("*")&&a.params["*"]!==e.params["*"]}function Au(a,e){if(a.route.shouldRevalidate){let n=a.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}function a_(a,e,n,r,o,c){let u;if(a){let p=r[a];Pt(p,`No route found to patch children into: routeId = ${a}`),p.children||(p.children=[]),u=p.children}else u=n;let h=[],d=[];if(e.forEach(p=>{let g=u.find(v=>Ix(p,v));g?d.push({existingRoute:g,newRoute:p}):h.push(p)}),h.length>0){let p=yl(h,o,[a||"_","patch",String(u?.length||"0")],r);u.push(...p)}if(c&&d.length>0)for(let p=0;p<d.length;p++){let{existingRoute:g,newRoute:v}=d[p],_=g,[y]=yl([v],o,[],{},!0);Object.assign(_,{element:y.element?y.element:_.element,errorElement:y.errorElement?y.errorElement:_.errorElement,hydrateFallbackElement:y.hydrateFallbackElement?y.hydrateFallbackElement:_.hydrateFallbackElement})}}function Ix(a,e){return"id"in a&&"id"in e&&a.id===e.id?!0:a.index===e.index&&a.path===e.path&&a.caseSensitive===e.caseSensitive?(!a.children||a.children.length===0)&&(!e.children||e.children.length===0)?!0:a.children.every((n,r)=>e.children?.some(o=>Ix(n,o))):!1}var r_=new WeakMap,Fx=({key:a,route:e,manifest:n,mapRouteProperties:r})=>{let o=n[e.id];if(Pt(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let c=o.lazy[a];if(!c)return;let u=r_.get(o);u||(u={},r_.set(o,u));let h=u[a];if(h)return h;let d=(async()=>{let p=vE(a),v=o[a]!==void 0&&a!=="hasErrorBoundary";if(p)Cn(!p,"Route property "+a+" is not a supported lazy route property. This property will be ignored."),u[a]=Promise.resolve();else if(v)Cn(!1,`Route "${o.id}" has a static property "${a}" defined. The lazy property will be ignored.`);else{let _=await c();_!=null&&(Object.assign(o,{[a]:_}),Object.assign(o,r(o)))}typeof o.lazy=="object"&&(o.lazy[a]=void 0,Object.values(o.lazy).every(_=>_===void 0)&&(o.lazy=void 0))})();return u[a]=d,d},s_=new WeakMap;function JE(a,e,n,r,o){let c=n[a.id];if(Pt(c,"No route found in manifest"),!a.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof a.lazy=="function"){let g=s_.get(c);if(g)return{lazyRoutePromise:g,lazyHandlerPromise:g};let v=(async()=>{Pt(typeof a.lazy=="function","No lazy route function found");let _=await a.lazy(),y={};for(let M in _){let b=_[M];if(b===void 0)continue;let S=xE(M),U=c[M]!==void 0&&M!=="hasErrorBoundary";S?Cn(!S,"Route property "+M+" is not a supported property to be returned from a lazy route function. This property will be ignored."):U?Cn(!U,`Route "${c.id}" has a static property "${M}" defined but its lazy function is also returning a value for this property. The lazy route property "${M}" will be ignored.`):y[M]=b}Object.assign(c,y),Object.assign(c,{...r(c),lazy:void 0})})();return s_.set(c,v),v.catch(()=>{}),{lazyRoutePromise:v,lazyHandlerPromise:v}}let u=Object.keys(a.lazy),h=[],d;for(let g of u){if(o&&o.includes(g))continue;let v=Fx({key:g,route:a,manifest:n,mapRouteProperties:r});v&&(h.push(v),g===e&&(d=v))}let p=h.length>0?Promise.all(h).then(()=>{}):void 0;return p?.catch(()=>{}),d?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:d}}async function o_(a){let e=a.matches.filter(o=>o.shouldLoad),n={};return(await Promise.all(e.map(o=>o.resolve()))).forEach((o,c)=>{n[e[c].route.id]=o}),n}async function $E(a){if(!a.matches.some(n=>n.route.unstable_middleware))return o_(a);let e=!1;return zx(a,()=>(e=!0,o_(a)),(n,r)=>Bx(n,r,a.matches,e))}function Bx(a,e,n,r){return r?{[e]:{type:"error",result:a}}:{[Sr(n,n.find(c=>c.route.id===e||c.route.loader)?.route.id||e).route.id]:{type:"error",result:a}}}async function zx(a,e,n){let{matches:r,request:o,params:c,context:u}=a,h=r.flatMap(p=>p.route.unstable_middleware?p.route.unstable_middleware.map(g=>[p.route.id,g]):[]),d={};return await Hx({request:o,params:c,context:u},h,e,n,d),d}async function Hx(a,e,n,r,o={},c=0){let{request:u}=a;if(u.signal.aborted)throw u.signal.reason?u.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${u.method} ${u.url}`);let h=e[c];if(!h){let _=await n();Object.assign(o,_);return}let[d,p]=h,g=!1,v=async()=>{if(g)throw new Error("You may only call `next()` once per middleware");g=!0;try{let _=await Hx(a,e,n,r,o,c+1);Object.assign(o,_)}catch(_){let y=await r(_,d);Object.assign(o,y)}};try{let _=await p({request:a.request,params:a.params,context:a.context},v);typeof _<"u"&&console.warn("client middlewares are not intended to return values, the value will be ignored",_),g||await v()}catch(_){let y=await r(_,d);Object.assign(o,y)}}function Vx(a,e,n,r,o){let c=Fx({key:"unstable_middleware",route:r.route,manifest:e,mapRouteProperties:a}),u=JE(r.route,ui(n.method)?"action":"loader",e,a,o);return{middleware:c,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function Bh(a,e,n,r,o,c,u,h=null){let d=!1,p=Vx(a,e,n,r,o);return{...r,_lazyPromises:p,shouldLoad:u,unstable_shouldRevalidateArgs:h,unstable_shouldCallHandler(g){return d=!0,h?typeof g=="boolean"?Au(r,{...h,defaultShouldRevalidate:g}):Au(r,h):u},resolve(g){return d||u||g&&!ui(n.method)&&(r.route.lazy||r.route.loader)?tb({request:n,match:r,lazyHandlerPromise:p?.handler,lazyRoutePromise:p?.route,handlerOverride:g,scopedContext:c}):Promise.resolve({type:"data",result:void 0})}}}function Js(a,e,n,r,o,c,u,h=null){return r.map(d=>d.route.id!==o.route.id?{...d,shouldLoad:!1,unstable_shouldRevalidateArgs:h,unstable_shouldCallHandler:()=>!1,_lazyPromises:Vx(a,e,n,d,c),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Bh(a,e,n,d,c,u,!0,h))}async function eb(a,e,n,r,o,c){n.some(p=>p._lazyPromises?.middleware)&&await Promise.all(n.map(p=>p._lazyPromises?.middleware));let u={request:e,params:n[0].params,context:o,matches:n},d=await a({...u,fetcherKey:r,unstable_runClientMiddleware:p=>{let g=u,v=!1;return zx(g,()=>(v=!0,p({...g,fetcherKey:r,unstable_runClientMiddleware:()=>{throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")}})),(_,y)=>Bx(_,y,n,v))}});try{await Promise.all(n.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return d}async function tb({request:a,match:e,lazyHandlerPromise:n,lazyRoutePromise:r,handlerOverride:o,scopedContext:c}){let u,h,d=ui(a.method),p=d?"action":"loader",g=v=>{let _,y=new Promise((S,x)=>_=x);h=()=>_(),a.signal.addEventListener("abort",h);let M=S=>typeof v!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${e.route.id}]`)):v({request:a,params:e.params,context:c},...S!==void 0?[S]:[]),b=(async()=>{try{return{type:"data",result:await(o?o(x=>M(x)):M())}}catch(S){return{type:"error",result:S}}})();return Promise.race([b,y])};try{let v=d?e.route.action:e.route.loader;if(n||r)if(v){let _,[y]=await Promise.all([g(v).catch(M=>{_=M}),n,r]);if(_!==void 0)throw _;u=y}else{await n;let _=d?e.route.action:e.route.loader;if(_)[u]=await Promise.all([g(_),r]);else if(p==="action"){let y=new URL(a.url),M=y.pathname+y.search;throw Li(405,{method:a.method,pathname:M,routeId:e.route.id})}else return{type:"data",result:void 0}}else if(v)u=await g(v);else{let _=new URL(a.url),y=_.pathname+_.search;throw Li(404,{pathname:y})}}catch(v){return{type:"error",result:v}}finally{h&&a.signal.removeEventListener("abort",h)}return u}async function nb(a){let{result:e,type:n}=a;if(kx(e)){let r;try{let o=e.headers.get("Content-Type");o&&/\bapplication\/json\b/.test(o)?e.body==null?r=null:r=await e.json():r=await e.text()}catch(o){return{type:"error",error:o}}return n==="error"?{type:"error",error:new Tu(e.status,e.statusText,r),statusCode:e.status,headers:e.headers}:{type:"data",data:r,statusCode:e.status,headers:e.headers}}return n==="error"?p_(e)?e.data instanceof Error?{type:"error",error:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:new Tu(e.init?.status||500,void 0,e.data),statusCode:Sl(e)?e.status:void 0,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:e,statusCode:Sl(e)?e.status:void 0}:p_(e)?{type:"data",data:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"data",data:e}}function ib(a,e,n,r,o){let c=a.headers.get("Location");if(Pt(c,"Redirects returned/thrown from loaders/actions must have a Location header"),!Vp(c)){let u=r.slice(0,r.findIndex(h=>h.route.id===n)+1);c=Ih(new URL(e.url),u,o,c),a.headers.set("Location",c)}return a}function l_(a,e,n){if(Vp(a)){let r=a,o=r.startsWith("//")?new URL(e.protocol+r):new URL(r),c=Fi(o.pathname,n)!=null;if(o.origin===e.origin&&c)return o.pathname+o.search+o.hash}return a}function Ks(a,e,n,r){let o=a.createURL(Gx(e)).toString(),c={signal:n};if(r&&ui(r.formMethod)){let{formMethod:u,formEncType:h}=r;c.method=u.toUpperCase(),h==="application/json"?(c.headers=new Headers({"Content-Type":h}),c.body=JSON.stringify(r.json)):h==="text/plain"?c.body=r.text:h==="application/x-www-form-urlencoded"&&r.formData?c.body=zh(r.formData):c.body=r.formData}return new Request(o,c)}function zh(a){let e=new URLSearchParams;for(let[n,r]of a.entries())e.append(n,typeof r=="string"?r:r.name);return e}function c_(a){let e=new FormData;for(let[n,r]of a.entries())e.append(n,r);return e}function ab(a,e,n,r=!1,o=!1){let c={},u=null,h,d=!1,p={},g=n&&Mi(n[1])?n[1].error:void 0;return a.forEach(v=>{if(!(v.route.id in e))return;let _=v.route.id,y=e[_];if(Pt(!$r(y),"Cannot handle redirect results in processLoaderData"),Mi(y)){let M=y.error;if(g!==void 0&&(M=g,g=void 0),u=u||{},o)u[_]=M;else{let b=Sr(a,_);u[b.route.id]==null&&(u[b.route.id]=M)}r||(c[_]=Ox),d||(d=!0,h=Sl(y.error)?y.error.status:500),y.headers&&(p[_]=y.headers)}else c[_]=y.data,y.statusCode&&y.statusCode!==200&&!d&&(h=y.statusCode),y.headers&&(p[_]=y.headers)}),g!==void 0&&n&&(u={[n[0]]:g},n[2]&&(c[n[2]]=void 0)),{loaderData:c,errors:u,statusCode:h||200,loaderHeaders:p}}function u_(a,e,n,r,o,c){let{loaderData:u,errors:h}=ab(e,n,r);return o.filter(d=>!d.matches||d.matches.some(p=>p.shouldLoad)).forEach(d=>{let{key:p,match:g,controller:v}=d;if(v&&v.signal.aborted)return;let _=c[p];if(Pt(_,"Did not find corresponding fetcher result"),Mi(_)){let y=Sr(a.matches,g?.route.id);h&&h[y.route.id]||(h={...h,[y.route.id]:_.error}),a.fetchers.delete(p)}else if($r(_))Pt(!1,"Unhandled fetcher revalidation redirect");else{let y=xr(_.data);a.fetchers.set(p,y)}}),{loaderData:u,errors:h}}function f_(a,e,n,r){let o=Object.entries(e).filter(([,c])=>c!==Ox).reduce((c,[u,h])=>(c[u]=h,c),{});for(let c of n){let u=c.route.id;if(!e.hasOwnProperty(u)&&a.hasOwnProperty(u)&&c.route.loader&&(o[u]=a[u]),r&&r.hasOwnProperty(u))break}return o}function d_(a){return a?Mi(a[1])?{actionData:{}}:{actionData:{[a[0]]:a[1].data}}:{}}function Sr(a,e){return(e?a.slice(0,a.findIndex(r=>r.route.id===e)+1):[...a]).reverse().find(r=>r.route.hasErrorBoundary===!0)||a[0]}function h_(a){let e=a.length===1?a[0]:a.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Li(a,{pathname:e,routeId:n,method:r,type:o,message:c}={}){let u="Unknown Server Error",h="Unknown @remix-run/router error";return a===400?(u="Bad Request",r&&e&&n?h=`You made a ${r} request to "${e}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:o==="invalid-body"&&(h="Unable to encode submission body")):a===403?(u="Forbidden",h=`Route "${n}" does not match URL "${e}"`):a===404?(u="Not Found",h=`No route matches URL "${e}"`):a===405&&(u="Method Not Allowed",r&&e&&n?h=`You made a ${r.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:r&&(h=`Invalid request method "${r.toUpperCase()}"`)),new Tu(a||500,u,new Error(h),!0)}function Hc(a){let e=Object.entries(a);for(let n=e.length-1;n>=0;n--){let[r,o]=e[n];if($r(o))return{key:r,result:o}}}function Gx(a){let e=typeof a=="string"?Ar(a):a;return br({...e,hash:""})}function rb(a,e){return a.pathname!==e.pathname||a.search!==e.search?!1:a.hash===""?e.hash!=="":a.hash===e.hash?!0:e.hash!==""}function sb(a){return kx(a.result)&&kE.has(a.result.status)}function Mi(a){return a.type==="error"}function $r(a){return(a&&a.type)==="redirect"}function p_(a){return typeof a=="object"&&a!=null&&"type"in a&&"data"in a&&"init"in a&&a.type==="DataWithResponseInit"}function kx(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.headers=="object"&&typeof a.body<"u"}function ob(a){return GE.has(a.toUpperCase())}function ui(a){return HE.has(a.toUpperCase())}function Gp(a){return new URLSearchParams(a).getAll("index").some(e=>e==="")}function hu(a,e){let n=typeof e=="string"?Ar(e).search:e.search;if(a[a.length-1].route.index&&Gp(n||""))return a[a.length-1];let r=Ux(a);return r[r.length-1]}function m_(a){let{formMethod:e,formAction:n,formEncType:r,text:o,formData:c,json:u}=a;if(!(!e||!n||!r)){if(o!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(c!=null)return{formMethod:e,formAction:n,formEncType:r,formData:c,json:void 0,text:void 0};if(u!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:u,text:void 0}}}function eh(a,e){return e?{state:"loading",location:a,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:a,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function lb(a,e){return{state:"submitting",location:a,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function rl(a,e){return a?{state:"loading",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function cb(a,e){return{state:"submitting",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:e?e.data:void 0}}function xr(a){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function ub(a,e){try{let n=a.sessionStorage.getItem(Px);if(n){let r=JSON.parse(n);for(let[o,c]of Object.entries(r||{}))c&&Array.isArray(c)&&e.set(o,new Set(c||[]))}}catch{}}function fb(a,e){if(e.size>0){let n={};for(let[r,o]of e)n[r]=[...o];try{a.sessionStorage.setItem(Px,JSON.stringify(n))}catch(r){Cn(!1,`Failed to save applied view transitions in sessionStorage (${r}).`)}}}function db(){let a,e,n=new Promise((r,o)=>{a=async c=>{r(c);try{await n}catch{}},e=async c=>{o(c);try{await n}catch{}}});return{promise:n,resolve:a,reject:e}}var is=oe.createContext(null);is.displayName="DataRouter";var Al=oe.createContext(null);Al.displayName="DataRouterState";oe.createContext(!1);var kp=oe.createContext({isTransitioning:!1});kp.displayName="ViewTransition";var Xx=oe.createContext(new Map);Xx.displayName="Fetchers";var hb=oe.createContext(null);hb.displayName="Await";var ha=oe.createContext(null);ha.displayName="Navigation";var Ou=oe.createContext(null);Ou.displayName="Location";var qi=oe.createContext({outlet:null,matches:[],isDataRoute:!1});qi.displayName="Route";var Xp=oe.createContext(null);Xp.displayName="RouteError";function pb(a,{relative:e}={}){Pt(Rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=oe.useContext(ha),{hash:o,pathname:c,search:u}=wl(a,{relative:e}),h=c;return n!=="/"&&(h=c==="/"?n:la([n,c])),r.createHref({pathname:h,search:u,hash:o})}function Rl(){return oe.useContext(Ou)!=null}function as(){return Pt(Rl(),"useLocation() may be used only in the context of a <Router> component."),oe.useContext(Ou).location}var Wx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jx(a){oe.useContext(ha).static||oe.useLayoutEffect(a)}function Wp(){let{isDataRoute:a}=oe.useContext(qi);return a?Db():mb()}function mb(){Pt(Rl(),"useNavigate() may be used only in the context of a <Router> component.");let a=oe.useContext(is),{basename:e,navigator:n}=oe.useContext(ha),{matches:r}=oe.useContext(qi),{pathname:o}=as(),c=JSON.stringify(zp(r)),u=oe.useRef(!1);return jx(()=>{u.current=!0}),oe.useCallback((d,p={})=>{if(Cn(u.current,Wx),!u.current)return;if(typeof d=="number"){n.go(d);return}let g=Hp(d,JSON.parse(c),o,p.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:la([e,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[e,n,c,o,a])}var gb=oe.createContext(null);function vb(a){let e=oe.useContext(qi).outlet;return e&&oe.createElement(gb.Provider,{value:a},e)}function _b(){let{matches:a}=oe.useContext(qi),e=a[a.length-1];return e?e.params:{}}function wl(a,{relative:e}={}){let{matches:n}=oe.useContext(qi),{pathname:r}=as(),o=JSON.stringify(zp(n));return oe.useMemo(()=>Hp(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function xb(a,e,n,r){Pt(Rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=oe.useContext(ha),{matches:c}=oe.useContext(qi),u=c[c.length-1],h=u?u.params:{},d=u?u.pathname:"/",p=u?u.pathnameBase:"/",g=u&&u.route;{let x=g&&g.path||"";qx(d,!g||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let v=as(),_;_=v;let y=_.pathname||"/",M=y;if(p!=="/"){let x=p.replace(/^\//,"").split("/");M="/"+y.replace(/^\//,"").split("/").slice(x.length).join("/")}let b=yr(a,{pathname:M});return Cn(g||b!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Cn(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),bb(b&&b.map(x=>Object.assign({},x,{params:Object.assign({},h,x.params),pathname:la([p,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?p:la([p,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),c,n,r)}function yb(){let a=Cb(),e=Sl(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",a),u=oe.createElement(oe.Fragment,null,oe.createElement("p",null,"💿 Hey developer 👋"),oe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",oe.createElement("code",{style:c},"ErrorBoundary")," or"," ",oe.createElement("code",{style:c},"errorElement")," prop on your route.")),oe.createElement(oe.Fragment,null,oe.createElement("h2",null,"Unexpected Application Error!"),oe.createElement("h3",{style:{fontStyle:"italic"}},e),n?oe.createElement("pre",{style:o},n):null,u)}var Sb=oe.createElement(yb,null),Mb=class extends oe.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){console.error("React Router caught the following error during render",a,e)}render(){return this.state.error!==void 0?oe.createElement(qi.Provider,{value:this.props.routeContext},oe.createElement(Xp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Eb({routeContext:a,match:e,children:n}){let r=oe.useContext(is);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),oe.createElement(qi.Provider,{value:a},n)}function bb(a,e=[],n=null,r=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let o=a,c=n?.errors;if(c!=null){let d=o.findIndex(p=>p.route.id&&c?.[p.route.id]!==void 0);Pt(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,h=-1;if(n)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=d),p.route.id){let{loaderData:g,errors:v}=n,_=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||_){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((d,p,g)=>{let v,_=!1,y=null,M=null;n&&(v=c&&p.route.id?c[p.route.id]:void 0,y=p.route.errorElement||Sb,u&&(h<0&&g===0?(qx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,M=null):h===g&&(_=!0,M=p.route.hydrateFallbackElement||null)));let b=e.concat(o.slice(0,g+1)),S=()=>{let x;return v?x=y:_?x=M:p.route.Component?x=oe.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,oe.createElement(Eb,{match:p,routeContext:{outlet:d,matches:b,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?oe.createElement(Mb,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:S(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):S()},null)}function jp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tb(a){let e=oe.useContext(is);return Pt(e,jp(a)),e}function Ab(a){let e=oe.useContext(Al);return Pt(e,jp(a)),e}function Rb(a){let e=oe.useContext(qi);return Pt(e,jp(a)),e}function qp(a){let e=Rb(a),n=e.matches[e.matches.length-1];return Pt(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function wb(){return qp("useRouteId")}function Cb(){let a=oe.useContext(Xp),e=Ab("useRouteError"),n=qp("useRouteError");return a!==void 0?a:e.errors?.[n]}function Db(){let{router:a}=Tb("useNavigate"),e=qp("useNavigate"),n=oe.useRef(!1);return jx(()=>{n.current=!0}),oe.useCallback(async(o,c={})=>{Cn(n.current,Wx),n.current&&(typeof o=="number"?a.navigate(o):await a.navigate(o,{fromRouteId:e,...c}))},[a,e])}var g_={};function qx(a,e,n){!e&&!g_[a]&&(g_[a]=!0,Cn(!1,n))}var v_={};function __(a,e){!a&&!v_[e]&&(v_[e]=!0,console.warn(e))}function Nb(a){let e={hasErrorBoundary:a.hasErrorBoundary||a.ErrorBoundary!=null||a.errorElement!=null};return a.Component&&(a.element&&Cn(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(e,{element:oe.createElement(a.Component),Component:void 0})),a.HydrateFallback&&(a.hydrateFallbackElement&&Cn(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(e,{hydrateFallbackElement:oe.createElement(a.HydrateFallback),HydrateFallback:void 0})),a.ErrorBoundary&&(a.errorElement&&Cn(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(e,{errorElement:oe.createElement(a.ErrorBoundary),ErrorBoundary:void 0})),e}var Ub=["HydrateFallback","hydrateFallbackElement"],Lb=class{constructor(){this.status="pending",this.promise=new Promise((a,e)=>{this.resolve=n=>{this.status==="pending"&&(this.status="resolved",a(n))},this.reject=n=>{this.status==="pending"&&(this.status="rejected",e(n))}})}};function Pb({router:a,flushSync:e}){let[n,r]=oe.useState(a.state),[o,c]=oe.useState(),[u,h]=oe.useState({isTransitioning:!1}),[d,p]=oe.useState(),[g,v]=oe.useState(),[_,y]=oe.useState(),M=oe.useRef(new Map),b=oe.useCallback((C,{deletedFetchers:I,flushSync:O,viewTransitionOpts:R})=>{C.fetchers.forEach((X,A)=>{X.data!==void 0&&M.current.set(A,X.data)}),I.forEach(X=>M.current.delete(X)),__(O===!1||e!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let H=a.window!=null&&a.window.document!=null&&typeof a.window.document.startViewTransition=="function";if(__(R==null||H,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!R||!H){e&&O?e(()=>r(C)):oe.startTransition(()=>r(C));return}if(e&&O){e(()=>{g&&(d&&d.resolve(),g.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:R.currentLocation,nextLocation:R.nextLocation})});let X=a.window.document.startViewTransition(()=>{e(()=>r(C))});X.finished.finally(()=>{e(()=>{p(void 0),v(void 0),c(void 0),h({isTransitioning:!1})})}),e(()=>v(X));return}g?(d&&d.resolve(),g.skipTransition(),y({state:C,currentLocation:R.currentLocation,nextLocation:R.nextLocation})):(c(C),h({isTransitioning:!0,flushSync:!1,currentLocation:R.currentLocation,nextLocation:R.nextLocation}))},[a.window,e,g,d]);oe.useLayoutEffect(()=>a.subscribe(b),[a,b]),oe.useEffect(()=>{u.isTransitioning&&!u.flushSync&&p(new Lb)},[u]),oe.useEffect(()=>{if(d&&o&&a.window){let C=o,I=d.promise,O=a.window.document.startViewTransition(async()=>{oe.startTransition(()=>r(C)),await I});O.finished.finally(()=>{p(void 0),v(void 0),c(void 0),h({isTransitioning:!1})}),v(O)}},[o,d,a.window]),oe.useEffect(()=>{d&&o&&n.location.key===o.location.key&&d.resolve()},[d,g,n.location,o]),oe.useEffect(()=>{!u.isTransitioning&&_&&(c(_.state),h({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),y(void 0))},[u.isTransitioning,_]);let S=oe.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:C=>a.navigate(C),push:(C,I,O)=>a.navigate(C,{state:I,preventScrollReset:O?.preventScrollReset}),replace:(C,I,O)=>a.navigate(C,{replace:!0,state:I,preventScrollReset:O?.preventScrollReset})}),[a]),x=a.basename||"/",U=oe.useMemo(()=>({router:a,navigator:S,static:!1,basename:x}),[a,S,x]);return oe.createElement(oe.Fragment,null,oe.createElement(is.Provider,{value:U},oe.createElement(Al.Provider,{value:n},oe.createElement(Xx.Provider,{value:M.current},oe.createElement(kp.Provider,{value:u},oe.createElement(Bb,{basename:x,location:n.location,navigationType:n.historyAction,navigator:S},oe.createElement(Ob,{routes:a.routes,future:a.future,state:n})))))),null)}var Ob=oe.memo(Ib);function Ib({routes:a,future:e,state:n}){return xb(a,void 0,n,e)}function Fb(a){return vb(a.context)}function Bb({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:c=!1}){Pt(!Rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=a.replace(/^\/*/,"/"),h=oe.useMemo(()=>({basename:u,navigator:o,static:c,future:{}}),[u,o,c]);typeof n=="string"&&(n=Ar(n));let{pathname:d="/",search:p="",hash:g="",state:v=null,key:_="default"}=n,y=oe.useMemo(()=>{let M=Fi(d,u);return M==null?null:{location:{pathname:M,search:p,hash:g,state:v,key:_},navigationType:r}},[u,d,p,g,v,_,r]);return Cn(y!=null,`<Router basename="${u}"> is not able to match the URL "${d}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:oe.createElement(ha.Provider,{value:h},oe.createElement(Ou.Provider,{children:e,value:y}))}var pu="get",mu="application/x-www-form-urlencoded";function Iu(a){return a!=null&&typeof a.tagName=="string"}function zb(a){return Iu(a)&&a.tagName.toLowerCase()==="button"}function Hb(a){return Iu(a)&&a.tagName.toLowerCase()==="form"}function Vb(a){return Iu(a)&&a.tagName.toLowerCase()==="input"}function Gb(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function kb(a,e){return a.button===0&&(!e||e==="_self")&&!Gb(a)}var Vc=null;function Xb(){if(Vc===null)try{new FormData(document.createElement("form"),0),Vc=!1}catch{Vc=!0}return Vc}var Wb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function th(a){return a!=null&&!Wb.has(a)?(Cn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mu}"`),null):a}function jb(a,e){let n,r,o,c,u;if(Hb(a)){let h=a.getAttribute("action");r=h?Fi(h,e):null,n=a.getAttribute("method")||pu,o=th(a.getAttribute("enctype"))||mu,c=new FormData(a)}else if(zb(a)||Vb(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=a.getAttribute("formaction")||h.getAttribute("action");if(r=d?Fi(d,e):null,n=a.getAttribute("formmethod")||h.getAttribute("method")||pu,o=th(a.getAttribute("formenctype"))||th(h.getAttribute("enctype"))||mu,c=new FormData(h,a),!Xb()){let{name:p,type:g,value:v}=a;if(g==="image"){let _=p?`${p}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else p&&c.append(p,v)}}else{if(Iu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=pu,r=null,o=mu,u=a}return c&&o==="text/plain"&&(u=c,c=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Yp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function qb(a,e,n){let r=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&Fi(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Yb(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Zb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Kb(a,e,n){let r=await Promise.all(a.map(async o=>{let c=e.routes[o.route.id];if(c){let u=await Yb(c,n);return u.links?u.links():[]}return[]}));return eT(r.flat(1).filter(Zb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function x_(a,e,n,r,o,c){let u=(d,p)=>n[p]?d.route.id!==n[p].route.id:!0,h=(d,p)=>n[p].pathname!==d.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==d.params["*"];return c==="assets"?e.filter((d,p)=>u(d,p)||h(d,p)):c==="data"?e.filter((d,p)=>{let g=r.routes[d.route.id];if(!g||!g.hasLoader)return!1;if(u(d,p)||h(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Qb(a,e,{includeHydrateFallback:n}={}){return Jb(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function Jb(a){return[...new Set(a)]}function $b(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function eT(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let c=JSON.stringify($b(o));return n.has(c)||(n.add(c),r.push({key:c,link:o})),r},[])}function Yx(){let a=oe.useContext(is);return Yp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function tT(){let a=oe.useContext(Al);return Yp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Zp=oe.createContext(void 0);Zp.displayName="FrameworkContext";function Zx(){let a=oe.useContext(Zp);return Yp(a,"You must render this element inside a <HydratedRouter> element"),a}function nT(a,e){let n=oe.useContext(Zp),[r,o]=oe.useState(!1),[c,u]=oe.useState(!1),{onFocus:h,onBlur:d,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,_=oe.useRef(null);oe.useEffect(()=>{if(a==="render"&&u(!0),a==="viewport"){let b=x=>{x.forEach(U=>{u(U.isIntersecting)})},S=new IntersectionObserver(b,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[a]),oe.useEffect(()=>{if(r){let b=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(b)}}},[r]);let y=()=>{o(!0)},M=()=>{o(!1),u(!1)};return n?a!=="intent"?[c,_,{}]:[c,_,{onFocus:sl(h,y),onBlur:sl(d,M),onMouseEnter:sl(p,y),onMouseLeave:sl(g,M),onTouchStart:sl(v,y)}]:[!1,_,{}]}function sl(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function iT({page:a,...e}){let{router:n}=Yx(),r=oe.useMemo(()=>yr(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?oe.createElement(rT,{page:a,matches:r,...e}):null}function aT(a){let{manifest:e,routeModules:n}=Zx(),[r,o]=oe.useState([]);return oe.useEffect(()=>{let c=!1;return Kb(a,e,n).then(u=>{c||o(u)}),()=>{c=!0}},[a,e,n]),r}function rT({page:a,matches:e,...n}){let r=as(),{manifest:o,routeModules:c}=Zx(),{basename:u}=Yx(),{loaderData:h,matches:d}=tT(),p=oe.useMemo(()=>x_(a,e,d,o,r,"data"),[a,e,d,o,r]),g=oe.useMemo(()=>x_(a,e,d,o,r,"assets"),[a,e,d,o,r]),v=oe.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let M=new Set,b=!1;if(e.forEach(x=>{let U=o.routes[x.route.id];!U||!U.hasLoader||(!p.some(C=>C.route.id===x.route.id)&&x.route.id in h&&c[x.route.id]?.shouldRevalidate||U.hasClientLoader?b=!0:M.add(x.route.id))}),M.size===0)return[];let S=qb(a,u,"data");return b&&M.size>0&&S.searchParams.set("_routes",e.filter(x=>M.has(x.route.id)).map(x=>x.route.id).join(",")),[S.pathname+S.search]},[u,h,r,o,p,e,a,c]),_=oe.useMemo(()=>Qb(g,o),[g,o]),y=aT(g);return oe.createElement(oe.Fragment,null,v.map(M=>oe.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),_.map(M=>oe.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),y.map(({key:M,link:b})=>oe.createElement("link",{key:M,nonce:n.nonce,...b})))}function sT(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Kx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kx&&(window.__reactRouterVersion="7.8.0")}catch{}function oT(a,e){return YE({basename:e?.basename,unstable_getContext:e?.unstable_getContext,future:e?.future,history:hE({window:e?.window}),hydrationData:e?.hydrationData||lT(),routes:a,mapRouteProperties:Nb,hydrationRouteProperties:Ub,dataStrategy:e?.dataStrategy,patchRoutesOnNavigation:e?.patchRoutesOnNavigation,window:e?.window}).initialize()}function lT(){let a=window?.__staticRouterHydrationData;return a&&a.errors&&(a={...a,errors:cT(a.errors)}),a}function cT(a){if(!a)return null;let e=Object.entries(a),n={};for(let[r,o]of e)if(o&&o.__type==="RouteErrorResponse")n[r]=new Tu(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let c=window[o.__subType];if(typeof c=="function")try{let u=new c(o.message);u.stack="",n[r]=u}catch{}}if(n[r]==null){let c=new Error(o.message);c.stack="",n[r]=c}}else n[r]=o;return n}var Qx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ia=oe.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:c,replace:u,state:h,target:d,to:p,preventScrollReset:g,viewTransition:v,..._},y){let{basename:M}=oe.useContext(ha),b=typeof p=="string"&&Qx.test(p),S,x=!1;if(typeof p=="string"&&b&&(S=p,Kx))try{let A=new URL(window.location.href),D=p.startsWith("//")?new URL(A.protocol+p):new URL(p),k=Fi(D.pathname,M);D.origin===A.origin&&k!=null?p=k+D.search+D.hash:x=!0}catch{Cn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=pb(p,{relative:o}),[C,I,O]=nT(r,_),R=dT(p,{replace:u,state:h,target:d,preventScrollReset:g,relative:o,viewTransition:v});function H(A){e&&e(A),A.defaultPrevented||R(A)}let X=oe.createElement("a",{..._,...O,href:S||U,onClick:x||c?e:H,ref:sT(y,I),target:d,"data-discover":!b&&n==="render"?"true":void 0});return C&&!b?oe.createElement(oe.Fragment,null,X,oe.createElement(iT,{page:U})):X});ia.displayName="Link";var Hh=oe.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:c,to:u,viewTransition:h,children:d,...p},g){let v=wl(u,{relative:p.relative}),_=as(),y=oe.useContext(Al),{navigator:M,basename:b}=oe.useContext(ha),S=y!=null&&vT(v)&&h===!0,x=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,U=_.pathname,C=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(U=U.toLowerCase(),C=C?C.toLowerCase():null,x=x.toLowerCase()),C&&b&&(C=Fi(C,b)||C);const I=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let O=U===x||!o&&U.startsWith(x)&&U.charAt(I)==="/",R=C!=null&&(C===x||!o&&C.startsWith(x)&&C.charAt(x.length)==="/"),H={isActive:O,isPending:R,isTransitioning:S},X=O?e:void 0,A;typeof r=="function"?A=r(H):A=[r,O?"active":null,R?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(H):c;return oe.createElement(ia,{...p,"aria-current":X,className:A,ref:g,style:D,to:u,viewTransition:h},typeof d=="function"?d(H):d)});Hh.displayName="NavLink";var uT=oe.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:c,method:u=pu,action:h,onSubmit:d,relative:p,preventScrollReset:g,viewTransition:v,..._},y)=>{let M=mT(),b=gT(h,{relative:p}),S=u.toLowerCase()==="get"?"get":"post",x=typeof h=="string"&&Qx.test(h),U=C=>{if(d&&d(C),C.defaultPrevented)return;C.preventDefault();let I=C.nativeEvent.submitter,O=I?.getAttribute("formmethod")||u;M(I||C.currentTarget,{fetcherKey:e,method:O,navigate:n,replace:o,state:c,relative:p,preventScrollReset:g,viewTransition:v})};return oe.createElement("form",{ref:y,method:S,action:b,onSubmit:r?d:U,..._,"data-discover":!x&&a==="render"?"true":void 0})});uT.displayName="Form";function fT(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jx(a){let e=oe.useContext(is);return Pt(e,fT(a)),e}function dT(a,{target:e,replace:n,state:r,preventScrollReset:o,relative:c,viewTransition:u}={}){let h=Wp(),d=as(),p=wl(a,{relative:c});return oe.useCallback(g=>{if(kb(g,e)){g.preventDefault();let v=n!==void 0?n:br(d)===br(p);h(a,{replace:v,state:r,preventScrollReset:o,relative:c,viewTransition:u})}},[d,h,p,n,r,e,a,o,c,u])}var hT=0,pT=()=>`__${String(++hT)}__`;function mT(){let{router:a}=Jx("useSubmit"),{basename:e}=oe.useContext(ha),n=wb();return oe.useCallback(async(r,o={})=>{let{action:c,method:u,encType:h,formData:d,body:p}=jb(r,e);if(o.navigate===!1){let g=o.fetcherKey||pT();await a.fetch(g,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||h,flushSync:o.flushSync})}else await a.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[a,e,n])}function gT(a,{relative:e}={}){let{basename:n}=oe.useContext(ha),r=oe.useContext(qi);Pt(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...wl(a||".",{relative:e})},u=as();if(a==null){c.search=u.search;let h=new URLSearchParams(c.search),d=h.getAll("index");if(d.some(g=>g==="")){h.delete("index"),d.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();c.search=g?`?${g}`:""}}return(!a||a===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:la([n,c.pathname])),br(c)}function vT(a,{relative:e}={}){let n=oe.useContext(kp);Pt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Jx("useViewTransitionState"),o=wl(a,{relative:e});if(!n.isTransitioning)return!1;let c=Fi(n.currentLocation.pathname,r)||n.currentLocation.pathname,u=Fi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return bu(o.pathname,u)!=null||bu(o.pathname,c)!=null}var _T=Rx();function xT(a){return oe.createElement(Pb,{flushSync:_T.flushSync,...a})}const yT=()=>B.jsx("nav",{className:"navbar",children:B.jsxs("div",{className:"navbar-container",children:[B.jsx(ia,{to:"/",className:"navbar-logo",children:"Portal del Destino"}),B.jsxs("ul",{className:"navbar-menu",children:[B.jsx("li",{children:B.jsx(Hh,{to:"/",className:({isActive:a})=>a?"nav-link active":"nav-link",children:"Inicio"})}),B.jsx("li",{children:B.jsx(Hh,{to:"/lectura",className:({isActive:a})=>a?"nav-link active":"nav-link",children:"Lectura de Cartas"})})]})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kp="182",ST=0,y_=1,MT=2,gu=1,ET=2,gl=3,Tr=0,di=1,Pa=2,Ia=0,$s=1,Ru=2,S_=3,M_=4,bT=5,Qr=100,TT=101,AT=102,RT=103,wT=104,CT=200,DT=201,NT=202,UT=203,Vh=204,Gh=205,LT=206,PT=207,OT=208,IT=209,FT=210,BT=211,zT=212,HT=213,VT=214,kh=0,Xh=1,Wh=2,to=3,jh=4,qh=5,Yh=6,Zh=7,$x=0,GT=1,kT=2,ca=0,ey=1,ty=2,ny=3,iy=4,ay=5,ry=6,sy=7,oy=300,ns=301,no=302,Kh=303,Qh=304,Fu=306,Jh=1e3,Oa=1001,$h=1002,Xn=1003,XT=1004,Gc=1005,Kn=1006,nh=1007,es=1008,Ii=1009,ly=1010,cy=1011,Ml=1012,Qp=1013,fa=1014,aa=1015,za=1016,Jp=1017,$p=1018,El=1020,uy=35902,fy=35899,dy=1021,hy=1022,ji=1023,Ha=1026,ts=1027,py=1028,em=1029,io=1030,tm=1031,nm=1033,vu=33776,_u=33777,xu=33778,yu=33779,ep=35840,tp=35841,np=35842,ip=35843,ap=36196,rp=37492,sp=37496,op=37488,lp=37489,cp=37490,up=37491,fp=37808,dp=37809,hp=37810,pp=37811,mp=37812,gp=37813,vp=37814,_p=37815,xp=37816,yp=37817,Sp=37818,Mp=37819,Ep=37820,bp=37821,Tp=36492,Ap=36494,Rp=36495,wp=36283,Cp=36284,Dp=36285,Np=36286,WT=3200,jT=0,qT=1,Mr="",Pi="srgb",ao="srgb-linear",wu="linear",tn="srgb",Is=7680,E_=519,YT=512,ZT=513,KT=514,im=515,QT=516,JT=517,am=518,$T=519,b_=35044,T_="300 es",ra=2e3,Cu=2001;function my(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Du(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function e1(){const a=Du("canvas");return a.style.display="block",a}const A_={};function R_(...a){const e="THREE."+a.shift();console.log(e,...a)}function vt(...a){const e="THREE."+a.shift();console.warn(e,...a)}function qt(...a){const e="THREE."+a.shift();console.error(e,...a)}function bl(...a){const e=a.join(" ");e in A_||(A_[e]=!0,vt(...a))}function t1(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class so{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=Math.PI/180,Up=180/Math.PI;function Cl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Yn[a&255]+Yn[a>>8&255]+Yn[a>>16&255]+Yn[a>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[n&63|128]+Yn[n>>8&255]+"-"+Yn[n>>16&255]+Yn[n>>24&255]+Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]).toLowerCase()}function Bt(a,e,n){return Math.max(e,Math.min(n,a))}function n1(a,e){return(a%e+e)%e}function ah(a,e,n){return(1-n)*a+n*e}function ol(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ci(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class sn{constructor(e=0,n=0){sn.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Bt(this.x,e.x,n.x),this.y=Bt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Bt(this.x,e,n),this.y=Bt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dl{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,h){let d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3],_=c[u+0],y=c[u+1],M=c[u+2],b=c[u+3];if(h<=0){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(h>=1){e[n+0]=_,e[n+1]=y,e[n+2]=M,e[n+3]=b;return}if(v!==b||d!==_||p!==y||g!==M){let S=d*_+p*y+g*M+v*b;S<0&&(_=-_,y=-y,M=-M,b=-b,S=-S);let x=1-h;if(S<.9995){const U=Math.acos(S),C=Math.sin(U);x=Math.sin(x*U)/C,h=Math.sin(h*U)/C,d=d*x+_*h,p=p*x+y*h,g=g*x+M*h,v=v*x+b*h}else{d=d*x+_*h,p=p*x+y*h,g=g*x+M*h,v=v*x+b*h;const U=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=U,p*=U,g*=U,v*=U}}e[n]=d,e[n+1]=p,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,c,u){const h=r[o],d=r[o+1],p=r[o+2],g=r[o+3],v=c[u],_=c[u+1],y=c[u+2],M=c[u+3];return e[n]=h*M+g*v+d*y-p*_,e[n+1]=d*M+g*_+p*v-h*y,e[n+2]=p*M+g*y+h*_-d*v,e[n+3]=g*M-h*v-d*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,d=Math.sin,p=h(r/2),g=h(o/2),v=h(c/2),_=d(r/2),y=d(o/2),M=d(c/2);switch(u){case"XYZ":this._x=_*g*v+p*y*M,this._y=p*y*v-_*g*M,this._z=p*g*M+_*y*v,this._w=p*g*v-_*y*M;break;case"YXZ":this._x=_*g*v+p*y*M,this._y=p*y*v-_*g*M,this._z=p*g*M-_*y*v,this._w=p*g*v+_*y*M;break;case"ZXY":this._x=_*g*v-p*y*M,this._y=p*y*v+_*g*M,this._z=p*g*M+_*y*v,this._w=p*g*v-_*y*M;break;case"ZYX":this._x=_*g*v-p*y*M,this._y=p*y*v+_*g*M,this._z=p*g*M-_*y*v,this._w=p*g*v+_*y*M;break;case"YZX":this._x=_*g*v+p*y*M,this._y=p*y*v+_*g*M,this._z=p*g*M-_*y*v,this._w=p*g*v-_*y*M;break;case"XZY":this._x=_*g*v-p*y*M,this._y=p*y*v-_*g*M,this._z=p*g*M+_*y*v,this._w=p*g*v+_*y*M;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],h=n[5],d=n[9],p=n[2],g=n[6],v=n[10],_=r+h+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-d)*y,this._y=(c-p)*y,this._z=(u-o)*y}else if(r>h&&r>v){const y=2*Math.sqrt(1+r-h-v);this._w=(g-d)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+p)/y}else if(h>v){const y=2*Math.sqrt(1+h-r-v);this._w=(c-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+v-r-h);this._w=(u-o)/y,this._x=(c+p)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,h=n._x,d=n._y,p=n._z,g=n._w;return this._x=r*g+u*h+o*p-c*d,this._y=o*g+u*d+c*h-r*p,this._z=c*g+u*p+r*d-o*h,this._w=u*g-r*h-o*d-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let d=1-n;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);d=Math.sin(d*p)/g,n=Math.sin(n*p)/g,this._x=this._x*d+r*n,this._y=this._y*d+o*n,this._z=this._z*d+c*n,this._w=this._w*d+u*n,this._onChangeCallback()}else this._x=this._x*d+r*n,this._y=this._y*d+o*n,this._z=this._z*d+c*n,this._w=this._w*d+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(e=0,n=0,r=0){de.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(w_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(w_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,d=e.w,p=2*(u*o-h*r),g=2*(h*n-c*o),v=2*(c*r-u*n);return this.x=n+d*p+u*v-h*g,this.y=r+d*g+h*p-c*v,this.z=o+d*v+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Bt(this.x,e.x,n.x),this.y=Bt(this.y,e.y,n.y),this.z=Bt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Bt(this.x,e,n),this.y=Bt(this.y,e,n),this.z=Bt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,h=n.y,d=n.z;return this.x=o*d-c*h,this.y=c*u-r*d,this.z=r*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new de,w_=new Dl;class Rt{constructor(e,n,r,o,c,u,h,d,p){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,d,p)}set(e,n,r,o,c,u,h,d,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=d,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[3],d=r[6],p=r[1],g=r[4],v=r[7],_=r[2],y=r[5],M=r[8],b=o[0],S=o[3],x=o[6],U=o[1],C=o[4],I=o[7],O=o[2],R=o[5],H=o[8];return c[0]=u*b+h*U+d*O,c[3]=u*S+h*C+d*R,c[6]=u*x+h*I+d*H,c[1]=p*b+g*U+v*O,c[4]=p*S+g*C+v*R,c[7]=p*x+g*I+v*H,c[2]=_*b+y*U+M*O,c[5]=_*S+y*C+M*R,c[8]=_*x+y*I+M*H,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8];return n*u*g-n*h*p-r*c*g+r*h*d+o*c*p-o*u*d}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],v=g*u-h*p,_=h*d-g*c,y=p*c-u*d,M=n*v+r*_+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(o*p-g*r)*b,e[2]=(h*r-o*u)*b,e[3]=_*b,e[4]=(g*n-o*d)*b,e[5]=(o*c-h*n)*b,e[6]=y*b,e[7]=(r*d-p*n)*b,e[8]=(u*n-r*c)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,h){const d=Math.cos(c),p=Math.sin(c);return this.set(r*d,r*p,-r*(d*u+p*h)+u+e,-o*p,o*d,-o*(-p*u+d*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(sh.makeScale(e,n)),this}rotate(e){return this.premultiply(sh.makeRotation(-e)),this}translate(e,n){return this.premultiply(sh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sh=new Rt,C_=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),D_=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i1(){const a={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===tn&&(o.r=Fa(o.r),o.g=Fa(o.g),o.b=Fa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===tn&&(o.r=eo(o.r),o.g=eo(o.g),o.b=eo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Mr?wu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return bl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return bl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[ao]:{primaries:e,whitePoint:r,transfer:wu,toXYZ:C_,fromXYZ:D_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:e,whitePoint:r,transfer:tn,toXYZ:C_,fromXYZ:D_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),a}const kt=i1();function Fa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function eo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Fs;class a1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fs===void 0&&(Fs=Du("canvas")),Fs.width=e.width,Fs.height=e.height;const o=Fs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Fs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Du("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Fa(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Fa(n[r]/255)*255):n[r]=Fa(n[r]);return{data:n,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let r1=0;class rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=Cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(oh(o[u].image)):c.push(oh(o[u]))}else c=oh(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function oh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?a1.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let s1=0;const lh=new de;class Qn extends so{constructor(e=Qn.DEFAULT_IMAGE,n=Qn.DEFAULT_MAPPING,r=Oa,o=Oa,c=Kn,u=es,h=ji,d=Ii,p=Qn.DEFAULT_ANISOTROPY,g=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=Cl(),this.name="",this.source=new rm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new sn(0,0),this.repeat=new sn(1,1),this.center=new sn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){vt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){vt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jh:e.x=e.x-Math.floor(e.x);break;case Oa:e.x=e.x<0?0:1;break;case $h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jh:e.y=e.y-Math.floor(e.y);break;case Oa:e.y=e.y<0?0:1;break;case $h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=oy;Qn.DEFAULT_ANISOTROPY=1;class bn{constructor(e=0,n=0,r=0,o=1){bn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const d=e.elements,p=d[0],g=d[4],v=d[8],_=d[1],y=d[5],M=d[9],b=d[2],S=d[6],x=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(p+1)/2,I=(y+1)/2,O=(x+1)/2,R=(g+_)/4,H=(v+b)/4,X=(M+S)/4;return C>I&&C>O?C<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(C),o=R/r,c=H/r):I>O?I<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(I),r=R/o,c=X/o):O<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),r=H/c,o=X/c),this.set(r,o,c,n),this}let U=Math.sqrt((S-M)*(S-M)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(U)<.001&&(U=1),this.x=(S-M)/U,this.y=(v-b)/U,this.z=(_-g)/U,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Bt(this.x,e.x,n.x),this.y=Bt(this.y,e.y,n.y),this.z=Bt(this.z,e.z,n.z),this.w=Bt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Bt(this.x,e,n),this.y=Bt(this.y,e,n),this.z=Bt(this.z,e,n),this.w=Bt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o1 extends so{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new bn(0,0,e,n),this.scissorTest=!1,this.viewport=new bn(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new Qn(o);this.textures=[];const u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new rm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ua extends o1{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class gy extends Qn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l1 extends Qn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nl{constructor(e=new de(1/0,1/0,1/0),n=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Vi):Vi.fromBufferAttribute(c,u),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),kc.copy(r.boundingBox)),kc.applyMatrix4(e.matrixWorld),this.union(kc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ll),Xc.subVectors(this.max,ll),Bs.subVectors(e.a,ll),zs.subVectors(e.b,ll),Hs.subVectors(e.c,ll),hr.subVectors(zs,Bs),pr.subVectors(Hs,zs),Xr.subVectors(Bs,Hs);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Xr.z,Xr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Xr.z,0,-Xr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Xr.y,Xr.x,0];return!ch(n,Bs,zs,Hs,Xc)||(n=[1,0,0,0,1,0,0,0,1],!ch(n,Bs,zs,Hs,Xc))?!1:(Wc.crossVectors(hr,pr),n=[Wc.x,Wc.y,Wc.z],ch(n,Bs,zs,Hs,Xc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ca=[new de,new de,new de,new de,new de,new de,new de,new de],Vi=new de,kc=new Nl,Bs=new de,zs=new de,Hs=new de,hr=new de,pr=new de,Xr=new de,ll=new de,Xc=new de,Wc=new de,Wr=new de;function ch(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Wr.fromArray(a,c);const h=o.x*Math.abs(Wr.x)+o.y*Math.abs(Wr.y)+o.z*Math.abs(Wr.z),d=e.dot(Wr),p=n.dot(Wr),g=r.dot(Wr);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const c1=new Nl,cl=new de,uh=new de;class Ul{constructor(e=new de,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):c1.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cl.subVectors(e,this.center);const n=cl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(cl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cl.copy(e.center).add(uh)),this.expandByPoint(cl.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Da=new de,fh=new de,jc=new de,mr=new de,dh=new de,qc=new de,hh=new de;class sm{constructor(e=new de,n=new de(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){fh.copy(e).add(n).multiplyScalar(.5),jc.copy(n).sub(e).normalize(),mr.copy(this.origin).sub(fh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(jc),h=mr.dot(this.direction),d=-mr.dot(jc),p=mr.lengthSq(),g=Math.abs(1-u*u);let v,_,y,M;if(g>0)if(v=u*d-h,_=u*h-d,M=c*g,v>=0)if(_>=-M)if(_<=M){const b=1/g;v*=b,_*=b,y=v*(v+u*_+2*h)+_*(u*v+_+2*d)+p}else _=c,v=Math.max(0,-(u*_+h)),y=-v*v+_*(_+2*d)+p;else _=-c,v=Math.max(0,-(u*_+h)),y=-v*v+_*(_+2*d)+p;else _<=-M?(v=Math.max(0,-(-u*c+h)),_=v>0?-c:Math.min(Math.max(-c,-d),c),y=-v*v+_*(_+2*d)+p):_<=M?(v=0,_=Math.min(Math.max(-c,-d),c),y=_*(_+2*d)+p):(v=Math.max(0,-(u*c+h)),_=v>0?c:Math.min(Math.max(-c,-d),c),y=-v*v+_*(_+2*d)+p);else _=u>0?-c:c,v=Math.max(0,-(u*_+h)),y=-v*v+_*(_+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(fh).addScaledVector(jc,_),y}intersectSphere(e,n){Da.subVectors(e.center,this.origin);const r=Da.dot(this.direction),o=Da.dot(Da)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,d=r+u;return d<0?null:h<0?this.at(d,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),g>=0?(c=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),r>d||h>o)||((h>r||r!==r)&&(r=h),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,n,r,o,c){dh.subVectors(n,e),qc.subVectors(r,e),hh.crossVectors(dh,qc);let u=this.direction.dot(hh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;mr.subVectors(this.origin,e);const d=h*this.direction.dot(qc.crossVectors(mr,qc));if(d<0)return null;const p=h*this.direction.dot(dh.cross(mr));if(p<0||d+p>u)return null;const g=-h*mr.dot(hh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yn{constructor(e,n,r,o,c,u,h,d,p,g,v,_,y,M,b,S){yn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,d,p,g,v,_,y,M,b,S)}set(e,n,r,o,c,u,h,d,p,g,v,_,y,M,b,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=h,x[13]=d,x[2]=p,x[6]=g,x[10]=v,x[14]=_,x[3]=y,x[7]=M,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Vs.setFromMatrixColumn(e,0).length(),c=1/Vs.setFromMatrixColumn(e,1).length(),u=1/Vs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),d=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=u*g,y=u*v,M=h*g,b=h*v;n[0]=d*g,n[4]=-d*v,n[8]=p,n[1]=y+M*p,n[5]=_-b*p,n[9]=-h*d,n[2]=b-_*p,n[6]=M+y*p,n[10]=u*d}else if(e.order==="YXZ"){const _=d*g,y=d*v,M=p*g,b=p*v;n[0]=_+b*h,n[4]=M*h-y,n[8]=u*p,n[1]=u*v,n[5]=u*g,n[9]=-h,n[2]=y*h-M,n[6]=b+_*h,n[10]=u*d}else if(e.order==="ZXY"){const _=d*g,y=d*v,M=p*g,b=p*v;n[0]=_-b*h,n[4]=-u*v,n[8]=M+y*h,n[1]=y+M*h,n[5]=u*g,n[9]=b-_*h,n[2]=-u*p,n[6]=h,n[10]=u*d}else if(e.order==="ZYX"){const _=u*g,y=u*v,M=h*g,b=h*v;n[0]=d*g,n[4]=M*p-y,n[8]=_*p+b,n[1]=d*v,n[5]=b*p+_,n[9]=y*p-M,n[2]=-p,n[6]=h*d,n[10]=u*d}else if(e.order==="YZX"){const _=u*d,y=u*p,M=h*d,b=h*p;n[0]=d*g,n[4]=b-_*v,n[8]=M*v+y,n[1]=v,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=y*v+M,n[10]=_-b*v}else if(e.order==="XZY"){const _=u*d,y=u*p,M=h*d,b=h*p;n[0]=d*g,n[4]=-v,n[8]=p*g,n[1]=_*v+b,n[5]=u*g,n[9]=y*v-M,n[2]=M*v-y,n[6]=h*g,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u1,e,f1)}lookAt(e,n,r){const o=this.elements;return yi.subVectors(e,n),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),gr.crossVectors(r,yi),gr.lengthSq()===0&&(Math.abs(r.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),gr.crossVectors(r,yi)),gr.normalize(),Yc.crossVectors(yi,gr),o[0]=gr.x,o[4]=Yc.x,o[8]=yi.x,o[1]=gr.y,o[5]=Yc.y,o[9]=yi.y,o[2]=gr.z,o[6]=Yc.z,o[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[4],d=r[8],p=r[12],g=r[1],v=r[5],_=r[9],y=r[13],M=r[2],b=r[6],S=r[10],x=r[14],U=r[3],C=r[7],I=r[11],O=r[15],R=o[0],H=o[4],X=o[8],A=o[12],D=o[1],k=o[5],ne=o[9],Z=o[13],ce=o[2],re=o[6],L=o[10],F=o[14],Y=o[3],xe=o[7],P=o[11],K=o[15];return c[0]=u*R+h*D+d*ce+p*Y,c[4]=u*H+h*k+d*re+p*xe,c[8]=u*X+h*ne+d*L+p*P,c[12]=u*A+h*Z+d*F+p*K,c[1]=g*R+v*D+_*ce+y*Y,c[5]=g*H+v*k+_*re+y*xe,c[9]=g*X+v*ne+_*L+y*P,c[13]=g*A+v*Z+_*F+y*K,c[2]=M*R+b*D+S*ce+x*Y,c[6]=M*H+b*k+S*re+x*xe,c[10]=M*X+b*ne+S*L+x*P,c[14]=M*A+b*Z+S*F+x*K,c[3]=U*R+C*D+I*ce+O*Y,c[7]=U*H+C*k+I*re+O*xe,c[11]=U*X+C*ne+I*L+O*P,c[15]=U*A+C*Z+I*F+O*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],d=e[9],p=e[13],g=e[2],v=e[6],_=e[10],y=e[14],M=e[3],b=e[7],S=e[11],x=e[15],U=d*y-p*_,C=h*y-p*v,I=h*_-d*v,O=u*y-p*g,R=u*_-d*g,H=u*v-h*g;return n*(b*U-S*C+x*I)-r*(M*U-S*O+x*R)+o*(M*C-b*O+x*H)-c*(M*I-b*R+S*H)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],v=e[9],_=e[10],y=e[11],M=e[12],b=e[13],S=e[14],x=e[15],U=v*S*p-b*_*p+b*d*y-h*S*y-v*d*x+h*_*x,C=M*_*p-g*S*p-M*d*y+u*S*y+g*d*x-u*_*x,I=g*b*p-M*v*p+M*h*y-u*b*y-g*h*x+u*v*x,O=M*v*d-g*b*d-M*h*_+u*b*_+g*h*S-u*v*S,R=n*U+r*C+o*I+c*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/R;return e[0]=U*H,e[1]=(b*_*c-v*S*c-b*o*y+r*S*y+v*o*x-r*_*x)*H,e[2]=(h*S*c-b*d*c+b*o*p-r*S*p-h*o*x+r*d*x)*H,e[3]=(v*d*c-h*_*c-v*o*p+r*_*p+h*o*y-r*d*y)*H,e[4]=C*H,e[5]=(g*S*c-M*_*c+M*o*y-n*S*y-g*o*x+n*_*x)*H,e[6]=(M*d*c-u*S*c-M*o*p+n*S*p+u*o*x-n*d*x)*H,e[7]=(u*_*c-g*d*c+g*o*p-n*_*p-u*o*y+n*d*y)*H,e[8]=I*H,e[9]=(M*v*c-g*b*c-M*r*y+n*b*y+g*r*x-n*v*x)*H,e[10]=(u*b*c-M*h*c+M*r*p-n*b*p-u*r*x+n*h*x)*H,e[11]=(g*h*c-u*v*c-g*r*p+n*v*p+u*r*y-n*h*y)*H,e[12]=O*H,e[13]=(g*b*o-M*v*o+M*r*_-n*b*_-g*r*S+n*v*S)*H,e[14]=(M*h*o-u*b*o-M*r*d+n*b*d+u*r*S-n*h*S)*H,e[15]=(u*v*o-g*h*o+g*r*d-n*v*d-u*r*_+n*h*_)*H,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,h=e.y,d=e.z,p=c*u,g=c*h;return this.set(p*u+r,p*h-o*d,p*d+o*h,0,p*h+o*d,g*h+r,g*d-o*u,0,p*d-o*h,g*d+o*u,c*d*d+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,h=n._z,d=n._w,p=c+c,g=u+u,v=h+h,_=c*p,y=c*g,M=c*v,b=u*g,S=u*v,x=h*v,U=d*p,C=d*g,I=d*v,O=r.x,R=r.y,H=r.z;return o[0]=(1-(b+x))*O,o[1]=(y+I)*O,o[2]=(M-C)*O,o[3]=0,o[4]=(y-I)*R,o[5]=(1-(_+x))*R,o[6]=(S+U)*R,o[7]=0,o[8]=(M+C)*H,o[9]=(S-U)*H,o[10]=(1-(_+b))*H,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let c=Vs.set(o[0],o[1],o[2]).length();const u=Vs.set(o[4],o[5],o[6]).length(),h=Vs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),Gi.copy(this);const p=1/c,g=1/u,v=1/h;return Gi.elements[0]*=p,Gi.elements[1]*=p,Gi.elements[2]*=p,Gi.elements[4]*=g,Gi.elements[5]*=g,Gi.elements[6]*=g,Gi.elements[8]*=v,Gi.elements[9]*=v,Gi.elements[10]*=v,n.setFromRotationMatrix(Gi),r.x=c,r.y=u,r.z=h,this}makePerspective(e,n,r,o,c,u,h=ra,d=!1){const p=this.elements,g=2*c/(n-e),v=2*c/(r-o),_=(n+e)/(n-e),y=(r+o)/(r-o);let M,b;if(d)M=c/(u-c),b=u*c/(u-c);else if(h===ra)M=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(h===Cu)M=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,h=ra,d=!1){const p=this.elements,g=2/(n-e),v=2/(r-o),_=-(n+e)/(n-e),y=-(r+o)/(r-o);let M,b;if(d)M=1/(u-c),b=u/(u-c);else if(h===ra)M=-2/(u-c),b=-(u+c)/(u-c);else if(h===Cu)M=-1/(u-c),b=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Vs=new de,Gi=new yn,u1=new de(0,0,0),f1=new de(1,1,1),gr=new de,Yc=new de,yi=new de,N_=new yn,U_=new Dl;class Va{constructor(e=0,n=0,r=0,o=Va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],d=o[1],p=o[5],g=o[9],v=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-Bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return N_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return U_.setFromEuler(this),this.setFromQuaternion(U_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Va.DEFAULT_ORDER="XYZ";class vy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d1=0;const L_=new de,Gs=new Dl,Na=new yn,Zc=new de,ul=new de,h1=new de,p1=new Dl,P_=new de(1,0,0),O_=new de(0,1,0),I_=new de(0,0,1),F_={type:"added"},m1={type:"removed"},ks={type:"childadded",child:null},ph={type:"childremoved",child:null};class ni extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new de,n=new Va,r=new Dl,o=new de(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new yn},normalMatrix:{value:new Rt}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(P_,e)}rotateY(e){return this.rotateOnAxis(O_,e)}rotateZ(e){return this.rotateOnAxis(I_,e)}translateOnAxis(e,n){return L_.copy(e).applyQuaternion(this.quaternion),this.position.add(L_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(P_,e)}translateY(e){return this.translateOnAxis(O_,e)}translateZ(e){return this.translateOnAxis(I_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Zc.copy(e):Zc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(ul,Zc,this.up):Na.lookAt(Zc,ul,this.up),this.quaternion.setFromRotationMatrix(Na),o&&(Na.extractRotation(o.matrixWorld),Gs.setFromRotationMatrix(Na),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(qt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F_),ks.child=e,this.dispatchEvent(ks),ks.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(m1),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Na.multiply(e.parent.matrixWorld)),e.applyMatrix4(Na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F_),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,e,h1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,p1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];c(e.shapes,v)}else c(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(e.materials,this.material[d]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];o.animations.push(c(e.animations,d))}}if(n){const h=u(e.geometries),d=u(e.materials),p=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),y=u(e.animations),M=u(e.nodes);h.length>0&&(r.geometries=h),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ni.DEFAULT_UP=new de(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ki=new de,Ua=new de,mh=new de,La=new de,Xs=new de,Ws=new de,B_=new de,gh=new de,vh=new de,_h=new de,xh=new bn,yh=new bn,Sh=new bn;class Xi{constructor(e=new de,n=new de,r=new de){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),ki.subVectors(e,n),o.cross(ki);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){ki.subVectors(o,n),Ua.subVectors(r,n),mh.subVectors(e,n);const u=ki.dot(ki),h=ki.dot(Ua),d=ki.dot(mh),p=Ua.dot(Ua),g=Ua.dot(mh),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,y=(p*d-h*g)*_,M=(u*g-h*d)*_;return c.set(1-y-M,M,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,n,r,o,c,u,h,d){return this.getBarycoord(e,n,r,o,La)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,La.x),d.addScaledVector(u,La.y),d.addScaledVector(h,La.z),d)}static getInterpolatedAttribute(e,n,r,o,c,u){return xh.setScalar(0),yh.setScalar(0),Sh.setScalar(0),xh.fromBufferAttribute(e,n),yh.fromBufferAttribute(e,r),Sh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(xh,c.x),u.addScaledVector(yh,c.y),u.addScaledVector(Sh,c.z),u}static isFrontFacing(e,n,r,o){return ki.subVectors(r,n),Ua.subVectors(e,n),ki.cross(Ua).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),ki.cross(Ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Xi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,h;Xs.subVectors(o,r),Ws.subVectors(c,r),gh.subVectors(e,r);const d=Xs.dot(gh),p=Ws.dot(gh);if(d<=0&&p<=0)return n.copy(r);vh.subVectors(e,o);const g=Xs.dot(vh),v=Ws.dot(vh);if(g>=0&&v<=g)return n.copy(o);const _=d*v-g*p;if(_<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(r).addScaledVector(Xs,u);_h.subVectors(e,c);const y=Xs.dot(_h),M=Ws.dot(_h);if(M>=0&&y<=M)return n.copy(c);const b=y*p-d*M;if(b<=0&&p>=0&&M<=0)return h=p/(p-M),n.copy(r).addScaledVector(Ws,h);const S=g*M-y*v;if(S<=0&&v-g>=0&&y-M>=0)return B_.subVectors(c,o),h=(v-g)/(v-g+(y-M)),n.copy(o).addScaledVector(B_,h);const x=1/(S+b+_);return u=b*x,h=_*x,n.copy(r).addScaledVector(Xs,u).addScaledVector(Ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function Mh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class It{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=kt.workingColorSpace){return this.r=e,this.g=n,this.b=r,kt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=kt.workingColorSpace){if(e=n1(e,1),n=Bt(n,0,1),r=Bt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Mh(u,c,e+1/3),this.g=Mh(u,c,e),this.b=Mh(u,c,e-1/3)}return kt.colorSpaceToWorking(this,o),this}setStyle(e,n=Pi){function r(c){c!==void 0&&parseFloat(c)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:vt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pi){const r=_y[e.toLowerCase()];return r!==void 0?this.setHex(r,n):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return kt.workingToColorSpace(Zn.copy(this),e),Math.round(Bt(Zn.r*255,0,255))*65536+Math.round(Bt(Zn.g*255,0,255))*256+Math.round(Bt(Zn.b*255,0,255))}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=kt.workingColorSpace){kt.workingToColorSpace(Zn.copy(this),n);const r=Zn.r,o=Zn.g,c=Zn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const v=u-h;switch(p=g<=.5?v/(u+h):v/(2-u-h),u){case r:d=(o-c)/v+(o<c?6:0);break;case o:d=(c-r)/v+2;break;case c:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,n=kt.workingColorSpace){return kt.workingToColorSpace(Zn.copy(this),n),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=Pi){kt.workingToColorSpace(Zn.copy(this),e);const n=Zn.r,r=Zn.g,o=Zn.b;return e!==Pi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(Kc);const r=ah(vr.h,Kc.h,n),o=ah(vr.s,Kc.s,n),c=ah(vr.l,Kc.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new It;It.NAMES=_y;let g1=0;class oo extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=Cl(),this.name="",this.type="Material",this.blending=$s,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Gh,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){vt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){vt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vh&&(r.blendSrc=this.blendSrc),this.blendDst!==Gh&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xy extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Va,this.combine=$x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wn=new de,Qc=new sn;let v1=0;class fi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=b_,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Qc.fromBufferAttribute(this,n),Qc.applyMatrix3(e),this.setXY(n,Qc.x,Qc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)wn.fromBufferAttribute(this,n),wn.applyMatrix3(e),this.setXYZ(n,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)wn.fromBufferAttribute(this,n),wn.applyMatrix4(e),this.setXYZ(n,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)wn.fromBufferAttribute(this,n),wn.applyNormalMatrix(e),this.setXYZ(n,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)wn.fromBufferAttribute(this,n),wn.transformDirection(e),this.setXYZ(n,wn.x,wn.y,wn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ol(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ci(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ol(n,this.array)),n}setX(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ol(n,this.array)),n}setY(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ol(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ol(n,this.array)),n}setW(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),r=ci(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),r=ci(r,this.array),o=ci(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),r=ci(r,this.array),o=ci(o,this.array),c=ci(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==b_&&(e.usage=this.usage),e}}class yy extends fi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Sy extends fi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ei extends fi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let _1=0;const Ui=new yn,Eh=new ni,js=new de,Si=new Nl,fl=new Nl,Bn=new de;class ti extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=Cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(my(e)?Sy:yy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Rt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,n,r){return Ui.makeTranslation(e,n,r),this.applyMatrix4(Ui),this}scale(e,n,r){return Ui.makeScale(e,n,r),this.applyMatrix4(Ui),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ei(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Si.setFromBufferAttribute(c),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];fl.setFromBufferAttribute(h),this.morphTargetsRelative?(Bn.addVectors(Si.min,fl.min),Si.expandByPoint(Bn),Bn.addVectors(Si.max,fl.max),Si.expandByPoint(Bn)):(Si.expandByPoint(fl.min),Si.expandByPoint(fl.max))}Si.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Bn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Bn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Bn.fromBufferAttribute(h,p),d&&(js.fromBufferAttribute(e,p),Bn.add(js)),o=Math.max(o,r.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let X=0;X<r.count;X++)h[X]=new de,d[X]=new de;const p=new de,g=new de,v=new de,_=new sn,y=new sn,M=new sn,b=new de,S=new de;function x(X,A,D){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,A),v.fromBufferAttribute(r,D),_.fromBufferAttribute(c,X),y.fromBufferAttribute(c,A),M.fromBufferAttribute(c,D),g.sub(p),v.sub(p),y.sub(_),M.sub(_);const k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(k),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(k),h[X].add(b),h[A].add(b),h[D].add(b),d[X].add(S),d[A].add(S),d[D].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let X=0,A=U.length;X<A;++X){const D=U[X],k=D.start,ne=D.count;for(let Z=k,ce=k+ne;Z<ce;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const C=new de,I=new de,O=new de,R=new de;function H(X){O.fromBufferAttribute(o,X),R.copy(O);const A=h[X];C.copy(A),C.sub(O.multiplyScalar(O.dot(A))).normalize(),I.crossVectors(R,A);const k=I.dot(d[X])<0?-1:1;u.setXYZW(X,C.x,C.y,C.z,k)}for(let X=0,A=U.length;X<A;++X){const D=U[X],k=D.start,ne=D.count;for(let Z=k,ce=k+ne;Z<ce;Z+=3)H(e.getX(Z+0)),H(e.getX(Z+1)),H(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const o=new de,c=new de,u=new de,h=new de,d=new de,p=new de,g=new de,v=new de;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),b=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(r,M),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,S),h.add(g),d.add(g),p.add(g),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Bn.fromBufferAttribute(e,n),Bn.normalize(),e.setXYZ(n,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(h,d){const p=h.array,g=h.itemSize,v=h.normalized,_=new p.constructor(d.length*g);let y=0,M=0;for(let b=0,S=d.length;b<S;b++){h.isInterleavedBufferAttribute?y=d[b]*h.data.stride+h.offset:y=d[b]*g;for(let x=0;x<g;x++)_[M++]=p[y++]}return new fi(_,g,v)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ti,r=this.index.array,o=this.attributes;for(const h in o){const d=o[h],p=e(d,r);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const _=p[g],y=e(_,r);d.push(y)}n.morphAttributes[h]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,_=p.length;v<_;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(o[d]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const z_=new yn,jr=new sm,Jc=new Ul,H_=new de,$c=new de,eu=new de,tu=new de,bh=new de,nu=new de,V_=new de,iu=new de;class Ga extends ni{constructor(e=new ti,n=new xy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){nu.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],v=c[d];g!==0&&(bh.fromBufferAttribute(v,e),u?nu.addScaledVector(bh,g):nu.addScaledVector(bh.sub(n),g))}n.add(nu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Jc.copy(r.boundingSphere),Jc.applyMatrix4(c),jr.copy(e.ray).recast(e.near),!(Jc.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Jc,H_)===null||jr.origin.distanceToSquared(H_)>(e.far-e.near)**2))&&(z_.copy(c).invert(),jr.copy(e.ray).applyMatrix4(z_),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const S=_[M],x=u[S.materialIndex],U=Math.max(S.start,y.start),C=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let I=U,O=C;I<O;I+=3){const R=h.getX(I),H=h.getX(I+1),X=h.getX(I+2);o=au(this,x,e,r,p,g,v,R,H,X),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),b=Math.min(h.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const U=h.getX(S),C=h.getX(S+1),I=h.getX(S+2);o=au(this,u,e,r,p,g,v,U,C,I),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const S=_[M],x=u[S.materialIndex],U=Math.max(S.start,y.start),C=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let I=U,O=C;I<O;I+=3){const R=I,H=I+1,X=I+2;o=au(this,x,e,r,p,g,v,R,H,X),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const U=S,C=S+1,I=S+2;o=au(this,u,e,r,p,g,v,U,C,I),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function x1(a,e,n,r,o,c,u,h){let d;if(e.side===di?d=r.intersectTriangle(u,c,o,!0,h):d=r.intersectTriangle(o,c,u,e.side===Tr,h),d===null)return null;iu.copy(h),iu.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(iu);return p<n.near||p>n.far?null:{distance:p,point:iu.clone(),object:a}}function au(a,e,n,r,o,c,u,h,d,p){a.getVertexPosition(h,$c),a.getVertexPosition(d,eu),a.getVertexPosition(p,tu);const g=x1(a,e,n,r,$c,eu,tu,V_);if(g){const v=new de;Xi.getBarycoord(V_,$c,eu,tu,v),o&&(g.uv=Xi.getInterpolatedAttribute(o,h,d,p,v,new sn)),c&&(g.uv1=Xi.getInterpolatedAttribute(c,h,d,p,v,new sn)),u&&(g.normal=Xi.getInterpolatedAttribute(u,h,d,p,v,new de),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:d,c:p,normal:new de,materialIndex:0};Xi.getNormal($c,eu,tu,_.normal),g.face=_,g.barycoord=v}return g}class Ll extends ti{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const d=[],p=[],g=[],v=[];let _=0,y=0;M("z","y","x",-1,-1,r,n,e,u,c,0),M("z","y","x",1,-1,r,n,-e,u,c,1),M("x","z","y",1,1,e,r,n,o,u,2),M("x","z","y",1,-1,e,r,-n,o,u,3),M("x","y","z",1,-1,e,n,r,o,c,4),M("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(d),this.setAttribute("position",new Ei(p,3)),this.setAttribute("normal",new Ei(g,3)),this.setAttribute("uv",new Ei(v,2));function M(b,S,x,U,C,I,O,R,H,X,A){const D=I/H,k=O/X,ne=I/2,Z=O/2,ce=R/2,re=H+1,L=X+1;let F=0,Y=0;const xe=new de;for(let P=0;P<L;P++){const K=P*k-Z;for(let Se=0;Se<re;Se++){const ve=Se*D-ne;xe[b]=ve*U,xe[S]=K*C,xe[x]=ce,p.push(xe.x,xe.y,xe.z),xe[b]=0,xe[S]=0,xe[x]=R>0?1:-1,g.push(xe.x,xe.y,xe.z),v.push(Se/H),v.push(1-P/X),F+=1}}for(let P=0;P<X;P++)for(let K=0;K<H;K++){const Se=_+K+re*P,ve=_+K+re*(P+1),Oe=_+(K+1)+re*(P+1),Ze=_+(K+1)+re*P;d.push(Se,ve,Ze),d.push(ve,Oe,Ze),Y+=6}h.addGroup(y,Y,A),y+=Y,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function ei(a){const e={};for(let n=0;n<a.length;n++){const r=ro(a[n]);for(const o in r)e[o]=r[o]}return e}function y1(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function My(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}const S1={clone:ro,merge:ei};var M1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M1,this.fragmentShader=E1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ey extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new de,G_=new sn,k_=new sn;class Oi extends Ey{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Up*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ih*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Up*2*Math.atan(Math.tan(ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,G_,k_),n.subVectors(k_,G_)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ih*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/d,n-=u.offsetY*r/p,o*=u.width/d,r*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qs=-90,Ys=1;class b1 extends ni{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Oi(qs,Ys,e,n);o.layers=this.layers,this.add(o);const c=new Oi(qs,Ys,e,n);c.layers=this.layers,this.add(c);const u=new Oi(qs,Ys,e,n);u.layers=this.layers,this.add(u);const h=new Oi(qs,Ys,e,n);h.layers=this.layers,this.add(h);const d=new Oi(qs,Ys,e,n);d.layers=this.layers,this.add(d);const p=new Oi(qs,Ys,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,h,d]=n;for(const p of n)this.remove(p);if(e===ra)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Cu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,d,p,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,h),e.setRenderTarget(r,3,o),e.render(n,d),e.setRenderTarget(r,4,o),e.render(n,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(v,_,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class by extends Qn{constructor(e=[],n=ns,r,o,c,u,h,d,p,g){super(e,n,r,o,c,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ty extends ua{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new by(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ll(5,5,5),c=new da({name:"CubemapFromEquirect",uniforms:ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:di,blending:Ia});c.uniforms.tEquirect.value=n;const u=new Ga(o,c),h=n.minFilter;return n.minFilter===es&&(n.minFilter=Kn),new b1(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}class Qs extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T1={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const S=n.getJointPose(b,r),x=this._getHandJoint(p,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,M=.005;p.inputState.pinching&&_>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(T1)))}return h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Qs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class om{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(e),this.density=n}clone(){return new om(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class A1 extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Va,this.environmentIntensity=1,this.environmentRotation=new Va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class R1 extends Qn{constructor(e=null,n=1,r=1,o,c,u,h,d,p=Xn,g=Xn,v,_){super(null,u,h,d,p,g,o,c,v,_),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ah=new de,w1=new de,C1=new Rt;class Kr{constructor(e=new de(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Ah.subVectors(r,n).cross(w1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ah),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||C1.getNormalMatrix(e),o=this.coplanarPoint(Ah).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Ul,D1=new sn(.5,.5),ru=new de;class Ay{constructor(e=new Kr,n=new Kr,r=new Kr,o=new Kr,c=new Kr,u=new Kr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ra,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],d=c[2],p=c[3],g=c[4],v=c[5],_=c[6],y=c[7],M=c[8],b=c[9],S=c[10],x=c[11],U=c[12],C=c[13],I=c[14],O=c[15];if(o[0].setComponents(p-u,y-g,x-M,O-U).normalize(),o[1].setComponents(p+u,y+g,x+M,O+U).normalize(),o[2].setComponents(p+h,y+v,x+b,O+C).normalize(),o[3].setComponents(p-h,y-v,x-b,O-C).normalize(),r)o[4].setComponents(d,_,S,I).normalize(),o[5].setComponents(p-d,y-_,x-S,O-I).normalize();else if(o[4].setComponents(p-d,y-_,x-S,O-I).normalize(),n===ra)o[5].setComponents(p+d,y+_,x+S,O+I).normalize();else if(n===Cu)o[5].setComponents(d,_,S,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const n=D1.distanceTo(e.center);return qr.radius=.7071067811865476+n,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(ru.x=o.normal.x>0?e.max.x:e.min.x,ru.y=o.normal.y>0?e.max.y:e.min.y,ru.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ry extends oo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nu=new de,Uu=new de,X_=new yn,dl=new sm,su=new Ul,Rh=new de,W_=new de;class N1 extends ni{constructor(e=new ti,n=new Ry){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Nu.fromBufferAttribute(n,o-1),Uu.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Nu.distanceTo(Uu);e.setAttribute("lineDistance",new Ei(r,1))}else vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),su.copy(r.boundingSphere),su.applyMatrix4(o),su.radius+=c,e.ray.intersectsSphere(su)===!1)return;X_.copy(o).invert(),dl.copy(e.ray).applyMatrix4(X_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let b=y,S=M-1;b<S;b+=p){const x=g.getX(b),U=g.getX(b+1),C=ou(this,e,dl,d,x,U,b);C&&n.push(C)}if(this.isLineLoop){const b=g.getX(M-1),S=g.getX(y),x=ou(this,e,dl,d,b,S,M-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let b=y,S=M-1;b<S;b+=p){const x=ou(this,e,dl,d,b,b+1,b);x&&n.push(x)}if(this.isLineLoop){const b=ou(this,e,dl,d,M-1,y,M-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function ou(a,e,n,r,o,c,u){const h=a.geometry.attributes.position;if(Nu.fromBufferAttribute(h,o),Uu.fromBufferAttribute(h,c),n.distanceSqToSegment(Nu,Uu,Rh,W_)>r)return;Rh.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(Rh);if(!(p<e.near||p>e.far))return{distance:p,point:W_.clone().applyMatrix4(a.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:a}}const j_=new de,q_=new de;class U1 extends N1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)j_.fromBufferAttribute(n,o),q_.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+j_.distanceTo(q_);e.setAttribute("lineDistance",new Ei(r,1))}else vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Su extends oo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Y_=new yn,Lp=new sm,lu=new Ul,cu=new de;class wh extends ni{constructor(e=new ti,n=new Su){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),lu.copy(r.boundingSphere),lu.applyMatrix4(o),lu.radius+=c,e.ray.intersectsSphere(lu)===!1)return;Y_.copy(o).invert(),Lp.copy(e.ray).applyMatrix4(Y_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=r.index,v=r.attributes.position;if(p!==null){const _=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let M=_,b=y;M<b;M++){const S=p.getX(M);cu.fromBufferAttribute(v,S),Z_(cu,S,d,o,e,n,this)}}else{const _=Math.max(0,u.start),y=Math.min(v.count,u.start+u.count);for(let M=_,b=y;M<b;M++)cu.fromBufferAttribute(v,M),Z_(cu,M,d,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Z_(a,e,n,r,o,c,u){const h=Lp.distanceSqToPoint(a);if(h<n){const d=new de;Lp.closestPointToPoint(a,d),d.applyMatrix4(r);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class K_ extends Qn{constructor(e,n,r,o,c,u,h,d,p){super(e,n,r,o,c,u,h,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tl extends Qn{constructor(e,n,r=fa,o,c,u,h=Xn,d=Xn,p,g=Ha,v=1){if(g!==Ha&&g!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:v};super(_,o,c,u,h,d,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class L1 extends Tl{constructor(e,n=fa,r=ns,o,c,u=Xn,h=Xn,d,p=Ha){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,n,r,o,c,u,h,d,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wy extends Qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bu extends ti{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(r),d=Math.floor(o),p=h+1,g=d+1,v=e/h,_=n/d,y=[],M=[],b=[],S=[];for(let x=0;x<g;x++){const U=x*_-u;for(let C=0;C<p;C++){const I=C*v-c;M.push(I,-U,0),b.push(0,0,1),S.push(C/h),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let U=0;U<h;U++){const C=U+p*x,I=U+p*(x+1),O=U+1+p*(x+1),R=U+1+p*x;y.push(C,I,R),y.push(I,O,R)}this.setIndex(y),this.setAttribute("position",new Ei(M,3)),this.setAttribute("normal",new Ei(b,3)),this.setAttribute("uv",new Ei(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.widthSegments,e.heightSegments)}}class P1 extends da{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class O1 extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I1 extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cy extends Ey{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+n,d=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class F1 extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Q_(a,e,n,r){const o=B1(r);switch(n){case dy:return a*e;case py:return a*e/o.components*o.byteLength;case em:return a*e/o.components*o.byteLength;case io:return a*e*2/o.components*o.byteLength;case tm:return a*e*2/o.components*o.byteLength;case hy:return a*e*3/o.components*o.byteLength;case ji:return a*e*4/o.components*o.byteLength;case nm:return a*e*4/o.components*o.byteLength;case vu:case _u:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case xu:case yu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case tp:case ip:return Math.max(a,16)*Math.max(e,8)/4;case ep:case np:return Math.max(a,8)*Math.max(e,8)/2;case ap:case rp:case op:case lp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case sp:case cp:case up:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case fp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case hp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case pp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case mp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case gp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case vp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case _p:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case xp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case yp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Ep:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case bp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Tp:case Ap:case Rp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case wp:case Cp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Dp:case Np:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function B1(a){switch(a){case Ii:case ly:return{byteLength:1,components:1};case Ml:case cy:case za:return{byteLength:2,components:1};case Jp:case $p:return{byteLength:2,components:4};case fa:case Qp:case aa:return{byteLength:4,components:1};case uy:case fy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kp}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dy(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function z1(a){const e=new WeakMap;function n(h,d){const p=h.array,g=h.usage,v=p.byteLength,_=a.createBuffer();a.bindBuffer(d,_),a.bufferData(d,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=a.SHORT;else if(p instanceof Uint32Array)y=a.UNSIGNED_INT;else if(p instanceof Int32Array)y=a.INT;else if(p instanceof Int8Array)y=a.BYTE;else if(p instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,d,p){const g=d.array,v=d.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,g);else{v.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<v.length;y++){const M=v[_],b=v[y];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++_,v[_]=b)}v.length=_+1;for(let y=0,M=v.length;y<M;y++){const b=v[y];a.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(a.deleteBuffer(d.buffer),e.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,d),p.version=h.version}}return{get:o,remove:c,update:u}}var H1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,G1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gA="gl_FragColor = linearToOutputTexel( gl_FragColor );",vA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_A=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,SA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,EA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,UA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$A=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_R=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,MR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ER=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ZR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$R=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ow=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_w=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wt={alphahash_fragment:H1,alphahash_pars_fragment:V1,alphamap_fragment:G1,alphamap_pars_fragment:k1,alphatest_fragment:X1,alphatest_pars_fragment:W1,aomap_fragment:j1,aomap_pars_fragment:q1,batching_pars_vertex:Y1,batching_vertex:Z1,begin_vertex:K1,beginnormal_vertex:Q1,bsdfs:J1,iridescence_fragment:$1,bumpmap_pars_fragment:eA,clipping_planes_fragment:tA,clipping_planes_pars_fragment:nA,clipping_planes_pars_vertex:iA,clipping_planes_vertex:aA,color_fragment:rA,color_pars_fragment:sA,color_pars_vertex:oA,color_vertex:lA,common:cA,cube_uv_reflection_fragment:uA,defaultnormal_vertex:fA,displacementmap_pars_vertex:dA,displacementmap_vertex:hA,emissivemap_fragment:pA,emissivemap_pars_fragment:mA,colorspace_fragment:gA,colorspace_pars_fragment:vA,envmap_fragment:_A,envmap_common_pars_fragment:xA,envmap_pars_fragment:yA,envmap_pars_vertex:SA,envmap_physical_pars_fragment:UA,envmap_vertex:MA,fog_vertex:EA,fog_pars_vertex:bA,fog_fragment:TA,fog_pars_fragment:AA,gradientmap_pars_fragment:RA,lightmap_pars_fragment:wA,lights_lambert_fragment:CA,lights_lambert_pars_fragment:DA,lights_pars_begin:NA,lights_toon_fragment:LA,lights_toon_pars_fragment:PA,lights_phong_fragment:OA,lights_phong_pars_fragment:IA,lights_physical_fragment:FA,lights_physical_pars_fragment:BA,lights_fragment_begin:zA,lights_fragment_maps:HA,lights_fragment_end:VA,logdepthbuf_fragment:GA,logdepthbuf_pars_fragment:kA,logdepthbuf_pars_vertex:XA,logdepthbuf_vertex:WA,map_fragment:jA,map_pars_fragment:qA,map_particle_fragment:YA,map_particle_pars_fragment:ZA,metalnessmap_fragment:KA,metalnessmap_pars_fragment:QA,morphinstance_vertex:JA,morphcolor_vertex:$A,morphnormal_vertex:eR,morphtarget_pars_vertex:tR,morphtarget_vertex:nR,normal_fragment_begin:iR,normal_fragment_maps:aR,normal_pars_fragment:rR,normal_pars_vertex:sR,normal_vertex:oR,normalmap_pars_fragment:lR,clearcoat_normal_fragment_begin:cR,clearcoat_normal_fragment_maps:uR,clearcoat_pars_fragment:fR,iridescence_pars_fragment:dR,opaque_fragment:hR,packing:pR,premultiplied_alpha_fragment:mR,project_vertex:gR,dithering_fragment:vR,dithering_pars_fragment:_R,roughnessmap_fragment:xR,roughnessmap_pars_fragment:yR,shadowmap_pars_fragment:SR,shadowmap_pars_vertex:MR,shadowmap_vertex:ER,shadowmask_pars_fragment:bR,skinbase_vertex:TR,skinning_pars_vertex:AR,skinning_vertex:RR,skinnormal_vertex:wR,specularmap_fragment:CR,specularmap_pars_fragment:DR,tonemapping_fragment:NR,tonemapping_pars_fragment:UR,transmission_fragment:LR,transmission_pars_fragment:PR,uv_pars_fragment:OR,uv_pars_vertex:IR,uv_vertex:FR,worldpos_vertex:BR,background_vert:zR,background_frag:HR,backgroundCube_vert:VR,backgroundCube_frag:GR,cube_vert:kR,cube_frag:XR,depth_vert:WR,depth_frag:jR,distance_vert:qR,distance_frag:YR,equirect_vert:ZR,equirect_frag:KR,linedashed_vert:QR,linedashed_frag:JR,meshbasic_vert:$R,meshbasic_frag:ew,meshlambert_vert:tw,meshlambert_frag:nw,meshmatcap_vert:iw,meshmatcap_frag:aw,meshnormal_vert:rw,meshnormal_frag:sw,meshphong_vert:ow,meshphong_frag:lw,meshphysical_vert:cw,meshphysical_frag:uw,meshtoon_vert:fw,meshtoon_frag:dw,points_vert:hw,points_frag:pw,shadow_vert:mw,shadow_frag:gw,sprite_vert:vw,sprite_frag:_w},Xe={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new sn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new sn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},na={basic:{uniforms:ei([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:ei([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new It(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:ei([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:ei([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:ei([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new It(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:ei([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:ei([Xe.points,Xe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:ei([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:ei([Xe.common,Xe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:ei([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:ei([Xe.sprite,Xe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:ei([Xe.common,Xe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:ei([Xe.lights,Xe.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};na.physical={uniforms:ei([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new sn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new sn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new sn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const uu={r:0,b:0,g:0},Yr=new Va,xw=new yn;function yw(a,e,n,r,o,c,u){const h=new It(0);let d=c===!0?0:1,p,g,v=null,_=0,y=null;function M(C){let I=C.isScene===!0?C.background:null;return I&&I.isTexture&&(I=(C.backgroundBlurriness>0?n:e).get(I)),I}function b(C){let I=!1;const O=M(C);O===null?x(h,d):O&&O.isColor&&(x(O,1),I=!0);const R=a.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,u):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(a.autoClear||I)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(C,I){const O=M(I);O&&(O.isCubeTexture||O.mapping===Fu)?(g===void 0&&(g=new Ga(new Ll(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:ro(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(R,H,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Yr.copy(I.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(xw.makeRotationFromEuler(Yr)),g.material.toneMapped=kt.getTransfer(O.colorSpace)!==tn,(v!==O||_!==O.version||y!==a.toneMapping)&&(g.material.needsUpdate=!0,v=O,_=O.version,y=a.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Ga(new Bu(2,2),new da({name:"BackgroundMaterial",uniforms:ro(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=kt.getTransfer(O.colorSpace)!==tn,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||_!==O.version||y!==a.toneMapping)&&(p.material.needsUpdate=!0,v=O,_=O.version,y=a.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function x(C,I){C.getRGB(uu,My(a)),r.buffers.color.setClear(uu.r,uu.g,uu.b,I,u)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,I=1){h.set(C),d=I,x(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,x(h,d)},render:b,addToRenderList:S,dispose:U}}function Sw(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function h(D,k,ne,Z,ce){let re=!1;const L=v(Z,ne,k);c!==L&&(c=L,p(c.object)),re=y(D,Z,ne,ce),re&&M(D,Z,ne,ce),ce!==null&&e.update(ce,a.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,I(D,k,ne,Z),ce!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function d(){return a.createVertexArray()}function p(D){return a.bindVertexArray(D)}function g(D){return a.deleteVertexArray(D)}function v(D,k,ne){const Z=ne.wireframe===!0;let ce=r[D.id];ce===void 0&&(ce={},r[D.id]=ce);let re=ce[k.id];re===void 0&&(re={},ce[k.id]=re);let L=re[Z];return L===void 0&&(L=_(d()),re[Z]=L),L}function _(D){const k=[],ne=[],Z=[];for(let ce=0;ce<n;ce++)k[ce]=0,ne[ce]=0,Z[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:Z,object:D,attributes:{},index:null}}function y(D,k,ne,Z){const ce=c.attributes,re=k.attributes;let L=0;const F=ne.getAttributes();for(const Y in F)if(F[Y].location>=0){const P=ce[Y];let K=re[Y];if(K===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;L++}return c.attributesNum!==L||c.index!==Z}function M(D,k,ne,Z){const ce={},re=k.attributes;let L=0;const F=ne.getAttributes();for(const Y in F)if(F[Y].location>=0){let P=re[Y];P===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(P=D.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),ce[Y]=K,L++}c.attributes=ce,c.attributesNum=L,c.index=Z}function b(){const D=c.newAttributes;for(let k=0,ne=D.length;k<ne;k++)D[k]=0}function S(D){x(D,0)}function x(D,k){const ne=c.newAttributes,Z=c.enabledAttributes,ce=c.attributeDivisors;ne[D]=1,Z[D]===0&&(a.enableVertexAttribArray(D),Z[D]=1),ce[D]!==k&&(a.vertexAttribDivisor(D,k),ce[D]=k)}function U(){const D=c.newAttributes,k=c.enabledAttributes;for(let ne=0,Z=k.length;ne<Z;ne++)k[ne]!==D[ne]&&(a.disableVertexAttribArray(ne),k[ne]=0)}function C(D,k,ne,Z,ce,re,L){L===!0?a.vertexAttribIPointer(D,k,ne,ce,re):a.vertexAttribPointer(D,k,ne,Z,ce,re)}function I(D,k,ne,Z){b();const ce=Z.attributes,re=ne.getAttributes(),L=k.defaultAttributeValues;for(const F in re){const Y=re[F];if(Y.location>=0){let xe=ce[F];if(xe===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),xe!==void 0){const P=xe.normalized,K=xe.itemSize,Se=e.get(xe);if(Se===void 0)continue;const ve=Se.buffer,Oe=Se.type,Ze=Se.bytesPerElement,ae=Oe===a.INT||Oe===a.UNSIGNED_INT||xe.gpuType===Qp;if(xe.isInterleavedBufferAttribute){const be=xe.data,Ue=be.stride,ft=xe.offset;if(be.isInstancedInterleavedBuffer){for(let ze=0;ze<Y.locationSize;ze++)x(Y.location+ze,be.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ze=0;ze<Y.locationSize;ze++)S(Y.location+ze);a.bindBuffer(a.ARRAY_BUFFER,ve);for(let ze=0;ze<Y.locationSize;ze++)C(Y.location+ze,K/Y.locationSize,Oe,P,Ue*Ze,(ft+K/Y.locationSize*ze)*Ze,ae)}else{if(xe.isInstancedBufferAttribute){for(let be=0;be<Y.locationSize;be++)x(Y.location+be,xe.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let be=0;be<Y.locationSize;be++)S(Y.location+be);a.bindBuffer(a.ARRAY_BUFFER,ve);for(let be=0;be<Y.locationSize;be++)C(Y.location+be,K/Y.locationSize,Oe,P,K*Ze,K/Y.locationSize*be*Ze,ae)}}else if(L!==void 0){const P=L[F];if(P!==void 0)switch(P.length){case 2:a.vertexAttrib2fv(Y.location,P);break;case 3:a.vertexAttrib3fv(Y.location,P);break;case 4:a.vertexAttrib4fv(Y.location,P);break;default:a.vertexAttrib1fv(Y.location,P)}}}}U()}function O(){X();for(const D in r){const k=r[D];for(const ne in k){const Z=k[ne];for(const ce in Z)g(Z[ce].object),delete Z[ce];delete k[ne]}delete r[D]}}function R(D){if(r[D.id]===void 0)return;const k=r[D.id];for(const ne in k){const Z=k[ne];for(const ce in Z)g(Z[ce].object),delete Z[ce];delete k[ne]}delete r[D.id]}function H(D){for(const k in r){const ne=r[k];if(ne[D.id]===void 0)continue;const Z=ne[D.id];for(const ce in Z)g(Z[ce].object),delete Z[ce];delete ne[D.id]}}function X(){A(),u=!0,c!==o&&(c=o,p(c.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:X,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:H,initAttributes:b,enableAttribute:S,disableUnusedAttributes:U}}function Mw(a,e,n){let r;function o(p){r=p}function c(p,g){a.drawArrays(r,p,g),n.update(g,r,1)}function u(p,g,v){v!==0&&(a.drawArraysInstanced(r,p,g,v),n.update(g,r,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let M=0;M<v;M++)y+=g[M];n.update(y,r,1)}function d(p,g,v,_){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)u(p[M],g[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b]*_[b];n.update(M,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ew(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(H){return!(H!==ji&&r.convert(H)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const X=H===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==Ii&&r.convert(H)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==aa&&!X)}function d(H){if(H==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(vt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),C=a.getParameter(a.MAX_VARYING_VECTORS),I=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),R=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:U,maxVaryings:C,maxFragmentUniforms:I,maxSamples:O,samples:R}}function bw(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Kr,h=new Rt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||r!==0||o;return o=_,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,y){const M=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,x=a.get(v);if(!o||M===null||M.length===0||c&&!S)c?g(null):p();else{const U=c?0:r,C=U*4;let I=x.clippingState||null;d.value=I,I=g(M,_,C,y);for(let O=0;O!==C;++O)I[O]=n[O];x.clippingState=I,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,y,M){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=d.value,M!==!0||S===null){const x=y+b*4,U=_.matrixWorldInverse;h.getNormalMatrix(U),(S===null||S.length<x)&&(S=new Float32Array(x));for(let C=0,I=y;C!==b;++C,I+=4)u.copy(v[C]).applyMatrix4(U,h),u.normal.toArray(S,I),S[I+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function Tw(a){let e=new WeakMap;function n(u,h){return h===Kh?u.mapping=ns:h===Qh&&(u.mapping=no),u}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===Kh||h===Qh)if(e.has(u)){const d=e.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new Ty(d.height);return p.fromEquirectangularTexture(a,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Er=4,J_=[.125,.215,.35,.446,.526,.582],Jr=20,Aw=256,hl=new Cy,$_=new It;let Ch=null,Dh=0,Nh=0,Uh=!1;const Rw=new de;class ex{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:h=Rw}=c;Ch=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,h),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ch,Dh,Nh),this._renderer.xr.enabled=Uh,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ch=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:za,format:ji,colorSpace:ao,depthBuffer:!1},o=tx(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tx(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ww(c)),this._blurMaterial=Dw(c,e,n),this._ggxMaterial=Cw(c,e,n)}return o}_compileMaterial(e){const n=new Ga(new ti,e);this._renderer.compile(n,hl)}_sceneToCubeUV(e,n,r,o,c){const d=new Oi(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor($_),v.toneMapping=ca,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ga(new Ll,new xy({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,S=b.material;let x=!1;const U=e.background;U?U.isColor&&(S.color.copy(U),e.background=null,x=!0):(S.color.copy($_),x=!0);for(let C=0;C<6;C++){const I=C%3;I===0?(d.up.set(0,p[C],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[C],c.y,c.z)):I===1?(d.up.set(0,0,p[C]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[C],c.z)):(d.up.set(0,p[C],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[C]));const O=this._cubeSize;Zs(o,I*O,C>2?O:0,O,O),v.setRenderTarget(o),x&&v.render(b,d),v.render(e,d)}v.toneMapping=y,v.autoClear=_,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ns||e.mapping===no;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ix()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nx());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const d=this._cubeSize;Zs(n,0,0,3*d,2*d),r.setRenderTarget(n),r.render(u,hl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const d=u.uniforms,p=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),_=0+p*1.25,y=v*_,{_lodMax:M}=this,b=this._sizeLods[r],S=3*b*(r>M-Er?r-M+Er:0),x=4*(this._cubeSize-b);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-n,Zs(c,S,x,3*b,2*b),o.setRenderTarget(c),o.render(h,hl),d.envMap.value=c.texture,d.roughness.value=0,d.mipInt.value=M-r,Zs(e,S,x,3*b,2*b),o.setRenderTarget(e),o.render(h,hl)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&qt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=p;const _=p.uniforms,y=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Jr-1),b=c/M,S=isFinite(c)?1+Math.floor(g*b):Jr;S>Jr&&vt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Jr}`);const x=[];let U=0;for(let H=0;H<Jr;++H){const X=H/b,A=Math.exp(-X*X/2);x.push(A),H===0?U+=A:H<S&&(U+=2*A)}for(let H=0;H<x.length;H++)x[H]=x[H]/U;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:C}=this;_.dTheta.value=M,_.mipInt.value=C-r;const I=this._sizeLods[o],O=3*I*(o>C-Er?o-C+Er:0),R=4*(this._cubeSize-I);Zs(n,O,R,3*I,2*I),d.setRenderTarget(n),d.render(v,hl)}}function ww(a){const e=[],n=[],r=[];let o=a;const c=a-Er+1+J_.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let d=1/h;u>a-Er?d=J_[u-a+Er-1]:u===0&&(d=0),n.push(d);const p=1/(h-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,M=6,b=3,S=2,x=1,U=new Float32Array(b*M*y),C=new Float32Array(S*M*y),I=new Float32Array(x*M*y);for(let R=0;R<y;R++){const H=R%3*2/3-1,X=R>2?0:-1,A=[H,X,0,H+2/3,X,0,H+2/3,X+1,0,H,X,0,H+2/3,X+1,0,H,X+1,0];U.set(A,b*M*R),C.set(_,S*M*R);const D=[R,R,R,R,R,R];I.set(D,x*M*R)}const O=new ti;O.setAttribute("position",new fi(U,b)),O.setAttribute("uv",new fi(C,S)),O.setAttribute("faceIndex",new fi(I,x)),r.push(new Ga(O,null)),o>Er&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function tx(a,e,n){const r=new ua(a,e,n);return r.texture.mapping=Fu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zs(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function Cw(a,e,n){return new da({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Aw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Dw(a,e,n){const r=new Float32Array(Jr),o=new de(0,1,0);return new da({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function nx(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function ix(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nw(a){let e=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const d=h.mapping,p=d===Kh||d===Qh,g=d===ns||d===no;if(p||g){let v=e.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new ex(a)),v=p?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new ex(a)),v=p?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Uw(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&bl("WebGLRenderer: "+r+" extension not supported."),o}}}function Lw(a,e,n,r){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function d(v){const _=v.attributes;for(const y in _)e.update(_[y],a.ARRAY_BUFFER)}function p(v){const _=[],y=v.index,M=v.attributes.position;let b=0;if(y!==null){const U=y.array;b=y.version;for(let C=0,I=U.length;C<I;C+=3){const O=U[C+0],R=U[C+1],H=U[C+2];_.push(O,R,R,H,H,O)}}else if(M!==void 0){const U=M.array;b=M.version;for(let C=0,I=U.length/3-1;C<I;C+=3){const O=C+0,R=C+1,H=C+2;_.push(O,R,R,H,H,O)}}else return;const S=new(my(_)?Sy:yy)(_,1);S.version=b;const x=c.get(v);x&&e.remove(x),c.set(v,S)}function g(v){const _=c.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:d,getWireframeAttribute:g}}function Pw(a,e,n){let r;function o(_){r=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function d(_,y){a.drawElements(r,y,c,_*u),n.update(y,r,1)}function p(_,y,M){M!==0&&(a.drawElementsInstanced(r,y,c,_*u,M),n.update(y,r,M))}function g(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];n.update(S,r,1)}function v(_,y,M,b){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)p(_[x]/u,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,c,_,0,b,0,M);let x=0;for(let U=0;U<M;U++)x+=y[U]*b[U];n.update(x,r,1)}}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function Ow(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:qt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Iw(a,e,n){const r=new WeakMap,o=new bn;function c(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let D=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var y=D;_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let I=0;M===!0&&(I=1),b===!0&&(I=2),S===!0&&(I=3);let O=h.attributes.position.count*I,R=1;O>e.maxTextureSize&&(R=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const H=new Float32Array(O*R*4*v),X=new gy(H,O,R,v);X.type=aa,X.needsUpdate=!0;const A=I*4;for(let k=0;k<v;k++){const ne=x[k],Z=U[k],ce=C[k],re=O*R*4*k;for(let L=0;L<ne.count;L++){const F=L*A;M===!0&&(o.fromBufferAttribute(ne,L),H[re+F+0]=o.x,H[re+F+1]=o.y,H[re+F+2]=o.z,H[re+F+3]=0),b===!0&&(o.fromBufferAttribute(Z,L),H[re+F+4]=o.x,H[re+F+5]=o.y,H[re+F+6]=o.z,H[re+F+7]=0),S===!0&&(o.fromBufferAttribute(ce,L),H[re+F+8]=o.x,H[re+F+9]=o.y,H[re+F+10]=o.z,H[re+F+11]=ce.itemSize===4?o.w:1)}}_={count:v,texture:X,size:new sn(O,R)},r.set(h,_),h.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const b=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(a,"morphTargetBaseInfluence",b),d.getUniforms().setValue(a,"morphTargetInfluences",p)}d.getUniforms().setValue(a,"morphTargetsTexture",_.texture,n),d.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function Fw(a,e,n,r){let o=new WeakMap;function c(d){const p=r.render.frame,g=d.geometry,v=e.get(d,g);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),o.get(d)!==p&&(n.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,a.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return v}function u(){o=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const Bw={[ey]:"LINEAR_TONE_MAPPING",[ty]:"REINHARD_TONE_MAPPING",[ny]:"CINEON_TONE_MAPPING",[iy]:"ACES_FILMIC_TONE_MAPPING",[ry]:"AGX_TONE_MAPPING",[sy]:"NEUTRAL_TONE_MAPPING",[ay]:"CUSTOM_TONE_MAPPING"};function zw(a,e,n,r,o){const c=new ua(e,n,{type:a,depthBuffer:r,stencilBuffer:o}),u=new ua(e,n,{type:za,depthBuffer:!1,stencilBuffer:!1}),h=new ti;h.setAttribute("position",new Ei([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ei([0,2,0,0,2,0],2));const d=new P1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ga(h,d),g=new Cy(-1,1,1,-1,0,1);let v=null,_=null,y=!1,M,b=null,S=[],x=!1;this.setSize=function(U,C){c.setSize(U,C),u.setSize(U,C);for(let I=0;I<S.length;I++){const O=S[I];O.setSize&&O.setSize(U,C)}},this.setEffects=function(U){S=U,x=S.length>0&&S[0].isRenderPass===!0;const C=c.width,I=c.height;for(let O=0;O<S.length;O++){const R=S[O];R.setSize&&R.setSize(C,I)}},this.begin=function(U,C){if(y||U.toneMapping===ca&&S.length===0)return!1;if(b=C,C!==null){const I=C.width,O=C.height;(c.width!==I||c.height!==O)&&this.setSize(I,O)}return x===!1&&U.setRenderTarget(c),M=U.toneMapping,U.toneMapping=ca,!0},this.hasRenderPass=function(){return x},this.end=function(U,C){U.toneMapping=M,y=!0;let I=c,O=u;for(let R=0;R<S.length;R++){const H=S[R];if(H.enabled!==!1&&(H.render(U,O,I,C),H.needsSwap!==!1)){const X=I;I=O,O=X}}if(v!==U.outputColorSpace||_!==U.toneMapping){v=U.outputColorSpace,_=U.toneMapping,d.defines={},kt.getTransfer(v)===tn&&(d.defines.SRGB_TRANSFER="");const R=Bw[_];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=I.texture,U.setRenderTarget(b),U.render(p,g),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),h.dispose(),d.dispose()}}const Ny=new Qn,Pp=new Tl(1,1),Uy=new gy,Ly=new l1,Py=new by,ax=[],rx=[],sx=new Float32Array(16),ox=new Float32Array(9),lx=new Float32Array(4);function lo(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=ax[o];if(c===void 0&&(c=new Float32Array(o),ax[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,a[u].toArray(c,h)}return c}function Un(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function Ln(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Hu(a,e){let n=rx[e];n===void 0&&(n=new Int32Array(e),rx[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function Hw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function Vw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Un(n,e))return;a.uniform2fv(this.addr,e),Ln(n,e)}}function Gw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Un(n,e))return;a.uniform3fv(this.addr,e),Ln(n,e)}}function kw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Un(n,e))return;a.uniform4fv(this.addr,e),Ln(n,e)}}function Xw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Un(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ln(n,e)}else{if(Un(n,r))return;lx.set(r),a.uniformMatrix2fv(this.addr,!1,lx),Ln(n,r)}}function Ww(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Un(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ln(n,e)}else{if(Un(n,r))return;ox.set(r),a.uniformMatrix3fv(this.addr,!1,ox),Ln(n,r)}}function jw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Un(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ln(n,e)}else{if(Un(n,r))return;sx.set(r),a.uniformMatrix4fv(this.addr,!1,sx),Ln(n,r)}}function qw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function Yw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Un(n,e))return;a.uniform2iv(this.addr,e),Ln(n,e)}}function Zw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Un(n,e))return;a.uniform3iv(this.addr,e),Ln(n,e)}}function Kw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Un(n,e))return;a.uniform4iv(this.addr,e),Ln(n,e)}}function Qw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function Jw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Un(n,e))return;a.uniform2uiv(this.addr,e),Ln(n,e)}}function $w(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Un(n,e))return;a.uniform3uiv(this.addr,e),Ln(n,e)}}function eC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Un(n,e))return;a.uniform4uiv(this.addr,e),Ln(n,e)}}function tC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Pp.compareFunction=n.isReversedDepthBuffer()?am:im,c=Pp):c=Ny,n.setTexture2D(e||c,o)}function nC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Ly,o)}function iC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Py,o)}function aC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Uy,o)}function rC(a){switch(a){case 5126:return Hw;case 35664:return Vw;case 35665:return Gw;case 35666:return kw;case 35674:return Xw;case 35675:return Ww;case 35676:return jw;case 5124:case 35670:return qw;case 35667:case 35671:return Yw;case 35668:case 35672:return Zw;case 35669:case 35673:return Kw;case 5125:return Qw;case 36294:return Jw;case 36295:return $w;case 36296:return eC;case 35678:case 36198:case 36298:case 36306:case 35682:return tC;case 35679:case 36299:case 36307:return nC;case 35680:case 36300:case 36308:case 36293:return iC;case 36289:case 36303:case 36311:case 36292:return aC}}function sC(a,e){a.uniform1fv(this.addr,e)}function oC(a,e){const n=lo(e,this.size,2);a.uniform2fv(this.addr,n)}function lC(a,e){const n=lo(e,this.size,3);a.uniform3fv(this.addr,n)}function cC(a,e){const n=lo(e,this.size,4);a.uniform4fv(this.addr,n)}function uC(a,e){const n=lo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function fC(a,e){const n=lo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function dC(a,e){const n=lo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function hC(a,e){a.uniform1iv(this.addr,e)}function pC(a,e){a.uniform2iv(this.addr,e)}function mC(a,e){a.uniform3iv(this.addr,e)}function gC(a,e){a.uniform4iv(this.addr,e)}function vC(a,e){a.uniform1uiv(this.addr,e)}function _C(a,e){a.uniform2uiv(this.addr,e)}function xC(a,e){a.uniform3uiv(this.addr,e)}function yC(a,e){a.uniform4uiv(this.addr,e)}function SC(a,e,n){const r=this.cache,o=e.length,c=Hu(n,o);Un(r,c)||(a.uniform1iv(this.addr,c),Ln(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=Pp:u=Ny;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function MC(a,e,n){const r=this.cache,o=e.length,c=Hu(n,o);Un(r,c)||(a.uniform1iv(this.addr,c),Ln(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Ly,c[u])}function EC(a,e,n){const r=this.cache,o=e.length,c=Hu(n,o);Un(r,c)||(a.uniform1iv(this.addr,c),Ln(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Py,c[u])}function bC(a,e,n){const r=this.cache,o=e.length,c=Hu(n,o);Un(r,c)||(a.uniform1iv(this.addr,c),Ln(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Uy,c[u])}function TC(a){switch(a){case 5126:return sC;case 35664:return oC;case 35665:return lC;case 35666:return cC;case 35674:return uC;case 35675:return fC;case 35676:return dC;case 5124:case 35670:return hC;case 35667:case 35671:return pC;case 35668:case 35672:return mC;case 35669:case 35673:return gC;case 5125:return vC;case 36294:return _C;case 36295:return xC;case 36296:return yC;case 35678:case 36198:case 36298:case 36306:case 35682:return SC;case 35679:case 36299:case 36307:return MC;case 35680:case 36300:case 36308:case 36293:return EC;case 36289:case 36303:case 36311:case 36292:return bC}}class AC{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=rC(n.type)}}class RC{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TC(n.type)}}class wC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],r)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function cx(a,e){a.seq.push(e),a.map[e.id]=e}function CC(a,e,n){const r=a.name,o=r.length;for(Lh.lastIndex=0;;){const c=Lh.exec(r),u=Lh.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===o){cx(n,p===void 0?new AC(h,a,e):new RC(h,a,e));break}else{let v=n.map[h];v===void 0&&(v=new wC(h),cx(n,v)),n=v}}}class Mu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(n,u),d=e.getUniformLocation(n,h.name);CC(h,d,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],d=r[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function ux(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const DC=37297;let NC=0;function UC(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return r.join(`
`)}const fx=new Rt;function LC(a){kt._getMatrix(fx,kt.workingColorSpace,a);const e=`mat3( ${fx.elements.map(n=>n.toFixed(4))} )`;switch(kt.getTransfer(a)){case wu:return[e,"LinearTransferOETF"];case tn:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function dx(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+UC(a.getShaderSource(e),h)}else return c}function PC(a,e){const n=LC(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const OC={[ey]:"Linear",[ty]:"Reinhard",[ny]:"Cineon",[iy]:"ACESFilmic",[ry]:"AgX",[sy]:"Neutral",[ay]:"Custom"};function IC(a,e){const n=OC[e];return n===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fu=new de;function FC(){kt.getLuminanceCoefficients(fu);const a=fu.x.toFixed(4),e=fu.y.toFixed(4),n=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BC(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function zC(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function HC(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return n}function vl(a){return a!==""}function hx(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function px(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Op(a){return a.replace(VC,kC)}const GC=new Map;function kC(a,e){let n=wt[e];if(n===void 0){const r=GC.get(e);if(r!==void 0)n=wt[r],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Op(n)}const XC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mx(a){return a.replace(XC,WC)}function WC(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function gx(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jC={[gu]:"SHADOWMAP_TYPE_PCF",[gl]:"SHADOWMAP_TYPE_VSM"};function qC(a){return jC[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YC={[ns]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE",[Fu]:"ENVMAP_TYPE_CUBE_UV"};function ZC(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":YC[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const KC={[no]:"ENVMAP_MODE_REFRACTION"};function QC(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":KC[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JC={[$x]:"ENVMAP_BLENDING_MULTIPLY",[GT]:"ENVMAP_BLENDING_MIX",[kT]:"ENVMAP_BLENDING_ADD"};function $C(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":JC[a.combine]||"ENVMAP_BLENDING_NONE"}function e3(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function t3(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const d=qC(n),p=ZC(n),g=QC(n),v=$C(n),_=e3(n),y=BC(n),M=zC(c),b=o.createProgram();let S,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(vl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(vl).join(`
`),x.length>0&&(x+=`
`)):(S=[gx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),x=[gx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ca?"#define TONE_MAPPING":"",n.toneMapping!==ca?wt.tonemapping_pars_fragment:"",n.toneMapping!==ca?IC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,PC("linearToOutputTexel",n.outputColorSpace),FC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vl).join(`
`)),u=Op(u),u=hx(u,n),u=px(u,n),h=Op(h),h=hx(h,n),h=px(h,n),u=mx(u),h=mx(h),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===T_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===T_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=U+S+u,I=U+x+h,O=ux(o,o.VERTEX_SHADER,C),R=ux(o,o.FRAGMENT_SHADER,I);o.attachShader(b,O),o.attachShader(b,R),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function H(k){if(a.debug.checkShaderErrors){const ne=o.getProgramInfoLog(b)||"",Z=o.getShaderInfoLog(O)||"",ce=o.getShaderInfoLog(R)||"",re=ne.trim(),L=Z.trim(),F=ce.trim();let Y=!0,xe=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,b,O,R);else{const P=dx(o,O,"vertex"),K=dx(o,R,"fragment");qt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+re+`
`+P+`
`+K)}else re!==""?vt("WebGLProgram: Program Info Log:",re):(L===""||F==="")&&(xe=!1);xe&&(k.diagnostics={runnable:Y,programLog:re,vertexShader:{log:L,prefix:S},fragmentShader:{log:F,prefix:x}})}o.deleteShader(O),o.deleteShader(R),X=new Mu(o,b),A=HC(o,b)}let X;this.getUniforms=function(){return X===void 0&&H(this),X};let A;this.getAttributes=function(){return A===void 0&&H(this),A};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(b,DC)),D},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NC++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=O,this.fragmentShader=R,this}let n3=0;class i3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new a3(e),n.set(e,r)),r}}class a3{constructor(e){this.id=n3++,this.code=e,this.usedTimes=0}}function r3(a,e,n,r,o,c,u){const h=new vy,d=new i3,p=new Set,g=[],v=new Map,_=o.logarithmicDepthBuffer;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return p.add(A),A===0?"uv":`uv${A}`}function S(A,D,k,ne,Z){const ce=ne.fog,re=Z.geometry,L=A.isMeshStandardMaterial?ne.environment:null,F=(A.isMeshStandardMaterial?n:e).get(A.envMap||L),Y=F&&F.mapping===Fu?F.image.height:null,xe=M[A.type];A.precision!==null&&(y=o.getMaxPrecision(A.precision),y!==A.precision&&vt("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const P=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,K=P!==void 0?P.length:0;let Se=0;re.morphAttributes.position!==void 0&&(Se=1),re.morphAttributes.normal!==void 0&&(Se=2),re.morphAttributes.color!==void 0&&(Se=3);let ve,Oe,Ze,ae;if(xe){const V=na[xe];ve=V.vertexShader,Oe=V.fragmentShader}else ve=A.vertexShader,Oe=A.fragmentShader,d.update(A),Ze=d.getVertexShaderID(A),ae=d.getFragmentShaderID(A);const be=a.getRenderTarget(),Ue=a.state.buffers.depth.getReversed(),ft=Z.isInstancedMesh===!0,ze=Z.isBatchedMesh===!0,xt=!!A.map,dn=!!A.matcap,Ct=!!F,bt=!!A.aoMap,Yt=!!A.lightMap,St=!!A.bumpMap,zt=!!A.normalMap,W=!!A.displacementMap,hn=!!A.emissiveMap,Ft=!!A.metalnessMap,Gt=!!A.roughnessMap,Ye=A.anisotropy>0,z=A.clearcoat>0,T=A.dispersion>0,Q=A.iridescence>0,ge=A.sheen>0,_e=A.transmission>0,me=Ye&&!!A.anisotropyMap,Ge=z&&!!A.clearcoatMap,Be=z&&!!A.clearcoatNormalMap,qe=z&&!!A.clearcoatRoughnessMap,dt=Q&&!!A.iridescenceMap,Re=Q&&!!A.iridescenceThicknessMap,Ie=ge&&!!A.sheenColorMap,We=ge&&!!A.sheenRoughnessMap,Ke=!!A.specularMap,Le=!!A.specularColorMap,yt=!!A.specularIntensityMap,q=_e&&!!A.transmissionMap,Ve=_e&&!!A.thicknessMap,Ne=!!A.gradientMap,ke=!!A.alphaMap,we=A.alphaTest>0,Ee=!!A.alphaHash,Pe=!!A.extensions;let pt=ca;A.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(pt=a.toneMapping);const Xt={shaderID:xe,shaderType:A.type,shaderName:A.name,vertexShader:ve,fragmentShader:Oe,defines:A.defines,customVertexShaderID:Ze,customFragmentShaderID:ae,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:ze,batchingColor:ze&&Z._colorsTexture!==null,instancing:ft,instancingColor:ft&&Z.instanceColor!==null,instancingMorph:ft&&Z.morphTexture!==null,outputColorSpace:be===null?a.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:ao,alphaToCoverage:!!A.alphaToCoverage,map:xt,matcap:dn,envMap:Ct,envMapMode:Ct&&F.mapping,envMapCubeUVHeight:Y,aoMap:bt,lightMap:Yt,bumpMap:St,normalMap:zt,displacementMap:W,emissiveMap:hn,normalMapObjectSpace:zt&&A.normalMapType===qT,normalMapTangentSpace:zt&&A.normalMapType===jT,metalnessMap:Ft,roughnessMap:Gt,anisotropy:Ye,anisotropyMap:me,clearcoat:z,clearcoatMap:Ge,clearcoatNormalMap:Be,clearcoatRoughnessMap:qe,dispersion:T,iridescence:Q,iridescenceMap:dt,iridescenceThicknessMap:Re,sheen:ge,sheenColorMap:Ie,sheenRoughnessMap:We,specularMap:Ke,specularColorMap:Le,specularIntensityMap:yt,transmission:_e,transmissionMap:q,thicknessMap:Ve,gradientMap:Ne,opaque:A.transparent===!1&&A.blending===$s&&A.alphaToCoverage===!1,alphaMap:ke,alphaTest:we,alphaHash:Ee,combine:A.combine,mapUv:xt&&b(A.map.channel),aoMapUv:bt&&b(A.aoMap.channel),lightMapUv:Yt&&b(A.lightMap.channel),bumpMapUv:St&&b(A.bumpMap.channel),normalMapUv:zt&&b(A.normalMap.channel),displacementMapUv:W&&b(A.displacementMap.channel),emissiveMapUv:hn&&b(A.emissiveMap.channel),metalnessMapUv:Ft&&b(A.metalnessMap.channel),roughnessMapUv:Gt&&b(A.roughnessMap.channel),anisotropyMapUv:me&&b(A.anisotropyMap.channel),clearcoatMapUv:Ge&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:Be&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:We&&b(A.sheenRoughnessMap.channel),specularMapUv:Ke&&b(A.specularMap.channel),specularColorMapUv:Le&&b(A.specularColorMap.channel),specularIntensityMapUv:yt&&b(A.specularIntensityMap.channel),transmissionMapUv:q&&b(A.transmissionMap.channel),thicknessMapUv:Ve&&b(A.thicknessMap.channel),alphaMapUv:ke&&b(A.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(zt||Ye),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!re.attributes.uv&&(xt||ke),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ue,skinning:Z.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Se,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:pt,decodeVideoTexture:xt&&A.map.isVideoTexture===!0&&kt.getTransfer(A.map.colorSpace)===tn,decodeVideoTextureEmissive:hn&&A.emissiveMap.isVideoTexture===!0&&kt.getTransfer(A.emissiveMap.colorSpace)===tn,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Pa,flipSided:A.side===di,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Pe&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&A.extensions.multiDraw===!0||ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Xt.vertexUv1s=p.has(1),Xt.vertexUv2s=p.has(2),Xt.vertexUv3s=p.has(3),p.clear(),Xt}function x(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)D.push(k),D.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(U(D,A),C(D,A),D.push(a.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function U(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function C(A,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),A.push(h.mask)}function I(A){const D=M[A.type];let k;if(D){const ne=na[D];k=S1.clone(ne.uniforms)}else k=A.uniforms;return k}function O(A,D){let k=v.get(D);return k!==void 0?++k.usedTimes:(k=new t3(a,D,A,c),g.push(k),v.set(D,k)),k}function R(A){if(--A.usedTimes===0){const D=g.indexOf(A);g[D]=g[g.length-1],g.pop(),v.delete(A.cacheKey),A.destroy()}}function H(A){d.remove(A)}function X(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:I,acquireProgram:O,releaseProgram:R,releaseShaderCache:H,programs:g,dispose:X}}function s3(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,d){a.get(u)[h]=d}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function o3(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function vx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function _x(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(v,_,y,M,b,S){let x=a[e];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:M,renderOrder:v.renderOrder,z:b,group:S},a[e]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=v.renderOrder,x.z=b,x.group=S),e++,x}function h(v,_,y,M,b,S){const x=u(v,_,y,M,b,S);y.transmission>0?r.push(x):y.transparent===!0?o.push(x):n.push(x)}function d(v,_,y,M,b,S){const x=u(v,_,y,M,b,S);y.transmission>0?r.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function p(v,_){n.length>1&&n.sort(v||o3),r.length>1&&r.sort(_||vx),o.length>1&&o.sort(_||vx)}function g(){for(let v=e,_=a.length;v<_;v++){const y=a[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:h,unshift:d,finish:g,sort:p}}function l3(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new _x,a.set(r,[u])):o>=c.length?(u=new _x,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function c3(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new de,color:new It};break;case"SpotLight":n={position:new de,direction:new de,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new de,color:new It,distance:0,decay:0};break;case"HemisphereLight":n={direction:new de,skyColor:new It,groundColor:new It};break;case"RectAreaLight":n={color:new It,position:new de,halfWidth:new de,halfHeight:new de};break}return a[e.id]=n,n}}}function u3(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new sn};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new sn};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new sn,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let f3=0;function d3(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function h3(a){const e=new c3,n=u3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new de);const o=new de,c=new yn,u=new yn;function h(p){let g=0,v=0,_=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,M=0,b=0,S=0,x=0,U=0,C=0,I=0,O=0,R=0,H=0;p.sort(d3);for(let A=0,D=p.length;A<D;A++){const k=p[A],ne=k.color,Z=k.intensity,ce=k.distance;let re=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===io?re=k.shadow.map.texture:re=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=ne.r*Z,v+=ne.g*Z,_+=ne.b*Z;else if(k.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(k.sh.coefficients[L],Z);H++}else if(k.isDirectionalLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const F=k.shadow,Y=n.get(k);Y.shadowIntensity=F.intensity,Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=re,r.directionalShadowMatrix[y]=k.shadow.matrix,U++}r.directional[y]=L,y++}else if(k.isSpotLight){const L=e.get(k);L.position.setFromMatrixPosition(k.matrixWorld),L.color.copy(ne).multiplyScalar(Z),L.distance=ce,L.coneCos=Math.cos(k.angle),L.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),L.decay=k.decay,r.spot[b]=L;const F=k.shadow;if(k.map&&(r.spotLightMap[O]=k.map,O++,F.updateMatrices(k),k.castShadow&&R++),r.spotLightMatrix[b]=F.matrix,k.castShadow){const Y=n.get(k);Y.shadowIntensity=F.intensity,Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,r.spotShadow[b]=Y,r.spotShadowMap[b]=re,I++}b++}else if(k.isRectAreaLight){const L=e.get(k);L.color.copy(ne).multiplyScalar(Z),L.halfWidth.set(k.width*.5,0,0),L.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=L,S++}else if(k.isPointLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),L.distance=k.distance,L.decay=k.decay,k.castShadow){const F=k.shadow,Y=n.get(k);Y.shadowIntensity=F.intensity,Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,Y.shadowCameraNear=F.camera.near,Y.shadowCameraFar=F.camera.far,r.pointShadow[M]=Y,r.pointShadowMap[M]=re,r.pointShadowMatrix[M]=k.shadow.matrix,C++}r.point[M]=L,M++}else if(k.isHemisphereLight){const L=e.get(k);L.skyColor.copy(k.color).multiplyScalar(Z),L.groundColor.copy(k.groundColor).multiplyScalar(Z),r.hemi[x]=L,x++}}S>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xe.LTC_FLOAT_1,r.rectAreaLTC2=Xe.LTC_FLOAT_2):(r.rectAreaLTC1=Xe.LTC_HALF_1,r.rectAreaLTC2=Xe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const X=r.hash;(X.directionalLength!==y||X.pointLength!==M||X.spotLength!==b||X.rectAreaLength!==S||X.hemiLength!==x||X.numDirectionalShadows!==U||X.numPointShadows!==C||X.numSpotShadows!==I||X.numSpotMaps!==O||X.numLightProbes!==H)&&(r.directional.length=y,r.spot.length=b,r.rectArea.length=S,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=I+O-R,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=H,X.directionalLength=y,X.pointLength=M,X.spotLength=b,X.rectAreaLength=S,X.hemiLength=x,X.numDirectionalShadows=U,X.numPointShadows=C,X.numSpotShadows=I,X.numSpotMaps=O,X.numLightProbes=H,r.version=f3++)}function d(p,g){let v=0,_=0,y=0,M=0,b=0;const S=g.matrixWorldInverse;for(let x=0,U=p.length;x<U;x++){const C=p[x];if(C.isDirectionalLight){const I=r.directional[v];I.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(S),v++}else if(C.isSpotLight){const I=r.spot[y];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(S),I.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const I=r.rectArea[M];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(S),u.identity(),c.copy(C.matrixWorld),c.premultiply(S),u.extractRotation(c),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),M++}else if(C.isPointLight){const I=r.point[_];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(S),_++}else if(C.isHemisphereLight){const I=r.hemi[b];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(S),b++}}}return{setup:h,setupView:d,state:r}}function xx(a){const e=new h3(a),n=[],r=[];function o(g){p.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function u(g){r.push(g)}function h(){e.setup(n)}function d(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:u}}function p3(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new xx(a),e.set(o,[h])):c>=u.length?(h=new xx(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const m3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v3=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],_3=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],yx=new yn,pl=new de,Ph=new de;function x3(a,e,n){let r=new Ay;const o=new sn,c=new sn,u=new bn,h=new O1,d=new I1,p={},g=n.maxTextureSize,v={[Tr]:di,[di]:Tr,[Pa]:Pa},_=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new sn},radius:{value:4}},vertexShader:m3,fragmentShader:g3}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new ti;M.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ga(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let x=this.type;this.render=function(R,H,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||R.length===0)return;R.type===ET&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=gu);const A=a.getRenderTarget(),D=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),ne=a.state;ne.setBlending(Ia),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const Z=x!==this.type;Z&&H.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(re=>re.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,re=R.length;ce<re;ce++){const L=R[ce],F=L.shadow;if(F===void 0){vt("WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const Y=F.getFrameExtents();if(o.multiply(Y),c.copy(F.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Y.x),o.x=c.x*Y.x,F.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Y.y),o.y=c.y*Y.y,F.mapSize.y=c.y)),F.map===null||Z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===gl){if(L.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ua(o.x,o.y,{format:io,type:za,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),F.map.texture.name=L.name+".shadowMap",F.map.depthTexture=new Tl(o.x,o.y,aa),F.map.depthTexture.name=L.name+".shadowMapDepth",F.map.depthTexture.format=Ha,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xn,F.map.depthTexture.magFilter=Xn}else{L.isPointLight?(F.map=new Ty(o.x),F.map.depthTexture=new L1(o.x,fa)):(F.map=new ua(o.x,o.y),F.map.depthTexture=new Tl(o.x,o.y,fa)),F.map.depthTexture.name=L.name+".shadowMap",F.map.depthTexture.format=Ha;const P=a.state.buffers.depth.getReversed();this.type===gu?(F.map.depthTexture.compareFunction=P?am:im,F.map.depthTexture.minFilter=Kn,F.map.depthTexture.magFilter=Kn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xn,F.map.depthTexture.magFilter=Xn)}F.camera.updateProjectionMatrix()}const xe=F.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<xe;P++){if(F.map.isWebGLCubeRenderTarget)a.setRenderTarget(F.map,P),a.clear();else{P===0&&(a.setRenderTarget(F.map),a.clear());const K=F.getViewport(P);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),ne.viewport(u)}if(L.isPointLight){const K=F.camera,Se=F.matrix,ve=L.distance||K.far;ve!==K.far&&(K.far=ve,K.updateProjectionMatrix()),pl.setFromMatrixPosition(L.matrixWorld),K.position.copy(pl),Ph.copy(K.position),Ph.add(v3[P]),K.up.copy(_3[P]),K.lookAt(Ph),K.updateMatrixWorld(),Se.makeTranslation(-pl.x,-pl.y,-pl.z),yx.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),F._frustum.setFromProjectionMatrix(yx,K.coordinateSystem,K.reversedDepth)}else F.updateMatrices(L);r=F.getFrustum(),I(H,X,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===gl&&U(F,X),F.needsUpdate=!1}x=this.type,S.needsUpdate=!1,a.setRenderTarget(A,D,k)};function U(R,H){const X=e.update(b);_.defines.VSM_SAMPLES!==R.blurSamples&&(_.defines.VSM_SAMPLES=R.blurSamples,y.defines.VSM_SAMPLES=R.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ua(o.x,o.y,{format:io,type:za})),_.uniforms.shadow_pass.value=R.map.depthTexture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,a.setRenderTarget(R.mapPass),a.clear(),a.renderBufferDirect(H,null,X,_,b,null),y.uniforms.shadow_pass.value=R.mapPass.texture,y.uniforms.resolution.value=R.mapSize,y.uniforms.radius.value=R.radius,a.setRenderTarget(R.map),a.clear(),a.renderBufferDirect(H,null,X,y,b,null)}function C(R,H,X,A){let D=null;const k=X.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)D=k;else if(D=X.isPointLight===!0?d:h,a.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const ne=D.uuid,Z=H.uuid;let ce=p[ne];ce===void 0&&(ce={},p[ne]=ce);let re=ce[Z];re===void 0&&(re=D.clone(),ce[Z]=re,H.addEventListener("dispose",O)),D=re}if(D.visible=H.visible,D.wireframe=H.wireframe,A===gl?D.side=H.shadowSide!==null?H.shadowSide:H.side:D.side=H.shadowSide!==null?H.shadowSide:v[H.side],D.alphaMap=H.alphaMap,D.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,D.map=H.map,D.clipShadows=H.clipShadows,D.clippingPlanes=H.clippingPlanes,D.clipIntersection=H.clipIntersection,D.displacementMap=H.displacementMap,D.displacementScale=H.displacementScale,D.displacementBias=H.displacementBias,D.wireframeLinewidth=H.wireframeLinewidth,D.linewidth=H.linewidth,X.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ne=a.properties.get(D);ne.light=X}return D}function I(R,H,X,A,D){if(R.visible===!1)return;if(R.layers.test(H.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&D===gl)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld);const Z=e.update(R),ce=R.material;if(Array.isArray(ce)){const re=Z.groups;for(let L=0,F=re.length;L<F;L++){const Y=re[L],xe=ce[Y.materialIndex];if(xe&&xe.visible){const P=C(R,xe,A,D);R.onBeforeShadow(a,R,H,X,Z,P,Y),a.renderBufferDirect(X,null,Z,P,R,Y),R.onAfterShadow(a,R,H,X,Z,P,Y)}}}else if(ce.visible){const re=C(R,ce,A,D);R.onBeforeShadow(a,R,H,X,Z,re,null),a.renderBufferDirect(X,null,Z,re,R,null),R.onAfterShadow(a,R,H,X,Z,re,null)}}const ne=R.children;for(let Z=0,ce=ne.length;Z<ce;Z++)I(ne[Z],H,X,A,D)}function O(R){R.target.removeEventListener("dispose",O);for(const X in p){const A=p[X],D=R.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}const y3={[kh]:Xh,[Wh]:Yh,[jh]:Zh,[to]:qh,[Xh]:kh,[Yh]:Wh,[Zh]:jh,[qh]:to};function S3(a,e){function n(){let q=!1;const Ve=new bn;let Ne=null;const ke=new bn(0,0,0,0);return{setMask:function(we){Ne!==we&&!q&&(a.colorMask(we,we,we,we),Ne=we)},setLocked:function(we){q=we},setClear:function(we,Ee,Pe,pt,Xt){Xt===!0&&(we*=pt,Ee*=pt,Pe*=pt),Ve.set(we,Ee,Pe,pt),ke.equals(Ve)===!1&&(a.clearColor(we,Ee,Pe,pt),ke.copy(Ve))},reset:function(){q=!1,Ne=null,ke.set(-1,0,0,0)}}}function r(){let q=!1,Ve=!1,Ne=null,ke=null,we=null;return{setReversed:function(Ee){if(Ve!==Ee){const Pe=e.get("EXT_clip_control");Ee?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Ve=Ee;const pt=we;we=null,this.setClear(pt)}},getReversed:function(){return Ve},setTest:function(Ee){Ee?be(a.DEPTH_TEST):Ue(a.DEPTH_TEST)},setMask:function(Ee){Ne!==Ee&&!q&&(a.depthMask(Ee),Ne=Ee)},setFunc:function(Ee){if(Ve&&(Ee=y3[Ee]),ke!==Ee){switch(Ee){case kh:a.depthFunc(a.NEVER);break;case Xh:a.depthFunc(a.ALWAYS);break;case Wh:a.depthFunc(a.LESS);break;case to:a.depthFunc(a.LEQUAL);break;case jh:a.depthFunc(a.EQUAL);break;case qh:a.depthFunc(a.GEQUAL);break;case Yh:a.depthFunc(a.GREATER);break;case Zh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ke=Ee}},setLocked:function(Ee){q=Ee},setClear:function(Ee){we!==Ee&&(Ve&&(Ee=1-Ee),a.clearDepth(Ee),we=Ee)},reset:function(){q=!1,Ne=null,ke=null,we=null,Ve=!1}}}function o(){let q=!1,Ve=null,Ne=null,ke=null,we=null,Ee=null,Pe=null,pt=null,Xt=null;return{setTest:function(V){q||(V?be(a.STENCIL_TEST):Ue(a.STENCIL_TEST))},setMask:function(V){Ve!==V&&!q&&(a.stencilMask(V),Ve=V)},setFunc:function(V,ie,ue){(Ne!==V||ke!==ie||we!==ue)&&(a.stencilFunc(V,ie,ue),Ne=V,ke=ie,we=ue)},setOp:function(V,ie,ue){(Ee!==V||Pe!==ie||pt!==ue)&&(a.stencilOp(V,ie,ue),Ee=V,Pe=ie,pt=ue)},setLocked:function(V){q=V},setClear:function(V){Xt!==V&&(a.clearStencil(V),Xt=V)},reset:function(){q=!1,Ve=null,Ne=null,ke=null,we=null,Ee=null,Pe=null,pt=null,Xt=null}}}const c=new n,u=new r,h=new o,d=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,y=[],M=null,b=!1,S=null,x=null,U=null,C=null,I=null,O=null,R=null,H=new It(0,0,0),X=0,A=!1,D=null,k=null,ne=null,Z=null,ce=null;const re=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,F=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Y)[1]),L=F>=1):Y.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),L=F>=2);let xe=null,P={};const K=a.getParameter(a.SCISSOR_BOX),Se=a.getParameter(a.VIEWPORT),ve=new bn().fromArray(K),Oe=new bn().fromArray(Se);function Ze(q,Ve,Ne,ke){const we=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(q,Ee),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<Ne;Pe++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(Ve,0,a.RGBA,1,1,ke,0,a.RGBA,a.UNSIGNED_BYTE,we):a.texImage2D(Ve+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,we);return Ee}const ae={};ae[a.TEXTURE_2D]=Ze(a.TEXTURE_2D,a.TEXTURE_2D,1),ae[a.TEXTURE_CUBE_MAP]=Ze(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[a.TEXTURE_2D_ARRAY]=Ze(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ae[a.TEXTURE_3D]=Ze(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),be(a.DEPTH_TEST),u.setFunc(to),St(!1),zt(y_),be(a.CULL_FACE),bt(Ia);function be(q){g[q]!==!0&&(a.enable(q),g[q]=!0)}function Ue(q){g[q]!==!1&&(a.disable(q),g[q]=!1)}function ft(q,Ve){return v[q]!==Ve?(a.bindFramebuffer(q,Ve),v[q]=Ve,q===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ve),q===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ve),!0):!1}function ze(q,Ve){let Ne=y,ke=!1;if(q){Ne=_.get(Ve),Ne===void 0&&(Ne=[],_.set(Ve,Ne));const we=q.textures;if(Ne.length!==we.length||Ne[0]!==a.COLOR_ATTACHMENT0){for(let Ee=0,Pe=we.length;Ee<Pe;Ee++)Ne[Ee]=a.COLOR_ATTACHMENT0+Ee;Ne.length=we.length,ke=!0}}else Ne[0]!==a.BACK&&(Ne[0]=a.BACK,ke=!0);ke&&a.drawBuffers(Ne)}function xt(q){return M!==q?(a.useProgram(q),M=q,!0):!1}const dn={[Qr]:a.FUNC_ADD,[TT]:a.FUNC_SUBTRACT,[AT]:a.FUNC_REVERSE_SUBTRACT};dn[RT]=a.MIN,dn[wT]=a.MAX;const Ct={[CT]:a.ZERO,[DT]:a.ONE,[NT]:a.SRC_COLOR,[Vh]:a.SRC_ALPHA,[FT]:a.SRC_ALPHA_SATURATE,[OT]:a.DST_COLOR,[LT]:a.DST_ALPHA,[UT]:a.ONE_MINUS_SRC_COLOR,[Gh]:a.ONE_MINUS_SRC_ALPHA,[IT]:a.ONE_MINUS_DST_COLOR,[PT]:a.ONE_MINUS_DST_ALPHA,[BT]:a.CONSTANT_COLOR,[zT]:a.ONE_MINUS_CONSTANT_COLOR,[HT]:a.CONSTANT_ALPHA,[VT]:a.ONE_MINUS_CONSTANT_ALPHA};function bt(q,Ve,Ne,ke,we,Ee,Pe,pt,Xt,V){if(q===Ia){b===!0&&(Ue(a.BLEND),b=!1);return}if(b===!1&&(be(a.BLEND),b=!0),q!==bT){if(q!==S||V!==A){if((x!==Qr||I!==Qr)&&(a.blendEquation(a.FUNC_ADD),x=Qr,I=Qr),V)switch(q){case $s:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ru:a.blendFunc(a.ONE,a.ONE);break;case S_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case M_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:qt("WebGLState: Invalid blending: ",q);break}else switch(q){case $s:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ru:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case S_:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case M_:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",q);break}U=null,C=null,O=null,R=null,H.set(0,0,0),X=0,S=q,A=V}return}we=we||Ve,Ee=Ee||Ne,Pe=Pe||ke,(Ve!==x||we!==I)&&(a.blendEquationSeparate(dn[Ve],dn[we]),x=Ve,I=we),(Ne!==U||ke!==C||Ee!==O||Pe!==R)&&(a.blendFuncSeparate(Ct[Ne],Ct[ke],Ct[Ee],Ct[Pe]),U=Ne,C=ke,O=Ee,R=Pe),(pt.equals(H)===!1||Xt!==X)&&(a.blendColor(pt.r,pt.g,pt.b,Xt),H.copy(pt),X=Xt),S=q,A=!1}function Yt(q,Ve){q.side===Pa?Ue(a.CULL_FACE):be(a.CULL_FACE);let Ne=q.side===di;Ve&&(Ne=!Ne),St(Ne),q.blending===$s&&q.transparent===!1?bt(Ia):bt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const ke=q.stencilWrite;h.setTest(ke),ke&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),hn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?be(a.SAMPLE_ALPHA_TO_COVERAGE):Ue(a.SAMPLE_ALPHA_TO_COVERAGE)}function St(q){D!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),D=q)}function zt(q){q!==ST?(be(a.CULL_FACE),q!==k&&(q===y_?a.cullFace(a.BACK):q===MT?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ue(a.CULL_FACE),k=q}function W(q){q!==ne&&(L&&a.lineWidth(q),ne=q)}function hn(q,Ve,Ne){q?(be(a.POLYGON_OFFSET_FILL),(Z!==Ve||ce!==Ne)&&(a.polygonOffset(Ve,Ne),Z=Ve,ce=Ne)):Ue(a.POLYGON_OFFSET_FILL)}function Ft(q){q?be(a.SCISSOR_TEST):Ue(a.SCISSOR_TEST)}function Gt(q){q===void 0&&(q=a.TEXTURE0+re-1),xe!==q&&(a.activeTexture(q),xe=q)}function Ye(q,Ve,Ne){Ne===void 0&&(xe===null?Ne=a.TEXTURE0+re-1:Ne=xe);let ke=P[Ne];ke===void 0&&(ke={type:void 0,texture:void 0},P[Ne]=ke),(ke.type!==q||ke.texture!==Ve)&&(xe!==Ne&&(a.activeTexture(Ne),xe=Ne),a.bindTexture(q,Ve||ae[q]),ke.type=q,ke.texture=Ve)}function z(){const q=P[xe];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(q){qt("WebGLState:",q)}}function Q(){try{a.compressedTexImage3D(...arguments)}catch(q){qt("WebGLState:",q)}}function ge(){try{a.texSubImage2D(...arguments)}catch(q){qt("WebGLState:",q)}}function _e(){try{a.texSubImage3D(...arguments)}catch(q){qt("WebGLState:",q)}}function me(){try{a.compressedTexSubImage2D(...arguments)}catch(q){qt("WebGLState:",q)}}function Ge(){try{a.compressedTexSubImage3D(...arguments)}catch(q){qt("WebGLState:",q)}}function Be(){try{a.texStorage2D(...arguments)}catch(q){qt("WebGLState:",q)}}function qe(){try{a.texStorage3D(...arguments)}catch(q){qt("WebGLState:",q)}}function dt(){try{a.texImage2D(...arguments)}catch(q){qt("WebGLState:",q)}}function Re(){try{a.texImage3D(...arguments)}catch(q){qt("WebGLState:",q)}}function Ie(q){ve.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),ve.copy(q))}function We(q){Oe.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),Oe.copy(q))}function Ke(q,Ve){let Ne=p.get(Ve);Ne===void 0&&(Ne=new WeakMap,p.set(Ve,Ne));let ke=Ne.get(q);ke===void 0&&(ke=a.getUniformBlockIndex(Ve,q.name),Ne.set(q,ke))}function Le(q,Ve){const ke=p.get(Ve).get(q);d.get(Ve)!==ke&&(a.uniformBlockBinding(Ve,ke,q.__bindingPointIndex),d.set(Ve,ke))}function yt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},xe=null,P={},v={},_=new WeakMap,y=[],M=null,b=!1,S=null,x=null,U=null,C=null,I=null,O=null,R=null,H=new It(0,0,0),X=0,A=!1,D=null,k=null,ne=null,Z=null,ce=null,ve.set(0,0,a.canvas.width,a.canvas.height),Oe.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:be,disable:Ue,bindFramebuffer:ft,drawBuffers:ze,useProgram:xt,setBlending:bt,setMaterial:Yt,setFlipSided:St,setCullFace:zt,setLineWidth:W,setPolygonOffset:hn,setScissorTest:Ft,activeTexture:Gt,bindTexture:Ye,unbindTexture:z,compressedTexImage2D:T,compressedTexImage3D:Q,texImage2D:dt,texImage3D:Re,updateUBOMapping:Ke,uniformBlockBinding:Le,texStorage2D:Be,texStorage3D:qe,texSubImage2D:ge,texSubImage3D:_e,compressedTexSubImage2D:me,compressedTexSubImage3D:Ge,scissor:Ie,viewport:We,reset:yt}}function M3(a,e,n,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new sn,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(z,T){return y?new OffscreenCanvas(z,T):Du("canvas")}function b(z,T,Q){let ge=1;const _e=Ye(z);if((_e.width>Q||_e.height>Q)&&(ge=Q/Math.max(_e.width,_e.height)),ge<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const me=Math.floor(ge*_e.width),Ge=Math.floor(ge*_e.height);v===void 0&&(v=M(me,Ge));const Be=T?M(me,Ge):v;return Be.width=me,Be.height=Ge,Be.getContext("2d").drawImage(z,0,0,me,Ge),vt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+me+"x"+Ge+")."),Be}else return"data"in z&&vt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),z;return z}function S(z){return z.generateMipmaps}function x(z){a.generateMipmap(z)}function U(z){return z.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?a.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(z,T,Q,ge,_e=!1){if(z!==null){if(a[z]!==void 0)return a[z];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let me=T;if(T===a.RED&&(Q===a.FLOAT&&(me=a.R32F),Q===a.HALF_FLOAT&&(me=a.R16F),Q===a.UNSIGNED_BYTE&&(me=a.R8)),T===a.RED_INTEGER&&(Q===a.UNSIGNED_BYTE&&(me=a.R8UI),Q===a.UNSIGNED_SHORT&&(me=a.R16UI),Q===a.UNSIGNED_INT&&(me=a.R32UI),Q===a.BYTE&&(me=a.R8I),Q===a.SHORT&&(me=a.R16I),Q===a.INT&&(me=a.R32I)),T===a.RG&&(Q===a.FLOAT&&(me=a.RG32F),Q===a.HALF_FLOAT&&(me=a.RG16F),Q===a.UNSIGNED_BYTE&&(me=a.RG8)),T===a.RG_INTEGER&&(Q===a.UNSIGNED_BYTE&&(me=a.RG8UI),Q===a.UNSIGNED_SHORT&&(me=a.RG16UI),Q===a.UNSIGNED_INT&&(me=a.RG32UI),Q===a.BYTE&&(me=a.RG8I),Q===a.SHORT&&(me=a.RG16I),Q===a.INT&&(me=a.RG32I)),T===a.RGB_INTEGER&&(Q===a.UNSIGNED_BYTE&&(me=a.RGB8UI),Q===a.UNSIGNED_SHORT&&(me=a.RGB16UI),Q===a.UNSIGNED_INT&&(me=a.RGB32UI),Q===a.BYTE&&(me=a.RGB8I),Q===a.SHORT&&(me=a.RGB16I),Q===a.INT&&(me=a.RGB32I)),T===a.RGBA_INTEGER&&(Q===a.UNSIGNED_BYTE&&(me=a.RGBA8UI),Q===a.UNSIGNED_SHORT&&(me=a.RGBA16UI),Q===a.UNSIGNED_INT&&(me=a.RGBA32UI),Q===a.BYTE&&(me=a.RGBA8I),Q===a.SHORT&&(me=a.RGBA16I),Q===a.INT&&(me=a.RGBA32I)),T===a.RGB&&(Q===a.UNSIGNED_INT_5_9_9_9_REV&&(me=a.RGB9_E5),Q===a.UNSIGNED_INT_10F_11F_11F_REV&&(me=a.R11F_G11F_B10F)),T===a.RGBA){const Ge=_e?wu:kt.getTransfer(ge);Q===a.FLOAT&&(me=a.RGBA32F),Q===a.HALF_FLOAT&&(me=a.RGBA16F),Q===a.UNSIGNED_BYTE&&(me=Ge===tn?a.SRGB8_ALPHA8:a.RGBA8),Q===a.UNSIGNED_SHORT_4_4_4_4&&(me=a.RGBA4),Q===a.UNSIGNED_SHORT_5_5_5_1&&(me=a.RGB5_A1)}return(me===a.R16F||me===a.R32F||me===a.RG16F||me===a.RG32F||me===a.RGBA16F||me===a.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function I(z,T){let Q;return z?T===null||T===fa||T===El?Q=a.DEPTH24_STENCIL8:T===aa?Q=a.DEPTH32F_STENCIL8:T===Ml&&(Q=a.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===fa||T===El?Q=a.DEPTH_COMPONENT24:T===aa?Q=a.DEPTH_COMPONENT32F:T===Ml&&(Q=a.DEPTH_COMPONENT16),Q}function O(z,T){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==Xn&&z.minFilter!==Kn?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function R(z){const T=z.target;T.removeEventListener("dispose",R),X(T),T.isVideoTexture&&g.delete(T)}function H(z){const T=z.target;T.removeEventListener("dispose",H),D(T)}function X(z){const T=r.get(z);if(T.__webglInit===void 0)return;const Q=z.source,ge=_.get(Q);if(ge){const _e=ge[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&A(z),Object.keys(ge).length===0&&_.delete(Q)}r.remove(z)}function A(z){const T=r.get(z);a.deleteTexture(T.__webglTexture);const Q=z.source,ge=_.get(Q);delete ge[T.__cacheKey],u.memory.textures--}function D(z){const T=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let _e=0;_e<T.__webglFramebuffer[ge].length;_e++)a.deleteFramebuffer(T.__webglFramebuffer[ge][_e]);else a.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)a.deleteFramebuffer(T.__webglFramebuffer[ge]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=z.textures;for(let ge=0,_e=Q.length;ge<_e;ge++){const me=r.get(Q[ge]);me.__webglTexture&&(a.deleteTexture(me.__webglTexture),u.memory.textures--),r.remove(Q[ge])}r.remove(z)}let k=0;function ne(){k=0}function Z(){const z=k;return z>=o.maxTextures&&vt("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),k+=1,z}function ce(z){const T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function re(z,T){const Q=r.get(z);if(z.isVideoTexture&&Ft(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&Q.__version!==z.version){const ge=z.image;if(ge===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(Q,z,T);return}}else z.isExternalTexture&&(Q.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,Q.__webglTexture,a.TEXTURE0+T)}function L(z,T){const Q=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Q.__version!==z.version){ae(Q,z,T);return}else z.isExternalTexture&&(Q.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,Q.__webglTexture,a.TEXTURE0+T)}function F(z,T){const Q=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Q.__version!==z.version){ae(Q,z,T);return}n.bindTexture(a.TEXTURE_3D,Q.__webglTexture,a.TEXTURE0+T)}function Y(z,T){const Q=r.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&Q.__version!==z.version){be(Q,z,T);return}n.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture,a.TEXTURE0+T)}const xe={[Jh]:a.REPEAT,[Oa]:a.CLAMP_TO_EDGE,[$h]:a.MIRRORED_REPEAT},P={[Xn]:a.NEAREST,[XT]:a.NEAREST_MIPMAP_NEAREST,[Gc]:a.NEAREST_MIPMAP_LINEAR,[Kn]:a.LINEAR,[nh]:a.LINEAR_MIPMAP_NEAREST,[es]:a.LINEAR_MIPMAP_LINEAR},K={[YT]:a.NEVER,[$T]:a.ALWAYS,[ZT]:a.LESS,[im]:a.LEQUAL,[KT]:a.EQUAL,[am]:a.GEQUAL,[QT]:a.GREATER,[JT]:a.NOTEQUAL};function Se(z,T){if(T.type===aa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Kn||T.magFilter===nh||T.magFilter===Gc||T.magFilter===es||T.minFilter===Kn||T.minFilter===nh||T.minFilter===Gc||T.minFilter===es)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(z,a.TEXTURE_WRAP_S,xe[T.wrapS]),a.texParameteri(z,a.TEXTURE_WRAP_T,xe[T.wrapT]),(z===a.TEXTURE_3D||z===a.TEXTURE_2D_ARRAY)&&a.texParameteri(z,a.TEXTURE_WRAP_R,xe[T.wrapR]),a.texParameteri(z,a.TEXTURE_MAG_FILTER,P[T.magFilter]),a.texParameteri(z,a.TEXTURE_MIN_FILTER,P[T.minFilter]),T.compareFunction&&(a.texParameteri(z,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(z,a.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xn||T.minFilter!==Gc&&T.minFilter!==es||T.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(z,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ve(z,T){let Q=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",R));const ge=T.source;let _e=_.get(ge);_e===void 0&&(_e={},_.set(ge,_e));const me=ce(T);if(me!==z.__cacheKey){_e[me]===void 0&&(_e[me]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),_e[me].usedTimes++;const Ge=_e[z.__cacheKey];Ge!==void 0&&(_e[z.__cacheKey].usedTimes--,Ge.usedTimes===0&&A(T)),z.__cacheKey=me,z.__webglTexture=_e[me].texture}return Q}function Oe(z,T,Q){return Math.floor(Math.floor(z/Q)/T)}function Ze(z,T,Q,ge){const me=z.updateRanges;if(me.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,Q,ge,T.data);else{me.sort((Re,Ie)=>Re.start-Ie.start);let Ge=0;for(let Re=1;Re<me.length;Re++){const Ie=me[Ge],We=me[Re],Ke=Ie.start+Ie.count,Le=Oe(We.start,T.width,4),yt=Oe(Ie.start,T.width,4);We.start<=Ke+1&&Le===yt&&Oe(We.start+We.count-1,T.width,4)===Le?Ie.count=Math.max(Ie.count,We.start+We.count-Ie.start):(++Ge,me[Ge]=We)}me.length=Ge+1;const Be=a.getParameter(a.UNPACK_ROW_LENGTH),qe=a.getParameter(a.UNPACK_SKIP_PIXELS),dt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Re=0,Ie=me.length;Re<Ie;Re++){const We=me[Re],Ke=Math.floor(We.start/4),Le=Math.ceil(We.count/4),yt=Ke%T.width,q=Math.floor(Ke/T.width),Ve=Le,Ne=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,yt),a.pixelStorei(a.UNPACK_SKIP_ROWS,q),n.texSubImage2D(a.TEXTURE_2D,0,yt,q,Ve,Ne,Q,ge,T.data)}z.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Be),a.pixelStorei(a.UNPACK_SKIP_PIXELS,qe),a.pixelStorei(a.UNPACK_SKIP_ROWS,dt)}}function ae(z,T,Q){let ge=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=a.TEXTURE_3D);const _e=ve(z,T),me=T.source;n.bindTexture(ge,z.__webglTexture,a.TEXTURE0+Q);const Ge=r.get(me);if(me.version!==Ge.__version||_e===!0){n.activeTexture(a.TEXTURE0+Q);const Be=kt.getPrimaries(kt.workingColorSpace),qe=T.colorSpace===Mr?null:kt.getPrimaries(T.colorSpace),dt=T.colorSpace===Mr||Be===qe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Re=b(T.image,!1,o.maxTextureSize);Re=Gt(T,Re);const Ie=c.convert(T.format,T.colorSpace),We=c.convert(T.type);let Ke=C(T.internalFormat,Ie,We,T.colorSpace,T.isVideoTexture);Se(ge,T);let Le;const yt=T.mipmaps,q=T.isVideoTexture!==!0,Ve=Ge.__version===void 0||_e===!0,Ne=me.dataReady,ke=O(T,Re);if(T.isDepthTexture)Ke=I(T.format===ts,T.type),Ve&&(q?n.texStorage2D(a.TEXTURE_2D,1,Ke,Re.width,Re.height):n.texImage2D(a.TEXTURE_2D,0,Ke,Re.width,Re.height,0,Ie,We,null));else if(T.isDataTexture)if(yt.length>0){q&&Ve&&n.texStorage2D(a.TEXTURE_2D,ke,Ke,yt[0].width,yt[0].height);for(let we=0,Ee=yt.length;we<Ee;we++)Le=yt[we],q?Ne&&n.texSubImage2D(a.TEXTURE_2D,we,0,0,Le.width,Le.height,Ie,We,Le.data):n.texImage2D(a.TEXTURE_2D,we,Ke,Le.width,Le.height,0,Ie,We,Le.data);T.generateMipmaps=!1}else q?(Ve&&n.texStorage2D(a.TEXTURE_2D,ke,Ke,Re.width,Re.height),Ne&&Ze(T,Re,Ie,We)):n.texImage2D(a.TEXTURE_2D,0,Ke,Re.width,Re.height,0,Ie,We,Re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){q&&Ve&&n.texStorage3D(a.TEXTURE_2D_ARRAY,ke,Ke,yt[0].width,yt[0].height,Re.depth);for(let we=0,Ee=yt.length;we<Ee;we++)if(Le=yt[we],T.format!==ji)if(Ie!==null)if(q){if(Ne)if(T.layerUpdates.size>0){const Pe=Q_(Le.width,Le.height,T.format,T.type);for(const pt of T.layerUpdates){const Xt=Le.data.subarray(pt*Pe/Le.data.BYTES_PER_ELEMENT,(pt+1)*Pe/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,we,0,0,pt,Le.width,Le.height,1,Ie,Xt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,we,0,0,0,Le.width,Le.height,Re.depth,Ie,Le.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,we,Ke,Le.width,Le.height,Re.depth,0,Le.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ne&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,we,0,0,0,Le.width,Le.height,Re.depth,Ie,We,Le.data):n.texImage3D(a.TEXTURE_2D_ARRAY,we,Ke,Le.width,Le.height,Re.depth,0,Ie,We,Le.data)}else{q&&Ve&&n.texStorage2D(a.TEXTURE_2D,ke,Ke,yt[0].width,yt[0].height);for(let we=0,Ee=yt.length;we<Ee;we++)Le=yt[we],T.format!==ji?Ie!==null?q?Ne&&n.compressedTexSubImage2D(a.TEXTURE_2D,we,0,0,Le.width,Le.height,Ie,Le.data):n.compressedTexImage2D(a.TEXTURE_2D,we,Ke,Le.width,Le.height,0,Le.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ne&&n.texSubImage2D(a.TEXTURE_2D,we,0,0,Le.width,Le.height,Ie,We,Le.data):n.texImage2D(a.TEXTURE_2D,we,Ke,Le.width,Le.height,0,Ie,We,Le.data)}else if(T.isDataArrayTexture)if(q){if(Ve&&n.texStorage3D(a.TEXTURE_2D_ARRAY,ke,Ke,Re.width,Re.height,Re.depth),Ne)if(T.layerUpdates.size>0){const we=Q_(Re.width,Re.height,T.format,T.type);for(const Ee of T.layerUpdates){const Pe=Re.data.subarray(Ee*we/Re.data.BYTES_PER_ELEMENT,(Ee+1)*we/Re.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ee,Re.width,Re.height,1,Ie,We,Pe)}T.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Ie,We,Re.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Ke,Re.width,Re.height,Re.depth,0,Ie,We,Re.data);else if(T.isData3DTexture)q?(Ve&&n.texStorage3D(a.TEXTURE_3D,ke,Ke,Re.width,Re.height,Re.depth),Ne&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Ie,We,Re.data)):n.texImage3D(a.TEXTURE_3D,0,Ke,Re.width,Re.height,Re.depth,0,Ie,We,Re.data);else if(T.isFramebufferTexture){if(Ve)if(q)n.texStorage2D(a.TEXTURE_2D,ke,Ke,Re.width,Re.height);else{let we=Re.width,Ee=Re.height;for(let Pe=0;Pe<ke;Pe++)n.texImage2D(a.TEXTURE_2D,Pe,Ke,we,Ee,0,Ie,We,null),we>>=1,Ee>>=1}}else if(yt.length>0){if(q&&Ve){const we=Ye(yt[0]);n.texStorage2D(a.TEXTURE_2D,ke,Ke,we.width,we.height)}for(let we=0,Ee=yt.length;we<Ee;we++)Le=yt[we],q?Ne&&n.texSubImage2D(a.TEXTURE_2D,we,0,0,Ie,We,Le):n.texImage2D(a.TEXTURE_2D,we,Ke,Ie,We,Le);T.generateMipmaps=!1}else if(q){if(Ve){const we=Ye(Re);n.texStorage2D(a.TEXTURE_2D,ke,Ke,we.width,we.height)}Ne&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ie,We,Re)}else n.texImage2D(a.TEXTURE_2D,0,Ke,Ie,We,Re);S(T)&&x(ge),Ge.__version=me.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function be(z,T,Q){if(T.image.length!==6)return;const ge=ve(z,T),_e=T.source;n.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture,a.TEXTURE0+Q);const me=r.get(_e);if(_e.version!==me.__version||ge===!0){n.activeTexture(a.TEXTURE0+Q);const Ge=kt.getPrimaries(kt.workingColorSpace),Be=T.colorSpace===Mr?null:kt.getPrimaries(T.colorSpace),qe=T.colorSpace===Mr||Ge===Be?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const dt=T.isCompressedTexture||T.image[0].isCompressedTexture,Re=T.image[0]&&T.image[0].isDataTexture,Ie=[];for(let Ee=0;Ee<6;Ee++)!dt&&!Re?Ie[Ee]=b(T.image[Ee],!0,o.maxCubemapSize):Ie[Ee]=Re?T.image[Ee].image:T.image[Ee],Ie[Ee]=Gt(T,Ie[Ee]);const We=Ie[0],Ke=c.convert(T.format,T.colorSpace),Le=c.convert(T.type),yt=C(T.internalFormat,Ke,Le,T.colorSpace),q=T.isVideoTexture!==!0,Ve=me.__version===void 0||ge===!0,Ne=_e.dataReady;let ke=O(T,We);Se(a.TEXTURE_CUBE_MAP,T);let we;if(dt){q&&Ve&&n.texStorage2D(a.TEXTURE_CUBE_MAP,ke,yt,We.width,We.height);for(let Ee=0;Ee<6;Ee++){we=Ie[Ee].mipmaps;for(let Pe=0;Pe<we.length;Pe++){const pt=we[Pe];T.format!==ji?Ke!==null?q?Ne&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe,0,0,pt.width,pt.height,Ke,pt.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe,yt,pt.width,pt.height,0,pt.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ne&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe,0,0,pt.width,pt.height,Ke,Le,pt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe,yt,pt.width,pt.height,0,Ke,Le,pt.data)}}}else{if(we=T.mipmaps,q&&Ve){we.length>0&&ke++;const Ee=Ye(Ie[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,ke,yt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Re){q?Ne&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ie[Ee].width,Ie[Ee].height,Ke,Le,Ie[Ee].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,yt,Ie[Ee].width,Ie[Ee].height,0,Ke,Le,Ie[Ee].data);for(let Pe=0;Pe<we.length;Pe++){const Xt=we[Pe].image[Ee].image;q?Ne&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe+1,0,0,Xt.width,Xt.height,Ke,Le,Xt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe+1,yt,Xt.width,Xt.height,0,Ke,Le,Xt.data)}}else{q?Ne&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ke,Le,Ie[Ee]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,yt,Ke,Le,Ie[Ee]);for(let Pe=0;Pe<we.length;Pe++){const pt=we[Pe];q?Ne&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe+1,0,0,Ke,Le,pt.image[Ee]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe+1,yt,Ke,Le,pt.image[Ee])}}}S(T)&&x(a.TEXTURE_CUBE_MAP),me.__version=_e.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function Ue(z,T,Q,ge,_e,me){const Ge=c.convert(Q.format,Q.colorSpace),Be=c.convert(Q.type),qe=C(Q.internalFormat,Ge,Be,Q.colorSpace),dt=r.get(T),Re=r.get(Q);if(Re.__renderTarget=T,!dt.__hasExternalTextures){const Ie=Math.max(1,T.width>>me),We=Math.max(1,T.height>>me);_e===a.TEXTURE_3D||_e===a.TEXTURE_2D_ARRAY?n.texImage3D(_e,me,qe,Ie,We,T.depth,0,Ge,Be,null):n.texImage2D(_e,me,qe,Ie,We,0,Ge,Be,null)}n.bindFramebuffer(a.FRAMEBUFFER,z),hn(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,_e,Re.__webglTexture,0,W(T)):(_e===a.TEXTURE_2D||_e>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ge,_e,Re.__webglTexture,me),n.bindFramebuffer(a.FRAMEBUFFER,null)}function ft(z,T,Q){if(a.bindRenderbuffer(a.RENDERBUFFER,z),T.depthBuffer){const ge=T.depthTexture,_e=ge&&ge.isDepthTexture?ge.type:null,me=I(T.stencilBuffer,_e),Ge=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;hn(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,W(T),me,T.width,T.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,W(T),me,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,me,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ge,a.RENDERBUFFER,z)}else{const ge=T.textures;for(let _e=0;_e<ge.length;_e++){const me=ge[_e],Ge=c.convert(me.format,me.colorSpace),Be=c.convert(me.type),qe=C(me.internalFormat,Ge,Be,me.colorSpace);hn(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,W(T),qe,T.width,T.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,W(T),qe,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,qe,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ze(z,T,Q){const ge=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(T.depthTexture);if(_e.__renderTarget=T,(!_e.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ge){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,T.depthTexture.addEventListener("dispose",R)),_e.__webglTexture===void 0){_e.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,_e.__webglTexture),Se(a.TEXTURE_CUBE_MAP,T.depthTexture);const dt=c.convert(T.depthTexture.format),Re=c.convert(T.depthTexture.type);let Ie;T.depthTexture.format===Ha?Ie=a.DEPTH_COMPONENT24:T.depthTexture.format===ts&&(Ie=a.DEPTH24_STENCIL8);for(let We=0;We<6;We++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Ie,T.width,T.height,0,dt,Re,null)}}else re(T.depthTexture,0);const me=_e.__webglTexture,Ge=W(T),Be=ge?a.TEXTURE_CUBE_MAP_POSITIVE_X+Q:a.TEXTURE_2D,qe=T.depthTexture.format===ts?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ha)hn(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,qe,Be,me,0,Ge):a.framebufferTexture2D(a.FRAMEBUFFER,qe,Be,me,0);else if(T.depthTexture.format===ts)hn(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,qe,Be,me,0,Ge):a.framebufferTexture2D(a.FRAMEBUFFER,qe,Be,me,0);else throw new Error("Unknown depthTexture format")}function xt(z){const T=r.get(z),Q=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){const ge=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",_e)};ge.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=ge}if(z.depthTexture&&!T.__autoAllocateDepthBuffer)if(Q)for(let ge=0;ge<6;ge++)ze(T.__webglFramebuffer[ge],z,ge);else{const ge=z.texture.mipmaps;ge&&ge.length>0?ze(T.__webglFramebuffer[0],z,0):ze(T.__webglFramebuffer,z,0)}else if(Q){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=a.createRenderbuffer(),ft(T.__webglDepthbuffer[ge],z,!1);else{const _e=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer[ge];a.bindRenderbuffer(a.RENDERBUFFER,me),a.framebufferRenderbuffer(a.FRAMEBUFFER,_e,a.RENDERBUFFER,me)}}else{const ge=z.texture.mipmaps;if(ge&&ge.length>0?n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),ft(T.__webglDepthbuffer,z,!1);else{const _e=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,me),a.framebufferRenderbuffer(a.FRAMEBUFFER,_e,a.RENDERBUFFER,me)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function dn(z,T,Q){const ge=r.get(z);T!==void 0&&Ue(ge.__webglFramebuffer,z,z.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Q!==void 0&&xt(z)}function Ct(z){const T=z.texture,Q=r.get(z),ge=r.get(T);z.addEventListener("dispose",H);const _e=z.textures,me=z.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(ge.__webglTexture===void 0&&(ge.__webglTexture=a.createTexture()),ge.__version=T.version,u.memory.textures++),me){Q.__webglFramebuffer=[];for(let Be=0;Be<6;Be++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Be]=[];for(let qe=0;qe<T.mipmaps.length;qe++)Q.__webglFramebuffer[Be][qe]=a.createFramebuffer()}else Q.__webglFramebuffer[Be]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Be=0;Be<T.mipmaps.length;Be++)Q.__webglFramebuffer[Be]=a.createFramebuffer()}else Q.__webglFramebuffer=a.createFramebuffer();if(Ge)for(let Be=0,qe=_e.length;Be<qe;Be++){const dt=r.get(_e[Be]);dt.__webglTexture===void 0&&(dt.__webglTexture=a.createTexture(),u.memory.textures++)}if(z.samples>0&&hn(z)===!1){Q.__webglMultisampledFramebuffer=a.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Be=0;Be<_e.length;Be++){const qe=_e[Be];Q.__webglColorRenderbuffer[Be]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Q.__webglColorRenderbuffer[Be]);const dt=c.convert(qe.format,qe.colorSpace),Re=c.convert(qe.type),Ie=C(qe.internalFormat,dt,Re,qe.colorSpace,z.isXRRenderTarget===!0),We=W(z);a.renderbufferStorageMultisample(a.RENDERBUFFER,We,Ie,z.width,z.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.RENDERBUFFER,Q.__webglColorRenderbuffer[Be])}a.bindRenderbuffer(a.RENDERBUFFER,null),z.depthBuffer&&(Q.__webglDepthRenderbuffer=a.createRenderbuffer(),ft(Q.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(me){n.bindTexture(a.TEXTURE_CUBE_MAP,ge.__webglTexture),Se(a.TEXTURE_CUBE_MAP,T);for(let Be=0;Be<6;Be++)if(T.mipmaps&&T.mipmaps.length>0)for(let qe=0;qe<T.mipmaps.length;qe++)Ue(Q.__webglFramebuffer[Be][qe],z,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,qe);else Ue(Q.__webglFramebuffer[Be],z,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0);S(T)&&x(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Be=0,qe=_e.length;Be<qe;Be++){const dt=_e[Be],Re=r.get(dt);let Ie=a.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ie=z.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ie,Re.__webglTexture),Se(Ie,dt),Ue(Q.__webglFramebuffer,z,dt,a.COLOR_ATTACHMENT0+Be,Ie,0),S(dt)&&x(Ie)}n.unbindTexture()}else{let Be=a.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Be=z.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Be,ge.__webglTexture),Se(Be,T),T.mipmaps&&T.mipmaps.length>0)for(let qe=0;qe<T.mipmaps.length;qe++)Ue(Q.__webglFramebuffer[qe],z,T,a.COLOR_ATTACHMENT0,Be,qe);else Ue(Q.__webglFramebuffer,z,T,a.COLOR_ATTACHMENT0,Be,0);S(T)&&x(Be),n.unbindTexture()}z.depthBuffer&&xt(z)}function bt(z){const T=z.textures;for(let Q=0,ge=T.length;Q<ge;Q++){const _e=T[Q];if(S(_e)){const me=U(z),Ge=r.get(_e).__webglTexture;n.bindTexture(me,Ge),x(me),n.unbindTexture()}}}const Yt=[],St=[];function zt(z){if(z.samples>0){if(hn(z)===!1){const T=z.textures,Q=z.width,ge=z.height;let _e=a.COLOR_BUFFER_BIT;const me=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ge=r.get(z),Be=T.length>1;if(Be)for(let dt=0;dt<T.length;dt++)n.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+dt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+dt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const qe=z.texture.mipmaps;qe&&qe.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let dt=0;dt<T.length;dt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(_e|=a.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(_e|=a.STENCIL_BUFFER_BIT)),Be){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[dt]);const Re=r.get(T[dt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Re,0)}a.blitFramebuffer(0,0,Q,ge,0,0,Q,ge,_e,a.NEAREST),d===!0&&(Yt.length=0,St.length=0,Yt.push(a.COLOR_ATTACHMENT0+dt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Yt.push(me),St.push(me),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,St)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Yt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Be)for(let dt=0;dt<T.length;dt++){n.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+dt,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[dt]);const Re=r.get(T[dt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+dt,a.TEXTURE_2D,Re,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&d){const T=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function W(z){return Math.min(o.maxSamples,z.samples)}function hn(z){const T=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ft(z){const T=u.render.frame;g.get(z)!==T&&(g.set(z,T),z.update())}function Gt(z,T){const Q=z.colorSpace,ge=z.format,_e=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Q!==ao&&Q!==Mr&&(kt.getTransfer(Q)===tn?(ge!==ji||_e!==Ii)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",Q)),T}function Ye(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=ne,this.setTexture2D=re,this.setTexture2DArray=L,this.setTexture3D=F,this.setTextureCube=Y,this.rebindTextures=dn,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=hn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function E3(a,e){function n(r,o=Mr){let c;const u=kt.getTransfer(o);if(r===Ii)return a.UNSIGNED_BYTE;if(r===Jp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===$p)return a.UNSIGNED_SHORT_5_5_5_1;if(r===uy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===fy)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===ly)return a.BYTE;if(r===cy)return a.SHORT;if(r===Ml)return a.UNSIGNED_SHORT;if(r===Qp)return a.INT;if(r===fa)return a.UNSIGNED_INT;if(r===aa)return a.FLOAT;if(r===za)return a.HALF_FLOAT;if(r===dy)return a.ALPHA;if(r===hy)return a.RGB;if(r===ji)return a.RGBA;if(r===Ha)return a.DEPTH_COMPONENT;if(r===ts)return a.DEPTH_STENCIL;if(r===py)return a.RED;if(r===em)return a.RED_INTEGER;if(r===io)return a.RG;if(r===tm)return a.RG_INTEGER;if(r===nm)return a.RGBA_INTEGER;if(r===vu||r===_u||r===xu||r===yu)if(u===tn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===vu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===vu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ep||r===tp||r===np||r===ip)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ep)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ip)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ap||r===rp||r===sp||r===op||r===lp||r===cp||r===up)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ap||r===rp)return u===tn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===sp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===op)return c.COMPRESSED_R11_EAC;if(r===lp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===cp)return c.COMPRESSED_RG11_EAC;if(r===up)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===vp||r===_p||r===xp||r===yp||r===Sp||r===Mp||r===Ep||r===bp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===fp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_p)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ep)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tp||r===Ap||r===Rp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Tp)return u===tn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ap)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wp||r===Cp||r===Dp||r===Np)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===wp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Cp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===El?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const b3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class A3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new wy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new da({vertexShader:b3,fragmentShader:T3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ga(new Bu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R3 extends so{constructor(e,n){super();const r=this;let o=null,c=1,u=null,h="local-floor",d=1,p=null,g=null,v=null,_=null,y=null,M=null;const b=typeof XRWebGLBinding<"u",S=new A3,x={},U=n.getContextAttributes();let C=null,I=null;const O=[],R=[],H=new sn;let X=null;const A=new Oi;A.viewport=new bn;const D=new Oi;D.viewport=new bn;const k=[A,D],ne=new F1;let Z=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let be=O[ae];return be===void 0&&(be=new Th,O[ae]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ae){let be=O[ae];return be===void 0&&(be=new Th,O[ae]=be),be.getGripSpace()},this.getHand=function(ae){let be=O[ae];return be===void 0&&(be=new Th,O[ae]=be),be.getHandSpace()};function re(ae){const be=R.indexOf(ae.inputSource);if(be===-1)return;const Ue=O[be];Ue!==void 0&&(Ue.update(ae.inputSource,ae.frame,p||u),Ue.dispatchEvent({type:ae.type,data:ae.inputSource}))}function L(){o.removeEventListener("select",re),o.removeEventListener("selectstart",re),o.removeEventListener("selectend",re),o.removeEventListener("squeeze",re),o.removeEventListener("squeezestart",re),o.removeEventListener("squeezeend",re),o.removeEventListener("end",L),o.removeEventListener("inputsourceschange",F);for(let ae=0;ae<O.length;ae++){const be=R[ae];be!==null&&(R[ae]=null,O[ae].disconnect(be))}Z=null,ce=null,S.reset();for(const ae in x)delete x[ae];e.setRenderTarget(C),y=null,_=null,v=null,o=null,I=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(X),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(C=e.getRenderTarget(),o.addEventListener("select",re),o.addEventListener("selectstart",re),o.addEventListener("selectend",re),o.addEventListener("squeeze",re),o.addEventListener("squeezestart",re),o.addEventListener("squeezeend",re),o.addEventListener("end",L),o.addEventListener("inputsourceschange",F),U.xrCompatible!==!0&&await n.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(H),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,ft=null,ze=null;U.depth&&(ze=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ue=U.stencil?ts:Ha,ft=U.stencil?El:fa);const xt={colorFormat:n.RGBA8,depthFormat:ze,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(xt),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),I=new ua(_.textureWidth,_.textureHeight,{format:ji,type:Ii,depthTexture:new Tl(_.textureWidth,_.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ue={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Ue),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new ua(y.framebufferWidth,y.framebufferHeight,{format:ji,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(h),Ze.setContext(o),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function F(ae){for(let be=0;be<ae.removed.length;be++){const Ue=ae.removed[be],ft=R.indexOf(Ue);ft>=0&&(R[ft]=null,O[ft].disconnect(Ue))}for(let be=0;be<ae.added.length;be++){const Ue=ae.added[be];let ft=R.indexOf(Ue);if(ft===-1){for(let xt=0;xt<O.length;xt++)if(xt>=R.length){R.push(Ue),ft=xt;break}else if(R[xt]===null){R[xt]=Ue,ft=xt;break}if(ft===-1)break}const ze=O[ft];ze&&ze.connect(Ue)}}const Y=new de,xe=new de;function P(ae,be,Ue){Y.setFromMatrixPosition(be.matrixWorld),xe.setFromMatrixPosition(Ue.matrixWorld);const ft=Y.distanceTo(xe),ze=be.projectionMatrix.elements,xt=Ue.projectionMatrix.elements,dn=ze[14]/(ze[10]-1),Ct=ze[14]/(ze[10]+1),bt=(ze[9]+1)/ze[5],Yt=(ze[9]-1)/ze[5],St=(ze[8]-1)/ze[0],zt=(xt[8]+1)/xt[0],W=dn*St,hn=dn*zt,Ft=ft/(-St+zt),Gt=Ft*-St;if(be.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Gt),ae.translateZ(Ft),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),ze[10]===-1)ae.projectionMatrix.copy(be.projectionMatrix),ae.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const Ye=dn+Ft,z=Ct+Ft,T=W-Gt,Q=hn+(ft-Gt),ge=bt*Ct/z*Ye,_e=Yt*Ct/z*Ye;ae.projectionMatrix.makePerspective(T,Q,ge,_e,Ye,z),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function K(ae,be){be===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(be.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let be=ae.near,Ue=ae.far;S.texture!==null&&(S.depthNear>0&&(be=S.depthNear),S.depthFar>0&&(Ue=S.depthFar)),ne.near=D.near=A.near=be,ne.far=D.far=A.far=Ue,(Z!==ne.near||ce!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),Z=ne.near,ce=ne.far),ne.layers.mask=ae.layers.mask|6,A.layers.mask=ne.layers.mask&3,D.layers.mask=ne.layers.mask&5;const ft=ae.parent,ze=ne.cameras;K(ne,ft);for(let xt=0;xt<ze.length;xt++)K(ze[xt],ft);ze.length===2?P(ne,A,D):ne.projectionMatrix.copy(A.projectionMatrix),Se(ae,ne,ft)};function Se(ae,be,Ue){Ue===null?ae.matrix.copy(be.matrixWorld):(ae.matrix.copy(Ue.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(be.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(be.projectionMatrix),ae.projectionMatrixInverse.copy(be.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Up*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(_===null&&y===null))return d},this.setFoveation=function(ae){d=ae,_!==null&&(_.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ne)},this.getCameraTexture=function(ae){return x[ae]};let ve=null;function Oe(ae,be){if(g=be.getViewerPose(p||u),M=be,g!==null){const Ue=g.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let ft=!1;Ue.length!==ne.cameras.length&&(ne.cameras.length=0,ft=!0);for(let Ct=0;Ct<Ue.length;Ct++){const bt=Ue[Ct];let Yt=null;if(y!==null)Yt=y.getViewport(bt);else{const zt=v.getViewSubImage(_,bt);Yt=zt.viewport,Ct===0&&(e.setRenderTargetTextures(I,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(I))}let St=k[Ct];St===void 0&&(St=new Oi,St.layers.enable(Ct),St.viewport=new bn,k[Ct]=St),St.matrix.fromArray(bt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(bt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Ct===0&&(ne.matrix.copy(St.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),ft===!0&&ne.cameras.push(St)}const ze=o.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){v=r.getBinding();const Ct=v.getDepthInformation(Ue[0]);Ct&&Ct.isValid&&Ct.texture&&S.init(Ct,o.renderState)}if(ze&&ze.includes("camera-access")&&b){e.state.unbindTexture(),v=r.getBinding();for(let Ct=0;Ct<Ue.length;Ct++){const bt=Ue[Ct].camera;if(bt){let Yt=x[bt];Yt||(Yt=new wy,x[bt]=Yt);const St=v.getCameraImage(bt);Yt.sourceTexture=St}}}}for(let Ue=0;Ue<O.length;Ue++){const ft=R[Ue],ze=O[Ue];ft!==null&&ze!==void 0&&ze.update(ft,be,p||u)}ve&&ve(ae,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),M=null}const Ze=new Dy;Ze.setAnimationLoop(Oe),this.setAnimationLoop=function(ae){ve=ae},this.dispose=function(){}}}const Zr=new Va,w3=new yn;function C3(a,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,My(a)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,U,C,I){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),v(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,I)):x.isMeshMatcapMaterial?(c(S,x),M(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),b(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?d(S,x,U,C):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===di&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===di&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const U=e.get(x),C=U.envMap,I=U.envMapRotation;C&&(S.envMap.value=C,Zr.copy(I),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),S.envMapRotation.value.setFromMatrix4(w3.makeRotationFromEuler(Zr)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,U,C){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*U,S.scale.value=C*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,U){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===di&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const U=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function D3(a,e,n,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function d(U,C){const I=C.program;r.uniformBlockBinding(U,I)}function p(U,C){let I=o[U.id];I===void 0&&(M(U),I=g(U),o[U.id]=I,U.addEventListener("dispose",S));const O=C.program;r.updateUBOMapping(U,O);const R=e.render.frame;c[U.id]!==R&&(_(U),c[U.id]=R)}function g(U){const C=v();U.__bindingPointIndex=C;const I=a.createBuffer(),O=U.__size,R=U.usage;return a.bindBuffer(a.UNIFORM_BUFFER,I),a.bufferData(a.UNIFORM_BUFFER,O,R),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,I),I}function v(){for(let U=0;U<h;U++)if(u.indexOf(U)===-1)return u.push(U),U;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const C=o[U.id],I=U.uniforms,O=U.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let R=0,H=I.length;R<H;R++){const X=Array.isArray(I[R])?I[R]:[I[R]];for(let A=0,D=X.length;A<D;A++){const k=X[A];if(y(k,R,A,O)===!0){const ne=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let ce=0;for(let re=0;re<Z.length;re++){const L=Z[re],F=b(L);typeof L=="number"||typeof L=="boolean"?(k.__data[0]=L,a.bufferSubData(a.UNIFORM_BUFFER,ne+ce,k.__data)):L.isMatrix3?(k.__data[0]=L.elements[0],k.__data[1]=L.elements[1],k.__data[2]=L.elements[2],k.__data[3]=0,k.__data[4]=L.elements[3],k.__data[5]=L.elements[4],k.__data[6]=L.elements[5],k.__data[7]=0,k.__data[8]=L.elements[6],k.__data[9]=L.elements[7],k.__data[10]=L.elements[8],k.__data[11]=0):(L.toArray(k.__data,ce),ce+=F.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ne,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(U,C,I,O){const R=U.value,H=C+"_"+I;if(O[H]===void 0)return typeof R=="number"||typeof R=="boolean"?O[H]=R:O[H]=R.clone(),!0;{const X=O[H];if(typeof R=="number"||typeof R=="boolean"){if(X!==R)return O[H]=R,!0}else if(X.equals(R)===!1)return X.copy(R),!0}return!1}function M(U){const C=U.uniforms;let I=0;const O=16;for(let H=0,X=C.length;H<X;H++){const A=Array.isArray(C[H])?C[H]:[C[H]];for(let D=0,k=A.length;D<k;D++){const ne=A[D],Z=Array.isArray(ne.value)?ne.value:[ne.value];for(let ce=0,re=Z.length;ce<re;ce++){const L=Z[ce],F=b(L),Y=I%O,xe=Y%F.boundary,P=Y+xe;I+=xe,P!==0&&O-P<F.storage&&(I+=O-P),ne.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=I,I+=F.storage}}}const R=I%O;return R>0&&(I+=O-R),U.__size=I,U.__cache={},this}function b(U){const C={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(C.boundary=4,C.storage=4):U.isVector2?(C.boundary=8,C.storage=8):U.isVector3||U.isColor?(C.boundary=16,C.storage=12):U.isVector4?(C.boundary=16,C.storage=16):U.isMatrix3?(C.boundary=48,C.storage=48):U.isMatrix4?(C.boundary=64,C.storage=64):U.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):vt("WebGLRenderer: Unsupported uniform value type.",U),C}function S(U){const C=U.target;C.removeEventListener("dispose",S);const I=u.indexOf(C.__bindingPointIndex);u.splice(I,1),a.deleteBuffer(o[C.id]),delete o[C.id],delete c[C.id]}function x(){for(const U in o)a.deleteBuffer(o[U]);u=[],o={},c={}}return{bind:d,update:p,dispose:x}}const N3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ta=null;function U3(){return ta===null&&(ta=new R1(N3,16,16,io,za),ta.name="DFG_LUT",ta.minFilter=Kn,ta.magFilter=Kn,ta.wrapS=Oa,ta.wrapT=Oa,ta.generateMipmaps=!1,ta.needsUpdate=!0),ta}class L3{constructor(e={}){const{canvas:n=e1(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:y=Ii}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const b=y,S=new Set([nm,tm,em]),x=new Set([Ii,fa,Ml,El,Jp,$p]),U=new Uint32Array(4),C=new Int32Array(4);let I=null,O=null;const R=[],H=[];let X=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1;this._outputColorSpace=Pi;let k=0,ne=0,Z=null,ce=-1,re=null;const L=new bn,F=new bn;let Y=null;const xe=new It(0);let P=0,K=n.width,Se=n.height,ve=1,Oe=null,Ze=null;const ae=new bn(0,0,K,Se),be=new bn(0,0,K,Se);let Ue=!1;const ft=new Ay;let ze=!1,xt=!1;const dn=new yn,Ct=new de,bt=new bn,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function zt(){return Z===null?ve:1}let W=r;function hn(N,J){return n.getContext(N,J)}try{const N={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kp}`),n.addEventListener("webglcontextlost",pt,!1),n.addEventListener("webglcontextrestored",Xt,!1),n.addEventListener("webglcontextcreationerror",V,!1),W===null){const J="webgl2";if(W=hn(J,N),W===null)throw hn(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw qt("WebGLRenderer: "+N.message),N}let Ft,Gt,Ye,z,T,Q,ge,_e,me,Ge,Be,qe,dt,Re,Ie,We,Ke,Le,yt,q,Ve,Ne,ke,we;function Ee(){Ft=new Uw(W),Ft.init(),Ne=new E3(W,Ft),Gt=new Ew(W,Ft,e,Ne),Ye=new S3(W,Ft),Gt.reversedDepthBuffer&&_&&Ye.buffers.depth.setReversed(!0),z=new Ow(W),T=new s3,Q=new M3(W,Ft,Ye,T,Gt,Ne,z),ge=new Tw(A),_e=new Nw(A),me=new z1(W),ke=new Sw(W,me),Ge=new Lw(W,me,z,ke),Be=new Fw(W,Ge,me,z),yt=new Iw(W,Gt,Q),We=new bw(T),qe=new r3(A,ge,_e,Ft,Gt,ke,We),dt=new C3(A,T),Re=new l3,Ie=new p3(Ft),Le=new yw(A,ge,_e,Ye,Be,M,d),Ke=new x3(A,Be,Gt),we=new D3(W,z,Gt,Ye),q=new Mw(W,Ft,z),Ve=new Pw(W,Ft,z),z.programs=qe.programs,A.capabilities=Gt,A.extensions=Ft,A.properties=T,A.renderLists=Re,A.shadowMap=Ke,A.state=Ye,A.info=z}Ee(),b!==Ii&&(X=new zw(b,n.width,n.height,o,c));const Pe=new R3(A,W);this.xr=Pe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const N=Ft.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ft.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(N){N!==void 0&&(ve=N,this.setSize(K,Se,!1))},this.getSize=function(N){return N.set(K,Se)},this.setSize=function(N,J,he=!0){if(Pe.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=N,Se=J,n.width=Math.floor(N*ve),n.height=Math.floor(J*ve),he===!0&&(n.style.width=N+"px",n.style.height=J+"px"),X!==null&&X.setSize(n.width,n.height),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(K*ve,Se*ve).floor()},this.setDrawingBufferSize=function(N,J,he){K=N,Se=J,ve=he,n.width=Math.floor(N*he),n.height=Math.floor(J*he),this.setViewport(0,0,N,J)},this.setEffects=function(N){if(b===Ii){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let J=0;J<N.length;J++)if(N[J].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(L)},this.getViewport=function(N){return N.copy(ae)},this.setViewport=function(N,J,he,$){N.isVector4?ae.set(N.x,N.y,N.z,N.w):ae.set(N,J,he,$),Ye.viewport(L.copy(ae).multiplyScalar(ve).round())},this.getScissor=function(N){return N.copy(be)},this.setScissor=function(N,J,he,$){N.isVector4?be.set(N.x,N.y,N.z,N.w):be.set(N,J,he,$),Ye.scissor(F.copy(be).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(N){Ye.setScissorTest(Ue=N)},this.setOpaqueSort=function(N){Oe=N},this.setTransparentSort=function(N){Ze=N},this.getClearColor=function(N){return N.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,he=!0){let $=0;if(N){let ee=!1;if(Z!==null){const Fe=Z.texture.format;ee=S.has(Fe)}if(ee){const Fe=Z.texture.type,He=x.has(Fe),Ce=Le.getClearColor(),je=Le.getClearAlpha(),nt=Ce.r,ut=Ce.g,$e=Ce.b;He?(U[0]=nt,U[1]=ut,U[2]=$e,U[3]=je,W.clearBufferuiv(W.COLOR,0,U)):(C[0]=nt,C[1]=ut,C[2]=$e,C[3]=je,W.clearBufferiv(W.COLOR,0,C))}else $|=W.COLOR_BUFFER_BIT}J&&($|=W.DEPTH_BUFFER_BIT),he&&($|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",Xt,!1),n.removeEventListener("webglcontextcreationerror",V,!1),Le.dispose(),Re.dispose(),Ie.dispose(),T.dispose(),ge.dispose(),_e.dispose(),Be.dispose(),ke.dispose(),we.dispose(),qe.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",et),Pe.removeEventListener("sessionend",rt),st.stop()};function pt(N){N.preventDefault(),R_("WebGLRenderer: Context Lost."),D=!0}function Xt(){R_("WebGLRenderer: Context Restored."),D=!1;const N=z.autoReset,J=Ke.enabled,he=Ke.autoUpdate,$=Ke.needsUpdate,ee=Ke.type;Ee(),z.autoReset=N,Ke.enabled=J,Ke.autoUpdate=he,Ke.needsUpdate=$,Ke.type=ee}function V(N){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ie(N){const J=N.target;J.removeEventListener("dispose",ie),ue(J)}function ue(N){Ae(N),T.remove(N)}function Ae(N){const J=T.get(N).programs;J!==void 0&&(J.forEach(function(he){qe.releaseProgram(he)}),N.isShaderMaterial&&qe.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,he,$,ee,Fe){J===null&&(J=Yt);const He=ee.isMesh&&ee.matrixWorld.determinant()<0,Ce=bi(N,J,he,$,ee);Ye.setMaterial($,He);let je=he.index,nt=1;if($.wireframe===!0){if(je=Ge.getWireframeAttribute(he),je===void 0)return;nt=2}const ut=he.drawRange,$e=he.attributes.position;let Tt=ut.start*nt,Qt=(ut.start+ut.count)*nt;Fe!==null&&(Tt=Math.max(Tt,Fe.start*nt),Qt=Math.min(Qt,(Fe.start+Fe.count)*nt)),je!==null?(Tt=Math.max(Tt,0),Qt=Math.min(Qt,je.count)):$e!=null&&(Tt=Math.max(Tt,0),Qt=Math.min(Qt,$e.count));const ln=Qt-Tt;if(ln<0||ln===1/0)return;ke.setup(ee,$,Ce,he,je);let mn,Wt=q;if(je!==null&&(mn=me.get(je),Wt=Ve,Wt.setIndex(mn)),ee.isMesh)$.wireframe===!0?(Ye.setLineWidth($.wireframeLinewidth*zt()),Wt.setMode(W.LINES)):Wt.setMode(W.TRIANGLES);else if(ee.isLine){let ct=$.linewidth;ct===void 0&&(ct=1),Ye.setLineWidth(ct*zt()),ee.isLineSegments?Wt.setMode(W.LINES):ee.isLineLoop?Wt.setMode(W.LINE_LOOP):Wt.setMode(W.LINE_STRIP)}else ee.isPoints?Wt.setMode(W.POINTS):ee.isSprite&&Wt.setMode(W.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)bl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Wt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Wt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const ct=ee._multiDrawStarts,Et=ee._multiDrawCounts,Ot=ee._multiDrawCount,Wn=je?me.get(je).bytesPerElement:1,Zi=T.get($).currentProgram.getUniforms();for(let Tn=0;Tn<Ot;Tn++)Zi.setValue(W,"_gl_DrawID",Tn),Wt.render(ct[Tn]/Wn,Et[Tn])}else if(ee.isInstancedMesh)Wt.renderInstances(Tt,ln,ee.count);else if(he.isInstancedBufferGeometry){const ct=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Et=Math.min(he.instanceCount,ct);Wt.renderInstances(Tt,ln,Et)}else Wt.render(Tt,ln)};function De(N,J,he){N.transparent===!0&&N.side===Pa&&N.forceSinglePass===!1?(N.side=di,N.needsUpdate=!0,on(N,J,he),N.side=Tr,N.needsUpdate=!0,on(N,J,he),N.side=Pa):on(N,J,he)}this.compile=function(N,J,he=null){he===null&&(he=N),O=Ie.get(he),O.init(J),H.push(O),he.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(O.pushLight(ee),ee.castShadow&&O.pushShadow(ee))}),N!==he&&N.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(O.pushLight(ee),ee.castShadow&&O.pushShadow(ee))}),O.setupLights();const $=new Set;return N.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Fe=ee.material;if(Fe)if(Array.isArray(Fe))for(let He=0;He<Fe.length;He++){const Ce=Fe[He];De(Ce,he,ee),$.add(Ce)}else De(Fe,he,ee),$.add(Fe)}),O=H.pop(),$},this.compileAsync=function(N,J,he=null){const $=this.compile(N,J,he);return new Promise(ee=>{function Fe(){if($.forEach(function(He){T.get(He).currentProgram.isReady()&&$.delete(He)}),$.size===0){ee(N);return}setTimeout(Fe,10)}Ft.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Qe=null;function it(N){Qe&&Qe(N)}function et(){st.stop()}function rt(){st.start()}const st=new Dy;st.setAnimationLoop(it),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(N){Qe=N,Pe.setAnimationLoop(N),N===null?st.stop():st.start()},Pe.addEventListener("sessionstart",et),Pe.addEventListener("sessionend",rt),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const he=Pe.enabled===!0&&Pe.isPresenting===!0,$=X!==null&&(Z===null||he)&&X.begin(A,Z);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(J),J=Pe.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,J,Z),O=Ie.get(N,H.length),O.init(J),H.push(O),dn.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ft.setFromProjectionMatrix(dn,ra,J.reversedDepth),xt=this.localClippingEnabled,ze=We.init(this.clippingPlanes,xt),I=Re.get(N,R.length),I.init(),R.push(I),Pe.enabled===!0&&Pe.isPresenting===!0){const He=A.xr.getDepthSensingMesh();He!==null&&Je(He,J,-1/0,A.sortObjects)}Je(N,J,0,A.sortObjects),I.finish(),A.sortObjects===!0&&I.sort(Oe,Ze),St=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,St&&Le.addToRenderList(I,N),this.info.render.frame++,ze===!0&&We.beginShadows();const ee=O.state.shadowsArray;if(Ke.render(ee,N,J),ze===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&X.hasRenderPass())===!1){const He=I.opaque,Ce=I.transmissive;if(O.setupLights(),J.isArrayCamera){const je=J.cameras;if(Ce.length>0)for(let nt=0,ut=je.length;nt<ut;nt++){const $e=je[nt];Mt(He,Ce,N,$e)}St&&Le.render(N);for(let nt=0,ut=je.length;nt<ut;nt++){const $e=je[nt];at(I,N,$e,$e.viewport)}}else Ce.length>0&&Mt(He,Ce,N,J),St&&Le.render(N),at(I,N,J)}Z!==null&&ne===0&&(Q.updateMultisampleRenderTarget(Z),Q.updateRenderTargetMipmap(Z)),$&&X.end(A),N.isScene===!0&&N.onAfterRender(A,N,J),ke.resetDefaultState(),ce=-1,re=null,H.pop(),H.length>0?(O=H[H.length-1],ze===!0&&We.setGlobalState(A.clippingPlanes,O.state.camera)):O=null,R.pop(),R.length>0?I=R[R.length-1]:I=null};function Je(N,J,he,$){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)he=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLight)O.pushLight(N),N.castShadow&&O.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ft.intersectsSprite(N)){$&&bt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(dn);const He=Be.update(N),Ce=N.material;Ce.visible&&I.push(N,He,Ce,he,bt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||ft.intersectsObject(N))){const He=Be.update(N),Ce=N.material;if($&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),bt.copy(N.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),bt.copy(He.boundingSphere.center)),bt.applyMatrix4(N.matrixWorld).applyMatrix4(dn)),Array.isArray(Ce)){const je=He.groups;for(let nt=0,ut=je.length;nt<ut;nt++){const $e=je[nt],Tt=Ce[$e.materialIndex];Tt&&Tt.visible&&I.push(N,He,Tt,he,bt.z,$e)}}else Ce.visible&&I.push(N,He,Ce,he,bt.z,null)}}const Fe=N.children;for(let He=0,Ce=Fe.length;He<Ce;He++)Je(Fe[He],J,he,$)}function at(N,J,he,$){const{opaque:ee,transmissive:Fe,transparent:He}=N;O.setupLightsView(he),ze===!0&&We.setGlobalState(A.clippingPlanes,he),$&&Ye.viewport(L.copy($)),ee.length>0&&Ht(ee,J,he),Fe.length>0&&Ht(Fe,J,he),He.length>0&&Ht(He,J,he),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Mt(N,J,he,$){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[$.id]===void 0){const Tt=Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[$.id]=new ua(1,1,{generateMipmaps:!0,type:Tt?za:Ii,minFilter:es,samples:Gt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace})}const Fe=O.state.transmissionRenderTarget[$.id],He=$.viewport||L;Fe.setSize(He.z*A.transmissionResolutionScale,He.w*A.transmissionResolutionScale);const Ce=A.getRenderTarget(),je=A.getActiveCubeFace(),nt=A.getActiveMipmapLevel();A.setRenderTarget(Fe),A.getClearColor(xe),P=A.getClearAlpha(),P<1&&A.setClearColor(16777215,.5),A.clear(),St&&Le.render(he);const ut=A.toneMapping;A.toneMapping=ca;const $e=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),O.setupLightsView($),ze===!0&&We.setGlobalState(A.clippingPlanes,$),Ht(N,he,$),Q.updateMultisampleRenderTarget(Fe),Q.updateRenderTargetMipmap(Fe),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Qt=0,ln=J.length;Qt<ln;Qt++){const mn=J[Qt],{object:Wt,geometry:ct,material:Et,group:Ot}=mn;if(Et.side===Pa&&Wt.layers.test($.layers)){const Wn=Et.side;Et.side=di,Et.needsUpdate=!0,pn(Wt,he,$,ct,Et,Ot),Et.side=Wn,Et.needsUpdate=!0,Tt=!0}}Tt===!0&&(Q.updateMultisampleRenderTarget(Fe),Q.updateRenderTargetMipmap(Fe))}A.setRenderTarget(Ce,je,nt),A.setClearColor(xe,P),$e!==void 0&&($.viewport=$e),A.toneMapping=ut}function Ht(N,J,he){const $=J.isScene===!0?J.overrideMaterial:null;for(let ee=0,Fe=N.length;ee<Fe;ee++){const He=N[ee],{object:Ce,geometry:je,group:nt}=He;let ut=He.material;ut.allowOverride===!0&&$!==null&&(ut=$),Ce.layers.test(he.layers)&&pn(Ce,J,he,je,ut,nt)}}function pn(N,J,he,$,ee,Fe){N.onBeforeRender(A,J,he,$,ee,Fe),N.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ee.onBeforeRender(A,J,he,$,N,Fe),ee.transparent===!0&&ee.side===Pa&&ee.forceSinglePass===!1?(ee.side=di,ee.needsUpdate=!0,A.renderBufferDirect(he,J,$,ee,N,Fe),ee.side=Tr,ee.needsUpdate=!0,A.renderBufferDirect(he,J,$,ee,N,Fe),ee.side=Pa):A.renderBufferDirect(he,J,$,ee,N,Fe),N.onAfterRender(A,J,he,$,ee,Fe)}function on(N,J,he){J.isScene!==!0&&(J=Yt);const $=T.get(N),ee=O.state.lights,Fe=O.state.shadowsArray,He=ee.state.version,Ce=qe.getParameters(N,ee.state,Fe,J,he),je=qe.getProgramCacheKey(Ce);let nt=$.programs;$.environment=N.isMeshStandardMaterial?J.environment:null,$.fog=J.fog,$.envMap=(N.isMeshStandardMaterial?_e:ge).get(N.envMap||$.environment),$.envMapRotation=$.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,nt===void 0&&(N.addEventListener("dispose",ie),nt=new Map,$.programs=nt);let ut=nt.get(je);if(ut!==void 0){if($.currentProgram===ut&&$.lightsStateVersion===He)return Zt(N,Ce),ut}else Ce.uniforms=qe.getUniforms(N),N.onBeforeCompile(Ce,A),ut=qe.acquireProgram(Ce,je),nt.set(je,ut),$.uniforms=Ce.uniforms;const $e=$.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&($e.clippingPlanes=We.uniform),Zt(N,Ce),$.needsLights=zn(N),$.lightsStateVersion=He,$.needsLights&&($e.ambientLightColor.value=ee.state.ambient,$e.lightProbe.value=ee.state.probe,$e.directionalLights.value=ee.state.directional,$e.directionalLightShadows.value=ee.state.directionalShadow,$e.spotLights.value=ee.state.spot,$e.spotLightShadows.value=ee.state.spotShadow,$e.rectAreaLights.value=ee.state.rectArea,$e.ltc_1.value=ee.state.rectAreaLTC1,$e.ltc_2.value=ee.state.rectAreaLTC2,$e.pointLights.value=ee.state.point,$e.pointLightShadows.value=ee.state.pointShadow,$e.hemisphereLights.value=ee.state.hemi,$e.directionalShadowMap.value=ee.state.directionalShadowMap,$e.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,$e.spotShadowMap.value=ee.state.spotShadowMap,$e.spotLightMatrix.value=ee.state.spotLightMatrix,$e.spotLightMap.value=ee.state.spotLightMap,$e.pointShadowMap.value=ee.state.pointShadowMap,$e.pointShadowMatrix.value=ee.state.pointShadowMatrix),$.currentProgram=ut,$.uniformsList=null,ut}function _t(N){if(N.uniformsList===null){const J=N.currentProgram.getUniforms();N.uniformsList=Mu.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function Zt(N,J){const he=T.get(N);he.outputColorSpace=J.outputColorSpace,he.batching=J.batching,he.batchingColor=J.batchingColor,he.instancing=J.instancing,he.instancingColor=J.instancingColor,he.instancingMorph=J.instancingMorph,he.skinning=J.skinning,he.morphTargets=J.morphTargets,he.morphNormals=J.morphNormals,he.morphColors=J.morphColors,he.morphTargetsCount=J.morphTargetsCount,he.numClippingPlanes=J.numClippingPlanes,he.numIntersection=J.numClipIntersection,he.vertexAlphas=J.vertexAlphas,he.vertexTangents=J.vertexTangents,he.toneMapping=J.toneMapping}function bi(N,J,he,$,ee){J.isScene!==!0&&(J=Yt),Q.resetTextureUnits();const Fe=J.fog,He=$.isMeshStandardMaterial?J.environment:null,Ce=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ao,je=($.isMeshStandardMaterial?_e:ge).get($.envMap||He),nt=$.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,ut=!!he.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),$e=!!he.morphAttributes.position,Tt=!!he.morphAttributes.normal,Qt=!!he.morphAttributes.color;let ln=ca;$.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ln=A.toneMapping);const mn=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Wt=mn!==void 0?mn.length:0,ct=T.get($),Et=O.state.lights;if(ze===!0&&(xt===!0||N!==re)){const Pn=N===re&&$.id===ce;We.setState($,N,Pn)}let Ot=!1;$.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Et.state.version||ct.outputColorSpace!==Ce||ee.isBatchedMesh&&ct.batching===!1||!ee.isBatchedMesh&&ct.batching===!0||ee.isBatchedMesh&&ct.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&ct.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&ct.instancing===!1||!ee.isInstancedMesh&&ct.instancing===!0||ee.isSkinnedMesh&&ct.skinning===!1||!ee.isSkinnedMesh&&ct.skinning===!0||ee.isInstancedMesh&&ct.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ct.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ct.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ct.instancingMorph===!1&&ee.morphTexture!==null||ct.envMap!==je||$.fog===!0&&ct.fog!==Fe||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==We.numPlanes||ct.numIntersection!==We.numIntersection)||ct.vertexAlphas!==nt||ct.vertexTangents!==ut||ct.morphTargets!==$e||ct.morphNormals!==Tt||ct.morphColors!==Qt||ct.toneMapping!==ln||ct.morphTargetsCount!==Wt)&&(Ot=!0):(Ot=!0,ct.__version=$.version);let Wn=ct.currentProgram;Ot===!0&&(Wn=on($,J,ee));let Zi=!1,Tn=!1,Xa=!1;const Jt=Wn.getUniforms(),Sn=ct.uniforms;if(Ye.useProgram(Wn.program)&&(Zi=!0,Tn=!0,Xa=!0),$.id!==ce&&(ce=$.id,Tn=!0),Zi||re!==N){Ye.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Jt.setValue(W,"projectionMatrix",N.projectionMatrix),Jt.setValue(W,"viewMatrix",N.matrixWorldInverse);const Hn=Jt.map.cameraPosition;Hn!==void 0&&Hn.setValue(W,Ct.setFromMatrixPosition(N.matrixWorld)),Gt.logarithmicDepthBuffer&&Jt.setValue(W,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Jt.setValue(W,"isOrthographic",N.isOrthographicCamera===!0),re!==N&&(re=N,Tn=!0,Xa=!0)}if(ct.needsLights&&(Et.state.directionalShadowMap.length>0&&Jt.setValue(W,"directionalShadowMap",Et.state.directionalShadowMap,Q),Et.state.spotShadowMap.length>0&&Jt.setValue(W,"spotShadowMap",Et.state.spotShadowMap,Q),Et.state.pointShadowMap.length>0&&Jt.setValue(W,"pointShadowMap",Et.state.pointShadowMap,Q)),ee.isSkinnedMesh){Jt.setOptional(W,ee,"bindMatrix"),Jt.setOptional(W,ee,"bindMatrixInverse");const Pn=ee.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Jt.setValue(W,"boneTexture",Pn.boneTexture,Q))}ee.isBatchedMesh&&(Jt.setOptional(W,ee,"batchingTexture"),Jt.setValue(W,"batchingTexture",ee._matricesTexture,Q),Jt.setOptional(W,ee,"batchingIdTexture"),Jt.setValue(W,"batchingIdTexture",ee._indirectTexture,Q),Jt.setOptional(W,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Jt.setValue(W,"batchingColorTexture",ee._colorsTexture,Q));const ai=he.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&yt.update(ee,he,Wn),(Tn||ct.receiveShadow!==ee.receiveShadow)&&(ct.receiveShadow=ee.receiveShadow,Jt.setValue(W,"receiveShadow",ee.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Sn.envMap.value=je,Sn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&J.environment!==null&&(Sn.envMapIntensity.value=J.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=U3()),Tn&&(Jt.setValue(W,"toneMappingExposure",A.toneMappingExposure),ct.needsLights&&Jn(Sn,Xa),Fe&&$.fog===!0&&dt.refreshFogUniforms(Sn,Fe),dt.refreshMaterialUniforms(Sn,$,ve,Se,O.state.transmissionRenderTarget[N.id]),Mu.upload(W,_t(ct),Sn,Q)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Mu.upload(W,_t(ct),Sn,Q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Jt.setValue(W,"center",ee.center),Jt.setValue(W,"modelViewMatrix",ee.modelViewMatrix),Jt.setValue(W,"normalMatrix",ee.normalMatrix),Jt.setValue(W,"modelMatrix",ee.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Pn=$.uniformsGroups;for(let Hn=0,Rr=Pn.length;Hn<Rr;Hn++){const pa=Pn[Hn];we.update(pa,Wn),we.bind(pa,Wn)}}return Wn}function Jn(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function zn(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(N,J,he){const $=T.get(N);$.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),T.get(N.texture).__webglTexture=J,T.get(N.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:he,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,J){const he=T.get(N);he.__webglFramebuffer=J,he.__useDefaultFramebuffer=J===void 0};const ii=W.createFramebuffer();this.setRenderTarget=function(N,J=0,he=0){Z=N,k=J,ne=he;let $=null,ee=!1,Fe=!1;if(N){const Ce=T.get(N);if(Ce.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(W.FRAMEBUFFER,Ce.__webglFramebuffer),L.copy(N.viewport),F.copy(N.scissor),Y=N.scissorTest,Ye.viewport(L),Ye.scissor(F),Ye.setScissorTest(Y),ce=-1;return}else if(Ce.__webglFramebuffer===void 0)Q.setupRenderTarget(N);else if(Ce.__hasExternalTextures)Q.rebindTextures(N,T.get(N.texture).__webglTexture,T.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ut=N.depthTexture;if(Ce.__boundDepthTexture!==ut){if(ut!==null&&T.has(ut)&&(N.width!==ut.image.width||N.height!==ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(N)}}const je=N.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Fe=!0);const nt=T.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(nt[J])?$=nt[J][he]:$=nt[J],ee=!0):N.samples>0&&Q.useMultisampledRTT(N)===!1?$=T.get(N).__webglMultisampledFramebuffer:Array.isArray(nt)?$=nt[he]:$=nt,L.copy(N.viewport),F.copy(N.scissor),Y=N.scissorTest}else L.copy(ae).multiplyScalar(ve).floor(),F.copy(be).multiplyScalar(ve).floor(),Y=Ue;if(he!==0&&($=ii),Ye.bindFramebuffer(W.FRAMEBUFFER,$)&&Ye.drawBuffers(N,$),Ye.viewport(L),Ye.scissor(F),Ye.setScissorTest(Y),ee){const Ce=T.get(N.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce.__webglTexture,he)}else if(Fe){const Ce=J;for(let je=0;je<N.textures.length;je++){const nt=T.get(N.textures[je]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+je,nt.__webglTexture,he,Ce)}}else if(N!==null&&he!==0){const Ce=T.get(N.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ce.__webglTexture,he)}ce=-1},this.readRenderTargetPixels=function(N,J,he,$,ee,Fe,He,Ce=0){if(!(N&&N.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=T.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&He!==void 0&&(je=je[He]),je){Ye.bindFramebuffer(W.FRAMEBUFFER,je);try{const nt=N.textures[Ce],ut=nt.format,$e=nt.type;if(!Gt.textureFormatReadable(ut)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable($e)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-$&&he>=0&&he<=N.height-ee&&(N.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ce),W.readPixels(J,he,$,ee,Ne.convert(ut),Ne.convert($e),Fe))}finally{const nt=Z!==null?T.get(Z).__webglFramebuffer:null;Ye.bindFramebuffer(W.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(N,J,he,$,ee,Fe,He,Ce=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=T.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&He!==void 0&&(je=je[He]),je)if(J>=0&&J<=N.width-$&&he>=0&&he<=N.height-ee){Ye.bindFramebuffer(W.FRAMEBUFFER,je);const nt=N.textures[Ce],ut=nt.format,$e=nt.type;if(!Gt.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Tt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Tt),W.bufferData(W.PIXEL_PACK_BUFFER,Fe.byteLength,W.STREAM_READ),N.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ce),W.readPixels(J,he,$,ee,Ne.convert(ut),Ne.convert($e),0);const Qt=Z!==null?T.get(Z).__webglFramebuffer:null;Ye.bindFramebuffer(W.FRAMEBUFFER,Qt);const ln=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await t1(W,ln,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Tt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Fe),W.deleteBuffer(Tt),W.deleteSync(ln),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,J=null,he=0){const $=Math.pow(2,-he),ee=Math.floor(N.image.width*$),Fe=Math.floor(N.image.height*$),He=J!==null?J.x:0,Ce=J!==null?J.y:0;Q.setTexture2D(N,0),W.copyTexSubImage2D(W.TEXTURE_2D,he,0,0,He,Ce,ee,Fe),Ye.unbindTexture()};const ka=W.createFramebuffer(),Yi=W.createFramebuffer();this.copyTextureToTexture=function(N,J,he=null,$=null,ee=0,Fe=null){Fe===null&&(ee!==0?(bl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Fe=ee,ee=0):Fe=0);let He,Ce,je,nt,ut,$e,Tt,Qt,ln;const mn=N.isCompressedTexture?N.mipmaps[Fe]:N.image;if(he!==null)He=he.max.x-he.min.x,Ce=he.max.y-he.min.y,je=he.isBox3?he.max.z-he.min.z:1,nt=he.min.x,ut=he.min.y,$e=he.isBox3?he.min.z:0;else{const ai=Math.pow(2,-ee);He=Math.floor(mn.width*ai),Ce=Math.floor(mn.height*ai),N.isDataArrayTexture?je=mn.depth:N.isData3DTexture?je=Math.floor(mn.depth*ai):je=1,nt=0,ut=0,$e=0}$!==null?(Tt=$.x,Qt=$.y,ln=$.z):(Tt=0,Qt=0,ln=0);const Wt=Ne.convert(J.format),ct=Ne.convert(J.type);let Et;J.isData3DTexture?(Q.setTexture3D(J,0),Et=W.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Q.setTexture2DArray(J,0),Et=W.TEXTURE_2D_ARRAY):(Q.setTexture2D(J,0),Et=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment);const Ot=W.getParameter(W.UNPACK_ROW_LENGTH),Wn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Zi=W.getParameter(W.UNPACK_SKIP_PIXELS),Tn=W.getParameter(W.UNPACK_SKIP_ROWS),Xa=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,mn.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,mn.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,nt),W.pixelStorei(W.UNPACK_SKIP_ROWS,ut),W.pixelStorei(W.UNPACK_SKIP_IMAGES,$e);const Jt=N.isDataArrayTexture||N.isData3DTexture,Sn=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){const ai=T.get(N),Pn=T.get(J),Hn=T.get(ai.__renderTarget),Rr=T.get(Pn.__renderTarget);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,Hn.__webglFramebuffer),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let pa=0;pa<je;pa++)Jt&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,T.get(N).__webglTexture,ee,$e+pa),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,T.get(J).__webglTexture,Fe,ln+pa)),W.blitFramebuffer(nt,ut,He,Ce,Tt,Qt,He,Ce,W.DEPTH_BUFFER_BIT,W.NEAREST);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ee!==0||N.isRenderTargetTexture||T.has(N)){const ai=T.get(N),Pn=T.get(J);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,ka),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,Yi);for(let Hn=0;Hn<je;Hn++)Jt?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ai.__webglTexture,ee,$e+Hn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ai.__webglTexture,ee),Sn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Pn.__webglTexture,Fe,ln+Hn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Pn.__webglTexture,Fe),ee!==0?W.blitFramebuffer(nt,ut,He,Ce,Tt,Qt,He,Ce,W.COLOR_BUFFER_BIT,W.NEAREST):Sn?W.copyTexSubImage3D(Et,Fe,Tt,Qt,ln+Hn,nt,ut,He,Ce):W.copyTexSubImage2D(Et,Fe,Tt,Qt,nt,ut,He,Ce);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Sn?N.isDataTexture||N.isData3DTexture?W.texSubImage3D(Et,Fe,Tt,Qt,ln,He,Ce,je,Wt,ct,mn.data):J.isCompressedArrayTexture?W.compressedTexSubImage3D(Et,Fe,Tt,Qt,ln,He,Ce,je,Wt,mn.data):W.texSubImage3D(Et,Fe,Tt,Qt,ln,He,Ce,je,Wt,ct,mn):N.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Fe,Tt,Qt,He,Ce,Wt,ct,mn.data):N.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Fe,Tt,Qt,mn.width,mn.height,Wt,mn.data):W.texSubImage2D(W.TEXTURE_2D,Fe,Tt,Qt,He,Ce,Wt,ct,mn);W.pixelStorei(W.UNPACK_ROW_LENGTH,Ot),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Wn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Zi),W.pixelStorei(W.UNPACK_SKIP_ROWS,Tn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Xa),Fe===0&&J.generateMipmaps&&W.generateMipmap(Et),Ye.unbindTexture()},this.initRenderTarget=function(N){T.get(N).__webglFramebuffer===void 0&&Q.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Q.setTextureCube(N,0):N.isData3DTexture?Q.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Q.setTexture2DArray(N,0):Q.setTexture2D(N,0),Ye.unbindTexture()},this.resetState=function(){k=0,ne=0,Z=null,Ye.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),n.unpackColorSpace=kt._getUnpackColorSpace()}}const P3=()=>{const a=oe.useRef(null);return oe.useEffect(()=>{const e=new A1;e.background=new It(657930),e.fog=new om(657930,5e-4);const n=new Oi(60,window.innerWidth/window.innerHeight,1,3e3);n.position.z=400;const r=new L3({antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.domElement.style.position="fixed",r.domElement.style.top="0",r.domElement.style.left="0",r.domElement.style.width="100%",r.domElement.style.height="100%",r.domElement.style.zIndex="-10",r.domElement.style.pointerEvents="none",a.current&&a.current.appendChild(r.domElement);const c=(()=>{const X=document.createElement("canvas");X.width=64,X.height=64;const A=X.getContext("2d"),D=32,k=32,ne=A.createRadialGradient(D,k,0,D,k,32);return ne.addColorStop(0,"rgba(255, 255, 255, 1)"),ne.addColorStop(.2,"rgba(232, 213, 183, 0.8)"),ne.addColorStop(.5,"rgba(192, 192, 192, 0.2)"),ne.addColorStop(1,"rgba(0, 0, 0, 0)"),A.fillStyle=ne,A.beginPath(),A.arc(D,k,16,0,Math.PI*2),A.fill(),A.strokeStyle="rgba(192, 192, 192, 0.6)",A.lineWidth=2,A.shadowBlur=4,A.shadowColor="#e8d5b7",A.beginPath(),A.moveTo(0,k),A.lineTo(64,k),A.stroke(),A.beginPath(),A.moveTo(D,0),A.lineTo(D,64),A.stroke(),new K_(X)})(),h=(()=>{const X=document.createElement("canvas");X.width=64,X.height=64;const A=X.getContext("2d"),D=A.createRadialGradient(32,32,0,32,32,32);return D.addColorStop(0,"rgba(168, 168, 168, 0.1)"),D.addColorStop(.6,"rgba(100, 100, 100, 0.05)"),D.addColorStop(1,"rgba(0, 0, 0, 0)"),A.fillStyle=D,A.fillRect(0,0,64,64),new K_(X)})(),d=(X,A,D)=>{const k=new ti,ne=new Float32Array(X*3),Z=new Float32Array(X*3),ce=new It(12632256),re=new It(16777215);for(let F=0;F<X;F++){ne[F*3]=(Math.random()-.5)*2e3,ne[F*3+1]=(Math.random()-.5)*1500,ne[F*3+2]=(Math.random()-.5)*1e3-200;const Y=Math.random()>.8?ce:re;Z[F*3]=Y.r,Z[F*3+1]=Y.g,Z[F*3+2]=Y.b}k.setAttribute("position",new fi(ne,3)),k.setAttribute("color",new fi(Z,3));const L=new Su({size:A,transparent:!0,opacity:D,vertexColors:!0,depthWrite:!1,sizeAttenuation:!0});return new wh(k,L)},p=()=>{const X=new ti,A=50,D=new Float32Array(A*3),k=new Float32Array(A*3),ne=new It(1710618),Z=new It(4210752);for(let re=0;re<A;re++){D[re*3]=(Math.random()-.5)*1500,D[re*3+1]=(Math.random()-.5)*1e3,D[re*3+2]=(Math.random()-.5)*800-300;const L=Math.random()>.5?ne:Z,F=.5+Math.random()*.5;k[re*3]=L.r*F,k[re*3+1]=L.g*F,k[re*3+2]=L.b*F}X.setAttribute("position",new fi(D,3)),X.setAttribute("color",new fi(k,3));const ce=new Su({size:600,map:h,transparent:!0,opacity:.2,vertexColors:!0,depthWrite:!1,blending:Ru});return new wh(X,ce)},g=d(3e3,1.5,.8),v=d(5e3,1,.5),_=p();e.add(v),e.add(g),e.add(_);const y=new Qs,M=(X,A,D=1,k=[0,0,0])=>{const ne=new ti,Z=[];for(let K=0;K<X.length-1;K++)Z.push(...X[K],...X[K+1]);ne.setAttribute("position",new Ei(Z,3));const ce=new Ry({color:16777215,transparent:!0,opacity:.15,linewidth:1}),re=new U1(ne,ce),L=new ti,F=[];X.forEach(K=>F.push(...K)),L.setAttribute("position",new Ei(F,3));const Y=new Su({size:10,map:c,color:16777215,transparent:!0,opacity:1,depthWrite:!1,blending:Ru}),xe=new wh(L,Y),P=new Qs;return P.add(re),P.add(xe),P.position.set(...A),P.scale.set(D,D,D),P.rotation.set(...k),P},b=[[-40,30,0],[-20,25,0],[0,20,0],[15,22,0],[15,22,0],[20,5,0],[40,5,0],[35,25,0],[15,22,0]],S=M(b,[-100,50,-100],2.5,[0,0,.2]),x=M(b,[200,-100,-300],2,[0,0,-.5]),C=M([[0,0,0],[5,2,0],[2,5,0],[-2,3,0],[1,-2,0],[4,-1,0]],[150,80,-200],3,[0,0,0]);y.add(S),y.add(x),y.add(C),e.add(y);let I,O=0;const R=()=>{I=requestAnimationFrame(R),O+=2e-4,n.position.x=Math.sin(O)*20,n.position.y=Math.cos(O*.8)*20,_.rotation.z=O*.05,g.rotation.y=-O*.02,r.render(e,n)};R();const H=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",H),()=>{cancelAnimationFrame(I),window.removeEventListener("resize",H),a.current&&r.domElement&&a.current.removeChild(r.domElement),r.dispose()}},[]),B.jsx("div",{ref:a,className:"three-background-container"})};function O3(){return B.jsxs("div",{className:"app",children:[B.jsx(P3,{}),B.jsx(yT,{}),B.jsx("main",{className:"app-main",children:B.jsx(Fb,{})}),B.jsx("footer",{className:"app-footer",children:B.jsxs("p",{children:["© ",new Date().getFullYear()," Tarot STEM - Conectando con el cosmos - Proyecto educativo Factoria F5"]})})]})}const I3="/assets/fondo-cartas.png",Eu=({card:a,isFlipped:e=!1,onClick:n,showDetails:r=!0,className:o="",position:c=null})=>{const[u,h]=oe.useState(!1),[d,p]=oe.useState(!1),g=Wp(),v=()=>{n?n(a):r&&g(`/card/${a.id}`)},_=()=>{h(!0),p(!1)},y=b=>{p(!0),h(!1),b.target.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM0IwQTQ1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI0ZGRDcwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjxzdHJvbmc+Q2FydGE8L3N0cm9uZz48L3RleHQ+PC9zdmc+"},M=()=>({pasado:"🕰️ Pasado",presente:"🌟 Presente",futuro:"🔮 Futuro"})[c]||"";return B.jsxs("div",{className:`card-container ${o}`,children:[c&&B.jsx("div",{className:"card-position-label",children:M()}),B.jsxs("div",{className:`card ${e?"flipped":""}`,onClick:v,role:"button",tabIndex:0,onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),v())},children:[B.jsx("div",{className:"card-back",children:B.jsx("img",{src:I3,className:"imagen"})}),e&&B.jsx("div",{className:"card-front",children:B.jsxs("div",{className:"card-content",children:[B.jsxs("div",{className:"card-image-container",children:[!u&&!d&&B.jsxs("div",{className:"card-image-loader",children:[B.jsx("div",{className:"loader-symbol",children:"🔮"}),B.jsx("p",{children:"Cargando..."})]}),B.jsx("img",{src:a.arcaneImage?.imageSrc,alt:`Carta del Tarot: ${a.arcaneName}`,className:`card-image ${u?"loaded":""}`,onLoad:_,onError:y,loading:"lazy"}),d&&B.jsx("div",{className:"card-image-error",children:B.jsx("p",{children:"Imagen no disponible"})})]}),B.jsxs("div",{className:"card-info",children:[B.jsx("div",{className:"card-number",children:a.arcaneNumber!==void 0?`${a.arcaneNumber}`:"?"}),B.jsx("h3",{className:"card-name",children:a.arcaneName||"Carta Misteriosa"}),r&&B.jsx("p",{className:"card-description",children:a.arcaneDescription?a.arcaneDescription.substring(0,80)+(a.arcaneDescription.length>80?"...":""):"Los misterios de esta carta esperan ser revelados..."}),a.goddessName&&B.jsxs("div",{className:"card-goddess-hint",children:[B.jsx("span",{className:"goddess-icon"}),B.jsx("span",{className:"goddess-name",children:a.goddessName})]})]})]})})]}),B.jsx("div",{className:"card-glow"})]})},F3="https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot",B3=async a=>{if(!a.ok)throw new Error(`Error ${a.status}: ${a.statusText}`);return a},Oy=async(a,e={})=>{try{const n=await fetch(`${F3}${a}`,{headers:{"Content-Type":"application/json",...e.headers},...e});return await B3(n),await n.json()}catch(n){throw console.error("Error en petición API:",n),n}},Lu=async()=>{try{console.log("🔮 Obteniendo todas las cartas del tarot...");const a=await Oy("");return console.log(`✨ Se obtuvieron ${a.length} cartas exitosamente`),a}catch(a){throw console.error("❌ Error al obtener las cartas:",a),new Error("No se pudieron cargar las cartas del tarot. Verifica tu conexión.")}},z3=async a=>{if(!a)throw new Error("ID de carta requerido");try{console.log(`🔮 Obteniendo carta con ID: ${a}...`);const e=await Oy(`/${a}`);return console.log(`✨ Carta "${e.arcaneName}" obtenida exitosamente`),e}catch(e){throw console.error(`❌ Error al obtener la carta ${a}:`,e),new Error(`No se pudo cargar la carta con ID ${a}. Verifica que existe.`)}},H3=({gridColumns:a="auto",className:e="",onCardClick:n})=>{const[r,o]=oe.useState([]),[c,u]=oe.useState([]),[h,d]=oe.useState(!0),[p,g]=oe.useState(!1);return oe.useEffect(()=>{(async()=>{try{const _=await Lu();o(_),u(_)}catch(_){console.error("Error fetching cards:",_)}finally{d(!1)}})()},[]),h?B.jsxs("div",{className:"loading-container",children:[B.jsx("div",{className:"loading-spinner",children:"🔮"}),B.jsx("p",{className:"loading-text",children:"Consultando a las estrellas..."})]}):B.jsxs("div",{className:`cardlist-container ${e}`,children:[B.jsxs("div",{className:"cardlist-header",children:[B.jsxs("div",{className:"cards-count",children:[B.jsx("span",{className:"count-number",children:r.length}),B.jsx("span",{className:"count-text",children:r.length===1?"carta mística":"cartas místicas"})]}),B.jsxs("button",{className:"cards-status",onClick:()=>g(v=>!v),children:[B.jsx("span",{className:"status-icon"}),B.jsx("span",{className:"status-text",children:p?"Cartas reveladas":"Cartas ocultas"})]})]}),B.jsx("div",{className:`cardlist-grid ${e}`,style:{gridTemplateColumns:a==="auto"?"repeat(auto-fit, minmax(220px, 1fr))":a},children:c&&c.map((v,_)=>B.jsx("div",{className:"cardlist-item",style:{animationDelay:`${_*.1}s`},children:B.jsx(Eu,{card:v,isFlipped:p,onClick:n,className:"fade-in"})},v.id))}),r.length>0&&B.jsx("div",{className:"cardlist-footer",children:B.jsx("p",{className:"footer-text",children:"✨ Haz clic en cualquier carta para revelar sus secretos ✨"})})]})},V3=()=>{const[a,e]=oe.useState([]),[n,r]=oe.useState(!0),[o,c]=oe.useState(null);return oe.useEffect(()=>{(async()=>{try{r(!0),c(null),console.log(" Cargando vista principal...");const h=await Lu();e(h),console.log(` ${h.length} cartas cargadas en Home`)}catch(h){console.error("❌ Error en Home:",h),c(h.message)}finally{r(!1)}})()},[]),B.jsxs("div",{className:"home-page",children:[B.jsx("div",{className:"home-hero",children:B.jsxs("div",{className:"mystic-container",children:[B.jsx("h2",{className:"hero-title",children:"Portal del Destino"}),B.jsx("p",{className:"hero-subtitle",style:{fontSize:"1.5rem",color:"var(--parchment)",marginBottom:"1rem",fontStyle:"italic"},children:'"La puerta a tu futuro"'}),B.jsx("p",{className:"hero-description",children:"Explora los 22 Arcanos Mayores del Tarot y descubre los secretos que conectan cada carta con las diosas contemporáneas. Cada arcano encierra sabiduría ancestral y guía espiritual para iluminar tu camino."}),B.jsxs("div",{className:"hero-actions",children:[B.jsx(ia,{to:"/lectura",className:"mystic-button primary",children:"Iniciar Lectura"}),B.jsx("button",{className:"mystic-button secondary",onClick:()=>window.scrollTo({top:document.querySelector(".cardlist-container")?.offsetTop-100,behavior:"smooth"}),children:"Explorar Cartas"})]})]})}),!n&&a.length>0&&B.jsx("div",{className:"home-stats",children:B.jsx("div",{className:"mystic-container",children:B.jsxs("div",{className:"stats-grid",children:[B.jsxs("div",{className:"stat-item",children:[B.jsx("div",{className:"stat-icon"}),B.jsx("div",{className:"stat-number",children:a.length}),B.jsx("div",{className:"stat-label",children:"Arcanos Mayores"})]}),B.jsxs("div",{className:"stat-item",children:[B.jsx("div",{className:"stat-icon"}),B.jsx("div",{className:"stat-number",children:a.filter(u=>u.goddessName).length}),B.jsx("div",{className:"stat-label",children:"Diosas Asociadas"})]}),B.jsxs("div",{className:"stat-item",children:[B.jsx("div",{className:"stat-icon"}),B.jsx("div",{className:"stat-number",children:"∞"}),B.jsx("div",{className:"stat-label",children:"Posibilidades"})]})]})})}),B.jsx("div",{className:"home-cards",children:B.jsx(H3,{cards:a,loading:n,error:o,showFlipped:!1,emptyMessage:"Los arcanos están meditando en el silencio cósmico..."})}),!n&&a.length>0&&B.jsx("div",{className:"home-info",children:B.jsxs("div",{className:"mystic-container",children:[B.jsx("h3",{className:"info-title",children:"¿Cómo usar el Tarot Místico?"}),B.jsxs("div",{className:"info-grid",children:[B.jsxs("div",{className:"info-card",children:[B.jsx("div",{className:"info-icon"}),B.jsx("h4",{children:"Explora"}),B.jsx("p",{children:"Haz clic en cualquier carta para revelar su significado, imagen y la diosa contemporánea asociada."})]}),B.jsxs("div",{className:"info-card",children:[B.jsx("div",{className:"info-icon"}),B.jsx("h4",{children:"Consulta"}),B.jsx("p",{children:"Usa la función de lectura para obtener una tirada de 3 cartas: Pasado, Presente y Futuro."})]}),B.jsxs("div",{className:"info-card",children:[B.jsx("div",{className:"info-icon"}),B.jsx("h4",{children:"Reflexiona"}),B.jsx("p",{children:"Medita sobre los mensajes de las cartas y su conexión con las energías femeninas divinas."})]})]})]})})]})},G3=()=>{const{id:a}=_b(),e=Wp(),[n,r]=oe.useState(null),[o,c]=oe.useState(!0),[u,h]=oe.useState(null),[d,p]=oe.useState("arcane"),[g,v]=oe.useState(!1),[_,y]=oe.useState(!1);oe.useEffect(()=>{a&&(async()=>{try{c(!0),h(null),console.log(`🔍 Cargando carta con ID: ${a}`);const x=await z3(a);r(x),console.log("✅ Carta cargada:",x.arcaneName)}catch(x){console.error("❌ Error en Detail:",x),h(x.message)}finally{c(!1)}})()},[a]);const M=S=>{p(S)},b=(S,x)=>{console.warn(`Error cargando imagen ${x}`),x==="arcane"?v(!1):y(!1),S.target.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM0IwQTQ1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI0ZGRDcwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg=="};return o?B.jsx("div",{className:"detail-loading",children:B.jsxs("div",{className:"loading-container",children:[B.jsx("div",{className:"loading-symbol",children:"🔮"}),B.jsx("h2",{children:"Revelando los secretos..."}),B.jsx("p",{children:"La carta está materializándose desde las dimensiones místicas"})]})}):u?B.jsx("div",{className:"detail-error",children:B.jsxs("div",{className:"error-container",children:[B.jsx("div",{className:"error-symbol",children:"⚠️"}),B.jsx("h2",{children:"Error Místico"}),B.jsx("p",{children:u}),B.jsxs("div",{className:"error-actions",children:[B.jsx(ia,{to:"/",className:"mystic-button",children:"Volver al inicio"}),B.jsx("button",{className:"mystic-button",onClick:()=>window.location.reload(),children:"Intentar de nuevo"})]})]})}):n?B.jsxs("div",{className:"detail-page",children:[B.jsxs("div",{className:"detail-nav",children:[B.jsx("button",{onClick:()=>e(-1),className:"mystic-button secondary",children:"← Volver"}),B.jsx("div",{className:"nav-center",children:B.jsxs("span",{className:"nav-number",children:["Arcano ",n.arcaneNumber]})}),B.jsx(ia,{to:"/lectura",className:"mystic-button primary",children:"Nueva Lectura"})]}),B.jsxs("div",{className:"detail-header",children:[B.jsx("h1",{className:"detail-title",children:n.arcaneName}),B.jsx("div",{className:"title-decoration"})]}),B.jsxs("div",{className:"detail-content",children:[B.jsxs("div",{className:"detail-images",children:[B.jsxs("div",{className:"image-tabs",children:[B.jsx("button",{className:`image-tab ${d==="arcane"?"active":""}`,onClick:()=>M("arcane"),children:B.jsx("span",{children:"Arcano"})}),B.jsxs("button",{className:`image-tab ${d==="goddess"?"active":""}`,onClick:()=>M("goddess"),children:[B.jsx("span",{className:"tab-icon"}),B.jsx("span",{children:"Diosa"})]})]}),B.jsxs("div",{className:"image-display",children:[B.jsxs("div",{className:`image-container ${d==="arcane"?"active":""}`,children:[!g&&B.jsxs("div",{className:"image-loader",children:[B.jsx("div",{className:"loader-symbol",children:"🔮"}),B.jsx("p",{children:"Materializando el arcano..."})]}),B.jsx("img",{src:n.arcaneImage?.imageSrc,alt:`Arcano: ${n.arcaneName}`,className:`detail-image ${g?"loaded":""}`,onLoad:()=>v(!0),onError:S=>b(S,"arcane")}),n.arcaneImage&&B.jsxs("div",{className:"image-credits",children:[B.jsxs("p",{children:[B.jsx("strong",{children:"Autor:"})," ",n.arcaneImage.author||"Desconocido"]}),n.arcaneImage.license&&B.jsxs("p",{children:[B.jsx("strong",{children:"Licencia:"})," ",n.arcaneImage.license]})]})]}),B.jsxs("div",{className:`image-container ${d==="goddess"?"active":""}`,children:[!_&&d==="goddess"&&B.jsxs("div",{className:"image-loader",children:[B.jsx("div",{className:"loader-symbol",children:"👑"}),B.jsx("p",{children:"Invocando a la diosa..."})]}),B.jsx("img",{src:n.goddessImage?.imageSrc,alt:`Diosa: ${n.goddessName}`,className:`detail-image ${_?"loaded":""}`,onLoad:()=>y(!0),onError:S=>b(S,"goddess")}),n.goddessImage&&B.jsxs("div",{className:"image-credits",children:[B.jsxs("p",{children:[B.jsx("strong",{children:"Autor:"})," ",n.goddessImage.author||"Desconocido"]}),n.goddessImage.licenseUrl&&B.jsxs("p",{children:[B.jsx("strong",{children:"Licencia:"})," ",B.jsx("a",{href:n.goddessImage.licenseUrl,target:"_blank",rel:"noopener noreferrer",className:"license-link",children:"Ver licencia"})]})]})]})]})]}),B.jsxs("div",{className:"detail-info",children:[B.jsxs("div",{className:"info-section",children:[B.jsx("h2",{className:"section-title",children:"Significado del Arcano"}),B.jsx("div",{className:"section-content",children:B.jsx("p",{className:"arcane-description",children:n.arcaneDescription||"El significado de este arcano permanece oculto en los misterios del cosmos..."})})]}),n.goddessName&&B.jsxs("div",{className:"info-section",children:[B.jsx("h2",{className:"section-title",children:n.goddessName}),B.jsx("div",{className:"section-content",children:B.jsx("p",{className:"goddess-description",children:n.goddessDescription||"Los misterios de esta diosa aguardan ser revelados..."})})]}),B.jsxs("div",{className:"detail-actions",children:[B.jsx(ia,{to:"/",className:"mystic-button",children:"Todas las cartas"}),B.jsx(ia,{to:"/lectura",className:"mystic-button primary",children:"Hacer lectura"})]})]})]})]}):B.jsx("div",{className:"detail-error",children:B.jsxs("div",{className:"error-container",children:[B.jsx("div",{className:"error-symbol",children:"🌙"}),B.jsx("h2",{children:"Carta no encontrada"}),B.jsx("p",{children:"La carta que buscas se ha perdido en las brumas místicas..."}),B.jsx(ia,{to:"/",className:"mystic-button",children:"Explorar otras cartas"})]})})};var Iy={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},lm={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},k3=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Pu={CSS:{},springs:{}};function sa(a,e,n){return Math.min(Math.max(a,e),n)}function _l(a,e){return a.indexOf(e)>-1}function Oh(a,e){return a.apply(null,e)}var lt={arr:function(a){return Array.isArray(a)},obj:function(a){return _l(Object.prototype.toString.call(a),"Object")},pth:function(a){return lt.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},inp:function(a){return a instanceof HTMLInputElement},dom:function(a){return a.nodeType||lt.svg(a)},str:function(a){return typeof a=="string"},fnc:function(a){return typeof a=="function"},und:function(a){return typeof a>"u"},nil:function(a){return lt.und(a)||a===null},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return lt.hex(a)||lt.rgb(a)||lt.hsl(a)},key:function(a){return!Iy.hasOwnProperty(a)&&!lm.hasOwnProperty(a)&&a!=="targets"&&a!=="keyframes"}};function Fy(a){var e=/\(([^)]+)\)/.exec(a);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function By(a,e){var n=Fy(a),r=sa(lt.und(n[0])?1:n[0],.1,100),o=sa(lt.und(n[1])?100:n[1],.1,100),c=sa(lt.und(n[2])?10:n[2],.1,100),u=sa(lt.und(n[3])?0:n[3],.1,100),h=Math.sqrt(o/r),d=c/(2*Math.sqrt(o*r)),p=d<1?h*Math.sqrt(1-d*d):0,g=1,v=d<1?(d*h+-u)/p:-u+h;function _(M){var b=e?e*M/1e3:M;return d<1?b=Math.exp(-b*d*h)*(g*Math.cos(p*b)+v*Math.sin(p*b)):b=(g+v*b)*Math.exp(-b*h),M===0||M===1?M:1-b}function y(){var M=Pu.springs[a];if(M)return M;for(var b=1/6,S=0,x=0;;)if(S+=b,_(S)===1){if(x++,x>=16)break}else x=0;var U=S*b*1e3;return Pu.springs[a]=U,U}return e?_:y}function X3(a){return a===void 0&&(a=10),function(e){return Math.ceil(sa(e,1e-6,1)*a)*(1/a)}}var W3=(function(){var a=11,e=1/(a-1);function n(g,v){return 1-3*v+3*g}function r(g,v){return 3*v-6*g}function o(g){return 3*g}function c(g,v,_){return((n(v,_)*g+r(v,_))*g+o(v))*g}function u(g,v,_){return 3*n(v,_)*g*g+2*r(v,_)*g+o(v)}function h(g,v,_,y,M){var b,S,x=0;do S=v+(_-v)/2,b=c(S,y,M)-g,b>0?_=S:v=S;while(Math.abs(b)>1e-7&&++x<10);return S}function d(g,v,_,y){for(var M=0;M<4;++M){var b=u(v,_,y);if(b===0)return v;var S=c(v,_,y)-g;v-=S/b}return v}function p(g,v,_,y){if(!(0<=g&&g<=1&&0<=_&&_<=1))return;var M=new Float32Array(a);if(g!==v||_!==y)for(var b=0;b<a;++b)M[b]=c(b*e,g,_);function S(x){for(var U=0,C=1,I=a-1;C!==I&&M[C]<=x;++C)U+=e;--C;var O=(x-M[C])/(M[C+1]-M[C]),R=U+O*e,H=u(R,g,_);return H>=.001?d(x,R,g,_):H===0?R:h(x,U,U+e,g,_)}return function(x){return g===v&&_===y||x===0||x===1?x:c(S(x),v,y)}}return p})(),zy=(function(){var a={linear:function(){return function(r){return r}}},e={Sine:function(){return function(r){return 1-Math.cos(r*Math.PI/2)}},Circ:function(){return function(r){return 1-Math.sqrt(1-r*r)}},Back:function(){return function(r){return r*r*(3*r-2)}},Bounce:function(){return function(r){for(var o,c=4;r<((o=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((o*3-2)/22-r,2)}},Elastic:function(r,o){r===void 0&&(r=1),o===void 0&&(o=.5);var c=sa(r,1,10),u=sa(o,.1,2);return function(h){return h===0||h===1?h:-c*Math.pow(2,10*(h-1))*Math.sin((h-1-u/(Math.PI*2)*Math.asin(1/c))*(Math.PI*2)/u)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(r,o){e[r]=function(){return function(c){return Math.pow(c,o+2)}}}),Object.keys(e).forEach(function(r){var o=e[r];a["easeIn"+r]=o,a["easeOut"+r]=function(c,u){return function(h){return 1-o(c,u)(1-h)}},a["easeInOut"+r]=function(c,u){return function(h){return h<.5?o(c,u)(h*2)/2:1-o(c,u)(h*-2+2)/2}},a["easeOutIn"+r]=function(c,u){return function(h){return h<.5?(1-o(c,u)(1-h*2))/2:(o(c,u)(h*2-1)+1)/2}}}),a})();function cm(a,e){if(lt.fnc(a))return a;var n=a.split("(")[0],r=zy[n],o=Fy(a);switch(n){case"spring":return By(a,e);case"cubicBezier":return Oh(W3,o);case"steps":return Oh(X3,o);default:return Oh(r,o)}}function Hy(a){try{var e=document.querySelectorAll(a);return e}catch{return}}function Vu(a,e){for(var n=a.length,r=arguments.length>=2?arguments[1]:void 0,o=[],c=0;c<n;c++)if(c in a){var u=a[c];e.call(r,u,c,a)&&o.push(u)}return o}function Gu(a){return a.reduce(function(e,n){return e.concat(lt.arr(n)?Gu(n):n)},[])}function Sx(a){return lt.arr(a)?a:(lt.str(a)&&(a=Hy(a)||a),a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a])}function um(a,e){return a.some(function(n){return n===e})}function fm(a){var e={};for(var n in a)e[n]=a[n];return e}function Ip(a,e){var n=fm(a);for(var r in a)n[r]=e.hasOwnProperty(r)?e[r]:a[r];return n}function ku(a,e){var n=fm(a);for(var r in e)n[r]=lt.und(a[r])?e[r]:a[r];return n}function j3(a){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(a);return e?"rgba("+e[1]+",1)":a}function q3(a){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=a.replace(e,function(h,d,p,g){return d+d+p+p+g+g}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),o=parseInt(r[1],16),c=parseInt(r[2],16),u=parseInt(r[3],16);return"rgba("+o+","+c+","+u+",1)"}function Y3(a){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a),n=parseInt(e[1],10)/360,r=parseInt(e[2],10)/100,o=parseInt(e[3],10)/100,c=e[4]||1;function u(_,y,M){return M<0&&(M+=1),M>1&&(M-=1),M<1/6?_+(y-_)*6*M:M<1/2?y:M<2/3?_+(y-_)*(2/3-M)*6:_}var h,d,p;if(r==0)h=d=p=o;else{var g=o<.5?o*(1+r):o+r-o*r,v=2*o-g;h=u(v,g,n+1/3),d=u(v,g,n),p=u(v,g,n-1/3)}return"rgba("+h*255+","+d*255+","+p*255+","+c+")"}function Z3(a){if(lt.rgb(a))return j3(a);if(lt.hex(a))return q3(a);if(lt.hsl(a))return Y3(a)}function Ba(a){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a);if(e)return e[1]}function K3(a){if(_l(a,"translate")||a==="perspective")return"px";if(_l(a,"rotate")||_l(a,"skew"))return"deg"}function Fp(a,e){return lt.fnc(a)?a(e.target,e.id,e.total):a}function oa(a,e){return a.getAttribute(e)}function dm(a,e,n){var r=Ba(e);if(um([n,"deg","rad","turn"],r))return e;var o=Pu.CSS[e+n];if(!lt.und(o))return o;var c=100,u=document.createElement(a.tagName),h=a.parentNode&&a.parentNode!==document?a.parentNode:document.body;h.appendChild(u),u.style.position="absolute",u.style.width=c+n;var d=c/u.offsetWidth;h.removeChild(u);var p=d*parseFloat(e);return Pu.CSS[e+n]=p,p}function Vy(a,e,n){if(e in a.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=a.style[e]||getComputedStyle(a).getPropertyValue(r)||"0";return n?dm(a,o,n):o}}function hm(a,e){if(lt.dom(a)&&!lt.inp(a)&&(!lt.nil(oa(a,e))||lt.svg(a)&&a[e]))return"attribute";if(lt.dom(a)&&um(k3,e))return"transform";if(lt.dom(a)&&e!=="transform"&&Vy(a,e))return"css";if(a[e]!=null)return"object"}function Gy(a){if(lt.dom(a)){for(var e=a.style.transform||"",n=/(\w+)\(([^)]*)\)/g,r=new Map,o;o=n.exec(e);)r.set(o[1],o[2]);return r}}function Q3(a,e,n,r){var o=_l(e,"scale")?1:0+K3(e),c=Gy(a).get(e)||o;return n&&(n.transforms.list.set(e,c),n.transforms.last=e),r?dm(a,c,r):c}function pm(a,e,n,r){switch(hm(a,e)){case"transform":return Q3(a,e,r,n);case"css":return Vy(a,e,n);case"attribute":return oa(a,e);default:return a[e]||0}}function mm(a,e){var n=/^(\*=|\+=|-=)/.exec(a);if(!n)return a;var r=Ba(a)||0,o=parseFloat(e),c=parseFloat(a.replace(n[0],""));switch(n[0][0]){case"+":return o+c+r;case"-":return o-c+r;case"*":return o*c+r}}function ky(a,e){if(lt.col(a))return Z3(a);if(/\s/g.test(a))return a;var n=Ba(a),r=n?a.substr(0,a.length-n.length):a;return e?r+e:r}function gm(a,e){return Math.sqrt(Math.pow(e.x-a.x,2)+Math.pow(e.y-a.y,2))}function J3(a){return Math.PI*2*oa(a,"r")}function $3(a){return oa(a,"width")*2+oa(a,"height")*2}function e2(a){return gm({x:oa(a,"x1"),y:oa(a,"y1")},{x:oa(a,"x2"),y:oa(a,"y2")})}function Xy(a){for(var e=a.points,n=0,r,o=0;o<e.numberOfItems;o++){var c=e.getItem(o);o>0&&(n+=gm(r,c)),r=c}return n}function t2(a){var e=a.points;return Xy(a)+gm(e.getItem(e.numberOfItems-1),e.getItem(0))}function Wy(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case"circle":return J3(a);case"rect":return $3(a);case"line":return e2(a);case"polyline":return Xy(a);case"polygon":return t2(a)}}function n2(a){var e=Wy(a);return a.setAttribute("stroke-dasharray",e),e}function i2(a){for(var e=a.parentNode;lt.svg(e)&&lt.svg(e.parentNode);)e=e.parentNode;return e}function jy(a,e){var n=e||{},r=n.el||i2(a),o=r.getBoundingClientRect(),c=oa(r,"viewBox"),u=o.width,h=o.height,d=n.viewBox||(c?c.split(" "):[0,0,u,h]);return{el:r,viewBox:d,x:d[0]/1,y:d[1]/1,w:u,h,vW:d[2],vH:d[3]}}function a2(a,e){var n=lt.str(a)?Hy(a)[0]:a,r=e||100;return function(o){return{property:o,el:n,svg:jy(n),totalLength:Wy(n)*(r/100)}}}function r2(a,e,n){function r(g){g===void 0&&(g=0);var v=e+g>=1?e+g:0;return a.el.getPointAtLength(v)}var o=jy(a.el,a.svg),c=r(),u=r(-1),h=r(1),d=n?1:o.w/o.vW,p=n?1:o.h/o.vH;switch(a.property){case"x":return(c.x-o.x)*d;case"y":return(c.y-o.y)*p;case"angle":return Math.atan2(h.y-u.y,h.x-u.x)*180/Math.PI}}function Mx(a,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=ky(lt.pth(a)?a.totalLength:a,e)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:lt.str(a)||e?r.split(n):[]}}function vm(a){var e=a?Gu(lt.arr(a)?a.map(Sx):Sx(a)):[];return Vu(e,function(n,r,o){return o.indexOf(n)===r})}function qy(a){var e=vm(a);return e.map(function(n,r){return{target:n,id:r,total:e.length,transforms:{list:Gy(n)}}})}function s2(a,e){var n=fm(e);if(/^spring/.test(n.easing)&&(n.duration=By(n.easing)),lt.arr(a)){var r=a.length,o=r===2&&!lt.obj(a[0]);o?a={value:a}:lt.fnc(e.duration)||(n.duration=e.duration/r)}var c=lt.arr(a)?a:[a];return c.map(function(u,h){var d=lt.obj(u)&&!lt.pth(u)?u:{value:u};return lt.und(d.delay)&&(d.delay=h?0:e.delay),lt.und(d.endDelay)&&(d.endDelay=h===c.length-1?e.endDelay:0),d}).map(function(u){return ku(u,n)})}function o2(a){for(var e=Vu(Gu(a.map(function(c){return Object.keys(c)})),function(c){return lt.key(c)}).reduce(function(c,u){return c.indexOf(u)<0&&c.push(u),c},[]),n={},r=function(c){var u=e[c];n[u]=a.map(function(h){var d={};for(var p in h)lt.key(p)?p==u&&(d.value=h[p]):d[p]=h[p];return d})},o=0;o<e.length;o++)r(o);return n}function l2(a,e){var n=[],r=e.keyframes;r&&(e=ku(o2(r),e));for(var o in e)lt.key(o)&&n.push({name:o,tweens:s2(e[o],a)});return n}function c2(a,e){var n={};for(var r in a){var o=Fp(a[r],e);lt.arr(o)&&(o=o.map(function(c){return Fp(c,e)}),o.length===1&&(o=o[0])),n[r]=o}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function u2(a,e){var n;return a.tweens.map(function(r){var o=c2(r,e),c=o.value,u=lt.arr(c)?c[1]:c,h=Ba(u),d=pm(e.target,a.name,h,e),p=n?n.to.original:d,g=lt.arr(c)?c[0]:p,v=Ba(g)||Ba(d),_=h||v;return lt.und(u)&&(u=p),o.from=Mx(g,_),o.to=Mx(mm(u,g),_),o.start=n?n.end:0,o.end=o.start+o.delay+o.duration+o.endDelay,o.easing=cm(o.easing,o.duration),o.isPath=lt.pth(c),o.isPathTargetInsideSVG=o.isPath&&lt.svg(e.target),o.isColor=lt.col(o.from.original),o.isColor&&(o.round=1),n=o,o})}var Yy={css:function(a,e,n){return a.style[e]=n},attribute:function(a,e,n){return a.setAttribute(e,n)},object:function(a,e,n){return a[e]=n},transform:function(a,e,n,r,o){if(r.list.set(e,n),e===r.last||o){var c="";r.list.forEach(function(u,h){c+=h+"("+u+") "}),a.style.transform=c}}};function Zy(a,e){var n=qy(a);n.forEach(function(r){for(var o in e){var c=Fp(e[o],r),u=r.target,h=Ba(c),d=pm(u,o,h,r),p=h||Ba(d),g=mm(ky(c,p),d),v=hm(u,o);Yy[v](u,o,g,r.transforms,!0)}})}function f2(a,e){var n=hm(a.target,e.name);if(n){var r=u2(e,a),o=r[r.length-1];return{type:n,property:e.name,animatable:a,tweens:r,duration:o.end,delay:r[0].delay,endDelay:o.endDelay}}}function d2(a,e){return Vu(Gu(a.map(function(n){return e.map(function(r){return f2(n,r)})})),function(n){return!lt.und(n)})}function Ky(a,e){var n=a.length,r=function(c){return c.timelineOffset?c.timelineOffset:0},o={};return o.duration=n?Math.max.apply(Math,a.map(function(c){return r(c)+c.duration})):e.duration,o.delay=n?Math.min.apply(Math,a.map(function(c){return r(c)+c.delay})):e.delay,o.endDelay=n?o.duration-Math.max.apply(Math,a.map(function(c){return r(c)+c.duration-c.endDelay})):e.endDelay,o}var Ex=0;function h2(a){var e=Ip(Iy,a),n=Ip(lm,a),r=l2(n,a),o=qy(a.targets),c=d2(o,r),u=Ky(c,n),h=Ex;return Ex++,ku(e,{id:h,children:[],animatables:o,animations:c,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var Wi=[],Qy=(function(){var a;function e(){!a&&(!bx()||!un.suspendWhenDocumentHidden)&&Wi.length>0&&(a=requestAnimationFrame(n))}function n(o){for(var c=Wi.length,u=0;u<c;){var h=Wi[u];h.paused?(Wi.splice(u,1),c--):(h.tick(o),u++)}a=u>0?requestAnimationFrame(n):void 0}function r(){un.suspendWhenDocumentHidden&&(bx()?a=cancelAnimationFrame(a):(Wi.forEach(function(o){return o._onDocumentVisibility()}),Qy()))}return typeof document<"u"&&document.addEventListener("visibilitychange",r),e})();function bx(){return!!document&&document.hidden}function un(a){a===void 0&&(a={});var e=0,n=0,r=0,o,c=0,u=null;function h(U){var C=window.Promise&&new Promise(function(I){return u=I});return U.finished=C,C}var d=h2(a);h(d);function p(){var U=d.direction;U!=="alternate"&&(d.direction=U!=="normal"?"normal":"reverse"),d.reversed=!d.reversed,o.forEach(function(C){return C.reversed=d.reversed})}function g(U){return d.reversed?d.duration-U:U}function v(){e=0,n=g(d.currentTime)*(1/un.speed)}function _(U,C){C&&C.seek(U-C.timelineOffset)}function y(U){if(d.reversePlayback)for(var I=c;I--;)_(U,o[I]);else for(var C=0;C<c;C++)_(U,o[C])}function M(U){for(var C=0,I=d.animations,O=I.length;C<O;){var R=I[C],H=R.animatable,X=R.tweens,A=X.length-1,D=X[A];A&&(D=Vu(X,function(ae){return U<ae.end})[0]||D);for(var k=sa(U-D.start-D.delay,0,D.duration)/D.duration,ne=isNaN(k)?1:D.easing(k),Z=D.to.strings,ce=D.round,re=[],L=D.to.numbers.length,F=void 0,Y=0;Y<L;Y++){var xe=void 0,P=D.to.numbers[Y],K=D.from.numbers[Y]||0;D.isPath?xe=r2(D.value,ne*P,D.isPathTargetInsideSVG):xe=K+ne*(P-K),ce&&(D.isColor&&Y>2||(xe=Math.round(xe*ce)/ce)),re.push(xe)}var Se=Z.length;if(!Se)F=re[0];else{F=Z[0];for(var ve=0;ve<Se;ve++){Z[ve];var Oe=Z[ve+1],Ze=re[ve];isNaN(Ze)||(Oe?F+=Ze+Oe:F+=Ze+" ")}}Yy[R.type](H.target,R.property,F,H.transforms),R.currentValue=F,C++}}function b(U){d[U]&&!d.passThrough&&d[U](d)}function S(){d.remaining&&d.remaining!==!0&&d.remaining--}function x(U){var C=d.duration,I=d.delay,O=C-d.endDelay,R=g(U);d.progress=sa(R/C*100,0,100),d.reversePlayback=R<d.currentTime,o&&y(R),!d.began&&d.currentTime>0&&(d.began=!0,b("begin")),!d.loopBegan&&d.currentTime>0&&(d.loopBegan=!0,b("loopBegin")),R<=I&&d.currentTime!==0&&M(0),(R>=O&&d.currentTime!==C||!C)&&M(C),R>I&&R<O?(d.changeBegan||(d.changeBegan=!0,d.changeCompleted=!1,b("changeBegin")),b("change"),M(R)):d.changeBegan&&(d.changeCompleted=!0,d.changeBegan=!1,b("changeComplete")),d.currentTime=sa(R,0,C),d.began&&b("update"),U>=C&&(n=0,S(),d.remaining?(e=r,b("loopComplete"),d.loopBegan=!1,d.direction==="alternate"&&p()):(d.paused=!0,d.completed||(d.completed=!0,b("loopComplete"),b("complete"),!d.passThrough&&"Promise"in window&&(u(),h(d)))))}return d.reset=function(){var U=d.direction;d.passThrough=!1,d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.loopBegan=!1,d.changeBegan=!1,d.completed=!1,d.changeCompleted=!1,d.reversePlayback=!1,d.reversed=U==="reverse",d.remaining=d.loop,o=d.children,c=o.length;for(var C=c;C--;)d.children[C].reset();(d.reversed&&d.loop!==!0||U==="alternate"&&d.loop===1)&&d.remaining++,M(d.reversed?d.duration:0)},d._onDocumentVisibility=v,d.set=function(U,C){return Zy(U,C),d},d.tick=function(U){r=U,e||(e=r),x((r+(n-e))*un.speed)},d.seek=function(U){x(g(U))},d.pause=function(){d.paused=!0,v()},d.play=function(){d.paused&&(d.completed&&d.reset(),d.paused=!1,Wi.push(d),v(),Qy())},d.reverse=function(){p(),d.completed=!d.reversed,v()},d.restart=function(){d.reset(),d.play()},d.remove=function(U){var C=vm(U);Jy(C,d)},d.reset(),d.autoplay&&d.play(),d}function Tx(a,e){for(var n=e.length;n--;)um(a,e[n].animatable.target)&&e.splice(n,1)}function Jy(a,e){var n=e.animations,r=e.children;Tx(a,n);for(var o=r.length;o--;){var c=r[o],u=c.animations;Tx(a,u),!u.length&&!c.children.length&&r.splice(o,1)}!n.length&&!r.length&&e.pause()}function p2(a){for(var e=vm(a),n=Wi.length;n--;){var r=Wi[n];Jy(e,r)}}function m2(a,e){e===void 0&&(e={});var n=e.direction||"normal",r=e.easing?cm(e.easing):null,o=e.grid,c=e.axis,u=e.from||0,h=u==="first",d=u==="center",p=u==="last",g=lt.arr(a),v=parseFloat(g?a[0]:a),_=g?parseFloat(a[1]):0,y=Ba(g?a[1]:a)||0,M=e.start||0+(g?v:0),b=[],S=0;return function(x,U,C){if(h&&(u=0),d&&(u=(C-1)/2),p&&(u=C-1),!b.length){for(var I=0;I<C;I++){if(!o)b.push(Math.abs(u-I));else{var O=d?(o[0]-1)/2:u%o[0],R=d?(o[1]-1)/2:Math.floor(u/o[0]),H=I%o[0],X=Math.floor(I/o[0]),A=O-H,D=R-X,k=Math.sqrt(A*A+D*D);c==="x"&&(k=-A),c==="y"&&(k=-D),b.push(k)}S=Math.max.apply(Math,b)}r&&(b=b.map(function(Z){return r(Z/S)*S})),n==="reverse"&&(b=b.map(function(Z){return c?Z<0?Z*-1:-Z:Math.abs(S-Z)}))}var ne=g?(_-v)/S:v;return M+ne*(Math.round(b[U]*100)/100)+y}}function g2(a){a===void 0&&(a={});var e=un(a);return e.duration=0,e.add=function(n,r){var o=Wi.indexOf(e),c=e.children;o>-1&&Wi.splice(o,1);function u(_){_.passThrough=!0}for(var h=0;h<c.length;h++)u(c[h]);var d=ku(n,Ip(lm,a));d.targets=d.targets||a.targets;var p=e.duration;d.autoplay=!1,d.direction=e.direction,d.timelineOffset=lt.und(r)?p:mm(r,p),u(e),e.seek(d.timelineOffset);var g=un(d);u(g),c.push(g);var v=Ky(c,a);return e.delay=v.delay,e.endDelay=v.endDelay,e.duration=v.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}un.version="3.2.1";un.speed=1;un.suspendWhenDocumentHidden=!0;un.running=Wi;un.remove=p2;un.get=pm;un.set=Zy;un.convertPx=dm;un.path=a2;un.setDashoffset=n2;un.stagger=m2;un.timeline=g2;un.easing=cm;un.penner=zy;un.random=function(a,e){return Math.floor(Math.random()*(e-a+1))+a};const v2=({isOpen:a,onClose:e,meaning:n})=>!a||!n?null:B.jsx("div",{className:"modal-overlay",onClick:e,children:B.jsxs("div",{className:"modal-container",onClick:r=>r.stopPropagation(),children:[B.jsx("button",{className:"modal-close",onClick:e,children:"✕"}),B.jsx("h2",{className:"modal-title",children:n.arcaneName}),B.jsx("p",{className:"modal-text",children:n.arcaneDescription}),n.goddessName&&B.jsxs("p",{className:"modal-goddesstitle",children:["Diosa: ",n.goddessName]}),B.jsx("p",{className:"modal-goddess",children:n.goddessDescription})]})}),_2=a=>{const[e,n]=oe.useState([]),[r,o]=oe.useState([null,null,null]),[c,u]=oe.useState("preparation"),[h,d]=oe.useState(!0),[p,g]=oe.useState(null),[v,_]=oe.useState([]),[y,M]=oe.useState(!1),[b,S]=oe.useState(""),x=[{key:"pasado",name:"Pasado",description:"Influencias y experiencias que te han moldeado"},{key:"presente",name:"Presente",description:"Tu situación actual y energías predominantes"},{key:"futuro",name:"Futuro",description:"Potencialidades y caminos que se abren ante ti"}],[U,C]=oe.useState(!1),I=()=>{if(U)return;C(!0);const L=document.querySelectorAll(".selectable-card");un({targets:L,translateX:()=>un.random(-300,300),translateY:()=>un.random(-150,150),rotate:()=>un.random(-360,360),scale:[{value:.5,duration:200},{value:1,duration:400}],opacity:[{value:0,duration:200},{value:1,duration:400}],delay:un.stagger(10),duration:1e3,easing:"easeInOutQuad",complete:()=>{un({targets:L,translateX:0,translateY:0,rotate:0,duration:800,easing:"easeOutElastic(1, .6)",complete:()=>{n(F=>{const Y=[...F];for(let xe=Y.length-1;xe>0;xe--){const P=Math.floor(Math.random()*(xe+1));[Y[xe],Y[P]]=[Y[P],Y[xe]]}return Y}),C(!1)}})}})};oe.useEffect(()=>{(async()=>{try{d(!0);const Y=[...await Lu()].sort(()=>Math.random()-.5);n(Y),g(null)}catch{g("No se pudieron cargar las cartas. Intenta recargar la página.")}finally{d(!1)}})()},[]);const O=async()=>{if(e.length===0){g("Las cartas no están disponibles. Por favor, intenta de nuevo más tarde.");return}d(!1),g(null),o([null,null,null]),_([]),u("selection")},R=(L,F)=>{if(r[F])return;const Y=[...r];Y[F]=L,o(Y),n(xe=>xe.map(P=>P&&P.id===L.id?null:P)),Y.filter(Boolean).length===3&&u("revelation")},H=L=>{v.includes(L)||_(F=>[...F,L])},X=L=>{S(L),M(!0)},A=()=>{M(!1),S("")},D=()=>{o([null,null,null]),_([]),u("preparation"),(async()=>{try{const F=await Lu();n(F),g(null)}catch{g("No se pudieron cargar las cartas para una nueva lectura.")}})(),A()},k=()=>B.jsx("div",{className:"reading-preparation",children:B.jsxs("div",{className:"preparation-content",children:[B.jsx("h2",{className:"preparation-title",children:"Preparación para la Lectura"}),B.jsxs("div",{className:"preparation-description",children:[B.jsxs("p",{children:["Estás a punto de realizar una lectura de ",B.jsx("strong",{children:"Pasado, Presente y Futuro"}),". Esta antigua práctica te revelará las influencias que han moldeado tu camino, tu situación actual y las potencialidades que aguardan."]}),B.jsx("p",{children:"Tómate un momento para centrar tu energía y formular mentalmente una pregunta o área de tu vida sobre la que deseas obtener guía."})]}),B.jsx("div",{className:"positions-preview",children:x.map(L=>B.jsxs("div",{className:"position-preview",children:[B.jsx("h4",{children:L.name}),B.jsx("p",{children:L.description})]},L.key))}),B.jsx("button",{className:"mystic-button primary large",onClick:O,disabled:h||e.length===0,children:h?"Invocando las cartas...":"Comenzar Lectura"})]})}),ne=()=>B.jsxs("div",{className:"reading-selection",children:[B.jsx("h2",{className:"selection-title",children:"Selecciona las Cartas para tu Lectura"}),B.jsx("p",{className:"selection-instructions",children:"Concéntrate en tu pregunta, baraja el mazo y selecciona 3 cartas intuitivamente."}),B.jsx("div",{className:"reading-positions",children:x.map((L,F)=>B.jsxs("div",{className:`reading-position ${r[F]?"filled":"empty"}`,children:[B.jsx("div",{className:"position-header",children:B.jsx("h3",{children:L.name})}),B.jsx("div",{className:"position-card-slot",children:r[F]?B.jsx(Eu,{card:r[F],isFlipped:v.includes(F),onClick:Y=>{H(F)},showDetails:!0}):B.jsx("div",{className:"empty-slot",children:B.jsx("p",{children:"Selecciona una carta"})})}),B.jsx("p",{className:"position-description",children:L.description})]},L.key))}),e.length>0&&B.jsxs("div",{className:"available-cards",children:[B.jsx("h3",{children:"Mazo de Tarot"}),B.jsx("div",{style:{textAlign:"center",marginBottom:"2rem"},children:B.jsx("button",{className:"mystic-button primary",onClick:I,disabled:e.length===0||U,children:U?"Barajando...":"Barajar Mazo"})}),B.jsx("div",{className:"cards-grid deck-view",children:e.map((L,F)=>L?B.jsx("div",{className:`selectable-card ${U?"shuffling":""}`,style:{animationDelay:`${F*.05}s`},onClick:()=>{if(U)return;const Y=r.findIndex(xe=>!xe);Y!==-1&&R(L,Y)},children:B.jsx(Eu,{card:L,isFlipped:!1,showDetails:!1})},L.id):B.jsx("div",{className:"card-gap"},`gap-${F}`))})]})]}),Z=()=>B.jsxs("div",{className:"reading-revelation",children:[B.jsx("h2",{className:"revelation-title",children:"Revelación de tu Lectura"}),B.jsx("p",{className:"revelation-instructions",children:"Haz clic en cada carta para revelar su mensaje."}),B.jsx("div",{className:"reading-positions revelation-mode",children:x.map((L,F)=>B.jsxs("div",{className:"reading-position",children:[B.jsx("div",{className:"position-header",children:B.jsx("h3",{children:L.name})}),B.jsx("div",{className:"position-card-slot",children:B.jsx(Eu,{card:r[F],isFlipped:v.includes(F),onClick:Y=>{v.includes(F)?X(Y):H(F)},showDetails:!0})}),v.includes(F)&&B.jsxs("div",{className:"card-interpretation",children:[B.jsx("h4",{children:r[F]?.arcaneName}),B.jsxs("p",{className:"interpretation-text",children:["En la posición del ",L.name.toLowerCase(),", este arcano sugiere..."]}),r[F]?.goddessName&&B.jsxs("p",{className:"goddess-connection",children:[B.jsx("strong",{children:"Diosa asociada:"})," ",r[F].goddessName]})]})]},L.key))}),v.length===3&&B.jsx("div",{style:{textAlign:"center",marginTop:"2rem"},children:B.jsx("button",{className:"mystic-button primary large",onClick:()=>u("complete"),children:"Ver Resumen de Lectura"})})]}),ce=()=>B.jsxs("div",{className:"reading-complete",children:[B.jsx("h2",{className:"complete-title",children:"Tu Lectura está Completa"}),B.jsxs("div",{className:"reading-summary",children:[B.jsxs("div",{className:"summary-header",children:[B.jsx("h3",{children:"Resumen de tu Lectura"}),B.jsx("p",{children:"Estas son las cartas que el universo ha elegido para ti:"})]}),B.jsx("div",{className:"summary-cards",children:x.map((L,F)=>B.jsxs("div",{className:"summary-card",children:[B.jsx("div",{className:"summary-position",children:B.jsx("strong",{children:L.name})}),B.jsxs("div",{className:"summary-card-info",children:[B.jsx("h4",{children:r[F]?.arcaneName}),B.jsx("p",{className:"summary-description",children:r[F]?.arcaneDescription}),r[F]?.goddessName&&B.jsxs("p",{className:"summary-goddess",children:["Diosa: ",r[F].goddessName]})]})]},L.key))})]}),B.jsx("div",{className:"complete-actions",children:B.jsx("button",{className:"mystic-button primary",onClick:D,children:"Nueva Lectura"})})]}),re=()=>B.jsx("div",{className:"reading-error",children:B.jsxs("div",{className:"error-content",children:[B.jsx("h3",{children:"Error en la Consulta Mística"}),B.jsx("p",{children:p}),B.jsx("button",{className:"mystic-button",onClick:D,children:"Intentar de Nuevo"})]})});return h?B.jsxs("div",{className:"tarot-loading",children:[B.jsx("div",{className:"loading-spinner"}),B.jsx("p",{children:"Cargando sabiduría ancestral..."})]}):p?re():B.jsxs("div",{className:"tarot-reading",children:[c==="preparation"&&k(),c==="selection"&&ne(),c==="revelation"&&Z(),c==="complete"&&ce(),B.jsx(v2,{isOpen:y,onClose:A,meaning:b})]})},x2=()=>B.jsxs("div",{className:"reading-page",children:[B.jsx("div",{className:"reading-header",children:B.jsxs("div",{className:"header-navigation",children:[B.jsx(ia,{to:"/",className:"nav-link",children:"← Explorar Cartas"}),B.jsxs("div",{className:"header-center",children:[B.jsx("h1",{className:"page-title",children:"Lectura del Tarot"}),B.jsx("p",{className:"page-subtitle",children:"Consulta los arcanos sobre tu pasado, presente y futuro"})]}),B.jsx("div",{className:"header-spacer"})]})}),B.jsx("div",{className:"reading-content",children:B.jsx(_2,{})}),B.jsx("div",{className:"reading-footer",children:B.jsxs("div",{className:"footer-content",children:[B.jsx("h3",{children:" Sobre la Lectura de Tarot"}),B.jsxs("div",{className:"footer-info",children:[B.jsxs("div",{className:"info-item",children:[B.jsx("h4",{children:" Propósito"}),B.jsx("p",{children:"Esta lectura está diseñada para ofrecerte perspectivas y reflexiones sobre diferentes aspectos de tu vida, conectando con la sabiduría ancestral de los arcanos."})]}),B.jsxs("div",{className:"info-item",children:[B.jsx("h4",{children:" Diosas Contemporáneas"}),B.jsx("p",{children:"Cada arcano está asociado con una diosa contemporánea, representando diferentes arquetipos y energías femeninas que pueden inspirar tu camino."})]}),B.jsxs("div",{className:"info-item",children:[B.jsx("h4",{children:" Interpretación"}),B.jsx("p",{children:"Recuerda que el tarot es una herramienta de autoconocimiento. Las cartas reflejan posibilidades, no destinos fijos. Tu libre albedrío siempre prevalece."})]})]})]})})]}),y2=oT([{path:"/",element:B.jsx(O3,{}),children:[{index:!0,element:B.jsx(V3,{})},{path:"card/:id",element:B.jsx(G3,{})},{path:"lectura",element:B.jsx(x2,{})},{path:"*",element:B.jsx("div",{style:{color:"white",textAlign:"center",marginTop:"50px"},children:"404 - Destino no encontrado en las estrellas"})}]}],{basename:"/Tarot-app"});uE.createRoot(document.getElementById("root")).render(B.jsx(iE.StrictMode,{children:B.jsx(xT,{router:y2})}));
