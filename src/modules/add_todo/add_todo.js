// this module is for accessing the modal form
// once the Add button is clicked, it will check for required field if one is empty, prompt that all field should be filled
// if all are filled, get all the data then call the factory function for creating a new todo 

const btnAddItem = document.querySelector('#add-item');

export const Add_Todo = (function() {
	let itemDetails = {}; // here we will store the details from the input
	// add eventlistener to the button
	btnAddItem.addEventListener('click', addToDoItem);

	function addTodoItem() {
	}
})();