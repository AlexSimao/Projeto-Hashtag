import {
  atualizarPrecoCarrinho,
  ids_produtos_carrinho_quantidade,
} from "./src/menu-carrinho";
import {
  desenharProdutoAoCarrinhoSimples,
  lerLocalStorage,
  removerDoLocalStorage,
  salvarLocalStorage,
} from "./src/utilidades";

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
  const pedidosFeitos = {
    dataDoPedido: dataAtual,
    itensPedidos: ids_produtos_carrinho_quantidade,
  };
  const historicoDePedidos = lerLocalStorage("historico") ?? [];
  const historicoDePedidosAtualizado = [pedidosFeitos, ...historicoDePedidos];

  salvarLocalStorage("historico", historicoDePedidosAtualizado);
  removerDoLocalStorage("carrinho");

  window.location.href = window.location.origin + "/pedidos.html";
}

desenharProdutoCarrinhoCheckout();

document.addEventListener("submit", (evt) => finalizarCompra(evt));
