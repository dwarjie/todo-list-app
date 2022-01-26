import { Get_Details } from "./get_todo_details.js";
import { Adder_Todo } from "../item_adder/adder.js";
import { Render_Todo } from "../renderer/render.js";
// this module is for accessing the modal form
// once the Add button is clicked, it will check for required field if one is empty, prompt that all field should be filled
// if all are filled, get all the data then call the factory function for creating a new todo 

const btnAddItem = document.querySelector('#add-item');
export const Add_Todo = (function() {
	// add eventlistener to the button
	btnAddItem.addEventListener('click', addToDoItem);

	// this function will get the details from the modal form
	// return the details as an object then assign it to itemDetails
	// then call the Add_Item
	function addToDoItem() {
		let itemDetails = Get_Details();
		let collections = Adder_Todo(itemDetails);
		console.log(collections);
		Render_Todo(collections);
	}
})();

