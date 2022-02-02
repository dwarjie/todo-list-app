import { Personal_Container } from '../container/personal_container.js';
// this will render all the personal project to the DOM

const personalProjectList = document.querySelector('#personal-project-list');
export function Render_Personal_Project(personalProjectCollection) {
	personalProjectList.innerHTML = personalProjectCollection.map((project) => {
		return Personal_Container(project);
	}).join('');
};
