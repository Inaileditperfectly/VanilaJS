const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");
let toDos = [];

const TODOS_KEY = "todos";


function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id) ) ;
  li.remove();
  saveToDos();

}


function paintToDo(newTodo) {
  
  // console.log("I will paint", newTodo);
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.classList.add("todoListText")
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.classList.add("todoRemoveBtn")
  button.addEventListener("click", deleteToDo);  
  li.appendChild(span);
  li.appendChild(button);
  // console.log(li);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
  event.preventDefault();
  // console.log(toDoInput.value);
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id:Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);


// function sayHello(item) {
//   console.log("this is the turn of", item);
// }



const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // console.log(parsedToDos);
  parsedToDos.forEach(paintToDo);
}


