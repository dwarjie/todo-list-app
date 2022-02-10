// this is a function factory for creating a new todo item
export const Todo = (id, title, desc, due, priority) => {
	let todoObject = {}; // empty object

	// set the parameters given to the todo object
	todoObject.id = id;
	todoObject.title = title;
	todoObject.desc = desc;
	todoObject.due = due;
	todoObject.priority = priority;

	return todoObject; // return the object
};