import { useRequestGetTodos, useRequestSortTodos } from './hooks';
import { MainInput } from './components/main-input';
import { Task } from './components/task';
import { HashLoader } from 'react-spinners';
import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [newTodo, setNewTodo] = useState('');
	const [isSorting, setIsSorting] = useState(false);
	const [isRemoving, setIsRemoving] = useState(false);

	const { isLoading, todos, isError } = useRequestGetTodos({
		newTodo,
		isSorting,
		isRemoving,
	});

	const { isSortedLoading, sortedTodos, isSortedError } = useRequestSortTodos({
		newTodo,
		isSorting,
		isRemoving,
	});
	return (
		<div className={styles.app}>
			<h1>To-do</h1>
			<MainInput
				newTodo={newTodo}
				setNewTodo={setNewTodo}
				isSorting={isSorting}
				setIsSorting={setIsSorting}
			/>
			{isLoading || isSortedLoading ? (
				<HashLoader className={styles.loader} color="#646464" />
			) : isError || isSortedError ? (
				<h2 className={styles.error}>{isError}</h2>
			) : isSorting ? (
				sortedTodos.map(([id, { title, completed }]) => (
					<Task
						id={id}
						title={title}
						completed={completed}
						isRemoving={isRemoving}
						setIsRemoving={setIsRemoving}
					/>
				))
			) : (
				todos.map(([id, { title, completed }]) => (
					<Task
						id={id}
						title={title}
						completed={completed}
						isRemoving={isRemoving}
						setIsRemoving={setIsRemoving}
					/>
				))
			)}
		</div>
	);
};
