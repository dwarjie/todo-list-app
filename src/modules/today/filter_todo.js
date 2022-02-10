import { Todo_Data } from '../data/todo_data.js';
import { Filter_Project } from './filter_project.js';
import { Current_Date } from '../date/current_date.js';
// this module will filter the todo collection
// then return the new filtered todo collections

export const Filtered_Today = (function() {

	// this function will be the callback function
	// in order to check every todo inside the todoCollection
	// and compare the current date to the due date
	function dueToday(item) {
		if (item.due == Current_Date)
			return true;
		return false
	}

	// this will return the filteredCollection
	function getFilteredCollection() {
		// get the todo collection from Add_Todo module
		// then filter it
		let todoCollection = Todo_Data.todoCollections.inbox;
		let filteredCollection = todoCollection.filter(dueToday);
		// filter the todo collection in personal project
		let filteredProject = Filter_Project(Todo_Data.todoCollections.personal, dueToday);

		// merge the array of filtered inbox todo and the personal project todo
		return filteredCollection.concat(filteredProject);
	}

	return {
		getFilteredCollection
	}
})();