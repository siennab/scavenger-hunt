import{s as B,n as I,o as O}from"../chunks/scheduler.YQe7PuaW.js";import{S as V,i as W,e as P,a as j,f as b,g as i,s as v,m as R,h as r,j as S,y as g,c as w,n as A,k as Y,x as o,o as G}from"../chunks/index.M88L6zut.js";import{b as z}from"../chunks/paths.97B8yAJj.js";function F(d){let e,t,s="The Forgotten Speakeasy",a,c,f=`Welcome, intrepid explorers, to a once lively speakeasy turned silent
    sanctuary. The challenge? Find unique treasures hidden within these walls.`,x,l,C="How to play:",_,h,q="<li>Solve riddles, and find artifacts based on the answers. There will be multiple artifacts for each riddle, but you can only choose one.</li> <li>Artifacts will be labeled with a small numeric sticker. Enter the number you see. Make sure you are satisfied with this discovery, as you will only get one chance to enter.</li> <li>Scores are calculated based on how unique your discoveries are. Your score can change throughout the game as explorers make discoveries, so keep your eyes on the leaderboard and be stealthy.</li> <li>At midnight, the players with the three highest scores will win.</li>",k,y,m,T,M,E,H,$,p,N=`<a href="${z}/user" class="button">Explore</a>`;return{c(){e=i("div"),t=i("h1"),t.textContent=s,a=v(),c=i("p"),c.textContent=f,x=v(),l=i("p"),l.textContent=C,_=v(),h=i("ol"),h.innerHTML=q,k=v(),y=i("center"),m=i("h4"),T=R(d[1]),M=R(" until midnight"),E=v(),H=i("br"),$=v(),p=i("center"),p.innerHTML=N,this.h()},l(u){e=r(u,"DIV",{class:!0});var n=S(e);t=r(n,"H1",{"data-svelte-h":!0}),g(t)!=="svelte-q9sr6h"&&(t.textContent=s),a=w(n),c=r(n,"P",{"data-svelte-h":!0}),g(c)!=="svelte-1rtdg9g"&&(c.textContent=f),x=w(n),l=r(n,"P",{"data-svelte-h":!0}),g(l)!=="svelte-1l6v8zl"&&(l.textContent=C),_=w(n),h=r(n,"OL",{"data-svelte-h":!0}),g(h)!=="svelte-1u4urg6"&&(h.innerHTML=q),k=w(n),y=r(n,"CENTER",{});var D=S(y);m=r(D,"H4",{});var L=S(m);T=A(L,d[1]),M=A(L," until midnight"),L.forEach(b),D.forEach(b),E=w(n),H=r(n,"BR",{}),$=w(n),p=r(n,"CENTER",{"data-svelte-h":!0}),g(p)!=="svelte-hnhefw"&&(p.innerHTML=N),n.forEach(b),this.h()},h(){Y(e,"class","fade-in")},m(u,n){j(u,e,n),o(e,t),o(e,a),o(e,c),o(e,x),o(e,l),o(e,_),o(e,h),o(e,k),o(e,y),o(y,m),o(m,T),o(m,M),o(e,E),o(e,H),o(e,$),o(e,p)},p(u,n){n&2&&G(T,u[1])},d(u){u&&b(e)}}}function J(d){let e,t=d[0]&&F(d);return{c(){t&&t.c(),e=P()},l(s){t&&t.l(s),e=P()},m(s,a){t&&t.m(s,a),j(s,e,a)},p(s,[a]){s[0]?t?t.p(s,a):(t=F(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:I,o:I,d(s){s&&b(e),t&&t.d(s)}}}function K(d,e,t){let s=!1,a="0:0:0";O(()=>{localStorage.getItem("sh-playerName")&&(window.location.href=`${z}/riddles`),setTimeout(()=>{t(0,s=!0)},500),c()});function c(){const f=new Date;f.setHours(24,0,0,0),setInterval(()=>{const l=f-new Date,C=Math.floor(l/(1e3*60*60)%24),_=Math.floor(l/(1e3*60)%60),h=Math.floor(l/1e3%60);t(1,a=`${C}:${_}:${h}`)},1e3)}return[s,a]}class Z extends V{constructor(e){super(),W(this,e,K,J,B,{})}}export{Z as component};
