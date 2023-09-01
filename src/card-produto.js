
import { produto } from "./produtos.js";
export const criarCard = () =>{
    const container_produto = document.querySelector("#container-produto")
    
    for (let i in produto){
        container_produto.innerHTML += `
        <div id="card-produto-${produto[i].id}" class="card-produto border-solid border-2 border-sky-500 w-48 box-shadow">
            <img src="${produto[i].img}" alt="">

            <p>${produto[i].marca}</p>
            <p>${produto[i].nome}</p>
            <p>${produto[i].preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</p>

            <button id="btn-add-produto-carrinho-${produto[i].id}"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`
    }
}
