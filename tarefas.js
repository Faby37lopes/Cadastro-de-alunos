const tarefas = [];

function adicionarTarefa(titulo) {
    tarefas.push({ titulo, concluida: false });
    console.log(`✅ Tarefa adicionada: "${titulo}"`);
}

function listarTarefas() {
    console.log("\n📋 Lista de Tarefas:");
    tarefas.forEach((tarefa, index) => {
        const status = tarefa.concluida ? "✔️" : "❌";
        console.log(`${index + 1}. ${tarefa.titulo} [${status}]`);
    });
}

function concluirTarefa(indice) {
    if (tarefas[indice - 1]) {
        tarefas[indice - 1].concluida = true;
        console.log(`✔️ Tarefa "${tarefas[indice - 1].titulo}" marcada como concluída.`);
    } else {
        console.log("⚠️ Tarefa não encontrada.");
    }
}

function removerTarefa(indice) {
    if (tarefas[indice - 1]) {
        const removida = tarefas.splice(indice - 1, 1);
        console.log(`🗑️ Tarefa removida: "${removida[0].titulo}"`);
    } else {
        console.log("⚠️ Tarefa não encontrada.");
    }
}

// Exemplo de uso:
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Ler um capítulo de livro");
listarTarefas("Fazer um projeto novo");
concluirTarefa(1);
listarTarefas();
removerTarefa(2);
listarTarefas();
