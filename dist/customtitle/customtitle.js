import{j as c,T as i,x as l}from"../__chunks__/lit-element.BYUc91cE.js";import{c as p}from"../__chunks__/cleanUpBlock.DyBWs1cd.js";function m(e){return[...e.attributes].map(({nodeName:t})=>t).filter(t=>t.startsWith("data-aue-")||t.startsWith("data-richtext-")).map(t=>({[t]:e.getAttribute(t)}))}function d(e){return r=>{const t=e.querySelector(`[data-aue-prop="${r}"]`);return{textContent:t==null?void 0:t.textContent,innerHTML:t==null?void 0:t.innerHTML,dataAttributes:t?m(t):null}}}const g=({titleText:e})=>e?l`<div style="background:red"><h1>${e}</h1></div>`:i;function x(e){const r=d(e),{textContent:t,dataAttributes:n}=r("customTitle");console.log(">>> 1",e),console.log(">>> a p-tag",t),console.log(">>> a p-attributes",n),p(e),c(g({titleText:t}),e);const o=e.querySelector("h1");n==null||n.forEach(u=>{const a=Object.keys(u)[0],s=u[a];console.log(">>> setKeyValue",a,s),s&&(o==null||o.setAttribute(a,s))})}export{x as default};
//# sourceMappingURL=customtitle.js.map
