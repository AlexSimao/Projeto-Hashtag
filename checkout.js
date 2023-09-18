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

function finalizarCompra(evento) {
  evento.preventDefault();
  if (Object.keys(ids_produtos_carrinho_quantidade).length === 0) {
    return;
  }

  const dataAtual = new Date();
  window.location.href =
    window.location.origin + "/Projeto-Hashtag/pedidos.html";
}

desenharProdutoCarrinhoCheckout();

document.addEventListener("submit", (evt) => finalizarCompra(evt));
