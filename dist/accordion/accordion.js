function l(d){[...d.children].forEach(e=>{const n=e.children[0],c=document.createElement("summary");c.className="accordion-item-label",c.append(...n.childNodes);const t=e.children[1];t.className="accordion-item-body";const a=document.createElement("details");a.className="accordion-item",a.append(c,t),e.replaceWith(a)})}export{l as default};
//# sourceMappingURL=accordion.js.map
