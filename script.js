const tasks = [
  { title: 'Comprar comida para o gato', type: 'Urgente' },
  { title: 'Consertar Computador', type: 'Importante' },
  { title: 'Beber água', type: 'Normal' },
  { title: 'Enviar relatório trimestral', type: 'Importante' },
  { title: 'Fazer exercícios físicos', type: 'Normal' },
  { title: 'Agendar consulta médica', type: 'Urgente' },
  { title: 'Ler pelo menos um capítulo de um livro', type: 'Normal' },
  { title: 'Limpar a despensa', type: 'Importante' },
  { title: 'Pagar a conta de energia', type: 'Urgente' },
  { title: 'Assistir a um documentário interessante', type: 'Normal' },
];

// funcao resposavel por criar elementos DOM
const createElement = (element, classlist) => {
  let elementCreated = document.createElement(element);
  classlist ? elementCreated.classList.add(classlist) : elementCreated;

  return elementCreated;
};

// funcao resposanvel por adicionar o type da task
const addTypeToTask = (typeTask) => {
  const spanElement = createElement('span', 'task-type');

  switch (typeTask) {
    case 'Urgente':
      spanElement.classList.add('span-urgent');
      break;
    case 'Importante':
      spanElement.classList.add('span-important');
      break;
    case 'Normal':
      spanElement.classList.add('span-normal');
  }

  return spanElement;
};

const createTaskItem = ({ title, type }) => {
  const liElement = createElement('li', 'task__item');
  const divElement = createElement('div', 'task-info__container');
  const spanElement = addTypeToTask(type);
  const pElement = createElement('p');
  const btnElement = createElement('button', 'task__button--remove-task');

  pElement.innerText = title;

  divElement.append(spanElement, pElement);
  liElement.append(divElement, btnElement);

  return liElement;
};

const renderElements = (tasks) => {
  const ul = document.querySelector('.tasks__list');
  ul.innerHTML = '';

  tasks.forEach((element) => {
    ul.appendChild(createTaskItem(element));
  });
};

renderElements(tasks);
