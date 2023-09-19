import {
  desenharProdutoAoCarrinhoSimples,
  lerLocalStorage,
} from "./src/utilidades";

export function criarCardsDoHistoricoDePedidos(pedidoComData) {
  const elementoPedido = `
    <p class="text-lg font-bold">${pedidoComData.dataDoPedido}</p>
    <section id="container-pedido-${pedidoComData.dataDoPedido}">
        
    </section>
    `;
  const main = document.querySelector("main");
  main.innerHTML += elementoPedido;

  for (const idProduto in pedidoComData.itensPedidos) {
    desenharProdutoAoCarrinhoSimples(
      idProduto,
      `container-pedido-${pedidoComData.dataDoPedido}`,
      pedidoComData.itensPedidos[idProduto]
    );
  }
}
