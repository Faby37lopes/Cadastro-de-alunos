function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const texto = input.value.trim();

    if (texto === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        ${texto}
        <button onclick="concluirTarefa(this)">✔️</button>
        <button onclick="removerTarefa(this)">🗑️</button>
    `;

    document.getElementById("listaTarefas").appendChild(li);
    input.value = "";
}

function concluirTarefa(botao) {
    const li = botao.parentElement;
    li.classList.toggle("completed");
}

function removerTarefa(botao) {
    const li = botao.parentElement;
    li.remove();
}
