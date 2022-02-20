// this contains all the data of the todo app
// including the todoCollections, the todoId, and the todoProjectCollections


export const Todo_Data = (function() {
	let todoCollections = {
		inbox: [
			{
				desc: "asaas",
				due: "2022-02-15",
				id: 0,
				priority: "high-priority",
				status: "finish",
				title: "asas"	
			}
		],
		personal: []
	}; // here will go the todo_collection
	let personalProjectCollection = []; // here we will assign the personal project collection
	let todoId = 0;	

	function getTodoId() {
		todoId++; // increment the id in order for every todo have unique id
		return todoId;
	}

	function getId() {
		return todoId;
	}
	return {
		todoCollections,
		personalProjectCollection,
		getId,
		getTodoId
	}
})();