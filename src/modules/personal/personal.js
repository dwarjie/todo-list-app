import { Render_Project_Adder } from '../renderer/render_project_adder.js';
import { Cancel_Project } from '../side-navigation/cancel_adding_project.js';

const btnNewProject = document.querySelector("#create-personal");
export const Personal = (function() {
	btnNewProject.addEventListener('click', Render_Project_Adder);
})();