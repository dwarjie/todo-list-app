// this will validate the project adder pop up
// it will check if the input has any value before adding the project

const projectForm = document.querySelector('#add-input-project');
export function Validate_Project_Adder() {
	if (projectForm.value != "") 
		return true;
	return false;
}