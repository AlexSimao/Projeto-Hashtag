import { ids_produtos_carrinho_quantidade } from "./src/menu-carrinho";
import { desenharProdutoAoCarrinhoSimples, lerLocalStorage } from "./src/utilidades";

function desenharProdutoCarrinhoCheckout() {
    // const ids_produtos_carrinho_quantidade = lerLocalStorage("carrinho");

  for (let idProduto in ids_produtos_carrinho_quantidade) {
    desenharProdutoAoCarrinhoSimples(idProduto, "container-produtos-checkout", ids_produtos_carrinho_quantidade[idProduto])
  }
}

desenharProdutoCarrinhoCheckout()
