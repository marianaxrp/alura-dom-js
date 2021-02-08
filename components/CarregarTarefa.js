import { ordenaDatas, removeDatasRepetidas } from '../services/data.js';
import { criaData } from './CriarData.js';

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]');

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

    lista.innerHTML = " ";
    const datasUnicas = removeDatasRepetidas(tarefasCadastradas);
    ordenaDatas(datasUnicas);

    datasUnicas.forEach((dia) => {        
        lista.appendChild(criaData(dia));
    })
}