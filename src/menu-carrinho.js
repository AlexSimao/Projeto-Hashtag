const carrinho = document.querySelector("#carrinho")
carrinho.style.display = "none"

const btn_fechar_carrinho = document.querySelector("#btn-fechar-carrinho")
const btn_abrir_carrinho = document.querySelector("#btn-carrinho")
const div_fechar = document.querySelector("#div-fechar-carrinho")

const btnCarrinho = () => {  
    if (carrinho.style.display == "none"){
        carrinho.style.display = "block"
        div_fechar.style.display = "block"
    } else if (carrinho.style.display == "block"){
        carrinho.style.display = "none"
        div_fechar.style.display = "none"
    }
}

div_fechar.addEventListener("click", btnCarrinho)
btn_fechar_carrinho.addEventListener("click", btnCarrinho)
btn_abrir_carrinho.addEventListener("click", btnCarrinho)
