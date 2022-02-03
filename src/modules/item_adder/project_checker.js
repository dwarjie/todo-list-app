// this module will check if a key exits

export function Project_Checker(todoCollections, projectTitle) {
	if (todoCollections.hasOwnProperty(projectTitle))
		return true;
	return false;
};