// this contains all the data of the todo app
// including the todoCollections, the todoId, and the todoProjectCollections


export const Todo_Data = (function() {
	let todoDefault = {
		inbox: [
			{
				id: 0,
				title: "Add your first todo",
				desc: "Click the add icon at the top right and start filling your first todo",
				due: "2022-02-15",
				priority: "high-priority",
				status: undefined,
			},
			{
				id: 1,
				title: "Add your first Personal Project",
				desc: "Click the add icon at the Personal tab and give your first personal project a title",
				due: "2022-02-15",
				priority: "high-priority",
				status: undefined,
			}
		],
		personal: []
	}
	let todoCollections = {
		inbox: [],
		personal: []
	}; // here will go the todo_collection
	let personalProjectCollection = []; // here we will assign the personal project collection
	let todoId = 1;	

	function getTodoId() {
		todoId++; // increment the id in order for every todo have unique id
		return todoId;
	}

	function getId() {
		return todoId;
	}

	function setId(id) {
		todoId = id;
	}
	return {
		todoDefault,
		todoCollections,
		personalProjectCollection,
		getId,
		getTodoId,
		setId
	}
})();