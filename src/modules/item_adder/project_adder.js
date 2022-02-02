// this will handle the adding of personal project to the personal project object

let personalProjectCollection = [];
const inputPersonalProject = document.querySelector('#add-input-ptoject');
export function Adder_Personal_Project() {
	personalProjectCollection.push(inputPersonalProject.value); // add the personal project to the array

	return personalProjectCollection;
}