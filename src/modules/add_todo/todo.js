// this is a function factory for creating a new todo item
export const Todo = (id, title, desc, due, priority, status) => {
	let todoObject = {}; // empty object

	// set the parameters given to the todo object
	todoObject.id = id;
	todoObject.title = title;
	todoObject.desc = desc;
	todoObject.due = due;
	todoObject.priority = priority;
	todoObject.status = status;

	return todoObject; // return the object
};