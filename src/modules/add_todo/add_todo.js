import { Todo_Data } from '../data/todo_data.js';
import { Title_Checker } from '../item_adder/title_checker.js';
import { Get_Details } from "./get_todo_details.js";
import { Clear_Form } from "../top_navigation/clear_modal.js";
import { Validate_Todo } from "../validation/validate_todo.js";
import { Update_Item } from '../event/update_event.js';
import { Adder_Todo } from "../item_adder/adder.js";
import { Inbox } from "../inbox/inbox.js";
import { Personal } from '../personal/personal.js';
import { Save_Data } from '../data/save_data.js';

// this module is for accessing the modal form
// once the Add button is clicked, it will check for required field if one is empty, prompt that all field should be filled
// if all are filled, get all the data then call the factory function for creating a new todo 

const btnAddItem = document.querySelector('#add-item');
export const Add_Todo = (function() {
	// add eventlistener to the button
	btnAddItem.addEventListener('click', addToDoItem);
	let projectTitle = document.querySelector('.project-title');
	// Validate the modal form first if all has value. else show an alert
	// this function will get the details from the modal form
	// return the details as an object then assign it to itemDetails
	// then call the Adder_Todo in order to add the object to the todoCollection
	function addToDoItem() {
		// check if the button is for updating or not
		if (btnAddItem.innerHTML === "Update") {
			Update_Item();
			return;
		}
		// validate if all input has value
		if (Validate_Todo()) {
			let itemDetails = Get_Details();
			// check if the user is adding to inbox or personal by checking the project title
			if (Title_Checker(projectTitle.innerHTML)) {
				// user is adding to the inbox
				Todo_Data.todoCollections = Adder_Todo(itemDetails, "Inbox");
				Inbox.render();
			}else {
				Todo_Data.todoCollections = Adder_Todo(itemDetails, projectTitle.innerHTML);
				Personal.update(); // update the view-todo
			}
			Save_Data();
			Clear_Form(); // clear the form
		}else {
			alert("Fill all fields!");
		}
	}
})();
