import { useEffect, useState } from 'react';
import { ref, onValue, query, orderByChild } from 'firebase/database';
import { db } from '../firebase';
import { filterTodos } from '../utils';

export const useRequestSortTodos = ({ newTodo, isSorting, isRemoving }) => {
	const [sortedTodos, setSortedTodos] = useState([]);
	const [isSortedLoading, setIsSortedLoading] = useState(true);
	const [isSortedError, setIsSortedError] = useState(false);

	useEffect(() => {
		const sortTodosDbRef = query(ref(db, 'todos'), orderByChild('title'));
		setSortedTodos([]);

		return onValue(sortTodosDbRef, (snapshot) => {
			const loadedTodos = {};

			snapshot.forEach((childSnapshot) => {
				const key = childSnapshot.key;
				const value = childSnapshot.val() || {};

				loadedTodos[key] = value;
			});

			const findedTodos = filterTodos(newTodo, loadedTodos);
			setSortedTodos(findedTodos);
			setIsSortedLoading(false);
		});
	}, [isSorting, newTodo, isRemoving]);

	return { sortedTodos, isSortedLoading, isSortedError };
};
