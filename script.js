let tenis = [];
let proximoId = 1;

function atualizarTela() {
    document.getElementById("total").textContent = tenis.length;

    const lista = document.getElementById("lista");

    if (tenis.length === 0) {
        lista.innerHTML = `
            <div class="empty">
                <div class="empty-icon">👟</div>
                <p>Nenhum tênis cadastrado</p>
            </div>
        `;
        return;
    }

    lista.innerHTML = tenis.map(tenis => `
        <div class="sneaker-item">
            <div class="sneaker-id">#${tenis.id}</div>

            <div>
                <p>Nome</p>
                <strong>${tenis.nome}</strong>
            </div>

            <div>
                <p>Marca</p>
                <strong>${tenis.marca}</strong>
            </div>

            <div>
                <p>Tamanho</p>
                <strong>${tenis.tamanho}</strong>
            </div>
        </div>
    `).join("");
}

function cadastrar() {
    const nome = prompt("Digite o nome do tênis:");

    if (nome === null) return;

    if (nome.trim() === "") {
        alert("Nome não informado.");
        return;
    }

    const marca = prompt("Digite a marca do tênis:");

    if (marca === null) return;

    if (marca.trim() === "") {
        alert("Marca não informada.");
        return;
    }

    const tamanho = prompt("Digite o tamanho do tênis:");

    if (tamanho === null) return;

    if (tamanho.trim() === "") {
        alert("Tamanho não informado.");
        return;
    }

    const novoTenis = {
        id: proximoId,
        nome: nome.trim(),
        marca: marca.trim(),
        tamanho: tamanho.trim()
    };

    tenis.push(novoTenis);
    proximoId++;

    atualizarTela();
    alert("Tênis cadastrado com sucesso!");
}

function listar() {
    if (tenis.length === 0) {
        alert("Nenhum item cadastrado.");
        atualizarTela();
        return;
    }

    let mensagem = "Tênis cadastrados:\n\n";

    tenis.forEach(item => {
        mensagem +=
            "ID: " + item.id +
            "\nNome: " + item.nome +
            "\nMarca: " + item.marca +
            "\nTamanho: " + item.tamanho +
            "\n--------------------\n";
    });

    alert(mensagem);
    atualizarTela();
}

function buscar() {
    if (tenis.length === 0) {
        alert("Nenhum item cadastrado.");
        return;
    }

    const nomeBusca = prompt("Digite o nome do tênis que deseja buscar:");

    if (nomeBusca === null) return;

    const resultado = tenis.filter(item =>
        item.nome.toLowerCase().includes(nomeBusca.trim().toLowerCase())
    );

    if (resultado.length === 0) {
        alert("Nenhum item encontrado.");
        return;
    }

    let mensagem = "Resultado da busca:\n\n";

    resultado.forEach(item => {
        mensagem +=
            "ID: " + item.id +
            "\nNome: " + item.nome +
            "\nMarca: " + item.marca +
            "\nTamanho: " + item.tamanho +
            "\n--------------------\n";
    });

    alert(mensagem);
}

function deletar() {
    if (tenis.length === 0) {
        alert("Nenhum item cadastrado.");
        return;
    }

    const id = Number(prompt("Digite o ID que deseja remover:"));

    if (!Number.isInteger(id)) {
        alert("ID inválido.");
        return;
    }

    const indice = tenis.findIndex(item => item.id === id);

    if (indice === -1) {
        alert("Item não encontrado.");
        return;
    }

    tenis.splice(indice, 1);
    atualizarTela();

    alert("Item removido com sucesso!");
}

function removerUltimo() {
    if (tenis.length === 0) {
        alert("Nenhum item cadastrado.");
        return;
    }

    const removido = tenis.pop();
    atualizarTela();

    alert("Último tênis removido: " + removido.nome);
}

function limparTudo() {
    if (tenis.length === 0) {
        alert("Nenhum item cadastrado.");
        return;
    }

    const confirmar = confirm("Tem certeza que deseja remover todos os itens?");

    if (!confirmar) {
        return;
    }

    tenis = [];
    atualizarTela();

    alert("Todos os tênis foram removidos.");
}

atualizarTela();
