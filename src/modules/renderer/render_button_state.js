// this module will set the state of the button once clicked.
// once the side buttons is clicked, the button will be added a class

export function Render_Button_State(element) {
	document.querySelector(element).classList.add("active");
}