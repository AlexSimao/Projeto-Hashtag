export const produtos = [
  {
    id: "1",
    nome: "Camisa Larga com Bolsos",
    marca: "Zara",
    preco: "70",
    img: "./assets/img/product-1.jpg",
    female: false,
  },
  {
    id: "2",
    nome: "Casaco Reto com Lã",
    marca: "Zara",
    preco: "85",
    img: "./assets/img/product-2.jpg",
    female: true,
  },
  {
    id: "3",
    nome: "Jaqueta com Efeito Camurça",
    marca: "Zara",
    preco: "60",
    img: "./assets/img/product-3.jpg",
    female: false,
  },
  {
    id: "4",
    nome: "Sobretudo em Mescla de Lã",
    marca: "Zara",
    preco: "160",
    img: "./assets/img/product-4.jpg",
    female: false,
  },
  {
    id: "5",
    nome: "Camisa Larga Acolchoada de Veludo Cotelê",
    marca: "Zara",
    preco: "110",
    img: "./assets/img/product-5.jpg",
    female: false,
  },
  {
    id: "6",
    nome: "Casaco de Lã com Botões",
    marca: "Zara",
    preco: "170",
    img: "./assets/img/product-6.jpg",
    female: true,
  },
  {
    id: "7",
    nome: "Casaco com Botões",
    marca: "Zara",
    preco: "75",
    img: "./assets/img/product-7.jpg",
    female: true,
  },
  {
    id: "8",
    nome: "Colete Comprido com Cinto",
    marca: "Zara",
    preco: "88",
    img: "./assets/img/product-8.jpg",
    female: true,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function removerDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoAoCarrinhoSimples(
  idProduto,
  idContainerHTML,
  quantDeProdutos
) {
  const item = produtos.find((p) => p.id === idProduto);

  const carrinho_main = document.getElementById(`${idContainerHTML}`);

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "min-w-[288px]",
    "flex",
    "bg-slate-300",
    "border-2",
    "border-solid",
    "rounded-lg",
    "relative",
    "shadow-md",
  ];

  for (let articleClasse of articleClasses) {
    elementoArticle.classList.add(articleClasse);
  }

  const cardCarrinho = `
  
  <img class="w-16" src="${item.img}" alt="Imagem do produto ${item.nome}">
  
  <div class="px-5 py-2 flex flex-col justify-around text-black w-full">
  <p class="text-sm">${item.nome}</p>
  
  <div class="flex justify-between w-full gap-4">
  <p class="text-lg">${Number(item.preco).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}</p>
  
  <div class="flex gap-1 text-sm items-end">
  
  <p id="output-quantidade-${item.id}" class="px-1">${quantDeProdutos}</p>
  
  </div>
  </div>
  </div>`;

  elementoArticle.innerHTML = cardCarrinho;
  carrinho_main.appendChild(elementoArticle);
}
