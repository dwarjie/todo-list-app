import { Add_Todo } from '../add_todo/add_todo.js';
import { Render_Todo } from "../renderer/render.js";
// will module will take care for the inbox tab
// it will show all the todo item/s

const projectTitle = document.querySelector('.project-title');
const btnInbox = document.querySelector('.container-inbox');

export const Inbox = (function() {
	btnInbox.addEventListener('click', render);

	function render() {
		// change the project title
		projectTitle.innerHTML = "Inbox";
		console.log(Add_Todo.getCollection());
		Render_Todo(Add_Todo.getCollection());
	}

	return {
		render
	}
})();
