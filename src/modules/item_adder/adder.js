// this module has multiple purpose
// this can add a todo to the todoList
// or even add a new personal project

let todoCollections = []; // this will contain all the data of todo
export function Adder_Todo(itemDetails) {
	todoCollections.push(itemDetails);

	return todoCollections; // return the whole collection
}