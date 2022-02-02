import { Render_Project_Adder } from '../renderer/render_project_adder.js';
import { Cancel_Project } from './cancel_adding_project.js';
import { Add_Project } from './add_project.js';
import { Render_Personal_Project } from '../renderer/render_personal_project.js';
import { Clear_Input } from './clear_input.js';

const btnNewProject = document.querySelector("#create-personal");
export const Personal = (function() {
	btnNewProject.addEventListener('click', Render_Project_Adder);

	function render() {
		Render_Personal_Project(Add_Project.getCollection());
		Render_Project_Adder();
		Clear_Input();
	}	

	return {
		render
	}
})();