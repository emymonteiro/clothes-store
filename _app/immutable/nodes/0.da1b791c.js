import{S as be,i as we,s as xe,C as je,k as h,q as U,a as O,y as W,l as m,m as _,r as j,h as c,c as C,z as Z,n as f,b as ce,D as l,A as ee,E as M,g as q,d as H,B as te,F as De,G as ke,p as Se,u as he,H as Oe,v as ze,f as Ae,I as Fe,J as Te,K as qe,L as He,M as Le,N as Me}from"../chunks/index.824c1541.js";import{I as _e,g as Ie}from"../chunks/navigation.4a833a12.js";import{s as Ue,h as Ve,a as Ee,i as Pe}from"../chunks/shoppingCart.9e0edc30.js";import{p as Re}from"../chunks/stores.6d0f5527.js";const Ge=!0,ut=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ge},Symbol.toStringTag,{value:"Module"}));function Ce(r){let e,n=(r[2](r[1])>9?"+9":r[2](r[1]))+"",o;return{c(){e=h("span"),o=U(n),this.h()},l(t){e=m(t,"SPAN",{class:!0,style:!0});var a=_(e);o=j(a,n),a.forEach(c),this.h()},h(){f(e,"class","text-xs -bottom-0 -right-0 font-bold text-white bg-red-500 px-1 py-[1px] rounded-full absolute flex items-center justify-center"),Se(e,"font-size","0.6rem")},m(t,a){ce(t,e,a),l(e,o)},p(t,a){a&2&&n!==(n=(t[2](t[1])>9?"+9":t[2](t[1]))+"")&&he(o,n)},d(t){t&&c(e)}}}function Je(r){let e=!1,n=()=>{e=!1},o,t,a,d,g,b,u,s,p,I=r[2](r[1])>0,E,B,V,D;je(r[3]),s=new _e({props:{class:"h-10 w-10",icon:"iconamoon:shopping-bag-thin"}});let v=I&&Ce(r);return{c(){t=h("header"),a=h("div"),d=h("a"),g=U("Clothing Store"),b=O(),u=h("button"),W(s.$$.fragment),p=O(),v&&v.c(),this.h()},l(y){t=m(y,"HEADER",{class:!0});var k=_(t);a=m(k,"DIV",{class:!0});var z=_(a);d=m(z,"A",{href:!0,class:!0});var X=_(d);g=j(X,"Clothing Store"),X.forEach(c),b=C(z),u=m(z,"BUTTON",{class:!0});var T=_(u);Z(s.$$.fragment,T),p=C(T),v&&v.l(T),T.forEach(c),z.forEach(c),k.forEach(c),this.h()},h(){f(d,"href","/"),f(d,"class","great-vibe text-4xl text-red-400 ml-auto"),f(u,"class","ml-auto relative hover:text-red-400 cursor-pointer"),f(a,"class","container mx-auto flex items-center justify-between h-full"),f(t,"class",E=`${r[0]>60?"bg-white py-4 shadow-md":"bg-none py-6"} fixed w-full z-10 transition-all`)},m(y,k){ce(y,t,k),l(t,a),l(a,d),l(d,g),l(a,b),l(a,u),ee(s,u,null),l(u,p),v&&v.m(u,null),B=!0,V||(D=[M(window,"scroll",()=>{e=!0,clearTimeout(o),o=setTimeout(n,100),r[3]()}),M(u,"click",r[4])],V=!0)},p(y,[k]){k&1&&!e&&(e=!0,clearTimeout(o),scrollTo(window.pageXOffset,y[0]),o=setTimeout(n,100)),k&2&&(I=y[2](y[1])>0),I?v?v.p(y,k):(v=Ce(y),v.c(),v.m(u,null)):v&&(v.d(1),v=null),(!B||k&1&&E!==(E=`${y[0]>60?"bg-white py-4 shadow-md":"bg-none py-6"} fixed w-full z-10 transition-all`))&&f(t,"class",E)},i(y){B||(q(s.$$.fragment,y),B=!0)},o(y){H(s.$$.fragment,y),B=!1},d(y){y&&c(t),te(s),v&&v.d(),V=!1,De(D)}}}function Ke(r,e,n){let o;ke(r,Ue,b=>n(1,o=b));const t=b=>b.length;let a;function d(){n(0,a=window.pageYOffset)}return[a,o,t,d,()=>Ve()]}class Xe extends be{constructor(e){super(),we(this,e,Ke,Je,xe,{})}}function Ye(r){let e,n,o,t,a,d,g,b,u,s=r[0].title+"",p,I,E,B,V,D,v,y,k=r[0].price+"",z,X,T,P,le=((r[0].amount||1)*Number(r[0].price)).toFixed(2)+"",L,ue,A,S,R,fe,F,se=r[0].amount+"",re,G,J,Y,N,x,ye;return B=new _e({props:{icon:"ion:trash-sharp",class:"text-gray-500 hover:text-red-500 transition"}}),R=new _e({props:{icon:"material-symbols:remove"}}),Y=new _e({props:{icon:"material-symbols:add"}}),{c(){e=h("div"),n=h("div"),o=h("button"),t=h("img"),d=O(),g=h("div"),b=h("div"),u=h("button"),p=U(s),I=O(),E=h("button"),W(B.$$.fragment),V=O(),D=h("div"),v=h("div"),y=U("Unity: $ "),z=U(k),X=O(),T=h("div"),P=U("Total: $ "),L=U(le),ue=O(),A=h("div"),S=h("button"),W(R.$$.fragment),fe=O(),F=h("div"),re=U(se),G=O(),J=h("button"),W(Y.$$.fragment),this.h()},l(i){e=m(i,"DIV",{class:!0});var $=_(e);n=m($,"DIV",{class:!0});var w=_(n);o=m(w,"BUTTON",{});var Q=_(o);t=m(Q,"IMG",{class:!0,src:!0,alt:!0}),Q.forEach(c),d=C(w),g=m(w,"DIV",{class:!0});var ne=_(g);b=m(ne,"DIV",{class:!0});var ae=_(b);u=m(ae,"BUTTON",{class:!0});var ge=_(u);p=j(ge,s),ge.forEach(c),I=C(ae),E=m(ae,"BUTTON",{class:!0});var K=_(E);Z(B.$$.fragment,K),K.forEach(c),ae.forEach(c),V=C(ne),D=m(ne,"DIV",{class:!0});var oe=_(D);v=m(oe,"DIV",{class:!0});var de=_(v);y=j(de,"Unity: $ "),z=j(de,k),de.forEach(c),X=C(oe),T=m(oe,"DIV",{class:!0});var me=_(T);P=j(me,"Total: $ "),L=j(me,le),me.forEach(c),oe.forEach(c),ue=C(ne),A=m(ne,"DIV",{class:!0});var ie=_(A);S=m(ie,"BUTTON",{class:!0});var ve=_(S);Z(R.$$.fragment,ve),ve.forEach(c),fe=C(ie),F=m(ie,"DIV",{class:!0});var $e=_(F);re=j($e,se),$e.forEach(c),G=C(ie),J=m(ie,"BUTTON",{class:!0});var pe=_(J);Z(Y.$$.fragment,pe),pe.forEach(c),ie.forEach(c),ne.forEach(c),w.forEach(c),$.forEach(c),this.h()},h(){f(t,"class","max-w-[80px]"),Oe(t.src,a=r[0].image)||f(t,"src",a),f(t,"alt",""),f(u,"class","open-sans text-xs uppercase font-medium max-w-[240px] hover:underline text-left"),f(E,"class","text-xl mt-1"),f(b,"class","flex justify-between pb-1"),f(v,"class","text-sm text-gray-400 open-sans"),f(T,"class","font-bold"),f(D,"class","flex flex-col gap-x-2 gap-y-1 w-full"),f(S,"class","p-3"),f(F,"class","open-sans font-normal"),f(J,"class","p-3"),f(A,"class","flex items-center h-[36px] w-full justify-between bg-gray-200 mt-1"),f(g,"class","flex flex-col w-full"),f(n,"class","w-full min-h-[150px] flex items-center gap-x-4"),f(e,"class","flex")},m(i,$){ce(i,e,$),l(e,n),l(n,o),l(o,t),l(n,d),l(n,g),l(g,b),l(b,u),l(u,p),l(b,I),l(b,E),ee(B,E,null),l(g,V),l(g,D),l(D,v),l(v,y),l(v,z),l(D,X),l(D,T),l(T,P),l(T,L),l(g,ue),l(g,A),l(A,S),ee(R,S,null),l(A,fe),l(A,F),l(F,re),l(A,G),l(A,J),ee(Y,J,null),N=!0,x||(ye=[M(o,"click",r[2]),M(u,"click",r[3]),M(E,"click",r[4]),M(S,"click",r[5]),M(J,"click",r[6])],x=!0)},p(i,[$]){(!N||$&1&&!Oe(t.src,a=i[0].image))&&f(t,"src",a),(!N||$&1)&&s!==(s=i[0].title+"")&&he(p,s),(!N||$&1)&&k!==(k=i[0].price+"")&&he(z,k),(!N||$&1)&&le!==(le=((i[0].amount||1)*Number(i[0].price)).toFixed(2)+"")&&he(L,le),(!N||$&1)&&se!==(se=i[0].amount+"")&&he(re,se)},i(i){N||(q(B.$$.fragment,i),q(R.$$.fragment,i),q(Y.$$.fragment,i),N=!0)},o(i){H(B.$$.fragment,i),H(R.$$.fragment,i),H(Y.$$.fragment,i),N=!1},d(i){i&&c(e),te(B),te(R),te(Y),x=!1,De(ye)}}}function Qe(r,e,n){let o;ke(r,Re,p=>n(7,o=p));let{cartItem:t}=e;function a(p){const I=o.url.origin.includes("github")?"/clothes-store":"";Ie(`${o.url.origin}${I}/product/${p}`)}const d=()=>a(t.id),g=()=>a(t.id),b=()=>Ee.removeItem(t),u=()=>Ee.removeUnity(t),s=()=>Ee.addToCart(t);return r.$$set=p=>{"cartItem"in p&&n(0,t=p.cartItem)},[t,a,d,g,b,u,s]}class We extends be{constructor(e){super(),we(this,e,Qe,Ye,xe,{cartItem:0})}}function Be(r,e,n){const o=r.slice();return o[8]=e[n],o}function Ne(r){let e,n,o,t;return n=new We({props:{cartItem:r[8]}}),{c(){e=h("div"),W(n.$$.fragment),o=O(),this.h()},l(a){e=m(a,"DIV",{class:!0});var d=_(e);Z(n.$$.fragment,d),o=C(d),d.forEach(c),this.h()},h(){f(e,"class","border-b")},m(a,d){ce(a,e,d),ee(n,e,null),l(e,o),t=!0},p(a,d){const g={};d&2&&(g.cartItem=a[8]),n.$set(g)},i(a){t||(q(n.$$.fragment,a),t=!0)},o(a){H(n.$$.fragment,a),t=!1},d(a){a&&c(e),te(n)}}}function Ze(r){let e,n,o,t,a=r[1].length+"",d,g,b,u,s,p,I,E,B,V,D,v,y,k=r[2](r[1])+"",z,X,T,P,le,L,ue,A,S,R,fe,F,se,re,G,J,Y;s=new _e({props:{icon:"ph:arrow-right-bold",class:"text-2xl"}});let N=r[1],x=[];for(let i=0;i<N.length;i+=1)x[i]=Ne(Be(r,N,i));const ye=i=>H(x[i],1,1,()=>{x[i]=null});return P=new _e({props:{icon:"ion:trash-sharp",class:"text-white"}}),{c(){e=h("div"),n=h("div"),o=h("div"),t=U("Shopping Bag ("),d=U(a),g=U(")"),b=O(),u=h("button"),W(s.$$.fragment),p=O(),I=h("div"),E=h("div");for(let i=0;i<x.length;i+=1)x[i].c();B=O(),V=h("div"),D=h("div"),v=h("div"),y=U("Total: $ "),z=U(k),X=O(),T=h("button"),W(P.$$.fragment),le=O(),L=h("button"),ue=U("Checkout"),A=O(),S=h("button"),R=U("Continue shopping"),fe=O(),F=h("button"),se=U("View cart"),this.h()},l(i){e=m(i,"DIV",{class:!0});var $=_(e);n=m($,"DIV",{class:!0});var w=_(n);o=m(w,"DIV",{class:!0});var Q=_(o);t=j(Q,"Shopping Bag ("),d=j(Q,a),g=j(Q,")"),Q.forEach(c),b=C(w),u=m(w,"BUTTON",{class:!0});var ne=_(u);Z(s.$$.fragment,ne),ne.forEach(c),w.forEach(c),p=C($),I=m($,"DIV",{class:!0});var ae=_(I);E=m(ae,"DIV",{class:!0});var ge=_(E);for(let pe=0;pe<x.length;pe+=1)x[pe].l(ge);ge.forEach(c),B=C(ae),V=m(ae,"DIV",{class:!0});var K=_(V);D=m(K,"DIV",{class:!0});var oe=_(D);v=m(oe,"DIV",{class:!0});var de=_(v);y=j(de,"Total: $ "),z=j(de,k),de.forEach(c),X=C(oe),T=m(oe,"BUTTON",{class:!0,title:!0});var me=_(T);Z(P.$$.fragment,me),me.forEach(c),oe.forEach(c),le=C(K),L=m(K,"BUTTON",{class:!0});var ie=_(L);ue=j(ie,"Checkout"),ie.forEach(c),A=C(K),S=m(K,"BUTTON",{class:!0});var ve=_(S);R=j(ve,"Continue shopping"),ve.forEach(c),fe=C(K),F=m(K,"BUTTON",{class:!0});var $e=_(F);se=j($e,"View cart"),$e.forEach(c),K.forEach(c),ae.forEach(c),$.forEach(c),this.h()},h(){f(o,"class","open-sans uppercase text-sm font-semibold"),f(u,"class","cursor-pointer w-8 h-8 flex justify-center items-center"),f(n,"class","flex items-center justify-between py-6 border-b"),f(E,"class","overflow-y-auto flex flex-col gap-y-2 max-h-[520px] lg:max-h-[640px] overflow-x-hidden border-b"),f(v,"class","text-md font-semibold"),f(T,"class","ml-auto transition bg-red-500 p-2"),f(T,"title","Clear cart"),f(D,"class","flex items-center justify-between w-full font-bold open-sans text-lg uppercase"),f(L,"class","bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"),f(S,"class","bg-primary flex p-3 justify-center items-center text-white w-full font-medium"),f(F,"class","underline"),f(V,"class","flex flex-col w-full items-center gap-3 py-3 open-sans"),f(I,"class","flex flex-col justify-between h-full"),f(e,"class",re=`${r[0]?"right-0":"-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px[35px] content-stretch flex flex-col`)},m(i,$){ce(i,e,$),l(e,n),l(n,o),l(o,t),l(o,d),l(o,g),l(n,b),l(n,u),ee(s,u,null),l(e,p),l(e,I),l(I,E);for(let w=0;w<x.length;w+=1)x[w]&&x[w].m(E,null);l(I,B),l(I,V),l(V,D),l(D,v),l(v,y),l(v,z),l(D,X),l(D,T),ee(P,T,null),l(V,le),l(V,L),l(L,ue),l(V,A),l(V,S),l(S,R),l(V,fe),l(V,F),l(F,se),G=!0,J||(Y=[M(u,"click",r[3]),M(T,"click",r[4]),M(L,"click",r[5]),M(S,"click",r[6]),M(F,"click",r[7])],J=!0)},p(i,[$]){if((!G||$&2)&&a!==(a=i[1].length+"")&&he(d,a),$&2){N=i[1];let w;for(w=0;w<N.length;w+=1){const Q=Be(i,N,w);x[w]?(x[w].p(Q,$),q(x[w],1)):(x[w]=Ne(Q),x[w].c(),q(x[w],1),x[w].m(E,null))}for(ze(),w=N.length;w<x.length;w+=1)ye(w);Ae()}(!G||$&2)&&k!==(k=i[2](i[1])+"")&&he(z,k),(!G||$&1&&re!==(re=`${i[0]?"right-0":"-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px[35px] content-stretch flex flex-col`))&&f(e,"class",re)},i(i){if(!G){q(s.$$.fragment,i);for(let $=0;$<N.length;$+=1)q(x[$]);q(P.$$.fragment,i),G=!0}},o(i){H(s.$$.fragment,i),x=x.filter(Boolean);for(let $=0;$<x.length;$+=1)H(x[$]);H(P.$$.fragment,i),G=!1},d(i){i&&c(e),te(s),Fe(x,i),te(P),J=!1,De(Y)}}}function et(r,e,n){let o,t;return ke(r,Pe,p=>n(0,o=p)),ke(r,Ue,p=>n(1,t=p)),[o,t,p=>p.reduce((I,E)=>I+(E.amount||0)*Number(E.price),0).toFixed(2),()=>Ve(),()=>Ee.clearCart(),()=>Ie("/"),()=>Ve(),()=>Ie("/")]}class tt extends be{constructor(e){super(),we(this,e,et,Ze,xe,{})}}function lt(r){let e,n,o,t;return{c(){e=h("footer"),n=h("div"),o=h("p"),t=U("Copyright © Ecommerce Shop 2022. All rights free"),this.h()},l(a){e=m(a,"FOOTER",{class:!0});var d=_(e);n=m(d,"DIV",{class:!0});var g=_(n);o=m(g,"P",{class:!0});var b=_(o);t=j(b,"Copyright © Ecommerce Shop 2022. All rights free"),b.forEach(c),g.forEach(c),d.forEach(c),this.h()},h(){f(o,"class","text-white text-center"),f(n,"class","container mx-auto"),f(e,"class","bg-primary py-12")},m(a,d){ce(a,e,d),l(e,n),l(n,o),l(o,t)},p:Te,i:Te,o:Te,d(a){a&&c(e)}}}class st extends be{constructor(e){super(),we(this,e,null,lt,xe,{})}}function rt(r){let e,n,o,t,a,d,g;e=new Xe({});const b=r[1].default,u=qe(b,r,r[0],null);return t=new tt({}),d=new st({}),{c(){W(e.$$.fragment),n=O(),u&&u.c(),o=O(),W(t.$$.fragment),a=O(),W(d.$$.fragment)},l(s){Z(e.$$.fragment,s),n=C(s),u&&u.l(s),o=C(s),Z(t.$$.fragment,s),a=C(s),Z(d.$$.fragment,s)},m(s,p){ee(e,s,p),ce(s,n,p),u&&u.m(s,p),ce(s,o,p),ee(t,s,p),ce(s,a,p),ee(d,s,p),g=!0},p(s,[p]){u&&u.p&&(!g||p&1)&&He(u,b,s,s[0],g?Me(b,s[0],p,null):Le(s[0]),null)},i(s){g||(q(e.$$.fragment,s),q(u,s),q(t.$$.fragment,s),q(d.$$.fragment,s),g=!0)},o(s){H(e.$$.fragment,s),H(u,s),H(t.$$.fragment,s),H(d.$$.fragment,s),g=!1},d(s){te(e,s),s&&c(n),u&&u.d(s),s&&c(o),te(t,s),s&&c(a),te(d,s)}}}function nt(r,e,n){let{$$slots:o={},$$scope:t}=e;return r.$$set=a=>{"$$scope"in a&&n(0,t=a.$$scope)},[t,o]}class ft extends be{constructor(e){super(),we(this,e,nt,rt,xe,{})}}export{ft as component,ut as universal};
