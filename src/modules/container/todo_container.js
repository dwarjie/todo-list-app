// this container will contain the todo item container
// here, it will return a html represent of the todo item
// in order to append it to the DOM

// this will provide the container for creating todo item
export function Todo_Container(itemDetails) {
	// generate a todo list container
	// with the values from the itemDetails
	return `<div class="list-item">
	            <div class="todo-title">
	                <input type="checkbox" class="${itemDetails.priority}">
	                <h2>${itemDetails.title}</h2>
	            </div>
	            <div class="todo-prop">
	                <h3>${itemDetails.due}</h3>
	                <input type="image" class="button button-hover todo-edit" id="edit-todo" src="../src/img/edit.png">
	                <input type="image" class="button button-hover todo-delete" id="delete-todo" src="../src/img/delete.png">
	            </div>
        	</div>`;
}