import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import { filterTodos } from '../utils';

export const useRequestGetTodos = ({ newTodo, isSorting, isRemoving }) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const todosDbRef = ref(db, 'todos');

		setTodos([]);

		return onValue(todosDbRef, (snapshot) => {
			const loadedProducts = snapshot.val() || {};

			const findedTodos = filterTodos(newTodo, loadedProducts);
			setTodos(findedTodos);
			setIsLoading(false);
		});
	}, [isSorting, newTodo, isRemoving]);

	return { todos, isLoading, isError };
};
