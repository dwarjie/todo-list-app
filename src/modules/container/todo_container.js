import Edit from '../../img/edit.png';
import Delete from '../../img/delete.png';
// this container will contain the todo item container
// here, it will return a html represent of the todo item
// in order to append it to the DOM

// this will provide the container for creating todo item
export function Todo_Container(itemDetails) {
	// generate a todo list container
	// with the values from the itemDetails
	return `<div class="list-item" data-id="${itemDetails.id}">
	            <div class="todo-title">
	                <input type="checkbox" data-id="${itemDetails.id}" class="${itemDetails.priority}" id="cbStatus" alt="${itemDetails.status}">
	                <h2>${itemDetails.title}</h2>
	            </div>
	            <div class="todo-prop">
	                <h3>${itemDetails.due}</h3>
	                <input type="image" data-id="${itemDetails.id}" class="button button-hover todo-edit" id="edit-todo" src="${Edit}">
	                <input type="image" data-id="${itemDetails.id}" class="button button-hover todo-delete" id="delete-todo" src="${Delete}">
	            </div>
        	</div>`;
}