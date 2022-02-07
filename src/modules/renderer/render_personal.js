import { Render_Todo } from  './render.js';
import { Add_Todo } from '../add_todo/add_todo.js';
// this will handle the rendering of personal project to the main view-todo using Inbox 
// rendering of the personal projects todo

export function Render_Personal() {
	const personalProjects = Object.keys(Add_Todo.getCollection().personal); // get the keys of personal projects
	console.log(personalProjects.length);
	// check if personal object is not empty
	if (personalProjects.length != 0) {
		// not empty
		personalProjects.forEach((project) => {
			// loop in every project and render all todo item it has
			Render_Todo(Add_Todo.getCollection().personal[project]);
		});
	}
};