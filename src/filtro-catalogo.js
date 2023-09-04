const container_produtos = document.querySelector("#container-produto");

function exibirTodos() {
  const todos_os_produtos = Array.from(
    container_produtos.getElementsByClassName("hidden")
  );

  for (const produto of todos_os_produtos) {
    produto.classList.remove("hidden");
    produto.classList.add("block");
  }
}

function esconderMasculino() {
  const produtos_masculinos = Array.from(
    container_produtos.getElementsByClassName("masculino")
  );

  exibirTodos();

  for (const produto of produtos_masculinos) {
    produto.classList.add("hidden");
  }
}

function esconderFeminino() {
  const produtos_femininos = Array.from(
    container_produtos.getElementsByClassName("feminino")
  );

  exibirTodos();

  for (const produto of produtos_femininos) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .querySelector("#filtro-feminino")
    .addEventListener("click", esconderMasculino);

  document
    .querySelector("#filtro-masculino")
    .addEventListener("click", esconderFeminino);

  document
    .querySelector("#filtro-todos")
    .addEventListener("click", exibirTodos);
}
