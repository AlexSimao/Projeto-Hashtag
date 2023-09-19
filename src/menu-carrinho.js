import { produtos, salvarLocalStorage, lerLocalStorage } from "./utilidades";

export const ids_produtos_carrinho_quantidade =
  lerLocalStorage("carrinho") ?? {};

function irParaCheckout() {
  if (Object.keys(ids_produtos_carrinho_quantidade).length === 0) {
    return;
  }
  window.location.href = window.location.origin + "/checkout.html";
}

const btnCarrinho = () => {
  const carrinho = document.querySelector("#carrinho");

  if (carrinho.classList.contains("right-[-360px]") == true) {
    carrinho.classList.remove("right-[-360px]");
    carrinho.classList.add("right-0");
    // div_fechar_carrinho.style.display = "block"
  } else if (carrinho.classList.contains("right-0") == true) {
    carrinho.classList.remove("right-0");
    carrinho.classList.add("right-[-360px]");
    // div_fechar_carrinho.style.display = "none"
  }
  atualizarPrecoCarrinho();
};

export function inicializarCarrinho() {
  const btn_fechar_carrinho = document.querySelector("#btn-fechar-carrinho");
  const btn_abrir_carrinho = document.querySelector("#btn-carrinho");
  const div_fechar_carrinho = document.querySelector("#div-fechar-carrinho");
  const btn_ir_para_checkout = document.querySelector("#btn-finalizar-compra");

  div_fechar_carrinho.addEventListener("click", btnCarrinho);
  btn_fechar_carrinho.addEventListener("click", btnCarrinho);
  btn_abrir_carrinho.addEventListener("click", btnCarrinho);
  btn_ir_para_checkout.addEventListener("click", irParaCheckout);
  renderizarProdutosCarrinho();
}

const removerDoCarrinho = (idProduto) => {
  delete ids_produtos_carrinho_quantidade[idProduto];
  salvarLocalStorage("carrinho", ids_produtos_carrinho_quantidade);
  renderizarProdutosCarrinho();
  atualizarPrecoCarrinho();
};

const incrementarQuantidade = (idProduto) => {
  ids_produtos_carrinho_quantidade[idProduto]++;
  salvarLocalStorage("carrinho", ids_produtos_carrinho_quantidade);
  atualizarInfoQuantidade(idProduto);
  atualizarPrecoCarrinho();
};

const decrementarQuantidade = (idProduto) => {
  if (ids_produtos_carrinho_quantidade[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    atualizarPrecoCarrinho();
    return;
  }
  ids_produtos_carrinho_quantidade[idProduto]--;
  salvarLocalStorage("carrinho", ids_produtos_carrinho_quantidade);
  atualizarInfoQuantidade(idProduto);
  atualizarPrecoCarrinho();
};

const atualizarInfoQuantidade = (idProduto) => {
  document.querySelector(`#output-quantidade-${idProduto}`).textContent =
    ids_produtos_carrinho_quantidade[idProduto];
};

function desenharProdutoAoCarrinho(idProduto) {
  const item = produtos.find((p) => p.id === idProduto);

  const carrinho_main = document.querySelector("#carrinho-main");

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "max-w-[288px]",
    "flex",
    "bg-slate-300",
    "border-2",
    "border-solid",
    "rounded-lg",
    "relative",
  ];

  for (let articleClasse of articleClasses) {
    elementoArticle.classList.add(articleClasse);
  }

  const cardCarrinho = `
  <button id="btn-remove-do-carrinho-${
    item.id
  }" class=" absolute top-0 right-1"><i class="fa-solid fa-circle-xmark text-slate-700 hover:text-red-600 active:text-white"></i></button>
  
  <img class="w-16" src="${item.img}" alt="Imagem do produto ${item.nome}">
  
  <div class="px-5 py-2 flex flex-col justify-around text-black w-full">
  <p class="text-sm">${item.nome}</p>
  
  <div class="flex justify-between w-full gap-4">
  <p class="text-lg">${Number(item.preco).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}</p>
  
  <div class="flex gap-1 text-sm items-end">
  <button id="btn-decrementar-quantidade-${
    item.id
  }" class="border-2 border-solid border-stone-800 rounded p-0 active:bg-stone-500 w-6">-</button>
  
  <p id="output-quantidade-${item.id}" class="px-1">${
    ids_produtos_carrinho_quantidade[item.id]
  }</p>
  
  <button id="btn-incrementar-quantidade-${
    item.id
  }" class="border-2 border-solid border-stone-800 rounded p-0 active:bg-stone-500 w-6">+</button>
  </div>
  </div>
  </div>`;

  elementoArticle.innerHTML = cardCarrinho;
  carrinho_main.appendChild(elementoArticle);

  document
    .querySelector(`#btn-decrementar-quantidade-${item.id}`)
    .addEventListener("click", () => decrementarQuantidade(item.id));
  document
    .querySelector(`#btn-incrementar-quantidade-${item.id}`)
    .addEventListener("click", () => incrementarQuantidade(item.id));
  document
    .querySelector(`#btn-remove-do-carrinho-${item.id}`)
    .addEventListener("click", () => removerDoCarrinho(item.id));
}

export const renderizarProdutosCarrinho = () => {
  const carrinho_main = document.querySelector("#carrinho-main");
  carrinho_main.innerHTML = "";

  for (const idProduto in ids_produtos_carrinho_quantidade) {
    desenharProdutoAoCarrinho(idProduto);
  }
};

export function addAoCarrinho(idProduto) {
  if (idProduto in ids_produtos_carrinho_quantidade) {
    incrementarQuantidade(idProduto);
    atualizarPrecoCarrinho();
    return;
  }

  ids_produtos_carrinho_quantidade[idProduto] = 1;
  salvarLocalStorage("carrinho", ids_produtos_carrinho_quantidade);

  desenharProdutoAoCarrinho(idProduto);
  atualizarPrecoCarrinho();
}

export function atualizarPrecoCarrinho() {
  const preco_carrinho = document.querySelector("#preco-total > span");

  let preco_total_carrinho = 0;

  for (let id_produto_no_carrinho in ids_produtos_carrinho_quantidade) {
    preco_total_carrinho +=
      produtos.find((p) => p.id === id_produto_no_carrinho).preco *
      ids_produtos_carrinho_quantidade[id_produto_no_carrinho];

    preco_carrinho.textContent = preco_total_carrinho.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
  if (Object.keys(ids_produtos_carrinho_quantidade).length === 0) {
    preco_carrinho.textContent = "R$ 0";
  }
}
