import { Todo_Data } from '../data/todo_data.js';
import { Adder_Personal_Project } from '../item_adder/project_adder.js';
import { Personal } from './personal.js';
// this module will handle the adding of personal project

const btnAddProject = document.querySelector('#add-new-project');
export const Add_Project = (function() {
	btnAddProject.addEventListener('click', addPersonalProject);

	// function callback for the add project button
	function addPersonalProject() {
		Todo_Data.personalProjectCollection = Adder_Personal_Project();
		Personal.renderPersonalProject();
	}
})();