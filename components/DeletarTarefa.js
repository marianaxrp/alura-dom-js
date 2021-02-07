const BotaoDeletar = () => {
    const botaoDeletar = document.createElement('button');

    botaoDeletar.innerText = 'deletar';
    botaoDeletar.addEventListener('click', deletarTarefa);

    return botaoDeletar;
};

const deletarTarefa = (event) => {
    const botaoDeletar = event.target;
    
    const tarefaCompleta = botaoDeletar.parentElement;

    tarefaCompleta.remove();

    return botaoDeletar;
};

export default BotaoDeletar;