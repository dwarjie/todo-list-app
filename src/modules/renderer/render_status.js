// this module will render the status checkbox
// if the status is undefined leave the checkbox as it is
// if status if finished make the checkbox checked

export function Render_Status(elements) {
	elements.forEach( (status) => {
		if (status.alt == "undefined") return

		status.setAttribute("checked", true)
	});
}