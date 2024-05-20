import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestDeleteTodos = ({ id }) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTodo = () => {
		setIsDeleting(true);

		const todosDbRef = ref(db, `todos/${id}`);

		remove(todosDbRef)
			.then((response) => {
				console.log('Todo delete:', response);
			})
			.finally(() => setIsDeleting(false));
		// setIsError(false);
	};

	return { requestDeleteTodo, isDeleting };
};
