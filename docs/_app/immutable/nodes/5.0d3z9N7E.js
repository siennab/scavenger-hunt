import{s as k,n as _,r as x,o as E,i as I}from"../chunks/scheduler.sAJ_Y8Hb.js";import{S as b,i as A,g as c,s as v,h as m,j as P,y,c as g,f as C,k as N,a as T,x as p,z as w,A as S}from"../chunks/index.be9lbgTe.js";function $(t){let e,s,i="Your Name",u,a,l,o,h="Next",f,d;return{c(){e=c("center"),s=c("h2"),s.textContent=i,u=v(),a=c("input"),l=v(),o=c("a"),o.textContent=h,this.h()},l(r){e=m(r,"CENTER",{});var n=P(e);s=m(n,"H2",{"data-svelte-h":!0}),y(s)!=="svelte-4fknvc"&&(s.textContent=i),u=g(n),a=m(n,"INPUT",{type:!0}),l=g(n),o=m(n,"A",{class:!0,"data-svelte-h":!0}),y(o)!=="svelte-vcdspr"&&(o.textContent=h),n.forEach(C),this.h()},h(){N(a,"type","text"),N(o,"class","button")},m(r,n){T(r,e,n),p(e,s),p(e,u),p(e,a),w(a,t[0]),p(e,l),p(e,o),f||(d=[S(a,"input",t[2]),S(o,"click",function(){I(t[1](t[0]))&&t[1](t[0]).apply(this,arguments)})],f=!0)},p(r,[n]){t=r,n&1&&a.value!==t[0]&&w(a,t[0])},i:_,o:_,d(r){r&&C(e),f=!1,x(d)}}}function j(t,e,s){let i="",u=l=>{window?.localStorage.setItem("sh-playerName",l),window.location.href="riddles"};E(()=>{let l=window.localStorage.getItem("sh-playerName");l&&s(0,i=l)});function a(){i=this.value,s(0,i)}return[i,u,a]}class H extends b{constructor(e){super(),A(this,e,j,$,k,{})}}export{H as component};