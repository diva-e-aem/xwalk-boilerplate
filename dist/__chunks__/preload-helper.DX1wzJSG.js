const d="modulepreload",m=function(o){return"/"+o},l={},h=function(i,n,f){let s=Promise.resolve();return n&&n.length>0&&(document.getElementsByTagName("link"),s=Promise.all(n.map(e=>{if(e=m(e),e in l)return;l[e]=!0;const t=e.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${c}`))return;const r=document.createElement("link");if(r.rel=t?"stylesheet":d,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t)return new Promise((a,u)=>{r.addEventListener("load",a),r.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})}))),s.then(()=>i()).catch(e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e})};export{h as _};
//# sourceMappingURL=preload-helper.DX1wzJSG.js.map
