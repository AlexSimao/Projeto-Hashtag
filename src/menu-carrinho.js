import { produtos } from "./produtos"

export function inicializarCarrinho() {
    const carrinho = document.querySelector("#carrinho")

    const btn_fechar_carrinho = document.querySelector("#btn-fechar-carrinho")
    const btn_abrir_carrinho = document.querySelector("#btn-carrinho")
    const div_fechar_carrinho = document.querySelector("#div-fechar-carrinho")

    const btnCarrinho = () => {  
        if (carrinho.classList.contains("right-[-360px]") == true){
            carrinho.classList.remove("right-[-360px]")
            carrinho.classList.add("right-0")
            // div_fechar_carrinho.style.display = "block"
        } else if (carrinho.classList.contains("right-0") == true){
            carrinho.classList.remove("right-0")
            carrinho.classList.add("right-[-360px]")
            // div_fechar_carrinho.style.display = "none"
        }
    }

    div_fechar_carrinho.addEventListener("click", btnCarrinho)
    btn_fechar_carrinho.addEventListener("click", btnCarrinho)
    btn_abrir_carrinho.addEventListener("click", btnCarrinho)
}

export function addAoCarrinho(idProduto){
  const item = produtos.find((p) => p.id === idProduto)

  let carrino_main = document.querySelector("#carrinho-main")

  const cardCarrinho = `
  <article class="max-w-[288px] flex bg-slate-300 border-2 border-solid rounded-lg relative">
  
    <button id="btn-remove-produto-carrinho" class=" absolute top-0 right-1"><i class="fa-solid fa-circle-xmark text-slate-700 hover:text-red-600 active:text-white"></i></button>

    <img class="w-16" src="${item.img}" alt="Imagem do produto ${item.nome}">

    <div class="px-5 py-2 flex flex-col justify-around text-black w-full">
      <p class="text-sm">${item.nome}</p>

      <div class="flex justify-between w-full">
        <p class="text-lg">${item.preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</p>

        <div class="flex gap-1 text-sm items-end">
          <button class="border-2 border-solid border-stone-800 rounded px-1 active:bg-stone-500 w-6">-</button>

          <p class="px-1">2x</p>

          <button class="border-2 border-solid border-stone-800 rounded px-1 active:bg-stone-500 w-6">+</button>
        </div>
      </div>
    </div>
  </article>`

  carrino_main.innerHTML += cardCarrinho
}