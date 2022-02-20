import { Todo_Data } from '../data/todo_data.js';
import { Validate_Project_Adder } from '../validation/validate_project_adder.js';
import { Save_Data } from '../data/save_data.js';
// this will handle the adding of personal project to the personal project object

const inputPersonalProject = document.querySelector('#add-input-project');
export function Adder_Personal_Project() {
	if (!Validate_Project_Adder()) return alert("Please fill the project title");

	Todo_Data.personalProjectCollection.push(inputPersonalProject.value); // add the personal project to the array
	Save_Data();
}