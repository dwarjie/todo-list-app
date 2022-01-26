import { Get_Details } from "./get_todo_details.js";
import { Adder_Todo } from "../item_adder/adder.js";
import { Inbox } from "../inbox/inbox.js";
// this module is for accessing the modal form
// once the Add button is clicked, it will check for required field if one is empty, prompt that all field should be filled
// if all are filled, get all the data then call the factory function for creating a new todo 

const btnAddItem = document.querySelector('#add-item');
export const Add_Todo = (function() {
	let collections = []; // here will go the todo_collection
	// add eventlistener to the button
	btnAddItem.addEventListener('click', addToDoItem);

	// this function will get the details from the modal form
	// return the details as an object then assign it to itemDetails
	// then call the Adder_Todo in order to add the object to the todoCollection
	function addToDoItem() {
		let itemDetails = Get_Details();
		collections = Adder_Todo(itemDetails);
		Inbox.render();
	}

	function getCollection() {
		return collections;
	}

	return {
		getCollection	
	};
})();

