import { criarCard } from "./src/card-produto";
import {
  inicializarCarrinho,
  addAoCarrinho,
  renderizarProdutosCarrinho,
  atualizarPrecoCarrinho,
} from "./src/menu-carrinho";
import { produtos } from "./src/utilidades";

produtos
criarCard();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho()
addAoCarrinho();
