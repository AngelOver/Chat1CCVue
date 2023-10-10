var Vt=Object.defineProperty;var Mt=(t,c,b)=>c in t?Vt(t,c,{enumerable:!0,configurable:!0,writable:!0,value:b}):t[c]=b;var U=(t,c,b)=>(Mt(t,typeof c!="symbol"?c+"":c,b),b);import{r as _,aU as Ut,f as re,g as w,Z as M,J as S,i as et,H as At,I as Nt,j as ae,u as ot,m as Ae,aV as Pt,k as it,n as D,t as rt,l as dt,w as tt,ay as We,b as Dt,p as Je,q as Et,s as qe,v as R,V as Ft,x as Ht,Q as Ot,z as jt,T as Lt,e as Me,c as Ue,E as Se,aW as st,ac as at,aX as Kt,L as ue,aY as Ge,aZ as te,a_ as Ye,R as ce,a$ as Wt,b0 as Gt,aC as Yt,an as ut,at as Xt,aB as xe,af as B,ag as G,ap as e,al as v,ai as u,am as o,N as I,aw as Jt,aj as $,ax as Z,ak as F,aN as H,b1 as qt,a7 as Zt,aM as Qt,au as se,b2 as es,aG as ts,aF as ct,O as Ne,ao as Q,av as O,aO as Pe,b3 as De,b4 as ss,A as as,b5 as ns,b6 as ls,b7 as os,b8 as is,b9 as rs,ba as ds,bb as us}from"./index-3651f9da.js";import{N as vt,a as cs,b as vs,c as be}from"./Tabs-bb6eaeb0.js";import"./utils-ac008e71.js";function nt(t){return window.TouchEvent&&t instanceof window.TouchEvent}function lt(){const t=_(new Map),c=b=>x=>{t.value.set(b,x)};return Ut(()=>{t.value.clear()}),[t,c]}const hs=re([w("slider",`
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
 `),et()]),At(w("slider",[w("slider-dot","background-color: var(--n-dot-color-modal);")])),Nt(w("slider",[w("slider-dot","background-color: var(--n-dot-color-popover);")]))]),fs=0,ps=Object.assign(Object.assign({},Ae.props),{to:qe.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Xe=ae({name:"Slider",props:ps,setup(t){const{mergedClsPrefixRef:c,namespaceRef:b,inlineThemeDisabled:x}=ot(t),i=Ae("Slider","-slider",hs,Pt,t,c),s=_(null),[k,n]=lt(),[m,d]=lt(),p=_(new Set),f=it(t),{mergedDisabledRef:l}=f,g=D(()=>{const{step:a}=t;if(Number(a)<=0||a==="mark")return 0;const r=a.toString();let h=0;return r.includes(".")&&(h=r.length-r.indexOf(".")-1),h}),W=_(t.defaultValue),we=rt(t,"value"),de=dt(we,W),j=D(()=>{const{value:a}=de;return(t.range?a:[a]).map(le)}),z=D(()=>j.value.length>2),A=D(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),V=D(()=>{const{marks:a}=t;return a?Object.keys(a).map(parseFloat):null}),N=_(-1),J=_(-1),P=_(-1),C=_(!1),ee=_(!1),ne=D(()=>{const{vertical:a,reverse:r}=t;return a?r?"top":"bottom":r?"right":"left"}),he=D(()=>{if(z.value)return;const a=j.value,r=fe(t.range?Math.min(...a):t.min),h=fe(t.range?Math.max(...a):a[0]),{value:y}=ne;return t.vertical?{[y]:`${r}%`,height:`${h-r}%`}:{[y]:`${r}%`,width:`${h-r}%`}}),$e=D(()=>{const a=[],{marks:r}=t;if(r){const h=j.value.slice();h.sort((L,K)=>L-K);const{value:y}=ne,{value:T}=z,{range:E}=t,q=T?()=>!1:L=>E?L>=h[0]&&L<=h[h.length-1]:L<=h[0];for(const L of Object.keys(r)){const K=Number(L);a.push({active:q(K),label:r[L],style:{[y]:`${fe(K)}%`}})}}return a});function _e(a,r){const h=fe(a),{value:y}=ne;return{[y]:`${h}%`,zIndex:r===N.value?1:0}}function Re(a){return t.showTooltip||P.value===a||N.value===a&&C.value}function Ee(a){return C.value?!(N.value===a&&J.value===a):!0}function Fe(a){var r;~a&&(N.value=a,(r=k.value.get(a))===null||r===void 0||r.focus())}function He(){m.value.forEach((a,r)=>{Re(r)&&a.syncPosition()})}function X(a){const{"onUpdate:value":r,onUpdateValue:h}=t,{nTriggerFormInput:y,nTriggerFormChange:T}=f;h&&Se(h,a),r&&Se(r,a),W.value=a,y(),T()}function ze(a){const{range:r}=t;if(r){if(Array.isArray(a)){const{value:h}=j;a.join()!==h.join()&&X(a)}}else Array.isArray(a)||j.value[0]!==a&&X(a)}function ye(a,r){if(t.range){const h=j.value.slice();h.splice(r,1,a),ze(h)}else ze(a)}function Y(a,r,h){const y=h!==void 0;h||(h=a-r>0?1:-1);const T=V.value||[],{step:E}=t;if(E==="mark"){const K=oe(a,T.concat(r),y?h:void 0);return K?K.value:r}if(E<=0)return r;const{value:q}=g;let L;if(y){const K=Number((r/E).toFixed(q)),ie=Math.floor(K),Le=K>ie?ie:ie-1,Ke=K<ie?ie:ie+1;L=oe(r,[Number((Le*E).toFixed(q)),Number((Ke*E).toFixed(q)),...T],h)}else{const K=je(a);L=oe(a,[...T,K])}return L?le(L.value):r}function le(a){return Math.min(t.max,Math.max(t.min,a))}function fe(a){const{max:r,min:h}=t;return(a-h)/(r-h)*100}function Oe(a){const{max:r,min:h}=t;return h+(r-h)*a}function je(a){const{step:r,min:h}=t;if(Number(r)<=0||r==="mark")return a;const y=Math.round((a-h)/r)*r+h;return Number(y.toFixed(g.value))}function oe(a,r=V.value,h){if(!(r!=null&&r.length))return null;let y=null,T=-1;for(;++T<r.length;){const E=r[T]-a,q=Math.abs(E);(h===void 0||E*h>0)&&(y===null||q<y.distance)&&(y={index:T,distance:q,value:r[T]})}return y}function pe(a){const r=s.value;if(!r)return;const h=nt(a)?a.touches[0]:a,y=r.getBoundingClientRect();let T;return t.vertical?T=(y.bottom-h.clientY)/y.height:T=(h.clientX-y.left)/y.width,t.reverse&&(T=1-T),Oe(T)}function ke(a){if(l.value||!t.keyboard)return;const{vertical:r,reverse:h}=t;switch(a.key){case"ArrowUp":a.preventDefault(),Ie(r&&h?-1:1);break;case"ArrowRight":a.preventDefault(),Ie(!r&&h?-1:1);break;case"ArrowDown":a.preventDefault(),Ie(r&&h?1:-1);break;case"ArrowLeft":a.preventDefault(),Ie(!r&&h?1:-1);break}}function Ie(a){const r=N.value;if(r===-1)return;const{step:h}=t,y=j.value[r],T=Number(h)<=0||h==="mark"?y:y+h*a;ye(Y(T,y,a>0?1:-1),r)}function ht(a){var r,h;if(l.value||!nt(a)&&a.button!==fs)return;const y=pe(a);if(y===void 0)return;const T=j.value.slice(),E=t.range?(h=(r=oe(y,T))===null||r===void 0?void 0:r.index)!==null&&h!==void 0?h:-1:0;E!==-1&&(a.preventDefault(),Fe(E),ft(),ye(Y(y,j.value[E]),E))}function ft(){C.value||(C.value=!0,Me("touchend",document,Ve),Me("mouseup",document,Ve),Me("touchmove",document,Be),Me("mousemove",document,Be))}function Te(){C.value&&(C.value=!1,Ue("touchend",document,Ve),Ue("mouseup",document,Ve),Ue("touchmove",document,Be),Ue("mousemove",document,Be))}function Be(a){const{value:r}=N;if(!C.value||r===-1){Te();return}const h=pe(a);ye(Y(h,j.value[r]),r)}function Ve(){Te()}function pt(a){N.value=a,l.value||(P.value=a)}function mt(a){N.value===a&&(N.value=-1,Te()),P.value===a&&(P.value=-1)}function gt(a){P.value=a}function bt(a){P.value===a&&(P.value=-1)}tt(N,(a,r)=>void We(()=>J.value=r)),tt(de,()=>{if(t.marks){if(ee.value)return;ee.value=!0,We(()=>{ee.value=!1})}We(He)}),Dt(()=>{Te()});const Ze=D(()=>{const{self:{markFontSize:a,railColor:r,railColorHover:h,fillColor:y,fillColorHover:T,handleColor:E,opacityDisabled:q,dotColor:L,dotColorModal:K,handleBoxShadow:ie,handleBoxShadowHover:Le,handleBoxShadowActive:Ke,handleBoxShadowFocus:xt,dotBorder:wt,dotBoxShadow:$t,railHeight:_t,railWidthVertical:yt,handleSize:kt,dotHeight:Ct,dotWidth:St,dotBorderRadius:Rt,fontSize:zt,dotBorderActive:It,dotColorPopover:Tt},common:{cubicBezierEaseInOut:Bt}}=i.value;return{"--n-bezier":Bt,"--n-dot-border":wt,"--n-dot-border-active":It,"--n-dot-border-radius":Rt,"--n-dot-box-shadow":$t,"--n-dot-color":L,"--n-dot-color-modal":K,"--n-dot-color-popover":Tt,"--n-dot-height":Ct,"--n-dot-width":St,"--n-fill-color":y,"--n-fill-color-hover":T,"--n-font-size":zt,"--n-handle-box-shadow":ie,"--n-handle-box-shadow-active":Ke,"--n-handle-box-shadow-focus":xt,"--n-handle-box-shadow-hover":Le,"--n-handle-color":E,"--n-handle-size":kt,"--n-opacity-disabled":q,"--n-rail-color":r,"--n-rail-color-hover":h,"--n-rail-height":_t,"--n-rail-width-vertical":yt,"--n-mark-font-size":a}}),me=x?Je("slider",void 0,Ze,t):void 0,Qe=D(()=>{const{self:{fontSize:a,indicatorColor:r,indicatorBoxShadow:h,indicatorTextColor:y,indicatorBorderRadius:T}}=i.value;return{"--n-font-size":a,"--n-indicator-border-radius":T,"--n-indicator-box-shadow":h,"--n-indicator-color":r,"--n-indicator-text-color":y}}),ge=x?Je("slider-indicator",void 0,Qe,t):void 0;return{mergedClsPrefix:c,namespace:b,uncontrolledValue:W,mergedValue:de,mergedDisabled:l,mergedPlacement:A,isMounted:Et(),adjustedTo:qe(t),dotTransitionDisabled:ee,markInfos:$e,isShowTooltip:Re,shouldKeepTooltipTransition:Ee,handleRailRef:s,setHandleRefs:n,setFollowerRefs:d,fillStyle:he,getHandleStyle:_e,activeIndex:N,arrifiedValues:j,followerEnabledIndexSet:p,handleRailMouseDown:ht,handleHandleFocus:pt,handleHandleBlur:mt,handleHandleMouseEnter:gt,handleHandleMouseLeave:bt,handleRailKeyDown:ke,indicatorCssVars:x?void 0:Qe,indicatorThemeClass:ge==null?void 0:ge.themeClass,indicatorOnRender:ge==null?void 0:ge.onRender,cssVars:x?void 0:Ze,themeClass:me==null?void 0:me.themeClass,onRender:me==null?void 0:me.onRender}},render(){var t;const{mergedClsPrefix:c,themeClass:b,formatTooltip:x}=this;return(t=this.onRender)===null||t===void 0||t.call(this),R("div",{class:[`${c}-slider`,b,{[`${c}-slider--disabled`]:this.mergedDisabled,[`${c}-slider--active`]:this.activeIndex!==-1,[`${c}-slider--with-mark`]:this.marks,[`${c}-slider--vertical`]:this.vertical,[`${c}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},R("div",{class:`${c}-slider-rail`},R("div",{class:`${c}-slider-rail__fill`,style:this.fillStyle}),this.marks?R("div",{class:[`${c}-slider-dots`,this.dotTransitionDisabled&&`${c}-slider-dots--transition-disabled`]},this.markInfos.map(i=>R("div",{key:i.label,class:[`${c}-slider-dot`,{[`${c}-slider-dot--active`]:i.active}],style:i.style}))):null,R("div",{ref:"handleRailRef",class:`${c}-slider-handles`},this.arrifiedValues.map((i,s)=>{const k=this.isShowTooltip(s);return R(Ft,null,{default:()=>[R(Ht,null,{default:()=>R("div",{ref:this.setHandleRefs(s),class:`${c}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(i,s),onFocus:()=>{this.handleHandleFocus(s)},onBlur:()=>{this.handleHandleBlur(s)},onMouseenter:()=>{this.handleHandleMouseEnter(s)},onMouseleave:()=>{this.handleHandleMouseLeave(s)}},Ot(this.$slots.thumb,()=>[R("div",{class:`${c}-slider-handle`})]))}),this.tooltip&&R(jt,{ref:this.setFollowerRefs(s),show:k,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(s),teleportDisabled:this.adjustedTo===qe.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>R(Lt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(s),onEnter:()=>{this.followerEnabledIndexSet.add(s)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(s)}},{default:()=>{var n;return k?((n=this.indicatorOnRender)===null||n===void 0||n.call(this),R("div",{class:[`${c}-slider-handle-indicator`,this.indicatorThemeClass,`${c}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof x=="function"?x(i):i)):null}})})]})})),this.marks?R("div",{class:`${c}-slider-marks`},this.markInfos.map(i=>R("div",{key:i.label,class:`${c}-slider-mark`,style:i.style},i.label))):null))}}),ms=w("switch",`
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
 `)])]),gs=Object.assign(Object.assign({},Ae.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let Ce;const ve=ae({name:"Switch",props:gs,setup(t){Ce===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?Ce=CSS.supports("width","max(1px)"):Ce=!1:Ce=!0);const{mergedClsPrefixRef:c,inlineThemeDisabled:b}=ot(t),x=Ae("Switch","-switch",ms,Kt,t,c),i=it(t),{mergedSizeRef:s,mergedDisabledRef:k}=i,n=_(t.defaultValue),m=rt(t,"value"),d=dt(m,n),p=D(()=>d.value===t.checkedValue),f=_(!1),l=_(!1),g=D(()=>{const{railStyle:C}=t;if(C)return C({focused:l.value,checked:p.value})});function W(C){const{"onUpdate:value":ee,onChange:ne,onUpdateValue:he}=t,{nTriggerFormInput:$e,nTriggerFormChange:_e}=i;ee&&Se(ee,C),he&&Se(he,C),ne&&Se(ne,C),n.value=C,$e(),_e()}function we(){const{nTriggerFormFocus:C}=i;C()}function de(){const{nTriggerFormBlur:C}=i;C()}function j(){t.loading||k.value||(d.value!==t.checkedValue?W(t.checkedValue):W(t.uncheckedValue))}function z(){l.value=!0,we()}function A(){l.value=!1,de(),f.value=!1}function V(C){t.loading||k.value||C.key===" "&&(d.value!==t.checkedValue?W(t.checkedValue):W(t.uncheckedValue),f.value=!1)}function N(C){t.loading||k.value||C.key===" "&&(C.preventDefault(),f.value=!0)}const J=D(()=>{const{value:C}=s,{self:{opacityDisabled:ee,railColor:ne,railColorActive:he,buttonBoxShadow:$e,buttonColor:_e,boxShadowFocus:Re,loadingColor:Ee,textColor:Fe,iconColor:He,[ue("buttonHeight",C)]:X,[ue("buttonWidth",C)]:ze,[ue("buttonWidthPressed",C)]:ye,[ue("railHeight",C)]:Y,[ue("railWidth",C)]:le,[ue("railBorderRadius",C)]:fe,[ue("buttonBorderRadius",C)]:Oe},common:{cubicBezierEaseInOut:je}}=x.value;let oe,pe,ke;return Ce?(oe=`calc((${Y} - ${X}) / 2)`,pe=`max(${Y}, ${X})`,ke=`max(${le}, calc(${le} + ${X} - ${Y}))`):(oe=Ge((te(Y)-te(X))/2),pe=Ge(Math.max(te(Y),te(X))),ke=te(Y)>te(X)?le:Ge(te(le)+te(X)-te(Y))),{"--n-bezier":je,"--n-button-border-radius":Oe,"--n-button-box-shadow":$e,"--n-button-color":_e,"--n-button-width":ze,"--n-button-width-pressed":ye,"--n-button-height":X,"--n-height":pe,"--n-offset":oe,"--n-opacity-disabled":ee,"--n-rail-border-radius":fe,"--n-rail-color":ne,"--n-rail-color-active":he,"--n-rail-height":Y,"--n-rail-width":le,"--n-width":ke,"--n-box-shadow-focus":Re,"--n-loading-color":Ee,"--n-text-color":Fe,"--n-icon-color":He}}),P=b?Je("switch",D(()=>s.value[0]),J,t):void 0;return{handleClick:j,handleBlur:A,handleFocus:z,handleKeyup:V,handleKeydown:N,mergedRailStyle:g,pressed:f,mergedClsPrefix:c,mergedValue:d,checked:p,mergedDisabled:k,cssVars:b?void 0:J,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:c,checked:b,mergedRailStyle:x,onRender:i,$slots:s}=this;i==null||i();const{checked:k,unchecked:n,icon:m,"checked-icon":d,"unchecked-icon":p}=s,f=!(Ye(m)&&Ye(d)&&Ye(p));return R("div",{role:"switch","aria-checked":b,class:[`${t}-switch`,this.themeClass,f&&`${t}-switch--icon`,b&&`${t}-switch--active`,c&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},R("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:x},ce(k,l=>ce(n,g=>l||g?R("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},R("div",{class:`${t}-switch__rail-placeholder`},R("div",{class:`${t}-switch__button-placeholder`}),l),R("div",{class:`${t}-switch__rail-placeholder`},R("div",{class:`${t}-switch__button-placeholder`}),g)):null)),R("div",{class:`${t}-switch__button`},ce(m,l=>ce(d,g=>ce(p,W=>R(Wt,null,{default:()=>this.loading?R(Gt,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(g||l)?R("div",{class:`${t}-switch__button-icon`,key:g?"checked-icon":"icon"},g||l):!this.checked&&(W||l)?R("div",{class:`${t}-switch__button-icon`,key:W?"unchecked-icon":"icon"},W||l):null})))),ce(k,l=>l&&R("div",{key:"checked",class:`${t}-switch__checked`},l)),ce(n,l=>l&&R("div",{key:"unchecked",class:`${t}-switch__unchecked`},l)))))}});function bs(){const t=new Date,c=t.getDate(),b=t.getMonth()+1;return`${t.getFullYear()}-${b}-${c}`}const xs={class:"p-4 space-y-5 min-h-[200px]"},ws={class:"space-y-6"},$s={class:"flex items-center space-x-4"},_s={class:"flex-shrink-0 w-[100px]"},ys={class:"w-[200px]"},ks={class:"flex items-center space-x-4"},Cs={class:"flex-shrink-0 w-[100px]"},Ss={class:"flex-1"},Rs={class:"flex items-center space-x-4"},zs={class:"flex-shrink-0 w-[100px]"},Is={class:"flex-1"},Ts={class:"flex-shrink-0 w-[100px]"},Bs={class:"flex flex-wrap items-center gap-4"},Vs={class:"flex items-center space-x-4"},Ms={class:"flex-shrink-0 w-[100px]"},Us={class:"flex flex-wrap items-center gap-4"},As={class:"flex items-center space-x-4"},Ns={class:"flex-shrink-0 w-[100px]"},Ps={class:"flex flex-wrap items-center gap-4"},Ds={class:"flex items-center space-x-4"},Es={class:"flex-shrink-0 w-[100px]"},Fs=ae({__name:"General",setup(t){const c=Yt(),b=ut(),{isMobile:x}=Xt(),i=xe(),s=D(()=>c.theme),k=D(()=>b.userInfo),n=_(k.value.avatar??""),m=_(k.value.name??""),d=_(k.value.description??""),p=D({get(){return c.language},set(z){c.setLanguage(z)}}),f=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],l=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"}];async function g(z){await b.updateUserInfo(!0,z),i.success(se("common.success"))}function W(){const z=bs(),A=localStorage.getItem("chatStorage")||"{}",V=JSON.stringify(JSON.parse(A),null,2),N=new Blob([V],{type:"application/json"}),J=URL.createObjectURL(N),P=document.createElement("a");P.href=J,P.download=`chat-store_${z}.json`,document.body.appendChild(P),P.click(),document.body.removeChild(P)}function we(z){const A=z.target;if(!A||!A.files)return;const V=A.files[0];if(!V)return;const N=new FileReader;N.onload=()=>{try{const J=JSON.parse(N.result);localStorage.setItem("chatStorage",JSON.stringify(J)),i.success(se("common.success")),location.reload()}catch{i.error(se("common.invalidFileFormat"))}},N.readAsText(V)}async function de(){await es(),localStorage.removeItem("chatStorage"),location.reload()}function j(){const z=document.getElementById("fileInput");z&&z.click()}return(z,A)=>(B(),G("div",xs,[e("div",ws,[e("div",$s,[e("span",_s,v(z.$t("setting.name")),1),e("div",ys,[u(o(I),{value:m.value,"onUpdate:value":A[0]||(A[0]=V=>m.value=V),placeholder:""},null,8,["value"])])]),e("div",ks,[e("span",Cs,v(z.$t("setting.description")),1),e("div",Ss,[u(o(I),{value:d.value,"onUpdate:value":A[1]||(A[1]=V=>d.value=V),placeholder:""},null,8,["value"])])]),e("div",Rs,[e("span",zs,v(z.$t("setting.avatarLink")),1),e("div",Is,[u(o(I),{value:n.value,"onUpdate:value":A[2]||(A[2]=V=>n.value=V),placeholder:""},null,8,["value"])])]),e("div",{class:Jt(["flex items-center space-x-4",o(x)&&"items-start"])},[e("span",Ts,v(z.$t("setting.chatHistory")),1),e("div",Bs,[u(o(H),{size:"small",onClick:W},{icon:$(()=>[u(o(Z),{icon:"ri:download-2-fill"})]),default:$(()=>[F(" "+v(z.$t("common.export")),1)]),_:1}),e("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:we},null,32),u(o(H),{size:"small",onClick:j},{icon:$(()=>[u(o(Z),{icon:"ri:upload-2-fill"})]),default:$(()=>[F(" "+v(z.$t("common.import")),1)]),_:1}),u(o(qt),{placement:"bottom",onPositiveClick:de},{trigger:$(()=>[u(o(H),{size:"small"},{icon:$(()=>[u(o(Z),{icon:"ri:close-circle-line"})]),default:$(()=>[F(" "+v(z.$t("common.clear")),1)]),_:1})]),default:$(()=>[F(" "+v(z.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),e("div",Vs,[e("span",Ms,v(z.$t("setting.theme")),1),e("div",Us,[(B(),G(Zt,null,Qt(f,V=>u(o(H),{key:V.key,size:"small",type:V.key===s.value?"primary":void 0,onClick:N=>o(c).setTheme(V.key)},{icon:$(()=>[u(o(Z),{icon:V.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),e("div",As,[e("span",Ns,v(z.$t("setting.language")),1),e("div",Ps,[u(o(vt),{style:{width:"140px"},value:p.value,options:l,onUpdateValue:A[3]||(A[3]=V=>o(c).setLanguage(V))},null,8,["value"])])]),e("div",Ds,[e("span",Es,v(z.$t("setting.saveUserInfo")),1),u(o(H),{type:"primary",onClick:A[4]||(A[4]=V=>g({avatar:n.value,name:m.value,description:d.value}))},{default:$(()=>[F(v(z.$t("common.save")),1)]),_:1})])])]))}}),Hs={class:"p-4 space-y-5 min-h-[200px]"},Os={class:"space-y-6"},js={class:"flex items-center space-x-4"},Ls=e("span",{class:"flex-shrink-0 w-[120px]"},"VIP激活码",-1),Ks={class:"flex-1"},Ws=e("span",{class:"flex-shrink-0 w-[120px]"},"VIP权限",-1),Gs={class:"flex items-center space-x-4"},Ys=e("span",{class:"flex-shrink-0 w-[120px]"},"连续上下文 ",-1),Xs={class:"flex-1"},Js={class:"flex items-center space-x-4"},qs={class:"flex-shrink-0 w-[120px]"},Zs={class:"flex-1"},Qs={class:"flex items-center space-x-4"},ea={class:"flex-shrink-0 w-[120px]"},ta={class:"flex-1"},sa={class:"flex items-center space-x-4"},aa={class:"flex-shrink-0 w-[120px]"},na={class:"flex-1"},la={class:"flex items-center space-x-4"},oa=e("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),ia=ae({__name:"Advanced",setup(t){const c=ts(),b=xe(),x=_(c.systemMessage??""),i=_(c.vipCode??""),s=_(c.temperature??.5),k=_(c.top_p??1),n=_(c.msgNum??3),m=_(c.vipFlag??!1);function d(f){c.updateSetting(f),b.success(se("common.success"))}function p(){c.resetSetting(),b.success(se("common.success")),window.location.reload()}return(f,l)=>(B(),G("div",Hs,[e("div",Os,[e("div",js,[Ls,e("div",Ks,[u(o(I),{value:i.value,"onUpdate:value":l[0]||(l[0]=g=>i.value=g),type:"password",placeholder:"填写购买的VIP激活码",class:"mb-2"},null,8,["value"])]),u(o(H),{size:"tiny",text:"",type:"primary",onClick:l[1]||(l[1]=g=>d({vipCode:i.value}))},{default:$(()=>[F(v(f.$t("common.save")),1)]),_:1})]),u(o(cs),{align:"center","item-style":"display: flex;"},{default:$(()=>[Ws,u(o(ve),{value:m.value,"onUpdate:value":l[2]||(l[2]=g=>m.value=g),onChange:l[3]||(l[3]=g=>d({vipFlag:m.value}))},null,8,["value"])]),_:1}),e("div",Gs,[Ys,e("div",Xs,[u(o(Xe),{value:n.value,"onUpdate:value":l[4]||(l[4]=g=>n.value=g),max:20,min:-1,step:1},null,8,["value"])]),e("span",null,v(n.value),1),u(o(H),{size:"tiny",text:"",type:"primary",onClick:l[5]||(l[5]=g=>d({msgNum:n.value}))},{default:$(()=>[F(v(f.$t("common.save")),1)]),_:1})]),e("div",Js,[e("span",qs,v(f.$t("setting.role")),1),e("div",Zs,[u(o(I),{value:x.value,"onUpdate:value":l[6]||(l[6]=g=>x.value=g),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),u(o(H),{size:"tiny",text:"",type:"primary",onClick:l[7]||(l[7]=g=>d({systemMessage:x.value}))},{default:$(()=>[F(v(f.$t("common.save")),1)]),_:1})]),e("div",Qs,[e("span",ea,v(f.$t("setting.temperature")),1),e("div",ta,[u(o(Xe),{value:s.value,"onUpdate:value":l[8]||(l[8]=g=>s.value=g),max:1,min:0,step:.1},null,8,["value"])]),e("span",null,v(s.value),1),u(o(H),{size:"tiny",text:"",type:"primary",onClick:l[9]||(l[9]=g=>d({temperature:s.value}))},{default:$(()=>[F(v(f.$t("common.save")),1)]),_:1})]),e("div",sa,[e("span",aa,v(f.$t("setting.top_p")),1),e("div",na,[u(o(Xe),{value:k.value,"onUpdate:value":l[10]||(l[10]=g=>k.value=g),max:1,min:0,step:.1},null,8,["value"])]),e("span",null,v(k.value),1),u(o(H),{size:"tiny",text:"",type:"primary",onClick:l[11]||(l[11]=g=>d({top_p:k.value}))},{default:$(()=>[F(v(f.$t("common.save")),1)]),_:1})]),e("div",la,[oa,u(o(H),{size:"small",onClick:p},{default:$(()=>[F(v(f.$t("common.reset")),1)]),_:1})])])]))}});class ra{constructor(){U(this,"timeoutMs");U(this,"apiKey");U(this,"accessToken");U(this,"apiBaseUrl");U(this,"apiModel");U(this,"reverseProxy");U(this,"socksProxy");U(this,"socksAuth");U(this,"httpsProxy");U(this,"balance");U(this,"siteConfig");U(this,"mailConfig");U(this,"auditConfig")}}class da{constructor(){U(this,"siteTitle");U(this,"loginEnabled");U(this,"loginSalt");U(this,"registerEnabled");U(this,"registerReview");U(this,"registerMails");U(this,"siteDomain")}}const ua={class:"p-4 space-y-5 min-h-[200px]"},ca={class:"space-y-6"},va={class:"flex items-center space-x-4"},ha={class:"flex-shrink-0 w-[100px]"},fa={class:"flex-1"},pa={key:0},ma={key:0,class:"flex items-center space-x-4"},ga={class:"flex-shrink-0 w-[100px]"},ba={class:"flex-1"},xa={key:1,class:"flex items-center space-x-4"},wa={class:"flex-shrink-0 w-[100px]"},$a={class:"flex-1"},_a={class:"flex items-center space-x-4"},ya={class:"flex-shrink-0 w-[100px]"},ka={class:"flex-1"},Ca={key:2,class:"flex items-center space-x-4"},Sa={class:"flex-shrink-0 w-[100px]"},Ra={class:"flex-1"},za={class:"flex items-center space-x-4"},Ia={class:"flex-shrink-0 w-[100px]"},Ta={class:"flex-1"},Ba={class:"flex items-center space-x-4"},Va={class:"flex-shrink-0 w-[100px]"},Ma={class:"flex-1"},Ua={class:"flex items-center space-x-4"},Aa={class:"flex-shrink-0 w-[100px]"},Na={class:"flex-1"},Pa={class:"flex items-center space-x-4"},Da={class:"flex-shrink-0 w-[100px]"},Ea={class:"flex-1"},Fa={class:"flex items-center space-x-4"},Ha=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),Oa=ae({__name:"About",setup(t){const c=xe(),b=ct(),x=_(!1),i=_(!1),s=_();s.value=new ra;const k=D(()=>!!b.isChatGPTAPI);async function n(){try{x.value=!0;const{data:d}=await De();s.value=d}finally{x.value=!1}}async function m(d){if(d){i.value=!0;try{const{data:p}=await ss(d);s.value=p,c.success(se("common.success"))}catch(p){c.error(p.message)}i.value=!1}}return Ne(()=>{n()}),(d,p)=>(B(),Q(o(Pe),{show:x.value},{default:$(()=>{var f;return[e("div",ua,[e("div",ca,[e("div",va,[e("span",ha,v(d.$t("setting.api")),1),e("div",fa,[u(o(I),{value:s.value&&s.value.apiKey,placeholder:"",onInput:p[0]||(p[0]=l=>{s.value&&(s.value.apiKey=l)})},null,8,["value"])]),k.value?(B(),G("p",pa,v(d.$t("setting.balance"))+"："+v(((f=s.value)==null?void 0:f.balance)??"-"),1)):O("",!0)]),k.value?(B(),G("div",ma,[e("span",ga,v(d.$t("setting.apiBaseUrl")),1),e("div",ba,[u(o(I),{value:s.value&&s.value.apiBaseUrl,placeholder:"https://api.openai.com",onInput:p[1]||(p[1]=l=>{s.value&&(s.value.apiBaseUrl=l)})},null,8,["value"])])])):O("",!0),k.value?(B(),G("div",xa,[e("span",wa,v(d.$t("setting.apiModel")),1),e("div",$a,[u(o(I),{value:s.value&&s.value.apiModel,placeholder:"",onInput:p[2]||(p[2]=l=>{s.value&&(s.value.apiModel=l)})},null,8,["value"])])])):O("",!0),e("div",_a,[e("span",ya,v(d.$t("setting.accessToken")),1),e("div",ka,[u(o(I),{value:s.value&&s.value.accessToken,placeholder:"",onInput:p[3]||(p[3]=l=>{s.value&&(s.value.accessToken=l)})},null,8,["value"])])]),k.value?O("",!0):(B(),G("div",Ca,[e("span",Sa,v(d.$t("setting.reverseProxy")),1),e("div",Ra,[u(o(I),{value:s.value&&s.value.reverseProxy,placeholder:"",onInput:p[4]||(p[4]=l=>{s.value&&(s.value.reverseProxy=l)})},null,8,["value"])])])),e("div",za,[e("span",Ia,v(d.$t("setting.timeout")),1),e("div",Ta,[u(o(I),{value:s.value&&s.value.timeoutMs!==void 0?String(s.value.timeoutMs):void 0,placeholder:"",onInput:p[5]||(p[5]=l=>{s.value&&(s.value.timeoutMs=typeof l=="string"?Number(l):void 0)})},null,8,["value"])])]),e("div",Ba,[e("span",Va,v(d.$t("setting.socks")),1),e("div",Ma,[u(o(I),{value:s.value&&s.value.socksProxy,placeholder:"",onInput:p[6]||(p[6]=l=>{s.value&&(s.value.socksProxy=l)})},null,8,["value"])])]),e("div",Ua,[e("span",Aa,v(d.$t("setting.socksAuth")),1),e("div",Na,[u(o(I),{value:s.value&&s.value.socksAuth,placeholder:"name:pasword",onInput:p[7]||(p[7]=l=>{s.value&&(s.value.socksAuth=l)})},null,8,["value"])])]),e("div",Pa,[e("span",Da,v(d.$t("setting.httpsProxy")),1),e("div",Ea,[u(o(I),{value:s.value&&s.value.httpsProxy,placeholder:"",onInput:p[8]||(p[8]=l=>{s.value&&(s.value.httpsProxy=l)})},null,8,["value"])])]),e("div",Fa,[Ha,u(o(H),{loading:i.value,type:"primary",onClick:p[9]||(p[9]=l=>m(s.value))},{default:$(()=>[F(v(d.$t("common.save")),1)]),_:1},8,["loading"])])])])]}),_:1},8,["show"]))}}),ja={class:"p-4 space-y-5 min-h-[200px]"},La={class:"space-y-6"},Ka={class:"flex items-center space-x-4"},Wa={class:"flex-shrink-0 w-[100px]"},Ga={class:"flex-1"},Ya={class:"flex items-center space-x-4"},Xa={class:"flex-shrink-0 w-[100px]"},Ja={class:"flex-1"},qa={class:"flex items-center space-x-4"},Za={class:"flex-shrink-0 w-[100px]"},Qa={class:"flex-1"},en={class:"flex items-center space-x-4"},tn={class:"flex-shrink-0 w-[100px]"},sn={class:"flex-1"},an={class:"flex items-center space-x-4"},nn={class:"flex-shrink-0 w-[100px]"},ln={class:"flex-1"},on={class:"flex items-center space-x-4"},rn={class:"flex-shrink-0 w-[100px]"},dn={class:"flex-1"},un={class:"flex items-center space-x-4"},cn={class:"flex-shrink-0 w-[100px]"},vn={class:"flex-1"},hn={class:"flex items-center space-x-4"},fn=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),pn=ae({__name:"Site",setup(t){const c=xe(),b=_(!1),x=_(!1),i=_();i.value=new da;async function s(){try{b.value=!0;const{data:n}=await De();i.value=n.siteConfig}finally{b.value=!1}}async function k(n){if(n){x.value=!0;try{const{data:m}=await ls(n);i.value=m,c.success(se("common.success"))}catch(m){c.error(m.message)}x.value=!1}}return Ne(()=>{s()}),(n,m)=>(B(),Q(o(Pe),{show:b.value},{default:$(()=>[e("div",ja,[e("div",La,[e("div",Ka,[e("span",Wa,v(n.$t("setting.siteTitle")),1),e("div",Ga,[u(o(I),{value:i.value&&i.value.siteTitle,placeholder:"",onInput:m[0]||(m[0]=d=>{i.value&&(i.value.siteTitle=d)})},null,8,["value"])])]),e("div",Ya,[e("span",Xa,v(n.$t("setting.siteDomain")),1),e("div",Ja,[u(o(I),{value:i.value&&i.value.siteDomain,placeholder:"",onInput:m[1]||(m[1]=d=>{i.value&&(i.value.siteDomain=d)})},null,8,["value"])])]),e("div",qa,[e("span",Za,v(n.$t("setting.loginEnabled")),1),e("div",Qa,[u(o(ve),{round:!1,value:i.value&&i.value.loginEnabled,"onUpdate:value":m[2]||(m[2]=d=>{i.value&&(i.value.loginEnabled=d)})},null,8,["value"])])]),e("div",en,[e("span",tn,v(n.$t("setting.loginSalt")),1),e("div",sn,[u(o(I),{value:i.value&&i.value.loginSalt,placeholder:n.$t("setting.loginSaltTip"),onInput:m[3]||(m[3]=d=>{i.value&&(i.value.loginSalt=d)})},null,8,["value","placeholder"])])]),e("div",an,[e("span",nn,v(n.$t("setting.registerEnabled")),1),e("div",ln,[u(o(ve),{round:!1,value:i.value&&i.value.registerEnabled,"onUpdate:value":m[4]||(m[4]=d=>{i.value&&(i.value.registerEnabled=d)})},null,8,["value"])])]),as(e("div",on,[e("span",rn,v(n.$t("setting.registerReview")),1),e("div",dn,[u(o(ve),{round:!1,value:i.value&&i.value.registerReview,"onUpdate:value":m[5]||(m[5]=d=>{i.value&&(i.value.registerReview=d)})},null,8,["value"])])],512),[[ns,i.value&&i.value.registerEnabled]]),e("div",un,[e("span",cn,v(n.$t("setting.registerMails")),1),e("div",vn,[u(o(I),{value:i.value&&i.value.registerMails,placeholder:"",onInput:m[6]||(m[6]=d=>{i.value&&(i.value.registerMails=d)})},null,8,["value"])])]),e("div",hn,[fn,u(o(H),{loading:x.value,type:"primary",onClick:m[7]||(m[7]=d=>k(i.value))},{default:$(()=>[F(v(n.$t("common.save")),1)]),_:1},8,["loading"])])])])]),_:1},8,["show"]))}}),mn={class:"p-4 space-y-5 min-h-[200px]"},gn={class:"space-y-6"},bn={class:"flex items-center space-x-4"},xn={class:"flex-shrink-0 w-[100px]"},wn={class:"flex-1"},$n={class:"flex items-center space-x-4"},_n={class:"flex-shrink-0 w-[100px]"},yn={class:"flex-1"},kn={class:"flex items-center space-x-4"},Cn={class:"flex-shrink-0 w-[100px]"},Sn={class:"flex-1"},Rn={class:"flex items-center space-x-4"},zn={class:"flex-shrink-0 w-[100px]"},In={class:"flex-1"},Tn={class:"flex items-center space-x-4"},Bn={class:"flex-shrink-0 w-[100px]"},Vn={class:"flex-1"},Mn={class:"flex items-center space-x-4"},Un=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),An={class:"flex flex-wrap items-center gap-4"},Nn=ae({__name:"Mail",setup(t){const c=xe(),b=_(!1),x=_(!1),i=_(!1),s=_();async function k(){try{b.value=!0;const{data:d}=await De();s.value=d.mailConfig}finally{b.value=!1}}async function n(){x.value=!0;try{const{data:d}=await os(s.value);s.value=d,c.success(se("common.success"))}catch(d){c.error(d.message)}x.value=!1}async function m(){i.value=!0;try{const{message:d}=await is(s.value);c.success(d)}catch(d){c.error(d.message)}i.value=!1}return Ne(()=>{k()}),(d,p)=>(B(),Q(o(Pe),{show:b.value},{default:$(()=>[e("div",mn,[e("div",gn,[e("div",bn,[e("span",xn,v(d.$t("setting.smtpHost")),1),e("div",wn,[u(o(I),{value:s.value&&s.value.smtpHost,placeholder:"",onInput:p[0]||(p[0]=f=>{s.value&&(s.value.smtpHost=f)})},null,8,["value"])])]),e("div",$n,[e("span",_n,v(d.$t("setting.smtpPort")),1),e("div",yn,[u(o(I),{value:s.value&&s.value.smtpPort!==void 0?String(s.value.smtpPort):void 0,placeholder:"",onInput:p[1]||(p[1]=f=>{s.value&&(s.value.smtpPort=typeof f=="string"?Number(f):void 0)})},null,8,["value"])])]),e("div",kn,[e("span",Cn,v(d.$t("setting.smtpTsl")),1),e("div",Sn,[u(o(ve),{round:!1,value:s.value&&s.value.smtpTsl,"onUpdate:value":p[2]||(p[2]=f=>{s.value&&(s.value.smtpTsl=f)})},null,8,["value"])])]),e("div",Rn,[e("span",zn,v(d.$t("setting.smtpUserName")),1),e("div",In,[u(o(I),{value:s.value&&s.value.smtpUserName,placeholder:"",onInput:p[3]||(p[3]=f=>{s.value&&(s.value.smtpUserName=f)})},null,8,["value"])])]),e("div",Tn,[e("span",Bn,v(d.$t("setting.smtpPassword")),1),e("div",Vn,[u(o(I),{value:s.value&&s.value.smtpPassword,placeholder:"",onInput:p[4]||(p[4]=f=>{s.value&&(s.value.smtpPassword=f)})},null,8,["value"])])]),e("div",Mn,[Un,e("div",An,[u(o(H),{loading:x.value,type:"primary",onClick:p[5]||(p[5]=f=>n())},{default:$(()=>[F(v(d.$t("common.save")),1)]),_:1},8,["loading"]),u(o(H),{loading:i.value,type:"info",onClick:p[6]||(p[6]=f=>m())},{default:$(()=>[F(v(d.$t("common.test")),1)]),_:1},8,["loading"])])])])])]),_:1},8,["show"]))}}),Pn={class:"p-4 space-y-5 min-h-[200px]"},Dn={class:"space-y-6"},En={class:"flex items-center space-x-4"},Fn={class:"flex-shrink-0 w-[100px]"},Hn={class:"flex-1"},On={key:0,class:"flex items-center space-x-4"},jn={class:"flex-shrink-0 w-[100px]"},Ln={class:"flex-1"},Kn={class:"flex items-center space-x-4"},Wn={class:"flex-shrink-0 w-[100px]"},Gn={class:"flex-1"},Yn={key:1,class:"flex items-center space-x-4"},Xn={class:"flex-shrink-0 w-[100px]"},Jn={class:"flex-1"},qn={key:2,class:"flex items-center space-x-4"},Zn={class:"flex-shrink-0 w-[100px]"},Qn={class:"flex-1"},el={key:3,class:"flex items-center space-x-4"},tl={class:"flex-shrink-0 w-[100px]"},sl={class:"flex-1"},al={key:4,class:"flex items-center space-x-4"},nl={class:"flex-shrink-0 w-[100px]"},ll={class:"flex-1"},ol={key:0},il={target:"_blank",href:"https://ai.baidu.com/ai-doc/ANTIPORN/Nk3h6xbb2#%E7%BB%86%E5%88%86%E6%A0%87%E7%AD%BE%E5%AF%B9%E7%85%A7%E8%A1%A8"},rl={key:5,class:"flex items-center space-x-4"},dl={class:"flex-shrink-0 w-[100px]"},ul={class:"flex-1"},cl={class:"flex items-center space-x-4"},vl=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),hl={class:"flex flex-wrap items-center gap-4"},fl=ae({__name:"Audit",setup(t){const c=xe(),b=_(!1),x=_(!1),i=_(!1),s=_(),k=[{label:"百度云",key:"baidu",value:"baidu"}],n=_();async function m(){try{b.value=!0;const{data:f}=await De();n.value=f.auditConfig}finally{b.value=!1}}async function d(){x.value=!0;try{const{data:f}=await rs(n.value);n.value=f,c.success(se("common.success"))}catch(f){c.error(f.message)}x.value=!1}async function p(){i.value=!0;try{const{message:f}=await ds(s.value,n.value);c.success(f)}catch(f){c.error(f.message)}i.value=!1}return Ne(()=>{m()}),(f,l)=>(B(),Q(o(Pe),{show:b.value},{default:$(()=>[e("div",Pn,[e("div",Dn,[e("div",En,[e("span",Fn,v(f.$t("setting.auditCustomizeEnabled")),1),e("div",Hn,[u(o(ve),{round:!1,value:n.value&&n.value.customizeEnabled,"onUpdate:value":l[0]||(l[0]=g=>{n.value&&(n.value.customizeEnabled=g)})},null,8,["value"])])]),n.value&&n.value.customizeEnabled?(B(),G("div",On,[e("span",jn,v(f.$t("setting.auditCustomizeWords")),1),e("div",Ln,[u(o(I),{value:n.value&&n.value.sensitiveWords,placeholder:"One word per line",type:"textarea",autosize:{minRows:1,maxRows:4},onInput:l[1]||(l[1]=g=>{n.value&&(n.value.sensitiveWords=g)})},null,8,["value"])])])):O("",!0),e("div",Kn,[e("span",Wn,v(f.$t("setting.auditEnabled")),1),e("div",Gn,[u(o(ve),{round:!1,value:n.value&&n.value.enabled,"onUpdate:value":l[2]||(l[2]=g=>{n.value&&(n.value.enabled=g)})},null,8,["value"])])]),n.value&&n.value.enabled?(B(),G("div",Yn,[e("span",Xn,v(f.$t("setting.auditProvider")),1),e("div",Jn,[u(o(vt),{style:{width:"140px"},value:n.value&&n.value.provider,options:k,onUpdateValue:l[3]||(l[3]=g=>{n.value&&(n.value.provider=g)})},null,8,["value"])])])):O("",!0),n.value&&n.value.enabled?(B(),G("div",qn,[e("span",Zn,v(f.$t("setting.auditApiKey")),1),e("div",Qn,[u(o(I),{value:n.value&&n.value.options&&n.value.options.apiKey,placeholder:"",onInput:l[4]||(l[4]=g=>{n.value&&n.value.options&&(n.value.options.apiKey=g)})},null,8,["value"])])])):O("",!0),n.value&&n.value.enabled?(B(),G("div",el,[e("span",tl,v(f.$t("setting.auditApiSecret")),1),e("div",sl,[u(o(I),{value:n.value&&n.value.options&&n.value.options.apiSecret,placeholder:"",onInput:l[5]||(l[5]=g=>{n.value&&n.value.options&&(n.value.options.apiSecret=g)})},null,8,["value"])])])):O("",!0),n.value&&n.value.enabled?(B(),G("div",al,[e("span",nl,v(f.$t("setting.auditBaiduLabel")),1),e("div",ll,[u(o(I),{value:n.value&&n.value.options&&n.value.options.label,placeholder:f.$t("setting.auditBaiduLabelTip"),onInput:l[6]||(l[6]=g=>{n.value&&n.value.options&&(n.value.options.label=g)})},null,8,["value","placeholder"])]),n.value&&n.value.provider==="baidu"?(B(),G("p",ol,[e("a",il,v(f.$t("setting.auditBaiduLabelLink")),1)])):O("",!0)])):O("",!0),n.value&&(n.value.enabled||n.value.customizeEnabled)?(B(),G("div",rl,[e("span",dl,v(f.$t("setting.auditTest")),1),e("div",ul,[u(o(I),{value:s.value,"onUpdate:value":l[7]||(l[7]=g=>s.value=g),placeholder:""},null,8,["value"])])])):O("",!0),e("div",cl,[vl,e("div",hl,[u(o(H),{loading:x.value,type:"primary",onClick:l[8]||(l[8]=g=>d())},{default:$(()=>[F(v(f.$t("common.save")),1)]),_:1},8,["loading"]),u(o(H),{loading:i.value,type:"info",onClick:l[9]||(l[9]=g=>p())},{default:$(()=>[F(v(f.$t("common.test")),1)]),_:1},8,["loading"])])])])])]),_:1},8,["show"]))}}),pl={class:"ml-2"},ml={class:"min-h-[100px]"},gl={class:"ml-2"},bl={class:"min-h-[100px]"},xl={class:"ml-2"},wl={class:"ml-2"},$l={class:"ml-2"},_l={class:"ml-2"},Rl=ae({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(t,{emit:c}){const b=t,x=ut(),i=ct(),s=D(()=>!!i.isChatGPTAPI),k=_("General"),n=D({get(){return b.visible},set(m){c("update:visible",m)}});return(m,d)=>(B(),Q(o(us),{show:n.value,"onUpdate:show":d[1]||(d[1]=p=>n.value=p),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"1024px"}},{default:$(()=>[e("div",null,[u(o(vs),{value:k.value,"onUpdate:value":d[0]||(d[0]=p=>k.value=p),type:"line",animated:""},{default:$(()=>[u(o(be),{name:"General",tab:"General"},{tab:$(()=>[u(o(Z),{class:"text-lg",icon:"ri:file-user-line"}),e("span",pl,v(m.$t("setting.general")),1)]),default:$(()=>[e("div",ml,[u(Fs)])]),_:1}),s.value?(B(),Q(o(be),{key:0,name:"Advanced",tab:"Advanced"},{tab:$(()=>[u(o(Z),{class:"text-lg",icon:"ri:equalizer-line"}),e("span",gl,v(m.$t("setting.advanced")),1)]),default:$(()=>[e("div",bl,[u(ia)])]),_:1})):O("",!0),o(x).userInfo.root?(B(),Q(o(be),{key:1,name:"Config",tab:"Config"},{tab:$(()=>[u(o(Z),{class:"text-lg",icon:"ri:list-settings-line"}),e("span",xl,v(m.$t("setting.config")),1)]),default:$(()=>[u(Oa)]),_:1})):O("",!0),o(x).userInfo.root?(B(),Q(o(be),{key:2,name:"SiteConfig",tab:"SiteConfig"},{tab:$(()=>[u(o(Z),{class:"text-lg",icon:"ri:settings-line"}),e("span",wl,v(m.$t("setting.siteConfig")),1)]),default:$(()=>[u(pn)]),_:1})):O("",!0),o(x).userInfo.root?(B(),Q(o(be),{key:3,name:"MailConfig",tab:"MailConfig"},{tab:$(()=>[u(o(Z),{class:"text-lg",icon:"ri:mail-line"}),e("span",$l,v(m.$t("setting.mailConfig")),1)]),default:$(()=>[u(Nn)]),_:1})):O("",!0),o(x).userInfo.root?(B(),Q(o(be),{key:4,name:"AuditConfig",tab:"AuditConfig"},{tab:$(()=>[u(o(Z),{class:"text-lg",icon:"ri:settings-line"}),e("span",_l,v(m.$t("setting.auditConfig")),1)]),default:$(()=>[u(fl)]),_:1})):O("",!0)]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{Rl as default};
