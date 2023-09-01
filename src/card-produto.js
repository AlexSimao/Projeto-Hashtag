
import { produto } from "./produtos.js";
export const criarCard = () =>{
        const container_produto = document.querySelector("#container-produto")
        
        for (let i in produto){
            let card = document.createElement("div")
            card.setAttribute("id", `card-produto-${produto[i].id}`)
            card.setAttribute("class", "card-produto border-solid border-2 border-sky-500 w-48 box-shadow")
            
            let card_img = document.createElement("img")
            card_img.setAttribute("src", produto[i].img)
            
            let card_marca = document.createElement("p")
            card_marca.textContent = produto[i].marca
            
            let card_nome = document.createElement("p")
            card_nome.textContent = produto[i].nome
            
            let card_preco = document.createElement("p")
            card_preco.textContent = produto[i].preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
            
            container_produto.appendChild(card)
            card.appendChild(card_img)
            card.appendChild(card_marca)
            card.appendChild(card_nome)
            card.appendChild(card_preco)
            
            let card_button = document.createElement("button")
            card_button.textContent = "Adicionar"
            card_button.setAttribute("id", `btn-add-produto-carrinho-${produto[i].id}`)
            
            card.appendChild(card_button)
        }
    }
