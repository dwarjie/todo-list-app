// This js module will clear the content of a parent node
// it will get the parent node then get the first element child
// while there's still a child keep looping
// 	inside the loop it will remove the child then get the child again

export function Clear_Content() {
	const contentParent = document.querySelector('#todo-list');
	if (contentParent.hasChildNodes()) {
		let child = contentParent.firstElementChild;
		while(child) {
			contentParent.removeChild(child)
			child = contentParent.firstElementChild;
		}
	}
};