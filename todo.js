const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos ';
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDos(event) {
  event.preventDefault();
  const btn = event.target;
  const li = btn.parentNode;

  toDoList.removeChild(li);

  const cleanToDo = toDos.filter(toDo => {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDo;
  saveToDos();
}

function paintTodo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newID = toDos.length + 1;

  delBtn.innerText = '❌';
  delBtn.addEventListener('click', deleteToDos);
  span.innerText = text;

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newID;

  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newID,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintTodo(currentValue);
  toDoInput.value = '';
}

function loadToDo() {
  const loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos !== null) {
    const parsedTodos = JSON.parse(loadedToDos);
    parsedTodos.forEach(toDo => {
      //console.log(toDo.text);
      paintTodo(toDo.text);
    });
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
