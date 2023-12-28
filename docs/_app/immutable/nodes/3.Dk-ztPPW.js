import{s as Ua,n as Ri,e as Ba,o as ja,f as $a,r as qa}from"../chunks/scheduler.sAJ_Y8Hb.js";import{S as Ha,i as za,e as Pi,a as ws,f as en,g as Ct,m as Ga,s as Xn,h as Vt,j as Si,n as Ka,c as Yn,y as Ci,k as Jn,x as lt,z as Vi,A as Di,o as Qa,B as Rs}from"../chunks/index.be9lbgTe.js";import{p as Wa}from"../chunks/stores.we8gazea.js";var bi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Xa=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Ss={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,h=s>>2,c=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(g=64)),r.push(n[h],n[c],n[g],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ps(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Xa(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const c=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new Ya;const g=s<<2|a>>4;if(r.push(g),u!==64){const m=a<<4&240|u>>2;if(r.push(m),c!==64){const I=u<<6&192|c;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ya extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ja=function(e){const t=Ps(e);return Ss.encodeByteArray(t,!0)},sn=function(e){return Ja(e).replace(/\./g,"")},Za=function(e){try{return Ss.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=()=>tl().__FIREBASE_DEFAULTS__,nl=()=>{if(typeof process>"u"||typeof bi>"u")return;const e=bi.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},rl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Za(e[1]);return t&&JSON.parse(t)},Cs=()=>{try{return el()||nl()||rl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},il=e=>{var t,n;return(n=(t=Cs())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},sl=e=>{const t=il(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Vs=()=>{var e;return(e=Cs())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[sn(JSON.stringify(n)),sn(JSON.stringify(o)),a].join(".")}function ll(){try{return typeof indexedDB=="object"}catch{return!1}}function ul(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="FirebaseError";class ee extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=hl,Object.setPrototypeOf(this,ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?cl(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ee(i,a,r)}}function cl(e,t){return e.replace(fl,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const fl=/\{\$([^}]+)}/g;function pr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Ni(s)&&Ni(o)){if(!pr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ni(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e){return e&&e._delegate?e._delegate:e}class ye{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new ol;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(gl(t))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Dt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Dt){return this.instances.has(t)}getOptions(t=Dt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pl(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Dt){return this.component?this.component.multipleInstances?t:Dt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pl(e){return e===Dt?void 0:e}function gl(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new dl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(w||(w={}));const _l={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},yl=w.INFO,El={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},vl=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=El[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class bs{constructor(t){this.name=t,this._logLevel=yl,this._logHandler=vl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in w))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_l[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...t),this._logHandler(this,w.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...t),this._logHandler(this,w.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,w.INFO,...t),this._logHandler(this,w.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,w.WARN,...t),this._logHandler(this,w.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...t),this._logHandler(this,w.ERROR,...t)}}const Tl=(e,t)=>t.some(n=>e instanceof n);let ki,Oi;function Il(){return ki||(ki=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Al(){return Oi||(Oi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ns=new WeakMap,gr=new WeakMap,ks=new WeakMap,Zn=new WeakMap,Lr=new WeakMap;function wl(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Et(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ns.set(n,e)}).catch(()=>{}),Lr.set(t,e),t}function Rl(e){if(gr.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});gr.set(e,t)}let mr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return gr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ks.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Pl(e){mr=e(mr)}function Sl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(tr(this),t,...n);return ks.set(r,t.sort?t.sort():[t]),Et(r)}:Al().includes(e)?function(...t){return e.apply(tr(this),t),Et(Ns.get(this))}:function(...t){return Et(e.apply(tr(this),t))}}function Cl(e){return typeof e=="function"?Sl(e):(e instanceof IDBTransaction&&Rl(e),Tl(e,Il())?new Proxy(e,mr):e)}function Et(e){if(e instanceof IDBRequest)return wl(e);if(Zn.has(e))return Zn.get(e);const t=Cl(e);return t!==e&&(Zn.set(e,t),Lr.set(t,e)),t}const tr=e=>Lr.get(e);function Vl(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Et(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Et(o.result),l.oldVersion,l.newVersion,Et(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Dl=["get","getKey","getAll","getAllKeys","count"],bl=["put","add","delete","clear"],er=new Map;function Mi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(er.get(t))return er.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=bl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Dl.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return er.set(t,s),s}Pl(e=>({...e,get:(t,n,r)=>Mi(t,n)||e.get(t,n,r),has:(t,n)=>!!Mi(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kl(e){const t=e.getComponent();return t?.type==="VERSION"}const _r="@firebase/app",xi="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new bs("@firebase/app"),Ol="@firebase/app-compat",Ml="@firebase/analytics-compat",xl="@firebase/analytics",Fl="@firebase/app-check-compat",Ll="@firebase/app-check",Ul="@firebase/auth",Bl="@firebase/auth-compat",jl="@firebase/database",$l="@firebase/database-compat",ql="@firebase/functions",Hl="@firebase/functions-compat",zl="@firebase/installations",Gl="@firebase/installations-compat",Kl="@firebase/messaging",Ql="@firebase/messaging-compat",Wl="@firebase/performance",Xl="@firebase/performance-compat",Yl="@firebase/remote-config",Jl="@firebase/remote-config-compat",Zl="@firebase/storage",tu="@firebase/storage-compat",eu="@firebase/firestore",nu="@firebase/firestore-compat",ru="firebase",iu="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]",su={[_r]:"fire-core",[Ol]:"fire-core-compat",[xl]:"fire-analytics",[Ml]:"fire-analytics-compat",[Ll]:"fire-app-check",[Fl]:"fire-app-check-compat",[Ul]:"fire-auth",[Bl]:"fire-auth-compat",[jl]:"fire-rtdb",[$l]:"fire-rtdb-compat",[ql]:"fire-fn",[Hl]:"fire-fn-compat",[zl]:"fire-iid",[Gl]:"fire-iid-compat",[Kl]:"fire-fcm",[Ql]:"fire-fcm-compat",[Wl]:"fire-perf",[Xl]:"fire-perf-compat",[Yl]:"fire-rc",[Jl]:"fire-rc-compat",[Zl]:"fire-gcs",[tu]:"fire-gcs-compat",[eu]:"fire-fst",[nu]:"fire-fst-compat","fire-js":"fire-js",[ru]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new Map,Er=new Map;function ou(e,t){try{e.container.addComponent(t)}catch(n){Ft.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function an(e){const t=e.name;if(Er.has(t))return Ft.debug(`There were multiple attempts to register component ${t}.`),!1;Er.set(t,e);for(const n of on.values())ou(n,e);return!0}function au(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vt=new Ds("app","Firebase",lu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=iu;function Os(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:yr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw vt.create("bad-app-name",{appName:String(i)});if(n||(n=Vs()),!n)throw vt.create("no-options");const s=on.get(i);if(s){if(pr(n,s.options)&&pr(r,s.config))return s;throw vt.create("duplicate-app",{appName:i})}const o=new ml(i);for(const l of Er.values())o.addComponent(l);const a=new uu(n,r,o);return on.set(i,a),a}function cu(e=yr){const t=on.get(e);if(!t&&e===yr&&Vs())return Os();if(!t)throw vt.create("no-app",{appName:e});return t}function Gt(e,t,n){var r;let i=(r=su[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ft.warn(a.join(" "));return}an(new ye(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="firebase-heartbeat-database",du=1,Ee="firebase-heartbeat-store";let nr=null;function Ms(){return nr||(nr=Vl(fu,du,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ee)}}}).catch(e=>{throw vt.create("idb-open",{originalErrorMessage:e.message})})),nr}async function pu(e){try{return await(await Ms()).transaction(Ee).objectStore(Ee).get(xs(e))}catch(t){if(t instanceof ee)Ft.warn(t.message);else{const n=vt.create("idb-get",{originalErrorMessage:t?.message});Ft.warn(n.message)}}}async function Fi(e,t){try{const r=(await Ms()).transaction(Ee,"readwrite");await r.objectStore(Ee).put(t,xs(e)),await r.done}catch(n){if(n instanceof ee)Ft.warn(n.message);else{const r=vt.create("idb-set",{originalErrorMessage:n?.message});Ft.warn(r.message)}}}function xs(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=1024,mu=30*24*60*60*1e3;class _u{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Eu(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Li();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=mu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Li(),{heartbeatsToSend:r,unsentEntries:i}=yu(this._heartbeatsCache.heartbeats),s=sn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Li(){return new Date().toISOString().substring(0,10)}function yu(e,t=gu){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ui(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ui(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Eu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ll()?ul().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pu(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ui(e){return sn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(e){an(new ye("platform-logger",t=>new Nl(t),"PRIVATE")),an(new ye("heartbeat",t=>new _u(t),"PRIVATE")),Gt(_r,xi,e),Gt(_r,xi,"esm2017"),Gt("fire-js","")}vu("");var Tu="firebase",Iu="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(Tu,Iu,"app");var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Ur=Ur||{},E=Au||self;function wn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Oe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function wu(e){return Object.prototype.hasOwnProperty.call(e,rr)&&e[rr]||(e[rr]=++Ru)}var rr="closure_uid_"+(1e9*Math.random()>>>0),Ru=0;function Pu(e,t,n){return e.call.apply(e.bind,arguments)}function Su(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Y(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y=Pu:Y=Su,Y.apply(null,arguments)}function Ge(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function $(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Rt(){this.s=this.s,this.o=this.o}var Cu=0;Rt.prototype.s=!1;Rt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Cu!=0)&&wu(this)};Rt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fs=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Br(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Bi(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(wn(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function J(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var Vu=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};E.addEventListener("test",n,t),E.removeEventListener("test",n,t)}catch{}return e}();function ve(e){return/^[\s\xa0]*$/.test(e)}function Rn(){var e=E.navigator;return e&&(e=e.userAgent)?e:""}function ut(e){return Rn().indexOf(e)!=-1}function jr(e){return jr[" "](e),e}jr[" "]=function(){};function Du(e,t){var n=Ih;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var bu=ut("Opera"),Wt=ut("Trident")||ut("MSIE"),Ls=ut("Edge"),vr=Ls||Wt,Us=ut("Gecko")&&!(Rn().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge"))&&!(ut("Trident")||ut("MSIE"))&&!ut("Edge"),Nu=Rn().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge");function Bs(){var e=E.document;return e?e.documentMode:void 0}var Tr;t:{var ir="",sr=function(){var e=Rn();if(Us)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ls)return/Edge\/([\d\.]+)/.exec(e);if(Wt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Nu)return/WebKit\/(\S+)/.exec(e);if(bu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(sr&&(ir=sr?sr[1]:""),Wt){var or=Bs();if(or!=null&&or>parseFloat(ir)){Tr=String(or);break t}}Tr=ir}var Ir;if(E.document&&Wt){var ji=Bs();Ir=ji||parseInt(Tr,10)||void 0}else Ir=void 0;var ku=Ir;function Te(e,t){if(J.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Us){t:{try{jr(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ou[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Te.$.h.call(this)}}$(Te,J);var Ou={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Mu=0;function xu(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Mu,this.fa=this.ia=!1}function Pn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function $r(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Fu(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function js(e){const t={};for(const n in e)t[n]=e[n];return t}const $i="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $s(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<$i.length;s++)n=$i[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Sn(e){this.src=e,this.g={},this.h=0}Sn.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=wr(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new xu(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Ar(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Fs(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Pn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function wr(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var qr="closure_lm_"+(1e6*Math.random()|0),ar={};function qs(e,t,n,r,i){if(r&&r.once)return zs(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)qs(e,t[s],n,r,i);return null}return n=Gr(n),e&&e[Me]?e.O(t,n,Oe(r)?!!r.capture:!!r,i):Hs(e,t,n,!1,r,i)}function Hs(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Oe(i)?!!i.capture:!!i,a=zr(e);if(a||(e[qr]=a=new Sn(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Lu(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Vu||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ks(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Lu(){function e(n){return t.call(e.src,e.listener,n)}const t=Uu;return e}function zs(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)zs(e,t[s],n,r,i);return null}return n=Gr(n),e&&e[Me]?e.P(t,n,Oe(r)?!!r.capture:!!r,i):Hs(e,t,n,!0,r,i)}function Gs(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Gs(e,t[s],n,r,i);else r=Oe(r)?!!r.capture:!!r,n=Gr(n),e&&e[Me]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=wr(s,n,r,i),-1<n&&(Pn(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=zr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=wr(t,n,r,i)),(n=-1<e?t[e]:null)&&Hr(n))}function Hr(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Me])Ar(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ks(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=zr(t))?(Ar(n,e),n.h==0&&(n.src=null,t[qr]=null)):Pn(e)}}}function Ks(e){return e in ar?ar[e]:ar[e]="on"+e}function Uu(e,t){if(e.fa)e=!0;else{t=new Te(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Hr(e),e=n.call(r,t)}return e}function zr(e){return e=e[qr],e instanceof Sn?e:null}var lr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gr(e){return typeof e=="function"?e:(e[lr]||(e[lr]=function(t){return e.handleEvent(t)}),e[lr])}function B(){Rt.call(this),this.i=new Sn(this),this.S=this,this.J=null}$(B,Rt);B.prototype[Me]=!0;B.prototype.removeEventListener=function(e,t,n,r){Gs(this,e,t,n,r)};function K(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new J(t,e);else if(t instanceof J)t.target=t.target||e;else{var i=t;t=new J(r,e),$s(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ke(o,r,!0,t)&&i}if(o=t.g=e,i=Ke(o,r,!0,t)&&i,i=Ke(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ke(o,r,!1,t)&&i}B.prototype.N=function(){if(B.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Pn(n[r]);delete e.g[t],e.h--}}this.J=null};B.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};B.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Ke(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ar(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Kr=E.JSON.stringify;class Bu{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function ju(){var e=Qr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class $u{constructor(){this.h=this.g=null}add(t,n){const r=Qs.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Qs=new Bu(()=>new qu,e=>e.reset());class qu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Hu(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function zu(e){E.setTimeout(()=>{throw e},0)}let Ie,Ae=!1,Qr=new $u,Ws=()=>{const e=E.Promise.resolve(void 0);Ie=()=>{e.then(Gu)}};var Gu=()=>{for(var e;e=ju();){try{e.h.call(e.g)}catch(n){zu(n)}var t=Qs;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ae=!1};function Cn(e,t){B.call(this),this.h=e||1,this.g=t||E,this.j=Y(this.qb,this),this.l=Date.now()}$(Cn,B);p=Cn.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),K(this,"tick"),this.ga&&(Wr(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}p.N=function(){Cn.$.N.call(this),Wr(this),delete this.g};function Xr(e,t,n){if(typeof e=="function")n&&(e=Y(e,n));else if(e&&typeof e.handleEvent=="function")e=Y(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function Xs(e){e.g=Xr(()=>{e.g=null,e.i&&(e.i=!1,Xs(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Ku extends Rt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Xs(this)}N(){super.N(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function we(e){Rt.call(this),this.h=e,this.g={}}$(we,Rt);var qi=[];function Ys(e,t,n,r){Array.isArray(n)||(n&&(qi[0]=n.toString()),n=qi);for(var i=0;i<n.length;i++){var s=qs(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Js(e){$r(e.g,function(t,n){this.g.hasOwnProperty(n)&&Hr(t)},e),e.g={}}we.prototype.N=function(){we.$.N.call(this),Js(this)};we.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vn(){this.g=!0}Vn.prototype.Ea=function(){this.g=!1};function Qu(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&c[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Wu(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function zt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Yu(e,n)+(r?" "+r:"")})}function Xu(e,t){e.info(function(){return"TIMEOUT: "+t})}Vn.prototype.info=function(){};function Yu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kr(n)}catch{return t}}var jt={},Hi=null;function Dn(){return Hi=Hi||new B}jt.Ta="serverreachability";function Zs(e){J.call(this,jt.Ta,e)}$(Zs,J);function Re(e){const t=Dn();K(t,new Zs(t))}jt.STAT_EVENT="statevent";function to(e,t){J.call(this,jt.STAT_EVENT,e),this.stat=t}$(to,J);function tt(e){const t=Dn();K(t,new to(t,e))}jt.Ua="timingevent";function eo(e,t){J.call(this,jt.Ua,e),this.size=t}$(eo,J);function xe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var bn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},no={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Yr(){}Yr.prototype.h=null;function zi(e){return e.h||(e.h=e.i())}function ro(){}var Fe={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jr(){J.call(this,"d")}$(Jr,J);function Zr(){J.call(this,"c")}$(Zr,J);var Rr;function Nn(){}$(Nn,Yr);Nn.prototype.g=function(){return new XMLHttpRequest};Nn.prototype.i=function(){return{}};Rr=new Nn;function Le(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new we(this),this.P=Ju,e=vr?125:void 0,this.V=new Cn(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new io}function io(){this.i=null,this.g="",this.h=!1}var Ju=45e3,so={},Pr={};p=Le.prototype;p.setTimeout=function(e){this.P=e};function Sr(e,t,n){e.L=1,e.A=On(_t(t)),e.u=n,e.S=!0,oo(e,null)}function oo(e,t){e.G=Date.now(),Ue(e),e.B=_t(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),go(n.i,"t",r),e.o=0,n=e.l.J,e.h=new io,e.g=xo(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Ku(Y(e.Pa,e,e.g),e.O)),Ys(e.U,e.g,"readystatechange",e.nb),t=e.I?js(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Re(),Qu(e.j,e.v,e.B,e.m,e.W,e.u)}p.nb=function(e){e=e.target;const t=this.M;t&&ht(e)==3?t.l():this.Pa(e)};p.Pa=function(e){try{if(e==this.g)t:{const h=ht(this.g);var t=this.g.Ia();const c=this.g.da();if(!(3>h)&&(h!=3||vr||this.g&&(this.h.h||this.g.ja()||Wi(this.g)))){this.J||h!=4||t==7||(t==8||0>=c?Re(3):Re(2)),kn(this);var n=this.g.da();this.ca=n;e:if(ao(this)){var r=Wi(this.g);e="";var i=r.length,s=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bt(this),fe(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Wu(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ve(a)){var u=a;break e}}u=null}if(n=u)zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cr(this,n);else{this.i=!1,this.s=3,tt(12),bt(this),fe(this);break t}}this.S?(lo(this,h,o),vr&&this.i&&h==3&&(Ys(this.U,this.V,"tick",this.mb),this.V.start())):(zt(this.j,this.m,o,null),Cr(this,o)),h==4&&bt(this),this.i&&!this.J&&(h==4?No(this.l,this):(this.i=!1,Ue(this)))}else Eh(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),bt(this),fe(this)}}}catch{}finally{}};function ao(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function lo(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=Zu(e,n),i==Pr){t==4&&(e.s=4,tt(14),r=!1),zt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==so){e.s=4,tt(15),zt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else zt(e.j,e.m,i,null),Cr(e,i);ao(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,tt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),si(t),t.M=!0,tt(11))):(zt(e.j,e.m,n,"[Invalid Chunked Response]"),bt(e),fe(e))}p.mb=function(){if(this.g){var e=ht(this.g),t=this.g.ja();this.o<t.length&&(kn(this),lo(this,e,t),this.i&&e!=4&&Ue(this))}};function Zu(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Pr:(n=Number(t.substring(n,r)),isNaN(n)?so:(r+=1,r+n>t.length?Pr:(t=t.slice(r,r+n),e.o=r+n,t)))}p.cancel=function(){this.J=!0,bt(this)};function Ue(e){e.Y=Date.now()+e.P,uo(e,e.P)}function uo(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=xe(Y(e.lb,e),t)}function kn(e){e.C&&(E.clearTimeout(e.C),e.C=null)}p.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Xu(this.j,this.B),this.L!=2&&(Re(),tt(17)),bt(this),this.s=2,fe(this)):uo(this,this.Y-e)};function fe(e){e.l.H==0||e.J||No(e.l,e)}function bt(e){kn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Wr(e.V),Js(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Cr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Vr(n.i,e))){if(!e.K&&Vr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)hn(n),Ln(n);else break t;ii(n),tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=xe(Y(n.ib,n),6e3));if(1>=yo(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Nt(n,11)}else if((e.K||n.g==e)&&hn(n),!ve(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const c=u[4];c!=null&&(n.Ga=c,n.l.info("SVER="+n.Ga));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const I=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ti(s,s.h),s.h=null))}if(r.F){const C=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(r.Da=C,b(r.I,r.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Mo(r,r.J?r.pa:null,r.Y),o.K){Eo(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(kn(a),Ue(a)),r.g=o}else Do(r);0<n.j.length&&Un(n)}else u[0]!="stop"&&u[0]!="close"||Nt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Nt(n,7):ri(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Re(4)}catch{}}function th(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(wn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function eh(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(wn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function ho(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(wn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=eh(e),r=th(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var co=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ot(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ot){this.h=e.h,ln(this,e.j),this.s=e.s,this.g=e.g,un(this,e.m),this.l=e.l;var t=e.i,n=new Pe;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Gi(this,n),this.o=e.o}else e&&(t=String(e).match(co))?(this.h=!1,ln(this,t[1]||"",!0),this.s=he(t[2]||""),this.g=he(t[3]||"",!0),un(this,t[4]),this.l=he(t[5]||"",!0),Gi(this,t[6]||"",!0),this.o=he(t[7]||"")):(this.h=!1,this.i=new Pe(null,this.h))}Ot.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ce(t,Ki,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ce(t,Ki,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ce(n,n.charAt(0)=="/"?sh:ih,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ce(n,ah)),e.join("")};function _t(e){return new Ot(e)}function ln(e,t,n){e.j=n?he(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function un(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gi(e,t,n){t instanceof Pe?(e.i=t,lh(e.i,e.h)):(n||(t=ce(t,oh)),e.i=new Pe(t,e.h))}function b(e,t,n){e.i.set(t,n)}function On(e){return b(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function he(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ce(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,rh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function rh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ki=/[#\/\?@]/g,ih=/[#\?:]/g,sh=/[#\?]/g,oh=/[#\?@]/g,ah=/#/g;function Pe(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Pt(e){e.g||(e.g=new Map,e.h=0,e.i&&nh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=Pe.prototype;p.add=function(e,t){Pt(this),this.i=null,e=ne(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function fo(e,t){Pt(e),t=ne(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function po(e,t){return Pt(e),t=ne(e,t),e.g.has(t)}p.forEach=function(e,t){Pt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};p.ta=function(){Pt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};p.Z=function(e){Pt(this);let t=[];if(typeof e=="string")po(this,e)&&(t=t.concat(this.g.get(ne(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return Pt(this),this.i=null,e=ne(this,e),po(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function go(e,t,n){fo(e,t),0<n.length&&(e.i=null,e.g.set(ne(e,t),Br(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ne(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function lh(e,t){t&&!e.j&&(Pt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(fo(this,r),go(this,i,n))},e)),e.j=t}var uh=class{constructor(e,t){this.g=e,this.map=t}};function mo(e){this.l=e||hh,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ka&&E.g.Ka()&&E.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hh=10;function _o(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function yo(e){return e.h?1:e.g?e.g.size:0}function Vr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ti(e,t){e.g?e.g.add(t):e.h=t}function Eo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}mo.prototype.cancel=function(){if(this.i=vo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function vo(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Br(e.i)}var ch=class{stringify(e){return E.JSON.stringify(e,void 0)}parse(e){return E.JSON.parse(e,void 0)}};function fh(){this.g=new ch}function dh(e,t,n){const r=n||"";try{ho(e,function(i,s){let o=i;Oe(i)&&(o=Kr(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function ph(e,t){const n=new Vn;if(E.Image){const r=new Image;r.onload=Ge(Qe,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ge(Qe,n,r,"TestLoadImage: error",!1,t),r.onabort=Ge(Qe,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ge(Qe,n,r,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Qe(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Mn(e){this.l=e.ec||null,this.j=e.ob||!1}$(Mn,Yr);Mn.prototype.g=function(){return new xn(this.l,this.j)};Mn.prototype.i=function(e){return function(){return e}}({});function xn(e,t){B.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ei,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(xn,B);var ei=0;p=xn.prototype;p.open=function(e,t){if(this.readyState!=ei)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Se(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||E).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Be(this)),this.readyState=ei};p.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Se(this)),this.g&&(this.readyState=3,Se(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;To(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function To(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}p.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Be(this):Se(this),this.readyState==3&&To(this)}};p.Za=function(e){this.g&&(this.response=this.responseText=e,Be(this))};p.Ya=function(e){this.g&&(this.response=e,Be(this))};p.ka=function(){this.g&&Be(this)};function Be(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Se(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Se(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var gh=E.JSON.parse;function M(e){B.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Io,this.L=this.M=!1}$(M,B);var Io="",mh=/^https?$/i,_h=["POST","PUT"];p=M.prototype;p.Oa=function(e){this.M=e};p.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Rr.g(),this.C=this.u?zi(this.u):zi(Rr),this.g.onreadystatechange=Y(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Qi(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=E.FormData&&e instanceof E.FormData,!(0<=Fs(_h,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ro(this),0<this.B&&((this.L=yh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.ua,this)):this.A=Xr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Qi(this,s)}};function yh(e){return Wt&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.ua=function(){typeof Ur<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function Qi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ao(e),Fn(e)}function Ao(e){e.F||(e.F=!0,K(e,"complete"),K(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,K(this,"complete"),K(this,"abort"),Fn(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),M.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?wo(this):this.kb())};p.kb=function(){wo(this)};function wo(e){if(e.h&&typeof Ur<"u"&&(!e.C[1]||ht(e)!=4||e.da()!=2)){if(e.v&&ht(e)==4)Xr(e.La,0,e);else if(K(e,"readystatechange"),ht(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(co)[1]||null;!i&&E.self&&E.self.location&&(i=E.self.location.protocol.slice(0,-1)),r=!mh.test(i?i.toLowerCase():"")}n=r}if(n)K(e,"complete"),K(e,"success");else{e.m=6;try{var s=2<ht(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Ao(e)}}finally{Fn(e)}}}}function Fn(e,t){if(e.g){Ro(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||K(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ro(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}p.isActive=function(){return!!this.g};function ht(e){return e.g?e.g.readyState:0}p.da=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),gh(t)}};function Wi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Io:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Eh(e){const t={};e=(e.g&&2<=ht(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(ve(e[r]))continue;var n=Hu(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Fu(t,function(r){return r.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Po(e){let t="";return $r(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function ni(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Po(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):b(e,t,n))}function oe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function So(e){this.Ga=0,this.j=[],this.l=new Vn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oe("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oe("baseRetryDelayMs",5e3,e),this.hb=oe("retryDelaySeedMs",1e4,e),this.eb=oe("forwardChannelMaxRetries",2,e),this.xa=oe("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new mo(e&&e.concurrentRequestLimit),this.Ja=new fh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=So.prototype;p.ra=8;p.H=1;function ri(e){if(Co(e),e.H==3){var t=e.W++,n=_t(e.I);if(b(n,"SID",e.K),b(n,"RID",t),b(n,"TYPE","terminate"),je(e,n),t=new Le(e,e.l,t),t.L=2,t.A=On(_t(n)),n=!1,E.navigator&&E.navigator.sendBeacon)try{n=E.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&E.Image&&(new Image().src=t.A,n=!0),n||(t.g=xo(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Ue(t)}Oo(e)}function Ln(e){e.g&&(si(e),e.g.cancel(),e.g=null)}function Co(e){Ln(e),e.u&&(E.clearTimeout(e.u),e.u=null),hn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function Un(e){if(!_o(e.i)&&!e.m){e.m=!0;var t=e.Na;Ie||Ws(),Ae||(Ie(),Ae=!0),Qr.add(t,e),e.C=0}}function vh(e,t){return yo(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=xe(Y(e.Na,e,t),ko(e,e.C)),e.C++,!0)}p.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Le(this,this.l,e);let s=this.s;if(this.U&&(s?(s=js(s),$s(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Vo(this,i,t),n=_t(this.I),b(n,"RID",e),b(n,"CVER",22),this.F&&b(n,"X-HTTP-Session-Id",this.F),je(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Po(s)))+"&"+t:this.o&&ni(n,this.o,s)),ti(this.i,i),this.bb&&b(n,"TYPE","init"),this.P?(b(n,"$req",t),b(n,"SID","null"),i.aa=!0,Sr(i,n,null)):Sr(i,n,t),this.H=2}}else this.H==3&&(e?Xi(this,e):this.j.length==0||_o(this.i)||Xi(this))};function Xi(e,t){var n;t?n=t.m:n=e.W++;const r=_t(e.I);b(r,"SID",e.K),b(r,"RID",n),b(r,"AID",e.V),je(e,r),e.o&&e.s&&ni(r,e.o,e.s),n=new Le(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Vo(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ti(e.i,n),Sr(n,r,t)}function je(e,t){e.na&&$r(e.na,function(n,r){b(t,r,n)}),e.h&&ho({},function(n,r){b(t,r,n)})}function Vo(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Y(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const h=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{dh(h,o,"req"+u+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Do(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ie||Ws(),Ae||(Ie(),Ae=!0),Qr.add(t,e),e.A=0}}function ii(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=xe(Y(e.Ma,e),ko(e,e.A)),e.A++,!0)}p.Ma=function(){if(this.u=null,bo(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=xe(Y(this.jb,this),e)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),Ln(this),bo(this))};function si(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function bo(e){e.g=new Le(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=_t(e.wa);b(t,"RID","rpc"),b(t,"SID",e.K),b(t,"AID",e.V),b(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&b(t,"TO",e.qa),b(t,"TYPE","xmlhttp"),je(e,t),e.o&&e.s&&ni(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=On(_t(t)),n.u=null,n.S=!0,oo(n,e)}p.ib=function(){this.v!=null&&(this.v=null,Ln(this),ii(this),tt(19))};function hn(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function No(e,t){var n=null;if(e.g==t){hn(e),si(e),e.g=null;var r=2}else if(Vr(e.i,t))n=t.F,Eo(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=Dn(),K(r,new eo(r,n)),Un(e)}else Do(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&vh(e,t)||r==2&&ii(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Nt(e,5);break;case 4:Nt(e,10);break;case 3:Nt(e,6);break;default:Nt(e,2)}}}function ko(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Nt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Y(e.pb,e);n||(n=new Ot("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||ln(n,"https"),On(n)),ph(n.toString(),r)}else tt(2);e.H=0,e.h&&e.h.za(t),Oo(e),Co(e)}p.pb=function(e){e?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function Oo(e){if(e.H=0,e.ma=[],e.h){const t=vo(e.i);(t.length!=0||e.j.length!=0)&&(Bi(e.ma,t),Bi(e.ma,e.j),e.i.i.length=0,Br(e.j),e.j.length=0),e.h.ya()}}function Mo(e,t,n){var r=n instanceof Ot?_t(n):new Ot(n);if(r.g!="")t&&(r.g=t+"."+r.g),un(r,r.m);else{var i=E.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ot(null);r&&ln(s,r),t&&(s.g=t),i&&un(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&b(r,n,t),b(r,"VER",e.ra),je(e,r),r}function xo(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new M(new Mn({ob:n})):new M(e.va),t.Oa(e.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function Fo(){}p=Fo.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function cn(){if(Wt&&!(10<=Number(ku)))throw Error("Environmental error: no available transport.")}cn.prototype.g=function(e,t){return new nt(e,t)};function nt(e,t){B.call(this),this.g=new So(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ve(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ve(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new re(this)}$(nt,B);nt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;tt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Mo(e,null,e.Y),Un(e)};nt.prototype.close=function(){ri(this.g)};nt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Kr(e),e=n);t.j.push(new uh(t.fb++,e)),t.H==3&&Un(t)};nt.prototype.N=function(){this.g.h=null,delete this.j,ri(this.g),delete this.g,nt.$.N.call(this)};function Lo(e){Jr.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}$(Lo,Jr);function Uo(){Zr.call(this),this.status=1}$(Uo,Zr);function re(e){this.g=e}$(re,Fo);re.prototype.Ba=function(){K(this.g,"a")};re.prototype.Aa=function(e){K(this.g,new Lo(e))};re.prototype.za=function(e){K(this.g,new Uo)};re.prototype.ya=function(){K(this.g,"b")};function Th(){this.blockSize=-1}function ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$(ft,Th);ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ur(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}ft.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)ur(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){ur(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){ur(this,r),i=0;break}}this.h=i,this.i+=t};ft.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function P(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Ih={};function oi(e){return-128<=e&&128>e?Du(e,function(t){return new P([t|0],0>t?-1:0)}):new P([e|0],0>e?-1:0)}function ct(e){if(isNaN(e)||!isFinite(e))return Kt;if(0>e)return z(ct(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Dr;return new P(t,0)}function Bo(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return z(Bo(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ct(Math.pow(t,8)),r=Kt,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=ct(Math.pow(t,s)),r=r.R(s).add(ct(o))):(r=r.R(n),r=r.add(ct(o)))}return r}var Dr=4294967296,Kt=oi(0),br=oi(1),Yi=oi(16777216);p=P.prototype;p.ea=function(){if(rt(this))return-z(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Dr+r)*t,t*=Dr}return e};p.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(pt(this))return"0";if(rt(this))return"-"+z(this).toString(e);for(var t=ct(Math.pow(e,6)),n=this,r="";;){var i=dn(n,t).g;n=fn(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,pt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};p.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function pt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function rt(e){return e.h==-1}p.X=function(e){return e=fn(this,e),rt(e)?-1:pt(e)?0:1};function z(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new P(n,~e.h).add(br)}p.abs=function(){return rt(this)?z(this):this};p.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new P(n,n[n.length-1]&-2147483648?-1:0)};function fn(e,t){return e.add(z(t))}p.R=function(e){if(pt(this)||pt(e))return Kt;if(rt(this))return rt(e)?z(this).R(z(e)):z(z(this).R(e));if(rt(e))return z(this.R(z(e)));if(0>this.X(Yi)&&0>e.X(Yi))return ct(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,We(n,2*r+2*i),n[2*r+2*i+1]+=s*l,We(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,We(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,We(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new P(n,0)};function We(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ae(e,t){this.g=e,this.h=t}function dn(e,t){if(pt(t))throw Error("division by zero");if(pt(e))return new ae(Kt,Kt);if(rt(e))return t=dn(z(e),t),new ae(z(t.g),z(t.h));if(rt(t))return t=dn(e,z(t)),new ae(z(t.g),t.h);if(30<e.g.length){if(rt(e)||rt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=br,r=t;0>=r.X(e);)n=Ji(n),r=Ji(r);var i=qt(n,1),s=qt(r,1);for(r=qt(r,2),n=qt(n,2);!pt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=qt(r,1),n=qt(n,1)}return t=fn(e,i.R(t)),new ae(i,t)}for(i=Kt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ct(n),o=s.R(t);rt(o)||0<o.X(e);)n-=r,s=ct(n),o=s.R(t);pt(s)&&(s=br),i=i.add(s),e=fn(e,o)}return new ae(i,e)}p.gb=function(e){return dn(this,e).h};p.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new P(n,this.h&e.h)};p.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new P(n,this.h|e.h)};p.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new P(n,this.h^e.h)};function Ji(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new P(n,e.h)}function qt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new P(i,e.h)}cn.prototype.createWebChannel=cn.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;bn.NO_ERROR=0;bn.TIMEOUT=8;bn.HTTP_ERROR=6;no.COMPLETE="complete";ro.EventType=Fe;Fe.OPEN="a";Fe.CLOSE="b";Fe.ERROR="c";Fe.MESSAGE="d";B.prototype.listen=B.prototype.O;M.prototype.listenOnce=M.prototype.P;M.prototype.getLastError=M.prototype.Sa;M.prototype.getLastErrorCode=M.prototype.Ia;M.prototype.getStatus=M.prototype.da;M.prototype.getResponseJson=M.prototype.Wa;M.prototype.getResponseText=M.prototype.ja;M.prototype.send=M.prototype.ha;M.prototype.setWithCredentials=M.prototype.Oa;ft.prototype.digest=ft.prototype.l;ft.prototype.reset=ft.prototype.reset;ft.prototype.update=ft.prototype.j;P.prototype.add=P.prototype.add;P.prototype.multiply=P.prototype.R;P.prototype.modulo=P.prototype.gb;P.prototype.compare=P.prototype.X;P.prototype.toNumber=P.prototype.ea;P.prototype.toString=P.prototype.toString;P.prototype.getBits=P.prototype.D;P.fromNumber=ct;P.fromString=Bo;var Ah=function(){return new cn},wh=function(){return Dn()},hr=bn,Rh=no,Ph=jt,Zi={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Xe=ro,Sh=M,Ch=P;const ts="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ie="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new bs("@firebase/firestore");function le(){return Lt.logLevel}function _(e,...t){if(Lt.logLevel<=w.DEBUG){const n=t.map(ai);Lt.debug(`Firestore (${ie}): ${e}`,...n)}}function Ut(e,...t){if(Lt.logLevel<=w.ERROR){const n=t.map(ai);Lt.error(`Firestore (${ie}): ${e}`,...n)}}function pn(e,...t){if(Lt.logLevel<=w.WARN){const n=t.map(ai);Lt.warn(`Firestore (${ie}): ${e}`,...n)}}function ai(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${ie}) INTERNAL ASSERTION FAILED: `+e;throw Ut(t),new Error(t)}function j(e,t){e||T()}function N(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends ee{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Vh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class Dh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bh{constructor(t){this.t=t,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Mt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Mt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(j(typeof r.accessToken=="string"),new jo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return j(t===null||typeof t=="string"),new W(t)}}class Nh{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=W.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kh{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Nh(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(j(typeof n.token=="string"),this.R=n.token,new Oh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=xh(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function V(e,t){return e<t?-1:e>t?1:0}function Xt(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return U.fromMillis(Date.now())}static fromDate(t){return U.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new U(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?V(this.nanoseconds,t.nanoseconds):V(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.timestamp=t}static fromTimestamp(t){return new k(t)}static min(){return new k(new U(0,0))}static max(){return new k(new U(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,n,r){n===void 0?n=0:n>t.length&&T(),r===void 0?r=t.length-n:r>t.length-n&&T(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ce.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ce?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends Ce{construct(t,n,r){return new O(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(d.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new O(n)}static emptyPath(){return new O([])}}const Fh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends Ce{construct(t,n,r){return new G(t,n,r)}static isValidIdentifier(t){return Fh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new G(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new y(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new y(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new G(n)}static emptyPath(){return new G([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(O.fromString(t))}static fromName(t){return new v(O.fromString(t).popFirst(5))}static empty(){return new v(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new O(t.slice()))}}function Lh(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=k.fromTimestamp(r===1e9?new U(n+1,0):new U(n,r));return new It(i,v.empty(),t)}function Uh(e){return new It(e.readTime,e.key,-1)}class It{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new It(k.min(),v.empty(),-1)}static max(){return new It(k.max(),v.empty(),-1)}}function Bh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:V(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $h{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==jh)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,r)=>{n(t)})}static reject(t){return new f((n,r)=>{r(t)})}static waitFor(t){return new f((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=f.resolve(!1);for(const r of t)n=n.next(i=>i?f.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new f((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(t,n){return new f((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Bn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Ho._e=-1;function li(e){return e==null}function gn(e){return e===0&&1/e==-1/0}function qh(e){return typeof e=="number"&&Number.isInteger(e)&&!gn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function $e(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function zo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n){this.comparator=t,this.root=n||q.EMPTY}insert(t,n){return new et(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ye(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ye(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ye(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ye(this.root,t,this.comparator,!0)}}class Ye{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??q.RED,this.left=i??q.EMPTY,this.right=s??q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new q(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return q.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,n,r,i,s){return this}insert(t,n,r){return new q(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ns(this.data.getIterator())}getIteratorFrom(t){return new ns(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Z(this.comparator);return n.data=t,n}}class ns{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.fields=t,t.sort(G.comparator)}static empty(){return new at([])}unionWith(t){let n=new Z(G.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new at(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Xt(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Hh("Invalid base64 string: "+s):s}}(t);return new yt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new yt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return V(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const zh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(e){if(j(!!e),typeof e=="string"){let t=0;const n=zh.exec(e);if(j(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:H(e.seconds),nanos:H(e.nanos)}}function H(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ve(e){return typeof e=="string"?yt.fromBase64String(e):yt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Go(e){const t=e.mapValue.fields.__previous_value__;return ui(t)?Go(t):t}function mn(e){const t=Bt(e.mapValue.fields.__local_write_time__.timestampValue);return new U(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class _n{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new _n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof _n&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ui(e)?4:Kh(e)?9007199254740991:10:T()}function dt(e,t){if(e===t)return!0;const n=Yt(e);if(n!==Yt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return mn(e).isEqual(mn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Bt(i.timestampValue),a=Bt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Ve(i.bytesValue).isEqual(Ve(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return H(i.geoPointValue.latitude)===H(s.geoPointValue.latitude)&&H(i.geoPointValue.longitude)===H(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return H(i.integerValue)===H(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=H(i.doubleValue),a=H(s.doubleValue);return o===a?gn(o)===gn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Xt(e.arrayValue.values||[],t.arrayValue.values||[],dt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(es(o)!==es(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!dt(o[l],a[l])))return!1;return!0}(e,t);default:return T()}}function De(e,t){return(e.values||[]).find(n=>dt(n,t))!==void 0}function Jt(e,t){if(e===t)return 0;const n=Yt(e),r=Yt(t);if(n!==r)return V(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=H(s.integerValue||s.doubleValue),l=H(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return rs(e.timestampValue,t.timestampValue);case 4:return rs(mn(e),mn(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Ve(s),l=Ve(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=V(a[u],l[u]);if(h!==0)return h}return V(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=V(H(s.latitude),H(o.latitude));return a!==0?a:V(H(s.longitude),H(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const h=Jt(a[u],l[u]);if(h)return h}return V(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Je.mapValue&&o===Je.mapValue)return 0;if(s===Je.mapValue)return 1;if(o===Je.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let c=0;c<l.length&&c<h.length;++c){const g=V(l[c],h[c]);if(g!==0)return g;const m=Jt(a[l[c]],u[h[c]]);if(m!==0)return m}return V(l.length,h.length)}(e.mapValue,t.mapValue);default:throw T()}}function rs(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return V(e,t);const n=Bt(e),r=Bt(t),i=V(n.seconds,r.seconds);return i!==0?i:V(n.nanos,r.nanos)}function Zt(e){return Nr(e)}function Nr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Bt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ve(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return v.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Nr(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Nr(n.fields[o])}`;return i+"}"}(e.mapValue):T()}function kr(e){return!!e&&"integerValue"in e}function hi(e){return!!e&&"arrayValue"in e}function nn(e){return!!e&&"mapValue"in e}function de(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return $e(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=de(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=de(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Kh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.value=t}static empty(){return new ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!nn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=de(n)}setAll(t){let n=G.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=de(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());nn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return dt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];nn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){$e(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new ot(de(this.value))}}function Ko(e){const t=[];return $e(e.fields,(n,r)=>{const i=new G([n]);if(nn(r)){const s=Ko(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new at(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new st(t,0,k.min(),k.min(),k.min(),ot.empty(),0)}static newFoundDocument(t,n,r,i){return new st(t,1,n,k.min(),r,i,0)}static newNoDocument(t,n){return new st(t,2,n,k.min(),k.min(),ot.empty(),0)}static newUnknownDocument(t,n){return new st(t,3,n,k.min(),k.min(),ot.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof st&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,n){this.position=t,this.inclusive=n}}function is(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),n.key):r=Jt(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ss(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!dt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,n="asc"){this.field=t,this.dir=n}}function Qh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{}class L extends Qo{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Xh(t,n,r):n==="array-contains"?new Zh(t,r):n==="in"?new tc(t,r):n==="not-in"?new ec(t,r):n==="array-contains-any"?new nc(t,r):new L(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Yh(t,r):new Jh(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Jt(n,this.value)):n!==null&&Yt(this.value)===Yt(n)&&this.matchesComparison(Jt(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class At extends Qo{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new At(t,n)}matches(t){return Wo(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Wo(e){return e.op==="and"}function Xo(e){return Wh(e)&&Wo(e)}function Wh(e){for(const t of e.filters)if(t instanceof At)return!1;return!0}function Or(e){if(e instanceof L)return e.field.canonicalString()+e.op.toString()+Zt(e.value);if(Xo(e))return e.filters.map(t=>Or(t)).join(",");{const t=e.filters.map(n=>Or(n)).join(",");return`${e.op}(${t})`}}function Yo(e,t){return e instanceof L?function(r,i){return i instanceof L&&r.op===i.op&&r.field.isEqual(i.field)&&dt(r.value,i.value)}(e,t):e instanceof At?function(r,i){return i instanceof At&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Yo(o,i.filters[a]),!0):!1}(e,t):void T()}function Jo(e){return e instanceof L?function(n){return`${n.field.canonicalString()} ${n.op} ${Zt(n.value)}`}(e):e instanceof At?function(n){return n.op.toString()+" {"+n.getFilters().map(Jo).join(" ,")+"}"}(e):"Filter"}class Xh extends L{constructor(t,n,r){super(t,n,r),this.key=v.fromName(r.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.matchesComparison(n)}}class Yh extends L{constructor(t,n){super(t,"in",n),this.keys=Zo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Jh extends L{constructor(t,n){super(t,"not-in",n),this.keys=Zo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Zo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>v.fromName(r.referenceValue))}class Zh extends L{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return hi(n)&&De(n.arrayValue,this.value)}}class tc extends L{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&De(this.value.arrayValue,n)}}class ec extends L{constructor(t,n){super(t,"not-in",n)}matches(t){if(De(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!De(this.value.arrayValue,n)}}class nc extends L{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!hi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>De(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function os(e,t=null,n=[],r=[],i=null,s=null,o=null){return new rc(e,t,n,r,i,s,o)}function ci(e){const t=N(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Or(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),li(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Zt(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Zt(r)).join(",")),t.ce=n}return t.ce}function fi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Qh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Yo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ss(e.startAt,t.startAt)&&ss(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ic(e,t,n,r,i,s,o,a){return new jn(e,t,n,r,i,s,o,a)}function sc(e){return new jn(e)}function as(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function oc(e){return e.collectionGroup!==null}function pe(e){const t=N(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Z(G.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new En(s,r))}),n.has(G.keyField().canonicalString())||t.le.push(new En(G.keyField(),r))}return t.le}function xt(e){const t=N(e);return t.he||(t.he=ac(t,pe(e))),t.he}function ac(e,t){if(e.limitType==="F")return os(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new En(i.field,s)});const n=e.endAt?new yn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new yn(e.startAt.position,e.startAt.inclusive):null;return os(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Mr(e,t,n){return new jn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ta(e,t){return fi(xt(e),xt(t))&&e.limitType===t.limitType}function ea(e){return`${ci(xt(e))}|lt:${e.limitType}`}function ue(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Jo(i)).join(", ")}]`),li(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Zt(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Zt(i)).join(",")),`Target(${r})`}(xt(e))}; limitType=${e.limitType})`}function di(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):v.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of pe(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=is(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,pe(r),i)||r.endAt&&!function(o,a,l){const u=is(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,pe(r),i))}(e,t)}function lc(e){return(t,n)=>{let r=!1;for(const i of pe(e)){const s=uc(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uc(e,t,n){const r=e.field.isKeyField()?v.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Jt(l,u):T()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){$e(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return zo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new et(v.comparator);function vn(){return hc}const na=new et(v.comparator);function Ze(...e){let t=na;for(const n of e)t=t.insert(n.key,n);return t}function ra(e){let t=na;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function kt(){return ge()}function ia(){return ge()}function ge(){return new se(e=>e.toString(),(e,t)=>e.isEqual(t))}const cc=new et(v.comparator),fc=new Z(v.comparator);function X(...e){let t=fc;for(const n of e)t=t.add(n);return t}const dc=new Z(V);function pc(){return dc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gn(t)?"-0":t}}function oa(e){return{integerValue:""+e}}function gc(e,t){return qh(t)?oa(t):sa(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this._=void 0}}function mc(e,t,n){return e instanceof Tn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ui(s)&&(s=Go(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof be?la(e,t):e instanceof Ne?ua(e,t):function(i,s){const o=aa(i,s),a=ls(o)+ls(i.Ie);return kr(o)&&kr(i.Ie)?oa(a):sa(i.serializer,a)}(e,t)}function _c(e,t,n){return e instanceof be?la(e,t):e instanceof Ne?ua(e,t):n}function aa(e,t){return e instanceof In?function(r){return kr(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Tn extends $n{}class be extends $n{constructor(t){super(),this.elements=t}}function la(e,t){const n=ha(t);for(const r of e.elements)n.some(i=>dt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ne extends $n{constructor(t){super(),this.elements=t}}function ua(e,t){let n=ha(t);for(const r of e.elements)n=n.filter(i=>!dt(i,r));return{arrayValue:{values:n}}}class In extends $n{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function ls(e){return H(e.integerValue||e.doubleValue)}function ha(e){return hi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function yc(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof be&&i instanceof be||r instanceof Ne&&i instanceof Ne?Xt(r.elements,i.elements,dt):r instanceof In&&i instanceof In?dt(r.Ie,i.Ie):r instanceof Tn&&i instanceof Tn}(e.transform,t.transform)}class Ec{constructor(t,n){this.version=t,this.transformResults=n}}class gt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new gt}static exists(t){return new gt(void 0,t)}static updateTime(t){return new gt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class qn{}function ca(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new da(e.key,gt.none()):new qe(e.key,e.data,gt.none());{const n=e.data,r=ot.empty();let i=new Z(G.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new $t(e.key,r,new at(i.toArray()),gt.none())}}function vc(e,t,n){e instanceof qe?function(i,s,o){const a=i.value.clone(),l=hs(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof $t?function(i,s,o){if(!rn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=hs(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(fa(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function me(e,t,n,r){return e instanceof qe?function(s,o,a,l){if(!rn(s.precondition,o))return a;const u=s.value.clone(),h=cs(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof $t?function(s,o,a,l){if(!rn(s.precondition,o))return a;const u=cs(s.fieldTransforms,l,o),h=o.data;return h.setAll(fa(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(c=>c.field))}(e,t,n,r):function(s,o,a){return rn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Tc(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=aa(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function us(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xt(r,i,(s,o)=>yc(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class qe extends qn{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $t extends qn{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function hs(e,t,n){const r=new Map;j(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,_c(o,a,n[i]))}return r}function cs(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mc(s,o,t))}return r}class da extends qn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ic extends qn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&vc(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=me(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=me(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=ia();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=ca(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(k.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),X())}isEqual(t){return this.batchId===t.batchId&&Xt(this.mutations,t.mutations,(n,r)=>us(n,r))&&Xt(this.baseMutations,t.baseMutations,(n,r)=>us(n,r))}}class pi{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){j(t.mutations.length===r.length);let i=function(){return cc}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new pi(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x,A;function Rc(e){switch(e){default:return T();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Pc(e){if(e===void 0)return Ut("GRPC error has no .code"),d.UNKNOWN;switch(e){case x.OK:return d.OK;case x.CANCELLED:return d.CANCELLED;case x.UNKNOWN:return d.UNKNOWN;case x.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case x.INTERNAL:return d.INTERNAL;case x.UNAVAILABLE:return d.UNAVAILABLE;case x.UNAUTHENTICATED:return d.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case x.NOT_FOUND:return d.NOT_FOUND;case x.ALREADY_EXISTS:return d.ALREADY_EXISTS;case x.PERMISSION_DENIED:return d.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case x.ABORTED:return d.ABORTED;case x.OUT_OF_RANGE:return d.OUT_OF_RANGE;case x.UNIMPLEMENTED:return d.UNIMPLEMENTED;case x.DATA_LOSS:return d.DATA_LOSS;default:return T()}}(A=x||(x={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ch([4294967295,4294967295],0);class Sc{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function xr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Vc(e,t){return xr(e,t.toTimestamp())}function Qt(e){return j(!!e),k.fromTimestamp(function(n){const r=Bt(n);return new U(r.seconds,r.nanos)}(e))}function pa(e,t){return function(r){return new O(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Dc(e){const t=O.fromString(e);return j(Lc(t)),t}function Fr(e,t){return pa(e.databaseId,t.path)}function bc(e){const t=Dc(e);return t.length===4?O.emptyPath():kc(t)}function Nc(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function kc(e){return j(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function fs(e,t,n){return{name:Fr(e,t),fields:n.value.mapValue.fields}}function Oc(e,t){let n;if(t instanceof qe)n={update:fs(e,t.key,t.value)};else if(t instanceof da)n={delete:Fr(e,t.key)};else if(t instanceof $t)n={update:fs(e,t.key,t.data),updateMask:Fc(t.fieldMask)};else{if(!(t instanceof Ic))return T();n={verify:Fr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Tn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof be)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ne)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof In)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw T()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Vc(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(e,t.precondition)),n}function Mc(e,t){return e&&e.length>0?(j(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Qt(i.updateTime):Qt(s);return o.isEqual(k.min())&&(o=Qt(s)),new Ec(o,i.transformResults||[])}(n,t))):[]}function xc(e){let t=bc(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){j(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let s=[];n.where&&(s=function(c){const g=ga(c);return g instanceof At&&Xo(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(c){return c.map(g=>function(I){return new En(Ht(I.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(c){let g;return g=typeof c=="object"?c.value:c,li(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(c){const g=!!c.before,m=c.values||[];return new yn(m,g)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const g=!c.before,m=c.values||[];return new yn(m,g)}(n.endAt)),ic(t,i,o,s,a,"F",l,u)}function ga(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ht(n.unaryFilter.field);return L.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ht(n.unaryFilter.field);return L.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ht(n.unaryFilter.field);return L.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ht(n.unaryFilter.field);return L.create(o,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(n){return L.create(Ht(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return At.create(n.compositeFilter.filters.map(r=>ga(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return T()}}(n.compositeFilter.op))}(e):T()}function Ht(e){return G.fromServerFormat(e.fieldPath)}function Fc(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Lc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t){this.ut=t}}function Bc(e){const t=xc({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Mr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.on=new $c}addToCollectionParentIndex(t,n){return this.on.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}deleteAllFieldIndexes(t){return f.resolve()}createTargetIndexes(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(It.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(It.min())}updateCollectionGroup(t,n,r){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class $c{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Z(O.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Z(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new te(0)}static Nn(){return new te(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this.changes=new se(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,st.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?f.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&me(r.mutation,i,at.empty(),U.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,X()).next(()=>r))}getLocalViewOfDocuments(t,n,r=X()){const i=kt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Ze();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=kt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,X()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=vn();const o=ge(),a=function(){return ge()}();return n.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof $t)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),me(h.mutation,u,h.mutation.getFieldMask(),U.now())):o.set(u.key,at.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var c;return a.set(u,new Hc(h,(c=o.get(u))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(t,n){const r=ge();let i=new et((o,a)=>o-a),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||at.empty();h=a.applyToLocalView(u,h),r.set(l,h);const c=(i.get(a.batchId)||X()).add(l);i=i.insert(a.batchId,c)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,c=ia();h.forEach(g=>{if(!s.has(g)){const m=ca(n.get(g),r.get(g));m!==null&&c.set(g,m),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,c))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return v.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):oc(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):f.resolve(kt());let a=-1,l=s;return o.next(u=>f.forEach(u,(h,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(h)?f.resolve():this.remoteDocumentCache.getEntry(t,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,X())).next(h=>({batchId:a,changes:ra(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(r=>{let i=Ze();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=Ze();return this.indexManager.getCollectionParents(t,s).next(a=>f.forEach(a,l=>{const u=function(c,g){return new jn(g,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(h=>{h.forEach((c,g)=>{o=o.insert(c,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,st.newInvalidDocument(h)))});let a=Ze();return o.forEach((l,u)=>{const h=s.get(l);h!==void 0&&me(h.mutation,u,at.empty(),U.now()),di(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return f.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Qt(i.createTime)}}(n)),f.resolve()}getNamedQuery(t,n){return f.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Bc(i.bundledQuery),readTime:Qt(i.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.overlays=new et(v.comparator),this.lr=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const r=kt();return f.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.lt(t,n,s)}),f.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),f.resolve()}getOverlaysForCollection(t,n,r){const i=kt(),s=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new et((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=kt(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=kt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return f.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wc(n,r));let s=this.lr.get(n);s===void 0&&(s=X(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.hr=new Z(F.Pr),this.Ir=new Z(F.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new F(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new F(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new v(new O([])),r=new F(n,t),i=new F(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new v(new O([])),r=new F(n,t),i=new F(n,t+1);let s=X();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new F(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class F{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return v.comparator(t.key,n.key)||V(t.gr,n.gr)}static Tr(t,n){return V(t.gr,n.gr)||v.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Z(F.Pr)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ac(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new F(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new F(n,0),i=new F(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Z(V);return n.forEach(i=>{const s=new F(i,0),o=new F(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),f.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;v.isDocumentKey(s)||(s=s.child(""));const o=new F(new v(s),0);let a=new Z(V);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),f.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){j(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return f.forEach(n.mutations,i=>{const s=new F(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new F(n,0),i=this.yr.firstAfterOrEqual(r);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.Cr=t,this.docs=function(){return new et(v.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return f.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(t,n){let r=vn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),f.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=vn();const o=n.path,a=new v(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Bh(Uh(h),r)<=0||(i.has(h.key)||di(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return f.resolve(s)}getAllFromCollectionGroup(t,n,r,i){T()}vr(t,n){return f.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Xc(this)}getSize(t){return f.resolve(this.size)}}class Xc extends qc{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),f.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t){this.persistence=t,this.Fr=new se(n=>ci(n),fi),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.Mr=0,this.Or=new gi,this.targetCount=0,this.Nr=te.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),f.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new te(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.kn(n),f.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return f.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),f.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),f.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return f.resolve(r)}containsKey(t,n){return f.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,n){this.Br={},this.overlays={},this.Lr=new Ho(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Yc(this),this.indexManager=new jc,this.remoteDocumentCache=function(i){return new Wc(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Uc(n),this.Kr=new Gc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Kc,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Qc(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){_("MemoryPersistence","Starting transaction:",t);const i=new Zc(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return f.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Zc extends $h{constructor(t){super(),this.currentSequenceNumber=t}}class mi{constructor(t){this.persistence=t,this.Gr=new gi,this.zr=null}static jr(t){return new mi(t)}get Hr(){if(this.zr)return this.zr;throw T()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),f.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),f.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Hr,r=>{const i=v.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,k.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return f.or([()=>f.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=X(),i=X();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _i(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.zi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new tf;return this.Hi(t,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>s.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(le()<=w.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",ue(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),f.resolve()):(le()<=w.DEBUG&&_("QueryEngine","Query:",ue(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(le()<=w.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",ue(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xt(n))):f.resolve())}zi(t,n){if(as(n))return f.resolve(null);let r=xt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Mr(n,null,"F"),r=xt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=X(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(t,Mr(n,null,"F")):this.Xi(t,u,n,l)}))})))}ji(t,n,r,i){return as(n)||i.isEqual(k.min())?f.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?f.resolve(null):(le()<=w.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ue(n)),this.Xi(t,o,n,Lh(i,-1)).next(a=>a))})}Yi(t,n){let r=new Z(lc(t));return n.forEach((i,s)=>{di(t,s)&&(r=r.add(s))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,n,r){return le()<=w.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",ue(n)),this.Gi.getDocumentsMatchingQuery(t,n,It.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new et(V),this.ns=new se(s=>ci(s),fi),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new zc(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function rf(e,t,n,r){return new nf(e,t,n,r)}async function ma(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=X();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function sf(e,t){const n=N(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const c=u.batch,g=c.keys();let m=f.resolve();return g.forEach(I=>{m=m.next(()=>h.getEntry(l,I)).next(C=>{const R=u.docVersions.get(I);j(R!==null),C.version.compareTo(R)<0&&(c.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,c))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=X();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function of(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function af(e,t){const n=N(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class ds{constructor(){this.activeTargetIds=pc()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class lf{constructor(){this.eo=new ds,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new ds,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn=null;function cr(){return tn===null?tn=function(){return 268435456+Math.round(2147483648*Math.random())}():tn++,"0x"+tn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="WebChannelConnection";class ff extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=cr(),l=this.So(n,r);_("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(h=>(_("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw pn("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ie}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=hf[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const s=cr();return new Promise((o,a)=>{const l=new Sh;l.setWithCredentials(!0),l.listenOnce(Rh.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case hr.NO_ERROR:const h=l.getResponseJson();_(Q,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case hr.TIMEOUT:_(Q,`RPC '${t}' ${s} timed out`),a(new y(d.DEADLINE_EXCEEDED,"Request time out"));break;case hr.HTTP_ERROR:const c=l.getStatus();if(_(Q,`RPC '${t}' ${s} failed with status:`,c,"response text:",l.getResponseText()),c>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g?.error;if(m&&m.status&&m.message){const I=function(R){const D=R.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(D)>=0?D:d.UNKNOWN}(m.status);a(new y(I,m.message))}else a(new y(d.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new y(d.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{_(Q,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);_(Q,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(t,n,r){const i=cr(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ah(),a=wh(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");_(Q,`Creating RPC '${t}' stream ${i}: ${h}`,l);const c=o.createWebChannel(h,l);let g=!1,m=!1;const I=new cf({co:R=>{m?_(Q,`Not sending because RPC '${t}' stream ${i} is closed:`,R):(g||(_(Q,`Opening RPC '${t}' stream ${i} transport.`),c.open(),g=!0),_(Q,`RPC '${t}' stream ${i} sending:`,R),c.send(R))},lo:()=>c.close()}),C=(R,D,S)=>{R.listen(D,it=>{try{S(it)}catch(St){setTimeout(()=>{throw St},0)}})};return C(c,Xe.EventType.OPEN,()=>{m||_(Q,`RPC '${t}' stream ${i} transport opened.`)}),C(c,Xe.EventType.CLOSE,()=>{m||(m=!0,_(Q,`RPC '${t}' stream ${i} transport closed`),I.Ro())}),C(c,Xe.EventType.ERROR,R=>{m||(m=!0,pn(Q,`RPC '${t}' stream ${i} transport errored:`,R),I.Ro(new y(d.UNAVAILABLE,"The operation could not be completed")))}),C(c,Xe.EventType.MESSAGE,R=>{var D;if(!m){const S=R.data[0];j(!!S);const it=S,St=it.error||((D=it[0])===null||D===void 0?void 0:D.error);if(St){_(Q,`RPC '${t}' stream ${i} received error:`,St);const Ii=St.status;let Wn=function(La){const wi=x[La];if(wi!==void 0)return Pc(wi)}(Ii),Ai=St.message;Wn===void 0&&(Wn=d.INTERNAL,Ai="Unknown error status: "+Ii+" with message "+St.message),m=!0,I.Ro(new y(Wn,Ai)),c.close()}else _(Q,`RPC '${t}' stream ${i} received:`,S),I.Vo(S)}}),C(a,Ph.STAT_EVENT,R=>{R.stat===Zi.PROXY?_(Q,`RPC '${t}' stream ${i} detected buffering proxy`):R.stat===Zi.NOPROXY&&_(Q,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.Ao()},0),I}}function fr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e){return new Sc(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t,n,r,i,s,o,a,l){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new _a(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(Ut(n.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new y(d.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pf extends df{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(j(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=Mc(t.writeResults,t.commitTime),r=Qt(t.commitTime);return this.listener.I_(r,n)}return j(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Nc(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Oc(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(d.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(d.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class mf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Ut(n),this.f_=!1):_("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{ze(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=N(l);u.C_.add(4),await He(u),u.M_.set("Unknown"),u.C_.delete(4),await zn(u)}(this))})}),this.M_=new mf(r,i)}}async function zn(e){if(ze(e))for(const t of e.v_)await t(!0)}async function He(e){for(const t of e.v_)await t(!1)}function ze(e){return N(e).C_.size===0}async function ya(e,t,n){if(!Bn(t))throw t;e.C_.add(1),await He(e),e.M_.set("Offline"),n||(n=()=>of(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await zn(e)})}function Ea(e,t){return t().catch(n=>ya(e,n,t))}async function Gn(e){const t=N(e),n=wt(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;yf(t);)try{const i=await af(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,Ef(t,i)}catch(i){await ya(t,i)}va(t)&&Ta(t)}function yf(e){return ze(e)&&e.b_.length<10}function Ef(e,t){e.b_.push(t);const n=wt(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function va(e){return ze(e)&&!wt(e).jo()&&e.b_.length>0}function Ta(e){wt(e).start()}async function vf(e){wt(e).E_()}async function Tf(e){const t=wt(e);for(const n of e.b_)t.P_(n.mutations)}async function If(e,t,n){const r=e.b_.shift(),i=pi.from(r,t,n);await Ea(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Gn(e)}async function Af(e,t){t&&wt(e).h_&&await async function(r,i){if(function(o){return Rc(o)&&o!==d.ABORTED}(i.code)){const s=r.b_.shift();wt(r).Yo(),await Ea(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Gn(r)}}(e,t),va(e)&&Ta(e)}async function gs(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=ze(n);n.C_.add(3),await He(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await zn(n)}async function wf(e,t){const n=N(e);t?(n.C_.delete(2),await zn(n)):t||(n.C_.add(2),await He(n),n.M_.set("Unknown"))}function wt(e){return e.N_||(e.N_=function(n,r,i){const s=N(n);return s.A_(),new pf(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:vf.bind(null,e),Io:Af.bind(null,e),T_:Tf.bind(null,e),I_:If.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Gn(e)):(await e.N_.stop(),e.b_.length>0&&(_("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new yi(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ia(e,t){if(Ut("AsyncQueue",`${t}: ${e}`),Bn(e))return new y(d.UNAVAILABLE,`${t}: ${e}`);throw e}class Rf{constructor(){this.queries=new se(t=>ea(t),ta),this.onlineState="Unknown",this.q_=new Set}}function Pf(e){e.q_.forEach(t=>{t.next()})}class Sf{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new se(a=>ea(a),ta),this.fa=new Map,this.ga=new Set,this.pa=new et(v.comparator),this.ya=new Map,this.wa=new gi,this.Sa={},this.ba=new Map,this.Da=te.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Cf(e,t,n){const r=Nf(e);try{const i=await function(o,a){const l=N(o),u=U.now(),h=a.reduce((m,I)=>m.add(I.key),X());let c,g;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let I=vn(),C=X();return l.ss.getEntries(m,h).next(R=>{I=R,I.forEach((D,S)=>{S.isValidDocument()||(C=C.add(D))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,I)).next(R=>{c=R;const D=[];for(const S of a){const it=Tc(S,c.get(S.key).overlayedDocument);it!=null&&D.push(new $t(S.key,it,Ko(it.value.mapValue),gt.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,D,a)}).next(R=>{g=R;const D=R.applyToLocalDocumentSet(c,C);return l.documentOverlayCache.saveOverlays(m,R.batchId,D)})}).then(()=>({batchId:g.batchId,changes:ra(c)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new et(V)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Kn(r,i.changes),await Gn(r.remoteStore)}catch(i){const s=Ia(i,"Failed to persist write");n.reject(s)}}function ms(e,t,n){const r=N(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=N(o);l.onlineState=a;let u=!1;l.queries.forEach((h,c)=>{for(const g of c.listeners)g.Q_(a)&&(u=!0)}),u&&Pf(l)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vf(e,t){const n=N(e),r=t.batch.batchId;try{const i=await sf(n.localStore,t);wa(n,r,null),Aa(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Kn(n,i)}catch(i){await qo(i)}}async function Df(e,t,n){const r=N(e);try{const i=await function(o,a){const l=N(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(c=>(j(c!==null),h=c.keys(),l.mutationQueue.removeMutationBatch(u,c))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,t);wa(r,t,n),Aa(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Kn(r,i)}catch(i){await qo(i)}}function Aa(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function wa(e,t,n){const r=N(e);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}async function Kn(e,t,n){const r=N(e),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u?.fromCache?"not-current":"current"),u){i.push(u);const h=_i.Qi(l.targetId,u);s.push(h)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const h=N(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>f.forEach(u,g=>f.forEach(g.ki,m=>h.persistence.referenceDelegate.addReference(c,g.targetId,m)).next(()=>f.forEach(g.qi,m=>h.persistence.referenceDelegate.removeReference(c,g.targetId,m)))))}catch(c){if(!Bn(c))throw c;_("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const g=c.targetId;if(!c.fromCache){const m=h.ts.get(g),I=m.snapshotVersion,C=m.withLastLimboFreeSnapshotVersion(I);h.ts=h.ts.insert(g,C)}}}(r.localStore,s))}async function bf(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await ma(n.localStore,t);n.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new y(d.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Kn(n,r._s)}}function Nf(e){const t=N(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Df.bind(null,t),t}class _s{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Hn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return rf(this.persistence,new ef,t.initialUser,this.serializer)}createPersistence(t){return new Jc(mi.jr,this.serializer)}createSharedClientState(t){return new lf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ms(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bf.bind(null,this.syncEngine),await wf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Rf}()}createDatastore(t){const n=Hn(t.databaseInfo.databaseId),r=function(s){return new ff(s)}(t.databaseInfo);return function(s,o,a,l){return new gf(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new _f(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ms(this.syncEngine,n,0),function(){return ps.D()?new ps:new uf}())}createSyncEngine(t,n){return function(i,s,o,a,l,u,h){const c=new Sf(i,s,o,a,l,u);return h&&(c.Ca=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=N(n);_("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await He(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=W.UNAUTHENTICATED,this.clientId=$o.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ia(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function dr(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ma(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ys(e,t){e.asyncQueue.verifyOperationInProgress();const n=await xf(e);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>gs(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>gs(t.remoteStore,s)),e._onlineComponents=t}function Mf(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function xf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await dr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Mf(n))throw n;pn("Error using user provided cache. Falling back to memory cache: "+n),await dr(e,new _s)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await dr(e,new _s);return e._offlineComponents}async function Ff(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await ys(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await ys(e,new kf))),e._onlineComponents}function Lf(e){return Ff(e).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(e,t,n){if(!n)throw new y(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Uf(e,t,n,r){if(t===!0&&r===!0)throw new y(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function vs(e){if(!v.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ts(e){if(v.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ei(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function Sa(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ei(e);throw new y(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Uf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ra((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qn{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Is({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Is(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vh;switch(r.type){case"firstParty":return new kh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Es.get(n);r&&(_("ComponentProvider","Removing Datastore"),Es.delete(n),r.terminate())}(this),Promise.resolve()}}function Bf(e,t,n,r={}){var i;const s=(e=Sa(e,Qn))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=W.MOCK_USER;else{a=al(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new y(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new W(u)}e._authCredentials=new Dh(new jo(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new vi(this.firestore,t,this._query)}}class mt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}}class Tt extends vi{constructor(t,n,r){super(t,n,sc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new v(t))}withConverter(t){return new Tt(this.firestore,t,this._path)}}function jf(e,t,...n){if(e=_e(e),Pa("collection","path",t),e instanceof Qn){const r=O.fromString(t,...n);return Ts(r),new Tt(e,null,r)}{if(!(e instanceof mt||e instanceof Tt))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(O.fromString(t,...n));return Ts(r),new Tt(e.firestore,null,r)}}function $f(e,t,...n){if(e=_e(e),arguments.length===1&&(t=$o.newId()),Pa("doc","path",t),e instanceof Qn){const r=O.fromString(t,...n);return vs(r),new mt(e,null,new v(r))}{if(!(e instanceof mt||e instanceof Tt))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(O.fromString(t,...n));return vs(r),new mt(e.firestore,e instanceof Tt?e.converter:null,new v(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new _a(this,"async_queue_retry"),this.iu=()=>{const n=fr();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=fr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=fr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Mt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Bn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ut("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=yi.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&T()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class Ca extends Qn{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new qf}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Va(this),this._firestoreClient.terminate()}}function Hf(e,t){const n=typeof e=="object"?e:cu(),r=typeof e=="string"?e:t||"(default)",i=au(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=sl("firestore");s&&Bf(i,...s)}return i}function zf(e){return e._firestoreClient||Va(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Va(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,h){return new Gh(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Ra(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Of(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ke(yt.fromBase64String(t))}catch(n){throw new y(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ke(yt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return V(this._lat,t._lat)||V(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=/^__.*__$/;class Kf{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new $t(t,this.data,this.fieldMask,n,this.fieldTransforms):new qe(t,this.data,n,this.fieldTransforms)}}function ka(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Ti{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Ti(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return An(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(ka(this.Iu)&&Gf.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Qf{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Hn(t)}pu(t,n,r,i=!1){return new Ti({Iu:t,methodName:n,gu:r,path:G.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wf(e){const t=e._freezeSettings(),n=Hn(e._databaseId);return new Qf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Xf(e,t,n,r,i,s={}){const o=e.pu(s.merge||s.mergeFields?2:0,t,n,i);Fa("Data must be an object, but it was:",o,r);const a=Ma(r,o);let l,u;if(s.merge)l=new at(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const c of s.mergeFields){const g=Yf(t,c,n);if(!o.contains(g))throw new y(d.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);td(h,g)||h.push(g)}l=new at(h),u=o.fieldTransforms.filter(c=>l.covers(c.field))}else l=null,u=o.fieldTransforms;return new Kf(new ot(a),l,u)}function Oa(e,t){if(xa(e=_e(e)))return Fa("Unsupported field value:",t,e),Ma(e,t);if(e instanceof ba)return function(r,i){if(!ka(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Oa(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=_e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gc(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=U.fromDate(r);return{timestampValue:xr(i.serializer,s)}}if(r instanceof U){const s=new U(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xr(i.serializer,s)}}if(r instanceof Na)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ke)return{bytesValue:Cc(i.serializer,r._byteString)};if(r instanceof mt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:pa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Ei(r)}`)}(e,t)}function Ma(e,t){const n={};return zo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$e(e,(r,i)=>{const s=Oa(i,t.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xa(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof U||e instanceof Na||e instanceof ke||e instanceof mt||e instanceof ba)}function Fa(e,t,n){if(!xa(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ei(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function Yf(e,t,n){if((t=_e(t))instanceof Da)return t._internalPath;if(typeof t=="string")return Zf(e,t);throw An("Field path arguments must be of type string or ",e,!1,void 0,n)}const Jf=new RegExp("[~\\*/\\[\\]]");function Zf(e,t,n){if(t.search(Jf)>=0)throw An(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Da(...t.split("."))._internalPath}catch{throw An(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function An(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new y(d.INVALID_ARGUMENT,a+e+l)}function td(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function nd(e,t){const n=Sa(e.firestore,Ca),r=$f(e),i=ed(e.converter,t);return rd(n,[Xf(Wf(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,gt.exists(!1))]).then(()=>r)}function rd(e,t){return function(r,i){const s=new Mt;return r.asyncQueue.enqueueAndForget(async()=>Cf(await Lf(r),i,s)),s.promise}(zf(e),t)}(function(t,n=!0){(function(i){ie=i})(hu),an(new ye("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ca(new bh(r.getProvider("auth-internal")),new Mh(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new y(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _n(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Gt(ts,"4.4.0",t),Gt(ts,"4.4.0","esm2017")})();function As(e){let t,n,r=e[0].copy+"",i,s,o,a="Enter the number you found below",l,u,h,c,g,m,I="✓",C,R;return{c(){t=Ct("center"),n=Ct("h2"),i=Ga(r),s=Xn(),o=Ct("label"),o.textContent=a,l=Ct("br"),u=Ct("br"),h=Xn(),c=Ct("input"),g=Xn(),m=Ct("button"),m.textContent=I,this.h()},l(D){t=Vt(D,"CENTER",{});var S=Si(t);n=Vt(S,"H2",{});var it=Si(n);i=Ka(it,r),it.forEach(en),s=Yn(S),o=Vt(S,"LABEL",{for:!0,"data-svelte-h":!0}),Ci(o)!=="svelte-16sqrl8"&&(o.textContent=a),l=Vt(S,"BR",{}),u=Vt(S,"BR",{}),h=Yn(S),c=Vt(S,"INPUT",{type:!0}),g=Yn(S),m=Vt(S,"BUTTON",{class:!0,"data-svelte-h":!0}),Ci(m)!=="svelte-1ddyvj1"&&(m.textContent=I),S.forEach(en),this.h()},h(){Jn(o,"for","answer"),Jn(c,"type","number"),Jn(m,"class","button")},m(D,S){ws(D,t,S),lt(t,n),lt(n,i),lt(t,s),lt(t,o),lt(t,l),lt(t,u),lt(t,h),lt(t,c),Vi(c,e[1]),lt(t,g),lt(t,m),C||(R=[Di(c,"input",e[3]),Di(m,"click",e[2])],C=!0)},p(D,S){S&1&&r!==(r=D[0].copy+"")&&Qa(i,r),S&2&&Rs(c.value)!==D[1]&&Vi(c,D[1])},d(D){D&&en(t),C=!1,qa(R)}}}function id(e){let t,n=e[0]&&As(e);return{c(){n&&n.c(),t=Pi()},l(r){n&&n.l(r),t=Pi()},m(r,i){n&&n.m(r,i),ws(r,t,i)},p(r,[i]){r[0]?n?n.p(r,i):(n=As(r),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:Ri,o:Ri,d(r){r&&en(t),n&&n.d(r)}}}function sd(e,t,n){let r;Ba(e,Wa,c=>n(7,r=c));let i=[],s=null,o=null,a=null,l=null;ja(()=>{const g=Os({apiKey:"AIzaSyDPp3Yxy7rQNCy10DcMR8wY2227HoU_tyg",authDomain:"nye-scavenger-hunt.firebaseapp.com",projectId:"nye-scavenger-hunt",storageBucket:"nye-scavenger-hunt.appspot.com",messagingSenderId:"471479988691",appId:"1:471479988691:web:21e77b6bd4348bbc31bf26"});o=Hf(g),fetch("/riddles.json").then(m=>m.json()).then(m=>{i=m.riddles,n(0,s=i.find(I=>I.id==l.q))})}),$a(()=>{l=r.url.searchParams.get("q")});async function u(){await nd(jf(o,"user-answers"),{name:window.localStorage.getItem("sh-playerName"),answerId:a,questionId:l.q}),window.location.href="riddles/"}function h(){a=Rs(this.value),n(1,a)}return[s,a,u,h]}class dd extends Ha{constructor(t){super(),za(this,t,sd,id,Ua,{})}}export{dd as component};
