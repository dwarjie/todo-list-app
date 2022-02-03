import { Title_Checker } from './title_checker.js';
// this module has multiple purpose
// this can add a todo to the todoList
// or even add a new personal project

 // this will contain all the data of todo
let todoCollections = {
	inbox: [],
	personal: {}
};

// check the project title in order to know if the todo is for personal or inbox
export function Adder_Todo(itemDetails, projectTitle) {
	// inbox
	if (Title_Checker(projectTitle)) {
		todoCollections.inbox.push(itemDetails);
	}else{
		// if project title does not exist. Create it automatically
		todoCollections.personal.projectTitle = itemDetails;
	}

	console.log(todoCollections)
	return todoCollections; // return the whole collection
}