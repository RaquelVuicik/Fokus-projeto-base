// encontrar o botão adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');

const listaTarefas = [];

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden');
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    // const descricaoTarefa = textArea.value
    const textoTarefa = {
        descricao: textArea.value
    }
    listaTarefas.push(textoTarefa);
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
})