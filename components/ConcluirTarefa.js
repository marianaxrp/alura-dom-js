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

export default BotaoConcluir;