function v(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function D(t){return t()}function O(){return Object.create(null)}function g(t){t.forEach(D)}function T(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function _t(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function J(t){return Object.keys(t).length===0}function K(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t,e,n){t.$$.on_destroy.push(K(e,n))}function ht(t,e,n,i){if(t){const r=q(t,e,n,i);return t[0](r)}}function q(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function mt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function pt(t,e,n,i,r,l){if(r){const c=q(e,n,i,l);t.p(c,r)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function gt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let w=!1;function Q(){w=!0}function R(){w=!1}function U(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:U(1,r,x=>e[n[x]].claim_order,u))-1;i[s]=n[a]+1;const f=a+1;n[f]=s,r=Math.max(f,r)}const l=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[s],a)}}function V(t,e){if(w){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function xt(t,e,n){w&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function $t(){return S(" ")}function vt(){return S("")}function B(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const tt=["width","height"];function wt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&tt.indexOf(i)===-1?t[i]=e[i]:B(t,i,e[i])}function Et(t,e){for(const n in e)B(t,n,e[n])}function et(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,i,r=!1){nt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function F(t,e,n,i){return z(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function kt(t,e,n){return F(t,e,n,Y)}function Nt(t,e,n){return F(t,e,n,Z)}function it(t,e){return z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function At(t){return it(t," ")}function St(t,e){e=""+e,t.data!==e&&(t.data=e)}function jt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function rt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Ct(t,e){return new t(e)}let y;function p(t){y=t}function E(){if(!y)throw new Error("Function called outside component initialization");return y}function Ot(t){E().$$.on_mount.push(t)}function Mt(t){E().$$.after_update.push(t)}function Pt(t){E().$$.on_destroy.push(t)}function Dt(){const t=E();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=rt(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}const h=[],M=[];let m=[];const P=[],H=Promise.resolve();let N=!1;function I(){N||(N=!0,H.then(L))}function Tt(){return I(),H}function A(t){m.push(t)}const k=new Set;let d=0;function L(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const e=h[d];d++,p(e),ct(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;M.length;)M.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];k.has(n)||(k.add(n),n())}m.length=0}while(h.length);for(;P.length;)P.pop()();N=!1,k.clear(),p(t)}function ct(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function st(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let _;function qt(){_={r:0,c:[],p:_}}function Bt(){_.r||g(_.c),_=_.p}function ot(t,e){t&&t.i&&($.delete(t),t.i(e))}function zt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ft(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],o=e[l];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(n[s]=o[s],r[s]=1);t[l]=o}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Ht(t){t&&t.c()}function It(t,e){t&&t.l(e)}function ut(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(D).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),l.forEach(A)}function lt(t,e){const n=t.$$;n.fragment!==null&&(st(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(h.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(t,e,n,i,r,l,c,o=[-1]){const s=y;p(t);const u=t.$$={fragment:null,ctx:[],props:l,update:v,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:O(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,x,...j)=>{const C=j.length?j[0]:x;return u.ctx&&r(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),a&&ft(t,f)),x}):[],u.update(),a=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){Q();const f=et(e.target);u.fragment&&u.fragment.l(f),f.forEach(X)}else u.fragment&&u.fragment.c();e.intro&&ot(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),R(),L()}p(s)}class Gt{$destroy(){lt(this,1),this.$destroy=v}$on(e,n){if(!T(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ut as A,lt as B,V as C,v as D,ht as E,pt as F,yt as G,mt as H,dt as I,_t as J,bt as K,Pt as L,G as M,gt as N,wt as O,Ft as P,Z as Q,Nt as R,Gt as S,Et as T,Dt as U,$t as a,xt as b,At as c,zt as d,vt as e,Bt as f,ot as g,X as h,Lt as i,Mt as j,Y as k,kt as l,et as m,B as n,Ot as o,jt as p,S as q,it as r,at as s,Tt as t,St as u,qt as v,M as w,Ct as x,Ht as y,It as z};