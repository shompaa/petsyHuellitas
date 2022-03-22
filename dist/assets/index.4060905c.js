import{j as p,u as h,N as x,r as u,R as g,a as l,B as v,b as N,c as w}from"./vendor.659f9f8d.js";const b=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}};b();var y="/assets/logo.0ece305e.svg",k="/assets/perros.599088ab.svg",I="/assets/gatos.53f1c05f.svg",L="/assets/exoticos.b8391371.svg";const e=p.exports.jsx,a=p.exports.jsxs,f=p.exports.Fragment,m=({image:s,className:o,onClick:i})=>e("div",{onClick:i,children:e("img",{className:`bg-origin-border shadow-sm rounded-lg w-60 md:w-96 mx-auto clickeable mt-4 ${o} `,src:s.url,alt:s.alt})}),R=()=>{const s=h();return a(f,{children:[a("div",{className:"bg-pink-100 p-2 md:p-8",children:[e("img",{className:"w-64 h-auto md:w-96 rounded-sm mx-auto",src:y,alt:""}),a("div",{className:"pt-3 md:p-8 text-center",children:[e("p",{className:"text-s md:text-lg",children:"Instagram"}),e("p",{className:"text-s md:text-lg",children:"WhatsApp"}),e("p",{className:"text-s md:text-lg",children:"Pe\xF1alolen"})]})]}),a("div",{className:"flex flex-col justify-center md:grid md:grid-rows-3 gap-4 place-items-center",children:[e(m,{onClick:()=>s("/gatos"),image:{url:I,alt:'Imagen de una patita con el texto "Gato"'}}),e(m,{onClick:()=>s("/perros"),image:{url:k,alt:'Imagen de una patita con el texto "Perro"'}}),e(m,{className:"bg-amber-100",image:{url:L,alt:'Imagen de una patita con el texto "Ex\xF3tico"'}}),e("div",{children:e("img",{className:"opacity-20 w-3/5 md:w-48 h-auto mx-auto",src:"https://i.pinimg.com/236x/7b/08/6b/7b086bf2d426e923c9c447f3797853a6.jpg",alt:""})}),e("div",{className:"col-span-2",children:e("img",{className:"opacity-20 w-3/5 md:w-48 h-auto mx-auto",src:"https://i.pinimg.com/236x/7b/08/6b/7b086bf2d426e923c9c447f3797853a6.jpg",alt:""})})]})]})},j=()=>e("div",{children:"Gatos"}),C=()=>e("div",{children:"404 NotFound"}),M=()=>e("div",{children:"Perros"}),n=({path:s="/",title:o="",icon:i="",className:c=""})=>a(x,{className:({isActive:t})=>`p-4 text-pink-900 hover:text-pink-500 ${c}`+(t?"font-bold !text-white bg-pink-300 shadow ":""),to:s,children:[i," ",o]}),P=({isOpen:s,toggle:o})=>a("div",{className:s?"grid grid-rows-4 text-center items-center bg-pink-100 text-white":"hidden",onClick:o,children:[e(n,{path:"/",title:"Inicio",className:"p-4"}),e(n,{path:"/perros",title:"Perros",className:"p-4"}),e(n,{path:"/gatos",title:"Gatos",className:"p-4"}),e(n,{path:"/sobre-nosotros",title:"Sobre nosotros",className:"p-4"}),e(n,{path:"/contacto",title:"Contacto",className:"p-4"})]}),E=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})});var F="/assets/logo-2.81d152e1.svg";const O=({toggle:s})=>{const o=h();return a("nav",{className:"flex justify-between items-center h-16 bg-pink-100 relative shadow-sm font-bold",role:"navigation",children:[e("img",{src:F,alt:"Logo",className:"pl-8 w-1/6 h-auto",onClick:()=>o("/")}),e("div",{className:"px-4 cursor-pointer md:hidden",onClick:s,children:e(E,{})}),a("div",{className:"pr-8 md:block hidden",children:[e(n,{path:"/",title:"Inicio"}),e(n,{path:"/perros",title:"Perros"}),e(n,{path:"/gatos",title:"Gatos"}),e(n,{path:"/sobre-nosotros",title:"Sobre nosotros"}),e(n,{path:"/contacto",title:"Contacto"})]})]})},G=()=>{const[s,o]=u.exports.useState(!1),i=()=>{o(!s)};return u.exports.useEffect(()=>{const c=()=>{window.innerWidth>768&&s&&o(!1)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}}),a(f,{children:[e(O,{toggle:i}),e(P,{isOpen:s,toggle:i}),a(g,{children:[e(l,{path:"perros",element:e(M,{})}),e(l,{path:"gatos",element:e(j,{})}),e(l,{path:"*",element:e(C,{})})]})]})},z=()=>e(v,{children:a(g,{children:[e(l,{path:"/",element:e(R,{})}),e(l,{path:"/*",element:e(G,{})})]})});function B(){return e(z,{})}N.render(e(w.StrictMode,{children:e(B,{})}),document.getElementById("root"));
