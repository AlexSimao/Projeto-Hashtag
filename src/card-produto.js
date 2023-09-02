
import { produtos } from "./produtos.js";
import { addAoCarrinho } from "./menu-carrinho.js";

export const criarCard = () =>{
    for (let produto of produtos){
        const cardProduto = `
        <div id="card-produto-${produto.id}" class="card-produto w-48 box-shadow  flex flex-col p-2 justify-between group shadow-lg shadow-slate-500 rounded-lg overflow-hidden">
            <img class="group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-300 duration-300 mb-4" src="${produto.img}" alt="Imagem do produto ${produto.nome}">

            <p class="text-sm">${produto.marca}</p>
            <p class="text-sm">${produto.nome}</p>
            <p>${produto.preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</p>

            <button id="btn-add-produto-${produto.id}" class="bg-emerald-950 text-white active:text-stone-400 hover:bg-emerald-900"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`
        
        document.querySelector("#container-produto"). innerHTML += cardProduto
    }

    for (let produto of produtos){
        document.querySelector(`#btn-add-produto-${produto.id}`).addEventListener("click", () => addAoCarrinho(produto.id))
    }
}
