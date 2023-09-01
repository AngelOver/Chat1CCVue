import{j as q,bc as et,bd as tt,O as Se,be as nt,bf as ot,n as E,r as U,a4 as te,aZ as ye,aY as Q,v as y,a1 as rt,U as Ne,bg as fe,bh as it,bi as Pe,b as Ae,g as D,J as G,f as W,u as $e,m as Y,bj as lt,bk as st,K as we,bl as at,L as F,p as ze,bm as He,bn as Re,a5 as je,T as ct,Z as j,ac as X,i as dt,t as V,bo as ut,w as Me,bp as he,a3 as ke,R as Ce,b0 as ft,bq as ht,Q as vt,ay as gt,br as pt,G as bt,bs as mt,bt as yt,M as Ie,bu as kt,E as Ct}from"./index-76253c1b.js";function Oe(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function ve(e){const n=e.filter(t=>t!==void 0);if(n.length!==0)return n.length===1?n[0]:t=>{e.forEach(o=>{o&&o(t)})}}function Le(e){return e&-e}class xt{constructor(n,t){this.l=n,this.min=t;const o=new Array(n+1);for(let r=0;r<n+1;++r)o[r]=0;this.ft=o}add(n,t){if(t===0)return;const{l:o,ft:r}=this;for(n+=1;n<=o;)r[n]+=t,n+=Le(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:t,min:o,l:r}=this;if(n>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let l=n*o;for(;n>0;)l+=t[n],n-=Le(n);return l}getBound(n){let t=0,o=this.l;for(;o>t;){const r=Math.floor((t+o)/2),l=this.sum(r);if(l>n){o=r;continue}else if(l<n){if(t===r)return this.sum(t+1)<=n?t+1:r;t=r}else return r}return t}}let ee;function St(){return ee===void 0&&("matchMedia"in window?ee=window.matchMedia("(pointer:coarse)").matches:ee=!1),ee}let ge;function Fe(){return ge===void 0&&(ge="chrome"in window?window.devicePixelRatio:1),ge}const wt=fe(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[fe("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[fe("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),zt=q({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=et();wt.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:tt,ssr:n}),Se(()=>{const{defaultScrollIndex:d,defaultScrollKey:m}=e;d!=null?h({index:d}):m!=null&&h({key:m})});let t=!1,o=!1;nt(()=>{if(t=!1,!o){o=!0;return}h({top:c.value,left:u})}),ot(()=>{t=!0,o||(o=!0)});const r=E(()=>{const d=new Map,{keyField:m}=e;return e.items.forEach((w,M)=>{d.set(w[m],M)}),d}),l=U(null),i=U(void 0),a=new Map,g=E(()=>{const{items:d,itemSize:m,keyField:w}=e,M=new xt(d.length,m);return d.forEach((I,L)=>{const z=I[w],_=a.get(z);_!==void 0&&M.add(L,_)}),M}),f=U(0);let u=0;const c=U(0),C=te(()=>Math.max(g.value.getBound(c.value-ye(e.paddingTop))-1,0)),k=E(()=>{const{value:d}=i;if(d===void 0)return[];const{items:m,itemSize:w}=e,M=C.value,I=Math.min(M+Math.ceil(d/w+1),m.length-1),L=[];for(let z=M;z<=I;++z)L.push(m[z]);return L}),h=(d,m)=>{if(typeof d=="number"){R(d,m,"auto");return}const{left:w,top:M,index:I,key:L,position:z,behavior:_,debounce:s=!0}=d;if(w!==void 0||M!==void 0)R(w,M,_);else if(I!==void 0)x(I,_,s);else if(L!==void 0){const v=r.value.get(L);v!==void 0&&x(v,_,s)}else z==="bottom"?R(0,Number.MAX_SAFE_INTEGER,_):z==="top"&&R(0,0,_)};let S,N=null;function x(d,m,w){const{value:M}=g,I=M.sum(d)+ye(e.paddingTop);if(!w)l.value.scrollTo({left:0,top:I,behavior:m});else{S=d,N!==null&&window.clearTimeout(N),N=window.setTimeout(()=>{S=void 0,N=null},16);const{scrollTop:L,offsetHeight:z}=l.value;if(I>L){const _=M.get(d);I+_<=L+z||l.value.scrollTo({left:0,top:I+_-z,behavior:m})}else l.value.scrollTo({left:0,top:I,behavior:m})}}function R(d,m,w){l.value.scrollTo({left:d,top:m,behavior:w})}function B(d,m){var w,M,I;if(t||e.ignoreItemResize||P(m.target))return;const{value:L}=g,z=r.value.get(d),_=L.get(z),s=(I=(M=(w=m.borderBoxSize)===null||w===void 0?void 0:w[0])===null||M===void 0?void 0:M.blockSize)!==null&&I!==void 0?I:m.contentRect.height;if(s===_)return;s-e.itemSize===0?a.delete(d):a.set(d,s-e.itemSize);const T=s-_;if(T===0)return;L.add(z,T);const H=l.value;if(H!=null){if(S===void 0){const Z=L.sum(z);H.scrollTop>Z&&H.scrollBy(0,T)}else if(z<S)H.scrollBy(0,T);else if(z===S){const Z=L.sum(z);s+Z>H.scrollTop+H.offsetHeight&&H.scrollBy(0,T)}K()}f.value++}const p=!St();let b=!1;function O(d){var m;(m=e.onScroll)===null||m===void 0||m.call(e,d),(!p||!b)&&K()}function $(d){var m;if((m=e.onWheel)===null||m===void 0||m.call(e,d),p){const w=l.value;if(w!=null){if(d.deltaX===0&&(w.scrollTop===0&&d.deltaY<=0||w.scrollTop+w.offsetHeight>=w.scrollHeight&&d.deltaY>=0))return;d.preventDefault(),w.scrollTop+=d.deltaY/Fe(),w.scrollLeft+=d.deltaX/Fe(),K(),b=!0,it(()=>{b=!1})}}}function A(d){if(t||P(d.target)||d.contentRect.height===i.value)return;i.value=d.contentRect.height;const{onResize:m}=e;m!==void 0&&m(d)}function K(){const{value:d}=l;d!=null&&(c.value=d.scrollTop,u=d.scrollLeft)}function P(d){let m=d;for(;m!==null;){if(m.style.display==="none")return!0;m=m.parentElement}return!1}return{listHeight:i,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:E(()=>{const{itemResizable:d}=e,m=Q(g.value.sum());return f.value,[e.itemsStyle,{boxSizing:"content-box",height:d?"":m,minHeight:d?m:"",paddingTop:Q(e.paddingTop),paddingBottom:Q(e.paddingBottom)}]}),visibleItemsStyle:E(()=>(f.value,{transform:`translateY(${Q(g.value.sum(C.value))})`})),viewportItems:k,listElRef:l,itemsElRef:U(null),scrollTo:h,handleListResize:A,handleListScroll:O,handleListWheel:$,handleItemResize:B}},render(){const{itemResizable:e,keyField:n,keyToIndex:t,visibleItemsTag:o}=this;return y(Ne,{onResize:this.handleListResize},{default:()=>{var r,l;return y("div",rt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?y("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[y(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(i=>{const a=i[n],g=t.get(a),f=this.$slots.default({item:i,index:g})[0];return e?y(Ne,{key:a,onResize:u=>this.handleItemResize(a,u)},{default:()=>f}):(f.key=a,f)})})]):(l=(r=this.$slots).empty)===null||l===void 0?void 0:l.call(r)])}})}});function Rt(e,n){n&&(Se(()=>{const{value:t}=e;t&&Pe.registerHandler(t,n)}),Ae(()=>{const{value:t}=e;t&&Pe.unregisterHandler(t)}))}const Tt=q({name:"Checkmark",render(){return y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Nt=q({name:"Empty",render(){return y("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),y("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Pt=q({props:{onFocus:Function,onBlur:Function},setup(e){return()=>y("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Ee(e){return Array.isArray(e)?e:[e]}const xe={STOP:"STOP"};function Ge(e,n){const t=n(e);e.children!==void 0&&t!==xe.STOP&&e.children.forEach(o=>Ge(o,n))}function Mt(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?i=>{i.isLeaf||(o.push(i.key),l(i.children))}:i=>{i.isLeaf||(i.isGroup||o.push(i.key),l(i.children))};function l(i){i.forEach(r)}return l(e),o}function It(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Ot(e){return e.children}function Lt(e){return e.key}function Ft(){return!1}function Et(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function Bt(e){return e.disabled===!0}function _t(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function pe(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function be(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function Kt(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function At(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function $t(e){return(e==null?void 0:e.type)==="group"}function Ht(e){const n=new Map;return e.forEach((t,o)=>{n.set(t.key,o)}),t=>{var o;return(o=n.get(t))!==null&&o!==void 0?o:null}}class jt extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Gt(e,n,t,o){return ne(n.concat(e),t,o,!1)}function Vt(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let l=r.parent;for(;l!==null&&!(l.disabled||t.has(l.key));)t.add(l.key),l=l.parent}}),t}function Dt(e,n,t,o){const r=ne(n,t,o,!1),l=ne(e,t,o,!0),i=Vt(e,t),a=[];return r.forEach(g=>{(l.has(g)||i.has(g))&&a.push(g)}),a.forEach(g=>r.delete(g)),r}function me(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:l,cascade:i,leafOnly:a,checkStrategy:g,allowNotLoaded:f}=e;if(!i)return o!==void 0?{checkedKeys:Kt(t,o),indeterminateKeys:Array.from(l)}:r!==void 0?{checkedKeys:At(t,r),indeterminateKeys:Array.from(l)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(l)};const{levelTreeNodeMap:u}=n;let c;r!==void 0?c=Dt(r,t,n,f):o!==void 0?c=Gt(o,t,n,f):c=ne(t,n,f,!1);const C=g==="parent",k=g==="child"||a,h=c,S=new Set,N=Math.max.apply(null,Array.from(u.keys()));for(let x=N;x>=0;x-=1){const R=x===0,B=u.get(x);for(const p of B){if(p.isLeaf)continue;const{key:b,shallowLoaded:O}=p;if(k&&O&&p.children.forEach(P=>{!P.disabled&&!P.isLeaf&&P.shallowLoaded&&h.has(P.key)&&h.delete(P.key)}),p.disabled||!O)continue;let $=!0,A=!1,K=!0;for(const P of p.children){const d=P.key;if(!P.disabled){if(K&&(K=!1),h.has(d))A=!0;else if(S.has(d)){A=!0,$=!1;break}else if($=!1,A)break}}$&&!K?(C&&p.children.forEach(P=>{!P.disabled&&h.has(P.key)&&h.delete(P.key)}),h.add(b)):A&&S.add(b),R&&k&&h.has(b)&&h.delete(b)}}return{checkedKeys:Array.from(h),indeterminateKeys:Array.from(S)}}function ne(e,n,t,o){const{treeNodeMap:r,getChildren:l}=n,i=new Set,a=new Set(e);return e.forEach(g=>{const f=r.get(g);f!==void 0&&Ge(f,u=>{if(u.disabled)return xe.STOP;const{key:c}=u;if(!i.has(c)&&(i.add(c),a.add(c),_t(u.rawNode,l))){if(o)return xe.STOP;if(!t)throw new jt}})}),a}function Ut(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const l=o.treeNodeMap;let i=e==null?null:(r=l.get(e))!==null&&r!==void 0?r:null;const a={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return a.treeNode=null,a;for(;i;)!i.ignored&&(n||!i.isGroup)&&a.treeNodePath.push(i),i=i.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(g=>g.key),a}function Wt(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function qt(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function Be(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?Zt:qt,l={reverse:n==="prev"};let i=!1,a=null;function g(f){if(f!==null){if(f===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!f.disabled||o)&&!f.ignored&&!f.isGroup){a=f;return}if(f.isGroup){const u=Te(f,l);u!==null?a=u:g(r(f,t))}else{const u=r(f,!1);if(u!==null)g(u);else{const c=Yt(f);c!=null&&c.isGroup?g(r(c,t)):t&&g(r(f,!0))}}}}return g(e),a}function Zt(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function Yt(e){return e.parent}function Te(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,l=t?r-1:0,i=t?-1:r,a=t?-1:1;for(let g=l;g!==i;g+=a){const f=o[g];if(!f.disabled&&!f.ignored)if(f.isGroup){const u=Te(f,n);if(u!==null)return u}else return f}}return null}const Xt={getChild(){return this.ignored?null:Te(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Be(this,"next",e)},getPrev(e={}){return Be(this,"prev",e)}};function Jt(e,n){const t=n?new Set(n):void 0,o=[];function r(l){l.forEach(i=>{o.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||t===void 0||t.has(i.key))&&r(i.children)})}return r(e),o}function Qt(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Ve(e,n,t,o,r,l=null,i=0){const a=[];return e.forEach((g,f)=>{var u;const c=Object.create(o);if(c.rawNode=g,c.siblings=a,c.level=i,c.index=f,c.isFirstChild=f===0,c.isLastChild=f+1===e.length,c.parent=l,!c.ignored){const C=r(g);Array.isArray(C)&&(c.children=Ve(C,n,t,o,r,c,i+1))}a.push(c),n.set(c.key,c),t.has(i)||t.set(i,[]),(u=t.get(i))===null||u===void 0||u.push(c)}),a}function un(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:l=Bt,getIgnored:i=Ft,getIsGroup:a=$t,getKey:g=Lt}=n,f=(t=n.getChildren)!==null&&t!==void 0?t:Ot,u=n.ignoreEmptyChildren?p=>{const b=f(p);return Array.isArray(b)?b.length?b:null:b}:f,c=Object.assign({get key(){return g(this.rawNode)},get disabled(){return l(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return It(this.rawNode,u)},get shallowLoaded(){return Et(this.rawNode,u)},get ignored(){return i(this.rawNode)},contains(p){return Qt(this,p)}},Xt),C=Ve(e,o,r,c,u);function k(p){if(p==null)return null;const b=o.get(p);return b&&!b.isGroup&&!b.ignored?b:null}function h(p){if(p==null)return null;const b=o.get(p);return b&&!b.ignored?b:null}function S(p,b){const O=h(p);return O?O.getPrev(b):null}function N(p,b){const O=h(p);return O?O.getNext(b):null}function x(p){const b=h(p);return b?b.getParent():null}function R(p){const b=h(p);return b?b.getChild():null}const B={treeNodes:C,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(p){return Jt(C,p)},getNode:k,getPrev:S,getNext:N,getParent:x,getChild:R,getFirstAvailableNode(){return Wt(C)},getPath(p,b={}){return Ut(p,b,B)},getCheckedKeys(p,b={}){const{cascade:O=!0,leafOnly:$=!1,checkStrategy:A="all",allowNotLoaded:K=!1}=b;return me({checkedKeys:pe(p),indeterminateKeys:be(p),cascade:O,leafOnly:$,checkStrategy:A,allowNotLoaded:K},B)},check(p,b,O={}){const{cascade:$=!0,leafOnly:A=!1,checkStrategy:K="all",allowNotLoaded:P=!1}=O;return me({checkedKeys:pe(b),indeterminateKeys:be(b),keysToCheck:p==null?[]:Ee(p),cascade:$,leafOnly:A,checkStrategy:K,allowNotLoaded:P},B)},uncheck(p,b,O={}){const{cascade:$=!0,leafOnly:A=!1,checkStrategy:K="all",allowNotLoaded:P=!1}=O;return me({checkedKeys:pe(b),indeterminateKeys:be(b),keysToUncheck:p==null?[]:Ee(p),cascade:$,leafOnly:A,checkStrategy:K,allowNotLoaded:P},B)},getNonLeafKeys(p={}){return Mt(C,p)}};return B}const en=D("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[G("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[W("+",[G("description",`
 margin-top: 8px;
 `)])]),G("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),G("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),tn=Object.assign(Object.assign({},Y.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),nn=q({name:"Empty",props:tn,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=$e(e),o=Y("Empty","-empty",en,lt,e,n),{localeRef:r}=st("Empty"),l=we(at,null),i=E(()=>{var u,c,C;return(u=e.description)!==null&&u!==void 0?u:(C=(c=l==null?void 0:l.mergedComponentPropsRef.value)===null||c===void 0?void 0:c.Empty)===null||C===void 0?void 0:C.description}),a=E(()=>{var u,c;return((c=(u=l==null?void 0:l.mergedComponentPropsRef.value)===null||u===void 0?void 0:u.Empty)===null||c===void 0?void 0:c.renderIcon)||(()=>y(Nt,null))}),g=E(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:c},self:{[F("iconSize",u)]:C,[F("fontSize",u)]:k,textColor:h,iconColor:S,extraTextColor:N}}=o.value;return{"--n-icon-size":C,"--n-font-size":k,"--n-bezier":c,"--n-text-color":h,"--n-icon-color":S,"--n-extra-text-color":N}}),f=t?ze("empty",E(()=>{let u="";const{size:c}=e;return u+=c[0],u}),g,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:a,localizedDescription:E(()=>i.value||r.value.description),cssVars:t?void 0:g,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:t}=this;return t==null||t(),y("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?y("div",{class:`${n}-empty__icon`},e.icon?e.icon():y(He,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?y("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?y("div",{class:`${n}-empty__extra`},e.extra()):null)}});function on(e,n){return y(ct,{name:"fade-in-scale-up-transition"},{default:()=>e?y(He,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>y(Tt)}):null})}const _e=q({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:t,multipleRef:o,valueSetRef:r,renderLabelRef:l,renderOptionRef:i,labelFieldRef:a,valueFieldRef:g,showCheckmarkRef:f,nodePropsRef:u,handleOptionClick:c,handleOptionMouseEnter:C}=we(Re),k=te(()=>{const{value:x}=t;return x?e.tmNode.key===x.key:!1});function h(x){const{tmNode:R}=e;R.disabled||c(x,R)}function S(x){const{tmNode:R}=e;R.disabled||C(x,R)}function N(x){const{tmNode:R}=e,{value:B}=k;R.disabled||B||C(x,R)}return{multiple:o,isGrouped:te(()=>{const{tmNode:x}=e,{parent:R}=x;return R&&R.rawNode.type==="group"}),showCheckmark:f,nodeProps:u,isPending:k,isSelected:te(()=>{const{value:x}=n,{value:R}=o;if(x===null)return!1;const B=e.tmNode.rawNode[g.value];if(R){const{value:p}=r;return p.has(B)}else return x===B}),labelField:a,renderLabel:l,renderOption:i,handleMouseMove:N,handleMouseEnter:S,handleClick:h}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:t,isPending:o,isGrouped:r,showCheckmark:l,nodeProps:i,renderOption:a,renderLabel:g,handleClick:f,handleMouseEnter:u,handleMouseMove:c}=this,C=on(t,e),k=g?[g(n,t),l&&C]:[je(n[this.labelField],n,t),l&&C],h=i==null?void 0:i(n),S=y("div",Object.assign({},h,{class:[`${e}-base-select-option`,n.class,h==null?void 0:h.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:l}],style:[(h==null?void 0:h.style)||"",n.style||""],onClick:ve([f,h==null?void 0:h.onClick]),onMouseenter:ve([u,h==null?void 0:h.onMouseenter]),onMousemove:ve([c,h==null?void 0:h.onMousemove])}),y("div",{class:`${e}-base-select-option__content`},k));return n.render?n.render({node:S,option:n,selected:t}):a?a({node:S,option:n,selected:t}):S}}),Ke=q({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:t,nodePropsRef:o}=we(Re);return{labelField:t,nodeProps:o,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:t,nodeProps:o,tmNode:{rawNode:r}}=this,l=o==null?void 0:o(r),i=n?n(r,!1):je(r[this.labelField],r,!1),a=y("div",Object.assign({},l,{class:[`${e}-base-select-group-header`,l==null?void 0:l.class]}),i);return r.render?r.render({node:a,option:r}):t?t({node:a,option:r,selected:!1}):a}}),rn=D("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[D("scrollbar",`
 max-height: var(--n-height);
 `),D("virtual-list",`
 max-height: var(--n-height);
 `),D("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[G("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),D("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),D("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),G("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),G("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),G("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),D("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),D("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[j("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),W("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),W("&:active",`
 color: var(--n-option-text-color-pressed);
 `),j("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),j("pending",[W("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),j("selected",`
 color: var(--n-option-text-color-active);
 `,[W("&::before",`
 background-color: var(--n-option-color-active);
 `),j("pending",[W("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),j("disabled",`
 cursor: not-allowed;
 `,[X("selected",`
 color: var(--n-option-text-color-disabled);
 `),j("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),G("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[dt({enterScale:"0.5"})])])]),fn=q({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Y.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=Y("InternalSelectMenu","-internal-select-menu",rn,ut,e,V(e,"clsPrefix")),t=U(null),o=U(null),r=U(null),l=E(()=>e.treeMate.getFlattenedNodes()),i=E(()=>Ht(l.value)),a=U(null);function g(){const{treeMate:s}=e;let v=null;const{value:T}=e;T===null?v=s.getFirstAvailableNode():(e.multiple?v=s.getNode((T||[])[(T||[]).length-1]):v=s.getNode(T),(!v||v.disabled)&&(v=s.getFirstAvailableNode())),d(v||null)}function f(){const{value:s}=a;s&&!e.treeMate.getNode(s.key)&&(a.value=null)}let u;Me(()=>e.show,s=>{s?u=Me(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():f(),gt(m)):f()},{immediate:!0}):u==null||u()},{immediate:!0}),Ae(()=>{u==null||u()});const c=E(()=>ye(n.value.self[F("optionHeight",e.size)])),C=E(()=>he(n.value.self[F("padding",e.size)])),k=E(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),h=E(()=>{const s=l.value;return s&&s.length===0});function S(s){const{onToggle:v}=e;v&&v(s)}function N(s){const{onScroll:v}=e;v&&v(s)}function x(s){var v;(v=r.value)===null||v===void 0||v.sync(),N(s)}function R(){var s;(s=r.value)===null||s===void 0||s.sync()}function B(){const{value:s}=a;return s||null}function p(s,v){v.disabled||d(v,!1)}function b(s,v){v.disabled||S(v)}function O(s){var v;Oe(s,"action")||(v=e.onKeyup)===null||v===void 0||v.call(e,s)}function $(s){var v;Oe(s,"action")||(v=e.onKeydown)===null||v===void 0||v.call(e,s)}function A(s){var v;(v=e.onMousedown)===null||v===void 0||v.call(e,s),!e.focusable&&s.preventDefault()}function K(){const{value:s}=a;s&&d(s.getNext({loop:!0}),!0)}function P(){const{value:s}=a;s&&d(s.getPrev({loop:!0}),!0)}function d(s,v=!1){a.value=s,v&&m()}function m(){var s,v;const T=a.value;if(!T)return;const H=i.value(T.key);H!==null&&(e.virtualScroll?(s=o.value)===null||s===void 0||s.scrollTo({index:H}):(v=r.value)===null||v===void 0||v.scrollTo({index:H,elSize:c.value}))}function w(s){var v,T;!((v=t.value)===null||v===void 0)&&v.contains(s.target)&&((T=e.onFocus)===null||T===void 0||T.call(e,s))}function M(s){var v,T;!((v=t.value)===null||v===void 0)&&v.contains(s.relatedTarget)||(T=e.onBlur)===null||T===void 0||T.call(e,s)}ke(Re,{handleOptionMouseEnter:p,handleOptionClick:b,valueSetRef:k,pendingTmNodeRef:a,nodePropsRef:V(e,"nodeProps"),showCheckmarkRef:V(e,"showCheckmark"),multipleRef:V(e,"multiple"),valueRef:V(e,"value"),renderLabelRef:V(e,"renderLabel"),renderOptionRef:V(e,"renderOption"),labelFieldRef:V(e,"labelField"),valueFieldRef:V(e,"valueField")}),ke(pt,t),Se(()=>{const{value:s}=r;s&&s.sync()});const I=E(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:v},self:{height:T,borderRadius:H,color:Z,groupHeaderTextColor:re,actionDividerColor:ie,optionTextColorPressed:le,optionTextColor:J,optionTextColorDisabled:se,optionTextColorActive:ae,optionOpacityDisabled:ce,optionCheckColor:de,actionTextColor:Ue,optionColorPending:We,optionColorActive:qe,loadingColor:Ze,loadingSize:Ye,optionColorActivePending:Xe,[F("optionFontSize",s)]:Je,[F("optionHeight",s)]:Qe,[F("optionPadding",s)]:ue}}=n.value;return{"--n-height":T,"--n-action-divider-color":ie,"--n-action-text-color":Ue,"--n-bezier":v,"--n-border-radius":H,"--n-color":Z,"--n-option-font-size":Je,"--n-group-header-text-color":re,"--n-option-check-color":de,"--n-option-color-pending":We,"--n-option-color-active":qe,"--n-option-color-active-pending":Xe,"--n-option-height":Qe,"--n-option-opacity-disabled":ce,"--n-option-text-color":J,"--n-option-text-color-active":ae,"--n-option-text-color-disabled":se,"--n-option-text-color-pressed":le,"--n-option-padding":ue,"--n-option-padding-left":he(ue,"left"),"--n-option-padding-right":he(ue,"right"),"--n-loading-color":Ze,"--n-loading-size":Ye}}),{inlineThemeDisabled:L}=e,z=L?ze("internal-select-menu",E(()=>e.size[0]),I,e):void 0,_={selfRef:t,next:K,prev:P,getPendingTmNode:B};return Rt(t,e.onResize),Object.assign({mergedTheme:n,virtualListRef:o,scrollbarRef:r,itemSize:c,padding:C,flattenedNodes:l,empty:h,virtualListContainer(){const{value:s}=o;return s==null?void 0:s.listElRef},virtualListContent(){const{value:s}=o;return s==null?void 0:s.itemsElRef},doScroll:N,handleFocusin:w,handleFocusout:M,handleKeyUp:O,handleKeyDown:$,handleMouseDown:A,handleVirtualListResize:R,handleVirtualListScroll:x,cssVars:L?void 0:I,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender},_)},render(){const{$slots:e,virtualScroll:n,clsPrefix:t,mergedTheme:o,themeClass:r,onRender:l}=this;return l==null||l(),y("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?y("div",{class:`${t}-base-select-menu__loading`},y(ft,{clsPrefix:t,strokeWidth:20})):this.empty?y("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},vt(e.empty,()=>[y(nn,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):y(ht,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?y(zt,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:i})=>i.isGroup?y(Ke,{key:i.key,clsPrefix:t,tmNode:i}):i.ignored?null:y(_e,{clsPrefix:t,key:i.key,tmNode:i})}):y("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(i=>i.isGroup?y(Ke,{key:i.key,clsPrefix:t,tmNode:i}):y(_e,{clsPrefix:t,key:i.key,tmNode:i})))}),Ce(e.action,i=>i&&[y("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},i),y(Pt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),ln={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},sn=D("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[j("strong",`
 font-weight: var(--n-font-weight-strong);
 `),G("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),G("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),G("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),G("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),j("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[G("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),G("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),j("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),j("icon, avatar",[j("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),j("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),j("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[X("disabled",[W("&:hover","background-color: var(--n-color-hover-checkable);",[X("checked","color: var(--n-text-color-hover-checkable);")]),W("&:active","background-color: var(--n-color-pressed-checkable);",[X("checked","color: var(--n-text-color-pressed-checkable);")])]),j("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[X("disabled",[W("&:hover","background-color: var(--n-color-checked-hover);"),W("&:active","background-color: var(--n-color-checked-pressed);")])])])]),an=Object.assign(Object.assign(Object.assign({},Y.props),ln),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),cn=bt("n-tag"),hn=q({name:"Tag",props:an,setup(e){const n=U(null),{mergedBorderedRef:t,mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:l}=$e(e),i=Y("Tag","-tag",sn,mt,e,o);ke(cn,{roundRef:V(e,"round")});function a(k){if(!e.disabled&&e.checkable){const{checked:h,onCheckedChange:S,onUpdateChecked:N,"onUpdate:checked":x}=e;N&&N(!h),x&&x(!h),S&&S(!h)}}function g(k){if(e.triggerClickOnClose||k.stopPropagation(),!e.disabled){const{onClose:h}=e;h&&Ct(h,k)}}const f={setTextContent(k){const{value:h}=n;h&&(h.textContent=k)}},u=yt("Tag",l,o),c=E(()=>{const{type:k,size:h,color:{color:S,textColor:N}={}}=e,{common:{cubicBezierEaseInOut:x},self:{padding:R,closeMargin:B,closeMarginRtl:p,borderRadius:b,opacityDisabled:O,textColorCheckable:$,textColorHoverCheckable:A,textColorPressedCheckable:K,textColorChecked:P,colorCheckable:d,colorHoverCheckable:m,colorPressedCheckable:w,colorChecked:M,colorCheckedHover:I,colorCheckedPressed:L,closeBorderRadius:z,fontWeightStrong:_,[F("colorBordered",k)]:s,[F("closeSize",h)]:v,[F("closeIconSize",h)]:T,[F("fontSize",h)]:H,[F("height",h)]:Z,[F("color",k)]:re,[F("textColor",k)]:ie,[F("border",k)]:le,[F("closeIconColor",k)]:J,[F("closeIconColorHover",k)]:se,[F("closeIconColorPressed",k)]:ae,[F("closeColorHover",k)]:ce,[F("closeColorPressed",k)]:de}}=i.value;return{"--n-font-weight-strong":_,"--n-avatar-size-override":`calc(${Z} - 8px)`,"--n-bezier":x,"--n-border-radius":b,"--n-border":le,"--n-close-icon-size":T,"--n-close-color-pressed":de,"--n-close-color-hover":ce,"--n-close-border-radius":z,"--n-close-icon-color":J,"--n-close-icon-color-hover":se,"--n-close-icon-color-pressed":ae,"--n-close-icon-color-disabled":J,"--n-close-margin":B,"--n-close-margin-rtl":p,"--n-close-size":v,"--n-color":S||(t.value?s:re),"--n-color-checkable":d,"--n-color-checked":M,"--n-color-checked-hover":I,"--n-color-checked-pressed":L,"--n-color-hover-checkable":m,"--n-color-pressed-checkable":w,"--n-font-size":H,"--n-height":Z,"--n-opacity-disabled":O,"--n-padding":R,"--n-text-color":N||ie,"--n-text-color-checkable":$,"--n-text-color-checked":P,"--n-text-color-hover-checkable":A,"--n-text-color-pressed-checkable":K}}),C=r?ze("tag",E(()=>{let k="";const{type:h,size:S,color:{color:N,textColor:x}={}}=e;return k+=h[0],k+=S[0],N&&(k+=`a${Ie(N)}`),x&&(k+=`b${Ie(x)}`),t.value&&(k+="c"),k}),c,e):void 0;return Object.assign(Object.assign({},f),{rtlEnabled:u,mergedClsPrefix:o,contentRef:n,mergedBordered:t,handleClick:a,handleCloseClick:g,cssVars:r?void 0:c,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender})},render(){var e,n;const{mergedClsPrefix:t,rtlEnabled:o,closable:r,color:{borderColor:l}={},round:i,onRender:a,$slots:g}=this;a==null||a();const f=Ce(g.avatar,c=>c&&y("div",{class:`${t}-tag__avatar`},c)),u=Ce(g.icon,c=>c&&y("div",{class:`${t}-tag__icon`},c));return y("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:o,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:i,[`${t}-tag--avatar`]:f,[`${t}-tag--icon`]:u,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||f,y("span",{class:`${t}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&r?y(kt,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?y("div",{class:`${t}-tag__border`,style:{borderColor:l}}):null)}});function oe(e){return e.type==="group"}function De(e){return e.type==="ignored"}function vn(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function gn(e,n){return{getIsGroup:oe,getIgnored:De,getKey(o){return oe(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[n]}}}function pn(e,n,t,o){if(!n)return e;function r(l){if(!Array.isArray(l))return[];const i=[];for(const a of l)if(oe(a)){const g=r(a[o]);g.length&&i.push(Object.assign({},a,{[o]:g}))}else{if(De(a))continue;n(t,a)&&i.push(a)}return i}return r(e)}function bn(e,n,t){const o=new Map;return e.forEach(r=>{oe(r)?r[t].forEach(l=>{o.set(l[n],l)}):o.set(r[n],r)}),o}export{fn as N,zt as V,gn as a,nn as b,un as c,hn as d,bn as e,pn as f,Oe as h,ve as m,vn as p,cn as t,Rt as u};
