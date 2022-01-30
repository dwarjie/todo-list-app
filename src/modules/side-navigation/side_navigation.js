import { Inbox } from '../inbox/inbox.js';
import { Today } from '../today/today.js';
// this module is for the side navigations

export const Side_Navigation = (function() {
	// once the window is done loading.
	// show the inbox tab defualt
	window.onload = () => {
		Inbox.render();
	};
})();
