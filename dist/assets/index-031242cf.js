(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(){const a=document.querySelector("#carrinho"),o=document.querySelector("#btn-fechar-carrinho"),r=document.querySelector("#btn-carrinho"),c=document.querySelector("#div-fechar-carrinho"),e=()=>{a.classList.contains("right-[-360px]")==!0?(a.classList.remove("right-[-360px]"),a.classList.add("right-0"),c.style.display="block"):a.classList.contains("right-0")==!0&&(a.classList.remove("right-0"),a.classList.add("right-[-360px]"),c.style.display="none")};c.addEventListener("click",e),o.addEventListener("click",e),r.addEventListener("click",e)}const n=[{id:1,nome:"Camisa Larga com Bolsos",marca:"Zara",preco:70,img:"./assets/img/product-1.jpg",female:!1},{id:2,nome:"Casaco Reto com Lã",marca:"Zara",preco:85,img:"./assets/img/product-2.jpg",female:!0},{id:3,nome:"Jaqueta com Efeito Camurça",marca:"Zara",preco:60,img:"./assets/img/product-3.jpg",female:!1},{id:4,nome:"Sobretudo em Mescla de Lã",marca:"Zara",preco:160,img:"./assets/img/product-4.jpg",female:!1},{id:5,nome:"Camisa Larga Acolchoada de Veludo Cotelê",marca:"Zara",preco:110,img:"./assets/img/product-5.jpg",female:!1},{id:6,nome:"Casaco de Lã com Botões",marca:"Zara",preco:170,img:"./assets/img/product-6.jpg",female:!0},{id:7,nome:"Casaco com Botões",marca:"Zara",preco:75,img:"./assets/img/product-7.jpg",female:!0},{id:8,nome:"Colete Comprido com Cinto",marca:"Zara",preco:88,img:"./assets/img/product-8.jpg",female:!0}],l=()=>{const a=document.querySelector("#container-produto");for(let o in n){let r=document.createElement("div");r.setAttribute("id",`card-produto-${n[o].id}`),r.setAttribute("class","card-produto border-solid border-2 border-sky-500 w-48 box-shadow");let c=document.createElement("img");c.setAttribute("src",n[o].img);let e=document.createElement("p");e.textContent=n[o].marca;let t=document.createElement("p");t.textContent=n[o].nome;let i=document.createElement("p");i.textContent=n[o].preco.toLocaleString("pt-br",{style:"currency",currency:"BRL"}),a.appendChild(r),r.appendChild(c),r.appendChild(e),r.appendChild(t),r.appendChild(i);let s=document.createElement("button");s.textContent="Adicionar",r.appendChild(s)}};l();d();