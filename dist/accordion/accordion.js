import{j as c,x as n}from"../__chunks__/lit-element.BYUc91cE.js";import{c as i}from"../__chunks__/cleanUpBlock.DyBWs1cd.js";import{m as a}from"../__chunks__/moveInstrumentation.CxEVSfMM.js";const m=e=>{var o;const t=e.currentTarget;t&&((o=t.parentElement)==null||o.classList.toggle("open"))},r=e=>{const t=document.createElement("p");return a(e,t),t.append(e.innerHTML),n`${t}`},s=e=>n`<div class="accordion-item"><div class="accordion-item-label" @click="${t=>m(t)}">${r(e.children[0].querySelector("p"))}</div><div class="accordion-item-body">${r(e.children[1].querySelector("p"))}</div></div>`,l=e=>n`${e.map(t=>s(t))}`;function v(e){const t=[...e.children];i(e),c(l(t),e)}export{v as default};
//# sourceMappingURL=accordion.js.map
