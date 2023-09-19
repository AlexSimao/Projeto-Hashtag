import {
  desenharProdutoAoCarrinhoSimples,
  lerLocalStorage,
} from "./src/utilidades";

function criarCardsDoHistoricoDePedidos(pedidoComData) {
  const elementoPedido = `
    <section class="border-l-8 border-l-emerald-950 pl-8 p-4">
        <p class="text-lg font-bold my-4">${new Date(
          pedidoComData.dataDoPedido
        ).toLocaleDateString("pt-br", {
          hour: "2-digit",
          minute: "2-digit",
        })}</p>
        <section class="flex flex-col gap-2" id="container-pedido-${
          pedidoComData.dataDoPedido
        }">
        
        </section>
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

function renderizarProdutosHistorico() {
  const historico = lerLocalStorage("historico");
  for (const pedidoComData of historico) {
    criarCardsDoHistoricoDePedidos(pedidoComData);
  }
}

renderizarProdutosHistorico();
