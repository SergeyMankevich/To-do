import { useEffect, useState } from 'react';
import { TODOS_URL } from '../constants';
import { filterTodos } from '../utils';

export const useRequestGetTodos = ({ refreshProducts, newTodo, isSorting }) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsError(false);
		const Debounce = setTimeout(() => {
			fetch(TODOS_URL)
				.then((response) => {
					if (response.ok !== true) {
						throw new Error('Error with get data');
					}
					return response.json();
				})
				.then((loadedDate) => {
					const findedTodos = filterTodos(newTodo, loadedDate);
					setTodos(findedTodos);
				})
				.catch((err) => setIsError(err.message))
				.finally(() => {
					setIsLoading(false);
				});
		}, 300);

		return () => clearTimeout(Debounce);
	}, [refreshProducts, newTodo, isSorting]);

	return { todos, setTodos, isLoading, isError };
};
