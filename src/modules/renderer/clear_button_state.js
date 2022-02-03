// this module will remove the active state of the button
// in order to add the active state to the other button

const BUTTON_ELEMENTS = ["#show-inbox", "#show-today", "#show-personal"];
export function Clear_Button_State() {
	BUTTON_ELEMENTS.forEach((buttons) => {
		document.querySelector(buttons).classList.remove('active');
	});
};