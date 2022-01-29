// this module will validate the todo form
// it will check if all the input has value or else
// return false (do not add todo)

const titleForm = document.forms["todo"]["title"];
const descForm = document.forms["todo"]["description"];
export function Validate_Todo() {
	if(titleForm.value != "" && descForm.value != "") 
		return true;
	return false;
};