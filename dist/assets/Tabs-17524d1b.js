import{j as ce,r as z,bc as wt,bd as yt,v as r,bg as et,K as Ct,ay as Ne,ah as Xt,bP as Yt,bQ as Ue,bR as qt,f as V,g as b,J as j,ac as tt,Z as W,m as ve,t as Q,bS as Jt,n as N,a5 as Ve,w as xe,L as St,R as ee,p as it,bT as Zt,bU as Qt,W as en,a7 as Rt,i as tn,u as lt,bV as nn,l as nt,bk as an,bW as at,k as on,q as rn,s as ot,V as ln,x as sn,z as dn,T as cn,A as Tt,b5 as Ot,B as dt,D as un,bX as fn,E as q,F as bn,bY as hn,bt as vn,bZ as pn,aZ as ct,bD as He,G as gn,P as zt,bL as mn,a1 as xn,bm as wn,bu as yn,bz as Cn,b_ as Sn,a3 as Rn,b$ as Tn,O as ut,U as ft,c0 as On,c1 as zn}from"./index-503fc958.js";import{u as $n,d as Xe,c as Pn,e as Fn,p as Ye,f as Bn,N as _n,h as bt,a as An}from"./utils-47d9f341.js";function Mn(e,a="default",c=[]){const d=e.$slots[a];return d===void 0?c:d()}function In(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const kn=et(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[et("&::-webkit-scrollbar",{width:0,height:0})]),Wn=ce({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=z(null);function a(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const c=wt();return kn.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:yt,ssr:c}),Object.assign({selfRef:e,handleWheel:a},{scrollTo(...d){var p;(p=e.value)===null||p===void 0||p.scrollTo(...d)}})},render(){return r("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),me="v-hidden",En=et("[v-hidden]",{display:"none!important"}),ht=ce({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:a}){const c=z(null),f=z(null);function d(){const{value:m}=c,{getCounter:i,getTail:w}=e;let v;if(i!==void 0?v=i():v=f.value,!m||!v)return;v.hasAttribute(me)&&v.removeAttribute(me);const{children:$}=m,S=m.offsetWidth,x=[],T=a.tail?w==null?void 0:w():null;let g=T?T.offsetWidth:0,k=!1;const F=m.children.length-(a.tail?1:0);for(let h=0;h<F-1;++h){if(h<0)continue;const B=$[h];if(k){B.hasAttribute(me)||B.setAttribute(me,"");continue}else B.hasAttribute(me)&&B.removeAttribute(me);const E=B.offsetWidth;if(g+=E,x[h]=E,g>S){const{updateCounter:K}=e;for(let y=h;y>=0;--y){const D=F-1-y;K!==void 0?K(D):v.textContent=`${D}`;const H=v.offsetWidth;if(g-=x[y],g+H<=S||y===0){k=!0,h=y-1,T&&(h===-1?(T.style.maxWidth=`${S-H}px`,T.style.boxSizing="border-box"):T.style.maxWidth="");break}}}}const{onUpdateOverflow:P}=e;k?P!==void 0&&P(!0):(P!==void 0&&P(!1),v.setAttribute(me,""))}const p=wt();return En.mount({id:"vueuc/overflow",head:!0,anchorMetaName:yt,ssr:p}),Ct(d),{selfRef:c,counterRef:f,sync:d}},render(){const{$slots:e}=this;return Ne(this.sync),r("div",{class:"v-overflow",ref:"selfRef"},[Xt(e,"default"),e.counter?e.counter():r("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});var Ln=/\s/;function jn(e){for(var a=e.length;a--&&Ln.test(e.charAt(a)););return a}var Dn=/^\s+/;function Vn(e){return e&&e.slice(0,jn(e)+1).replace(Dn,"")}var vt=0/0,Nn=/^[-+]0x[0-9a-f]+$/i,Hn=/^0b[01]+$/i,Un=/^0o[0-7]+$/i,Kn=parseInt;function pt(e){if(typeof e=="number")return e;if(Yt(e))return vt;if(Ue(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=Ue(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=Vn(e);var c=Hn.test(e);return c||Un.test(e)?Kn(e.slice(2),c?2:8):Nn.test(e)?vt:+e}var Gn=function(){return qt.Date.now()};const qe=Gn;var Xn="Expected a function",Yn=Math.max,qn=Math.min;function Jn(e,a,c){var f,d,p,m,i,w,v=0,$=!1,S=!1,x=!0;if(typeof e!="function")throw new TypeError(Xn);a=pt(a)||0,Ue(c)&&($=!!c.leading,S="maxWait"in c,p=S?Yn(pt(c.maxWait)||0,a):p,x="trailing"in c?!!c.trailing:x);function T(y){var D=f,H=d;return f=d=void 0,v=y,m=e.apply(H,D),m}function g(y){return v=y,i=setTimeout(P,a),$?T(y):m}function k(y){var D=y-w,H=y-v,J=a-D;return S?qn(J,p-H):J}function F(y){var D=y-w,H=y-v;return w===void 0||D>=a||D<0||S&&H>=p}function P(){var y=qe();if(F(y))return h(y);i=setTimeout(P,k(y))}function h(y){return i=void 0,x&&f?T(y):(f=d=void 0,m)}function B(){i!==void 0&&clearTimeout(i),v=0,f=w=d=i=void 0}function E(){return i===void 0?m:h(qe())}function K(){var y=qe(),D=F(y);if(f=arguments,d=this,w=y,D){if(i===void 0)return g(w);if(S)return clearTimeout(i),i=setTimeout(P,a),T(w)}return i===void 0&&(i=setTimeout(P,a)),m}return K.cancel=B,K.flush=E,K}var Zn="Expected a function";function Je(e,a,c){var f=!0,d=!0;if(typeof e!="function")throw new TypeError(Zn);return Ue(c)&&(f="leading"in c?!!c.leading:f,d="trailing"in c?!!c.trailing:d),Jn(e,a,{leading:f,maxWait:a,trailing:d})}const Qn=ce({name:"Add",render(){return r("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ea=V([b("base-selection",`
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
 `,[b("base-loading",`
 color: var(--n-loading-color);
 `),b("base-selection-tags","min-height: var(--n-height);"),j("border, state-border",`
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
 `),j("state-border",`
 z-index: 1;
 border-color: #0000;
 `),b("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[j("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),b("base-selection-overlay",`
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
 `,[j("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),b("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[j("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),b("base-selection-tags",`
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
 `),b("base-selection-label",`
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
 `,[b("base-selection-input",`
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
 `,[j("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),j("render-label",`
 color: var(--n-text-color);
 `)]),tt("disabled",[V("&:hover",[j("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),W("focus",[j("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),W("active",[j("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),b("base-selection-label","background-color: var(--n-color-active);"),b("base-selection-tags","background-color: var(--n-color-active);")])]),W("disabled","cursor: not-allowed;",[j("arrow",`
 color: var(--n-arrow-color-disabled);
 `),b("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[b("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),j("render-label",`
 color: var(--n-text-color-disabled);
 `)]),b("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),b("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),b("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[j("input",`
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
 `),j("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>W(`${e}-status`,[j("state-border",`border: var(--n-border-${e});`),tt("disabled",[V("&:hover",[j("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),W("active",[j("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),b("base-selection-label",`background-color: var(--n-color-active-${e});`),b("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),W("focus",[j("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),b("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),b("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[V("&:last-child","padding-right: 0;"),b("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[j("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ta=ce({name:"InternalSelection",props:Object.assign(Object.assign({},ve.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const a=z(null),c=z(null),f=z(null),d=z(null),p=z(null),m=z(null),i=z(null),w=z(null),v=z(null),$=z(null),S=z(!1),x=z(!1),T=z(!1),g=ve("InternalSelection","-internal-selection",ea,Jt,e,Q(e,"clsPrefix")),k=N(()=>e.clearable&&!e.disabled&&(T.value||e.active)),F=N(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ve(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),P=N(()=>{const n=e.selectedOption;if(n)return n[e.labelField]}),h=N(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function B(){var n;const{value:u}=a;if(u){const{value:L}=c;L&&(L.style.width=`${u.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=v.value)===null||n===void 0||n.sync()))}}function E(){const{value:n}=$;n&&(n.style.display="none")}function K(){const{value:n}=$;n&&(n.style.display="inline-block")}xe(Q(e,"active"),n=>{n||E()}),xe(Q(e,"pattern"),()=>{e.multiple&&Ne(B)});function y(n){const{onFocus:u}=e;u&&u(n)}function D(n){const{onBlur:u}=e;u&&u(n)}function H(n){const{onDeleteOption:u}=e;u&&u(n)}function J(n){const{onClear:u}=e;u&&u(n)}function te(n){const{onPatternInput:u}=e;u&&u(n)}function ne(n){var u;(!n.relatedTarget||!(!((u=f.value)===null||u===void 0)&&u.contains(n.relatedTarget)))&&y(n)}function G(n){var u;!((u=f.value)===null||u===void 0)&&u.contains(n.relatedTarget)||D(n)}function Y(n){J(n)}function we(){T.value=!0}function ye(){T.value=!1}function ue(n){!e.active||!e.filterable||n.target!==c.value&&n.preventDefault()}function pe(n){H(n)}function ie(n){if(n.key==="Backspace"&&!le.value&&!e.pattern.length){const{selectedOptions:u}=e;u!=null&&u.length&&pe(u[u.length-1])}}const le=z(!1);let ae=null;function Ce(n){const{value:u}=a;if(u){const L=n.target.value;u.textContent=L,B()}e.ignoreComposition&&le.value?ae=n:te(n)}function Se(){le.value=!0}function Re(){le.value=!1,e.ignoreComposition&&te(ae),ae=null}function Ae(n){var u;x.value=!0,(u=e.onPatternFocus)===null||u===void 0||u.call(e,n)}function Me(n){var u;x.value=!1,(u=e.onPatternBlur)===null||u===void 0||u.call(e,n)}function se(){var n,u;if(e.filterable)x.value=!1,(n=m.value)===null||n===void 0||n.blur(),(u=c.value)===null||u===void 0||u.blur();else if(e.multiple){const{value:L}=d;L==null||L.blur()}else{const{value:L}=p;L==null||L.blur()}}function Te(){var n,u,L;e.filterable?(x.value=!1,(n=m.value)===null||n===void 0||n.focus()):e.multiple?(u=d.value)===null||u===void 0||u.focus():(L=p.value)===null||L===void 0||L.focus()}function de(){const{value:n}=c;n&&(K(),n.focus())}function Z(){const{value:n}=c;n&&n.blur()}function fe(n){const{value:u}=i;u&&u.setTextContent(`+${n}`)}function be(){const{value:n}=w;return n}function Oe(){return c.value}let ge=null;function he(){ge!==null&&window.clearTimeout(ge)}function oe(){e.disabled||e.active||(he(),ge=window.setTimeout(()=>{h.value&&(S.value=!0)},100))}function o(){he()}function l(n){n||(he(),S.value=!1)}xe(h,n=>{n||(S.value=!1)}),Ct(()=>{St(()=>{const n=m.value;n&&(n.tabIndex=e.disabled||x.value?-1:0)})}),$n(f,e.onResize);const{inlineThemeDisabled:R}=e,O=N(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:u},self:{borderRadius:L,color:ze,placeholderColor:Ie,textColor:ke,paddingSingle:We,paddingMultiple:Ee,caretColor:$e,colorDisabled:Pe,textColorDisabled:Fe,placeholderColorDisabled:Le,colorActive:je,boxShadowFocus:Be,boxShadowActive:re,boxShadowHover:t,border:s,borderFocus:C,borderHover:I,borderActive:_,arrowColor:M,arrowColorDisabled:A,loadingColor:U,colorActiveWarning:_e,boxShadowFocusWarning:De,boxShadowActiveWarning:Ke,boxShadowHoverWarning:Ge,borderWarning:Pt,borderFocusWarning:Ft,borderHoverWarning:Bt,borderActiveWarning:_t,colorActiveError:At,boxShadowFocusError:Mt,boxShadowActiveError:It,boxShadowHoverError:kt,borderError:Wt,borderFocusError:Et,borderHoverError:Lt,borderActiveError:jt,clearColor:Dt,clearColorHover:Vt,clearColorPressed:Nt,clearSize:Ht,arrowSize:Ut,[ee("height",n)]:Kt,[ee("fontSize",n)]:Gt}}=g.value;return{"--n-bezier":u,"--n-border":s,"--n-border-active":_,"--n-border-focus":C,"--n-border-hover":I,"--n-border-radius":L,"--n-box-shadow-active":re,"--n-box-shadow-focus":Be,"--n-box-shadow-hover":t,"--n-caret-color":$e,"--n-color":ze,"--n-color-active":je,"--n-color-disabled":Pe,"--n-font-size":Gt,"--n-height":Kt,"--n-padding-single":We,"--n-padding-multiple":Ee,"--n-placeholder-color":Ie,"--n-placeholder-color-disabled":Le,"--n-text-color":ke,"--n-text-color-disabled":Fe,"--n-arrow-color":M,"--n-arrow-color-disabled":A,"--n-loading-color":U,"--n-color-active-warning":_e,"--n-box-shadow-focus-warning":De,"--n-box-shadow-active-warning":Ke,"--n-box-shadow-hover-warning":Ge,"--n-border-warning":Pt,"--n-border-focus-warning":Ft,"--n-border-hover-warning":Bt,"--n-border-active-warning":_t,"--n-color-active-error":At,"--n-box-shadow-focus-error":Mt,"--n-box-shadow-active-error":It,"--n-box-shadow-hover-error":kt,"--n-border-error":Wt,"--n-border-focus-error":Et,"--n-border-hover-error":Lt,"--n-border-active-error":jt,"--n-clear-size":Ht,"--n-clear-color":Dt,"--n-clear-color-hover":Vt,"--n-clear-color-pressed":Nt,"--n-arrow-size":Ut}}),X=R?it("internal-selection",N(()=>e.size[0]),O,e):void 0;return{mergedTheme:g,mergedClearable:k,patternInputFocused:x,filterablePlaceholder:F,label:P,selected:h,showTagsPanel:S,isComposing:le,counterRef:i,counterWrapperRef:w,patternInputMirrorRef:a,patternInputRef:c,selfRef:f,multipleElRef:d,singleElRef:p,patternInputWrapperRef:m,overflowRef:v,inputTagElRef:$,handleMouseDown:ue,handleFocusin:ne,handleClear:Y,handleMouseEnter:we,handleMouseLeave:ye,handleDeleteOption:pe,handlePatternKeyDown:ie,handlePatternInputInput:Ce,handlePatternInputBlur:Me,handlePatternInputFocus:Ae,handleMouseEnterCounter:oe,handleMouseLeaveCounter:o,handleFocusout:G,handleCompositionEnd:Re,handleCompositionStart:Se,onPopoverUpdateShow:l,focus:Te,focusInput:de,blur:se,blurInput:Z,updateCounter:fe,getCounter:be,getTail:Oe,renderLabel:e.renderLabel,cssVars:R?void 0:O,themeClass:X==null?void 0:X.themeClass,onRender:X==null?void 0:X.onRender}},render(){const{status:e,multiple:a,size:c,disabled:f,filterable:d,maxTagCount:p,bordered:m,clsPrefix:i,onRender:w,renderTag:v,renderLabel:$}=this;w==null||w();const S=p==="responsive",x=typeof p=="number",T=S||x,g=r(Qt,null,{default:()=>r(Zt,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var F,P;return(P=(F=this.$slots).arrow)===null||P===void 0?void 0:P.call(F)}})});let k;if(a){const{labelField:F}=this,P=G=>r("div",{class:`${i}-base-selection-tag-wrapper`,key:G.value},v?v({option:G,handleClose:()=>this.handleDeleteOption(G)}):r(Xe,{size:c,closable:!G.disabled,disabled:f,onClose:()=>this.handleDeleteOption(G),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>$?$(G,!0):Ve(G[F],G,!0)})),h=()=>(x?this.selectedOptions.slice(0,p):this.selectedOptions).map(P),B=d?r("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:f,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,E=S?()=>r("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(Xe,{size:c,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:f})):void 0;let K;if(x){const G=this.selectedOptions.length-p;G>0&&(K=r("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},r(Xe,{size:c,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:f},{default:()=>`+${G}`})))}const y=S?d?r(ht,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:h,counter:E,tail:()=>B}):r(ht,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:h,counter:E}):x?h().concat(K):h(),D=T?()=>r("div",{class:`${i}-base-selection-popover`},S?h():this.selectedOptions.map(P)):void 0,H=T?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,te=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},r("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,ne=d?r("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},y,S?null:B,g):r("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:f?void 0:0},y,g);k=r(Rt,null,T?r(en,Object.assign({},H,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ne,default:D}):ne,te)}else if(d){const F=this.pattern||this.isComposing,P=this.active?!F:!this.selected,h=this.active?!1:this.selected;k=r("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:f,disabled:f,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),h?r("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},r("div",{class:`${i}-base-selection-overlay__wrapper`},v?v({option:this.selectedOption,handleClose:()=>{}}):$?$(this.selectedOption,!0):Ve(this.label,this.selectedOption,!0))):null,P?r("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else k=r("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${i}-base-selection-input`,title:In(this.label),key:"input"},r("div",{class:`${i}-base-selection-input__content`},v?v({option:this.selectedOption,handleClose:()=>{}}):$?$(this.selectedOption,!0):Ve(this.label,this.selectedOption,!0))):r("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),g);return r("div",{ref:"selfRef",class:[`${i}-base-selection`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},k,m?r("div",{class:`${i}-base-selection__border`}):null,m?r("div",{class:`${i}-base-selection__state-border`}):null)}}),na=V([b("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),b("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[tn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),aa=Object.assign(Object.assign({},ve.props),{to:ot.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),ua=ce({name:"Select",props:aa,setup(e){const{mergedClsPrefixRef:a,mergedBorderedRef:c,namespaceRef:f,inlineThemeDisabled:d}=lt(e),p=ve("Select","-select",na,nn,e,a),m=z(e.defaultValue),i=Q(e,"value"),w=nt(i,m),v=z(!1),$=z(""),S=N(()=>{const{valueField:t,childrenField:s}=e,C=An(t,s);return Pn(G.value,C)}),x=N(()=>Fn(te.value,e.valueField,e.childrenField)),T=z(!1),g=nt(Q(e,"show"),T),k=z(null),F=z(null),P=z(null),{localeRef:h}=an("Select"),B=N(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:h.value.placeholder}),E=at(e,["items","options"]),K=[],y=z([]),D=z([]),H=z(new Map),J=N(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:s,valueField:C}=e;return I=>({[s]:String(I),[C]:I})}return t===!1?!1:s=>Object.assign(t(s),{value:s})}),te=N(()=>D.value.concat(y.value).concat(E.value)),ne=N(()=>{const{filter:t}=e;if(t)return t;const{labelField:s,valueField:C}=e;return(I,_)=>{if(!_)return!1;const M=_[s];if(typeof M=="string")return Ye(I,M);const A=_[C];return typeof A=="string"?Ye(I,A):typeof A=="number"?Ye(I,String(A)):!1}}),G=N(()=>{if(e.remote)return E.value;{const{value:t}=te,{value:s}=$;return!s.length||!e.filterable?t:Bn(t,ne.value,s,e.childrenField)}});function Y(t){const s=e.remote,{value:C}=H,{value:I}=x,{value:_}=J,M=[];return t.forEach(A=>{if(I.has(A))M.push(I.get(A));else if(s&&C.has(A))M.push(C.get(A));else if(_){const U=_(A);U&&M.push(U)}}),M}const we=N(()=>{if(e.multiple){const{value:t}=w;return Array.isArray(t)?Y(t):[]}return null}),ye=N(()=>{const{value:t}=w;return!e.multiple&&!Array.isArray(t)?t===null?null:Y([t])[0]||null:null}),ue=on(e),{mergedSizeRef:pe,mergedDisabledRef:ie,mergedStatusRef:le}=ue;function ae(t,s){const{onChange:C,"onUpdate:value":I,onUpdateValue:_}=e,{nTriggerFormChange:M,nTriggerFormInput:A}=ue;C&&q(C,t,s),_&&q(_,t,s),I&&q(I,t,s),m.value=t,M(),A()}function Ce(t){const{onBlur:s}=e,{nTriggerFormBlur:C}=ue;s&&q(s,t),C()}function Se(){const{onClear:t}=e;t&&q(t)}function Re(t){const{onFocus:s,showOnFocus:C}=e,{nTriggerFormFocus:I}=ue;s&&q(s,t),I(),C&&de()}function Ae(t){const{onSearch:s}=e;s&&q(s,t)}function Me(t){const{onScroll:s}=e;s&&q(s,t)}function se(){var t;const{remote:s,multiple:C}=e;if(s){const{value:I}=H;if(C){const{valueField:_}=e;(t=we.value)===null||t===void 0||t.forEach(M=>{I.set(M[_],M)})}else{const _=ye.value;_&&I.set(_[e.valueField],_)}}}function Te(t){const{onUpdateShow:s,"onUpdate:show":C}=e;s&&q(s,t),C&&q(C,t),T.value=t}function de(){ie.value||(Te(!0),T.value=!0,e.filterable&&Fe())}function Z(){Te(!1)}function fe(){$.value="",D.value=K}const be=z(!1);function Oe(){e.filterable&&(be.value=!0)}function ge(){e.filterable&&(be.value=!1,g.value||fe())}function he(){ie.value||(g.value?e.filterable?Fe():Z():de())}function oe(t){var s,C;!((C=(s=P.value)===null||s===void 0?void 0:s.selfRef)===null||C===void 0)&&C.contains(t.relatedTarget)||(v.value=!1,Ce(t),Z())}function o(t){Re(t),v.value=!0}function l(t){v.value=!0}function R(t){var s;!((s=k.value)===null||s===void 0)&&s.$el.contains(t.relatedTarget)||(v.value=!1,Ce(t),Z())}function O(){var t;(t=k.value)===null||t===void 0||t.focus(),Z()}function X(t){var s;g.value&&(!((s=k.value)===null||s===void 0)&&s.$el.contains(un(t))||Z())}function n(t){if(!Array.isArray(t))return[];if(J.value)return Array.from(t);{const{remote:s}=e,{value:C}=x;if(s){const{value:I}=H;return t.filter(_=>C.has(_)||I.has(_))}else return t.filter(I=>C.has(I))}}function u(t){L(t.rawNode)}function L(t){if(ie.value)return;const{tag:s,remote:C,clearFilterAfterSelect:I,valueField:_}=e;if(s&&!C){const{value:M}=D,A=M[0]||null;if(A){const U=y.value;U.length?U.push(A):y.value=[A],D.value=K}}if(C&&H.value.set(t[_],t),e.multiple){const M=n(w.value),A=M.findIndex(U=>U===t[_]);if(~A){if(M.splice(A,1),s&&!C){const U=ze(t[_]);~U&&(y.value.splice(U,1),I&&($.value=""))}}else M.push(t[_]),I&&($.value="");ae(M,Y(M))}else{if(s&&!C){const M=ze(t[_]);~M?y.value=[y.value[M]]:y.value=K}Pe(),Z(),ae(t[_],t)}}function ze(t){return y.value.findIndex(C=>C[e.valueField]===t)}function Ie(t){g.value||de();const{value:s}=t.target;$.value=s;const{tag:C,remote:I}=e;if(Ae(s),C&&!I){if(!s){D.value=K;return}const{onCreate:_}=e,M=_?_(s):{[e.labelField]:s,[e.valueField]:s},{valueField:A}=e;E.value.some(U=>U[A]===M[A])||y.value.some(U=>U[A]===M[A])?D.value=K:D.value=[M]}}function ke(t){t.stopPropagation();const{multiple:s}=e;!s&&e.filterable&&Z(),Se(),s?ae([],[]):ae(null,null)}function We(t){!bt(t,"action")&&!bt(t,"empty")&&t.preventDefault()}function Ee(t){Me(t)}function $e(t){var s,C,I,_,M;switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((s=k.value)===null||s===void 0)&&s.isComposing)){if(g.value){const A=(C=P.value)===null||C===void 0?void 0:C.getPendingTmNode();A?u(A):e.filterable||(Z(),Pe())}else if(de(),e.tag&&be.value){const A=D.value[0];if(A){const U=A[e.valueField],{value:_e}=w;e.multiple&&Array.isArray(_e)&&_e.some(De=>De===U)||L(A)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;g.value&&((I=P.value)===null||I===void 0||I.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;g.value?(_=P.value)===null||_===void 0||_.next():de();break;case"Escape":g.value&&(fn(t),Z()),(M=k.value)===null||M===void 0||M.focus();break}}function Pe(){var t;(t=k.value)===null||t===void 0||t.focus()}function Fe(){var t;(t=k.value)===null||t===void 0||t.focusInput()}function Le(){var t;g.value&&((t=F.value)===null||t===void 0||t.syncPosition())}se(),xe(Q(e,"options"),se);const je={focus:()=>{var t;(t=k.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=k.value)===null||t===void 0||t.blur()}},Be=N(()=>{const{self:{menuBoxShadow:t}}=p.value;return{"--n-menu-box-shadow":t}}),re=d?it("select",void 0,Be,e):void 0;return Object.assign(Object.assign({},je),{mergedStatus:le,mergedClsPrefix:a,mergedBordered:c,namespace:f,treeMate:S,isMounted:rn(),triggerRef:k,menuRef:P,pattern:$,uncontrolledShow:T,mergedShow:g,adjustedTo:ot(e),uncontrolledValue:m,mergedValue:w,followerRef:F,localizedPlaceholder:B,selectedOption:ye,selectedOptions:we,mergedSize:pe,mergedDisabled:ie,focused:v,activeWithoutMenuOpen:be,inlineThemeDisabled:d,onTriggerInputFocus:Oe,onTriggerInputBlur:ge,handleTriggerOrMenuResize:Le,handleMenuFocus:l,handleMenuBlur:R,handleMenuTabOut:O,handleTriggerClick:he,handleToggle:u,handleDeleteOption:L,handlePatternInput:Ie,handleClear:ke,handleTriggerBlur:oe,handleTriggerFocus:o,handleKeydown:$e,handleMenuAfterLeave:fe,handleMenuClickOutside:X,handleMenuScroll:Ee,handleMenuKeydown:$e,handleMenuMousedown:We,mergedTheme:p,cssVars:d?void 0:Be,themeClass:re==null?void 0:re.themeClass,onRender:re==null?void 0:re.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(ln,null,{default:()=>[r(sn,null,{default:()=>r(ta,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,a;return[(a=(e=this.$slots).arrow)===null||a===void 0?void 0:a.call(e)]}})}),r(dn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ot.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(cn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,a,c;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Tt(r(_n,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(a=this.menuProps)===null||a===void 0?void 0:a.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(c=this.menuProps)===null||c===void 0?void 0:c.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var f,d;return[(d=(f=this.$slots).empty)===null||d===void 0?void 0:d.call(f)]},action:()=>{var f,d;return[(d=(f=this.$slots).action)===null||d===void 0?void 0:d.call(f)]}}),this.displayDirective==="show"?[[Ot,this.mergedShow],[dt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[dt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});let Ze;const oa=()=>{if(!bn)return!0;if(Ze===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),Ze=a}return Ze},ra=Object.assign(Object.assign({},ve.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),fa=ce({name:"Space",props:ra,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:c}=lt(e),f=ve("Space","-space",void 0,hn,e,a),d=vn("Space",c,a);return{useGap:oa(),rtlEnabled:d,mergedClsPrefix:a,margin:N(()=>{const{size:p}=e;if(Array.isArray(p))return{horizontal:p[0],vertical:p[1]};if(typeof p=="number")return{horizontal:p,vertical:p};const{self:{[ee("gap",p)]:m}}=f.value,{row:i,col:w}=pn(m);return{horizontal:ct(w),vertical:ct(i)}})}},render(){const{vertical:e,align:a,inline:c,justify:f,itemStyle:d,margin:p,wrap:m,mergedClsPrefix:i,rtlEnabled:w,useGap:v,wrapItem:$,internalUseGap:S}=this,x=He(Mn(this));if(!x.length)return null;const T=`${p.horizontal}px`,g=`${p.horizontal/2}px`,k=`${p.vertical}px`,F=`${p.vertical/2}px`,P=x.length-1,h=f.startsWith("space-");return r("div",{role:"none",class:[`${i}-space`,w&&`${i}-space--rtl`],style:{display:c?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(f)?"flex-"+f:f,flexWrap:!m||e?"nowrap":"wrap",marginTop:v||e?"":`-${F}`,marginBottom:v||e?"":`-${F}`,alignItems:a,gap:v?`${p.vertical}px ${p.horizontal}px`:""}},!$&&(v||S)?x:x.map((B,E)=>r("div",{role:"none",style:[d,{maxWidth:"100%"},v?"":e?{marginBottom:E!==P?k:""}:w?{marginLeft:h?f==="space-between"&&E===P?"":g:E!==P?T:"",marginRight:h?f==="space-between"&&E===0?"":g:"",paddingTop:F,paddingBottom:F}:{marginRight:h?f==="space-between"&&E===P?"":g:E!==P?T:"",marginLeft:h?f==="space-between"&&E===0?"":g:"",paddingTop:F,paddingBottom:F}]},B)))}}),st=gn("n-tabs"),$t={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ba=ce({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:$t,setup(e){const a=zt(st,null);return a||mn("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return r("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ia=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Cn($t,["displayDirective"])),rt=ce({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ia,setup(e){const{mergedClsPrefixRef:a,valueRef:c,typeRef:f,closableRef:d,tabStyleRef:p,tabChangeIdRef:m,onBeforeLeaveRef:i,triggerRef:w,handleAdd:v,activateTab:$,handleClose:S}=zt(st);return{trigger:w,mergedClosable:N(()=>{if(e.internalAddable)return!1;const{closable:x}=e;return x===void 0?d.value:x}),style:p,clsPrefix:a,value:c,type:f,handleClose(x){x.stopPropagation(),!e.disabled&&S(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){v();return}const{name:x}=e,T=++m.id;if(x!==c.value){const{value:g}=i;g?Promise.resolve(g(e.name,c.value)).then(k=>{k&&m.id===T&&$(x)}):$(x)}}}},render(){const{internalAddable:e,clsPrefix:a,name:c,disabled:f,label:d,tab:p,value:m,mergedClosable:i,style:w,trigger:v,$slots:{default:$}}=this,S=d??p;return r("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?r("div",{class:`${a}-tabs-tab-pad`}):null,r("div",Object.assign({key:c,"data-name":c,"data-disabled":f?!0:void 0},xn({class:[`${a}-tabs-tab`,m===c&&`${a}-tabs-tab--active`,f&&`${a}-tabs-tab--disabled`,i&&`${a}-tabs-tab--closable`,e&&`${a}-tabs-tab--addable`],onClick:v==="click"?this.activateTab:void 0,onMouseenter:v==="hover"?this.activateTab:void 0,style:e?void 0:w},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),r("span",{class:`${a}-tabs-tab__label`},e?r(Rt,null,r("div",{class:`${a}-tabs-tab__height-placeholder`}," "),r(wn,{clsPrefix:a},{default:()=>r(Qn,null)})):$?$():typeof S=="object"?S:Ve(S??c)),i&&this.type==="card"?r(yn,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:f}):null))}}),la=b("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[W("segment-type",[b("tabs-rail",[V("&.transition-disabled","color: red;",[b("tabs-tab",`
 transition: none;
 `)])])]),W("left, right",`
 flex-direction: row;
 `,[b("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),b("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),W("right",`
 flex-direction: row-reverse;
 `,[b("tabs-bar",`
 left: 0;
 `)]),W("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[b("tabs-bar",`
 top: 0;
 `)]),b("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[b("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[b("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[W("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),V("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),W("flex",[b("tabs-nav",{width:"100%"},[b("tabs-wrapper",{width:"100%"},[b("tabs-tab",{marginRight:0})])])]),b("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[j("prefix, suffix",`
 display: flex;
 align-items: center;
 `),j("prefix","padding-right: 16px;"),j("suffix","padding-left: 16px;")]),b("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[W("shadow-before",[V("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),W("shadow-after",[V("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),b("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[V("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),V("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),V("&::before",`
 left: 0;
 `),V("&::after",`
 right: 0;
 `)]),b("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),b("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),b("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),b("tabs-tab",`
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
 `,[W("disabled",{cursor:"not-allowed"}),j("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),j("label",`
 display: flex;
 align-items: center;
 `)]),b("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[V("&.transition-disabled",`
 transition: none;
 `),W("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),b("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),b("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[V("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),V("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),V("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),V("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),V("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),b("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),W("line-type, bar-type",[b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[V("&:hover",{color:"var(--n-tab-text-color-hover)"}),W("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),W("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),b("tabs-nav",[W("line-type",[j("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),W("card-type",[j("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[W("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[j("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),tt("disabled",[V("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),W("closable","padding-right: 6px;"),W("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),W("disabled","color: var(--n-tab-text-color-disabled);")]),b("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),W("left, right",[b("tabs-wrapper",`
 flex-direction: column;
 `,[b("tabs-tab-wrapper",`
 flex-direction: column;
 `,[b("tabs-tab-pad",`
 height: var(--n-tab-gap);
 width: 100%;
 `)])]),b("tabs-nav-scroll-content",`
 border-bottom: none;
 `)]),W("left",[b("tabs-nav-scroll-content",`
 box-sizing: border-box;
 border-right: 1px solid var(--n-tab-border-color);
 `)]),W("right",[b("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `)]),W("bottom",[b("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 border-bottom: none;
 `)])])]),sa=Object.assign(Object.assign({},ve.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ha=ce({name:"Tabs",props:sa,setup(e,{slots:a}){var c,f,d,p;const{mergedClsPrefixRef:m,inlineThemeDisabled:i}=lt(e),w=ve("Tabs","-tabs",la,Sn,e,m),v=z(null),$=z(null),S=z(null),x=z(null),T=z(null),g=z(!0),k=z(!0),F=at(e,["labelSize","size"]),P=at(e,["activeName","value"]),h=z((f=(c=P.value)!==null&&c!==void 0?c:e.defaultValue)!==null&&f!==void 0?f:a.default?(p=(d=He(a.default())[0])===null||d===void 0?void 0:d.props)===null||p===void 0?void 0:p.name:null),B=nt(P,h),E={id:0},K=N(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});xe(B,()=>{E.id=0,J(),te()});function y(){var o;const{value:l}=B;return l===null?null:(o=v.value)===null||o===void 0?void 0:o.querySelector(`[data-name="${l}"]`)}function D(o){if(e.type==="card")return;const{value:l}=$;if(l&&o){const R=`${m.value}-tabs-bar--disabled`,{barWidth:O,placement:X}=e;if(o.dataset.disabled==="true"?l.classList.add(R):l.classList.remove(R),["top","bottom"].includes(X)){if(H(["top","maxHeight","height"]),typeof O=="number"&&o.offsetWidth>=O){const n=Math.floor((o.offsetWidth-O)/2)+o.offsetLeft;l.style.left=`${n}px`,l.style.maxWidth=`${O}px`}else l.style.left=`${o.offsetLeft}px`,l.style.maxWidth=`${o.offsetWidth}px`;l.style.width="8192px",l.offsetWidth}else{if(H(["left","maxWidth","width"]),typeof O=="number"&&o.offsetHeight>=O){const n=Math.floor((o.offsetHeight-O)/2)+o.offsetTop;l.style.top=`${n}px`,l.style.maxHeight=`${O}px`}else l.style.top=`${o.offsetTop}px`,l.style.maxHeight=`${o.offsetHeight}px`;l.style.height="8192px",l.offsetHeight}}}function H(o){const{value:l}=$;if(l)for(const R of o)l.style[R]=""}function J(){if(e.type==="card")return;const o=y();o&&D(o)}function te(o){var l;const R=(l=T.value)===null||l===void 0?void 0:l.$el;if(!R)return;const O=y();if(!O)return;const{scrollLeft:X,offsetWidth:n}=R,{offsetLeft:u,offsetWidth:L}=O;X>u?R.scrollTo({top:0,left:u,behavior:"smooth"}):u+L>X+n&&R.scrollTo({top:0,left:u+L-n,behavior:"smooth"})}const ne=z(null);let G=0,Y=null;function we(o){const l=ne.value;if(l){G=o.getBoundingClientRect().height;const R=`${G}px`,O=()=>{l.style.height=R,l.style.maxHeight=R};Y?(O(),Y(),Y=null):Y=O}}function ye(o){const l=ne.value;if(l){const R=o.getBoundingClientRect().height,O=()=>{document.body.offsetHeight,l.style.maxHeight=`${R}px`,l.style.height=`${Math.max(G,R)}px`};Y?(Y(),Y=null,O()):Y=O}}function ue(){const o=ne.value;o&&(o.style.maxHeight="",o.style.height="")}const pe={value:[]},ie=z("next");function le(o){const l=B.value;let R="next";for(const O of pe.value){if(O===l)break;if(O===o){R="prev";break}}ie.value=R,ae(o)}function ae(o){const{onActiveNameChange:l,onUpdateValue:R,"onUpdate:value":O}=e;l&&q(l,o),R&&q(R,o),O&&q(O,o),h.value=o}function Ce(o){const{onClose:l}=e;l&&q(l,o)}function Se(){const{value:o}=$;if(!o)return;const l="transition-disabled";o.classList.add(l),J(),o.classList.remove(l)}let Re=0;function Ae(o){var l;if(o.contentRect.width===0&&o.contentRect.height===0||Re===o.contentRect.width)return;Re=o.contentRect.width;const{type:R}=e;(R==="line"||R==="bar")&&Se(),R!=="segment"&&fe((l=T.value)===null||l===void 0?void 0:l.$el)}const Me=Je(Ae,64);xe([()=>e.justifyContent,()=>e.size],()=>{Ne(()=>{const{type:o}=e;(o==="line"||o==="bar")&&Se()})});const se=z(!1);function Te(o){var l;const{target:R,contentRect:{width:O}}=o,X=R.parentElement.offsetWidth;if(!se.value)X<O&&(se.value=!0);else{const{value:n}=x;if(!n)return;X-O>n.$el.offsetWidth&&(se.value=!1)}fe((l=T.value)===null||l===void 0?void 0:l.$el)}const de=Je(Te,64);function Z(){const{onAdd:o}=e;o&&o(),Ne(()=>{const l=y(),{value:R}=T;!l||!R||R.scrollTo({left:l.offsetLeft,top:0,behavior:"smooth"})})}function fe(o){if(!o)return;const{scrollLeft:l,scrollWidth:R,offsetWidth:O}=o;g.value=l<=0,k.value=l+O>=R}const be=Je(o=>{fe(o.target)},64);Rn(st,{triggerRef:Q(e,"trigger"),tabStyleRef:Q(e,"tabStyle"),paneClassRef:Q(e,"paneClass"),paneStyleRef:Q(e,"paneStyle"),mergedClsPrefixRef:m,typeRef:Q(e,"type"),closableRef:Q(e,"closable"),valueRef:B,tabChangeIdRef:E,onBeforeLeaveRef:Q(e,"onBeforeLeave"),activateTab:le,handleClose:Ce,handleAdd:Z}),Tn(()=>{J(),te()}),St(()=>{const{value:o}=S;if(!o||["left","right"].includes(e.placement))return;const{value:l}=m,R=`${l}-tabs-nav-scroll-wrapper--shadow-before`,O=`${l}-tabs-nav-scroll-wrapper--shadow-after`;g.value?o.classList.remove(R):o.classList.add(R),k.value?o.classList.remove(O):o.classList.add(O)});const Oe=z(null);xe(B,()=>{if(e.type==="segment"){const o=Oe.value;o&&Ne(()=>{o.classList.add("transition-disabled"),o.offsetWidth,o.classList.remove("transition-disabled")})}});const ge={syncBarPosition:()=>{J()}},he=N(()=>{const{value:o}=F,{type:l}=e,R={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[l],O=`${o}${R}`,{self:{barColor:X,closeIconColor:n,closeIconColorHover:u,closeIconColorPressed:L,tabColor:ze,tabBorderColor:Ie,paneTextColor:ke,tabFontWeight:We,tabBorderRadius:Ee,tabFontWeightActive:$e,colorSegment:Pe,fontWeightStrong:Fe,tabColorSegment:Le,closeSize:je,closeIconSize:Be,closeColorHover:re,closeColorPressed:t,closeBorderRadius:s,[ee("panePadding",o)]:C,[ee("tabPadding",O)]:I,[ee("tabPaddingVertical",O)]:_,[ee("tabGap",O)]:M,[ee("tabTextColor",l)]:A,[ee("tabTextColorActive",l)]:U,[ee("tabTextColorHover",l)]:_e,[ee("tabTextColorDisabled",l)]:De,[ee("tabFontSize",o)]:Ke},common:{cubicBezierEaseInOut:Ge}}=w.value;return{"--n-bezier":Ge,"--n-color-segment":Pe,"--n-bar-color":X,"--n-tab-font-size":Ke,"--n-tab-text-color":A,"--n-tab-text-color-active":U,"--n-tab-text-color-disabled":De,"--n-tab-text-color-hover":_e,"--n-pane-text-color":ke,"--n-tab-border-color":Ie,"--n-tab-border-radius":Ee,"--n-close-size":je,"--n-close-icon-size":Be,"--n-close-color-hover":re,"--n-close-color-pressed":t,"--n-close-border-radius":s,"--n-close-icon-color":n,"--n-close-icon-color-hover":u,"--n-close-icon-color-pressed":L,"--n-tab-color":ze,"--n-tab-font-weight":We,"--n-tab-font-weight-active":$e,"--n-tab-padding":I,"--n-tab-padding-vertical":_,"--n-tab-gap":M,"--n-pane-padding":C,"--n-font-weight-strong":Fe,"--n-tab-color-segment":Le}}),oe=i?it("tabs",N(()=>`${F.value[0]}${e.type[0]}`),he,e):void 0;return Object.assign({mergedClsPrefix:m,mergedValue:B,renderedNames:new Set,tabsRailElRef:Oe,tabsPaneWrapperRef:ne,tabsElRef:v,barElRef:$,addTabInstRef:x,xScrollInstRef:T,scrollWrapperElRef:S,addTabFixed:se,tabWrapperStyle:K,handleNavResize:Me,mergedSize:F,handleScroll:be,handleTabsResize:de,cssVars:i?void 0:he,themeClass:oe==null?void 0:oe.themeClass,animationDirection:ie,renderNameListRef:pe,onAnimationBeforeLeave:we,onAnimationEnter:ye,onAnimationAfterEnter:ue,onRender:oe==null?void 0:oe.onRender},ge)},render(){const{mergedClsPrefix:e,type:a,placement:c,addTabFixed:f,addable:d,mergedSize:p,renderNameListRef:m,onRender:i,$slots:{default:w,prefix:v,suffix:$}}=this;i==null||i();const S=w?He(w()).filter(h=>h.type.__TAB_PANE__===!0):[],x=w?He(w()).filter(h=>h.type.__TAB__===!0):[],T=!x.length,g=a==="card",k=a==="segment",F=!g&&!k&&this.justifyContent;m.value=[];const P=()=>{const h=r("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},F?null:r("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),T?S.map((B,E)=>(m.value.push(B.props.name),Qe(r(rt,Object.assign({},B.props,{internalCreatedByPane:!0,internalLeftPadded:E!==0&&(!F||F==="center"||F==="start"||F==="end")}),B.children?{default:B.children.tab}:void 0)))):x.map((B,E)=>(m.value.push(B.props.name),Qe(E!==0&&!F?xt(B):B))),!f&&d&&g?mt(d,(T?S.length:x.length)!==0):null,F?null:r("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return r("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},g&&d?r(ft,{onResize:this.handleTabsResize},{default:()=>h}):h,g?r("div",{class:`${e}-tabs-pad`}):null,g?null:r("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return r("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${a}-type`,`${e}-tabs--${p}-size`,F&&`${e}-tabs--flex`,`${e}-tabs--${c}`],style:this.cssVars},r("div",{class:[`${e}-tabs-nav--${a}-type`,`${e}-tabs-nav--${c}`,`${e}-tabs-nav`]},ut(v,h=>h&&r("div",{class:`${e}-tabs-nav__prefix`},h)),k?r("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},T?S.map((h,B)=>(m.value.push(h.props.name),r(rt,Object.assign({},h.props,{internalCreatedByPane:!0,internalLeftPadded:B!==0}),h.children?{default:h.children.tab}:void 0))):x.map((h,B)=>(m.value.push(h.props.name),B===0?h:xt(h)))):r(ft,{onResize:this.handleNavResize},{default:()=>r("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(c)?r(Wn,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:P}):r("div",{class:`${e}-tabs-nav-y-scroll`},P()))}),f&&d&&g?mt(d,!0):null,ut($,h=>h&&r("div",{class:`${e}-tabs-nav__suffix`},h))),T&&(this.animated?r("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},gt(S,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):gt(S,this.mergedValue,this.renderedNames)))}});function gt(e,a,c,f,d,p,m){const i=[];return e.forEach(w=>{const{name:v,displayDirective:$,"display-directive":S}=w.props,x=g=>$===g||S===g,T=a===v;if(w.key!==void 0&&(w.key=v),T||x("show")||x("show:lazy")&&c.has(v)){c.has(v)||c.add(v);const g=!x("if");i.push(g?Tt(w,[[Ot,T]]):w)}}),m?r(On,{name:`${m}-transition`,onBeforeLeave:f,onEnter:d,onAfterEnter:p},{default:()=>i}):i}function mt(e,a){return r(rt,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof e=="object"&&e.disabled})}function xt(e){const a=zn(e);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function Qe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{ua as N,fa as a,ha as b,ba as c,Mn as g};
