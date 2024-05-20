import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useRequestAddTodos = ({ newTodo }) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTodo = () => {
		setIsCreating(true);

		const todosDbRef = ref(db, 'todos');

		push(todosDbRef, {
			title: newTodo,
			completed: false,
		})
			.then((response) => {
				console.log('Todo add:', response);
			})
			.finally(() => setIsCreating(false));
	};

	return { requestAddTodo, isCreating };
};
