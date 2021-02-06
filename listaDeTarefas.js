const criarTarefa = (event) => {
    event.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;
    
    tarefa.innerHTML = conteudo;
    
    tarefa.appendChild(BotaoConcluir());
    lista.appendChild(tarefa);
    input.value = "";
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

const BotaoConcluir = () => {
    const botaoConcluir = document.createElement('button');
    
    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerHTML = "concluir";

    botaoConcluir.addEventListener('click', concluirTarefa);

    return botaoConcluir;
};

const concluirTarefa = (event) => {
    const botaoConcluir = event.target;

    const tarefaCompleta = botaoConcluir.parentElement;

    tarefaCompleta.classList.toggle('done');
};