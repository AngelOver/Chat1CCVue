var Vt=Object.defineProperty;var Mt=(t,u,b)=>u in t?Vt(t,u,{enumerable:!0,configurable:!0,writable:!0,value:b}):t[u]=b;var U=(t,u,b)=>(Mt(t,typeof u!="symbol"?u+"":u,b),b);import{r as _,aU as Ut,f as re,g as w,Z as M,J as S,i as et,H as At,I as Pt,j as ae,u as ot,m as Ae,aV as Nt,k as it,n as D,t as rt,l as dt,w as tt,b as Dt,p as Je,q as Et,s as qe,v as R,V as Ft,x as Ht,M as Ot,z as jt,T as Kt,e as Me,c as Ue,ay as We,E as Se,aW as st,ac as at,aX as Lt,R as ce,aY as Ge,aZ as te,a_ as Ye,O as ue,a$ as Wt,b0 as Gt,aC as Yt,an as ct,at as Xt,aB as xe,af as B,ag as G,ap as e,am as v,aj as c,ai as l,N as I,aw as Jt,ak as $,ax as Z,al as F,aO as H,b1 as qt,a7 as Zt,aN as Qt,au as se,b2 as es,aG as ts,aF as ut,K as Pe,ao as Q,av as O,aP as Ne,b3 as De,b4 as ss,A as as,b5 as ns,b6 as ls,b7 as os,b8 as is,b9 as rs,ba as ds,aL as cs,bb as us}from"./index-9e9d3302.js";import{N as vt,a as vs,b as hs,c as be}from"./Tabs-0d0a91a8.js";import"./utils-e1323481.js";function nt(t){return window.TouchEvent&&t instanceof window.TouchEvent}function lt(){const t=_(new Map),u=b=>x=>{t.value.set(b,x)};return Ut(()=>t.value.clear()),[t,u]}const fs=re([w("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[M("reverse",[w("slider-handles",[w("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),w("slider-dots",[w("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),M("vertical",[w("slider-handles",[w("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),w("slider-marks",[w("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),w("slider-dots",[w("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),M("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[w("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[w("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),w("slider-rail",`
 height: 100%;
 `,[S("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),M("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),w("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[w("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),w("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[w("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),M("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[w("slider-handle",`
 cursor: not-allowed;
 `)]),M("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),re("&:hover",[w("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[S("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),w("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),M("active",[w("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[S("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),w("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),w("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[w("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),w("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[S("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),w("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[w("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[w("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[re("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),re("&:focus",[w("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[re("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),w("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[M("transition-disabled",[w("slider-dot","transition: none;")]),w("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[M("active","border: var(--n-dot-border-active);")])])]),w("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[et()]),w("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[M("top",`
 margin-bottom: 12px;
 `),M("right",`
 margin-left: 12px;
 `),M("bottom",`
 margin-top: 12px;
 `),M("left",`
 margin-right: 12px;
 `),et()]),At(w("slider",[w("slider-dot","background-color: var(--n-dot-color-modal);")])),Pt(w("slider",[w("slider-dot","background-color: var(--n-dot-color-popover);")]))]),ps=0,ms=Object.assign(Object.assign({},Ae.props),{to:qe.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Xe=ae({name:"Slider",props:ms,setup(t){const{mergedClsPrefixRef:u,namespaceRef:b,inlineThemeDisabled:x}=ot(t),i=Ae("Slider","-slider",fs,Nt,t,u),s=_(null),[k,a]=lt(),[m,d]=lt(),p=_(new Set),f=it(t),{mergedDisabledRef:o}=f,g=D(()=>{const{step:n}=t;if(n<=0||n==="mark")return 0;const r=n.toString();let h=0;return r.includes(".")&&(h=r.length-r.indexOf(".")-1),h}),W=_(t.defaultValue),we=rt(t,"value"),de=dt(we,W),j=D(()=>{const{value:n}=de;return(t.range?n:[n]).map(le)}),z=D(()=>j.value.length>2),A=D(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),V=D(()=>{const{marks:n}=t;return n?Object.keys(n).map(parseFloat):null}),P=_(-1),J=_(-1),N=_(-1),C=_(!1),ee=_(!1),ne=D(()=>{const{vertical:n,reverse:r}=t;return n?r?"top":"bottom":r?"right":"left"}),he=D(()=>{if(z.value)return;const n=j.value,r=fe(t.range?Math.min(...n):t.min),h=fe(t.range?Math.max(...n):n[0]),{value:y}=ne;return t.vertical?{[y]:`${r}%`,height:`${h-r}%`}:{[y]:`${r}%`,width:`${h-r}%`}}),$e=D(()=>{const n=[],{marks:r}=t;if(r){const h=j.value.slice();h.sort((K,L)=>K-L);const{value:y}=ne,{value:T}=z,{range:E}=t,q=T?()=>!1:K=>E?K>=h[0]&&K<=h[h.length-1]:K<=h[0];for(const K of Object.keys(r)){const L=Number(K);n.push({active:q(L),label:r[K],style:{[y]:`${fe(L)}%`}})}}return n});function _e(n,r){const h=fe(n),{value:y}=ne;return{[y]:`${h}%`,zIndex:r===P.value?1:0}}function Re(n){return t.showTooltip||N.value===n||P.value===n&&C.value}function Ee(n){return C.value?!(P.value===n&&J.value===n):!0}function Fe(n){var r;~n&&(P.value=n,(r=k.value.get(n))===null||r===void 0||r.focus())}function He(){m.value.forEach((n,r)=>{Re(r)&&n.syncPosition()})}function X(n){const{"onUpdate:value":r,onUpdateValue:h}=t,{nTriggerFormInput:y,nTriggerFormChange:T}=f;h&&Se(h,n),r&&Se(r,n),W.value=n,y(),T()}function ze(n){const{range:r}=t;if(r){if(Array.isArray(n)){const{value:h}=j;n.join()!==h.join()&&X(n)}}else Array.isArray(n)||j.value[0]!==n&&X(n)}function ye(n,r){if(t.range){const h=j.value.slice();h.splice(r,1,n),ze(h)}else ze(n)}function Y(n,r,h){const y=h!==void 0;h||(h=n-r>0?1:-1);const T=V.value||[],{step:E}=t;if(E==="mark"){const L=oe(n,T.concat(r),y?h:void 0);return L?L.value:r}if(E<=0)return r;const{value:q}=g;let K;if(y){const L=Number((r/E).toFixed(q)),ie=Math.floor(L),Ke=L>ie?ie:ie-1,Le=L<ie?ie:ie+1;K=oe(r,[Number((Ke*E).toFixed(q)),Number((Le*E).toFixed(q)),...T],h)}else{const L=je(n);K=oe(n,[...T,L])}return K?le(K.value):r}function le(n){return Math.min(t.max,Math.max(t.min,n))}function fe(n){const{max:r,min:h}=t;return(n-h)/(r-h)*100}function Oe(n){const{max:r,min:h}=t;return h+(r-h)*n}function je(n){const{step:r,min:h}=t;if(r<=0||r==="mark")return n;const y=Math.round((n-h)/r)*r+h;return Number(y.toFixed(g.value))}function oe(n,r=V.value,h){if(!(r!=null&&r.length))return null;let y=null,T=-1;for(;++T<r.length;){const E=r[T]-n,q=Math.abs(E);(h===void 0||E*h>0)&&(y===null||q<y.distance)&&(y={index:T,distance:q,value:r[T]})}return y}function pe(n){const r=s.value;if(!r)return;const h=nt(n)?n.touches[0]:n,y=r.getBoundingClientRect();let T;return t.vertical?T=(y.bottom-h.clientY)/y.height:T=(h.clientX-y.left)/y.width,t.reverse&&(T=1-T),Oe(T)}function ke(n){if(o.value||!t.keyboard)return;const{vertical:r,reverse:h}=t;switch(n.key){case"ArrowUp":n.preventDefault(),Ie(r&&h?-1:1);break;case"ArrowRight":n.preventDefault(),Ie(!r&&h?-1:1);break;case"ArrowDown":n.preventDefault(),Ie(r&&h?1:-1);break;case"ArrowLeft":n.preventDefault(),Ie(!r&&h?1:-1);break}}function Ie(n){const r=P.value;if(r===-1)return;const{step:h}=t,y=j.value[r],T=h<=0||h==="mark"?y:y+h*n;ye(Y(T,y,n>0?1:-1),r)}function ht(n){var r,h;if(o.value||!nt(n)&&n.button!==ps)return;const y=pe(n);if(y===void 0)return;const T=j.value.slice(),E=t.range?(h=(r=oe(y,T))===null||r===void 0?void 0:r.index)!==null&&h!==void 0?h:-1:0;E!==-1&&(n.preventDefault(),Fe(E),ft(),ye(Y(y,j.value[E]),E))}function ft(){C.value||(C.value=!0,Me("touchend",document,Ve),Me("mouseup",document,Ve),Me("touchmove",document,Be),Me("mousemove",document,Be))}function Te(){C.value&&(C.value=!1,Ue("touchend",document,Ve),Ue("mouseup",document,Ve),Ue("touchmove",document,Be),Ue("mousemove",document,Be))}function Be(n){const{value:r}=P;if(!C.value||r===-1){Te();return}const h=pe(n);ye(Y(h,j.value[r]),r)}function Ve(){Te()}function pt(n){P.value=n,o.value||(N.value=n)}function mt(n){P.value===n&&(P.value=-1,Te()),N.value===n&&(N.value=-1)}function gt(n){N.value=n}function bt(n){N.value===n&&(N.value=-1)}tt(P,(n,r)=>void We(()=>J.value=r)),tt(de,()=>{if(t.marks){if(ee.value)return;ee.value=!0,We(()=>{ee.value=!1})}We(He)}),Dt(()=>{Te()});const Ze=D(()=>{const{self:{markFontSize:n,railColor:r,railColorHover:h,fillColor:y,fillColorHover:T,handleColor:E,opacityDisabled:q,dotColor:K,dotColorModal:L,handleBoxShadow:ie,handleBoxShadowHover:Ke,handleBoxShadowActive:Le,handleBoxShadowFocus:xt,dotBorder:wt,dotBoxShadow:$t,railHeight:_t,railWidthVertical:yt,handleSize:kt,dotHeight:Ct,dotWidth:St,dotBorderRadius:Rt,fontSize:zt,dotBorderActive:It,dotColorPopover:Tt},common:{cubicBezierEaseInOut:Bt}}=i.value;return{"--n-bezier":Bt,"--n-dot-border":wt,"--n-dot-border-active":It,"--n-dot-border-radius":Rt,"--n-dot-box-shadow":$t,"--n-dot-color":K,"--n-dot-color-modal":L,"--n-dot-color-popover":Tt,"--n-dot-height":Ct,"--n-dot-width":St,"--n-fill-color":y,"--n-fill-color-hover":T,"--n-font-size":zt,"--n-handle-box-shadow":ie,"--n-handle-box-shadow-active":Le,"--n-handle-box-shadow-focus":xt,"--n-handle-box-shadow-hover":Ke,"--n-handle-color":E,"--n-handle-size":kt,"--n-opacity-disabled":q,"--n-rail-color":r,"--n-rail-color-hover":h,"--n-rail-height":_t,"--n-rail-width-vertical":yt,"--n-mark-font-size":n}}),me=x?Je("slider",void 0,Ze,t):void 0,Qe=D(()=>{const{self:{fontSize:n,indicatorColor:r,indicatorBoxShadow:h,indicatorTextColor:y,indicatorBorderRadius:T}}=i.value;return{"--n-font-size":n,"--n-indicator-border-radius":T,"--n-indicator-box-shadow":h,"--n-indicator-color":r,"--n-indicator-text-color":y}}),ge=x?Je("slider-indicator",void 0,Qe,t):void 0;return{mergedClsPrefix:u,namespace:b,uncontrolledValue:W,mergedValue:de,mergedDisabled:o,mergedPlacement:A,isMounted:Et(),adjustedTo:qe(t),dotTransitionDisabled:ee,markInfos:$e,isShowTooltip:Re,shouldKeepTooltipTransition:Ee,handleRailRef:s,setHandleRefs:a,setFollowerRefs:d,fillStyle:he,getHandleStyle:_e,activeIndex:P,arrifiedValues:j,followerEnabledIndexSet:p,handleRailMouseDown:ht,handleHandleFocus:pt,handleHandleBlur:mt,handleHandleMouseEnter:gt,handleHandleMouseLeave:bt,handleRailKeyDown:ke,indicatorCssVars:x?void 0:Qe,indicatorThemeClass:ge==null?void 0:ge.themeClass,indicatorOnRender:ge==null?void 0:ge.onRender,cssVars:x?void 0:Ze,themeClass:me==null?void 0:me.themeClass,onRender:me==null?void 0:me.onRender}},render(){var t;const{mergedClsPrefix:u,themeClass:b,formatTooltip:x}=this;return(t=this.onRender)===null||t===void 0||t.call(this),R("div",{class:[`${u}-slider`,b,{[`${u}-slider--disabled`]:this.mergedDisabled,[`${u}-slider--active`]:this.activeIndex!==-1,[`${u}-slider--with-mark`]:this.marks,[`${u}-slider--vertical`]:this.vertical,[`${u}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},R("div",{class:`${u}-slider-rail`},R("div",{class:`${u}-slider-rail__fill`,style:this.fillStyle}),this.marks?R("div",{class:[`${u}-slider-dots`,this.dotTransitionDisabled&&`${u}-slider-dots--transition-disabled`]},this.markInfos.map(i=>R("div",{key:i.label,class:[`${u}-slider-dot`,{[`${u}-slider-dot--active`]:i.active}],style:i.style}))):null,R("div",{ref:"handleRailRef",class:`${u}-slider-handles`},this.arrifiedValues.map((i,s)=>{const k=this.isShowTooltip(s);return R(Ft,null,{default:()=>[R(Ht,null,{default:()=>R("div",{ref:this.setHandleRefs(s),class:`${u}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(i,s),onFocus:()=>this.handleHandleFocus(s),onBlur:()=>this.handleHandleBlur(s),onMouseenter:()=>this.handleHandleMouseEnter(s),onMouseleave:()=>this.handleHandleMouseLeave(s)},Ot(this.$slots.thumb,()=>[R("div",{class:`${u}-slider-handle`})]))}),this.tooltip&&R(jt,{ref:this.setFollowerRefs(s),show:k,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(s),teleportDisabled:this.adjustedTo===qe.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>R(Kt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(s),onEnter:()=>{this.followerEnabledIndexSet.add(s)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(s)}},{default:()=>{var a;return k?((a=this.indicatorOnRender)===null||a===void 0||a.call(this),R("div",{class:[`${u}-slider-handle-indicator`,this.indicatorThemeClass,`${u}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof x=="function"?x(i):i)):null}})})]})})),this.marks?R("div",{class:`${u}-slider-marks`},this.markInfos.map(i=>R("div",{key:i.label,class:`${u}-slider-mark`,style:i.style},i.label))):null))}}),gs=w("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[S("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),S("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),S("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),w("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[st({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),S("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),S("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),S("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),re("&:focus",[S("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),M("round",[S("rail","border-radius: calc(var(--n-rail-height) / 2);",[S("button","border-radius: calc(var(--n-button-height) / 2);")])]),at("disabled",[at("icon",[M("rubber-band",[M("pressed",[S("rail",[S("button","max-width: var(--n-button-width-pressed);")])]),S("rail",[re("&:active",[S("button","max-width: var(--n-button-width-pressed);")])]),M("active",[M("pressed",[S("rail",[S("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),S("rail",[re("&:active",[S("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),M("active",[S("rail",[S("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),S("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[S("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[st()]),S("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),M("active",[S("rail","background-color: var(--n-rail-color-active);")]),M("loading",[S("rail",`
 cursor: wait;
 `)]),M("disabled",[S("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),bs=Object.assign(Object.assign({},Ae.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let Ce;const ve=ae({name:"Switch",props:bs,setup(t){Ce===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?Ce=CSS.supports("width","max(1px)"):Ce=!1:Ce=!0);const{mergedClsPrefixRef:u,inlineThemeDisabled:b}=ot(t),x=Ae("Switch","-switch",gs,Lt,t,u),i=it(t),{mergedSizeRef:s,mergedDisabledRef:k}=i,a=_(t.defaultValue),m=rt(t,"value"),d=dt(m,a),p=D(()=>d.value===t.checkedValue),f=_(!1),o=_(!1),g=D(()=>{const{railStyle:C}=t;if(C)return C({focused:o.value,checked:p.value})});function W(C){const{"onUpdate:value":ee,onChange:ne,onUpdateValue:he}=t,{nTriggerFormInput:$e,nTriggerFormChange:_e}=i;ee&&Se(ee,C),he&&Se(he,C),ne&&Se(ne,C),a.value=C,$e(),_e()}function we(){const{nTriggerFormFocus:C}=i;C()}function de(){const{nTriggerFormBlur:C}=i;C()}function j(){t.loading||k.value||(d.value!==t.checkedValue?W(t.checkedValue):W(t.uncheckedValue))}function z(){o.value=!0,we()}function A(){o.value=!1,de(),f.value=!1}function V(C){t.loading||k.value||C.key===" "&&(d.value!==t.checkedValue?W(t.checkedValue):W(t.uncheckedValue),f.value=!1)}function P(C){t.loading||k.value||C.key===" "&&(C.preventDefault(),f.value=!0)}const J=D(()=>{const{value:C}=s,{self:{opacityDisabled:ee,railColor:ne,railColorActive:he,buttonBoxShadow:$e,buttonColor:_e,boxShadowFocus:Re,loadingColor:Ee,textColor:Fe,iconColor:He,[ce("buttonHeight",C)]:X,[ce("buttonWidth",C)]:ze,[ce("buttonWidthPressed",C)]:ye,[ce("railHeight",C)]:Y,[ce("railWidth",C)]:le,[ce("railBorderRadius",C)]:fe,[ce("buttonBorderRadius",C)]:Oe},common:{cubicBezierEaseInOut:je}}=x.value;let oe,pe,ke;return Ce?(oe=`calc((${Y} - ${X}) / 2)`,pe=`max(${Y}, ${X})`,ke=`max(${le}, calc(${le} + ${X} - ${Y}))`):(oe=Ge((te(Y)-te(X))/2),pe=Ge(Math.max(te(Y),te(X))),ke=te(Y)>te(X)?le:Ge(te(le)+te(X)-te(Y))),{"--n-bezier":je,"--n-button-border-radius":Oe,"--n-button-box-shadow":$e,"--n-button-color":_e,"--n-button-width":ze,"--n-button-width-pressed":ye,"--n-button-height":X,"--n-height":pe,"--n-offset":oe,"--n-opacity-disabled":ee,"--n-rail-border-radius":fe,"--n-rail-color":ne,"--n-rail-color-active":he,"--n-rail-height":Y,"--n-rail-width":le,"--n-width":ke,"--n-box-shadow-focus":Re,"--n-loading-color":Ee,"--n-text-color":Fe,"--n-icon-color":He}}),N=b?Je("switch",D(()=>s.value[0]),J,t):void 0;return{handleClick:j,handleBlur:A,handleFocus:z,handleKeyup:V,handleKeydown:P,mergedRailStyle:g,pressed:f,mergedClsPrefix:u,mergedValue:d,checked:p,mergedDisabled:k,cssVars:b?void 0:J,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:u,checked:b,mergedRailStyle:x,onRender:i,$slots:s}=this;i==null||i();const{checked:k,unchecked:a,icon:m,"checked-icon":d,"unchecked-icon":p}=s,f=!(Ye(m)&&Ye(d)&&Ye(p));return R("div",{role:"switch","aria-checked":b,class:[`${t}-switch`,this.themeClass,f&&`${t}-switch--icon`,b&&`${t}-switch--active`,u&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},R("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:x},ue(k,o=>ue(a,g=>o||g?R("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},R("div",{class:`${t}-switch__rail-placeholder`},R("div",{class:`${t}-switch__button-placeholder`}),o),R("div",{class:`${t}-switch__rail-placeholder`},R("div",{class:`${t}-switch__button-placeholder`}),g)):null)),R("div",{class:`${t}-switch__button`},ue(m,o=>ue(d,g=>ue(p,W=>R(Wt,null,{default:()=>this.loading?R(Gt,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(g||o)?R("div",{class:`${t}-switch__button-icon`,key:g?"checked-icon":"icon"},g||o):!this.checked&&(W||o)?R("div",{class:`${t}-switch__button-icon`,key:W?"unchecked-icon":"icon"},W||o):null})))),ue(k,o=>o&&R("div",{key:"checked",class:`${t}-switch__checked`},o)),ue(a,o=>o&&R("div",{key:"unchecked",class:`${t}-switch__unchecked`},o)))))}});function xs(){const t=new Date,u=t.getDate(),b=t.getMonth()+1;return`${t.getFullYear()}-${b}-${u}`}const ws={class:"p-4 space-y-5 min-h-[200px]"},$s={class:"space-y-6"},_s={class:"flex items-center space-x-4"},ys={class:"flex-shrink-0 w-[100px]"},ks={class:"w-[200px]"},Cs={class:"flex items-center space-x-4"},Ss={class:"flex-shrink-0 w-[100px]"},Rs={class:"flex-1"},zs={class:"flex items-center space-x-4"},Is={class:"flex-shrink-0 w-[100px]"},Ts={class:"flex-1"},Bs={class:"flex-shrink-0 w-[100px]"},Vs={class:"flex flex-wrap items-center gap-4"},Ms={class:"flex items-center space-x-4"},Us={class:"flex-shrink-0 w-[100px]"},As={class:"flex flex-wrap items-center gap-4"},Ps={class:"flex items-center space-x-4"},Ns={class:"flex-shrink-0 w-[100px]"},Ds={class:"flex flex-wrap items-center gap-4"},Es={class:"flex items-center space-x-4"},Fs={class:"flex-shrink-0 w-[100px]"},Hs=ae({__name:"General",setup(t){const u=Yt(),b=ct(),{isMobile:x}=Xt(),i=xe(),s=D(()=>u.theme),k=D(()=>b.userInfo),a=_(k.value.avatar??""),m=_(k.value.name??""),d=_(k.value.description??""),p=D({get(){return u.language},set(z){u.setLanguage(z)}}),f=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],o=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"}];async function g(z){await b.updateUserInfo(!0,z),i.success(se("common.success"))}function W(){const z=xs(),A=localStorage.getItem("chatStorage")||"{}",V=JSON.stringify(JSON.parse(A),null,2),P=new Blob([V],{type:"application/json"}),J=URL.createObjectURL(P),N=document.createElement("a");N.href=J,N.download=`chat-store_${z}.json`,document.body.appendChild(N),N.click(),document.body.removeChild(N)}function we(z){const A=z.target;if(!A||!A.files)return;const V=A.files[0];if(!V)return;const P=new FileReader;P.onload=()=>{try{const J=JSON.parse(P.result);localStorage.setItem("chatStorage",JSON.stringify(J)),i.success(se("common.success")),location.reload()}catch{i.error(se("common.invalidFileFormat"))}},P.readAsText(V)}async function de(){await es(),localStorage.removeItem("chatStorage"),location.reload()}function j(){const z=document.getElementById("fileInput");z&&z.click()}return(z,A)=>(B(),G("div",ws,[e("div",$s,[e("div",_s,[e("span",ys,v(z.$t("setting.name")),1),e("div",ks,[c(l(I),{value:m.value,"onUpdate:value":A[0]||(A[0]=V=>m.value=V),placeholder:""},null,8,["value"])])]),e("div",Cs,[e("span",Ss,v(z.$t("setting.description")),1),e("div",Rs,[c(l(I),{value:d.value,"onUpdate:value":A[1]||(A[1]=V=>d.value=V),placeholder:""},null,8,["value"])])]),e("div",zs,[e("span",Is,v(z.$t("setting.avatarLink")),1),e("div",Ts,[c(l(I),{value:a.value,"onUpdate:value":A[2]||(A[2]=V=>a.value=V),placeholder:""},null,8,["value"])])]),e("div",{class:Jt(["flex items-center space-x-4",l(x)&&"items-start"])},[e("span",Bs,v(z.$t("setting.chatHistory")),1),e("div",Vs,[c(l(H),{size:"small",onClick:W},{icon:$(()=>[c(l(Z),{icon:"ri:download-2-fill"})]),default:$(()=>[F(" "+v(z.$t("common.export")),1)]),_:1}),e("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:we},null,32),c(l(H),{size:"small",onClick:j},{icon:$(()=>[c(l(Z),{icon:"ri:upload-2-fill"})]),default:$(()=>[F(" "+v(z.$t("common.import")),1)]),_:1}),c(l(qt),{placement:"bottom",onPositiveClick:de},{trigger:$(()=>[c(l(H),{size:"small"},{icon:$(()=>[c(l(Z),{icon:"ri:close-circle-line"})]),default:$(()=>[F(" "+v(z.$t("common.clear")),1)]),_:1})]),default:$(()=>[F(" "+v(z.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),e("div",Ms,[e("span",Us,v(z.$t("setting.theme")),1),e("div",As,[(B(),G(Zt,null,Qt(f,V=>c(l(H),{key:V.key,size:"small",type:V.key===l(s)?"primary":void 0,onClick:P=>l(u).setTheme(V.key)},{icon:$(()=>[c(l(Z),{icon:V.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),e("div",Ps,[e("span",Ns,v(z.$t("setting.language")),1),e("div",Ds,[c(l(vt),{style:{width:"140px"},value:l(p),options:o,onUpdateValue:A[3]||(A[3]=V=>l(u).setLanguage(V))},null,8,["value"])])]),e("div",Es,[e("span",Fs,v(z.$t("setting.saveUserInfo")),1),c(l(H),{type:"primary",onClick:A[4]||(A[4]=V=>g({avatar:a.value,name:m.value,description:d.value}))},{default:$(()=>[F(v(z.$t("common.save")),1)]),_:1})])])]))}}),Os={class:"p-4 space-y-5 min-h-[200px]"},js={class:"space-y-6"},Ks={class:"flex items-center space-x-4"},Ls=e("span",{class:"flex-shrink-0 w-[120px]"},"VIP激活码",-1),Ws={class:"flex-1"},Gs=e("span",{class:"flex-shrink-0 w-[120px]"},"VIP权限",-1),Ys={class:"flex items-center space-x-4"},Xs=e("span",{class:"flex-shrink-0 w-[120px]"},"连续上下文 ",-1),Js={class:"flex-1"},qs={class:"flex items-center space-x-4"},Zs={class:"flex-shrink-0 w-[120px]"},Qs={class:"flex-1"},ea={class:"flex items-center space-x-4"},ta={class:"flex-shrink-0 w-[120px]"},sa={class:"flex-1"},aa={class:"flex items-center space-x-4"},na={class:"flex-shrink-0 w-[120px]"},la={class:"flex-1"},oa={class:"flex items-center space-x-4"},ia=e("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),ra=ae({__name:"Advanced",setup(t){const u=ts(),b=xe(),x=_(u.systemMessage??""),i=_(u.vipCode??""),s=_(u.temperature??.5),k=_(u.top_p??1),a=_(u.msgNum??3),m=_(u.vipFlag??!1);function d(f){u.updateSetting(f),b.success(se("common.success"))}function p(){u.resetSetting(),b.success(se("common.success")),window.location.reload()}return(f,o)=>(B(),G("div",Os,[e("div",js,[e("div",Ks,[Ls,e("div",Ws,[c(l(I),{value:i.value,"onUpdate:value":o[0]||(o[0]=g=>i.value=g),type:"password",placeholder:"填写购买的VIP激活码",class:"mb-2"},null,8,["value"])]),c(l(H),{size:"tiny",text:"",type:"primary",onClick:o[1]||(o[1]=g=>d({vipCode:i.value}))},{default:$(()=>[F(v(f.$t("common.save")),1)]),_:1})]),c(l(vs),{align:"center","item-style":"display: flex;"},{default:$(()=>[Gs,c(l(ve),{value:m.value,"onUpdate:value":o[2]||(o[2]=g=>m.value=g),onChange:o[3]||(o[3]=g=>d({vipFlag:m.value}))},null,8,["value"])]),_:1}),e("div",Ys,[Xs,e("div",Js,[c(l(Xe),{value:a.value,"onUpdate:value":o[4]||(o[4]=g=>a.value=g),max:20,min:-1,step:1},null,8,["value"])]),e("span",null,v(a.value),1),c(l(H),{size:"tiny",text:"",type:"primary",onClick:o[5]||(o[5]=g=>d({msgNum:a.value}))},{default:$(()=>[F(v(f.$t("common.save")),1)]),_:1})]),e("div",qs,[e("span",Zs,v(f.$t("setting.role")),1),e("div",Qs,[c(l(I),{value:x.value,"onUpdate:value":o[6]||(o[6]=g=>x.value=g),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),c(l(H),{size:"tiny",text:"",type:"primary",onClick:o[7]||(o[7]=g=>d({systemMessage:x.value}))},{default:$(()=>[F(v(f.$t("common.save")),1)]),_:1})]),e("div",ea,[e("span",ta,v(f.$t("setting.temperature")),1),e("div",sa,[c(l(Xe),{value:s.value,"onUpdate:value":o[8]||(o[8]=g=>s.value=g),max:1,min:0,step:.1},null,8,["value","step"])]),e("span",null,v(s.value),1),c(l(H),{size:"tiny",text:"",type:"primary",onClick:o[9]||(o[9]=g=>d({temperature:s.value}))},{default:$(()=>[F(v(f.$t("common.save")),1)]),_:1})]),e("div",aa,[e("span",na,v(f.$t("setting.top_p")),1),e("div",la,[c(l(Xe),{value:k.value,"onUpdate:value":o[10]||(o[10]=g=>k.value=g),max:1,min:0,step:.1},null,8,["value","step"])]),e("span",null,v(k.value),1),c(l(H),{size:"tiny",text:"",type:"primary",onClick:o[11]||(o[11]=g=>d({top_p:k.value}))},{default:$(()=>[F(v(f.$t("common.save")),1)]),_:1})]),e("div",oa,[ia,c(l(H),{size:"small",onClick:p},{default:$(()=>[F(v(f.$t("common.reset")),1)]),_:1})])])]))}});class da{constructor(){U(this,"timeoutMs");U(this,"apiKey");U(this,"accessToken");U(this,"apiBaseUrl");U(this,"apiModel");U(this,"reverseProxy");U(this,"socksProxy");U(this,"socksAuth");U(this,"httpsProxy");U(this,"balance");U(this,"siteConfig");U(this,"mailConfig");U(this,"auditConfig")}}class ca{constructor(){U(this,"siteTitle");U(this,"loginEnabled");U(this,"loginSalt");U(this,"registerEnabled");U(this,"registerReview");U(this,"registerMails");U(this,"siteDomain")}}const ua={class:"p-4 space-y-5 min-h-[200px]"},va={class:"space-y-6"},ha={class:"flex items-center space-x-4"},fa={class:"flex-shrink-0 w-[100px]"},pa={class:"flex-1"},ma={key:0},ga={key:0,class:"flex items-center space-x-4"},ba={class:"flex-shrink-0 w-[100px]"},xa={class:"flex-1"},wa={key:1,class:"flex items-center space-x-4"},$a={class:"flex-shrink-0 w-[100px]"},_a={class:"flex-1"},ya={class:"flex items-center space-x-4"},ka={class:"flex-shrink-0 w-[100px]"},Ca={class:"flex-1"},Sa={key:2,class:"flex items-center space-x-4"},Ra={class:"flex-shrink-0 w-[100px]"},za={class:"flex-1"},Ia={class:"flex items-center space-x-4"},Ta={class:"flex-shrink-0 w-[100px]"},Ba={class:"flex-1"},Va={class:"flex items-center space-x-4"},Ma={class:"flex-shrink-0 w-[100px]"},Ua={class:"flex-1"},Aa={class:"flex items-center space-x-4"},Pa={class:"flex-shrink-0 w-[100px]"},Na={class:"flex-1"},Da={class:"flex items-center space-x-4"},Ea={class:"flex-shrink-0 w-[100px]"},Fa={class:"flex-1"},Ha={class:"flex items-center space-x-4"},Oa=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),ja=ae({__name:"About",setup(t){const u=xe(),b=ut(),x=_(!1),i=_(!1),s=_();s.value=new da;const k=D(()=>!!b.isChatGPTAPI);async function a(){try{x.value=!0;const{data:d}=await De();s.value=d}finally{x.value=!1}}async function m(d){if(d){i.value=!0;try{const{data:p}=await ss(d);s.value=p,u.success(se("common.success"))}catch(p){u.error(p.message)}i.value=!1}}return Pe(()=>{a()}),(d,p)=>(B(),Q(l(Ne),{show:x.value},{default:$(()=>{var f;return[e("div",ua,[e("div",va,[e("div",ha,[e("span",fa,v(d.$t("setting.api")),1),e("div",pa,[c(l(I),{value:s.value&&s.value.apiKey,placeholder:"",onInput:p[0]||(p[0]=o=>{s.value&&(s.value.apiKey=o)})},null,8,["value"])]),l(k)?(B(),G("p",ma,v(d.$t("setting.balance"))+"："+v(((f=s.value)==null?void 0:f.balance)??"-"),1)):O("",!0)]),l(k)?(B(),G("div",ga,[e("span",ba,v(d.$t("setting.apiBaseUrl")),1),e("div",xa,[c(l(I),{value:s.value&&s.value.apiBaseUrl,placeholder:"https://api.openai.com",onInput:p[1]||(p[1]=o=>{s.value&&(s.value.apiBaseUrl=o)})},null,8,["value"])])])):O("",!0),l(k)?(B(),G("div",wa,[e("span",$a,v(d.$t("setting.apiModel")),1),e("div",_a,[c(l(I),{value:s.value&&s.value.apiModel,placeholder:"",onInput:p[2]||(p[2]=o=>{s.value&&(s.value.apiModel=o)})},null,8,["value"])])])):O("",!0),e("div",ya,[e("span",ka,v(d.$t("setting.accessToken")),1),e("div",Ca,[c(l(I),{value:s.value&&s.value.accessToken,placeholder:"",onInput:p[3]||(p[3]=o=>{s.value&&(s.value.accessToken=o)})},null,8,["value"])])]),l(k)?O("",!0):(B(),G("div",Sa,[e("span",Ra,v(d.$t("setting.reverseProxy")),1),e("div",za,[c(l(I),{value:s.value&&s.value.reverseProxy,placeholder:"",onInput:p[4]||(p[4]=o=>{s.value&&(s.value.reverseProxy=o)})},null,8,["value"])])])),e("div",Ia,[e("span",Ta,v(d.$t("setting.timeout")),1),e("div",Ba,[c(l(I),{value:s.value&&s.value.timeoutMs!==void 0?String(s.value.timeoutMs):void 0,placeholder:"",onInput:p[5]||(p[5]=o=>{s.value&&(s.value.timeoutMs=typeof o=="string"?Number(o):void 0)})},null,8,["value"])])]),e("div",Va,[e("span",Ma,v(d.$t("setting.socks")),1),e("div",Ua,[c(l(I),{value:s.value&&s.value.socksProxy,placeholder:"",onInput:p[6]||(p[6]=o=>{s.value&&(s.value.socksProxy=o)})},null,8,["value"])])]),e("div",Aa,[e("span",Pa,v(d.$t("setting.socksAuth")),1),e("div",Na,[c(l(I),{value:s.value&&s.value.socksAuth,placeholder:"name:pasword",onInput:p[7]||(p[7]=o=>{s.value&&(s.value.socksAuth=o)})},null,8,["value"])])]),e("div",Da,[e("span",Ea,v(d.$t("setting.httpsProxy")),1),e("div",Fa,[c(l(I),{value:s.value&&s.value.httpsProxy,placeholder:"",onInput:p[8]||(p[8]=o=>{s.value&&(s.value.httpsProxy=o)})},null,8,["value"])])]),e("div",Ha,[Oa,c(l(H),{loading:i.value,type:"primary",onClick:p[9]||(p[9]=o=>m(s.value))},{default:$(()=>[F(v(d.$t("common.save")),1)]),_:1},8,["loading"])])])])]}),_:1},8,["show"]))}}),Ka={class:"p-4 space-y-5 min-h-[200px]"},La={class:"space-y-6"},Wa={class:"flex items-center space-x-4"},Ga={class:"flex-shrink-0 w-[100px]"},Ya={class:"flex-1"},Xa={class:"flex items-center space-x-4"},Ja={class:"flex-shrink-0 w-[100px]"},qa={class:"flex-1"},Za={class:"flex items-center space-x-4"},Qa={class:"flex-shrink-0 w-[100px]"},en={class:"flex-1"},tn={class:"flex items-center space-x-4"},sn={class:"flex-shrink-0 w-[100px]"},an={class:"flex-1"},nn={class:"flex items-center space-x-4"},ln={class:"flex-shrink-0 w-[100px]"},on={class:"flex-1"},rn={class:"flex items-center space-x-4"},dn={class:"flex-shrink-0 w-[100px]"},cn={class:"flex-1"},un={class:"flex items-center space-x-4"},vn={class:"flex-shrink-0 w-[100px]"},hn={class:"flex-1"},fn={class:"flex items-center space-x-4"},pn=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),mn=ae({__name:"Site",setup(t){const u=xe(),b=_(!1),x=_(!1),i=_();i.value=new ca;async function s(){try{b.value=!0;const{data:a}=await De();i.value=a.siteConfig}finally{b.value=!1}}async function k(a){if(a){x.value=!0;try{const{data:m}=await ls(a);i.value=m,u.success(se("common.success"))}catch(m){u.error(m.message)}x.value=!1}}return Pe(()=>{s()}),(a,m)=>(B(),Q(l(Ne),{show:b.value},{default:$(()=>[e("div",Ka,[e("div",La,[e("div",Wa,[e("span",Ga,v(a.$t("setting.siteTitle")),1),e("div",Ya,[c(l(I),{value:i.value&&i.value.siteTitle,placeholder:"",onInput:m[0]||(m[0]=d=>{i.value&&(i.value.siteTitle=d)})},null,8,["value"])])]),e("div",Xa,[e("span",Ja,v(a.$t("setting.siteDomain")),1),e("div",qa,[c(l(I),{value:i.value&&i.value.siteDomain,placeholder:"",onInput:m[1]||(m[1]=d=>{i.value&&(i.value.siteDomain=d)})},null,8,["value"])])]),e("div",Za,[e("span",Qa,v(a.$t("setting.loginEnabled")),1),e("div",en,[c(l(ve),{round:!1,value:i.value&&i.value.loginEnabled,"onUpdate:value":m[2]||(m[2]=d=>{i.value&&(i.value.loginEnabled=d)})},null,8,["value"])])]),e("div",tn,[e("span",sn,v(a.$t("setting.loginSalt")),1),e("div",an,[c(l(I),{value:i.value&&i.value.loginSalt,placeholder:a.$t("setting.loginSaltTip"),onInput:m[3]||(m[3]=d=>{i.value&&(i.value.loginSalt=d)})},null,8,["value","placeholder"])])]),e("div",nn,[e("span",ln,v(a.$t("setting.registerEnabled")),1),e("div",on,[c(l(ve),{round:!1,value:i.value&&i.value.registerEnabled,"onUpdate:value":m[4]||(m[4]=d=>{i.value&&(i.value.registerEnabled=d)})},null,8,["value"])])]),as(e("div",rn,[e("span",dn,v(a.$t("setting.registerReview")),1),e("div",cn,[c(l(ve),{round:!1,value:i.value&&i.value.registerReview,"onUpdate:value":m[5]||(m[5]=d=>{i.value&&(i.value.registerReview=d)})},null,8,["value"])])],512),[[ns,i.value&&i.value.registerEnabled]]),e("div",un,[e("span",vn,v(a.$t("setting.registerMails")),1),e("div",hn,[c(l(I),{value:i.value&&i.value.registerMails,placeholder:"",onInput:m[6]||(m[6]=d=>{i.value&&(i.value.registerMails=d)})},null,8,["value"])])]),e("div",fn,[pn,c(l(H),{loading:x.value,type:"primary",onClick:m[7]||(m[7]=d=>k(i.value))},{default:$(()=>[F(v(a.$t("common.save")),1)]),_:1},8,["loading"])])])])]),_:1},8,["show"]))}}),gn={class:"p-4 space-y-5 min-h-[200px]"},bn={class:"space-y-6"},xn={class:"flex items-center space-x-4"},wn={class:"flex-shrink-0 w-[100px]"},$n={class:"flex-1"},_n={class:"flex items-center space-x-4"},yn={class:"flex-shrink-0 w-[100px]"},kn={class:"flex-1"},Cn={class:"flex items-center space-x-4"},Sn={class:"flex-shrink-0 w-[100px]"},Rn={class:"flex-1"},zn={class:"flex items-center space-x-4"},In={class:"flex-shrink-0 w-[100px]"},Tn={class:"flex-1"},Bn={class:"flex items-center space-x-4"},Vn={class:"flex-shrink-0 w-[100px]"},Mn={class:"flex-1"},Un={class:"flex items-center space-x-4"},An=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),Pn={class:"flex flex-wrap items-center gap-4"},Nn=ae({__name:"Mail",setup(t){const u=xe(),b=_(!1),x=_(!1),i=_(!1),s=_();async function k(){try{b.value=!0;const{data:d}=await De();s.value=d.mailConfig}finally{b.value=!1}}async function a(){x.value=!0;try{const{data:d}=await os(s.value);s.value=d,u.success(se("common.success"))}catch(d){u.error(d.message)}x.value=!1}async function m(){i.value=!0;try{const{message:d}=await is(s.value);u.success(d)}catch(d){u.error(d.message)}i.value=!1}return Pe(()=>{k()}),(d,p)=>(B(),Q(l(Ne),{show:b.value},{default:$(()=>[e("div",gn,[e("div",bn,[e("div",xn,[e("span",wn,v(d.$t("setting.smtpHost")),1),e("div",$n,[c(l(I),{value:s.value&&s.value.smtpHost,placeholder:"",onInput:p[0]||(p[0]=f=>{s.value&&(s.value.smtpHost=f)})},null,8,["value"])])]),e("div",_n,[e("span",yn,v(d.$t("setting.smtpPort")),1),e("div",kn,[c(l(I),{value:s.value&&s.value.smtpPort!==void 0?String(s.value.smtpPort):void 0,placeholder:"",onInput:p[1]||(p[1]=f=>{s.value&&(s.value.smtpPort=typeof f=="string"?Number(f):void 0)})},null,8,["value"])])]),e("div",Cn,[e("span",Sn,v(d.$t("setting.smtpTsl")),1),e("div",Rn,[c(l(ve),{round:!1,value:s.value&&s.value.smtpTsl,"onUpdate:value":p[2]||(p[2]=f=>{s.value&&(s.value.smtpTsl=f)})},null,8,["value"])])]),e("div",zn,[e("span",In,v(d.$t("setting.smtpUserName")),1),e("div",Tn,[c(l(I),{value:s.value&&s.value.smtpUserName,placeholder:"",onInput:p[3]||(p[3]=f=>{s.value&&(s.value.smtpUserName=f)})},null,8,["value"])])]),e("div",Bn,[e("span",Vn,v(d.$t("setting.smtpPassword")),1),e("div",Mn,[c(l(I),{value:s.value&&s.value.smtpPassword,placeholder:"",onInput:p[4]||(p[4]=f=>{s.value&&(s.value.smtpPassword=f)})},null,8,["value"])])]),e("div",Un,[An,e("div",Pn,[c(l(H),{loading:x.value,type:"primary",onClick:p[5]||(p[5]=f=>a())},{default:$(()=>[F(v(d.$t("common.save")),1)]),_:1},8,["loading"]),c(l(H),{loading:i.value,type:"info",onClick:p[6]||(p[6]=f=>m())},{default:$(()=>[F(v(d.$t("common.test")),1)]),_:1},8,["loading"])])])])])]),_:1},8,["show"]))}}),Dn={class:"p-4 space-y-5 min-h-[200px]"},En={class:"space-y-6"},Fn={class:"flex items-center space-x-4"},Hn={class:"flex-shrink-0 w-[100px]"},On={class:"flex-1"},jn={key:0,class:"flex items-center space-x-4"},Kn={class:"flex-shrink-0 w-[100px]"},Ln={class:"flex-1"},Wn={class:"flex items-center space-x-4"},Gn={class:"flex-shrink-0 w-[100px]"},Yn={class:"flex-1"},Xn={key:1,class:"flex items-center space-x-4"},Jn={class:"flex-shrink-0 w-[100px]"},qn={class:"flex-1"},Zn={key:2,class:"flex items-center space-x-4"},Qn={class:"flex-shrink-0 w-[100px]"},el={class:"flex-1"},tl={key:3,class:"flex items-center space-x-4"},sl={class:"flex-shrink-0 w-[100px]"},al={class:"flex-1"},nl={key:4,class:"flex items-center space-x-4"},ll={class:"flex-shrink-0 w-[100px]"},ol={class:"flex-1"},il={key:0},rl={target:"_blank",href:"https://ai.baidu.com/ai-doc/ANTIPORN/Nk3h6xbb2#%E7%BB%86%E5%88%86%E6%A0%87%E7%AD%BE%E5%AF%B9%E7%85%A7%E8%A1%A8"},dl={key:5,class:"flex items-center space-x-4"},cl={class:"flex-shrink-0 w-[100px]"},ul={class:"flex-1"},vl={class:"flex items-center space-x-4"},hl=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),fl={class:"flex flex-wrap items-center gap-4"},pl=ae({__name:"Audit",setup(t){const u=xe(),b=_(!1),x=_(!1),i=_(!1),s=_(),k=[{label:"百度云",key:"baidu",value:"baidu"}],a=_();async function m(){try{b.value=!0;const{data:f}=await De();a.value=f.auditConfig}finally{b.value=!1}}async function d(){x.value=!0;try{const{data:f}=await rs(a.value);a.value=f,u.success(se("common.success"))}catch(f){u.error(f.message)}x.value=!1}async function p(){i.value=!0;try{const{message:f}=await ds(s.value,a.value);u.success(f)}catch(f){u.error(f.message)}i.value=!1}return Pe(()=>{m()}),(f,o)=>(B(),Q(l(Ne),{show:b.value},{default:$(()=>[e("div",Dn,[e("div",En,[e("div",Fn,[e("span",Hn,v(f.$t("setting.auditCustomizeEnabled")),1),e("div",On,[c(l(ve),{round:!1,value:a.value&&a.value.customizeEnabled,"onUpdate:value":o[0]||(o[0]=g=>{a.value&&(a.value.customizeEnabled=g)})},null,8,["value"])])]),a.value&&a.value.customizeEnabled?(B(),G("div",jn,[e("span",Kn,v(f.$t("setting.auditCustomizeWords")),1),e("div",Ln,[c(l(I),{value:a.value&&a.value.sensitiveWords,placeholder:"One word per line",type:"textarea",autosize:{minRows:1,maxRows:4},onInput:o[1]||(o[1]=g=>{a.value&&(a.value.sensitiveWords=g)})},null,8,["value"])])])):O("",!0),e("div",Wn,[e("span",Gn,v(f.$t("setting.auditEnabled")),1),e("div",Yn,[c(l(ve),{round:!1,value:a.value&&a.value.enabled,"onUpdate:value":o[2]||(o[2]=g=>{a.value&&(a.value.enabled=g)})},null,8,["value"])])]),a.value&&a.value.enabled?(B(),G("div",Xn,[e("span",Jn,v(f.$t("setting.auditProvider")),1),e("div",qn,[c(l(vt),{style:{width:"140px"},value:a.value&&a.value.provider,options:k,onUpdateValue:o[3]||(o[3]=g=>{a.value&&(a.value.provider=g)})},null,8,["value"])])])):O("",!0),a.value&&a.value.enabled?(B(),G("div",Zn,[e("span",Qn,v(f.$t("setting.auditApiKey")),1),e("div",el,[c(l(I),{value:a.value&&a.value.options&&a.value.options.apiKey,placeholder:"",onInput:o[4]||(o[4]=g=>{a.value&&a.value.options&&(a.value.options.apiKey=g)})},null,8,["value"])])])):O("",!0),a.value&&a.value.enabled?(B(),G("div",tl,[e("span",sl,v(f.$t("setting.auditApiSecret")),1),e("div",al,[c(l(I),{value:a.value&&a.value.options&&a.value.options.apiSecret,placeholder:"",onInput:o[5]||(o[5]=g=>{a.value&&a.value.options&&(a.value.options.apiSecret=g)})},null,8,["value"])])])):O("",!0),a.value&&a.value.enabled?(B(),G("div",nl,[e("span",ll,v(f.$t("setting.auditBaiduLabel")),1),e("div",ol,[c(l(I),{value:a.value&&a.value.options&&a.value.options.label,placeholder:f.$t("setting.auditBaiduLabelTip"),onInput:o[6]||(o[6]=g=>{a.value&&a.value.options&&(a.value.options.label=g)})},null,8,["value","placeholder"])]),a.value&&a.value.provider==="baidu"?(B(),G("p",il,[e("a",rl,v(f.$t("setting.auditBaiduLabelLink")),1)])):O("",!0)])):O("",!0),a.value&&(a.value.enabled||a.value.customizeEnabled)?(B(),G("div",dl,[e("span",cl,v(f.$t("setting.auditTest")),1),e("div",ul,[c(l(I),{value:s.value,"onUpdate:value":o[7]||(o[7]=g=>s.value=g),placeholder:""},null,8,["value"])])])):O("",!0),e("div",vl,[hl,e("div",fl,[c(l(H),{loading:x.value,type:"primary",onClick:o[8]||(o[8]=g=>d())},{default:$(()=>[F(v(f.$t("common.save")),1)]),_:1},8,["loading"]),c(l(H),{loading:i.value,type:"info",onClick:o[9]||(o[9]=g=>p())},{default:$(()=>[F(v(f.$t("common.test")),1)]),_:1},8,["loading"])])])])])]),_:1},8,["show"]))}}),ml={class:"ml-2"},gl={class:"min-h-[100px]"},bl={class:"ml-2"},xl={class:"min-h-[100px]"},wl={class:"ml-2"},$l={class:"ml-2"},_l={class:"ml-2"},yl={class:"ml-2"},zl=ae({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(t,{emit:u}){const b=t,x=ct(),i=ut(),s=D(()=>!!i.isChatGPTAPI),k=_("General"),a=D({get(){return b.visible},set(m){u("update:visible",m)}});return(m,d)=>(B(),Q(l(us),{show:l(a),"onUpdate:show":d[1]||(d[1]=p=>cs(a)?a.value=p:null),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"1024px"}},{default:$(()=>[e("div",null,[c(l(hs),{value:k.value,"onUpdate:value":d[0]||(d[0]=p=>k.value=p),type:"line",animated:""},{default:$(()=>[c(l(be),{name:"General",tab:"General"},{tab:$(()=>[c(l(Z),{class:"text-lg",icon:"ri:file-user-line"}),e("span",ml,v(m.$t("setting.general")),1)]),default:$(()=>[e("div",gl,[c(Hs)])]),_:1}),l(s)?(B(),Q(l(be),{key:0,name:"Advanced",tab:"Advanced"},{tab:$(()=>[c(l(Z),{class:"text-lg",icon:"ri:equalizer-line"}),e("span",bl,v(m.$t("setting.advanced")),1)]),default:$(()=>[e("div",xl,[c(ra)])]),_:1})):O("",!0),l(x).userInfo.root?(B(),Q(l(be),{key:1,name:"Config",tab:"Config"},{tab:$(()=>[c(l(Z),{class:"text-lg",icon:"ri:list-settings-line"}),e("span",wl,v(m.$t("setting.config")),1)]),default:$(()=>[c(ja)]),_:1})):O("",!0),l(x).userInfo.root?(B(),Q(l(be),{key:2,name:"SiteConfig",tab:"SiteConfig"},{tab:$(()=>[c(l(Z),{class:"text-lg",icon:"ri:settings-line"}),e("span",$l,v(m.$t("setting.siteConfig")),1)]),default:$(()=>[c(mn)]),_:1})):O("",!0),l(x).userInfo.root?(B(),Q(l(be),{key:3,name:"MailConfig",tab:"MailConfig"},{tab:$(()=>[c(l(Z),{class:"text-lg",icon:"ri:mail-line"}),e("span",_l,v(m.$t("setting.mailConfig")),1)]),default:$(()=>[c(Nn)]),_:1})):O("",!0),l(x).userInfo.root?(B(),Q(l(be),{key:4,name:"AuditConfig",tab:"AuditConfig"},{tab:$(()=>[c(l(Z),{class:"text-lg",icon:"ri:settings-line"}),e("span",yl,v(m.$t("setting.auditConfig")),1)]),default:$(()=>[c(pl)]),_:1})):O("",!0)]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{zl as default};
