function x(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function U(){return Object.create(null)}function j(t){t.forEach(w)}function z(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t,n,e){t.$$.on_destroy.push(E(n,e))}function A(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function B(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],f=Math.max(n.dirty.length,r.length);for(let s=0;s<f;s+=1)l[s]=n.dirty[s]|r[s];return l}return n.dirty|r}return n.dirty}function C(t,n,e,o,r,l){if(r){const f=m(n,e,o,l);t.p(f,r)}}function D(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let i;function d(t){i=t}function p(){if(!i)throw new Error("Function called outside component initialization");return i}function G(t){p().$$.before_update.push(t)}function H(t){p().$$.on_mount.push(t)}function I(t){p().$$.after_update.push(t)}const a=[],b=[];let u=[];const g=[],y=Promise.resolve();let h=!1;function v(){h||(h=!0,y.then(q))}function J(){return v(),y}function O(t){u.push(t)}const _=new Set;let c=0;function q(){if(c!==0)return;const t=i;do{try{for(;c<a.length;){const n=a[c];c++,d(n),M(n.$$)}}catch(n){throw a.length=0,c=0,n}for(d(null),a.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];_.has(e)||(_.add(e),e())}u.length=0}while(a.length);for(;g.length;)g.pop()();h=!1,_.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function K(t){const n=[],e=[];u.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),u=n}export{I as a,b,A as c,B as d,S as e,G as f,D as g,U as h,z as i,q as j,P as k,O as l,K as m,x as n,H as o,i as p,d as q,j as r,F as s,J as t,C as u,w as v,a as w,v as x};
