import { format } from 'date-fns';
// this module will use date-fns to get the current date
// in format yyyy/mm/dd
// then return it

export const Current_Date = (function() {
	return format(new Date(), "Y-MM-dd");
})();