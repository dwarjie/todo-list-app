import { Get_Details } from "./get_todo_details.js";
import { Clear_Form } from "../top_navigation/clear_modal.js";
import { Validate_Todo } from "../validation/validate_todo.js";
import { Adder_Todo } from "../item_adder/adder.js";
import { Inbox } from "../inbox/inbox.js";
// this module is for accessing the modal form
// once the Add button is clicked, it will check for required field if one is empty, prompt that all field should be filled
// if all are filled, get all the data then call the factory function for creating a new todo 

const btnAddItem = document.querySelector('#add-item');
export const Add_Todo = (function() {
	let collections = {
		inbox: [],
		personal: []
	}; // here will go the todo_collection
	// add eventlistener to the button
	btnAddItem.addEventListener('click', addToDoItem);
	let projectTitle = document.querySelector('.project-title');
	// Validate the modal form first if all has value. else show an alert
	// this function will get the details from the modal form
	// return the details as an object then assign it to itemDetails
	// then call the Adder_Todo in order to add the object to the todoCollection
	function addToDoItem() {
		// validate if all input has value
		if (Validate_Todo()) {
			let itemDetails = Get_Details();
			collections = Adder_Todo(itemDetails, projectTitle.innerHTML);
			Inbox.render();
			Clear_Form(); // clear the form
		}else {
			alert("Fill all fields!");
		}
	}

	function getCollection() {
		return collections;
	}

	return {
		getCollection	
	};
})();

