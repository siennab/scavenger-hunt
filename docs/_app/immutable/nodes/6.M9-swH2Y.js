import{s as k,n as b,r as E,o as I,i as $}from"../chunks/scheduler.YQe7PuaW.js";import{S as q,i as B,g as f,s as v,h as c,j as H,y as C,c as y,f as x,k as g,a as P,x as p,A as S,B as T}from"../chunks/index.M88L6zut.js";import{b as U}from"../chunks/paths.Z12R2r5H.js";function j(n){let t,a,i="The Forgotten Speakeasy",h,s,r="Your Name",m,o,d,l,N="Next",_,w;return{c(){t=f("center"),a=f("h1"),a.textContent=i,h=v(),s=f("h2"),s.textContent=r,m=v(),o=f("input"),d=v(),l=f("button"),l.textContent=N,this.h()},l(u){t=c(u,"CENTER",{class:!0});var e=H(t);a=c(e,"H1",{"data-svelte-h":!0}),C(a)!=="svelte-q9sr6h"&&(a.textContent=i),h=y(e),s=c(e,"H2",{"data-svelte-h":!0}),C(s)!=="svelte-4fknvc"&&(s.textContent=r),m=y(e),o=c(e,"INPUT",{type:!0}),d=y(e),l=c(e,"BUTTON",{class:!0,"data-svelte-h":!0}),C(l)!=="svelte-fwlo31"&&(l.textContent=N),e.forEach(x),this.h()},h(){g(o,"type","text"),g(l,"class","button"),g(t,"class","fade-in")},m(u,e){P(u,t,e),p(t,a),p(t,h),p(t,s),p(t,m),p(t,o),S(o,n[0]),p(t,d),p(t,l),_||(w=[T(o,"input",n[2]),T(l,"click",function(){$(n[1](n[0]))&&n[1](n[0]).apply(this,arguments)})],_=!0)},p(u,[e]){n=u,e&1&&o.value!==n[0]&&S(o,n[0])},i:b,o:b,d(u){u&&x(t),_=!1,E(w)}}}function A(n,t,a){let i="",h=r=>{window?.localStorage.setItem("sh-playerName",r),window.location.href=`${U}/riddles`};I(()=>{let r=window.localStorage.getItem("sh-playerName");r&&a(0,i=r)});function s(){i=this.value,a(0,i)}return[i,h,s]}class R extends q{constructor(t){super(),B(this,t,A,j,k,{})}}export{R as component};