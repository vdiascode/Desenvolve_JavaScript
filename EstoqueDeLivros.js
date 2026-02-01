const prompt = require("prompt-sync")({ sigint: true });


//array com o estoque pré-definido
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
]

//função que verifica se o livro já existe no estoque
function validarLivro(livro) {
    for (let livros of estoqueDeLivros) {
        if (livros.nome.toLowerCase() === livro.nome.toLowerCase()) {
            return true; // livro já existe
        }
    }
    return false; // Livro pode ser adicionado ao estoque
}

//função para adicionar livros
function adicionarLivro() {
    const nome = prompt("Digite o nome do livro: ");
    const autor = prompt("Digite o autor do livro: ");
    const quantidade = Number(prompt("Digite a quantidade: "));

    const novoLivro = {
        nome,
        autor,
        quantidade
    };

    if (validarLivro(novoLivro)) {
        console.log("Este livro já existe no estoque!");
        return;
    }
    estoqueDeLivros.push(novoLivro);
    console.log("Livro adicionado com sucesso!");
}
//função para remover livros do estoque
function removerLivro() {
    const titulo = prompt("Digite qual livro irá ser removido do estoque: ");

    if (!validarLivro({ nome: titulo })) {
        console.log("Livro informado não existe no estoque!");
        return;
    }

    for (let i = 0; i < estoqueDeLivros.length; i++) {
        if (estoqueDeLivros[i].nome.toLowerCase() === titulo.toLowerCase()) {
            estoqueDeLivros.splice(i, 1);
            console.log("Livro removido do estoque com sucesso.");
            return;
        }
    }
}
//função para atualizar a quantidade
function atualizarQuantidade() {
    const titulo = prompt(
        "Digite o título do livro que terá a quantidade alterada: "
    );

    if (!validarLivro({ nome: titulo })) {
        console.log("Livro informado não existe no estoque!");
        return;
    }

    const novaQuantidade = Number(prompt("Digite a nova quantidade disponível: "));

    for (let livro of estoqueDeLivros) {
        if (livro.nome.toLowerCase() === titulo.toLowerCase()) {
            livro.quantidade = novaQuantidade;
            console.log("Quantidade atualizada com sucesso!");
            return;
        }
    }
}

// função para exibir os livros em estoque
function exibir() {
    for (let livro of estoqueDeLivros) {
        console.log(
            `Título: ${livro.nome} | Autor: ${livro.autor} | Quantidade: ${livro.quantidade}`
        );
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// interação com o usuario a partir do terminal
function menu() {
    console.log("\n=== GERENCIAMENTO DE ESTOQUE ===");
    console.log("1 - Adicionar livro");
    console.log("2 - Remover livro");
    console.log("3 - Atualizar quantidade");
    console.log("4 - Exibir estoque");
    console.log("0 - Sair");
}

function iniciarSistema() {
    let opcao;

    do {
        menu();
        opcao = Number(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                adicionarLivro();
                break;
            case 2:
                removerLivro();
                break;
            case 3:
                atualizarQuantidade();
                break;
            case 4:
                exibir();
                break;
            case 0:
                console.log("Sistema finalizado.");
                break;
            default:
                console.log("Opção inválida!");
        }
    } while (opcao !== 0);
}

iniciarSistema();
