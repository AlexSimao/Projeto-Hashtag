import {
  atualizarPrecoCarrinho,
  ids_produtos_carrinho_quantidade,
} from "./src/menu-carrinho";
import { desenharProdutoAoCarrinhoSimples } from "./src/utilidades";

function desenharProdutoCarrinhoCheckout() {
  for (let idProduto in ids_produtos_carrinho_quantidade) {
    desenharProdutoAoCarrinhoSimples(
      idProduto,
      "container-produtos-checkout",
      ids_produtos_carrinho_quantidade[idProduto]
    );
    atualizarPrecoCarrinho();
  }
}

desenharProdutoCarrinhoCheckout();
