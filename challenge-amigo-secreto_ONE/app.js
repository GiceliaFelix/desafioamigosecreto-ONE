const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const lista = document.getElementById("listaAmigos");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);

    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);

    input.value = "";
    input.focus();
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const li = document.createElement("li");
    li.textContent = `O amigo secreto é: ${amigoSorteado}!`;
    resultado.appendChild(li);
}