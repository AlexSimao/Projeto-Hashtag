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
    // para o item na lista com id == x retorna item
}