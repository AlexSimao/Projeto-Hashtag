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

export function salvatLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}
