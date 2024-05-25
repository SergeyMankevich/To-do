import { useRequestGetTodos } from './hooks';
import { Task } from './components/task';
import { HashLoader } from 'react-spinners';
import styles from './app.module.css';

export const App = () => {
	const { isLoading, todos, isError } = useRequestGetTodos();

	return (
		<div className={styles.app}>
			<h1>To-do</h1>
			{isLoading ? (
				<HashLoader className={styles.loader} color="#646464" />
			) : isError ? (
				<h2 className={styles.error}>{isError}</h2>
			) : (
				todos.map(({ id, title, completed }) => (
					<Task key={id} title={title} completed={completed} />
				))
			)}
		</div>
	);
};
