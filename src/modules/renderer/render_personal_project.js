import { Todo_Data } from '../data/todo_data.js';
import { Personal_Container } from '../container/personal_container.js';
import { Event_Manager } from '../event/event_manager.js';
import { Personal } from '../personal/personal.js';
// this will render all the personal project to the DOM

const personalProjectList = document.querySelector('#personal-project-list');
export function Render_Personal_Project() {
	let personalProjectCollection = Todo_Data.personalProjectCollection;
	console.log(personalProjectCollection)
	if (personalProjectCollection.length != 0) {
		personalProjectList.innerHTML = personalProjectCollection.map((project) => {
			return Personal_Container(project);
		}).join('');

		let btnPersonalProjects = document.querySelectorAll('#btnPersonalProject');
		// this will call the event manager in order to add event listeners to the personal project
		Event_Manager(btnPersonalProjects, Personal.render);
	}
};
