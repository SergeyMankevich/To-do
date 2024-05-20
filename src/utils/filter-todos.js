export const filterTodos = (searchText, listOfTodos) => {
	if (!searchText) {
		return Object.entries(listOfTodos);
	}
	return Object.entries(listOfTodos).filter(([id, { title, completed }]) =>
		title.toLowerCase().includes(searchText.toLowerCase()),
	);
};
