const carrinho = document.querySelector("#carrinho")
carrinho.style.display = "none"

const fechar_carrinho = document.querySelector("#btn-fechar-carrinho")
const abrir_carrinho = document.querySelector("#btn-carrinho")

const btnCarrinho = () => {  
    if (carrinho.style.display == "none"){
        carrinho.style.display = "block"
    } else if (carrinho.style.display == "block"){
        carrinho.style.display = "none"
    }
}
fechar_carrinho.addEventListener("click", btnCarrinho)
abrir_carrinho.addEventListener("click", btnCarrinho)