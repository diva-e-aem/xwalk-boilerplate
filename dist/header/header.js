import{g}from"../__chunks__/getMetadata.C2EoXxjz.js";import{loadFragment as w}from"../fragment/fragment.js";import"../__chunks__/decorateBlocks.uBvJBQmy.js";import"../__chunks__/index.module.CR-9466T.js";import"../__chunks__/isSidekickLibraryActive.U-fJCMMj.js";const i=window.matchMedia("(min-width: 900px)");function h(n){var e;if(n.code==="Escape"){const o=document.getElementById("nav"),t=o==null?void 0:o.querySelector(".nav-sections"),a=t==null?void 0:t.querySelector('[aria-expanded="true"]');a&&i.matches?(u(t),a.focus()):i.matches||(l(o,t),(e=o==null?void 0:o.querySelector("button"))==null||e.focus())}}function y(n){const e=document.activeElement;if((e==null?void 0:e.className)==="nav-drop"&&(n.code==="Enter"||n.code==="Space")){const t=e.getAttribute("aria-expanded")==="true";u(e.closest(".nav-sections")),e.setAttribute("aria-expanded",t?"false":"true")}}function E(){var n;(n=document.activeElement)==null||n.addEventListener("keydown",y)}function u(n,e=!1){n.querySelectorAll(".nav-sections .default-content-wrapper > ul > li").forEach(o=>{o.setAttribute("aria-expanded",e)})}function l(n,e,o=null){const t=o!==null?!o:n.getAttribute("aria-expanded")==="true",a=n.querySelector(".nav-hamburger button");document.body.style.overflowY=t||i.matches?"":"hidden",n.setAttribute("aria-expanded",t?"false":"true"),u(e,!(t||i.matches)),a.setAttribute("aria-label",t?"Open navigation":"Close navigation");const m=e.querySelectorAll(".nav-drop");i.matches?m.forEach(s=>{s.hasAttribute("tabindex")||(s.setAttribute("role","button"),s.setAttribute("tabindex",0),s.addEventListener("focus",E))}):m.forEach(s=>{s.removeAttribute("role"),s.removeAttribute("tabindex"),s.removeEventListener("focus",E)}),!t||i.matches?window.addEventListener("keydown",h):window.removeEventListener("keydown",h)}async function N(n){const e=g("nav"),o=e?new URL(e,window.location.origin).pathname:"/nav",t=await w(o);n.textContent="";const a=document.createElement("nav");if(a.id="nav",t)for(;t.firstElementChild;)a.append(t.firstElementChild);["brand","sections","tools"].forEach((r,v)=>{const b=a.children[v];b&&b.classList.add(`nav-${r}`)});const s=a.querySelector(".nav-brand"),p=s==null?void 0:s.querySelector(".button");if(p){p.className="";const r=p.closest(".button-container");r&&(r.className="")}const c=a.querySelector(".nav-sections");c&&c.querySelectorAll(":scope .default-content-wrapper > ul > li").forEach(r=>{r.querySelector("ul")&&r.classList.add("nav-drop"),r.addEventListener("click",()=>{if(i.matches){const v=r.getAttribute("aria-expanded")==="true";u(c),r.setAttribute("aria-expanded",v?"false":"true")}})});const d=document.createElement("div");d.classList.add("nav-hamburger"),d.innerHTML=`<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`,d.addEventListener("click",()=>l(a,c)),a.prepend(d),a.setAttribute("aria-expanded","false"),l(a,c,i.matches),i.addEventListener("change",()=>l(a,c,i.matches));const f=document.createElement("div");f.className="nav-wrapper",f.append(a),n.append(f)}export{N as default};
//# sourceMappingURL=header.js.map