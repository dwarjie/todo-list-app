import { Todo_Container } from "../container/todo_container.js";
// this will let us render all the todo item collestions
// using the container

const todoList = document.querySelector('#todo-list');
export function Render_Todo(todoCollection) {
	console.log('help');
	todoList.innerHTML = todoCollection.map((item) => {
		console.log(todoList);
		console.log(todoList.innerHTMl);
		return Todo_Container(item);
	}).join(''); 
}