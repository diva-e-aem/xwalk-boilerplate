import{x as n}from"../__chunks__/lit-element.BYUc91cE.js";import{r}from"../__chunks__/renderBlock.D2kyhEqO.js";import"../__chunks__/index.module.DQI0LCqS.js";import"../__chunks__/cleanUpBlock.DyBWs1cd.js";import"../__chunks__/moveInstrumentation.CxEVSfMM.js";const m=t=>n`<h1>${t}</h1>`;function p(t){const e=t.children[0].children[0];console.log(">>> textelement",e,"attrs",e.attributes);const o=e.textContent||"";console.log(">>> textcontent",o),console.log(">>> customTitle block",t),r({template:m(o),container:t,moveInstrumentationsOptions:{from:e,to:t.querySelector("h1")}})}export{p as default};
//# sourceMappingURL=customtitle.js.map
