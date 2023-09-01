export function inicializarCarrinho() {
    const carrinho = document.querySelector("#carrinho")

    const btn_fechar_carrinho = document.querySelector("#btn-fechar-carrinho")
    const btn_abrir_carrinho = document.querySelector("#btn-carrinho")
    const div_fechar_carrinho = document.querySelector("#div-fechar-carrinho")

    const btnCarrinho = () => {  
        if (carrinho.classList.contains("right-[-360px]") == true){
            carrinho.classList.remove("right-[-360px]")
            carrinho.classList.add("right-0")
            div_fechar_carrinho.style.display = "block"
        } else if (carrinho.classList.contains("right-0") == true){
            carrinho.classList.remove("right-0")
            carrinho.classList.add("right-[-360px]")
            div_fechar_carrinho.style.display = "none"
        }
    }

    div_fechar_carrinho.addEventListener("click", btnCarrinho)
    btn_fechar_carrinho.addEventListener("click", btnCarrinho)
    btn_abrir_carrinho.addEventListener("click", btnCarrinho)
}

export function chamarCard() {
    const carrinho_main = document.querySelector("#carrinho-main")
    
    const criarCardCarrinho = (produto_id) => {
        carrinho_main.innerHTML += 
        `<article class="max-w-[288px] flex bg-slate-400 border-2 border-solid rounded-lg">
            <img class="w-16" src="assets/img/product-1.jpg" alt="">

            <div class="px-5 py-2 flex flex-col justify-around text-black">
                <p>Nome da roupa</p>
                <p>Preço: $$</p>
            </div>
        </article>`
    }
}