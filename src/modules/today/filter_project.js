// this module will filter the project todo's
// it will look through the personal key check if it's length is not 0 (means it has user project)
// then check inside that array custom project then check the other custom project

export function Filter_Project(todoCollection, callBackFunc) {
	// iterate using for..of
	let filteredCollection = []; // assign the filtered collection here
	const projectKeys = Object.keys(todoCollection); // get the keys of the object
	for(const key of projectKeys) {
		// then iterate through the project using the key
		// filteredCollection.push(todoCollection[key].filter(callBackFunc));
		todoCollection[key].filter((item) => {
			if (callBackFunc(item)) {
				filteredCollection.push(item)
			}
		});
	}

	return filteredCollection;
};