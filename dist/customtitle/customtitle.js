import{j as i,T as l,x as p}from"../__chunks__/lit-element.BYUc91cE.js";function d(e){return[...e.attributes].map(({nodeName:t})=>t).filter(t=>t.startsWith("data-aue-")||t.startsWith("data-richtext-")).map(t=>({[t]:e.getAttribute(t)}))}function m(e){return r=>{const t=e.querySelector(`[data-aue-prop="${r}"]`);return{textContent:t==null?void 0:t.textContent,innerHTML:t==null?void 0:t.innerHTML,dataAttributes:t?d(t):null}}}const g=({titleText:e})=>e?p`<div style="background:red"><h1>${e}</h1></div>`:l;function y(e){const r=m(e),{textContent:t,dataAttributes:n}=r("customTitle");console.log(">>> 1",e),console.log(">>> y p-tag",t),console.log(">>> y p-attributes",n);const u=document.createElement("div");i(g({titleText:t}),u);const o=u.querySelector("h1");n==null||n.forEach(c=>{const a=Object.keys(c)[0],s=c[a];console.log(">>> setKeyValue",a,s),s&&(o==null||o.setAttribute(a,s))})}export{y as default};
//# sourceMappingURL=customtitle.js.map
