
const produto = [
    {
        id: 1,
        nome: "Camisa Larga com Bolsos",
        marca: "Zara",
        preco: 70,
        img: "./assets/img/product-1.jpg",
        female: false
    },
    {
        id: 2,
        nome: "Casaco Reto com Lã",
        marca: "Zara",
        preco: 85,
        img: "./assets/img/product-2.jpg",
        female: true
    },
    {
        id: 3,
        nome: "Jaqueta com Efeito Camurça",
        marca: "Zara",
        preco: 60,
        img: "./assets/img/product-3.jpg",
        female: false
    },
    {
        id: 4,
        nome: "Sobretudo em Mescla de Lã",
        marca: "Zara",
        preco: 160,
        img: "./assets/img/product-4.jpg",
        female: false
    },
    {
        id: 5,
        nome: "Camisa Larga Acolchoada de Veludo Cotelê",
        marca: "Zara",
        preco: 110,
        img: "./assets/img/product-5.jpg",
        female: false
    },
    {
        id: 6,
        nome: "Casaco de Lã com Botões",
        marca: "Zara",
        preco: 170,
        img: "./assets/img/product-6.jpg",
        female: true
    },
    {
        id: 7,
        nome: "Casaco com Botões",
        marca: "Zara",
        preco: 75,
        img: "./assets/img/product-7.jpg",
        female: true
    },
    {
        id: 8,
        nome: "Colete Comprido com Cinto",
        marca: "Zara",
        preco: 88,
        img: "./assets/img/product-8.jpg",
        female: true
    },
]

const criarCard = () =>{
    const container_produto = document.querySelector("#container-produto")
    container_produto.setAttribute("class", "flex flex-wrap")

    for (let i in produto){
        let card = document.createElement("div")
        card.setAttribute("id", `card-produto-${produto[i].id}`)
        card.setAttribute("class", "card-produto border-solid border-2 border-sky-500 w-48 m-2")

        let card_img = document.createElement("img")
        card_img.setAttribute("src", produto[i].img)

        let card_marca = document.createElement("p")
        card_marca.textContent = produto[i].marca

        let card_nome = document.createElement("p")
        card_nome.textContent = produto[i].nome

        let card_preco = document.createElement("p")
        card_preco.textContent = produto[i].preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})

        container_produto.appendChild(card)
        card.appendChild(card_img)
        card.appendChild(card_marca)
        card.appendChild(card_nome)
        card.appendChild(card_preco)

        let card_button = document.createElement("button")
        card_button.textContent = "Adicionar"
        card.appendChild(card_button)

    }
}
criarCard()