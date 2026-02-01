let estoqueDeLivros = [
  {
    nome: "JavaScript para Iniciantes",
    autor: "Maria Silva",
    quantidade: 5
  },
  {
    nome: "O Guia do Programador",
    autor: "Carlos Dev",
    quantidade: 0
  }
];

function adicionarLivro() {
  const nome = prompt("Digite o nome do livro: ");
  const autor = prompt("Digite o autor do livro: ");
  const quantidade = Number(prompt("Digite a quantidade: "));

  const novoLivro = {
    nome: nome,
    autor: autor,
    quantidade: quantidade
  };

  estoqueDeLivros.push(novoLivro);

  console.log(" Livro adicionado com sucesso!");
}
