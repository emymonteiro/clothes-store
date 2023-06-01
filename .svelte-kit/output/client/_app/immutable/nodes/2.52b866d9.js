import{S as st,i as nt,s as lt,k as d,a as P,y as L,q as z,l as f,m as p,h as u,c as k,z as U,r as A,n as h,J as it,b as ct,C as c,A as F,D as ut,g as j,d as S,B as Q,f as dt,K as ft,v as ht}from"../chunks/index.ba2bb275.js";import{I as rt}from"../chunks/Icon.7f3ffd47.js";function mt(n,e={}){return fetch(n,e).then(r=>r.json()).then(r=>r)}const pt=async()=>{const n="List of available produtcts",r=(await mt("https://fakestoreapi.com/products")).filter(t=>t.category==="men's clothing"||t.category==="women's clothing");return{title:n,filteredProducts:r}},Et=Object.freeze(Object.defineProperty({__proto__:null,load:pt},Symbol.toStringTag,{value:"Module"}));function gt(n){let e,r,t,i,m,s,g,a,l,o,$,v,b,B,y,E,C,M,w,I,N,G,x,H,J,q;return o=new rt({props:{class:"text-3xl",icon:"ic:round-plus"}}),b=new rt({props:{icon:"mdi:eye"}}),{c(){e=d("div"),r=d("div"),t=d("div"),i=d("img"),s=P(),g=d("div"),a=d("button"),l=d("div"),L(o.$$.fragment),$=P(),v=d("a"),L(b.$$.fragment),B=P(),y=d("div"),E=d("div"),C=z(n[2]),M=P(),w=d("a"),I=d("h2"),N=z(n[3]),G=P(),x=d("div"),H=z("$ "),J=z(n[4]),this.h()},l(_){e=f(_,"DIV",{});var D=p(e);r=f(D,"DIV",{class:!0});var O=p(r);t=f(O,"DIV",{class:!0});var R=p(t);i=f(R,"IMG",{class:!0,src:!0,alt:!0}),R.forEach(u),s=k(O),g=f(O,"DIV",{class:!0});var T=p(g);a=f(T,"BUTTON",{});var W=p(a);l=f(W,"DIV",{class:!0});var X=p(l);U(o.$$.fragment,X),X.forEach(u),W.forEach(u),$=k(T),v=f(T,"A",{href:!0,class:!0});var Y=p(v);U(b.$$.fragment,Y),Y.forEach(u),T.forEach(u),O.forEach(u),B=k(D),y=f(D,"DIV",{});var V=p(y);E=f(V,"DIV",{class:!0});var Z=p(E);C=A(Z,n[2]),Z.forEach(u),M=k(V),w=f(V,"A",{href:!0});var tt=p(w);I=f(tt,"H2",{class:!0});var et=p(I);N=A(et,n[3]),et.forEach(u),tt.forEach(u),G=k(V),x=f(V,"DIV",{class:!0});var K=p(x);H=A(K,"$ "),J=A(K,n[4]),K.forEach(u),V.forEach(u),D.forEach(u),this.h()},h(){h(i,"class","max-h-[160px] group-hover:scale-110 transition duration-300"),it(i.src,m=n[1])||h(i,"src",m),h(i,"alt",""),h(t,"class","w-full h-full flex justify-center items-center mx-auto"),h(l,"class","flex justify-center items-center text-white w-12 h-12 bg-red-400"),h(v,"href",`/product/${n[0]}`),h(v,"class","w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl"),h(g,"class","absolute top-6 lg:top-3 right-11 group-hover:right-5 lg:group-hover:right-2 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"),h(r,"class","border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition"),h(E,"class","text-sm capitalize text-gray-500 mb-1"),h(I,"class","font-semibold mb-1"),h(w,"href",`/product/${n[0]}`),h(x,"class","font-semibold")},m(_,D){ct(_,e,D),c(e,r),c(r,t),c(t,i),c(r,s),c(r,g),c(g,a),c(a,l),F(o,l,null),c(g,$),c(g,v),F(b,v,null),c(e,B),c(e,y),c(y,E),c(E,C),c(y,M),c(y,w),c(w,I),c(I,N),c(y,G),c(y,x),c(x,H),c(x,J),q=!0},p:ut,i(_){q||(j(o.$$.fragment,_),j(b.$$.fragment,_),q=!0)},o(_){S(o.$$.fragment,_),S(b.$$.fragment,_),q=!1},d(_){_&&u(e),Q(o),Q(b)}}}function vt(n,e,r){let{product:t}=e;const{id:i,image:m,category:s,title:g,price:a}=t;return n.$$set=l=>{"product"in l&&r(5,t=l.product)},[i,m,s,g,a,t]}class _t extends st{constructor(e){super(),nt(this,e,vt,gt,lt,{product:5})}}function at(n,e,r){const t=n.slice();return t[1]=e[r],t}function ot(n){let e,r;return e=new _t({props:{product:n[1]}}),{c(){L(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,i){F(e,t,i),r=!0},p(t,i){const m={};i&1&&(m.product=t[1]),e.$set(m)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){S(e.$$.fragment,t),r=!1},d(t){Q(e,t)}}}function $t(n){let e,r,t,i,m=n[0].filteredProducts,s=[];for(let a=0;a<m.length;a+=1)s[a]=ot(at(n,m,a));const g=a=>S(s[a],1,1,()=>{s[a]=null});return{c(){e=d("section"),r=d("div"),t=d("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=f(a,"SECTION",{class:!0});var l=p(e);r=f(l,"DIV",{class:!0});var o=p(r);t=f(o,"DIV",{class:!0});var $=p(t);for(let v=0;v<s.length;v+=1)s[v].l($);$.forEach(u),o.forEach(u),l.forEach(u),this.h()},h(){h(t,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"),h(r,"class","container mx-auto"),h(e,"class","py-16")},m(a,l){ct(a,e,l),c(e,r),c(r,t);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(t,null);i=!0},p(a,[l]){if(l&1){m=a[0].filteredProducts;let o;for(o=0;o<m.length;o+=1){const $=at(a,m,o);s[o]?(s[o].p($,l),j(s[o],1)):(s[o]=ot($),s[o].c(),j(s[o],1),s[o].m(t,null))}for(ht(),o=m.length;o<s.length;o+=1)g(o);dt()}},i(a){if(!i){for(let l=0;l<m.length;l+=1)j(s[l]);i=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)S(s[l]);i=!1},d(a){a&&u(e),ft(s,a)}}}function yt(n,e,r){let{data:t}=e;return n.$$set=i=>{"data"in i&&r(0,t=i.data)},[t]}class wt extends st{constructor(e){super(),nt(this,e,yt,$t,lt,{data:0})}}export{wt as component,Et as universal};