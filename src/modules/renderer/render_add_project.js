// this module will toggle the show class of the create new project button
// in order to hide it once the project adder shows
// then show it once the project adder is hidden

const addProject = document.querySelector('.new-personal');
export function Render_Add_Project() {
	addProject.classList.toggle("show-new-personal");
};