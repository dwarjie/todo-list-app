// this contains all the data of the todo app
// including the todoCollections, the todoId, and the todoProjectCollections


export const Todo_Data = (function() {
	let todoCollections = {
		inbox: [],
		personal: []
	}; // here will go the todo_collection
	let personalProjectCollection = []; // here we will assign the personal project collection
	let todoId;	

	return {
		todoCollections,
		personalProjectCollection,
		todoId
	}
})();