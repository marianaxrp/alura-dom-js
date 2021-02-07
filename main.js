import {handleNovoItem} from './components/CriaTarefa.js'

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);