// this will handle the adding of event listeners to multiple elements
// this module needs the array of the elements using querySelectorAll
// then it also need the callback function that will be added to the element
// in order to iterate to each element. It will use forEach

export function Event_Manager(elements, callBackFunc) {
	elements.forEach((elem) => {
		elem.addEventListener('click', (e) => callBackFunc(e));
	});
};