import { Render_Project_Adder } from '../renderer/render_project_adder.js';
// this will handle the cancel button in adding project pop up
// it will hide the project adder then show the create new project

const btnCancel = document.querySelector('#cancel-new-project');
export const Cancel_Project = (function() {
	btnCancel.addEventListener('click', () => {
		Render_Project_Adder();
	});
})();