import { Todo_Data } from '../data/todo_data.js';
import { Render_Project_Adder } from '../renderer/render_project_adder.js';
import { Render_Todo } from '../renderer/render.js';
import { Render_Button_State } from '../renderer/render_button_state.js';
import { Clear_Button_State } from '../renderer/clear_button_state.js';
import { Cancel_Project } from './cancel_adding_project.js';
import { Render_Personal_Project } from '../renderer/render_personal_project.js';
import { Add_Project } from './add_project.js';
import { Clear_Input } from './clear_input.js';
import { Clear_Content } from '../renderer/clear_content.js';

const projectTitle = document.querySelector('.project-title');
const btnNewProject = document.querySelector("#create-personal");

export const Personal = (function() {
	btnNewProject.addEventListener('click', Render_Project_Adder);

	// this function will render all the created personal projects
	function renderPersonalProject() {
		console.log(Todo_Data.personalProjectCollection)
		Render_Personal_Project(Todo_Data.personalProjectCollection);
		Render_Project_Adder();
		Clear_Input();
	}	

	// this function will handle all the rendering for the view-todo view 
	// this will be only called by the use of side navigation project title
	function render(e) {
		Clear_Button_State();
		Render_Button_State("#show-personal");
		Clear_Content(); // clear all the content inside the main view todo
		// get the target innerHTML and use it to change project title
		projectTitle.innerHTML = e.target.innerHTML;
		Render_Todo(Todo_Data.todoCollections.personal[projectTitle.innerHTML])
	}

	// this function will update the view-todo once the projectCollection is updated
	function update() {
		Clear_Content(); // clear all the content inside the main view todo
		Render_Todo(Todo_Data.todoCollections.personal[projectTitle.innerHTML])
	}

	return {
		renderPersonalProject,
		render,
		update
	}
})();