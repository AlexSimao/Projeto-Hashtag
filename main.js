const container_produto = document.querySelector("#container-produto")

let produto = [
    {
        id: 1,
        nome: "Camisa Larga com Bolsos",
        fabricante: "Zara",
        preco: 70,
        img: "./assets/img/product-1.jpg"
    },
    {
        id: 2,
        nome: "Casaco Reto com Lã",
        fabricante: "Zara",
        preco: 85,
        img: "./assets/img/product-2.jpg"
    },
    {
        id: 3,
        nome: "Jaqueta com Efeito Camurça",
        fabricante: "Zara",
        preco: 60,
        img: "./assets/img/product-3.jpg"
    },
    {
        id: 4,
        nome: "Sobretudo em Mescla de Lã",
        fabricante: "Zara",
        preco: 160,
        img: "./assets/img/product-4.jpg"
    },
    {
        id: 5,
        nome: "Camisa Larga Acolchoada de Veludo Cotelê",
        fabricante: "Zara",
        preco: 110,
        img: "./assets/img/product-5.jpg"
    },
    {
        id: 6,
        nome: "Casaco de Lã com Botões",
        fabricante: "Zara",
        preco: 170,
        img: "./assets/img/product-6.jpg"
    },
    {
        id: 7,
        nome: "Casaco com Botões",
        fabricante: "Zara",
        preco: 75,
        img: "./assets/img/product-7.jpg"
    },
    {
        id: 8,
        nome: "Colete Comprido com Cinto",
        fabricante: "Zara",
        preco: 88,
        img: "./assets/img/product-8.jpg"
    },
]

const criarCard = () =>{
    for (i in produto){
        let card = document.createElement("div")
        card.setAttribute("class", "card-produto")

        let card_img = document.createElement("img")
        card_img.setAttribute("src", produto[i].img)

        let card_fabricante = document.createElement("p")
        card_fabricante.textContent = produto[i].fabricante

        let card_nome = document.createElement("p")
        card_nome.textContent = produto[i].nome

        let card_preco = document.createElement("p")
        card_preco.textContent = produto[i].preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})

        container_produto.appendChild(card)
        card.appendChild(card_img)
        card.appendChild(card_fabricante)
        card.appendChild(card_nome)
        card.appendChild(card_preco)

        let card_button = document.createElement("button")
        card_button.textContent = "Adicionar"
        card.appendChild(card_button)

    }

    // console.log(produto[i].preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"}))
}
criarCard()