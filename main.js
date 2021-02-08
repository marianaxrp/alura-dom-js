import {handleNovoItem} from './components/CriaTarefa.js'
import {carregaTarefa} from './components/CarregarTarefa.js'

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);

carregaTarefa();