import { Adder_Personal_Project } from '../item_adder/project_adder.js';
import { Personal } from './personal.js';
// this module will handle the adding of personal project

const btnAddProject = document.querySelector('#add-new-project');
export const Add_Project = (function() {
	let personalProjectCollection = []; // here we will assign the personal project collection
	btnAddProject.addEventListener('click', addPersonalProject);

	// function callback for the add project button
	function addPersonalProject() {
		personalProjectCollection = Adder_Personal_Project();
		Personal.renderPersonalProject();
	}

	function getCollection() {
		return personalProjectCollection;
	}

	return {
		getCollection
	}
})();