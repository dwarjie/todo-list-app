// this module will check the project title in order to know
// - if the project is for the personal projects
// - or only for the inbox project

export function Title_Checker(projectTitle) {
	// check the project title. If it's Inbox then return true
	// otherwise false
	if (projectTitle == "Inbox") 
		return true;
	return false;
};