import { Todo_Data } from '../data/todo_data.js';
import { Clear_Button_State } from '../renderer/clear_button_state.js';
import { Render_Button_State } from '../renderer/render_button_state.js';
import { Render_Todo } from "../renderer/render.js";
import { Render_Personal } from '../renderer/render_personal.js';
import { Clear_Content } from '../renderer/clear_content.js';
// will module will take care for the inbox tab
// it will show all the todo item/s

const projectTitle = document.querySelector('.project-title');
const btnInbox = document.querySelector('#show-inbox');

export const Inbox = (function() {
	btnInbox.addEventListener('click', render);

	function render() {
		// change the project title
		Clear_Button_State();
		Clear_Content();
		Render_Button_State("#show-inbox");
		projectTitle.innerHTML = "Inbox";
		// check if collection is not null
		if (Todo_Data.todoCollections === null) return
		Render_Todo(Todo_Data.todoCollections.inbox);
		Render_Personal();
	}

	// this function will be used when the todo list is updated
	// and the view todo has to be rerendered.
	function update() {
		Clear_Content();
		Render_Todo(Todo_Data.todoCollections.inbox);
		Render_Personal();
	}

	return {
		render,
		update
	}
})();
