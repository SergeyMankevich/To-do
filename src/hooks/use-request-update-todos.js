import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useRequestUpdateTodos = ({ id, updatedTodo, isCompleted }) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTodo = () => {
		setIsUpdating(true);

		const todosDbRef = ref(db, `todos/${id}`);

		set(todosDbRef, {
			title: updatedTodo,
			completed: isCompleted,
		})
			.then((response) => {
				console.log('Update', response);
			})
			.finally(() => setIsUpdating(false));
	};

	return { requestUpdateTodo, isUpdating };
};
