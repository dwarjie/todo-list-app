import { Filter_Project } from './filter_project.js';
import { Add_Todo } from '../add_todo/add_todo.js';
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
		let todoCollection = Add_Todo.getCollection().inbox;
		let filteredCollection = todoCollection.filter(dueToday);
		// filter the todo collection in personal project
		let filteredProject = Filter_Project(Add_Todo.getCollection().personal, dueToday);

		// merge the array of filtered inbox todo and the personal project todo
		return filteredCollection.concat(filteredProject);
	}

	return {
		getFilteredCollection
	}
})();