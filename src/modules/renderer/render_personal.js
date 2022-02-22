import { Todo_Data } from '../data/todo_data.js';
import { Render_Todo } from  './render.js';
// this will handle the rendering of personal project to the main view-todo using Inbox 
// rendering of the personal projects todo

export function Render_Personal() {
	const personalProjects = Object.keys(Todo_Data.todoCollections.personal); // get the keys of personal projects
	// check if personal object is not empty
	if (personalProjects.length != 0) {
		// not empty
		personalProjects.forEach((project) => {
			// loop in every project and render all todo item it has
			Render_Todo(Todo_Data.todoCollections.personal[project]);
		});
	}
};