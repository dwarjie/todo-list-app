import { Validate_Project_Adder } from '../validation/validate_project_adder.js';
// this will handle the adding of personal project to the personal project object

let personalProjectCollection = [];
const inputPersonalProject = document.querySelector('#add-input-project');
export function Adder_Personal_Project() {
	if (!Validate_Project_Adder()) return alert("Please fill the project title");

	personalProjectCollection.push(inputPersonalProject.value); // add the personal project to the array

	return personalProjectCollection;
}