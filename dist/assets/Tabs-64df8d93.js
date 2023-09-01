import{j as ce,r as P,bc as Ct,bd as St,v as i,bg as nt,O as Rt,ay as Ne,ah as Yt,bP as qt,bQ as Ke,bR as Jt,f as N,g as r,J as E,ac as at,Z as g,m as ve,t as ee,bS as Zt,n as U,a5 as Ve,w as xe,P as Tt,L as Q,p as st,bT as Qt,bU as en,W as tn,a7 as Ot,i as nn,u as dt,bV as an,l as ot,bk as on,bW as rt,k as rn,q as ln,s as it,V as sn,x as dn,z as cn,T as un,A as zt,b5 as $t,B as ut,D as fn,bX as bn,E as q,F as hn,bY as vn,bt as pn,bZ as gn,aZ as ft,bD as Ue,G as mn,K as Pt,bL as xn,a1 as wn,bm as yn,bu as Cn,bz as Sn,b_ as Rn,a3 as Tn,b$ as On,bp as He,R as bt,U as ht,c0 as zn,c1 as $n}from"./index-76253c1b.js";import{u as Pn,d as qe,c as Fn,e as Bn,p as Je,f as _n,N as An,a as Mn,h as vt}from"./utils-6803f913.js";function In(e,a="default",f=[]){const c=e.$slots[a];return c===void 0?f:c()}function kn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const Wn=nt(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[nt("&::-webkit-scrollbar",{width:0,height:0})]),En=ce({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=P(null);function a(c){!(c.currentTarget.offsetWidth<c.currentTarget.scrollWidth)||c.deltaY===0||(c.currentTarget.scrollLeft+=c.deltaY+c.deltaX,c.preventDefault())}const f=Ct();return Wn.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:St,ssr:f}),Object.assign({selfRef:e,handleWheel:a},{scrollTo(...c){var p;(p=e.value)===null||p===void 0||p.scrollTo(...c)}})},render(){return i("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),me="v-hidden",Ln=nt("[v-hidden]",{display:"none!important"}),pt=ce({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:a}){const f=P(null),b=P(null);function c(){const{value:m}=f,{getCounter:l,getTail:S}=e;let v;if(l!==void 0?v=l():v=b.value,!m||!v)return;v.hasAttribute(me)&&v.removeAttribute(me);const{children:O}=m,F=m.offsetWidth,C=[],R=a.tail?S==null?void 0:S():null;let x=R?R.offsetWidth:0,_=!1;const I=m.children.length-(a.tail?1:0);for(let z=0;z<I-1;++z){if(z<0)continue;const V=O[z];if(_){V.hasAttribute(me)||V.setAttribute(me,"");continue}else V.hasAttribute(me)&&V.removeAttribute(me);const L=V.offsetWidth;if(x+=L,C[z]=L,x>F){const{updateCounter:$}=e;for(let h=z;h>=0;--h){const j=I-1-h;$!==void 0?$(j):v.textContent=`${j}`;const K=v.offsetWidth;if(x-=C[h],x+K<=F||h===0){_=!0,z=h-1,R&&(z===-1?(R.style.maxWidth=`${F-K}px`,R.style.boxSizing="border-box"):R.style.maxWidth="");break}}}}const{onUpdateOverflow:B}=e;_?B!==void 0&&B(!0):(B!==void 0&&B(!1),v.setAttribute(me,""))}const p=Ct();return Ln.mount({id:"vueuc/overflow",head:!0,anchorMetaName:St,ssr:p}),Rt(c),{selfRef:f,counterRef:b,sync:c}},render(){const{$slots:e}=this;return Ne(this.sync),i("div",{class:"v-overflow",ref:"selfRef"},[Yt(e,"default"),e.counter?e.counter():i("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});var jn=/\s/;function Dn(e){for(var a=e.length;a--&&jn.test(e.charAt(a)););return a}var Vn=/^\s+/;function Nn(e){return e&&e.slice(0,Dn(e)+1).replace(Vn,"")}var gt=0/0,Hn=/^[-+]0x[0-9a-f]+$/i,Un=/^0b[01]+$/i,Kn=/^0o[0-7]+$/i,Gn=parseInt;function mt(e){if(typeof e=="number")return e;if(qt(e))return gt;if(Ke(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=Ke(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=Nn(e);var f=Un.test(e);return f||Kn.test(e)?Gn(e.slice(2),f?2:8):Hn.test(e)?gt:+e}var Xn=function(){return Jt.Date.now()};const Ze=Xn;var Yn="Expected a function",qn=Math.max,Jn=Math.min;function Zn(e,a,f){var b,c,p,m,l,S,v=0,O=!1,F=!1,C=!0;if(typeof e!="function")throw new TypeError(Yn);a=mt(a)||0,Ke(f)&&(O=!!f.leading,F="maxWait"in f,p=F?qn(mt(f.maxWait)||0,a):p,C="trailing"in f?!!f.trailing:C);function R(h){var j=b,K=c;return b=c=void 0,v=h,m=e.apply(K,j),m}function x(h){return v=h,l=setTimeout(B,a),O?R(h):m}function _(h){var j=h-S,K=h-v,J=a-j;return F?Jn(J,p-K):J}function I(h){var j=h-S,K=h-v;return S===void 0||j>=a||j<0||F&&K>=p}function B(){var h=Ze();if(I(h))return z(h);l=setTimeout(B,_(h))}function z(h){return l=void 0,C&&b?R(h):(b=c=void 0,m)}function V(){l!==void 0&&clearTimeout(l),v=0,b=S=c=l=void 0}function L(){return l===void 0?m:z(Ze())}function $(){var h=Ze(),j=I(h);if(b=arguments,c=this,S=h,j){if(l===void 0)return x(S);if(F)return clearTimeout(l),l=setTimeout(B,a),R(S)}return l===void 0&&(l=setTimeout(B,a)),m}return $.cancel=V,$.flush=L,$}var Qn="Expected a function";function Qe(e,a,f){var b=!0,c=!0;if(typeof e!="function")throw new TypeError(Qn);return Ke(f)&&(b="leading"in f?!!f.leading:b,c="trailing"in f?!!f.trailing:c),Zn(e,a,{leading:b,maxWait:a,trailing:c})}const ea=ce({name:"Add",render(){return i("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ta=N([r("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[r("base-loading",`
 color: var(--n-loading-color);
 `),r("base-selection-tags","min-height: var(--n-height);"),E("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),E("state-border",`
 z-index: 1;
 border-color: #0000;
 `),r("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[E("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),r("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[E("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),r("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[E("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),r("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[r("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[E("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),E("render-label",`
 color: var(--n-text-color);
 `)]),at("disabled",[N("&:hover",[E("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),g("focus",[E("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),g("active",[E("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),r("base-selection-label","background-color: var(--n-color-active);"),r("base-selection-tags","background-color: var(--n-color-active);")])]),g("disabled","cursor: not-allowed;",[E("arrow",`
 color: var(--n-arrow-color-disabled);
 `),r("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[r("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),E("render-label",`
 color: var(--n-text-color-disabled);
 `)]),r("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),r("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),r("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[E("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),E("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>g(`${e}-status`,[E("state-border",`border: var(--n-border-${e});`),at("disabled",[N("&:hover",[E("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),g("active",[E("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),r("base-selection-label",`background-color: var(--n-color-active-${e});`),r("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),g("focus",[E("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),r("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),r("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[N("&:last-child","padding-right: 0;"),r("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[E("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),na=ce({name:"InternalSelection",props:Object.assign(Object.assign({},ve.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const a=P(null),f=P(null),b=P(null),c=P(null),p=P(null),m=P(null),l=P(null),S=P(null),v=P(null),O=P(null),F=P(!1),C=P(!1),R=P(!1),x=ve("InternalSelection","-internal-selection",ta,Zt,e,ee(e,"clsPrefix")),_=U(()=>e.clearable&&!e.disabled&&(R.value||e.active)),I=U(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ve(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),B=U(()=>{const n=e.selectedOption;if(n)return n[e.labelField]}),z=U(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function V(){var n;const{value:u}=a;if(u){const{value:D}=f;D&&(D.style.width=`${u.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=v.value)===null||n===void 0||n.sync()))}}function L(){const{value:n}=O;n&&(n.style.display="none")}function $(){const{value:n}=O;n&&(n.style.display="inline-block")}xe(ee(e,"active"),n=>{n||L()}),xe(ee(e,"pattern"),()=>{e.multiple&&Ne(V)});function h(n){const{onFocus:u}=e;u&&u(n)}function j(n){const{onBlur:u}=e;u&&u(n)}function K(n){const{onDeleteOption:u}=e;u&&u(n)}function J(n){const{onClear:u}=e;u&&u(n)}function te(n){const{onPatternInput:u}=e;u&&u(n)}function ne(n){var u;(!n.relatedTarget||!(!((u=b.value)===null||u===void 0)&&u.contains(n.relatedTarget)))&&h(n)}function X(n){var u;!((u=b.value)===null||u===void 0)&&u.contains(n.relatedTarget)||j(n)}function Y(n){J(n)}function we(){R.value=!0}function ye(){R.value=!1}function ue(n){!e.active||!e.filterable||n.target!==f.value&&n.preventDefault()}function pe(n){K(n)}function ie(n){if(n.key==="Backspace"&&!le.value&&!e.pattern.length){const{selectedOptions:u}=e;u!=null&&u.length&&pe(u[u.length-1])}}const le=P(!1);let ae=null;function Ce(n){const{value:u}=a;if(u){const D=n.target.value;u.textContent=D,V()}e.ignoreComposition&&le.value?ae=n:te(n)}function Se(){le.value=!0}function Re(){le.value=!1,e.ignoreComposition&&te(ae),ae=null}function Ae(n){var u;C.value=!0,(u=e.onPatternFocus)===null||u===void 0||u.call(e,n)}function Me(n){var u;C.value=!1,(u=e.onPatternBlur)===null||u===void 0||u.call(e,n)}function se(){var n,u;if(e.filterable)C.value=!1,(n=m.value)===null||n===void 0||n.blur(),(u=f.value)===null||u===void 0||u.blur();else if(e.multiple){const{value:D}=c;D==null||D.blur()}else{const{value:D}=p;D==null||D.blur()}}function Te(){var n,u,D;e.filterable?(C.value=!1,(n=m.value)===null||n===void 0||n.focus()):e.multiple?(u=c.value)===null||u===void 0||u.focus():(D=p.value)===null||D===void 0||D.focus()}function de(){const{value:n}=f;n&&($(),n.focus())}function Z(){const{value:n}=f;n&&n.blur()}function fe(n){const{value:u}=l;u&&u.setTextContent(`+${n}`)}function be(){const{value:n}=S;return n}function Oe(){return f.value}let ge=null;function he(){ge!==null&&window.clearTimeout(ge)}function oe(){e.disabled||e.active||(he(),ge=window.setTimeout(()=>{z.value&&(F.value=!0)},100))}function o(){he()}function s(n){n||(he(),F.value=!1)}xe(z,n=>{n||(F.value=!1)}),Rt(()=>{Tt(()=>{const n=m.value;n&&(n.tabIndex=e.disabled||C.value?-1:0)})}),Pn(b,e.onResize);const{inlineThemeDisabled:w}=e,T=U(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:u},self:{borderRadius:D,color:ze,placeholderColor:Ie,textColor:ke,paddingSingle:We,paddingMultiple:Ee,caretColor:$e,colorDisabled:Pe,textColorDisabled:Fe,placeholderColorDisabled:Le,colorActive:je,boxShadowFocus:Be,boxShadowActive:re,boxShadowHover:t,border:d,borderFocus:y,borderHover:W,borderActive:A,arrowColor:k,arrowColorDisabled:M,loadingColor:G,colorActiveWarning:_e,boxShadowFocusWarning:De,boxShadowActiveWarning:Ge,boxShadowHoverWarning:Xe,borderWarning:Ye,borderFocusWarning:Bt,borderHoverWarning:_t,borderActiveWarning:At,colorActiveError:Mt,boxShadowFocusError:It,boxShadowActiveError:kt,boxShadowHoverError:Wt,borderError:Et,borderFocusError:Lt,borderHoverError:jt,borderActiveError:Dt,clearColor:Vt,clearColorHover:Nt,clearColorPressed:Ht,clearSize:Ut,arrowSize:Kt,[Q("height",n)]:Gt,[Q("fontSize",n)]:Xt}}=x.value;return{"--n-bezier":u,"--n-border":d,"--n-border-active":A,"--n-border-focus":y,"--n-border-hover":W,"--n-border-radius":D,"--n-box-shadow-active":re,"--n-box-shadow-focus":Be,"--n-box-shadow-hover":t,"--n-caret-color":$e,"--n-color":ze,"--n-color-active":je,"--n-color-disabled":Pe,"--n-font-size":Xt,"--n-height":Gt,"--n-padding-single":We,"--n-padding-multiple":Ee,"--n-placeholder-color":Ie,"--n-placeholder-color-disabled":Le,"--n-text-color":ke,"--n-text-color-disabled":Fe,"--n-arrow-color":k,"--n-arrow-color-disabled":M,"--n-loading-color":G,"--n-color-active-warning":_e,"--n-box-shadow-focus-warning":De,"--n-box-shadow-active-warning":Ge,"--n-box-shadow-hover-warning":Xe,"--n-border-warning":Ye,"--n-border-focus-warning":Bt,"--n-border-hover-warning":_t,"--n-border-active-warning":At,"--n-color-active-error":Mt,"--n-box-shadow-focus-error":It,"--n-box-shadow-active-error":kt,"--n-box-shadow-hover-error":Wt,"--n-border-error":Et,"--n-border-focus-error":Lt,"--n-border-hover-error":jt,"--n-border-active-error":Dt,"--n-clear-size":Ut,"--n-clear-color":Vt,"--n-clear-color-hover":Nt,"--n-clear-color-pressed":Ht,"--n-arrow-size":Kt}}),H=w?st("internal-selection",U(()=>e.size[0]),T,e):void 0;return{mergedTheme:x,mergedClearable:_,patternInputFocused:C,filterablePlaceholder:I,label:B,selected:z,showTagsPanel:F,isComposing:le,counterRef:l,counterWrapperRef:S,patternInputMirrorRef:a,patternInputRef:f,selfRef:b,multipleElRef:c,singleElRef:p,patternInputWrapperRef:m,overflowRef:v,inputTagElRef:O,handleMouseDown:ue,handleFocusin:ne,handleClear:Y,handleMouseEnter:we,handleMouseLeave:ye,handleDeleteOption:pe,handlePatternKeyDown:ie,handlePatternInputInput:Ce,handlePatternInputBlur:Me,handlePatternInputFocus:Ae,handleMouseEnterCounter:oe,handleMouseLeaveCounter:o,handleFocusout:X,handleCompositionEnd:Re,handleCompositionStart:Se,onPopoverUpdateShow:s,focus:Te,focusInput:de,blur:se,blurInput:Z,updateCounter:fe,getCounter:be,getTail:Oe,renderLabel:e.renderLabel,cssVars:w?void 0:T,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender}},render(){const{status:e,multiple:a,size:f,disabled:b,filterable:c,maxTagCount:p,bordered:m,clsPrefix:l,onRender:S,renderTag:v,renderLabel:O}=this;S==null||S();const F=p==="responsive",C=typeof p=="number",R=F||C,x=i(en,null,{default:()=>i(Qt,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var I,B;return(B=(I=this.$slots).arrow)===null||B===void 0?void 0:B.call(I)}})});let _;if(a){const{labelField:I}=this,B=X=>i("div",{class:`${l}-base-selection-tag-wrapper`,key:X.value},v?v({option:X,handleClose:()=>{this.handleDeleteOption(X)}}):i(qe,{size:f,closable:!X.disabled,disabled:b,onClose:()=>{this.handleDeleteOption(X)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>O?O(X,!0):Ve(X[I],X,!0)})),z=()=>(C?this.selectedOptions.slice(0,p):this.selectedOptions).map(B),V=c?i("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:b,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,L=F?()=>i("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(qe,{size:f,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:b})):void 0;let $;if(C){const X=this.selectedOptions.length-p;X>0&&($=i("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},i(qe,{size:f,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:b},{default:()=>`+${X}`})))}const h=F?c?i(pt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:z,counter:L,tail:()=>V}):i(pt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:z,counter:L}):C?z().concat($):z(),j=R?()=>i("div",{class:`${l}-base-selection-popover`},F?z():this.selectedOptions.map(B)):void 0,K=R?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,te=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?i("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},i("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,ne=c?i("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},h,F?null:V,x):i("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:b?void 0:0},h,x);_=i(Ot,null,R?i(tn,Object.assign({},K,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ne,default:j}):ne,te)}else if(c){const I=this.pattern||this.isComposing,B=this.active?!I:!this.selected,z=this.active?!1:this.selected;_=i("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:b,disabled:b,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),z?i("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},i("div",{class:`${l}-base-selection-overlay__wrapper`},v?v({option:this.selectedOption,handleClose:()=>{}}):O?O(this.selectedOption,!0):Ve(this.label,this.selectedOption,!0))):null,B?i("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,x)}else _=i("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${l}-base-selection-input`,title:kn(this.label),key:"input"},i("div",{class:`${l}-base-selection-input__content`},v?v({option:this.selectedOption,handleClose:()=>{}}):O?O(this.selectedOption,!0):Ve(this.label,this.selectedOption,!0))):i("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),x);return i("div",{ref:"selfRef",class:[`${l}-base-selection`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},_,m?i("div",{class:`${l}-base-selection__border`}):null,m?i("div",{class:`${l}-base-selection__state-border`}):null)}}),aa=N([r("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),r("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[nn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),oa=Object.assign(Object.assign({},ve.props),{to:it.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),fa=ce({name:"Select",props:oa,setup(e){const{mergedClsPrefixRef:a,mergedBorderedRef:f,namespaceRef:b,inlineThemeDisabled:c}=dt(e),p=ve("Select","-select",aa,an,e,a),m=P(e.defaultValue),l=ee(e,"value"),S=ot(l,m),v=P(!1),O=P(""),F=U(()=>{const{valueField:t,childrenField:d}=e,y=Mn(t,d);return Fn(X.value,y)}),C=U(()=>Bn(te.value,e.valueField,e.childrenField)),R=P(!1),x=ot(ee(e,"show"),R),_=P(null),I=P(null),B=P(null),{localeRef:z}=on("Select"),V=U(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:z.value.placeholder}),L=rt(e,["items","options"]),$=[],h=P([]),j=P([]),K=P(new Map),J=U(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:d,valueField:y}=e;return W=>({[d]:String(W),[y]:W})}return t===!1?!1:d=>Object.assign(t(d),{value:d})}),te=U(()=>j.value.concat(h.value).concat(L.value)),ne=U(()=>{const{filter:t}=e;if(t)return t;const{labelField:d,valueField:y}=e;return(W,A)=>{if(!A)return!1;const k=A[d];if(typeof k=="string")return Je(W,k);const M=A[y];return typeof M=="string"?Je(W,M):typeof M=="number"?Je(W,String(M)):!1}}),X=U(()=>{if(e.remote)return L.value;{const{value:t}=te,{value:d}=O;return!d.length||!e.filterable?t:_n(t,ne.value,d,e.childrenField)}});function Y(t){const d=e.remote,{value:y}=K,{value:W}=C,{value:A}=J,k=[];return t.forEach(M=>{if(W.has(M))k.push(W.get(M));else if(d&&y.has(M))k.push(y.get(M));else if(A){const G=A(M);G&&k.push(G)}}),k}const we=U(()=>{if(e.multiple){const{value:t}=S;return Array.isArray(t)?Y(t):[]}return null}),ye=U(()=>{const{value:t}=S;return!e.multiple&&!Array.isArray(t)?t===null?null:Y([t])[0]||null:null}),ue=rn(e),{mergedSizeRef:pe,mergedDisabledRef:ie,mergedStatusRef:le}=ue;function ae(t,d){const{onChange:y,"onUpdate:value":W,onUpdateValue:A}=e,{nTriggerFormChange:k,nTriggerFormInput:M}=ue;y&&q(y,t,d),A&&q(A,t,d),W&&q(W,t,d),m.value=t,k(),M()}function Ce(t){const{onBlur:d}=e,{nTriggerFormBlur:y}=ue;d&&q(d,t),y()}function Se(){const{onClear:t}=e;t&&q(t)}function Re(t){const{onFocus:d,showOnFocus:y}=e,{nTriggerFormFocus:W}=ue;d&&q(d,t),W(),y&&de()}function Ae(t){const{onSearch:d}=e;d&&q(d,t)}function Me(t){const{onScroll:d}=e;d&&q(d,t)}function se(){var t;const{remote:d,multiple:y}=e;if(d){const{value:W}=K;if(y){const{valueField:A}=e;(t=we.value)===null||t===void 0||t.forEach(k=>{W.set(k[A],k)})}else{const A=ye.value;A&&W.set(A[e.valueField],A)}}}function Te(t){const{onUpdateShow:d,"onUpdate:show":y}=e;d&&q(d,t),y&&q(y,t),R.value=t}function de(){ie.value||(Te(!0),R.value=!0,e.filterable&&Fe())}function Z(){Te(!1)}function fe(){O.value="",j.value=$}const be=P(!1);function Oe(){e.filterable&&(be.value=!0)}function ge(){e.filterable&&(be.value=!1,x.value||fe())}function he(){ie.value||(x.value?e.filterable?Fe():Z():de())}function oe(t){var d,y;!((y=(d=B.value)===null||d===void 0?void 0:d.selfRef)===null||y===void 0)&&y.contains(t.relatedTarget)||(v.value=!1,Ce(t),Z())}function o(t){Re(t),v.value=!0}function s(t){v.value=!0}function w(t){var d;!((d=_.value)===null||d===void 0)&&d.$el.contains(t.relatedTarget)||(v.value=!1,Ce(t),Z())}function T(){var t;(t=_.value)===null||t===void 0||t.focus(),Z()}function H(t){var d;x.value&&(!((d=_.value)===null||d===void 0)&&d.$el.contains(fn(t))||Z())}function n(t){if(!Array.isArray(t))return[];if(J.value)return Array.from(t);{const{remote:d}=e,{value:y}=C;if(d){const{value:W}=K;return t.filter(A=>y.has(A)||W.has(A))}else return t.filter(W=>y.has(W))}}function u(t){D(t.rawNode)}function D(t){if(ie.value)return;const{tag:d,remote:y,clearFilterAfterSelect:W,valueField:A}=e;if(d&&!y){const{value:k}=j,M=k[0]||null;if(M){const G=h.value;G.length?G.push(M):h.value=[M],j.value=$}}if(y&&K.value.set(t[A],t),e.multiple){const k=n(S.value),M=k.findIndex(G=>G===t[A]);if(~M){if(k.splice(M,1),d&&!y){const G=ze(t[A]);~G&&(h.value.splice(G,1),W&&(O.value=""))}}else k.push(t[A]),W&&(O.value="");ae(k,Y(k))}else{if(d&&!y){const k=ze(t[A]);~k?h.value=[h.value[k]]:h.value=$}Pe(),Z(),ae(t[A],t)}}function ze(t){return h.value.findIndex(y=>y[e.valueField]===t)}function Ie(t){x.value||de();const{value:d}=t.target;O.value=d;const{tag:y,remote:W}=e;if(Ae(d),y&&!W){if(!d){j.value=$;return}const{onCreate:A}=e,k=A?A(d):{[e.labelField]:d,[e.valueField]:d},{valueField:M}=e;L.value.some(G=>G[M]===k[M])||h.value.some(G=>G[M]===k[M])?j.value=$:j.value=[k]}}function ke(t){t.stopPropagation();const{multiple:d}=e;!d&&e.filterable&&Z(),Se(),d?ae([],[]):ae(null,null)}function We(t){!vt(t,"action")&&!vt(t,"empty")&&t.preventDefault()}function Ee(t){Me(t)}function $e(t){var d,y,W,A,k;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((d=_.value)===null||d===void 0)&&d.isComposing)){if(x.value){const M=(y=B.value)===null||y===void 0?void 0:y.getPendingTmNode();M?u(M):e.filterable||(Z(),Pe())}else if(de(),e.tag&&be.value){const M=j.value[0];if(M){const G=M[e.valueField],{value:_e}=S;e.multiple&&Array.isArray(_e)&&_e.some(De=>De===G)||D(M)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;x.value&&((W=B.value)===null||W===void 0||W.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;x.value?(A=B.value)===null||A===void 0||A.next():de();break;case"Escape":x.value&&(bn(t),Z()),(k=_.value)===null||k===void 0||k.focus();break}}function Pe(){var t;(t=_.value)===null||t===void 0||t.focus()}function Fe(){var t;(t=_.value)===null||t===void 0||t.focusInput()}function Le(){var t;x.value&&((t=I.value)===null||t===void 0||t.syncPosition())}se(),xe(ee(e,"options"),se);const je={focus:()=>{var t;(t=_.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=_.value)===null||t===void 0||t.blur()}},Be=U(()=>{const{self:{menuBoxShadow:t}}=p.value;return{"--n-menu-box-shadow":t}}),re=c?st("select",void 0,Be,e):void 0;return Object.assign(Object.assign({},je),{mergedStatus:le,mergedClsPrefix:a,mergedBordered:f,namespace:b,treeMate:F,isMounted:ln(),triggerRef:_,menuRef:B,pattern:O,uncontrolledShow:R,mergedShow:x,adjustedTo:it(e),uncontrolledValue:m,mergedValue:S,followerRef:I,localizedPlaceholder:V,selectedOption:ye,selectedOptions:we,mergedSize:pe,mergedDisabled:ie,focused:v,activeWithoutMenuOpen:be,inlineThemeDisabled:c,onTriggerInputFocus:Oe,onTriggerInputBlur:ge,handleTriggerOrMenuResize:Le,handleMenuFocus:s,handleMenuBlur:w,handleMenuTabOut:T,handleTriggerClick:he,handleToggle:u,handleDeleteOption:D,handlePatternInput:Ie,handleClear:ke,handleTriggerBlur:oe,handleTriggerFocus:o,handleKeydown:$e,handleMenuAfterLeave:fe,handleMenuClickOutside:H,handleMenuScroll:Ee,handleMenuKeydown:$e,handleMenuMousedown:We,mergedTheme:p,cssVars:c?void 0:Be,themeClass:re==null?void 0:re.themeClass,onRender:re==null?void 0:re.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(sn,null,{default:()=>[i(dn,null,{default:()=>i(na,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,a;return[(a=(e=this.$slots).arrow)===null||a===void 0?void 0:a.call(e)]}})}),i(cn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===it.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(un,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,a,f;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),zt(i(An,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(a=this.menuProps)===null||a===void 0?void 0:a.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(f=this.menuProps)===null||f===void 0?void 0:f.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var b,c;return[(c=(b=this.$slots).empty)===null||c===void 0?void 0:c.call(b)]},action:()=>{var b,c;return[(c=(b=this.$slots).action)===null||c===void 0?void 0:c.call(b)]}}),this.displayDirective==="show"?[[$t,this.mergedShow],[ut,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ut,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});let et;const ra=()=>{if(!hn)return!0;if(et===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),et=a}return et},ia=Object.assign(Object.assign({},ve.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),ba=ce({name:"Space",props:ia,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:f}=dt(e),b=ve("Space","-space",void 0,vn,e,a),c=pn("Space",f,a);return{useGap:ra(),rtlEnabled:c,mergedClsPrefix:a,margin:U(()=>{const{size:p}=e;if(Array.isArray(p))return{horizontal:p[0],vertical:p[1]};if(typeof p=="number")return{horizontal:p,vertical:p};const{self:{[Q("gap",p)]:m}}=b.value,{row:l,col:S}=gn(m);return{horizontal:ft(S),vertical:ft(l)}})}},render(){const{vertical:e,align:a,inline:f,justify:b,itemStyle:c,margin:p,wrap:m,mergedClsPrefix:l,rtlEnabled:S,useGap:v,wrapItem:O,internalUseGap:F}=this,C=Ue(In(this));if(!C.length)return null;const R=`${p.horizontal}px`,x=`${p.horizontal/2}px`,_=`${p.vertical}px`,I=`${p.vertical/2}px`,B=C.length-1,z=b.startsWith("space-");return i("div",{role:"none",class:[`${l}-space`,S&&`${l}-space--rtl`],style:{display:f?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(b)?"flex-"+b:b,flexWrap:!m||e?"nowrap":"wrap",marginTop:v||e?"":`-${I}`,marginBottom:v||e?"":`-${I}`,alignItems:a,gap:v?`${p.vertical}px ${p.horizontal}px`:""}},!O&&(v||F)?C:C.map((V,L)=>i("div",{role:"none",style:[c,{maxWidth:"100%"},v?"":e?{marginBottom:L!==B?_:""}:S?{marginLeft:z?b==="space-between"&&L===B?"":x:L!==B?R:"",marginRight:z?b==="space-between"&&L===0?"":x:"",paddingTop:I,paddingBottom:I}:{marginRight:z?b==="space-between"&&L===B?"":x:L!==B?R:"",marginLeft:z?b==="space-between"&&L===0?"":x:"",paddingTop:I,paddingBottom:I}]},V)))}}),ct=mn("n-tabs"),Ft={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ha=ce({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ft,setup(e){const a=Pt(ct,null);return a||xn("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return i("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),la=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Sn(Ft,["displayDirective"])),lt=ce({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:la,setup(e){const{mergedClsPrefixRef:a,valueRef:f,typeRef:b,closableRef:c,tabStyleRef:p,tabChangeIdRef:m,onBeforeLeaveRef:l,triggerRef:S,handleAdd:v,activateTab:O,handleClose:F}=Pt(ct);return{trigger:S,mergedClosable:U(()=>{if(e.internalAddable)return!1;const{closable:C}=e;return C===void 0?c.value:C}),style:p,clsPrefix:a,value:f,type:b,handleClose(C){C.stopPropagation(),!e.disabled&&F(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){v();return}const{name:C}=e,R=++m.id;if(C!==f.value){const{value:x}=l;x?Promise.resolve(x(e.name,f.value)).then(_=>{_&&m.id===R&&O(C)}):O(C)}}}},render(){const{internalAddable:e,clsPrefix:a,name:f,disabled:b,label:c,tab:p,value:m,mergedClosable:l,style:S,trigger:v,$slots:{default:O}}=this,F=c??p;return i("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?i("div",{class:`${a}-tabs-tab-pad`}):null,i("div",Object.assign({key:f,"data-name":f,"data-disabled":b?!0:void 0},wn({class:[`${a}-tabs-tab`,m===f&&`${a}-tabs-tab--active`,b&&`${a}-tabs-tab--disabled`,l&&`${a}-tabs-tab--closable`,e&&`${a}-tabs-tab--addable`],onClick:v==="click"?this.activateTab:void 0,onMouseenter:v==="hover"?this.activateTab:void 0,style:e?void 0:S},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),i("span",{class:`${a}-tabs-tab__label`},e?i(Ot,null,i("div",{class:`${a}-tabs-tab__height-placeholder`}," "),i(yn,{clsPrefix:a},{default:()=>i(ea,null)})):O?O():typeof F=="object"?F:Ve(F??f)),l&&this.type==="card"?i(Cn,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:b}):null))}}),sa=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[g("segment-type",[r("tabs-rail",[N("&.transition-disabled","color: red;",[r("tabs-tab",`
 transition: none;
 `)])])]),g("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),g("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),g("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),g("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),g("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[g("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),N("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),g("flex",[r("tabs-nav",{width:"100%"},[r("tabs-wrapper",{width:"100%"},[r("tabs-tab",{marginRight:0})])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[E("prefix, suffix",`
 display: flex;
 align-items: center;
 `),E("prefix","padding-right: 16px;"),E("suffix","padding-left: 16px;")]),g("top, bottom",[r("tabs-nav-scroll-wrapper",[N("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),N("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),g("shadow-start",[N("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),g("shadow-end",[N("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),g("left, right",[r("tabs-nav-scroll-wrapper",[N("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),N("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),g("shadow-start",[N("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),g("shadow-end",[N("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[N("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),N("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[g("disabled",{cursor:"not-allowed"}),E("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),E("label",`
 display: flex;
 align-items: center;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[N("&.transition-disabled",`
 transition: none;
 `),g("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[N("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),N("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),N("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),N("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),N("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),g("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[N("&:hover",{color:"var(--n-tab-text-color-hover)"}),g("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),g("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[g("line-type",[g("top",[E("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),g("left",[E("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),g("right",[E("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),g("bottom",[E("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),E("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),g("card-type",[E("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[g("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[E("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),at("disabled",[N("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),g("closable","padding-right: 8px;"),g("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),g("disabled","color: var(--n-tab-text-color-disabled);")]),r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),g("left, right",[r("tabs-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),g("top",[g("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[g("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),g("left",[g("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[g("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),g("right",[g("card-type",[r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[g("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),g("bottom",[g("card-type",[r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[g("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),da=Object.assign(Object.assign({},ve.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),va=ce({name:"Tabs",props:da,setup(e,{slots:a}){var f,b,c,p;const{mergedClsPrefixRef:m,inlineThemeDisabled:l}=dt(e),S=ve("Tabs","-tabs",sa,Rn,e,m),v=P(null),O=P(null),F=P(null),C=P(null),R=P(null),x=P(!0),_=P(!0),I=rt(e,["labelSize","size"]),B=rt(e,["activeName","value"]),z=P((b=(f=B.value)!==null&&f!==void 0?f:e.defaultValue)!==null&&b!==void 0?b:a.default?(p=(c=Ue(a.default())[0])===null||c===void 0?void 0:c.props)===null||p===void 0?void 0:p.name:null),V=ot(B,z),L={id:0},$=U(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});xe(V,()=>{L.id=0,J(),te()});function h(){var o;const{value:s}=V;return s===null?null:(o=v.value)===null||o===void 0?void 0:o.querySelector(`[data-name="${s}"]`)}function j(o){if(e.type==="card")return;const{value:s}=O;if(s&&o){const w=`${m.value}-tabs-bar--disabled`,{barWidth:T,placement:H}=e;if(o.dataset.disabled==="true"?s.classList.add(w):s.classList.remove(w),["top","bottom"].includes(H)){if(K(["top","maxHeight","height"]),typeof T=="number"&&o.offsetWidth>=T){const n=Math.floor((o.offsetWidth-T)/2)+o.offsetLeft;s.style.left=`${n}px`,s.style.maxWidth=`${T}px`}else s.style.left=`${o.offsetLeft}px`,s.style.maxWidth=`${o.offsetWidth}px`;s.style.width="8192px",s.offsetWidth}else{if(K(["left","maxWidth","width"]),typeof T=="number"&&o.offsetHeight>=T){const n=Math.floor((o.offsetHeight-T)/2)+o.offsetTop;s.style.top=`${n}px`,s.style.maxHeight=`${T}px`}else s.style.top=`${o.offsetTop}px`,s.style.maxHeight=`${o.offsetHeight}px`;s.style.height="8192px",s.offsetHeight}}}function K(o){const{value:s}=O;if(s)for(const w of o)s.style[w]=""}function J(){if(e.type==="card")return;const o=h();o&&j(o)}function te(o){var s;const w=(s=R.value)===null||s===void 0?void 0:s.$el;if(!w)return;const T=h();if(!T)return;const{scrollLeft:H,offsetWidth:n}=w,{offsetLeft:u,offsetWidth:D}=T;H>u?w.scrollTo({top:0,left:u,behavior:"smooth"}):u+D>H+n&&w.scrollTo({top:0,left:u+D-n,behavior:"smooth"})}const ne=P(null);let X=0,Y=null;function we(o){const s=ne.value;if(s){X=o.getBoundingClientRect().height;const w=`${X}px`,T=()=>{s.style.height=w,s.style.maxHeight=w};Y?(T(),Y(),Y=null):Y=T}}function ye(o){const s=ne.value;if(s){const w=o.getBoundingClientRect().height,T=()=>{document.body.offsetHeight,s.style.maxHeight=`${w}px`,s.style.height=`${Math.max(X,w)}px`};Y?(Y(),Y=null,T()):Y=T}}function ue(){const o=ne.value;o&&(o.style.maxHeight="",o.style.height="")}const pe={value:[]},ie=P("next");function le(o){const s=V.value;let w="next";for(const T of pe.value){if(T===s)break;if(T===o){w="prev";break}}ie.value=w,ae(o)}function ae(o){const{onActiveNameChange:s,onUpdateValue:w,"onUpdate:value":T}=e;s&&q(s,o),w&&q(w,o),T&&q(T,o),z.value=o}function Ce(o){const{onClose:s}=e;s&&q(s,o)}function Se(){const{value:o}=O;if(!o)return;const s="transition-disabled";o.classList.add(s),J(),o.classList.remove(s)}let Re=0;function Ae(o){var s;if(o.contentRect.width===0&&o.contentRect.height===0||Re===o.contentRect.width)return;Re=o.contentRect.width;const{type:w}=e;(w==="line"||w==="bar")&&Se(),w!=="segment"&&fe((s=R.value)===null||s===void 0?void 0:s.$el)}const Me=Qe(Ae,64);xe([()=>e.justifyContent,()=>e.size],()=>{Ne(()=>{const{type:o}=e;(o==="line"||o==="bar")&&Se()})});const se=P(!1);function Te(o){var s;const{target:w,contentRect:{width:T}}=o,H=w.parentElement.offsetWidth;if(!se.value)H<T&&(se.value=!0);else{const{value:n}=C;if(!n)return;H-T>n.$el.offsetWidth&&(se.value=!1)}fe((s=R.value)===null||s===void 0?void 0:s.$el)}const de=Qe(Te,64);function Z(){const{onAdd:o}=e;o&&o(),Ne(()=>{const s=h(),{value:w}=R;!s||!w||w.scrollTo({left:s.offsetLeft,top:0,behavior:"smooth"})})}function fe(o){if(!o)return;const{placement:s}=e;if(s==="top"||s==="bottom"){const{scrollLeft:w,scrollWidth:T,offsetWidth:H}=o;x.value=w<=0,_.value=w+H>=T}else{const{scrollTop:w,scrollHeight:T,offsetHeight:H}=o;x.value=w<=0,_.value=w+H>=T}}const be=Qe(o=>{fe(o.target)},64);Tn(ct,{triggerRef:ee(e,"trigger"),tabStyleRef:ee(e,"tabStyle"),paneClassRef:ee(e,"paneClass"),paneStyleRef:ee(e,"paneStyle"),mergedClsPrefixRef:m,typeRef:ee(e,"type"),closableRef:ee(e,"closable"),valueRef:V,tabChangeIdRef:L,onBeforeLeaveRef:ee(e,"onBeforeLeave"),activateTab:le,handleClose:Ce,handleAdd:Z}),On(()=>{J(),te()}),Tt(()=>{const{value:o}=F;if(!o)return;const{value:s}=m,w=`${s}-tabs-nav-scroll-wrapper--shadow-start`,T=`${s}-tabs-nav-scroll-wrapper--shadow-end`;x.value?o.classList.remove(w):o.classList.add(w),_.value?o.classList.remove(T):o.classList.add(T)});const Oe=P(null);xe(V,()=>{if(e.type==="segment"){const o=Oe.value;o&&Ne(()=>{o.classList.add("transition-disabled"),o.offsetWidth,o.classList.remove("transition-disabled")})}});const ge={syncBarPosition:()=>{J()}},he=U(()=>{const{value:o}=I,{type:s}=e,w={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[s],T=`${o}${w}`,{self:{barColor:H,closeIconColor:n,closeIconColorHover:u,closeIconColorPressed:D,tabColor:ze,tabBorderColor:Ie,paneTextColor:ke,tabFontWeight:We,tabBorderRadius:Ee,tabFontWeightActive:$e,colorSegment:Pe,fontWeightStrong:Fe,tabColorSegment:Le,closeSize:je,closeIconSize:Be,closeColorHover:re,closeColorPressed:t,closeBorderRadius:d,[Q("panePadding",o)]:y,[Q("tabPadding",T)]:W,[Q("tabPaddingVertical",T)]:A,[Q("tabGap",T)]:k,[Q("tabGap",`${T}Vertical`)]:M,[Q("tabTextColor",s)]:G,[Q("tabTextColorActive",s)]:_e,[Q("tabTextColorHover",s)]:De,[Q("tabTextColorDisabled",s)]:Ge,[Q("tabFontSize",o)]:Xe},common:{cubicBezierEaseInOut:Ye}}=S.value;return{"--n-bezier":Ye,"--n-color-segment":Pe,"--n-bar-color":H,"--n-tab-font-size":Xe,"--n-tab-text-color":G,"--n-tab-text-color-active":_e,"--n-tab-text-color-disabled":Ge,"--n-tab-text-color-hover":De,"--n-pane-text-color":ke,"--n-tab-border-color":Ie,"--n-tab-border-radius":Ee,"--n-close-size":je,"--n-close-icon-size":Be,"--n-close-color-hover":re,"--n-close-color-pressed":t,"--n-close-border-radius":d,"--n-close-icon-color":n,"--n-close-icon-color-hover":u,"--n-close-icon-color-pressed":D,"--n-tab-color":ze,"--n-tab-font-weight":We,"--n-tab-font-weight-active":$e,"--n-tab-padding":W,"--n-tab-padding-vertical":A,"--n-tab-gap":k,"--n-tab-gap-vertical":M,"--n-pane-padding-left":He(y,"left"),"--n-pane-padding-right":He(y,"right"),"--n-pane-padding-top":He(y,"top"),"--n-pane-padding-bottom":He(y,"bottom"),"--n-font-weight-strong":Fe,"--n-tab-color-segment":Le}}),oe=l?st("tabs",U(()=>`${I.value[0]}${e.type[0]}`),he,e):void 0;return Object.assign({mergedClsPrefix:m,mergedValue:V,renderedNames:new Set,tabsRailElRef:Oe,tabsPaneWrapperRef:ne,tabsElRef:v,barElRef:O,addTabInstRef:C,xScrollInstRef:R,scrollWrapperElRef:F,addTabFixed:se,tabWrapperStyle:$,handleNavResize:Me,mergedSize:I,handleScroll:be,handleTabsResize:de,cssVars:l?void 0:he,themeClass:oe==null?void 0:oe.themeClass,animationDirection:ie,renderNameListRef:pe,onAnimationBeforeLeave:we,onAnimationEnter:ye,onAnimationAfterEnter:ue,onRender:oe==null?void 0:oe.onRender},ge)},render(){const{mergedClsPrefix:e,type:a,placement:f,addTabFixed:b,addable:c,mergedSize:p,renderNameListRef:m,onRender:l,paneWrapperClass:S,paneWrapperStyle:v,$slots:{default:O,prefix:F,suffix:C}}=this;l==null||l();const R=O?Ue(O()).filter($=>$.type.__TAB_PANE__===!0):[],x=O?Ue(O()).filter($=>$.type.__TAB__===!0):[],_=!x.length,I=a==="card",B=a==="segment",z=!I&&!B&&this.justifyContent;m.value=[];const V=()=>{const $=i("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},z?null:i("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),_?R.map((h,j)=>(m.value.push(h.props.name),tt(i(lt,Object.assign({},h.props,{internalCreatedByPane:!0,internalLeftPadded:j!==0&&(!z||z==="center"||z==="start"||z==="end")}),h.children?{default:h.children.tab}:void 0)))):x.map((h,j)=>(m.value.push(h.props.name),tt(j!==0&&!z?yt(h):h))),!b&&c&&I?wt(c,(_?R.length:x.length)!==0):null,z?null:i("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return i("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},I&&c?i(ht,{onResize:this.handleTabsResize},{default:()=>$}):$,I?i("div",{class:`${e}-tabs-pad`}):null,I?null:i("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},L=B?"top":f;return i("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${a}-type`,`${e}-tabs--${p}-size`,z&&`${e}-tabs--flex`,`${e}-tabs--${L}`],style:this.cssVars},i("div",{class:[`${e}-tabs-nav--${a}-type`,`${e}-tabs-nav--${L}`,`${e}-tabs-nav`]},bt(F,$=>$&&i("div",{class:`${e}-tabs-nav__prefix`},$)),B?i("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},_?R.map(($,h)=>(m.value.push($.props.name),i(lt,Object.assign({},$.props,{internalCreatedByPane:!0,internalLeftPadded:h!==0}),$.children?{default:$.children.tab}:void 0))):x.map(($,h)=>(m.value.push($.props.name),h===0?$:yt($)))):i(ht,{onResize:this.handleNavResize},{default:()=>i("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(L)?i(En,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:V}):i("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},V()))}),b&&c&&I?wt(c,!0):null,bt(C,$=>$&&i("div",{class:`${e}-tabs-nav__suffix`},$))),_&&(this.animated&&(L==="top"||L==="bottom")?i("div",{ref:"tabsPaneWrapperRef",style:v,class:[`${e}-tabs-pane-wrapper`,S]},xt(R,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):xt(R,this.mergedValue,this.renderedNames)))}});function xt(e,a,f,b,c,p,m){const l=[];return e.forEach(S=>{const{name:v,displayDirective:O,"display-directive":F}=S.props,C=x=>O===x||F===x,R=a===v;if(S.key!==void 0&&(S.key=v),R||C("show")||C("show:lazy")&&f.has(v)){f.has(v)||f.add(v);const x=!C("if");l.push(x?zt(S,[[$t,R]]):S)}}),m?i(zn,{name:`${m}-transition`,onBeforeLeave:b,onEnter:c,onAfterEnter:p},{default:()=>l}):l}function wt(e,a){return i(lt,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof e=="object"&&e.disabled})}function yt(e){const a=$n(e);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function tt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{fa as N,ba as a,va as b,ha as c,In as g};
