import { Todo_Data } from '../data/todo_data.js';
import { Title_Checker } from './title_checker.js';
import { Project_Checker } from './project_checker.js';
// this module has multiple purpose
// this can add a todo to the todoList
// or even add a new personal project

// check the project title in order to know if the todo is for personal or inbox
export function Adder_Todo(itemDetails, projectTitle) {
	// inbox
	if (Title_Checker(projectTitle)) {
		Todo_Data.todoCollections.inbox.push(itemDetails);
	}else{
		// if project title does not exist. Create it
		// else just add it to the project
		if(Project_Checker(Todo_Data.todoCollections.personal, projectTitle)) {
			Todo_Data.todoCollections.personal[projectTitle].push(itemDetails)
		}else{
			Todo_Data.todoCollections.personal[projectTitle] = [];
			Todo_Data.todoCollections.personal[projectTitle].push(itemDetails)
		}
	}
	console.log(Todo_Data.todoCollections)
	return Todo_Data.todoCollections; // return the whole collection
}