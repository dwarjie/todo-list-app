import { Add_Todo } from '../add_todo/add_todo.js';
import { Render_Todo } from "../renderer/render.js";
import { Clear_Content } from '../renderer/clear_content.js';
// will module will take care for the inbox tab
// it will show all the todo item/s

const projectTitle = document.querySelector('.project-title');
const btnInbox = document.querySelector('#show-inbox');

export const Inbox = (function() {
	btnInbox.addEventListener('click', render);

	function render() {
		// change the project title
		Clear_Content();
		projectTitle.innerHTML = "Inbox";
		Render_Todo(Add_Todo.getCollection());
	}

	return {
		render
	}
})();
