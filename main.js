import { criarCard } from "./src/card-produto";
import { inicializarFiltros } from "./src/filtro-catalogo";
import {
  inicializarCarrinho,
  addAoCarrinho,
  renderizarProdutosCarrinho,
  atualizarPrecoCarrinho,
} from "./src/menu-carrinho";

criarCard();
inicializarFiltros();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
addAoCarrinho();
