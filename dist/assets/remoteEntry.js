const d="modulepreload",u=function(t){return"/"+t},_={},m=function(n,s,l){if(!s||s.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=u(e),e in _)return;_[e]=!0;const o=e.endsWith(".css"),f=o?'[rel="stylesheet"]':"";if(!!l)for(let a=r.length-1;a>=0;a--){const c=r[a];if(c.href===e&&(!o||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":d,o||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),o)return new Promise((a,c)=>{i.addEventListener("load",a),i.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},g=new Set(["Module","__esModule","default","_export_sfc"]);let p={"./Api":()=>(y([]),v("./__federation_expose_Api.bc26ca75.js").then(t=>Object.keys(t).every(n=>g.has(n))?()=>t.default:()=>t))};const h={},y=t=>{const n=import.meta.url;if(typeof n>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const s=n.substring(0,n.lastIndexOf("remoteEntry.js"));t.forEach(l=>{const r=s+l;if(r in h)return;h[r]=!0;const e=document.head.appendChild(document.createElement("link"));e.href=r,e.rel="stylesheet"})};async function v(t){return m(()=>import(t),[])}const E=t=>p[t](),k=t=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(t).forEach(([n,s])=>{const l=Object.keys(s)[0],r=Object.values(s)[0],e=r.scope||"default";globalThis.__federation_shared__[e]=globalThis.__federation_shared__[e]||{};const o=globalThis.__federation_shared__[e];(o[n]=o[n]||{})[l]=r})};export{y as dynamicLoadingCss,E as get,k as init};