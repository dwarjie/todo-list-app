import './style.scss';
import { Add_Todo } from './modules/add_todo/add_todo.js';
import { Top_Navigation } from './modules/top_navigation/top_navigation.js';
import { Inbox } from './modules/inbox/inbox.js';
import { Today } from './modules/today/today.js';


// once the window is done loading.
// show the inbox tab defualt
window.onload = () => {
	Inbox.render();
};