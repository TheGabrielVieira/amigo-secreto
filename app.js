// Declaração da variável para armazenar os amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Captura o valor inserido no campo de texto
    const nomeAmigo = document.getElementById('amigo').value;

    // Validação para garantir que o campo não está vazio
    if (nomeAmigo.trim() === '') {
        alert('Por favor, insira um nome.');
        return; // Não prossegue se o campo estiver vazio
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();

    // Limpa o campo de entrada
    document.getElementById('amigo').value = '';
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    
    // Limpa a lista antes de adicionar os novos amigos
    listaAmigosElement.innerHTML = '';

    // Percorre o array e cria um <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = amigos[i];
        listaAmigosElement.appendChild(listItem);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Valida se há amigos na lista
    if (amigos.length === 0) {
        alert('Não há amigos para sortear. Adicione pelo menos um nome.');
        return;
    }

    // Gera um índice aleatório entre 0 e o tamanho do array menos 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado na tela
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
