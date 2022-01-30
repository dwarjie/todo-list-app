import { Clear_Button_State } from '../renderer/clear_button_state.js';
import { Render_Button_State } from '../renderer/render_button_state.js';
import { Filtered_Today } from './filter_todo.js';
import { Render_Todo } from "../renderer/render.js";
import { Clear_Content } from '../renderer/clear_content.js';
// this will show all the todo that is deadline today
// it will get all the todolist collections
// then use array filtering function in order to filter
// and only return the once that is deadline today.

const projectTitle = document.querySelector('.project-title');
const btnToday = document.querySelector('#show-today');
export const Today = (function() {
	btnToday.addEventListener('click', render);

	function render() {
		Clear_Button_State();
		Clear_Content();
		Render_Button_State("#show-today");
		projectTitle.innerHTML = "Today";
		Render_Todo(Filtered_Today.getFilteredCollection());
	}
})();