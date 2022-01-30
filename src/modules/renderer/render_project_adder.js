import { Render_Add_Project } from '../renderer/render_add_project.js';
// this module will toggle the class of project pop up adder
// in order to show it

const projectPopUp = document.querySelector(".project-pop-up");
export const Render_Project_Adder = (function() {
	Render_Add_Project();
	projectPopUp.classList.toggle("show-pop-up");
});